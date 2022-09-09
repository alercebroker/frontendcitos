import { AuthClient } from '../../../..'
import { SessionTokens, UserSchema } from '../AuthClient.types'

export function exampleCurrentUser(): Promise<UserSchema> {
  const tokens = { access: 'eyeye', refresh: 'eyeye0' }
  return AuthClient.verifySession(tokens).then(([user, _]) => {
    return user
  })
}

export function exampleCredentialsLogin(): Promise<SessionTokens> {
  return AuthClient.signIn({ username: 'elpeter', password: '1234' })
}

export function exampleGetOauthUrl(): Promise<string> {
  return AuthClient.getOAuth2Url('https://alerce.online/oauth')
}

export function exampleOauthLogin(): Promise<SessionTokens> {
  return AuthClient.signInWithOAuth2('code123', 'state123')
}
