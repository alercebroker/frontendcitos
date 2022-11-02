import { ContainerModule, interfaces } from 'inversify'
import { IReportsClient, ReportsClientConfig } from '../../lib/clients/reports/ReportsClient.types'
import { TYPES } from '../types'

export const reportsModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<ReportsClientConfig>(TYPES.ReportsClientConfig).toConstantValue(
    {} as ReportsClientConfig
  ),
  bind<IReportsClient>(TYPES.IReportsClient)
})
