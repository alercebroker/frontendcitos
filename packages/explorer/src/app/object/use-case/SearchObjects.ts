import { TYPES } from "@/common/container/types";
import type { UseCase, Callbacks } from "@/common/usecase/UseCase";
import { inject, injectable } from "inversify";
import type { IObjectService } from "../domain";
import type { FilterObject } from "../infrastructure/ObjectService.types";

@injectable()
export class SearchObjects implements UseCase {
  private service: IObjectService;
  constructor(@inject(TYPES.ObjectService) service: IObjectService) {
    this.service = service;
  }
  execute(params: FilterObject, callbacks: Callbacks): void {
    throw new Error("Method not implemented.");
  }
}
