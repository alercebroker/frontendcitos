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

  public static getAvroJson<T>(
    params: GetAvroParams,
    parser?: Parser<Avro, T>,
    customModel?: Newable<T>,
    config?: StampsClientConfig
  ) {
    container
      .rebind<StampsClientConfig>(TYPES.StampsClientConfig)
      .toConstantValue(config)
    const client = container.get<IStampsClient>(TYPES.IStampsClient)
    client.initClient()
    const result = client.getAvroJson(params, parser, customModel)
    return result
  }
}
