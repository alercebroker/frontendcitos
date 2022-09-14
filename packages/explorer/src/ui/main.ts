import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar, Dark } from "quasar";
import VChart from "vue-echarts";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "echarts";
import "echarts/lib/chart/custom";

// Import Quasar css
import "quasar/src/css/index.sass";

const createdPinia = createPinia();
import App from "./App.vue";
import router from "./router";
const app = createApp(App);
app.use(createdPinia);
app.use(router);
app.component("v-chart", VChart);
app.use(Quasar, {
  plugins: {},
});
Dark.set(false);

app.mount("#app");
