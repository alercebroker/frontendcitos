import { inject, injectable } from 'inversify'
import { TYPES } from '../../../container/types'
import { IHttpService } from '../../../types'
import {
  Credentials,
  IAuthClient,
  SessionTokens,
  UserSchema,
  AuthClientConfig,
} from './AuthClient.types'

@injectable()
export class AuthClient implements IAuthClient {
  private _httpService: IHttpService
  private _config: AuthClientConfig

  constructor(
    @inject(TYPES.IHttpService) httpService: IHttpService,
    @inject(TYPES.AuthClientConfig) config: AuthClientConfig
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
      { url: '/users/current/', config: this._config },
      { parseTo: this.defaultParser<UserSchema> }
    )
  }

  initClient(): void {
    const baseUrl = this._config.baseUrl || 'https://users.alerce.online'
    this._httpService.initClient(baseUrl)
  }

  signIn(credentials: Credentials): Promise<SessionTokens> {
    return this._httpService.post(
      { url: '/users/login/', data: credentials, config: this._config },
      { parseTo: this.defaultParser<SessionTokens> }
    )
  }

  verifySession(session: SessionTokens): Promise<[UserSchema, SessionTokens]> {
    this._httpService.setAccessToken(session.access)

    return new Promise(async (resolve, reject) => {
      if (session.access === '') reject('Not active session found')
      try {
        const response = await this.getCurrentUser()
        resolve([response, session])
      } catch (e) {
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
          config: this._config,
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
        config: this._config,
      },
      {
        parseTo: this.defaultParser<SessionTokens & { user: string }>,
      }
    )
  }
}
