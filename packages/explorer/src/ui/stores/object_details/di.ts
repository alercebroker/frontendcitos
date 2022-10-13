import {
  getObjectSingleUseCase,
  getObjectLightCurveUseCase
} from "@/app/object/use-cases";
import { objectDetailsStore } from "./store";

const objectDetailsStoreResolved = objectDetailsStore(
  getObjectSingleUseCase,
  getObjectLightCurveUseCase
);

export { objectDetailsStoreResolved as useObjectDetailsStore };