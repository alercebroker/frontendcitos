import type { HttpError, ParseError } from "@alercebroker/http-client";

export interface Callbacks {
  respondWithSuccess(data?: unknown): void;
  respondWithClientError(error: HttpError): void;
  respondWithServerError(error: HttpError): void;
  respondWithParseError(error: ParseError): void;
  respondWithAppError?(error: Error): void;
}

export interface UseCase {
  execute(params: unknown, callbacks: Callbacks): void;
}
