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
  template: "<stamp-card />",
});

export const Science = Template.bind({});
