import type { SearchInput } from "./types";

const coordinateRules = [
  (
    ra: number | null,
    dec: number | null,
    radius: number | null
  ): boolean | string => {
    if (ra != null) {
      return (
        (dec != null && radius != null) ||
        "Coordinate search must use RA, Dec and radius"
      );
    }
    if (dec != null) {
      return (
        (ra != null && radius != null) ||
        "Coordinate search must use RA, Dec and radius"
      );
    }
    if (radius != null) {
      return (
        (ra != null && dec != null) ||
        "Coordinate search must use RA, Dec and radius"
      );
    }
    return false;
  },
  (
    ra: number | null,
    dec: number | null,
    radius: number | null
  ): boolean | string => {
    const message = "Value out of range";
    if (!radius || !ra || !dec) {
      return true;
    }
    if (radius < 0) {
      return message;
    }
    if (dec < -90 || dec > 90) {
      return message;
    }
    if (ra < 0 || ra > 360) {
      return message;
    }
    return true;
  },
];

export function validateInputFilters(
  filterInput: SearchInput
): [boolean, string[]] {
  let isValid = true;
  const messages: string[] = [];

  coordinateRules.forEach((rule) => {
    const validation = rule(
      filterInput.coordinates.ra,
      filterInput.coordinates.dec,
      filterInput.coordinates.radius
    );
    if (typeof validation === "string") {
      messages.push(validation);
      isValid = false;
    }
  });
  return [isValid, messages];
}
