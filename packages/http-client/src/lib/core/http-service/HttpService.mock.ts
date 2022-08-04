import { AxiosInstance } from 'axios'
import { inject, injectable } from 'inversify'
import {
  DetectionItem,
  listObjectResponse,
  singleObjectResponse,
} from '../../clients/alerts/AlertsClient.types'
import { HttpError } from '../error/http-error'
import { IHttpRequest, IHttpService, Parser } from './HttpService.types'

@injectable()
export class HttpServiceObjectMocks implements IHttpService {
  private baseUrl: string
  private axiosInstance: AxiosInstance
  private accessToken: string
  private testType: string

  constructor(@inject('testType') testType: string) {
    this.testType = testType
  }

  connect(
    baseUrl: string,
    axiosInstance?: AxiosInstance,
    accessToken?: string
  ): void {
    this.baseUrl = baseUrl
    this.axiosInstance = axiosInstance
    this.accessToken = accessToken
  }
  get<T, M>(request: IHttpRequest, parser: Parser<T, M>): Promise<M> {
    if (this.testType === 'success') {
      return this.getSuccess<T, M>(request, parser)
    } else if (this.testType === 'clientError') {
      return this.getClientError(request, parser)
    } else if (this.testType === 'serverError') {
      return this.getServerError(request, parser)
    } else if (this.testType === 'parseError') {
      return this.getParseError(request, parser)
    }
    throw new Error('testType unknown')
  }
  getParseError<T, M>(_: IHttpRequest, __: Parser<T, M>): Promise<M> {
    throw new Error('Method not implemented.')
  }
  getServerError<T, M>(_: IHttpRequest, __: Parser<T, M>): Promise<M> {
    throw HttpError.fromStatus(500)
  }
  getClientError<T, M>(_: IHttpRequest, __: Parser<T, M>): Promise<M> {
    throw new Error('Method not implemented.')
  }
  getSuccess<T, M>(request: IHttpRequest, parser: Parser<T, M>): Promise<M> {
    if (request.url === '/objects') {
      const items: singleObjectResponse[] = [
        {
          aid: 'aid123',
          oid: ['oid123'],
          ndet: 1,
          firstmjd: 1,
          lastmjd: 1,
          meanra: 1,
          meandec: 1,
        },
      ]
      const listResponse: listObjectResponse = {
        total: items.length,
        page: 1,
        next: 1,
        has_next: false,
        prev: 1,
        has_prev: false,
        items: items,
      }
      return new Promise((resolve) => {
        resolve(parser.parseTo(listResponse as unknown as T))
      })
    }
    if (request.url === '/object') {
      const res: singleObjectResponse = {
        aid: 'aid123',
        oid: ['oid123'],
        ndet: 1,
        firstmjd: 1,
        lastmjd: 1,
        meanra: 1,
        meandec: 1,
      }
      return new Promise((resolve) => {
        resolve(parser.parseTo(res as unknown as T))
      })
    }
    if (request.url.match(/object\/\w+\/detections/)) {
      const res: DetectionItem[] = [
        {
          mjd: 55050,
          candid: "candid",
          magpsf: 20.9,
          fid: 2,
          ra: 17,
          dec: 55
        }
      ]
      return new Promise((resolve) => {
        resolve(parser.parseTo(res as unknown as T))
      })
    }

    throw new Error('unknown endpoint')
  }
  post<T, M>(_: IHttpRequest, __: Parser<T, M>): Promise<M> {
    throw new Error('Method not implemented.')
  }
  put<T, M>(_: IHttpRequest, __: Parser<T, M>): Promise<M> {
    throw new Error('Method not implemented.')
  }
  delete(_: IHttpRequest): Promise<number> {
    throw new Error('Method not implemented.')
  }
  setAccessToken(accessToken: string): void {
    this.accessToken = accessToken
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
