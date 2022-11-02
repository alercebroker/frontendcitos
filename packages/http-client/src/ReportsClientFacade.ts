import { container } from "./container/container";
import { TYPES } from "./container/types";
import { IReportsClient, ReportFilters, ReportListResponse, ReportsClientConfig } from "./lib/clients/reports/ReportsClient.types";
import { Newable, Parser } from "./types";

function getConfiguredClient(config?: ReportsClientConfig) {
  if (config)
    container.rebind<ReportsClientConfig>(TYPES.ReportsClientConfig).toConstantValue(config)
  const client = container.get<IReportsClient>(TYPES.IReportsClient)
  client.initClient()
  return client
}

export class ReportsClientFacade {
  public static create(config: ReportsClientConfig) {
    return getConfiguredClient(config)
  }

  public static queryReports<T>(
    filters: ReportFilters,
    parser?: Parser<ReportListResponse, T>,
    customModel?: Newable<T>,
    config?: ReportsClientConfig
  ): Promise<T> {
    const client = getConfiguredClient(config)
    return client.queryReports(filters, parser, customModel)
  }
}
