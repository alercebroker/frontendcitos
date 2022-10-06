import type { DetectionEntity } from "./detection.entity";

export type ObjectEntity = {
  aid: string;
  ndet?: number;
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
  const date = new Date((mjdDate - 40587) * 86400000);
  return date.toLocaleString("en-GB", { timeZone: "UTC" });

  //return new Date(date).toISOString();
}
