import {
    getObjectSingleUseCase
  } from "@/app/object/use-cases";
  import { objectDetailsStore } from "./store";
  
  const objectDetailsStoreResolved = objectDetailsStore(
    getObjectSingleUseCase
  );
  
  export { objectDetailsStoreResolved as useObjectDetailsStore };