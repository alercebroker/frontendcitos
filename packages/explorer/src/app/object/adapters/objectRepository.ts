import {
  raToHms,
  mjdToGreg,
  type ObjectEntity,
  type ObjectListFilters,
  type SingleObjectEntity,
  type LightCurveEntity,
  decToHms,
  type MagStatEntity,
  type ProbabiilyEntity,
  type DetectionEntity,
} from "@/domain/objects/entities";
import type { ObjectRepository } from "@/domain/objects/ports";
import {
  AlertsClient,
  isHttpError,
  isParseError,
} from "@alercebroker/http-client";
import type {
  listObjectResponse,
  singleObjectResponse,
  objectListItem,
  Parser,
  HttpError,
  ParseError,
  PaginatedListEntity,
  ClientConfig,
  magstatsResponse,
  probabilitiesResponse,
  DetectionItem,
} from "@alercebroker/http-client/build/main/types";
import { err, ok, type Result } from "neverthrow";

export const objectRepository: ObjectRepository = {
  getObjects,
  getObject,
  getLightCurve,
};

export const objectListParser: Parser<
  listObjectResponse,
  PaginatedListEntity<ObjectEntity>
> = {
  parseTo: (
    response: listObjectResponse
  ): PaginatedListEntity<ObjectEntity> => {
    const result: PaginatedListEntity<ObjectEntity> = {
      total: response.total,
      page: response.page,
      next: response.next,
      hasNext: response.has_next,
      prev: response.prev,
      hasPrev: response.has_prev,
      items: parseItems(response.items),
    };
    return result;
  },
};

function parseItems(items: objectListItem[]): ObjectEntity[] {
  return items.map((item) => {
    const objectEntity: ObjectEntity = {
      aid: item.aid,
      ra: item.meanra,
      dec: item.meandec,
      ndet: item.ndet,
      firstmjd: item.firstmjd,
      firstGreg: mjdToGreg(item.firstmjd),
      lastmjd: item.lastmjd,
      lastGreg: mjdToGreg(item.lastmjd),
      raHms: raToHms(item.meanra),
      decHms: decToHms(item.meandec),
    };
    return objectEntity;
  });
}

export const objectSingleParser: Parser<
  singleObjectResponse,
  SingleObjectEntity
> = {
  parseTo: (
    response: singleObjectResponse
  ): SingleObjectEntity => {
    const result: SingleObjectEntity = {
      object_basic_info: {
        aid: response.aid,
        oid: response.oid,
        ra: response.meanra,
        dec: response.meandec,
        firstmjd: response.firstmjd,
        lastmjd: response.lastmjd,
        firstGreg: mjdToGreg(response.firstmjd),
        lastGreg: mjdToGreg(response.lastmjd),
        raHms: raToHms(response.meanra),
        decHms: decToHms(response.meandec),
        ndet: response.ndet,
      },
      magstats: parseMagstats(response.magstats),
      probabilities: parseProbabilities(response.probabilities)
    };
    return result;
  },
};

function parseMagstats(magstatsList: magstatsResponse[]): MagStatEntity[] {
  return magstatsList.map( (item) => {
    const magStatEntity: MagStatEntity = {
      fid: item.fid,
      ndet: item.ndet,
      magmean: item.magmean,
      magmedian: item.magmedian,
      magmax: item.magmax,
      magmin: item.magmin,
      magsigma: item.magsigma,
      maglast: item.maglast,
      magfirst: item.magfirst,
      firstmjd: item.firstmjd,
      lastmjd: item.lastmjd,
      ingestion_step: item["ingestion-step"],
    };
    return magStatEntity;
  });
}

function parseProbabilities(probabilitiesList: probabilitiesResponse[]): ProbabiilyEntity[] {
  return probabilitiesList.map( (item) => {
    const probabilityEntity: ProbabiilyEntity = {
      classifier_name: item.classifier_name,
      classifier_version: item.classifier_version,
      class_name: item.class_name,
      probability: item.probability,
      ranking: item.ranking,
    };
    return probabilityEntity;
  });
}

export const lightCurveParser: Parser<
  DetectionItem[],
  LightCurveEntity
> = {
  parseTo: (
    response: DetectionItem[]
  ): LightCurveEntity => {
    const result: LightCurveEntity = {
      detections: parseDetections(response),
      non_detections: []
    };
    return result;
  },
};

function parseDetections(detectionList: DetectionItem[]): DetectionEntity[] {
  return detectionList.map( (item) => {
    const detectionEntity: DetectionEntity = {
      aid: item.aid,
      oid: item.oid,
      tid: item.tid,
      mjd: item.mjd,
      candid: item.candid,
      fid: item.fid,
      isdiffpos: item.isdiffpos,
      mag: item.mag,
      e_mag: item.e_mag,
      ra: item.ra,
      dec: item.dec,
      rb: item.rb,
      rbversion: item.rbversion,
      has_stamp: item.has_stamp,
      corrected: item.corrected,
      step_id_corr: item.step_id_corr,
      parent_candid: item.parent_candid,
    };
    return detectionEntity;
  });
}

async function getObjects(
  filters: ObjectListFilters
): Promise<Result<PaginatedListEntity<ObjectEntity>, ParseError | HttpError>> {
  try {
    const config: ClientConfig = {
      baseUrl:
        import.meta.env.ALERTS_API_URL ||
        "https://dev.api.alerce.online/alerts/v2",
    };
    const result = await AlertsClient.queryObjects<
      PaginatedListEntity<ObjectEntity>
    >(filters, objectListParser, undefined, config);
    return ok(result);
  } catch (error) {
    if (error instanceof Error) {
      if (isHttpError(error) || isParseError(error)) {
        return err(error);
      }
    }
    // Unknown error, just rethrow
    throw error;
  }
}

async function getObject(
  id: string
): Promise<Result<SingleObjectEntity, ParseError | HttpError>> {
  try {
    const config: ClientConfig = {
      baseUrl:
        import.meta.env.ALERTS_API_URL ||
        "https://dev.api.alerce.online/alerts/v2",
    };
    const result = await AlertsClient.querySingleObject<SingleObjectEntity
    >(id, objectSingleParser, undefined, config);
    return ok(result);
  } catch (error) {
    if (error instanceof Error) {
      if (isHttpError(error) || isParseError(error)) {
        return err(error);
      }
    }
    // Unknown error, just rethrow
    throw error;
  }
}

async function getLightCurve(
  id: string
): Promise<Result<LightCurveEntity, HttpError | ParseError>> {
  try {
    const config: ClientConfig = {
      baseUrl:
        import.meta.env.ALERTS_API_URL ||
        "https://dev.api.alerce.online/alerts/v2",
    };
    const result = await AlertsClient.queryDetections<LightCurveEntity
    >(id, lightCurveParser, undefined, config);
    return ok(result);
  } catch (error) {
    if (error instanceof Error) {
      if (isHttpError(error) || isParseError(error)) {
        return err(error);
      }
    }
    // Unknown error, just rethrow
    throw error;
  }
}
