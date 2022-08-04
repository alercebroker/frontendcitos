import type { Callbacks, Command } from "@/application/common";
import { CompleteObjectFilter } from "../common/types";
import type { ObjectRespository } from "@/domain/ports/objects";
import { isParseError, isHttpError } from "@alercebroker/http-client";

export const getObjectsListUseCase = (
  repository: ObjectRespository
): Command => ({
  execute: async (callbacks: Callbacks, payload: CompleteObjectFilter) => {
    const result = await repository.getObjects(payload);
    // then gotta use the detections repository to filter and complete every 
    // object fetched by the repository
    result.map((objectListEntity) => {
      callbacks.handleSuccess(objectListEntity);
    });
    result.mapErr((error) => {
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
      } else if (isParseError(error) && handleParseError)
        handleParseError(error);
      else handleGenericError(error);
    });
  },
});
