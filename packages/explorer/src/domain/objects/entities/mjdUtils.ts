import type { MjdToGreg } from "../ports";

export const mjdToGreg: MjdToGreg = (mjd: number): string => {
  const date = (mjd - 40587) * 86400000;
  return new Date(date).toDateString();
};
