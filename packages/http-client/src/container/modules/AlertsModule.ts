import { ContainerModule, interfaces } from 'inversify'
import { AlertsClient, ClientConfig } from '../../lib/clients/alerts/AlertsClient'
import { IAlertsClient } from '../../lib/clients/alerts/AlertsClient.types'
import {
  HttpService,
  IHttpService,
} from '../../lib/core/http-service/HttpService'
import { TYPES } from '../types'

export const alertsModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<IHttpService>(TYPES.IHttpService).to(HttpService).inSingletonScope()
  bind<ClientConfig>(TYPES.ClientConfig).toConstantValue({} as ClientConfig)
  bind<IAlertsClient>(TYPES.IAlertsClient).to(AlertsClient)
})
