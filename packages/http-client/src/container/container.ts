import 'reflect-metadata'
import { Container } from 'inversify'

import { alertsModule } from './modules/AlertsModule'
import { authModule } from './modules/AuthModule'
import { stampsModule } from './modules/StampsModule'

const container = new Container()

function loadContainerModules() {
  container.load(alertsModule)
  container.load(authModule)
  container.load(stampsModule)
}

export { container, loadContainerModules }
