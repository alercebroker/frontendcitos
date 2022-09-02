import type { Callbacks, Command } from "@/common/use-case";
import type { ObjectListFilters } from "@/domain/objects/entities";
import type { ObjectRepository } from "@/domain/objects/ports";
import { isHttpError, isParseError } from "@alercebroker/http-client";

function setDefaultFilters(payload: ObjectListFilters) {
  payload.page_size = 20;
}

export const getObjectListUseCase = (
  repository: ObjectRepository
): Command => ({
  execute: async <ObjectListFilters>(
    callbacks: Callbacks,
    payload: ObjectListFilters
  ) => {
    setDefaultFilters(payload);
    const result = await repository.getObjects(payload);
    result.map((objectListEntity) => {
      callbacks.handleSuccess(objectListEntity);
    });
    const errorCallbacks = callbacks.handleError;
    result.mapErr((error) => {
      if (isHttpError(error)) {
        if (error.isClientError() && errorCallbacks.handleHttpClientError) {
          errorCallbacks.handleHttpClientError(error);
        } else if (
          error.isServerError() &&
          errorCallbacks.handleHttpServerError
        ) {
          errorCallbacks.handleHttpServerError(error);
        }
      } else if (isParseError(error) && errorCallbacks.handleParseError) {
        errorCallbacks.handleParseError(error);
      } else {
        errorCallbacks.handleGenericError(error);
      }
    });
  },
});
