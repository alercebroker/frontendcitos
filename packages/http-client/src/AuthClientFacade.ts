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
  return client
}

export class AuthClientFacade {
  public static create(config: ClientConfig) {
    return getConfiguredClient(config);
  }
  public static signIn(credentials: Credentials, config?: ClientConfig) {
    const client = getConfiguredClient(config);
    client.initClient()
    return client.signIn(credentials)
  }
  public static verifySession(session: SessionTokens, config?: ClientConfig) {
    const client = getConfiguredClient(config);
    client.initClient()
    return client.verifySession(session)
  }
}
