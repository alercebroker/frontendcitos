import type { Command } from "@/common/use-case";
import type {
  ObjectListEntity,
  ObjectListFilters,
} from "@/domain/objects/entities";
import type { HttpError, ParseError } from "@alercebroker/http-client";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { parseInput, parseInputReverse } from "./parseInput";
import type { SearchInput } from "./types";

export type PremadeQuery = {
  title: string;
  category: string;
  description: string;
  image: string;
  filters: ObjectListFilters;
};

export type Errors = {
  generic: Error | null;
  client: HttpError | null;
  server: HttpError | null;
  parse: ParseError | null;
};

export const searchStore = (
  searchObjectsUseCase: Command,
  convertMjdUseCase: Command
) => {
  return defineStore("search", () => {
    const filters = ref<ObjectListFilters>({
      aid: [],
      oid: [],
      ndet: [],
      firstmjd: [],
      ra: -999,
      dec: -999,
      radius: -999,
    });
    const premadeQueries = ref<PremadeQuery>([
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
    ]);
    const results = ref<ObjectListEntity>({
      total: 0,
      page: 1,
      next: "",
      hasNext: false,
      prev: "",
      hasPrev: false,
      items: [],
    });
    const errors = ref<Errors>({
      generic: null,
      client: null,
      server: null,
      parse: null,
    });

    function search(inputFilters: SearchInput) {
      const parsedFilters = parseInput(inputFilters);
      filters.value = parsedFilters;
      searchObjectsUseCase.execute(
        {
          handleSuccess: (data: ObjectListEntity) => {
            results.value = data;
          },
          handleGenericError: (error: Error) => {
            errors.value.generic = error;
          },
          handleHttpClientError: (error: HttpError) => {
            errors.value.client = error;
          },
          handleHttpServerError: (error: HttpError) => {
            errors.value.server = error;
          },
          handleParseError: (error: ParseError) => {
            errors.value.parse = error;
          },
        },
        parsedFilters
      );
    }

    const componentFilters = computed(() => {
      return parseInputReverse(filters.value, convertMjdUseCase);
    });

    return {
      filters,
      premadeQueries,
      errors,
      search,
      componentFilters,
      results,
    };
  });
};
