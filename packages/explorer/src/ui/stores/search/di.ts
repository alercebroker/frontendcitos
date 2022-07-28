import {
  convertMjdUseCase,
  getObjectListUseCase,
} from "@/app/object/use-cases";
import { searchStore } from "./store";

const searchStoreResolved = searchStore(
  getObjectListUseCase,
  convertMjdUseCase
);

export { searchStoreResolved as useSearchStore };
