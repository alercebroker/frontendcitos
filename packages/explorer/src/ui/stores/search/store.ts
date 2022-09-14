import type { Command } from "@/common/use-case";
import type { ObjectEntity } from "@/domain/objects/entities";
import type {
  HttpError,
  PaginatedListEntity,
  ParseError,
} from "@alercebroker/http-client/build/main/types";
import {
  serializeParams,
  serializeParamsReverse,
} from "@alercebroker/http-client";
import { defineStore } from "pinia";
import { ref } from "vue";
import { parseInput } from "./parseInput";
import type { SearchInput } from "./types";
import { validateInputFilters } from "./validateInput";
import router from "@/ui/router";
import type { LocationQueryRaw } from "vue-router";

export type PremadeQuery = {
  title: string;
  category: string;
  description: string;
  image: string;
  filters: SearchInput;
};

export type Errors = {
  generic: Error | null;
  client: HttpError | null;
  server: HttpError | null;
  parse: ParseError | null;
  inputError: Record<string, string | undefined>;
};

export const searchStore = (
  searchObjectsUseCase: Command,
  convertMjdUseCase: Command,
  convertGregUseCase: Command
) => {
  return defineStore("search", () => {
    const filters = ref<SearchInput>({
      oid: "",
      ndet: {
        min: null,
        max: null,
      },
      firstmjdDate: {
        from: null,
        to: null,
      },
      firstmjd: {
        from: null,
        to: null,
      },
      coordinates: {
        ra: null,
        dec: null,
        radius: null,
      },
      sortBy: "",
      descending: false,
      page: 1,
      rowsPerPage: 20,
    });

    const premadeQueries = ref<PremadeQuery[]>([
      {
        title: "Query Title 1",
        category: "Query Category",
        description: "Query Description",
        image:
          "https://alerce-science.s3.amazonaws.com/images/nick_hall_alerce_star_trail_web01.max-1600x900.jpg",
        filters: {
          oid: "",
          ndet: {
            min: null,
            max: null,
          },
          firstmjdDate: {
            from: null,
            to: null,
          },
          firstmjd: {
            from: null,
            to: null,
          },
          coordinates: {
            ra: null,
            dec: null,
            radius: null,
          },
          sortBy: "",
          descending: false,
          page: 1,
          rowsPerPage: 20,
        },
      },
      {
        title: "Query Title 2",
        category: "Query Category",
        description: "Query Description",
        image:
          "https://alerce-science.s3.amazonaws.com/images/nick_hall_alerce_star_trail_web01.max-1600x900.jpg",
        filters: {
          oid: "",
          ndet: {
            min: null,
            max: null,
          },
          firstmjdDate: {
            from: null,
            to: null,
          },
          firstmjd: {
            from: null,
            to: null,
          },
          coordinates: {
            ra: null,
            dec: null,
            radius: null,
          },
          sortBy: "",
          descending: false,
          page: 1,
          rowsPerPage: 20,
        },
      },
      {
        title: "Query Title 3",
        category: "Query Category",
        description: "Query Description",
        image:
          "https://alerce-science.s3.amazonaws.com/images/nick_hall_alerce_star_trail_web01.max-1600x900.jpg",
        filters: {
          oid: "",
          ndet: {
            min: null,
            max: null,
          },
          firstmjdDate: {
            from: null,
            to: null,
          },
          firstmjd: {
            from: null,
            to: null,
          },
          coordinates: {
            ra: null,
            dec: null,
            radius: null,
          },
          sortBy: "",
          descending: false,
          page: 1,
          rowsPerPage: 20,
        },
      },
      {
        title: "Query Title 4",
        category: "Query Category",
        description: "Query Description",
        image:
          "https://alerce-science.s3.amazonaws.com/images/nick_hall_alerce_star_trail_web01.max-1600x900.jpg",
        filters: {
          oid: "",
          ndet: {
            min: null,
            max: null,
          },
          firstmjdDate: {
            from: null,
            to: null,
          },
          firstmjd: {
            from: null,
            to: null,
          },
          coordinates: {
            ra: null,
            dec: null,
            radius: null,
          },
          sortBy: "",
          descending: false,
          page: 1,
          rowsPerPage: 20,
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
      inputError: {
        ra: undefined,
        dec: undefined,
        radius: undefined,
      },
    });

    const loading = ref<boolean>(false);

    const columns = ref([
      {
        name: "oid",
        label: "ObjectId",
        field: "aid",
        required: true,
      },
      {
        name: "ndet",
        label: "Num. of Detections",
        field: "ndet",
        required: true,
      },
      {
        name: "firstmjd",
        label: "FirstMJD",
        field: "firstmjd",
        format: (val: number, _: any) => `${val.toFixed(3)}`,
        required: true,
      },
      {
        name: "lastmjd",
        label: "LastMJD",
        field: "lastmjd",
        format: (val: number, _: any) => `${val.toFixed(3)}`,
        required: true,
      },
      {
        name: "radec",
        label: "RA/Dec(Degrees)",
        field: (row: ObjectEntity) =>
          `${row.ra.toFixed(3)},${row.dec.toFixed(3)}`,
        required: true,
      },
      {
        name: "deltajd",
        label: "DeltaJD(days)",
        field: (row) => {
          return row.lastmjd - row.firstmjd;
        },
        required: true,
      },
    ]);

    function searchFromCard() {
      filters.value.page = 1;
      search();
    }

    function resetInputErrors() {
      errors.value.inputError = {
        ra: undefined,
        dec: undefined,
        radius: undefined,
      };
    }

    function resetErrors() {
      errors.value.generic = null;
      errors.value.client = null;
      errors.value.server = null;
      errors.value.parse = null;
      resetInputErrors();
    }

    function search(redirect = true) {
      loading.value = true;
      resetErrors();
      const [isValid, inputErrors] = validateInputFilters(filters.value);
      if (!isValid) {
        errors.value.inputError = inputErrors;
        return;
      }
      const parsedFilters = parseInput(filters.value);
      searchObjectsUseCase.execute(
        {
          handleSuccess: async (data: PaginatedListEntity<ObjectEntity>) => {
            loading.value = false;
            results.value = data;
            const queryString = serializeParams(parsedFilters, {
              encode: false,
            });
            const queryStringJson = serializeParamsReverse(queryString);
            if ( redirect ) {
              router.push({
                name: "results",
                query: queryStringJson as LocationQueryRaw,
              });
            }
          },
          handleError: {
            handleGenericError: (error: Error) => {
              loading.value = false;
              errors.value.generic = error;
            },
            handleHttpClientError: (error: HttpError) => {
              loading.value = false;
              errors.value.client = error;
            },
            handleHttpServerError: (error: HttpError) => {
              loading.value = false;
              errors.value.server = error;
            },
            handleParseError: (error: ParseError) => {
              loading.value = false;
              errors.value.parse = error;
            },
          },
        },
        parsedFilters
      );
    }

    function convertGregToMjd(gregDate: string | null): number | null {
      let result = null;
      if (!gregDate) return result;
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

    function convertMjdToGreg(mjd: number | null): string | null {
      let result = null;
      if (!mjd) return result;
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

    function fillParameters(premadeQueryTitle: string): void {
      const foundQuery = premadeQueries.value.find((query) => {
        return query.title === premadeQueryTitle;
      });
      if (!foundQuery) return;
      filters.value = foundQuery.filters;
    }

    function clearFilters() {
      filters.value = {
        oid: "",
        ndet: {
          min: null,
          max: null,
        },
        firstmjdDate: {
          from: null,
          to: null,
        },
        firstmjd: {
          from: null,
          to: null,
        },
        coordinates: {
          ra: null,
          dec: null,
          radius: null,
        },
        sortBy: "",
        descending: false,
        page: 1,
        rowsPerPage: 20,
      };
    }

    return {
      filters,
      premadeQueries,
      errors,
      searchFromCard,
      search,
      results,
      columns,
      convertGregToMjd,
      convertMjdToGreg,
      fillParameters,
      clearFilters,
      loading,
    };
  });
};
