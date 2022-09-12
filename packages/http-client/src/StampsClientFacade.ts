import { container } from './container/container'
import { TYPES } from './container/types'
import {
  Avro,
  GetAvroParams,
  IStampsClient,
  Newable,
  Parser,
  StampsClientConfig,
} from './types'

export class StampsClientFacade {
  public static create(config: StampsClientConfig) {
    container
      .rebind<StampsClientConfig>(TYPES.StampsClientConfig)
      .toConstantValue(config)
    const client = container.get<IStampsClient>(TYPES.IStampsClient)
    return client
  }

  public static async getAvroJson<T>(
    params: GetAvroParams,
    parser?: Parser<Avro, T>,
    customModel?: Newable<T>,
    config?: StampsClientConfig
  ): Promise<T> {
    if (config)
      container
        .rebind<StampsClientConfig>(TYPES.StampsClientConfig)
        .toConstantValue(config)
    const client = container.get<IStampsClient>(TYPES.IStampsClient)
    client.initClient()
    const result = client.getAvroJson(params, parser, customModel)
    return result
  }

  public static async getStamp<T>(
    params: GetAvroParams,
    parser?: Parser<Blob, T>,
    config?: StampsClientConfig
  ): Promise<T> {
    if (config)
      container
        .rebind<StampsClientConfig>(TYPES.StampsClientConfig)
        .toConstantValue(config)
    const client = container.get<IStampsClient>(TYPES.IStampsClient)
    client.initClient()
    const result = client.getStamp(params, parser)
    return result
  }
}
