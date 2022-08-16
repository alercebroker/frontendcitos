import type {
  ObjectEntity,
  ObjectListFilters,
} from "@/domain/objects/entities";
import type { ObjectRepository } from "@/domain/objects/ports";
import {
  HttpError,
  ParseError,
  type PaginatedListEntity,
} from "@alercebroker/http-client/build/main/types";
import { err, ok, type Result } from "neverthrow";

let testType: string;

export function __setTestType(tt: string) {
  testType = tt;
}

export const objectRepository: ObjectRepository = {
  getObject: (): Promise<Result<ObjectEntity, HttpError | ParseError>> => {
    throw new Error("Not Implemented");
  },
  getObjects: (
    _filters: ObjectListFilters
  ): Promise<
    Result<PaginatedListEntity<ObjectEntity>, ParseError | HttpError>
  > => {
    if (testType === "success") {
      return new Promise((resolve) => {
        resolve(
          ok({
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
                decHms: "hms",
              },
            ],
          })
        );
      });
    }
    if (testType === "clientError") {
      return new Promise((resolve) => {
        resolve(err(HttpError.fromStatus(400)));
      });
    }
    if (testType === "serverError") {
      return new Promise((resolve) => {
        resolve(err(HttpError.fromStatus(500)));
      });
    }
    if (testType === "parseError") {
      return new Promise((resolve) => {
        resolve(err(new ParseError("Parse Error")));
      });
    }
    return new Promise((resolve) => {
      resolve(err(new Error("Other cases not implemented")));
    });
  },
};
