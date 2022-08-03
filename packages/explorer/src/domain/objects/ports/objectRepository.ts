import type {
  HttpError,
  ParseError,
} from "@alercebroker/http-client/build/main/types";
import type { Result } from "neverthrow";
import type {
  ObjectEntity,
  ObjectListEntity,
  ObjectListFilters,
} from "../entities";

export interface ObjectRepository {
  getObjects(
    filters: ObjectListFilters
  ): Promise<Result<ObjectListEntity, HttpError | ParseError>>;
  getObject(id: string): Promise<Result<ObjectEntity, HttpError | ParseError>>;
}
