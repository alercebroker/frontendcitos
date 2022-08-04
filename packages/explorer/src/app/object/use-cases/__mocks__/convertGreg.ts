import type { Callbacks, Command } from "@/common/use-case";
import type { GregToMjd } from "@/domain/objects/ports";

let testType: string;

export const __setTestType = (tt: string) => {
  testType = tt;
};

export const convertGregUseCase = (_gregToMjd: GregToMjd): Command => ({
  execute: (callbacks: Callbacks, _payload: string) => {
    if (testType === "success") {
      callbacks.handleSuccess(49730);
    }
  },
});
