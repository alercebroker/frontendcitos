import { ContainerModule } from 'inversify'
import { StampsClient } from '../../lib/clients/stamps/StampsClient'
import {
  ClientConfig,
  IStampsClient,
} from '../../lib/clients/stamps/StampsClient.types'
import { TYPES } from '../types'

export const stampsModule = new ContainerModule((bind) => {
  bind<ClientConfig>(TYPES.StampsClientConfig).toConstantValue(
    {} as ClientConfig
  )
  bind<IStampsClient>(TYPES.IStampsClient).to(StampsClient)
})
