import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.css";
import { app } from "@storybook/vue3";
import VChart from "vue-echarts";
import "echarts";

app.use(Quasar, { plugins: {} }).component("v-chart", VChart);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
