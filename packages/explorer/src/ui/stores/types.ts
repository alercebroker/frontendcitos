import type { StoreDefinition } from "pinia";

export interface IStoreFactory<T extends StoreDefinition> {
  create(): T;
}
