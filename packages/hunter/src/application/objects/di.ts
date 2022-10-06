import { objectRepository } from "@/infrastructure/adapters/object.repository";
import { getDetectionsUseCase } from "./getdetections.uc";
import { getLightcurveUseCase } from "./getlightcurve.uc";
import { getObjectsListUseCase } from "./getobjects.uc";

export const getObjectList = getObjectsListUseCase(objectRepository);
export const getLightcurve = getLightcurveUseCase(objectRepository);
export const populateFirstDetections = getDetectionsUseCase(objectRepository);
