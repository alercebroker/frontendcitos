import { createApp } from "vue";
import { Quasar } from "quasar";
import VueECharts from "vue-echarts";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.css";
import App from "./App.vue";

const app = createApp(App as any);

app
  .use(Quasar, {
    plugins: {},
  })
  .component('v-chart', VueECharts)

app.mount("#app");
