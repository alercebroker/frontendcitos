import StampCard from "../components/stamp/StampCard.vue";

export default {
  title: "StampCard",
  component: StampCard,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  components: { StampCard },
  setup: () => ({ ...args }),
  template:
    '<stamp-card :image-service-url="imageServiceUrl" \
                          :detections="detections" \
                          :object-id="objectId" \
              />',
});

export const Preview = Template.bind({});
Preview.args = {
  imageServiceUrl: "https://avro.alerce.online",
  detections: [
    {
      tid: "ztf",
      mjd: 58855.54229169991,
      candid: "1211286681015015007",
    },
    {
      tid: "ztf",
      mjd: 58859.481250000186,
      candid: "1213227041015015005",
    },
  ],
  objectId: "ZTF20aaelulu",
};
