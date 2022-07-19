import type { SearchInput } from "./SearchParser.types";
import { pipe } from "ramda";
import type { FilterObject } from "@/app/object/infrastructure/ObjectService.types";
import { TYPES } from "@/common/container/types";
import { container } from "@/common/container/container";
import type { SearchStoreFactory } from "@/ui/stores/search";

const UNSET = -999;

function search(filterInput: SearchInput): FilterObject {
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

const searchStore = container.get<SearchStoreFactory>(TYPES.SearchStoreFactory).create()()
export const parsedSearch = pipe(search, searchStore.search);
