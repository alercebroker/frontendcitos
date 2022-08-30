import { Callbacks } from "../common/callbacks";

export type Command = {
  execute: (callbacks: Callbacks, payload?: any) => void;
}