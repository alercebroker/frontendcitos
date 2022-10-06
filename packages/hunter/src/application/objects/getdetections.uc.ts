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
    if (objects.length <= from)
      callbacks.handleErrors.handleGenericError(
        new Error("Request out of range")
      );

    const requests: Promise<void>[] = objects
      .map((obj, currentIndex) => {
        if (currentIndex > to || currentIndex < from) return null;
        return new Promise<void>((resolve) => {
          repository.getDetections(obj.aid).then((result) => {
            const detectionList = result.unwrapOr([]);
            obj.firstDetection = detectionList.length ? detectionList[0] : null;
            resolve();
          });
        });
      })
      .filter((item): item is Promise<void> => item !== null);

    await Promise.allSettled(requests);
    callbacks.handleSuccess(payload.objects);
  },
});
