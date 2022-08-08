import { ObjectEntity } from "@/domain/entities/object.entity";
import { PaginatedListEntity } from "@alercebroker/http-client/src/types";

export const objects: PaginatedListEntity<ObjectEntity> = {
    total: 1,
    page: 1,
    next: 2,
    hasNext: true,
    prev: 0,
    hasPrev: false,
    items: [
//      {
//        aid: "aid123",
//        ra: 111,
//        dec: 222,
//        firstmjd: 123,
//        lastmjd: 456,
//        firstGreg: "utc",
//        lastGreg: "utc",
//        firstDetection: null,
//      },
    ],
  };