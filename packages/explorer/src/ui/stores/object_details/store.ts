import type { Command } from "@/common/use-case";
import type {
  SingleObjectEntity,
  MagStatEntity,
  ProbabiilyEntity,
  DetectionEntity,
  NonDetectionEntity,
  ObjectBasicInfoEntity,
  LightCurveEntity
} from "@/domain/objects/entities";
import type {
  HttpError,
  ParseError,
} from "@alercebroker/http-client/build/main/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export type Errors = {
  generic: Error | null;
  client: HttpError | null;
  server: HttpError | null;
  parse: ParseError | null;
  inputError: Error[] | null;
};

export const objectDetailsStore = (
  getObjectSingleUseCase: Command,
  getObjectLightCurveUseCase: Command,
) => {
  return defineStore("objectDetails", () => {
    const objectDetails = ref<ObjectBasicInfoEntity>({
      aid: "",
      oid: [],
      ra: 0,
      dec: 0,
      firstmjd: 0.0,
      lastmjd: 0.0,
      firstGreg: "",
      lastGreg: "",
      raHms: "",
      decHms: "",
      ndet: 0,
    });
    const objectMagStats = ref<MagStatEntity[]>([
    ]);
    const objectProbabilities = ref<ProbabiilyEntity[]>([
    ]);
    const objectDetections = ref<DetectionEntity[]>([
    ]);
    const objectNonDetections = ref<NonDetectionEntity[]>([
    ])

    const errors = ref<Errors>({
      generic: null,
      client: null,
      server: null,
      parse: null,
      inputError: null,
    });

    function getObjectBasicInfo(targetAid: string) {
      getObjectSingleUseCase.execute(
        {
          handleSuccess: (data: SingleObjectEntity) => {
            objectDetails.value = data.object_basic_info;
            objectMagStats.value = data.magstats;
            objectProbabilities.value = data.probabilities;
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
    function getObjectLightCurve(targetAid: string) {
      getObjectLightCurveUseCase.execute(
        {
          handleSuccess: (data: LightCurveEntity) => {
            objectDetections.value = data.detections;
            objectNonDetections.value = data.nonDetections
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
      objectMagStats,
      objectProbabilities,
      objectDetections,
      objectNonDetections,
      errors,
      getObjectBasicInfo,
      getObjectLightCurve
    };
  });
};
