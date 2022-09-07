import { objectStoreFactory } from "./objects";
import { getObjectList } from "@/application/objects";
import { LocalTokenHandler } from "@/application/common/tokenhandler";
import { authStoreFactory } from "@alercebroker/component-library/src/utils/stores";

const userStore = authStoreFactory(LocalTokenHandler(), "dev");
const objectStore = objectStoreFactory(getObjectList);

export { objectStore as useObjectStore, userStore as useAlerceAuth };