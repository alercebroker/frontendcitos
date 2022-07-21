import { fileURLToPath, URL } from "url";
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: false,
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
