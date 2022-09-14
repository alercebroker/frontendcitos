import { gregToMjd, mjdToGreg } from "@/domain/objects/entities";
import { objectRepository } from "@/app/object/adapters";
import { objectRepository as objectRepositoryMock } from "../adapters/__mocks__";
import { convertMjdUseCase } from "./convertMjd";
import { getObjectListUseCase } from "./getObjectList";
import { getObjectSingleUseCase } from "./getObjectSingle";
import { getObjectLightCurveUseCase } from "./getObjectLightCurve";
import { convertGregUseCase } from "./convertGreg";

const getObjectListUseCaseResolved = getObjectListUseCase(objectRepositoryMock);
const getObjectSingleUseCaseResolved = getObjectSingleUseCase(objectRepositoryMock);
const getObjectLightCurveUseCaseResolved = getObjectLightCurveUseCase(objectRepositoryMock)
const convertMjdUseCaseResolved = convertMjdUseCase(mjdToGreg);
const convertGregUseCaseResolved = convertGregUseCase(gregToMjd);

export {
  getObjectListUseCaseResolved as getObjectListUseCase,
  getObjectSingleUseCaseResolved as getObjectSingleUseCase,
  getObjectLightCurveUseCaseResolved as getObjectLightCurveUseCase,
  convertMjdUseCaseResolved as convertMjdUseCase,
  convertGregUseCaseResolved as convertGregUseCase,
};
