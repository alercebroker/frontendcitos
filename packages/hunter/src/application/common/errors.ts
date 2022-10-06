import { HttpError, ParseError } from "@alercebroker/http-client/src/types";
import { isHttpError, isParseError } from "@alercebroker/http-client";
import { Callbacks } from "./callbacks";

export function defaultErrorHandler(callbacks: Callbacks) {
  return function (error: ParseError | HttpError) {
    const {
      handleGenericError,
      handleHttpClientError,
      handleHttpServerError,
      handleParseError,
    } = callbacks.handleErrors;
    if (isHttpError(error)) {
      if (error.isClientError() && handleHttpClientError)
        handleHttpClientError(error);
      else if (error.isServerError() && handleHttpServerError)
        handleHttpServerError(error);
    } else if (isParseError(error) && handleParseError) handleParseError(error);
    else handleGenericError(error);
  };
}
