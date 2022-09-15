import { AxiosInstance } from 'axios'
import { inject, injectable } from 'inversify'
import { HttpError } from '../../error'
import { IHttpRequest, IHttpService, Parser } from '../HttpService.types'
import { Blob } from 'buffer'

@injectable()
export class HttpServiceStampsMocks implements IHttpService {
  private baseUrl: string
  private axiosInstance: AxiosInstance
  private accessToken: string
  private testType: string

  constructor(@inject('testType') testType: string) {
    this.testType = testType
  }

  initClient(
    baseUrl: string,
    axiosInstance?: AxiosInstance,
    accessToken?: string
  ): void {
    this.baseUrl = baseUrl
    this.axiosInstance = axiosInstance
    this.accessToken = accessToken
  }

  get<T, M>(request: IHttpRequest, parser: Parser<T, M>): Promise<M> {
    if (this.testType == 'success') {
      return this.getSuccess(request, parser)
    }
    if (this.testType == 'clientError') {
      return this.getClientError(request, parser)
    }
    throw new Error('testType unknown')
  }

  getClientError<T, M>(_: IHttpRequest, __: Parser<T, M>): Promise<M> {
    return Promise.reject(HttpError.fromStatus(404))
  }

  getSuccess<T, M>(request: IHttpRequest, parser: Parser<T, M>): Promise<M> {
    if (request.url == '/get_avro_info') {
      const res = {
        candidate: {
          candid: '123456',
        },
      }
      return new Promise((resolve) => {
        resolve(parser.parseTo(res as unknown as T))
      })
    }
    if (request.url == '/get_stamp') {
      const res = new Blob([new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9])], {
        type: 'image/png',
      })
      return new Promise((resolve) => {
        resolve(parser.parseTo(res as unknown as T))
      })
    }
    throw new Error('unknown endpoint')
  }
  post<T, M>(_request: IHttpRequest, _parser: Parser<T, M>): Promise<M> {
    throw new Error('Method not implemented.')
  }
  put<T, M>(_request: IHttpRequest, _parser: Parser<T, M>): Promise<M> {
    throw new Error('Method not implemented.')
  }
  delete(_request: IHttpRequest): Promise<number> {
    throw new Error('Method not implemented.')
  }
  setAccessToken(_accessToken: string): void {
    throw new Error('Method not implemented.')
  }
  getBaseUrl(): string {
    return this.baseUrl
  }
  getAxiosInstance(): AxiosInstance {
    return this.axiosInstance
  }
  getaccessToken(): string {
    return this.accessToken
  }
}
