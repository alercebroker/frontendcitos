import { ContainerModule, interfaces } from 'inversify'
import { AlertsClient } from '../../lib/clients/alerts/AlertsClient'
import {
  IAlertsClient,
  ClientConfig,
} from '../../lib/clients/alerts/AlertsClient.types'
import { TYPES } from '../types'

export const alertsModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<ClientConfig>(TYPES.ClientConfig).toConstantValue({} as ClientConfig)
  bind<IAlertsClient>(TYPES.IAlertsClient).to(AlertsClient)
})
