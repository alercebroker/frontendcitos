import {
  getObjectListUseCase,
  convertMjdUseCase,
  convertGregUseCase,
} from "@/app/object/use-cases/__mocks__";
import { searchStore } from "../store";

const searchStoreResolved = searchStore(
  getObjectListUseCase,
  convertMjdUseCase,
  convertGregUseCase
);

export { searchStoreResolved as useSearchStore };
