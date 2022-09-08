import { objectStoreFactory } from "./objects";
import { getObjectList } from "@/application/objects";
import { LocalTokenHandler } from "@/application/common/tokenhandler";
import { authStoreFactory } from "@alercebroker/component-library/src/utils/stores";

console.log(process.env);

const userStore = authStoreFactory(
  LocalTokenHandler(),
  process.env.VUE_APP_AUTH_API_URL
);
const objectStore = objectStoreFactory(getObjectList);

export { objectStore as useObjectStore, userStore as useAlerceAuth };
