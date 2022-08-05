import { gregToMjd, mjdToGreg } from "@/domain/objects/entities";
import { objectRepository } from "@/app/object/adapters";
import { convertMjdUseCase } from "./convertMjd";
import { getObjectListUseCase } from "./getObjectList";
import { convertGregUseCase } from "./convertGreg";

const getObjectListUseCaseResolved = getObjectListUseCase(objectRepository);
const convertMjdUseCaseResolved = convertMjdUseCase(mjdToGreg);
const convertGregUseCaseResolved = convertGregUseCase(gregToMjd);

export {
  getObjectListUseCaseResolved as getObjectListUseCase,
  convertMjdUseCaseResolved as convertMjdUseCase,
  convertGregUseCaseResolved as convertGregUseCase,
};
