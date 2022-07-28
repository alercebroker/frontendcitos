import type { HttpError, ParseError } from "@alercebroker/http-client";
import type { Result } from "neverthrow";
import type {
  ObjectEntity,
  ObjectListEntity,
  ObjectListFilters,
} from "../entities";

export interface ObjectRepository {
  getObjects(
    filters: ObjectListFilters
  ): Result<ObjectListEntity, HttpError | ParseError>;
  getObject(id: string): ObjectEntity;
}
