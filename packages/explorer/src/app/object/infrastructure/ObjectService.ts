import { TYPES } from "@/common/container/types";
import { inject, injectable } from "inversify";
import { err, ok, type Result } from "neverthrow";
import { ParseError, type HttpError } from "@alercebroker/http-client";
import type {
  Filters,
  IObjectRepository,
  IObjectService,
  ObjectDTO,
  ObjectListDTO,
} from "../domain";

@injectable()
export class ObjectService implements IObjectService {
  private repository: IObjectRepository;
  constructor(@inject(TYPES.ObjectRepository) repository: IObjectRepository) {
    this.repository = repository;
  }
  getObject(): ObjectDTO {
    throw new Error("Not Implemented");
  }
  searchObjects(
    filters: Filters
  ): Result<ObjectListDTO, HttpError | ParseError> {
    const objects = this.repository.getObjects(filters);
    if (objects.isErr()) {
      return err(objects.error);
    } else {
      try {
        const objectListDTO: ObjectListDTO = {
          total: objects.value.getProps().total,
          page: objects.value.getProps().page,
          next: objects.value.getProps().next,
          hasNext: objects.value.getProps().hasNext,
          prev: objects.value.getProps().prev,
          hasPrev: objects.value.getProps().hasPrev,
          items: objects.value.getProps().items.map((item) => {
            return {
              aid: item.getProps().aid,
              ra: item.getProps().ra,
              dec: item.getProps().dec,
              firstmjd: item.getProps().firstmjd,
              lastmjd: item.getProps().lastmjd,
              raHms: item.getCoordinatesHms().ra,
              decHms: item.getCoordinatesHms().dec,
              firstUTC: item.getFirstUTCDate().toDateString(),
              lastUTC: item.getLastUTCDate().toDateString(),
            };
          }),
        };
        return ok(objectListDTO);
      } catch (exc) {
        console.error(exc);
        return err(new ParseError("Failed to parse object list:" + exc));
      }
    }
  }
}
