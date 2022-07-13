import AladinViewer from "../components/aladin/AladinViewer.vue";

export default {
  title: "AladinViewer",
  component: AladinViewer,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  components: { AladinViewer },
  setup() {
    return { ...args };
  },
  template: '<aladin-viewer \
              :objects="objects" \
              :init-object-id="initObjectId" />',
});

export const Aladin = Template.bind({});
Aladin.args = {
  objects: [
    {
      oid: "ZTF20aaelulu",
      ndethist: "259",
      ncovhist: 792,
      mjdstarthist: 58855.45880790008,
      mjdendhist: 58967.22704860009,
      corrected: false,
      stellar: false,
      ndet: 58,
      g_r_max: 0.44063377,
      g_r_max_corr: null,
      g_r_mean: 0.69992447,
      g_r_mean_corr: null,
      firstmjd: 58855.54229169991,
      lastmjd: 58967.22704860009,
      deltajd: 111.68475690018386,
      meanra: 185.72886239827588,
      meandec: 15.823611163793103,
      sigmara: 0.000020912251856557,
      sigmadec: 0.000015130516372812443,
      step_id_corr: "corr_bulk_0.0.1",
    },
  ],
  initObjectId: "ZTF20aaelulu",
};
