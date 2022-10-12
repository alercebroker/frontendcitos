import type { Callbacks, Command } from "@/common/use-case";
import type { ObjectRepository } from "@/domain/objects/ports";

let testType: string;

export const __setTestType = (tt: string) => {
  testType = tt;
};

export const getObjectLightCurveUseCase = (
  _repository: ObjectRepository
): Command => ({
  execute: (
    callbacks: Callbacks,
    payload: string,
  ): void => {
    if (testType === "success") {
      callbacks.handleSuccess({
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
        ],
        non_detections: [
          {
            tid: "ZTF",
            mjd: 59783.47290509986,
            fid: 2,
            diffmaglim: 19.330299377441406
          },
        ],
      });
    }
  },
});