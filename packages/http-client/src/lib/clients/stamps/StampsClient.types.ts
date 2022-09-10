import { AxiosInstance } from 'axios'
import { Newable, Parser } from '../../../types'

export type Avro = {
  candidate: Object
}

export type ClientConfig = {
  baseUrl: string
}

export type GetAvroParams = {
  candid: string
  survey_id: string
}

export interface IStampsClient {
  initClient(axiosInstance?: AxiosInstance): void
  getAvroJson<T>(
    params: GetAvroParams,
    parser?: Parser<Avro, T>,
    customModel?: Newable<T>
  ): Promise<T>
}
