import { AxiosInstance } from 'axios'
import { Parser } from '../../core/http-service/HttpService.types'
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

export type DetectionItem = {
  aid: string
  oid: string
  tid: string
  mjd: number
  candid: string
  fid: number
  isdiffpos: number
  mag: number
  e_mag: number
  ra: number
  dec: number
  rb: number
  rbversion: string
  has_stamp: boolean
  corrected: boolean
  step_id_corr: string
  parent_candid: string
}

export type NonDetectionItem = {
  aid: string
  oid: string
  tid: string
  mjd: number
  fid: number
  diffmaglim: number
}

export type lightcurveResponse = {
  detections: DetectionItem[]
  non_detections: NonDetectionItem[]
}

export type probabilitiesResponse = {
  classifier_name: string
  classifier_version: string
  class_name: string
  probability: number
  ranking: number
}

export type magstatsResponse = {
  fid: number
  ndet: number
  magmean: number
  magmedian: number
  magmax: number
  magmin: number
  magsigma: number
  maglast: number
  magfirst: number
  firstmjd: number
  lastmjd: number
  'ingestion-step': string
}

export type xmatchResponse = {
  catid: string
  oid_catalog: string
  dist: number
}

export type featuresResponse = {
  name: string
  value: number
  fid: number
  version: string
}

export type singleObjectResponse = {
  aid: string
  oid: string[]
  ndet: number
  firstmjd: number
  lastmjd: number
  meanra: number
  meandec: number
  probabilities: probabilitiesResponse[] | null
  magstats: magstatsResponse[] | null
  xmatch: xmatchResponse[] | null
  features: featuresResponse[] | null
}

export interface IAlertsClient {
  initClient(axiosInstance?: AxiosInstance): void
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
  queryDetections<T>(
    aid: string,
    parser?: Parser<DetectionItem[], T>,
    customModel?: Newable<T>
  ): Promise<T>
  queryLightcurve<T>(
    aid: string,
    parser?: Parser<lightcurveResponse, T>,
    customModel?: Newable<T>
  ): Promise<T>
}

export interface ClientConfig {
  baseUrl?: string
  accessToken?: string
}

export type PaginatedListEntity<T> = {
  total: number | null
  page: number
  next: number | null
  hasNext: boolean
  prev: number | null
  hasPrev: boolean
  items: T[]
}
