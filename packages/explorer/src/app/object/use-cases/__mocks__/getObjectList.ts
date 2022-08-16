import type { Callbacks, Command } from "@/common/use-case";
import type { ObjectRepository } from "@/domain/objects/ports";

let testType: string;

export const __setTestType = (tt: string) => {
  testType = tt;
};

export const getObjectListUseCase = (
  _repository: ObjectRepository
): Command => ({
  execute: <ObjectListFilters>(
    callbacks: Callbacks,
    _: ObjectListFilters
  ): void => {
    if (testType === "success") {
      callbacks.handleSuccess({
        total: 1,
        page: 1,
        next: 2,
        hasNext: false,
        prev: 0,
        hasPrev: false,
        items: [
          {
            aid: "aid",
            ra: 1,
            dec: 1,
            firstmjd: 1,
            lastmjd: 1,
            firstGreg: "utc",
            lastGreg: "utc",
            raHms: "hms",
          },
        ],
      });
    }
  },
});
