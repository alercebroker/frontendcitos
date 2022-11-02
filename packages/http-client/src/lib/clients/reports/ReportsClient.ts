import { AxiosInstance } from 'axios'
import { inject } from 'inversify'
import { TYPES } from '../../../container/types'
import { IHttpService, Newable, Parser } from '../../../types'
import {
  IReportsClient,
  ReportEntity,
  ReportFilters,
  ReportListResponse,
  ReportsClientConfig,
} from './ReportsClient.types'
import { serializeParams } from './utils'

export class ReportsClient implements IReportsClient {
  private _httpService: IHttpService
  private _config: ReportsClientConfig
  constructor(
    @inject(TYPES.IHttpService) httpService: IHttpService,
    @inject(TYPES.ReportsClientConfig) config: ReportsClientConfig
  ) {
    this._config = config
    this._httpService = httpService
  }

  initClient(axiosInstance?: AxiosInstance): void {
    const baseUrl = this._config.baseUrl ?? 'https://users.alerce.online'
    this._httpService.initClient(
      baseUrl,
      axiosInstance,
      this._config.accessToken
    )
  }

  queryReports<T>(
    filters: ReportFilters,
    parser?: Parser<ReportListResponse, T>,
    customModel?: Newable<T>
  ): Promise<T> {
    if (!parser) {
      parser = {
        parseTo: (res: ReportListResponse): T => {
          if (customModel) return new customModel(res)
          return res as unknown as T
        },
      }
    }
    return this._httpService.get<ReportListResponse, T>(
      {
        url: '/reports/',
        config: {
          params: filters,
          paramsSerializer: serializeParams,
        },
      },
      parser
    )
  }

  queryReport<T>(
    id: number,
    parser?: Parser<ReportEntity, T>,
    customModel?: Newable<T>
  ): Promise<T> {
    console.log(id, parser, customModel)
    throw new Error('Method not implemented.')
  }
}
