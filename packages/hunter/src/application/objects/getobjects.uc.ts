import { Callbacks } from "../common/callbacks";

export type Command = {
  execute: (callbacks: Callbacks, payload?: unknown) => void;
}