import { fileURLToPath, URL } from "url";
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

const include = (mode: string | undefined) => {
  if (mode === "integration") {
    return ["**/*.integration.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"];
  } else {
    return ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"];
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: false,
    include: include(process.env.TEST_MODE),
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: "src/ui/quasar-variables.sass",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@ui": fileURLToPath(new URL("./src/ui", import.meta.url)),
      "@common": fileURLToPath(new URL("./src/common", import.meta.url)),
      "@app": fileURLToPath(new URL("./src/app", import.meta.url)),
    },
  },
});
