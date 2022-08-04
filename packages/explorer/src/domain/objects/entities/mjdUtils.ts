import type { MjdToGreg } from "../ports";

export const mjdToGreg: MjdToGreg = (mjd: number): string => {
  const date = (mjd - 40587) * 86400000;
  return new Date(date).toUTCString();
};

export const gregToMjd = (dateStr: string): number => {
  const date = new Date(dateStr);
  const dateUtc = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
  const mjd = dateUtc / 86400000 + 40587;
  return mjd;
};
