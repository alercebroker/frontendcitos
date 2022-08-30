import type { HttpError, ParseError } from "@alercebroker/http-client/build/main/types";


export type ErrorCallbacks = {
  handleGenericError: (error: Error) => void;
  handleHttpClientError?: (error: HttpError) => void;
  handleHttpServerError?: (error: HttpError) => void;
  handleParseError?: (error: ParseError) => void;
}

export type Callbacks = {
  handleSuccess: (data: any) => void;
  handleErrors: ErrorCallbacks;
}