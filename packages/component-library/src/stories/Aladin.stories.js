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
      meanra: 185.72886239827588,
      meandec: 15.823611163793103,
    },
  ],
  initObjectId: "ZTF20aaelulu",
};
