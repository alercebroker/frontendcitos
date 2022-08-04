import { ObjectFilter } from "@/domain/entities/filters/object.filters";

export type CompleteObjectFilter = ObjectFilter & {
  magnitude: { min: number; max: number };
};
