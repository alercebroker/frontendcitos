import type { ObjectEntity } from "@/domain/objects/entities";
import type { PaginatedListEntity } from "@alercebroker/http-client/build/main/types";

export const objects: PaginatedListEntity<ObjectEntity> = {
  total: 1,
  page: 1,
  next: 2,
  hasNext: true,
  prev: 0,
  hasPrev: false,
  items: [
    {
      aid: "aid123",
      oid: ["oid1"],
      ndet: 2,
      ra: 111,
      dec: 222,
      firstmjd: 123,
      lastmjd: 456,
      firstGreg: "utc",
      lastGreg: "utc",
      raHms: "hms",
      decHms: "hms",
    },
  ],
};
