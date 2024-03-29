import { AxiosInstance } from 'axios'

// This interface must abstract the auth process
export type SessionTokens = {
  access: string
  refresh: string
}

export type Credentials = {
  username: string
  password: string
}

export type AuthClientConfig = {
  accessToken?: string
  baseUrl?: string
  headers?: {
    "Content-Type": string
  },
  withCredentials: boolean
}

export type UserSchema = {
  id: number
  username: string
  email: string
  name: string
  last_name: string
  institution: string
  role: string
  research_group: string
}

export interface IAuthClient {
  initClient(axiosInstance?: AxiosInstance): void
  signIn(credentials?: Credentials): Promise<SessionTokens>
  getOAuthURL(callbackUrl: string): Promise<string>
  signInOAuth2(code: string, state: string): Promise<SessionTokens & { user: string }>
  verifySession(session: SessionTokens): Promise<[UserSchema, SessionTokens]>
}
