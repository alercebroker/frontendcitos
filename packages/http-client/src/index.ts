import { AlertsClientFacade } from './AlertsClientFacade'
import { loadContainerModules } from './container/container'

export * from './lib/core/error/http-error'
export * from './lib/core/error/parse-error'
export * from './lib/core/http-service/HttpService'
export * from './lib/clients/alerts/AlertsClient.types'

loadContainerModules()

export { AlertsClientFacade as AlertsClient }
