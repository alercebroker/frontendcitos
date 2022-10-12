import {
  getObjectSingleUseCase,
  getObjectLightCurveUseCase
} from "@/app/object/use-cases/__mocks__";
import { objectDetailsStore } from "../store";

const searchStoreResolved = objectDetailsStore(
  getObjectSingleUseCase,
  getObjectLightCurveUseCase  
);

export { searchStoreResolved as useSearchStore };
