import { objectStoreFactory } from "./objects";
import { getObjectList } from "@/application/objects";

const objectStore = objectStoreFactory(getObjectList);
export { objectStore as useObjectStore };
