import 'reflect-metadata'
import { Container } from 'inversify'

import { alertsModule } from './modules/AlertsModule'
import { authModule } from './modules/AuthModule'
import { stampsModule } from './modules/StampsModule'
import { httpModule } from './modules/HttpModule'

const container = new Container()

function loadContainerModules() {
  container.load(httpModule)
  container.load(alertsModule)
  container.load(authModule)
  container.load(stampsModule)
}

export { container, loadContainerModules }
