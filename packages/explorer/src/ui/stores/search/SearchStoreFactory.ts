import type { SearchObjects } from "@/app/object/use-case/SearchObjects";
import { TYPES } from "@/common/container/types";
import { inject, injectable } from "inversify";
import type { IStoreFactory } from "../types";
import { useStore } from "./useStore";

@injectable()
export class SearchStoreFactory
  implements IStoreFactory<ReturnType<typeof useStore>>
{
  private searchObjectsUseCase: SearchObjects;

  constructor(@inject(TYPES.SearchObjectsUseCase) useCase: SearchObjects) {
    this.searchObjectsUseCase = useCase;
  }

  create(): ReturnType<typeof useStore> {
    return useStore(this.searchObjectsUseCase);
  }
}
