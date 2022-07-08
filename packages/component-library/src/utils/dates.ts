export function jdToDate(mjd: number) {
  const date = (mjd - 40587) * 86400000;
  return new Date(date);
}
