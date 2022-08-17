import { beforeAll, afterAll } from "vitest";
import { config } from "@vue/test-utils";
import { createPinia } from "pinia";
import type { Plugin } from "vue";

export function installPinia() {
  const globalConfigBackup = config.global;

  beforeAll(() => {
    config.global.plugins.unshift(createPinia() as Plugin);
  });

  afterAll(() => {
    config.global = globalConfigBackup;
  });
}
