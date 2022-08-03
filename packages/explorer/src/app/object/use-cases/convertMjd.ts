import type { Callbacks, Command } from "@/common/use-case";
import type { MjdToGreg } from "@/domain/objects/ports";

export const convertMjdUseCase = (mjdToGregFn: MjdToGreg): Command => ({
  execute: (callbacks: Callbacks, payload: number) => {
    try {
      const result = mjdToGregFn(payload);
      callbacks.handleSuccess(result);
    } catch (e) {
      callbacks.handleGenericError(e as Error);
    }
  },
});
