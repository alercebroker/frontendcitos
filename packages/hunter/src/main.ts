import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar, Dark } from "quasar";
import VChart from "vue-echarts";

import App from "./App.vue";
import router from "./router";

import "echarts";
import "echarts/lib/chart/custom";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.css";

const app = createApp(App);

app
  .use(createPinia())
  .use(router)
  .use(Quasar, { plugins: {} })
  .component("v-chart", VChart);
Dark.set(true);

app.mount("#app");
