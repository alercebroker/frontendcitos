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

  private refreshSession(refreshToken: string): Promise<string> {
    return new Promise((resolve) => {
      this._httpService
        .post(
          { url: '/users/refresh/', data: { refresh: refreshToken } },
          { parseTo: (res: { access: string }) => res.access }
        )
        .then((response) => {
          resolve(response)
        })
        .catch(() => {
          resolve('')
        })
    })
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

  signIn(credentials: Credentials): Promise<SessionTokens> {
    return this._httpService.post(
      { url: '/users/login/', data: credentials },
      { parseTo: this.defaultParser<SessionTokens> }
    )
  }
  
  verifySession(session: SessionTokens): Promise<[UserSchema, SessionTokens]> {
    this._httpService.setAccessToken(session.access)

    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.getCurrentUser()
        resolve([response, session])
      } catch (e) {
        console.log(JSON.stringify(e), typeof e)
        //unknown error
        if (e.status !== 401) reject(new Error('Unknown error'))

        const newAccessToken = await this.refreshSession(session.refresh)
        if (newAccessToken === '')
          reject(new Error('Session expired, please login again.'))
        this._httpService.setAccessToken(newAccessToken)
        const response = await this.getCurrentUser()
        resolve([
          response,
          {
            access: newAccessToken,
            refresh: session.refresh,
          },
        ])
      }
    })
  }

  getOAuthURL(callbackUrl: string): Promise<string> {
    return this._httpService
      .get(
        {
          url: `/users/social/o/google-oauth2/?redirect_uri=${callbackUrl}`,
        },
        { parseTo: this.defaultParser<{ authorization_url: string }> }
      )
      .then((auth) => auth.authorization_url)
  }

  signInOAuth2(
    code: string,
    state: string
  ): Promise<SessionTokens & { user: string }> {
    const formData = new URLSearchParams()
    formData.append('code', code)
    formData.append('state', state)
    return this._httpService.post(
      {
        url: '/users/social/o/google-oauth2/',
        data: formData,
      },
      {
        parseTo: this.defaultParser<SessionTokens & { user: string }>,
      }
    )
  }
}
