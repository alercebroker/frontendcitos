import { AxiosInstance } from 'axios'
import { inject, injectable } from 'inversify'
import { UserSchema } from '../../../../types'
import { HttpError } from '../../error'
import { IHttpRequest, IHttpService, Parser } from '../HttpService.types'

@injectable()
export class HttpServiceAuthMocks implements IHttpService {
  private testType: string
  private baseUrl: string
  private axiosInstance: AxiosInstance
  private accessToken: string

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
    switch (this.testType) {
      case 'success':
        return this.getSuccess<T, M>(request, parser)
      case 'clientError':
        return this.getClientError(request, parser)
      default:
        throw new Error('Test type unknown or not implemented')
    }
  }

  post<T, M>(request: IHttpRequest, parser: Parser<T, M>): Promise<M> {
    switch (this.testType) {
      case 'success':
        return this.postSuccess<T, M>(request, parser)
      case 'clientError':
        return this.postClientError(request, parser)
      default:
        throw new Error('Test type unknown or not implemented')
    }
  }

  put<T, M>(__: IHttpRequest, _: Parser<T, M>): Promise<M> {
    throw new Error('Method not implemented.')
  }

  delete(_: IHttpRequest): Promise<number> {
    throw new Error('Method not implemented.')
  }

  private getSuccess<T, M>(
    request: IHttpRequest,
    parser: Parser<T, M>
  ): Promise<M> {
    if (request.url === '/users/current/') {
      const user: UserSchema = {
        id: 1337,
        username: 'elpeter',
        email: 'elpeter@gmail.com',
        name: 'El',
        last_name: 'Peter',
        institution: 'ALeRCE',
        research_group: '',
        role: 'dev',
      }
      return new Promise((resolve) => {
        resolve(parser.parseTo(user as unknown as T))
      })
    }
    if (request.url.match(/users\/social\/o\/google-oauth2\/.*/)) {
      const res = {
        authorization_url: 'https://oauth.google.com/user',
      }
      return new Promise((resolve) => {
        resolve(parser.parseTo(res as unknown as T))
      })
    }

    throw new Error('Mock not implemented or request unknown')
  }

  private getClientError<T, M>(_: IHttpRequest, __: Parser<T, M>): Promise<M> {
    throw HttpError.fromStatus(401)
  }

  private postSuccess<T, M>(
    request: IHttpRequest,
    parser: Parser<T, M>
  ): Promise<M> {
    if (request.url === '/users/login/')
      return new Promise((resolve) => {
        resolve(
          parser.parseTo({
            access: 'eyeyey',
            refresh: 'eyeyeye0',
          } as unknown as T)
        )
      })
    if (request.url.match(/users\/social\/o\/google-oauth2\/.*/)) {
      const tokens = {
        access: 'oauth',
        refresh: 'oauth',
      }
      return Promise.resolve(parser.parseTo(tokens as unknown as T))
    }
    throw new Error('Mock not implemented or request unknown')
  }

  private postClientError<T, M>(_: IHttpRequest, __: Parser<T, M>): Promise<M> {
    throw HttpError.fromStatus(401)
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
