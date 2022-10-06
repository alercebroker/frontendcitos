import { objectStoreFactory } from "./objects";
import { getObjectList, getLightcurve } from "@/application/objects";
import { LocalTokenHandler } from "@/application/common/tokenhandler";
import { authStoreFactory } from "@alercebroker/component-library/src/utils/stores";

const userStore = authStoreFactory(
  LocalTokenHandler(),
  process.env.VUE_APP_AUTH_API_URL
);
const objectStore = objectStoreFactory(getObjectList, getLightcurve);

export { objectStore as useObjectStore, userStore as useAuth };
