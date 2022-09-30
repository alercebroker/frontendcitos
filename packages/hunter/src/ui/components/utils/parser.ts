import { ObjectEntity } from "@/domain/entities/object.entity";
import { BAND_MAP } from "@alercebroker/component-library/src/components/plot/generic";
import { ObjectView } from "./types";

export function fidToBand(fid: number | undefined) {
  if (!fid) return "unknown";
  return BAND_MAP[fid]?.name ?? "unknown";
}

export function parseObjectForView(object: ObjectEntity): ObjectView {
  return {
    name: object.aid,
    date: object.firstGreg,
    obs: object.obs ?? 0,
    reported: "",
    score: 50.0,
    fdtel: String(object.firstDetection?.tid ?? "unknown"),
    fdband: fidToBand(object.firstDetection?.fid),
    fdmag: object.firstDetection?.mag.toFixed(3) ?? 0,
    ra: object.ra,
    dec: object.dec,
  };
}
