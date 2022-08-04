import { inject, injectable } from 'inversify'
import { TYPES } from '../../../container/types'
import { IHttpService, Parser } from '../../core/http-service/HttpService.types'
import { Newable } from '../../util.types'
import qs from 'qs'

import {
  ClientConfig,
  IAlertsClient,
  listObjectResponse,
  ObjectFilters,
  singleObjectResponse,
} from './AlertsClient.types'

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
        },
      }
    }
    return this.httpService.get<listObjectResponse, T>(
      {
        url: '/objects',
        config: {
          params: objectFilters,
          paramsSerializer: (params) => {
            return qs.stringify(params, {
              arrayFormat: 'repeat',
              skipNulls: true,
              filter: (_, value) => {
                if (value === '') {
                  return
                }
                return value
              },
            })
          },
        },
      },
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
        parseTo: (res: singleObjectResponse): T => {
          if (customModel) {
            return new customModel(res)
          }
          return res as unknown as T
        },
      }
    }
    return this.httpService.get(
      { url: '/object', config: { params: { aid } } },
      parser
    )
  }
}
