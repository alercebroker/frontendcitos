import type { ObjectListDTO } from "@/app/object/domain";
import type { FilterObject } from "@/app/object/infrastructure/ObjectService.types";
import type { SearchObjects } from "@/app/object/use-case/SearchObjects";
import { defineStore } from "pinia";
import { parseInput } from "./parseInput";
import type { SearchInput } from "./types";

export type PremadeQuery = {
  title: string;
  category: string;
  description: string;
  image: string;
  filters: FilterObject;
};

export type SearchState = {
  filters: FilterObject;
  premadeQueries: PremadeQuery[];
  results: ObjectListDTO;
};

export const useStore = (searchObjectsUseCase: SearchObjects) => {
  return defineStore("search", {
    state: (): SearchState => ({
      filters: {
        aid: [],
        oid: [],
        ndet: {
          min: -999,
          max: -999,
        },
        firstmjd: {
          min: -999,
          max: -999,
        },
        ra: -999,
        dec: -999,
        radius: -999,
      },
      premadeQueries: [
        {
          title: "Query Title 1",
          category: "Query Category",
          description: "Query Description",
          image:
            "https://alerce-science.s3.amazonaws.com/images/nick_hall_alerce_star_trail_web01.max-1600x900.jpg",
          filters: {
            aid: [],
            oid: [],
            ndet: {
              min: -999,
              max: -999,
            },
            firstmjd: {
              min: -999,
              max: -999,
            },
            ra: -999,
            dec: -999,
            radius: -999,
          },
        },
        {
          title: "Query Title 2",
          category: "Query Category",
          description: "Query Description",
          image:
            "https://alerce-science.s3.amazonaws.com/images/nick_hall_alerce_star_trail_web01.max-1600x900.jpg",
          filters: {
            aid: [],
            oid: [],
            ndet: {
              min: -999,
              max: -999,
            },
            firstmjd: {
              min: -999,
              max: -999,
            },
            ra: -999,
            dec: -999,
            radius: -999,
          },
        },
        {
          title: "Query Title 3",
          category: "Query Category",
          description: "Query Description",
          image:
            "https://alerce-science.s3.amazonaws.com/images/nick_hall_alerce_star_trail_web01.max-1600x900.jpg",
          filters: {
            aid: [],
            oid: [],
            ndet: {
              min: -999,
              max: -999,
            },
            firstmjd: {
              min: -999,
              max: -999,
            },
            ra: -999,
            dec: -999,
            radius: -999,
          },
        },
        {
          title: "Query Title 4",
          category: "Query Category",
          description: "Query Description",
          image:
            "https://alerce-science.s3.amazonaws.com/images/nick_hall_alerce_star_trail_web01.max-1600x900.jpg",
          filters: {
            aid: [],
            oid: [],
            ndet: {
              min: -999,
              max: -999,
            },
            firstmjd: {
              min: -999,
              max: -999,
            },
            ra: -999,
            dec: -999,
            radius: -999,
          },
        },
      ],
      results: {
        total: 0,
        page: 1,
        next: -1,
        has_next: false,
        prev: -1,
        has_prev: false,
        items: [],
      },
    }),
    actions: {
      search(filters: SearchInput) {
        const parsedFilters = parseInput(filters);
        searchObjectsUseCase.execute(parsedFilters, {
          respondWithSuccess: (data: ObjectListDTO) => {
            this.results = data;
          },
          respondWithClientError: () => {},
          respondWithParseError: () => {},
          respondWithServerError: () => {},
        });
      },
    },
  });
};
