import type { FilterObject } from "@/app/object/infrastructure/ObjectService.types";
import type { SearchInput } from "./types";

const UNSET = -999;

export function parseInput(filterInput: SearchInput): FilterObject {
  const aidArray = filterInput.aid.split(",");
  const oidArray = filterInput.oid.split(",");
  const ndet = {
    min: filterInput.ndet.min ?? UNSET,
    max: filterInput.ndet.max ?? UNSET,
  };
  return {
    aid: aidArray,
    oid: oidArray,
    firstmjd: {
      min: filterInput.firstmjd.from ?? UNSET,
      max: filterInput.firstmjd.to ?? UNSET,
    },
    ndet,
    ra: filterInput.coordinates.ra ?? UNSET,
    dec: filterInput.coordinates.dec ?? UNSET,
    radius: filterInput.coordinates.radius ?? UNSET,
  };
}
