import { AxiosInstance, AxiosRequestConfig } from 'axios'

/**
 * HttpRequest Interface
 */
export type IHttpRequest = {
  url: string
  config?: AxiosRequestConfig
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any
}

/**
 * FailableParser type
 */
export type FailableParser<T, M> = (_: T) => M

/**
 * parser type
 */
export type Parser<T, M> = {
  parseTo: FailableParser<T, M>
}

/**
 * http service interface
 */
export interface IHttpService {
  initClient(
    baseUrl: string,
    axiosInstance?: AxiosInstance,
    accessToken?: string
  ): void
  get<T, M>(request: IHttpRequest, parser: Parser<T, M>): Promise<M>
  post<T, M>(request: IHttpRequest, parser: Parser<T, M>): Promise<M>
  put<T, M>(request: IHttpRequest, parser: Parser<T, M>): Promise<M>
  delete(request: IHttpRequest): Promise<number>
  setAccessToken(accessToken: string): void
}
