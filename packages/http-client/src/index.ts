import { loadContainerModules } from './container/container'

loadContainerModules()
import { AlertsClientFacade } from './AlertsClientFacade'
import { AuthClientFacade } from './AuthClientFacade'
import { StampsClientFacade } from './StampsClientFacade'
export * from './lib/core/http-service/HttpService'
export { isHttpError } from './lib/core/error/http-error'
export { isParseError } from './lib/core/error/parse-error'
export {
  serializeParams,
  serializeParamsReverse,
} from './lib/clients/alerts/utils'
export { b64Parser } from './lib/clients/stamps/utils'

export {
  AlertsClientFacade as AlertsClient,
  AuthClientFacade as AuthClient,
  StampsClientFacade as StampsClient,
}
