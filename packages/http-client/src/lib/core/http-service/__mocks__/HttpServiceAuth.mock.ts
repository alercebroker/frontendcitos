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

  put<T, M>(request: IHttpRequest, parser: Parser<T, M>): Promise<M> {
    throw new Error('Method not implemented.')
  }

  delete(request: IHttpRequest): Promise<number> {
    throw new Error('Method not implemented.')
  }

  private getSuccess<T, M>(
    request: IHttpRequest,
    parser: Parser<T, M>
  ): Promise<M> {
    console.log()
    if (request.url === '/users/current') {
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
    if (request.url === )
  }

  private getClientError<T, M>(_: IHttpRequest, __: Parser<T, M>): Promise<M> {
    throw HttpError.fromStatus(401)
  }

  private postSuccess<T, M>(
    request: IHttpRequest,
    parser: Parser<T, M>
  ): Promise<M> {
    if (request.url !== '/users')
    return new Promise((resolve) => {
      resolve(parser.parseTo({} as T))
    })
  }

  private postClientError<T, M>(_: IHttpRequest, __: Parser<T, M>): Promise<M> {
    throw HttpError.fromStatus(401)
  }

  setAccessToken(accessToken: string): void {
    this.accessToken = accessToken
  }
}
