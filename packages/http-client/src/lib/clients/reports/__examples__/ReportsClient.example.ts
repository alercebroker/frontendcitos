import { ReportsClient } from '../../../..'
import { ReportListResponse } from '../ReportsClient.types'

export function exampleQueryReports(): Promise<ReportListResponse> {
  return ReportsClient.queryReports({})
}
