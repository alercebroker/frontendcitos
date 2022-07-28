import {
  getObjectListUseCase,
  convertMjdUseCase,
} from "@/app/object/use-cases/__mocks__";
import { searchStore } from "../store";

const searchStoreResolved = searchStore(
  getObjectListUseCase,
  convertMjdUseCase
);

export { searchStoreResolved as useSearchStore };
