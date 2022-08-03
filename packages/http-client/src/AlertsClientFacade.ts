import { container } from './container/container'
import { TYPES } from './container/types'
import {
  IAlertsClient,
  listObjectResponse,
  ObjectFilters,
  singleObjectResponse,
  ClientConfig,
} from './lib/clients/alerts/AlertsClient.types'
import { Parser } from './lib/core/http-service/HttpService.types'
import { Newable } from './lib/util.types'

export class AlertsClientFacade {
  public static create(config: ClientConfig): IAlertsClient {
    container.rebind<ClientConfig>(TYPES.ClientConfig).toConstantValue(config)
    const client = container.get<IAlertsClient>(TYPES.IAlertsClient)
    return client
  }
  public static queryObjects<T>(
    objectFilters: ObjectFilters,
    parser?: Parser<listObjectResponse, T>,
    customModel?: Newable<T>,
    config?: ClientConfig
  ): Promise<T> {
    if (config)
      container.rebind<ClientConfig>(TYPES.ClientConfig).toConstantValue(config)
    const client = container.get<IAlertsClient>(TYPES.IAlertsClient)
    const result = client.queryObjects(objectFilters, parser, customModel)
    return result
  }
  public static querySingleObject<T>(
    aid: string,
    parser?: Parser<singleObjectResponse, T>,
    customModel?: Newable<T>,
    config?: ClientConfig
  ): Promise<T> {
    if (config)
      container.rebind<ClientConfig>(TYPES.ClientConfig).toConstantValue(config)
    const client = container.get<IAlertsClient>(TYPES.IAlertsClient)
    const result = client.querySingleObject(aid, parser, customModel)
    return result
  }
  public static getClientConfig(): ClientConfig {
    return container.get<ClientConfig>(TYPES.ClientConfig)
  }
}
