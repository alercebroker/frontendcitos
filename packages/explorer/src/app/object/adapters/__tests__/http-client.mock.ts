import {
  HttpError,
  ParseError,
  type ClientConfig,
  type DetectionItem,
  type IAlertsClient,
  type listObjectResponse,
  type Newable,
  type ObjectFilters,
  type Parser,
  type singleObjectResponse,
} from "@alercebroker/http-client/build/main/types";
import { objects } from "./listObjectResponse.mock";

let __testType: string;

export const __setTestType = (tt: string) => {
  __testType = tt;
};

class AlertsClientMock implements IAlertsClient {
  initClient() {
    throw new Error("Method not implemented.");
  }
  queryDetections<T>(
    aid: string,
    parser?: Parser<DetectionItem[], T> | undefined,
    customModel?: Newable<T> | undefined
  ): Promise<T> {
    throw new Error("Method not implemented.");
  }
  queryObjects<T>(
    _objectFilters: ObjectFilters,
    _parser?: Parser<listObjectResponse, T>,
    _customModel?: Newable<T>
  ): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      if (__testType === "success") {
        resolve(objects as unknown as T);
      }
      if (__testType === "clientError") {
        reject(HttpError.fromStatus(400));
      }
      if (__testType === "serverError") {
        reject(HttpError.fromStatus(500));
      }
      if (__testType === "parseError") {
        reject(new ParseError("El parser se chingó"));
      }
      reject(new Error("A la chingada"));
    });
  }
  querySingleObject<T>(
    aid: string,
    parser?: Parser<singleObjectResponse, T>,
    customModel?: Newable<T>
  ): Promise<T> {
    throw new Error("Method not implemented.");
  }
}

class AlertsClient {
  public static create(_: ClientConfig): IAlertsClient {
    return new AlertsClientMock();
  }

  public static queryObjects<T>(
    objectFilters: ObjectFilters,
    parser?: Parser<listObjectResponse, T>,
    customModel?: Newable<T>,
    _config?: ClientConfig
  ): Promise<T> {
    const client = new AlertsClientMock();
    const result = client.queryObjects(objectFilters, parser, customModel);
    return result;
  }

  public static querySingleObject<T>(
    aid: string,
    parser?: Parser<singleObjectResponse, T>,
    customModel?: Newable<T>,
    _config?: ClientConfig
  ): Promise<T> {
    const client = new AlertsClientMock();
    const result = client.querySingleObject(aid, parser, customModel);
    return result;
  }
  public static getClientConfig(): ClientConfig {
    return {};
  }
}

function isHttpError(_: Error) {
  if (__testType === "clientError" || __testType === "serverError") {
    return true;
  }
  return false;
}

function isParseError(_: Error) {
  if (__testType === "parseError") {
    return true;
  }
  return false;
}

function serializeParams(params: any, args?: any) {
  return "serializedParams";
}

function serializeParamsReverse(queryString: string, args?: any) {
  return {};
}

export const mockedModule = {
  AlertsClient,
  isHttpError,
  isParseError,
  serializeParams,
  serializeParamsReverse,
};
