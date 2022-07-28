import type { Callbacks, Command } from "@/common/use-case";
import type { ObjectRepository } from "@/domain/objects/ports";
import { isHttpError, isParseError } from "@alercebroker/http-client";

export const getObjectListUseCase = (
  repository: ObjectRepository
): Command => ({
  execute: <ObjectListFilters>(
    callbacks: Callbacks,
    payload: ObjectListFilters
  ) => {
    const result = repository.getObjects(payload);
    result.map((objectListEntity) => {
      callbacks.handleSuccess(objectListEntity);
    });
    result.mapErr((error) => {
      if (isHttpError(error)) {
        if (error.isClientError() && callbacks.handleHttpClientError) {
          callbacks.handleHttpClientError(error);
        } else if (error.isServerError() && callbacks.handleHttpServerError) {
          callbacks.handleHttpServerError(error);
        }
      } else if (isParseError(error) && callbacks.handleParseError) {
        callbacks.handleParseError(error);
      } else {
        callbacks.handleGenericError(error);
      }
    });
  },
});
