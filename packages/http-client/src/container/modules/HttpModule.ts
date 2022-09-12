import { ContainerModule } from 'inversify'
import { HttpService } from '../../lib/core/http-service/HttpService'
import { IHttpService } from '../../types'
import { TYPES } from '../types'

export const httpModule = new ContainerModule((bind) => {
  bind<IHttpService>(TYPES.IHttpService).to(HttpService).inSingletonScope()
})
