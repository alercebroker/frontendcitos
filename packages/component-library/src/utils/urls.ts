export function stampUrl(args: {
  baseUrl: string;
  oid: string | number;
  candid: string | number;
  type: string;
  format: string;
}) {
  const { baseUrl, oid, candid, type, format } = args;
  return `${baseUrl}?oid=${oid}&candid=${candid}&type=${type}&format=${format}`;
}
