import { DetectionEntity } from "@/domain/entities/detection.entity";
import { ObjectFilter } from "@/domain/entities/filters/object.filters";
import { ObjectEntity } from "@/domain/entities/object.entity";
import { PaginatedList } from "@/domain/entities/paginatedlist.entity";
import { ObjectRespository } from "@/domain/ports/objects";
import { HttpError, ParseError } from "@alercebroker/http-client/src/types";
import { err, ok, Result } from "neverthrow";

export enum TestTypes {
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
}

function getDetectionsSuccess(
  aid: string
): Promise<Result<DetectionEntity[], HttpError | ParseError>> {
  const mockDetection: DetectionEntity = {
    mjd: 50000,
    candid: "candid1",
    mag: 20,
    fid: 1,
    ra: 15,
    dec: 50,
  };

  if (aid !== "AID4321") {
    mockDetection.mag = -1;
  }

  return new Promise((resolve) => {
    resolve(ok([mockDetection]));
  });
}

function getObjectsSuccess(
  filters: ObjectFilter
): Promise<Result<PaginatedList<ObjectEntity>, HttpError | ParseError>> {
  const paginatedList: PaginatedList<ObjectEntity> = {
    total: 0,
    page: 1,
    prev: 1,
    next: 1,
    hasPrev: false,
    hasNext: false,
    items: [
      {
        aid: "AID4321",
        ra: 15,
        dec: 50,
        firstmjd: 50000,
        firstGreg: "111111",
        lastmjd: 50001,
        lastGreg: "2222222",
        firstDetection: null,
      },
      {
        aid: "AID6942",
        ra: 15,
        dec: 50,
        firstmjd: 50000,
        firstGreg: "111111",
        lastmjd: 50001,
        lastGreg: "2222222",
        firstDetection: null,
      },
    ],
  };
  return new Promise((resolve) => {
    resolve(ok(paginatedList));
  });
}

function getDetectionsFailure(
  aid: string
): Promise<Result<DetectionEntity[], HttpError | ParseError>> {
  return new Promise((resolve) => {
    resolve(err(new Error("Esto ha fallado")));
  });
}

function getObjectsFailure(
  filters: ObjectFilter
): Promise<Result<PaginatedList<ObjectEntity>, HttpError | ParseError>> {
  return new Promise((resolve) => {
    resolve(err(new Error("Esto igual ha fallado")));
  });
}

export const mockObjectRepositoryFactory = (
  type: TestTypes
): ObjectRespository => ({
  getDetections:
    type === TestTypes.SUCCESS ? getDetectionsSuccess : getDetectionsFailure,
  getObject: (id) => {
    throw new Error("Not implemented");
  },
  getObjects:
    type === TestTypes.SUCCESS ? getObjectsSuccess : getObjectsFailure,
});
