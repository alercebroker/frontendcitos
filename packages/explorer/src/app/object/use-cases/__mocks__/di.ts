import { gregToMjd, mjdToGreg } from "@/domain/objects/entities";
import { objectRepository } from "../../adapters/objectRepository";
import { convertGregUseCase } from "./convertGreg";
import { convertMjdUseCase } from "./convertMjd";
import { getObjectListUseCase } from "./getObjectList";
import { 
  getObjectSingleUseCase,
  __setTestType as objectTestType,
} from "./getObjectSingle";
import { 
  getObjectLightCurveUseCase,
  __setTestType as lightCurveTestType
} from "./getObjectLightCurve";

objectTestType("success")
lightCurveTestType("success")

const getObjectListUseCaseResolved = getObjectListUseCase(objectRepository);
const getObjectSingleUseCaseResolved = getObjectSingleUseCase(objectRepository);
const getObjectLightCurveUseCaseResolved = getObjectLightCurveUseCase(objectRepository)
const convertMjdUseCaseResolved = convertMjdUseCase(mjdToGreg);
const convertGregUseCaseResolved = convertGregUseCase(gregToMjd);

export {
  getObjectListUseCaseResolved as getObjectListUseCase,
  getObjectSingleUseCaseResolved as getObjectSingleUseCase,
  getObjectLightCurveUseCaseResolved as getObjectLightCurveUseCase,
  convertMjdUseCaseResolved as convertMjdUseCase,
  convertGregUseCaseResolved as convertGregUseCase,
};
