import type { LightCurveEntity } from "@/domain/objects/entities";

export const lightCurve : LightCurveEntity = {
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
};
