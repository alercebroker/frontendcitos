/**
 * This file defines the Object model entity
 * */

import type { ObjectEntity } from "./ObjectEntity";

export interface ObjectModel {
  aid: string;
  ra: number;
  dec: number;
  firstmjd: number;
  lastmjd: number;
}

export interface ObjectListModel {
  total: number;
  page: number;
  hasNext: boolean;
  hasPrev: boolean;
  next: string;
  prev: string;
  items: ObjectEntity[];
}

type Coordinates = {
  ra: number;
  dec: number;
};

type CoordinatesHms = {
  ra: string;
  dec: string;
};

export interface IObject {
  getCoordinates(): Coordinates;
  getCoordinatesHms(): CoordinatesHms;
  getFirstUTCDate(): Date;
  getLastUTCDate(): Date;
}

export interface IObjectList {}
