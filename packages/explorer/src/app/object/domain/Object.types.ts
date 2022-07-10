/**
 * This file defines the Object model entity
 * */

export interface ObjectModel {
  aid: string;
  ra: number;
  dec: number;
  firstmjd: number;
  lastmjd: number;
}

type Coordinates = {
  ra: number;
  dec: number;
};

export interface IObject {
  getCoordinates(): Coordinates;
  getCoordinatesHms(): Coordinates;
  getFirstUTCDate(): Date;
  getLastUTCDate(): Date;
}
