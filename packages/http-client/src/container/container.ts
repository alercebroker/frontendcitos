import "reflect-metadata";
import { Container } from 'inversify'

import { alertsModule } from './modules/AlertsModule'

const container = new Container()

function loadContainerModules() {
  container.load(alertsModule)
}

export { container, loadContainerModules }
