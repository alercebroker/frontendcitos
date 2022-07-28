import type {
  ObjectEntity,
  ObjectListEntity,
  ObjectListFilters,
} from "@/domain/objects/entities";
import type { ObjectRepository } from "@/domain/objects/ports";
import { HttpError, ParseError } from "@alercebroker/http-client";
import { err, ok, type Result } from "neverthrow";

let testType: string;

export function __setTestType(tt: string) {
  testType = tt;
}

export const objectRepository: ObjectRepository = {
  getObject: (): ObjectEntity => {
    throw new Error("Not Implemented");
  },
  getObjects: (
    _filters: ObjectListFilters
  ): Result<ObjectListEntity, ParseError | HttpError> => {
    if (testType === "success") {
      return ok({
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
      });
    }
    if (testType === "clientError") {
      return err(HttpError.fromStatus(400));
    }
    if (testType === "serverError") {
      return err(HttpError.fromStatus(500));
    }
    if (testType === "parseError") {
      return err(new ParseError("parse error"));
    }
    return err(new Error("Other cases not implemented"));
  },
};
