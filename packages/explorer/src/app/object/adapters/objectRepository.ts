import {
  raToHms,
  mjdToGreg,
  type ObjectEntity,
  type ObjectListFilters,
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
  objectListItem,
  Parser,
  HttpError,
  ParseError,
  PaginatedListEntity,
} from "@alercebroker/http-client/build/main/types";
import { err, ok, type Result } from "neverthrow";

export const objectRepository: ObjectRepository = {
  getObject,
  getObjects,
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

async function getObjects(
  filters: ObjectListFilters
): Promise<Result<PaginatedListEntity<ObjectEntity>, ParseError | HttpError>> {
  try {
    const result = await AlertsClient.queryObjects<
      PaginatedListEntity<ObjectEntity>
    >(filters, objectListParser);
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
): Promise<Result<ObjectEntity, ParseError | HttpError>> {
  throw new Error("Not Implemented");
}
