import { container } from "@/common/container/container";
import { TYPES } from "@/common/container/types";
import type { Pinia } from "pinia";
import type { SearchStoreFactory } from "./SearchStoreFactory";

export const storeProvider = (pinia?: Pinia) => {
  const searchStore = container()
    .get<SearchStoreFactory>(TYPES.SearchStoreFactory)
    .create()(pinia);
  return searchStore;
};
