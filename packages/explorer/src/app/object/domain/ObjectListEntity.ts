import { Entity } from "@/common/domain/Entity";
import type { IObjectList, ObjectListModel } from "./Object.types";

export class ObjectListEntity
  extends Entity<ObjectListModel>
  implements IObjectList
{
  constructor(props: ObjectListModel) {
    super(props);
  }
}
