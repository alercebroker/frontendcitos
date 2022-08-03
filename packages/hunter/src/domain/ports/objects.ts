import { ObjectFilter } from "../entities/filters/object.filters";
import { ObjectEntity } from "../entities/object.entity";
import { PaginatedList } from "../entities/paginatedlist.entity";

import type { HttpError, ParseError } from "@alercebroker/http-client";
import { Result } from "neverthrow";

export interface ObjectRespository {
  getObjects(
    filters: ObjectFilter
  ): Result<PaginatedList<ObjectEntity>, ParseError | HttpError>;
  getObject(id: string): Result<ObjectEntity, ParseError | HttpError>;
}