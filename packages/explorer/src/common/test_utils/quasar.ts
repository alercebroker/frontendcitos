import { config } from "@vue/test-utils";
import cloneDeep from "lodash.clonedeep";
import { createPinia } from "pinia";
import { afterAll, beforeAll } from "vitest";
import type { Plugin } from "vue";
import resetStore from "../reset-store";

export function installPinia() {
  const globalConfigBackup = cloneDeep(config.global);

  beforeAll(() => {
    const piniaPlugin = createPinia();
    piniaPlugin.use(resetStore);
    config.global.plugins.unshift(piniaPlugin as Plugin);
  });

  afterAll(() => {
    config.global = globalConfigBackup;
  });
}
