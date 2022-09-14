
export type ObjectEntity = {
  aid: string;
  ra: number;
  dec: number;
  ndet: number;
  firstmjd: number;
  lastmjd: number;
  firstGreg: string;
  lastGreg: string;
  raHms: string;
  decHms: string;
};

export type ObjectBasicInfoEntity = {
  aid: string;
  oid: string[];
  ra: number;
  dec: number;
  firstmjd: number;
  lastmjd: number;
  firstGreg: string;
  lastGreg: string;
  raHms: string;
  decHms: string;
  ndet: number;
};

export type MagStatEntity = {
  fid: number;
  ndet: number;
  magmean: number;
  magmedian: number;
  magmax: number;
  magmin: number;
  magsigma: number;
  maglast: number;
  magfirst: number;
  firstmjd: number;
  lastmjd: number;
  ingestion_step: string;
};

export type ProbabiilyEntity = {
  classifier_name: string;
  classifier_version: string;
  class_name: string;
  probability: number;
  ranking: number;
}

export type DetectionEntity = {
  aid: string;
  oid: string;
  tid: string;
  mjd: number;
  candid: string;
  fid: number;
  isdiffpos: number;
  mag: number;
  e_mag: number;
  ra: number;
  dec: number;
  rb: number;
  rbversion: string;
  has_stamp: boolean;
  corrected: boolean;
  step_id_corr: string;
  parent_candid: string;
};

export type NonDetectionEntity = {
  tid: string;
  mjd: number;
  fid: number;
  diffmaglim: number;
}

export type SingleObjectEntity = {
  object_basic_info: ObjectBasicInfoEntity;
  magstats: MagStatEntity[];
  probabilities: ProbabiilyEntity[];
}

export type LightCurveEntity = {
  detections: DetectionEntity[];
  non_detections: NonDetectionEntity[];
}