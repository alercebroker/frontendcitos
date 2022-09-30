import type { DetectionEntity } from "./detection.entity";

export type ObjectEntity = {
  aid: string;
  ra: number;
  dec: number;
  firstmjd: number;
  lastmjd: number;
  firstGreg: string;
  lastGreg: string;
  obs?: number;
  firstDetection: DetectionEntity | null;
};

export function mjdToGreg(mjdDate: number): string {
  const date = (mjdDate - 40587) * 86400000;
  return new Date(date).toDateString();
}
