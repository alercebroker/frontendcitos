import { containerBuilder } from "@/common/container/container";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar, Dark } from "quasar";
// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";

// Import Quasar css
import "quasar/src/css/index.sass";

const createdPinia = createPinia();
containerBuilder();
import App from "./App.vue";
import router from "./router";
const app = createApp(App);
app.use(createdPinia);
app.use(router);
app.use(Quasar, {
  plugins: {},
});
Dark.set(false);

app.mount("#app");
