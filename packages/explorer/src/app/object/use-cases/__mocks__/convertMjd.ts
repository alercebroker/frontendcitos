import type { Callbacks, Command } from "@/common/use-case";
import type { MjdToGreg } from "@/domain/objects/ports";

let testType: string;

export const __setTestType = (tt: string) => {
  testType = tt;
};

export const convertMjdUseCase = (_mjdToGregFn: MjdToGreg): Command => ({
  execute: (callbacks: Callbacks, _payload: number) => {
    if (testType === "success") {
      callbacks.handleSuccess(new Date("1995-01-13").toString());
    }
  },
});
