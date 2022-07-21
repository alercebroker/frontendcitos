import type { HttpError, ParseError } from "@alercebroker/http-client";
import type { Result } from "neverthrow";
import type { Filters } from "./ObjectRepository.types";

export interface ObjectDTO {
  aid: string;
  // other object props
  raHms: string;
  decHms: string;
  firstUTC: string;
  lastUTC: string;
}

export interface ObjectListDTO {
  total: number;
  page: number;
  next: string;
  hasNext: boolean;
  prev: string;
  hasPrev: boolean;
  items: ObjectDTO[];
}

export interface IObjectService {
  searchObjects(
    filters: Filters
  ): Result<ObjectListDTO, HttpError | ParseError>;
  getObject(): ObjectDTO;
}
