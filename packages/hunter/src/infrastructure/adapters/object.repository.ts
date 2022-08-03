import { ObjectFilter } from "@/domain/entities/filters/object.filters";
import { ObjectEntity } from "@/domain/entities/object.entity";
import { PaginatedList } from "@/domain/entities/paginatedlist.entity";
import { ObjectRespository } from "@/domain/ports/objects";

import { ParseError, HttpError } from "@alercebroker/http-client";
import { ok, Result } from "neverthrow";

// function getObjects(filters: ObjectFilter): Result<PaginatedList<ObjectEntity>, ParseError | HttpError> {
//   return ok({});
// }

export const objectRepository: ObjectRespository = {
  getObjects: function (filters: ObjectFilter): Result<PaginatedList<ObjectEntity>, ParseError | HttpError> {
    throw new Error("Function not implemented.");
  },
  getObject: function (id: string): Result<ObjectEntity, ParseError | HttpError> {
    throw new Error("Function not implemented.");
  }
}
