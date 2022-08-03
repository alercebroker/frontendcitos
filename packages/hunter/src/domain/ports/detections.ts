import { DetectionEntity } from "../entities/detection.entity";
import { DetectionFilters } from "../entities/filters/detection.filters";
import { PaginatedList } from "../entities/paginatedlist.entity";

export interface DetectionsRepository {
  getDetections(filter: DetectionFilters): PaginatedList<DetectionEntity> | null;
}