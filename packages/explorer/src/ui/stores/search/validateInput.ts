import type { SearchInput } from "./types";

const coordinateRules = [
  (
    ra: number | null,
    dec: number | null,
    radius: number | null
  ): boolean | Record<string, string> => {
    const message = "With coordinates, please provide RA, Dec and Radius";
    if (ra != null || dec != null || radius != null) {
      return (
        (ra != null && dec != null && radius != null) || {
          ra: message,
          dec: message,
          radius: message,
        }
      );
    }
    return true;
  },
  (
    ra: number | null,
    dec: number | null,
    radius: number | null
  ): boolean | Record<string, string> => {
    const message = "Value out of range";
    if (!radius || !ra || !dec) {
      return true;
    }
    if (radius < 0) {
      return { ra: message };
    }
    if (dec < -90 || dec > 90) {
      return { dec: message };
    }
    if (ra < 0 || ra > 360) {
      return { radius: message };
    }
    return true;
  },
];

function validateCoordinates(
  ra: number | null,
  dec: number | null,
  radius: number | null
): [boolean, Record<string, string>] {
  const messages: Record<string, string> = {};
  let isValid = true;
  coordinateRules.forEach((rule) => {
    const validation = rule(ra, dec, radius);
    if (typeof validation !== "boolean") {
      Object.keys(validation).forEach((key) => {
        messages[key] = validation[key];
      });
      isValid = false;
    }
  });
  return [isValid, messages];
}

export function validateInputFilters(
  filterInput: SearchInput
): [boolean, Record<string, string>] {
  let messages: Record<string, string> = {};
  let isValid = true;

  const [coordValid, coordErrors] = validateCoordinates(
    filterInput.coordinates.ra,
    filterInput.coordinates.dec,
    filterInput.coordinates.radius
  );

  isValid = coordValid;
  messages = { ...messages, ...coordErrors };

  return [isValid, messages];
}
