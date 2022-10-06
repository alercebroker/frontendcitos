import type { Callbacks, Command } from "@/application/common";
import { CompleteObjectFilter } from "../common/types";
import type { ObjectRespository } from "@/domain/ports/objects";
import { ObjectEntity } from "@/domain/entities/object.entity";
import { defaultErrorHandler } from "../common/errors";

async function completeObjectsWithFirstDetection(
  repository: ObjectRespository,
  objectList: ObjectEntity[]
) {
  function completeObject(object: ObjectEntity): Promise<ObjectEntity> {
    return new Promise((resolve) => {
      repository.getDetections(object.aid).then((result) => {
        const detectionList = result.unwrapOr([]);
        const objectCompleted = Object.assign({}, object);
        objectCompleted.firstDetection = detectionList.length
          ? detectionList[0]
          : null;
        objectCompleted.obs = objectCompleted.ndet ?? detectionList.length;
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
      // .filter(
      //   (object) =>
      //     object.firstDetection &&
      //     object.firstDetection.mag >= payload.magnitude.min &&
      //     object.firstDetection.mag <= payload.magnitude.max
      // );
      callbacks.handleSuccess(objectListEntity);
    });
    result.mapErr(defaultErrorHandler(callbacks));
  },
});
