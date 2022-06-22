import { createApp } from "vue";
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.css";
import App from "./App.vue";

const app = createApp(App);

app.use(Quasar, {
  plugins: {},
});

app.mount("#app");
