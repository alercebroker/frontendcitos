import { b64Parser, StampsClient } from "@alercebroker/http-client";
import type {
  GetAvroParams,
  StampsClientConfig,
} from "@alercebroker/http-client/build/main/types";

function getSurvey(telescope?: string) {
  if (!telescope) return "ztf";
  const lowcaseTelescope = telescope.toLowerCase();
  if (lowcaseTelescope !== "ztf") {
    return lowcaseTelescope.split("-")[0];
  }
  return lowcaseTelescope;
}

export async function stampUrl(args: {
  baseUrl: string;
  candid?: string;
  type: string;
  format: string;
  surveyId?: string;
}): Promise<string | Blob> {
  const { baseUrl, candid, type, format, surveyId } = args;
  if (!candid || !surveyId)
    throw new Error("No valid detection info provided!");

  const getAvroParams: GetAvroParams = {
    candid,
    survey_id: getSurvey(surveyId),
    type,
    format,
    oid: "whatever",
  };
  const config: StampsClientConfig = { baseUrl };

  const tokens = localStorage.getItem("authToken") ?? "{}";

  const { access } = JSON.parse(tokens);
  if (access) config.accessToken = access;

  if (format === "png")
    return await StampsClient.getStamp(getAvroParams, b64Parser, config);
  return await StampsClient.getStamp(getAvroParams, undefined, config);
}
