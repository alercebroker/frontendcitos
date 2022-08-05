import { ObjectFilter } from "../entities/filters/object.filters";
import { ObjectEntity } from "../entities/object.entity";
import { PaginatedList } from "../entities/paginatedlist.entity";

import type { HttpError, ParseError } from "@alercebroker/http-client/build/main/types";
import { Result } from "neverthrow";
import { DetectionEntity } from "../entities/detection.entity";

export interface ObjectRespository {
  getObjects(
    filters: ObjectFilter
  ): Promise<Result<PaginatedList<ObjectEntity>, ParseError | HttpError>>;
  getObject(id: string): Promise<Result<ObjectEntity, ParseError | HttpError>>;
  getDetections(aid: string): Promise<Result<DetectionEntity[], HttpError | ParseError>>
}
