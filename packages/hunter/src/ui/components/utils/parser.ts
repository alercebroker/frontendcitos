import { ObjectEntity } from "@/domain/entities/object.entity";
import { ObjectView } from "./types";

export function parseObjectForView(object: ObjectEntity): ObjectView {
  return {
    name: object.aid,
    date: object.firstGreg,
    obs: 0,
    reported: "",
    score: 50.0,
    fdtel: String(object.firstDetection?.fid) ?? "",
    fdband: "g",
    fdmag: object.firstDetection?.mag ?? 0,
    ra: object.ra,
    dec: object.dec,
  };
}
