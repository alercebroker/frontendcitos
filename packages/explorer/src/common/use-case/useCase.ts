import type { Callbacks } from "./callbacks";

export type Command = {
  execute: (callbacks: Callbacks, payload?: any) => void;
};
