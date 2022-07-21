import type { HttpError, ParseError } from "@alercebroker/http-client";
import type { Result } from "neverthrow";
import type { ObjectEntity } from "./ObjectEntity";
import type { ObjectListEntity } from "./ObjectListEntity";

export interface Filters {
  aid?: string[];
  oid?: string[];
  ndet?: number[];
  firstmjd?: number[];
  lastmjd?: number[];
  ra?: number;
  dec?: number;
  radius?: number;
  page?: number;
  count?: string;
  order_by?: string;
  order_mode?: string;
}
export interface IObjectRepository {
  getObjects(
    filters: Filters
  ): Result<ObjectListEntity, HttpError | ParseError>;
  getObject(id: string): ObjectEntity;
}
