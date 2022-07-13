/**
 * @module http-service
 */

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import { injectable } from 'inversify'

import { HttpError } from '../error/http-error'
import { ParseError } from '../error/parse-error'

/**
 * HttpRequest Interface
 */
export type IHttpRequest = {
  url: string
  config?: AxiosRequestConfig
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any
}

/**
 * FailableParser type
 */
export type FailableParser<T, M> = (_: T) => M

/**
 * parser type
 */
export type Parser<T, M> = {
  parseTo: FailableParser<T, M>
}

/**
 * http service interface
 */
export interface IHttpService {
  connect(
    baseUrl: string,
    axiosInstance?: AxiosInstance,
    accessToken?: string
  ): void
  get<T, M>(request: IHttpRequest, parser: Parser<T, M>): Promise<M>
  post<T, M>(request: IHttpRequest, parser: Parser<T, M>): Promise<M>
  put<T, M>(request: IHttpRequest, parser: Parser<T, M>): Promise<M>
  delete(request: IHttpRequest): Promise<number>
  setAccessToken(accessToken: string): void
}

/**
 * http service class
 */
@injectable()
export class HttpService implements IHttpService {
  protected axiosInstance!: AxiosInstance
  private accessToken: string

  /**
   * http service constructor
   * @param baseUrl - base url for axsios instance
   * @param axiosInstance - optional axios instance to use instead of creating a new one
   * @param accessToken - token for authentication with the API
   */
  connect(baseUrl: string, axiosInstance?: AxiosInstance, accessToken = '') {
    if (axiosInstance) {
      this.axiosInstance = axiosInstance
    } else {
      this.axiosInstance = axios.create({
        baseURL: baseUrl,
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
    }
    this.accessToken = accessToken
    this._initializeRequestInterceptor()
    this._initializeResponseInterceptor()
  }

  public setAccessToken(accessToken: string) {
    this.accessToken = accessToken
  }

  /**
   * Performs a GET http request and parses the result.
   *
   * ### Example usage
   * ```js
   *  import { HttpService } from 'http-client
   *  const client = HttpService('https://api.alerce.online/alerts/v1/')
   *  const parseTo = (response) => {
   *    return {
   *      oid: response.objectId,
   *      ra: response.meanRa,
   *      dec: response.meanDec,
   *    }
   *  }
   *  const filterParams = { ra: 37, dec: -14 }
   *  const result = await client.get(
   *    { url: '/objects', config: { params: filterParams } },
   *    { parseTo }
   *  )
   * ```
   *
   * @param requestObject - an object containing url and axios config for the request.
   * @param parser - object containing the parser function for the result.
   * @returns the parsed data according to the parseTo function.
   */
  public async get<T, M>(
    { url, config }: IHttpRequest,
    parser: Parser<T, M>
  ): Promise<M> {
    const response = await this.axiosInstance.get<T>(url, config)
    return this._parseFailable<T, M>(response.data, parser.parseTo)
  }

  /**
   * Performs a POST http request and parses the result.
   *
   * @param requestObject - an object containing url and axios config for the request.
   * @param parser - object containing the parser function for the result.
   * @returns the parsed data according to the parseTo function.
   */
  public async post<T, M>(
    { url, data, config }: IHttpRequest,
    parser: Parser<T, M>
  ): Promise<M> {
    const response = await this.axiosInstance.post<T>(url, data, config)
    return this._parseFailable<T, M>(response.data, parser.parseTo)
  }

  public async delete<T>({ url, config }: IHttpRequest): Promise<number> {
    const response = await this.axiosInstance.delete<T>(url, config)
    return response.status
  }

  public async put<T, M>(
    { url, data, config }: IHttpRequest,
    parser: Parser<T, M>
  ): Promise<M> {
    const response = await this.axiosInstance.put<T>(url, data, config)
    return this._parseFailable<T, M>(response.data, parser.parseTo)
  }
  private _parseFailable<T, M>(data: T, parser: FailableParser<T, M>): M {
    try {
      return parser(data)
    } catch (error) {
      throw new ParseError(error.message)
    }
  }

  private _initializeRequestInterceptor() {
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) =>
        this._handleRequest(config, this.accessToken),
      (error: AxiosError) => this._handleError(error)
    )
  }

  private _initializeResponseInterceptor() {
    this.axiosInstance.interceptors.response.use(
      this._handleResponse,
      (error: AxiosError) => {
        this._handleError(error)
      }
    )
  }

  private _handleResponse(response: AxiosResponse) {
    return response
  }

  private _handleRequest(config: AxiosRequestConfig, accessToken) {
    if (accessToken) {
      config.headers = { Authorization: 'Bearer ' + accessToken }
    }
    return config
  }

  private _handleError(error: AxiosError): void {
    if (error.response) {
      throw HttpError.fromStatus(
        error.response.status,
        error.response.data,
        error.response.statusText
      )
    } else if (error.code === 'ECONNABORTED') {
      throw HttpError.fromStatus(
        408,
        { detail: 'ECONNABORTED' },
        'Timeout Error: Connection Aborted'
      )
    }
    throw error
  }
}
