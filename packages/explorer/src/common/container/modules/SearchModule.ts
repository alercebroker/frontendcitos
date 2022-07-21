import type { IObjectRepository, IObjectService } from "@/app/object/domain";
import { ObjectRepository } from "@/app/object/infrastructure/ObjectRepository";
import { ObjectService } from "@/app/object/infrastructure/ObjectService";
import { SearchObjects } from "@/app/object/use-case/SearchObjects";
import type { UseCase } from "@/common/usecase/UseCase";
import { SearchStoreFactory } from "@/ui/stores/search/SearchStoreFactory";
import { AlertsClient } from "@alercebroker/http-client";
import { ContainerModule, type interfaces } from "inversify";
import { TYPES } from "../types";

export const SearchModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<UseCase>(TYPES.SearchObjectsUseCase).to(SearchObjects);
  bind<SearchStoreFactory>(TYPES.SearchStoreFactory).to(SearchStoreFactory);
  bind<IObjectService>(TYPES.ObjectService).to(ObjectService);
  bind<IObjectRepository>(TYPES.ObjectRepository).to(ObjectRepository);
  bind<AlertsClient>(TYPES.AlertsClient).to(AlertsClient);
});
