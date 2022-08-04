import type { Callbacks, Command } from "@/common/use-case";
import type { GregToMjd } from "@/domain/objects/ports";

export const convertGregUseCase = (gregToMjdFn: GregToMjd): Command => ({
  execute: (callbacks: Callbacks, payload: string) => {
    try {
      const result = gregToMjdFn(payload);
      callbacks.handleSuccess(result);
    } catch (e) {
      callbacks.handleError.handleGenericError(e as Error);
    }
  },
});
