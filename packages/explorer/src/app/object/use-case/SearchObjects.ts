import { UseCase, type Callbacks } from "@/common/usecase/UseCase";
import { injectable } from "inversify";
import type { IObjectService } from "../domain";
import type { FilterObject } from "../infrastructure/ObjectService.types";

@injectable()
export class SearchObjects extends UseCase {
  constructor(service: IObjectService) {
    super(service);
  }
  execute(params: FilterObject, callbacks: Callbacks): void {
    throw new Error("Method not implemented.");
  }
}
