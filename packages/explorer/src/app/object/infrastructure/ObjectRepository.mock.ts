import { HttpError, ParseError } from "@alercebroker/http-client";
import { inject, injectable } from "inversify";
import { err, ok, type Result } from "neverthrow";
import { ObjectEntity, type Filters, type IObjectRepository } from "../domain";
import { ObjectListEntity } from "../domain/ObjectListEntity";

@injectable()
export class ObjectRepositoryMock implements IObjectRepository {
  private testType: string;
  constructor(@inject("testType") testType: string) {
    this.testType = testType;
  }
  getObjects(
    filters: Filters
  ): Result<ObjectListEntity, HttpError | ParseError> {
    if (this.testType === "success") {
      return ok(
        new ObjectListEntity({
          total: 1,
          page: 1,
          hasNext: false,
          hasPrev: false,
          next: "next",
          prev: "prev",
          items: [
            new ObjectEntity({
              aid: "aid",
              ra: 1,
              dec: 1,
              firstmjd: 1,
              lastmjd: 1,
            }),
          ],
        })
      );
    }
    if (this.testType === "clientError") {
      return err(HttpError.fromStatus(400));
    }
    if (this.testType === "serverError") {
      return err(HttpError.fromStatus(500));
    }
    if (this.testType === "parseError") {
      return err(new ParseError("parse error"));
    }
    return err(new Error("Other cases not implemented"));
  }
  getObject(id: string): ObjectEntity {
    throw new Error("Method not implemented.");
  }
}
