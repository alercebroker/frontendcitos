import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar, Dark } from "quasar";
import VChart from "vue-echarts";

import App from "./App.vue";

import "echarts";
import "echarts/lib/chart/custom";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.css";

const app = createApp(App as any);

app
  .use(createPinia())
  .use(Quasar, { plugins: {} })
  .component("v-chart", VChart);
Dark.set(true);

app.mount("#app");
