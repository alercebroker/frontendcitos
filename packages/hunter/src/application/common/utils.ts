export function mjdToDate(mjd: number): string {
  const date = (mjd - 40587) * 86400000;
  return new Date(date).toUTCString();
}

export function gregorianToMjd(dateString: string) {
  const date = new Date(dateString);
  const dateUtc = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
  const mjd = dateUtc / 86400000 + 40587;
  return mjd.toFixed(3);
}
