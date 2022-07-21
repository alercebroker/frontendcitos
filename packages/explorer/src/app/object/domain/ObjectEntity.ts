import { Entity } from "@/common/domain/Entity";
import type { IObject, ObjectModel } from "./Object.types";

export class ObjectEntity extends Entity<ObjectModel> implements IObject {
  constructor(props: ObjectModel) {
    super(props);
  }

  getCoordinates() {
    return { ra: this.props.ra, dec: this.props.dec };
  }

  getCoordinatesHms() {
    return { ra: this.props.ra.toString(), dec: this.props.dec.toString() };
  }

  getFirstUTCDate(): Date {
    return new Date();
  }

  getLastUTCDate(): Date {
    return new Date();
  }
}
