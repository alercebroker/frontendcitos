import type { ObjectEntity } from "./object";

export type ObjectListEntity = {
  total: number;
  page: number;
  hasNext: boolean;
  hasPrev: boolean;
  next: string;
  prev: string;
  items: ObjectEntity[];
};
