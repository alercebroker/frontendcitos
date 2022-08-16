import { gregToMjd, mjdToGreg } from "@/domain/objects/entities";
import { objectRepository } from "../../adapters/objectRepository";
import { convertGregUseCase } from "./convertGreg";
import { convertMjdUseCase } from "./convertMjd";
import { getObjectListUseCase } from "./getObjectList";

const getObjectListUseCaseResolved = getObjectListUseCase(objectRepository);
const convertMjdUseCaseResolved = convertMjdUseCase(mjdToGreg);
const convertGregUseCaseResolved = convertGregUseCase(gregToMjd);

export {
  getObjectListUseCaseResolved as getObjectListUseCase,
  convertMjdUseCaseResolved as convertMjdUseCase,
  convertGregUseCaseResolved as convertGregUseCase,
};
