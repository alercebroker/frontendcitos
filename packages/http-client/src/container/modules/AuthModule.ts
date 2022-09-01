import { ContainerModule, interfaces } from 'inversify'
import { AuthClient } from '../../lib/clients/authentication/AuthClient'
import { IAuthClient } from '../../lib/clients/authentication/AuthClient.types'
import { TYPES } from '../types'

export const authModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<IAuthClient>(TYPES.IAuthClient).to(AuthClient)
})
