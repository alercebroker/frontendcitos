import { objectRepository } from "@/infrastructure/adapters/object.repository";
import { getObjectsListUseCase } from "./getobjects.uc";

export const getObjectList = getObjectsListUseCase(objectRepository);
