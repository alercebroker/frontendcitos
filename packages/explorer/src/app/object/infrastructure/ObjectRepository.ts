/**
 * This file contains the implementation of the ObjectRepository class.
 * ObjectRepository class should fetch objects using the http-client library,
 * more specifically with the AlertsAPI class of this library.
 * */

import type { IObjectRepository, ObjectEntity } from "../domain";

export class ObjectRepository implements IObjectRepository {
  getObject(): ObjectEntity {
    throw new Error("Not Implemented");
  }
  getObjects(): ObjectEntity[] {
    throw new Error("Not Implemented");
  }
}
