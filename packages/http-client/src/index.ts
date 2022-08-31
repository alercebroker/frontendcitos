import { AlertsClientFacade } from './AlertsClientFacade'
import { loadContainerModules } from './container/container'

export * from './lib/core/http-service/HttpService'
export { isHttpError } from './lib/core/error/http-error'
export { isParseError } from './lib/core/error/parse-error'
export {
  serializeParams,
  serializeParamsReverse,
} from './lib/clients/alerts/utils'

loadContainerModules()

export { AlertsClientFacade as AlertsClient }
