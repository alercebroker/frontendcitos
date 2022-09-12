import { createApp } from "vue";
import { Quasar } from "quasar";
import VueECharts from "vue-echarts";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.css";
import App from "./App.vue";
import { createPinia } from "pinia";

const app = createApp(App as any);

app
  .use(Quasar, {
    plugins: {},
  })
  .use(createPinia())
  .component('v-chart', VueECharts)

app.mount("#app");
