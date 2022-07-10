import type { ObjectEntity } from "./ObjectEntity";

export interface Filters {
  aid: string[];
}
export interface IObjectRepository {
  getObjects(filters: Filters): ObjectEntity[];
  getObject(id: string): ObjectEntity;
}
