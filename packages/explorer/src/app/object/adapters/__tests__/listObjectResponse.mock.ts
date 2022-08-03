import type { ObjectListEntity } from "@/domain/objects/entities";

export const objects: ObjectListEntity = {
  total: 1,
  page: 1,
  next: 2,
  hasNext: true,
  prev: 0,
  hasPrev: false,
  items: [
    {
      aid: "aid123",
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
