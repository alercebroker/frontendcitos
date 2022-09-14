import type { Callbacks, Command } from "@/common/use-case";
import type { ObjectRepository } from "@/domain/objects/ports";
import { isHttpError, isParseError } from "@alercebroker/http-client";

export const getObjectLightCurveUseCase = (
  repository: ObjectRepository
): Command => ({
  execute: async <LightCurveEntity>(
    callbacks: Callbacks,
    payload: string
  ) => {
    const result = await repository.getLightCurve(payload);
    result.map((objectEntity) => {
      callbacks.handleSuccess(objectEntity);
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
