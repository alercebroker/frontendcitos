import type { UseCase, Callbacks } from "@/common/usecase/UseCase";
import { inject, injectable } from "inversify";
import type { FilterObject } from "../infrastructure/ObjectService.types";

@injectable()
export class SearchObjectsMock implements UseCase {
  private testType: string;
  constructor(@inject("testType") testType: string) {
    this.testType = testType;
  }
  execute(params: FilterObject, callbacks: Callbacks): void {
    if (this.testType === "success") {
      callbacks.respondWithSuccess({
        total: 1,
        page: 1,
        next: 1,
        has_next: false,
        prev: 1,
        has_prev: false,
        items: [
          {
            aid: "aid",
            raHms: "hms",
            decHms: "hms",
            firstUTC: "utc",
            lastUTC: "utc",
          },
        ],
      });
    }
  }
}
