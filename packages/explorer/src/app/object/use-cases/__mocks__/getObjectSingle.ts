import type { Callbacks, Command } from "@/common/use-case";
import type { ObjectRepository } from "@/domain/objects/ports";

let testType: string;

export const __setTestType = (tt: string) => {
  testType = tt;
};

export const getObjectSingleUseCase = (
  _repository: ObjectRepository
): Command => ({
  execute: (
    callbacks: Callbacks,
    payload: string,
  ): void => {
    if (testType === "success") {
      callbacks.handleSuccess({
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
      });
    }
  },
});