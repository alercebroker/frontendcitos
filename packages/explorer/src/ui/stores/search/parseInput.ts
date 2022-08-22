import type { Command } from "@/common/use-case";
import type { ObjectListFilters } from "@/domain/objects/entities";
import type { SearchInput } from "./types";

const UNSET = -999;

export function parseInput(filterInput: SearchInput): ObjectListFilters {
  const oidArray = filterInput.oid.split(",").filter(Boolean);
  const ndet = [filterInput.ndet.min ?? UNSET, filterInput.ndet.max ?? UNSET];
  return {
    oid: oidArray,
    firstmjd: [
      filterInput.firstmjd.from ?? UNSET,
      filterInput.firstmjd.to ?? UNSET,
    ],
    ndet,
    ra: filterInput.coordinates.ra ?? UNSET,
    dec: filterInput.coordinates.dec ?? UNSET,
    radius: filterInput.coordinates.radius ?? UNSET,
  };
}

function convertMjd(
  convertMjdUseCase: Command,
  firstmjd: SearchInput["firstmjd"]
): SearchInput["firstmjdDate"] {
  const firstmjdDate: SearchInput["firstmjdDate"] = {
    from: null,
    to: null,
  };
  convertMjdUseCase.execute(
    {
      handleSuccess: (date: string) => {
        firstmjdDate.from = date;
      },
      handleError: {
        handleGenericError: (_) => {
          firstmjdDate.from = null;
        },
      },
    },
    firstmjd.from
  );
  convertMjdUseCase.execute(
    {
      handleSuccess: (date: string) => {
        firstmjdDate.to = date;
      },
      handleError: {
        handleGenericError: (_) => {
          firstmjdDate.to = null;
        },
      },
    },
    firstmjd.to
  );
  return firstmjdDate;
}

export function parseInputReverse(
  parsedFilters: ObjectListFilters,
  convertMjdUseCase: Command
): SearchInput {
  const ndet = {
    min: parsedFilters.ndet ? parsedFilters.ndet[0] : null,
    max: parsedFilters.ndet ? parsedFilters.ndet[1] : null,
  };
  const firstmjd = {
    from: parsedFilters.firstmjd ? parsedFilters.firstmjd[0] : null,
    to: parsedFilters.firstmjd ? parsedFilters.firstmjd[1] : null,
  };
  const firstmjdDate = convertMjd(convertMjdUseCase, firstmjd);
  const oid = parsedFilters.oid ? parsedFilters.oid.toString() : "";
  const coordinates = {
    ra: parsedFilters.ra ? parsedFilters.ra : null,
    dec: parsedFilters.dec ? parsedFilters.dec : null,
    radius: parsedFilters.radius ? parsedFilters.radius : null,
  };
  return {
    ndet,
    firstmjdDate,
    firstmjd,
    oid,
    coordinates,
  };
}
