import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'

import { HttpError } from './error/http-error'
import { ParseError } from './error/parse-error'

type IHttpRequest = {
  url: string
  config?: AxiosRequestConfig
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any
}

export type FailableParser<T, M> = (_: T) => M

type Parser<T, M> = {
  parseTo: FailableParser<T, M>
}

export interface IHttpService {
  get<T, M>(request: IHttpRequest, parser: Parser<T, M>): Promise<M>
  post<T, M>(request: IHttpRequest, parser: Parser<T, M>): Promise<M>
  put<T, M>(request: IHttpRequest, parser: Parser<T, M>): Promise<M>
  delete(request: IHttpRequest): Promise<number>
}

export class HttpService implements IHttpService {
  protected axiosInstance!: AxiosInstance
  private accessToken: string

  constructor(
    baseUrl: string,
    axiosInstance?: AxiosInstance,
    accessToken = ''
  ) {
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
   * Performs a GET http request.
   *
   * ### Example (es module)
   * ```js
   * import { HttpService } from '@alerce/http-client'
   * let client = HttpService("https://api.alerce.online/alerts/v1/")
   * const parseTo = (response => {
   *    return {
   *        oid: response.objectId,
   *        ra: response.meanRa,
   *        dec: response.meanDec
   *    }
   * })
   * client.get({url: "/objects" }, {parseTo})
   * ```
   *
   * @param {url: string, config: AxiosConfig} - an object containing url and axios config for the request.
   * @returns the parsed data according to the parseTo function.
   */
  public async get<T, M>(
    { url, config }: IHttpRequest,
    parser: Parser<T, M>
  ): Promise<M> {
    const response = await this.axiosInstance.get<T>(url, config)
    return this._parseFailable<T, M>(response.data, parser.parseTo)
  }

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
