import { inject, injectable } from 'inversify'
import { TYPES } from '../../../container/types'
import { IHttpService, Parser } from '../../core/http-service/HttpService'
import { Newable } from '../../util.types'

import {
  IAlertsClient,
  listObjectResponse,
  ObjectFilters,
  singleObjectResponse,
} from './AlertsClient.types'

export interface ClientConfig {
  baseUrl?: string
  accessToken?: string
}

@injectable()
export class AlertsClient implements IAlertsClient {
  private httpService: IHttpService
  constructor(
    @inject(TYPES.IHttpService) httpService: IHttpService,
    @inject(TYPES.ClientConfig) config: ClientConfig
  ) {
    const baseUrl = config.baseUrl || 'https://api.alerce.online/alerts/v2'
    this.httpService = httpService
    this.httpService.connect(baseUrl)
  }

  queryObjects<T>(
    objectFilters: ObjectFilters,
    parser?: Parser<listObjectResponse, T>,
    customModel?: Newable<T>
  ): Promise<T> {
    if (!parser) {
      parser = {
        parseTo: (res: listObjectResponse): T => {
          if (customModel) {
            return new customModel(res)
          }
          return res as unknown as T
        }
      }
    }
    return this.httpService.get<listObjectResponse, T>(
      { url: '/objects', config: { params: objectFilters } },
      parser
    )
  }

  querySingleObject<T>(
    aid: string,
    parser?: Parser<singleObjectResponse, T>,
    customModel?: Newable<T>
  ): Promise<T> {
    if (!parser) {
      parser = {
        parseTo: (res: singleObjectResponse): T => new customModel(res),
      }
    }
    return this.httpService.get(
      { url: '/object', config: { params: { aid } } },
      parser
    )
  }
}
