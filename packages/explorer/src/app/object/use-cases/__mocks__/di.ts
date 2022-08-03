import { mjdToGreg } from "@/domain/objects/entities";
import { objectRepository } from "../../adapters/objectRepository";
import { convertMjdUseCase } from "./convertMjd";
import { getObjectListUseCase } from "./getObjectList";

const getObjectListUseCaseResolved = getObjectListUseCase(objectRepository);
const convertMjdUseCaseResolved = convertMjdUseCase(mjdToGreg);

export {
  getObjectListUseCaseResolved as getObjectListUseCase,
  convertMjdUseCaseResolved as convertMjdUseCase,
};
