import type {
  HttpError,
  PaginatedListEntity,
  ParseError,
} from "@alercebroker/http-client/build/main/types";
import type { Result } from "neverthrow";
import type { ObjectEntity, ObjectListFilters, SingleObjectEntity, LightCurveEntity } from "../entities";

export interface ObjectRepository {
  getObjects(
    filters: ObjectListFilters
  ): Promise<Result<PaginatedListEntity<ObjectEntity>, HttpError | ParseError>>;
  getObject(
    id: string
  ): Promise<Result<SingleObjectEntity, HttpError | ParseError>>;
  getLightCurve(
    id: string
  ): Promise<Result<LightCurveEntity, HttpError | ParseError>>;
}
