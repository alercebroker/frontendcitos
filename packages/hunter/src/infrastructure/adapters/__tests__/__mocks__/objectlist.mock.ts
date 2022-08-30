import { ObjectEntity } from "@/domain/entities/object.entity";
import { PaginatedListEntity } from "@alercebroker/http-client/src/types";

export const objects: PaginatedListEntity<ObjectEntity> = {
  total: 0,
  page: 1,
  next: 2,
  hasNext: false,
  prev: 0,
  hasPrev: false,
  items: [],
};
