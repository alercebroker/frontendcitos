import { container } from './container/container'
import { TYPES } from './container/types'
import {
  Credentials,
  IAuthClient,
  SessionTokens,
} from './lib/clients/authentication/AuthClient.types'
import { ClientConfig } from './types'

function getConfiguredClient(config?: ClientConfig) {
  if (config)
    container.rebind<ClientConfig>(TYPES.ClientConfig).toConstantValue(config)
  const client = container.get<IAuthClient>(TYPES.IAuthClient)
  client.initClient();
  return client
}

export class AuthClientFacade {
  public static create(config: ClientConfig) {
    return getConfiguredClient(config);
  }
  public static signIn(credentials: Credentials, config?: ClientConfig) {
    const client = getConfiguredClient(config);
    return client.signIn(credentials)
  }
  public static verifySession(session: SessionTokens, config?: ClientConfig) {
    const client = getConfiguredClient(config);
    return client.verifySession(session)
  }
  public static getOAuth2Url(callbackUrl: string, config?: ClientConfig): Promise<string> {
    const client = getConfiguredClient(config);
    return client.getOAuthURL(callbackUrl);
  }
  public static signInWithOAuth2(code: string, state: string, config?: ClientConfig) {
    const client = getConfiguredClient(config);
    return client.signInOAuth2(code, state);
  }
}
