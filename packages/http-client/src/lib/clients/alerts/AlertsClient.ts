import { inject, injectable } from 'inversify'
import { TYPES } from '../../../container/types'
import { IHttpService, Parser } from '../../core/http-service/HttpService.types'
import { Newable } from '../../util.types'
import {
  ClientConfig,
  DetectionItem,
  IAlertsClient,
  listObjectResponse,
  ObjectFilters,
  singleObjectResponse,
} from './AlertsClient.types'
import { AxiosInstance } from 'axios'
import { serializeParams } from './utils'

@injectable()
export class AlertsClient implements IAlertsClient {
  private httpService: IHttpService
  private config: ClientConfig
  constructor(
    @inject(TYPES.IHttpService) httpService: IHttpService,
    @inject(TYPES.ClientConfig) config: ClientConfig
  ) {
    this.config = config
    this.httpService = httpService
  }

  initClient(axiosInstance?: AxiosInstance) {
    const baseUrl = this.config.baseUrl || 'https://api.alerce.online/alerts/v2'
    this.httpService.initClient(baseUrl, axiosInstance)
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
          paramsSerializer: serializeParams,
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

  queryDetections<T>(
    aid: string,
    parser?: Parser<DetectionItem[], T>,
    customModel?: Newable<T>
  ): Promise<T> {
    if (!parser) {
      parser = {
        parseTo: (res: DetectionItem[]): T =>
          customModel ? new customModel(res) : (res as unknown as T),
      }
    }
    return this.httpService.get<DetectionItem[], T>(
      {
        url: `/objects/${aid}/detections`,
      },
      parser
    )
  }
}
