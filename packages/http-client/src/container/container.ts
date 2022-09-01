import "reflect-metadata";
import { Container } from 'inversify'

import { alertsModule } from './modules/AlertsModule'
import { authModule } from "./modules/AuthModule";

const container = new Container()

function loadContainerModules() {
  container.load(alertsModule)
  container.load(authModule);
}

export { container, loadContainerModules }
