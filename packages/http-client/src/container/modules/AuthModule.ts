import { ContainerModule, interfaces } from 'inversify'
import { AuthClient } from '../../lib/clients/authentication/AuthClient'
import {
  AuthClientConfig,
  IAuthClient,
} from '../../lib/clients/authentication/AuthClient.types'
import { TYPES } from '../types'

export const authModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<AuthClientConfig>(TYPES.AuthClientConfig).toConstantValue({
    withCredentials: true,
  } as AuthClientConfig)
  bind<IAuthClient>(TYPES.IAuthClient).to(AuthClient)
})
