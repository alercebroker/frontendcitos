import type {
  ObjectEntity,
  ObjectListFilters,
  SingleObjectEntity,
  LightCurveEntity,
} from "@/domain/objects/entities";
import type { ObjectRepository } from "@/domain/objects/ports";
import {
  HttpError,
  ParseError,
  type PaginatedListEntity,
} from "@alercebroker/http-client/build/main/types";
import { err, ok, type Result } from "neverthrow";

let testType: string;

export function __setTestType(tt: string) {
  testType = tt;
}

export const objectRepository: ObjectRepository = {
  getObject: (id: string): Promise<Result<SingleObjectEntity, HttpError | ParseError>> => {
    if (testType === "success") {
      // here goes the expected singleObject
      throw new Error("Not Implemented");
    }
    if (testType === "clientError") {
      return new Promise((resolve) => {
        resolve(err(HttpError.fromStatus(400)));
      });
    }
    if (testType === "serverError") {
      return new Promise((resolve) => {
        resolve(err(HttpError.fromStatus(500)));
      });
    }
    if (testType === "parseError") {
      return new Promise((resolve) => {
        resolve(err(new ParseError("Parse Error")));
      });
    }
    return new Promise((resolve) => {
      resolve(err(new Error("Other cases not implemented")));
    });
  },
  getLightCurve: (id: string): Promise<Result<LightCurveEntity, HttpError | ParseError>> => {
    if (testType === "success") {
      return new Promise((resolve) => {
        resolve(
          ok({
            detections: [
              {
                aid: "AL22kyjplrvzrqwhg",
                oid: "ZTF18achqnnp",
                tid: "ZTF",
                mjd: 59813.449780100025,
                candid: "2059449780215010011",
                fid: 2,
                isdiffpos: -1,
                mag: 18.094682693481445,
                e_mag: 0.12231238931417465,
                ra: 69.3842877,
                dec: 15.2353628,
                rb: 0.45428571105003357,
                rbversion: "t17_f5_c3",
                has_stamp: true,
                corrected: true,
                step_id_corr: "dev",
                parent_candid: "nan"
              },
              {
                aid: "AL22kyjplrvzrqwhg",
                oid: "ZTF18achqnnp",
                tid: "ZTF",
                mjd: 59814.448356499895,
                candid: "2060448356015010001",
                fid: 1,
                isdiffpos: -1,
                mag: 19.929550170898438,
                e_mag: 0.21395735442638397,
                ra: 69.3844655,
                dec: 15.2354378,
                rb: 0.949999988079071,
                rbversion: "t17_f5_c3",
                has_stamp: true,
                corrected: true,
                step_id_corr: "dev",
                parent_candid: "nan"
              },
            ],
            non_detections: [
              {
                tid: "ZTF",
                mjd: 59783.47290509986,
                fid: 2,
                diffmaglim: 19.330299377441406
              },
              {
                tid: "ZTF",
                mjd: 59783.47538190009,
                fid: 2,
                diffmaglim: 19.388599395751953
              },
            ],
          })
        );
      });
    }
    if (testType === "serverError") {
      return new Promise((resolve) => {
        resolve(err(HttpError.fromStatus(500)));
      });
    }
    if (testType === "parseError") {
      return new Promise((resolve) => {
        resolve(err(new ParseError("Parse Error")));
      });
    }
    return new Promise((resolve) => {
      resolve(err(new Error("Other cases not implemented")));
    });
  },
  getObjects: (
    _filters: ObjectListFilters
  ): Promise<
    Result<PaginatedListEntity<ObjectEntity>, ParseError | HttpError>
  > => {
    if (testType === "success") {
      return new Promise((resolve) => {
        resolve(
          ok({
            total: 1,
            page: 1,
            next: 2,
            hasNext: false,
            prev: 0,
            hasPrev: false,
            items: [
              {
                aid: "aid",
                ra: 1,
                dec: 1,
                ndet: 1,
                firstmjd: 1,
                lastmjd: 1,
                firstGreg: "utc",
                lastGreg: "utc",
                raHms: "hms",
                decHms: "hms",
              },
            ],
          })
        );
      });
    }
    if (testType === "clientError") {
      return new Promise((resolve) => {
        resolve(err(HttpError.fromStatus(400)));
      });
    }
    if (testType === "serverError") {
      return new Promise((resolve) => {
        resolve(err(HttpError.fromStatus(500)));
      });
    }
    if (testType === "parseError") {
      return new Promise((resolve) => {
        resolve(err(new ParseError("Parse Error")));
      });
    }
    return new Promise((resolve) => {
      resolve(err(new Error("Other cases not implemented")));
    });
  },
};
