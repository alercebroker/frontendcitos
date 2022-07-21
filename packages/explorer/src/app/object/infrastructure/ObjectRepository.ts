/**
 * This file contains the implementation of the ObjectRepository class.
 * ObjectRepository class should fetch objects using the http-client library,
 * more specifically with the AlertsAPI class of this library.
 * */

import { TYPES } from "@/common/container/types";
import type {
  AlertsClient,
  HttpError,
  ParseError,
} from "@alercebroker/http-client";
import { inject, injectable } from "inversify";
import type { Result } from "neverthrow";
import type { Filters, IObjectRepository, ObjectEntity } from "../domain";
import type { ObjectListEntity } from "../domain/ObjectListEntity";

@injectable()
export class ObjectRepository implements IObjectRepository {
  private gateway: AlertsClient;
  constructor(@inject(TYPES.AlertsClient) gateway: AlertsClient) {
    this.gateway = gateway;
  }
  getObject(): ObjectEntity {
    throw new Error("Not Implemented");
  }
  getObjects(
    filters: Filters
  ): Result<ObjectListEntity, ParseError | HttpError> {
    throw new Error("Not Implemented");
  }
}
