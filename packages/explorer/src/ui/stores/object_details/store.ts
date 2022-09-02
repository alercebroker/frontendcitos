import type { Command } from "@/common/use-case";
import type {
  ObjectEntity,
} from "@/domain/objects/entities";
import type {
  HttpError,
  PaginatedListEntity,
  ParseError,
} from "@alercebroker/http-client/build/main/types";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export type Errors = {
  generic: Error | null;
  client: HttpError | null;
  server: HttpError | null;
  parse: ParseError | null;
  inputError: Error[] | null;
};

export const objectDetailsStore = (
  getObjectSingleUseCase: Command
) => {
  return defineStore("objectDetails", () => {
    const objectDetails = ref<ObjectEntity>({
      aid: "",
      ra: 0,
      dec: 0,
      firstmjd: 0.0,
      lastmjd: 0.0,
      firstGreg: "",
      lastGreg: "",
      raHms: "",
      decHms: "",
    });

    const errors = ref<Errors>({
      generic: null,
      client: null,
      server: null,
      parse: null,
      inputError: null,
    });

    function getObject(targetAid: string) {
      getObjectSingleUseCase.execute(
        {
          handleSuccess: (data: ObjectEntity) => {
            objectDetails.value = data
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
        targetAid
      );
    }

    return {
      objectDetails,
      errors,
      getObject,
    };
  });
};
