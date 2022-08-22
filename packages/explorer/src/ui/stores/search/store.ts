import type { Command } from "@/common/use-case";
import type {
  ObjectEntity,
  ObjectListFilters,
} from "@/domain/objects/entities";
import type {
  HttpError,
  PaginatedListEntity,
  ParseError,
} from "@alercebroker/http-client/build/main/types";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { parseInput, parseInputReverse } from "./parseInput";
import type { SearchInput } from "./types";
import { validateInputFilters } from "./validateInput";

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
  inputError: Error[] | null;
};

export const searchStore = (
  searchObjectsUseCase: Command,
  convertMjdUseCase: Command,
  convertGregUseCase: Command
) => {
  return defineStore("search", () => {
    const filters = ref<ObjectListFilters>({
      oid: [],
      ndet: [],
      firstmjd: [],
      ra: -999,
      dec: -999,
      radius: -999,
    });

    const premadeQueries = ref<PremadeQuery[]>([
      {
        title: "Query Title 1",
        category: "Query Category",
        description: "Query Description",
        image:
          "https://alerce-science.s3.amazonaws.com/images/nick_hall_alerce_star_trail_web01.max-1600x900.jpg",
        filters: {
          oid: [],
          ndet: [],
          firstmjd: [],
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
          oid: [],
          ndet: [],
          firstmjd: [59000, 60000],
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
          oid: [],
          ndet: [10, 20],
          firstmjd: [],
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
          oid: ["example"],
          ndet: [],
          firstmjd: [],
          ra: -999,
          dec: -999,
          radius: -999,
        },
      },
    ]);

    const results = ref<PaginatedListEntity<ObjectEntity>>({
      total: 0,
      page: 1,
      next: 2,
      hasNext: false,
      prev: 0,
      hasPrev: false,
      items: [],
    });

    const errors = ref<Errors>({
      generic: null,
      client: null,
      server: null,
      parse: null,
      inputError: null,
    });

    function search(inputFilters: SearchInput) {
      const [isValid, inputErrors] = validateInputFilters(inputFilters);
      if (!isValid) {
        errors.value.inputError = inputErrors.map((errorsito) => {
          return new Error(errorsito);
        });
        return;
      }
      const parsedFilters = parseInput(inputFilters);
      filters.value = parsedFilters;
      searchObjectsUseCase.execute(
        {
          handleSuccess: (data: PaginatedListEntity<ObjectEntity>) => {
            results.value = data;
          },
          handleError: {
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
        },
        parsedFilters
      );
    }

    function convertGregToMjd(gregDate: string): number {
      let result = -999;
      convertGregUseCase.execute(
        {
          handleSuccess: (mjd: number) => {
            result = mjd;
          },
          handleError: {
            handleGenericError: (error) => {
              errors.value.generic = error;
            },
          },
        },
        gregDate
      );
      return result;
    }

    function convertMjdToGreg(mjd: number): string {
      let result = "";
      convertMjdUseCase.execute(
        {
          handleSuccess: (greg: string) => {
            result = greg;
          },
          handleError: {
            handleGenericError: (error) => {
              errors.value.generic = error;
            },
          },
        },
        mjd
      );
      return result;
    }

    const componentFilters = computed(() => {
      return parseInputReverse(filters.value, convertMjdUseCase);
    });

    function fillParameters(premadeQueryTitle: string): void {
      const foundQuery = premadeQueries.value.find((query) => {
        return query.title === premadeQueryTitle;
      });
      if (!foundQuery) return;
      filters.value = foundQuery.filters;
    }

    return {
      filters,
      premadeQueries,
      errors,
      search,
      componentFilters,
      results,
      convertGregToMjd,
      convertMjdToGreg,
      fillParameters,
    };
  });
};
