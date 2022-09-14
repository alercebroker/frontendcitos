import type {
  ObjectEntity,
  ObjectListFilters,
  SingleObjectEntity,
  LightCurveEntity,
} from "@/domain/objects/entities";
import type { ObjectRepository } from "@/domain/objects/ports";
import type { HttpError, ParseError, PaginatedListEntity } from "@alercebroker/http-client/build/main/types/types";
import { err, ok, type Result } from "neverthrow";


export const objectRepository: ObjectRepository = {
  getObject: (
    id: string
  ): Promise<Result<SingleObjectEntity, HttpError | ParseError>> => {
    return new Promise((resolve) => {
      resolve(
        ok({
          object_basic_info: {
            aid: "aid",
            oid: ["oid1", "oid2"],
            ra: 1,
            dec: 1,
            firstmjd: 1,
            lastmjd: 1,
            firstGreg: "utc",
            lastGreg: "utc",
            raHms: "hms",
            decHms: "hms",
            ndet: 1,
          },
          magstats: [
            {
              fid: 1,
              ndet: 116,
              magmean: 18.709673,
              magmedian: 18.653234,
              magmax: 19.837292,
              magmin: 17.859047,
              magsigma: 0.4470002,
              maglast: 18.36436,
              magfirst: 18.229092,
              firstmjd: 58366.44,
              lastmjd: 59542.28,
              ingestion_step: "0.4333",
            },
            {
              fid: 2,
              ndet: 50,
              magmean: 17.327902,
              magmedian: 17.32121,
              magmax: 18.767,
              magmin: 16.580177,
              magsigma: 0.4340397,
              maglast: 18.5926,
              magfirst: 17.64601,
              firstmjd: 58366.508,
              lastmjd: 59530.367,
              ingestion_step: "0.1234",
            }
          ],
          probabilities: [
            {
              classifier_name: "stamp_classifier",
              classifier_version: "stamp_classifier_1.0.0",
              class_name: "AGN",
              probability: 0.086826704,
              ranking: 2
            },
            {
              classifier_name: "stamp_classifier",
              classifier_version: "stamp_classifier_1.0.0",
              class_name: "asteroid",
              probability: 0.059574142,
              ranking: 4
            },
            {
              classifier_name: "stamp_classifier",
              classifier_version: "stamp_classifier_1.0.0",
              class_name: "bogus",
              probability: 0.07940478,
              ranking: 3
            },
            {
              classifier_name: "stamp_classifier",
              classifier_version: "stamp_classifier_1.0.0",
              class_name: "SN",
              probability: 0.055563178,
              ranking: 5
            },
            {
              classifier_name: "stamp_classifier",
              classifier_version: "stamp_classifier_1.0.0",
              class_name: "VS",
              probability: 0.7186312,
              ranking: 1
            },
          ],
        })
      );
    });
  },
  getLightCurve: (
    id: string
  ): Promise<Result<LightCurveEntity, HttpError | ParseError>> => {
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
  },  
  getObjects: (
    _filters: ObjectListFilters
  ): Promise<
    Result<PaginatedListEntity<ObjectEntity>, ParseError | HttpError>
  > => {
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
  },
};
