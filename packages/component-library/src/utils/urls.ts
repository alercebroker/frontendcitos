import { b64Parser, StampsClient } from "@alercebroker/http-client";
import type {
  GetAvroParams,
  StampsClientConfig,
} from "@alercebroker/http-client/build/main/types";

export async function stampUrl(args: {
  baseUrl: string;
  candid: string;
  type: string;
  format: string;
  surveyId: string;
}): Promise<string | Blob> {
  const { baseUrl, candid, type, format, surveyId } = args;
  const getAvroParams: GetAvroParams = {
    candid,
    survey_id: surveyId,
    type,
    format,
    oid: "whatever",
  };
  const config: StampsClientConfig = { baseUrl };
  if (format === "png")
    return await StampsClient.getStamp(getAvroParams, b64Parser, config);
  return await StampsClient.getStamp(getAvroParams, undefined, config);
}
