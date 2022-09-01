import { AxiosInstance } from 'axios'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../../container/types'
import { ClientConfig, IHttpService } from '../../../types'
import {
  Credentials,
  IAuthClient,
  SessionTokens,
  UserSchema,
} from './AuthClient.types'

@injectable()
export class AuthClient implements IAuthClient {
  private _httpService: IHttpService
  private _config: ClientConfig

  constructor(
    @inject(TYPES.IHttpService) httpService: IHttpService,
    @inject(TYPES.ClientConfig) config: ClientConfig
  ) {
    this._config = config
    this._httpService = httpService
  }

  private defaultParser<T>(res: T): T {
    return res
  }

  private getCurrentUser(): Promise<UserSchema> {
    return this._httpService.get(
      { url: '/users/current/' },
      { parseTo: this.defaultParser<UserSchema> }
    )
  }

  initClient(axiosInstance?: AxiosInstance): void {
    const baseUrl = this._config.baseUrl || 'https://users.alerce.online'
    this._httpService.initClient(baseUrl, axiosInstance)
  }

  signIn(credentials?: Credentials): Promise<SessionTokens> {
    return this._httpService.post(
      { url: '/users/login/', data: credentials },
      { parseTo: this.defaultParser<SessionTokens> }
    )
  }
  verifySession(session: SessionTokens): Promise<UserSchema> {
    this._httpService.setAccessToken(session.access)

    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.getCurrentUser();
        resolve(response);
      } catch (e) {
        console.log(e)
        //check if session expired
        //maybe refresh...
        reject(new Error("Session expired, please login again."))
      }
    })
  }
  signInOAuth2(): void {
    throw new Error('Method not implemented.')
  }
  verifyOAuthSession(): boolean {
    throw new Error('Method not implemented.')
  }
}
