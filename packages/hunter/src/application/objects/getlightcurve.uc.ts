import { ObjectRespository } from "@/domain/ports/objects";
import { Callbacks, Command } from "../common";
import { defaultErrorHandler } from "../common/errors";

export const getLightcurveUseCase = (
  repository: ObjectRespository
): Command => ({
  execute: async (callbacks: Callbacks, aid: string) => {
    const result = await repository.getLightcurve(aid);
    result.map((lightcurve) => {
      callbacks.handleSuccess(lightcurve);
    });
    result.mapErr(defaultErrorHandler(callbacks));
  },
});
