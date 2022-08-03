import type { DetectionEntity } from "./detection.entity";

export type ObjectEntity = {
  aid: string;
  ra: number;
  dec: number;
  firstmjd: number;
  lastmjd: number;
  firstGreg: string;
  lastGreg: string;
  raHms: string;
  firstDetection: DetectionEntity | null;
};
