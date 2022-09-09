import {
  raToHms,
  mjdToGreg,
  type ObjectEntity,
  type ObjectListFilters,
  type SingleObjectResponseEntity,
  type LightCurveEntity,
  decToHms,
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
  ObjectEntity
> = {
  parseTo: (
    response: singleObjectResponse
  ): ObjectEntity => {
    const result: ObjectEntity = {
      aid: response.aid,
      ra: response.meanra,
      dec: response.meandec,
      firstmjd: response.firstmjd,
      lastmjd: response.lastmjd,
      firstGreg: mjdToGreg(response.firstmjd),
      lastGreg: mjdToGreg(response.lastmjd),
      raHms: raToHms(response.meanra),
      decHms: decToHms(response.meandec),
    };
    return result;
  },
};


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
): Promise<Result<SingleObjectResponseEntity, ParseError | HttpError>> {
  throw new Error("Not Implemented");
  // try {
  //   const config: ClientConfig = {
  //     baseUrl:
  //       import.meta.env.ALERTS_API_URL ||
  //       "https://dev.api.alerce.online/alerts/v2",
  //   };
  //   const result = await AlertsClient.querySingleObject<ObjectEntity
  //   >(id, objectSingleParser, undefined, config);
  //   return ok(result);
  // } catch (error) {
  //   if (error instanceof Error) {
  //     if (isHttpError(error) || isParseError(error)) {
  //       return err(error);
  //     }
  //   }
  //   // Unknown error, just rethrow
  //   throw error;
  // }
}

async function getLightCurve(
  id: string
): Promise<Result<LightCurveEntity, HttpError | ParseError>> {
  throw new Error("Not Implemented");
}
