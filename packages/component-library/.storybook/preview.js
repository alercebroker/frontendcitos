import { Quasar, Dark } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.css";
import { app } from "@storybook/vue3";
import VChart from "vue-echarts";

import "echarts";
import 'echarts/lib/chart/custom'

app.use(Quasar, { plugins: {} }).component("v-chart", VChart);
Dark.set(true);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
