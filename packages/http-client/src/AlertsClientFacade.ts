import { container } from './container/container'
import { TYPES } from './container/types'
import { ClientConfig } from './lib/clients/alerts/AlertsClient'
import {
  IAlertsClient,
  listObjectResponse,
  ObjectFilters,
  singleObjectResponse,
} from './lib/clients/alerts/AlertsClient.types'
import { Parser } from './lib/core/http-service/HttpService'
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
    customModel?: Newable<T>
  ): Promise<T> {
    const client = container.get<IAlertsClient>(TYPES.IAlertsClient)
    const result = client.queryObjects(objectFilters, parser, customModel)
    return result
  }
  public static querySingleObject<T>(
    aid: string,
    parser?: Parser<singleObjectResponse, T>,
    customModel?: Newable<T>
  ): Promise<T> {
    const client = container.get<IAlertsClient>(TYPES.IAlertsClient)
    const result = client.querySingleObject(aid, parser, customModel)
    return result
  }
}

