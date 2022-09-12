import { AxiosInstance } from 'axios'
import { inject, injectable } from 'inversify'
import {
  DetectionItem,
  listObjectResponse,
  singleObjectResponse,
} from '../../../clients/alerts/AlertsClient.types'
import { HttpError } from '../../error/http-error'
import { IHttpRequest, IHttpService, Parser } from '../HttpService.types'

@injectable()
export class HttpServiceAlertsMocks implements IHttpService {
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
          probabilities: [],
          magstats: [],
          xmatch: [],
          features: [],
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
    if (request.url.match(/objects\/\w+\/detections/)) {
      const res: DetectionItem[] = [
        {
          aid: 'AID321',
          oid: 'ZTF4629',
          tid: 'ZTF',
          mjd: 55050,
          candid: 'candid',
          fid: 2,
          isdiffpos: -1,
          mag: 20.9,
          e_mag: 0.01,
          ra: 17,
          dec: 55,
          rb: 55.55,
          rbversion: 'v1',
          has_stamp: false,
          corrected: true,
          step_id_corr: 'asd',
          parent_candid: 'pcandid',
        },
      ]
      return new Promise((resolve) => {
        resolve(parser.parseTo(res as unknown as T))
      })
    }
    if (request.url.match(/objects\/\w+/)) {
      const res: singleObjectResponse = {
        aid: 'aid123',
        oid: ['oid123'],
        ndet: 1,
        firstmjd: 1,
        lastmjd: 1,
        meanra: 1,
        meandec: 1,
        probabilities: [],
        magstats: [],
        xmatch: [],
        features: [],
      }
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
