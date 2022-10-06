import { ObjectEntity } from "@/domain/entities/object.entity";
import { ObjectRespository } from "@/domain/ports/objects";
import { Callbacks, Command } from "../common";

export const getDetectionsUseCase = (
  repository: ObjectRespository
): Command => ({
  execute: async (
    callbacks: Callbacks,
    payload: { objects: ObjectEntity[]; from: number; to: number }
  ) => {
    const { objects, from, to } = payload;
    if (objects.length <= 0) callbacks.handleSuccess([]);
    let requests: Promise<void>[] = [];
    for (let i = from; i <= to; i++) {
      if (objects[i].firstDetection) continue;
      requests = [
        ...requests,
        new Promise((resolve) => {
          repository.getDetections(objects[i].aid).then((result) => {
            const detectionList = result.unwrapOr([]);
            objects[i].firstDetection = detectionList.length
              ? detectionList[0]
              : null;
            resolve();
          });
        }),
      ];
    }
    await Promise.allSettled(requests);
    callbacks.handleSuccess(payload.objects);
  },
});
