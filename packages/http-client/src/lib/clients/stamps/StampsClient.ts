import { AxiosInstance } from 'axios'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../../container/types'
import { IHttpService, Parser } from '../../core/http-service/HttpService.types'
import { Newable } from '../../util.types'
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

  getAvroJson<T>(
    params: GetAvroParams,
    parser?: Parser<Avro, T>,
    customModel?: Newable<T>
  ): Promise<T> {
    throw new Error('Method not implemented.')
  }

  initClient(axiosInstance?: AxiosInstance): void {
    const baseUrl = this.config.baseUrl
    this.httpService.initClient(baseUrl, axiosInstance)
  }
}
