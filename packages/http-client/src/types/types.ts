import {
  ClientConfig,
  IAlertsClient,
  listObjectResponse,
  ObjectFilters,
  singleObjectResponse,
  objectListItem,
} from '../lib/clients/alerts/AlertsClient.types'
import {
  Parser,
  IHttpRequest,
  FailableParser,
  IHttpService,
} from '../lib/core/http-service/HttpService.types'
import { type Newable } from '../lib/util.types'

export * from '../lib/core/error'

// export declare class AlertsClient {
//   public static create(config: ClientConfig): IAlertsClient
//   public static queryObjects<T>(
//     objectFilters: ObjectFilters,
//     parser?: Parser<listObjectResponse, T>,
//     customModel?: Newable<T>,
//     config?: ClientConfig
//   ): Promise<T>
//   public static querySingleObject<T>(
//     aid: string,
//     parser?: Parser<singleObjectResponse, T>,
//     customModel?: Newable<T>,
//     config?: ClientConfig
//   ): Promise<T>
//   public static getClientConfig(): ClientConfig
// }

export {
  ClientConfig,
  IAlertsClient,
  listObjectResponse,
  ObjectFilters,
  singleObjectResponse,
  Parser,
  Newable,
  IHttpRequest,
  FailableParser,
  IHttpService,
  objectListItem,
}
