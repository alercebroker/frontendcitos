import type {
  ObjectEntity,
  ObjectListEntity,
  ObjectListFilters,
} from "@/domain/objects/entities";
import type { ObjectRepository } from "@/domain/objects/ports";
import type { HttpError, ParseError } from "@alercebroker/http-client";
import type { Result } from "neverthrow";

export const objectRepository: ObjectRepository = {
  getObject: (): ObjectEntity => {
    throw new Error("Not Implemented");
  },
  getObjects: (
    filters: ObjectListFilters
  ): Result<ObjectListEntity, ParseError | HttpError> => {
    throw new Error("Not Implemented");
  },
};
