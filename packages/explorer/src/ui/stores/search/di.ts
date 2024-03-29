import {
  convertGregUseCase,
  convertMjdUseCase,
  getObjectListUseCase,
} from "@/app/object/use-cases";
import { searchStore } from "./store";

const searchStoreResolved = searchStore(
  getObjectListUseCase,
  convertMjdUseCase,
  convertGregUseCase
);

export { searchStoreResolved as useSearchStore };
