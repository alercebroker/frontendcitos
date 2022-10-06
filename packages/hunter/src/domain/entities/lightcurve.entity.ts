import { DetectionEntity } from "./detection.entity"
import { NonDetectionEntity } from "./nondetection.entity";

export type LightCurveEntity = {
  detections: DetectionEntity[];
  non_detections: NonDetectionEntity[];
}