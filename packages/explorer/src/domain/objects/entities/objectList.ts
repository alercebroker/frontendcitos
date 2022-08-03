import type { ObjectEntity } from "./object";

export type ObjectListEntity = {
  total: number;
  page: number;
  hasNext: boolean;
  hasPrev: boolean;
  next: number;
  prev: number;
  items: ObjectEntity[];
};
