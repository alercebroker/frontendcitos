import type { Callbacks, Command } from "@/application/common";
import { CompleteObjectFilter } from "../common/types";
import type { ObjectRespository } from "@/domain/ports/objects";
import { isParseError, isHttpError } from "@alercebroker/http-client";
import { ObjectEntity } from "@/domain/entities/object.entity";

async function completeObjectsWithFirstDetection(
  repository: ObjectRespository,
  objectList: ObjectEntity[]
) {
  function completeObject(object: ObjectEntity): Promise<ObjectEntity> {
    return new Promise((resolve) => {
      repository.getDetections(object.aid).then((result) => {
        const resultUnwrapped = result.unwrapOr([]);
        const objectCompleted = Object.assign({}, object);
        objectCompleted.firstDetection = resultUnwrapped.length
          ? resultUnwrapped[0]
          : null;
        resolve(objectCompleted);
      });
    });
  }
  return Promise.all(objectList.map((obj) => completeObject(obj)));
}

export const getObjectsListUseCase = (
  repository: ObjectRespository
): Command => ({
  execute: async (callbacks: Callbacks, payload: CompleteObjectFilter) => {
    const result = await repository.getObjects(payload);
    result.map(async (objectListEntity) => {
      // this kind of filtering will bug for sure
      objectListEntity.items = await completeObjectsWithFirstDetection(
        repository,
        objectListEntity.items
      );
      // .filter(
      //   (object) =>
      //     object.firstDetection &&
      //     object.firstDetection.mag >= payload.magnitude.min &&
      //     object.firstDetection.mag <= payload.magnitude.max
      // );
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
