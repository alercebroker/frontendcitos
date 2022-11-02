import { AxiosInstance } from 'axios'
import { Newable, Parser } from '../../../types'

export type ReportEntity = {
  id?: number
  date: string
  object: string
  solved: boolean
  source: string
  observation: string
  report_type: string
  owner: string
}

export type ReportListResponse = {
  count: number
  next: string
  previous: string
  results: ReportEntity[]
}

export type ReportFilters = {}

export interface ReportsClientConfig {
  baseUrl?: string
  accessToken?: string
}

export interface IReportsClient {
  initClient(axiosInstance?: AxiosInstance): void
  queryReports<T>(
    filters: ReportFilters,
    parser?: Parser<ReportListResponse, T>,
    customModel?: Newable<T>
  ): Promise<T>
  queryReport<T>(
    id: number,
    parser?: Parser<ReportEntity, T>,
    customModel?: Newable<T>
  ): Promise<T>
}
