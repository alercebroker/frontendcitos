import { AxiosInstance } from 'axios'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../../container/types'
import { IHttpService, Parser } from '../../core/http-service/HttpService.types'
import { Newable } from '../../util.types'
import { Blob } from 'buffer'
import {
  Avro,
  ClientConfig,
  GetAvroParams,
  IStampsClient,
} from './StampsClient.types'

@injectable()
export class StampsClient implements IStampsClient {
  private httpService: IHttpService
  private config: ClientConfig

  constructor(
    @inject(TYPES.IHttpService) httpService: IHttpService,
    @inject(TYPES.StampsClientConfig) config: ClientConfig
  ) {
    this.config = config
    this.httpService = httpService
  }

  getStamp<T>(params: GetAvroParams, parser: Parser<Blob, T>): Promise<T> {
    if (!parser) {
      parser = {
        parseTo: (res: Blob): T => {
          return res as unknown as T
        },
      }
    }
    return this.httpService.get<Blob, T>(
      { url: '/get_stamp', config: { params, responseType: 'blob' } },
      parser
    )
  }

  getAvroJson<T>(
    params: GetAvroParams,
    parser?: Parser<Avro, T>,
    customModel?: Newable<T>
  ): Promise<T> {
    if (!parser) {
      parser = {
        parseTo: (res: Avro): T => {
          if (customModel) {
            return new customModel(res)
          }
          return res as unknown as T
        },
      }
    }
    return this.httpService.get<Avro, T>(
      { url: '/get_avro_info', config: { params } },
      parser
    )
  }

  initClient(axiosInstance?: AxiosInstance): void {
    const baseUrl = this.config.baseUrl
    this.httpService.initClient(baseUrl, axiosInstance)
  }
}
