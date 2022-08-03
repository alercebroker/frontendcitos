import { ObjectFilter } from "@/domain/entities/filters/object.filters";
import { ObjectEntity, mjdToGreg } from "@/domain/entities/object.entity";
import { PaginatedList } from "@/domain/entities/paginatedlist.entity";
import { ObjectRespository } from "@/domain/ports/objects";
import {
  listObjectResponse,
  objectListItem,
  Parser,
  HttpError,
  ParseError,
  AlertsClient,
} from "@alercebroker/http-client";

import { err, ok, Result } from "neverthrow";

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
      objectListParser
    );
    return ok(result);
  } catch (error) {
    //u wot m8 (can this be other type)
    if (error instanceof Error) {
      return err(error);
    }
    throw error;
  }
}

export const objectRepository: ObjectRespository = {
  getObjects,
  getObject: function (
    id: string
  ): Promise<Result<ObjectEntity, ParseError | HttpError>> {
    throw new Error("Function not implemented.");
  },
};
