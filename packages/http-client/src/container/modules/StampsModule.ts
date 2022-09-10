import { ContainerModule } from 'inversify'
import { StampsClient } from '../../lib/clients/stamps/StampsClient'
import {
  ClientConfig,
  IStampsClient,
} from '../../lib/clients/stamps/StampsClient.types'
import { HttpService } from '../../lib/core/http-service/HttpService'
import { IHttpService } from '../../types'
import { TYPES } from '../types'

export const stampsModule = new ContainerModule((bind) => {
  bind<IHttpService>(TYPES.IHttpService).to(HttpService).inSingletonScope()
  bind<ClientConfig>(TYPES.StampsClientConfig).toConstantValue(
    {} as ClientConfig
  )
  bind<IStampsClient>(TYPES.IStampsClient).to(StampsClient)
})
