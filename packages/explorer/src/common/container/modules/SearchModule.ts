import { SearchObjects } from "@/app/object/use-case/SearchObjects";
import type { UseCase } from "@/common/usecase/UseCase";
import { SearchStoreFactory } from "@/ui/stores/search";
import type { IStoreFactory } from "@/ui/stores/types";
import { ContainerModule, type interfaces } from "inversify";
import { TYPES } from "../types";

export const SearchModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<UseCase>(TYPES.SearchObjectsUseCase).to(SearchObjects);
  bind<IStoreFactory>(TYPES.SearchStoreFactory).to(SearchStoreFactory);
});
