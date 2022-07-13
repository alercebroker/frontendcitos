import { Parser } from '../../core/http-service/HttpService'
import { Newable } from '../../util.types'

export type ObjectFilters = {
  aid?: string[]
  oid?: string[]
  ndet?: number[]
  firstmjd?: number[]
  lastmjd?: number[]
  ra?: number
  dec?: number
  radius?: number
  page?: number
  page_size?: number
  count?: string
  order_by?: string
  order_mode?: string
}

export type objectListItem = {
  aid: string
  oid: string[]
  ndet: number
  firstmjd: number
  lastmjd: number
  meanra: number
  meandec: number
}

export type listObjectResponse = {
  total: number
  page: number
  next: number
  has_next: boolean
  prev: number
  has_prev: boolean
  items: objectListItem[]
}

export interface singleObjectResponse extends objectListItem { }

export interface IAlertsClient {
  queryObjects<T>(
    objectFilters: ObjectFilters,
    parser?: Parser<listObjectResponse, T>,
    customModel?: Newable<T>
  ): Promise<T>
  querySingleObject<T>(
    aid: string,
    parser?: Parser<singleObjectResponse, T>,
    customModel?: Newable<T>
  ): Promise<T>
}
