import type { Callbacks, Command } from "@/common/use-case";
import type { ObjectListEntity } from "@/domain/objects/entities";
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
        next: "next",
        hasNext: false,
        prev: "prev",
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
      } as ObjectListEntity);
    }
  },
});
