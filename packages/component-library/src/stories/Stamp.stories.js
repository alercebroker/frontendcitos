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
  template: '<stamp-card :image-service-url="imageServiceUrl" \
                          :detections="detections" \
                          :object-id="objectId" \
              />',
});

export const Preview = Template.bind({});
Preview.args = {
  imageServiceUrl: 'http://avro.alerce.online/get_stamp',
  detections: [{
    "tid": "ztf",
    "mjd": 58855.54229169991,
    "candid": "1101542291015015004",
  }],
  objectId: "ZTF20aaelulu"
}