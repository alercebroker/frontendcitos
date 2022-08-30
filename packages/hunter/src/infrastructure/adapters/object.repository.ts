import { ObjectFilter } from "@/domain/entities/filters/object.filters";
import { ObjectEntity, mjdToGreg } from "@/domain/entities/object.entity";
import { PaginatedList } from "@/domain/entities/paginatedlist.entity";
import { ObjectRespository } from "@/domain/ports/objects";
import type {
  listObjectResponse,
  objectListItem,
  Parser,
  HttpError,
  ParseError,
} from "@alercebroker/http-client/src/types";
import { AlertsClient } from "@alercebroker/http-client";

import { err, ok, Result } from "neverthrow";
import { DetectionEntity } from "@/domain/entities/detection.entity";

function parseItems(items: objectListItem[]): ObjectEntity[] {
  return items.map((item) => ({
    aid: item.aid,
    ra: item.meanra,
    dec: item.meandec,
    firstmjd: item.firstmjd,
    lastmjd: item.lastmjd,
    firstGreg: mjdToGreg(item.firstmjd),
    lastGreg: mjdToGreg(item.lastmjd),
    firstDetection: null,
  }));
}

const BASE_URL = "https://dev.api.alerce.online/alerts/v2";

export const objectListParser: Parser<
  listObjectResponse,
  PaginatedList<ObjectEntity>
> = {
  parseTo: (response: listObjectResponse) => ({
    total: response.total,
    page: response.page,
    prev: response.prev,
    next: response.next,
    hasPrev: response.has_prev,
    hasNext: response.has_next,
    items: parseItems(response.items),
  }),
};

async function getObjects(
  filters: ObjectFilter
): Promise<Result<PaginatedList<ObjectEntity>, ParseError | HttpError>> {
  try {
    const result = await AlertsClient.queryObjects<PaginatedList<ObjectEntity>>(
      filters,
      objectListParser,
      undefined,
      {
        baseUrl: BASE_URL,
      }
    );
    return ok(result);
  } catch (error) {
    if (error instanceof Error) {
      return err(error);
    }
    throw error;
  }
}

async function getDetections(
  aid: string
): Promise<Result<DetectionEntity[], ParseError | HttpError>> {
  try {
    const result = await AlertsClient.queryDetections<DetectionEntity[]>(
      aid,
      undefined,
      undefined,
      {
        baseUrl: BASE_URL,
      }
    );
    return ok(result);
  } catch (error) {
    if (error instanceof Error) return err(error);
    throw error;
  }
}

export const objectRepository: ObjectRespository = {
  getObjects,
  getDetections,
  getObject: function (
    id: string
  ): Promise<Result<ObjectEntity, ParseError | HttpError>> {
    throw new Error("Function not implemented.");
  },
};
