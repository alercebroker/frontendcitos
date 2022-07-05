import LightCurvePlot from '../components/plot/LightCurvePlot.vue';
import detections from './data/detection.json';
import nonDetections from './data/non_detection.json'

export default {
  title: 'LightCurvePlot',
  component: LightCurvePlot,
  parameters: {
    layout: 'fullscreen',
  }
}

const Template = (args) => ({
  components: { LightCurvePlot },
  setup() {
    return {...args};
  },
  template: '<light-curve-plot \
                :type="type" \
                :detections="detections" \
                :non-detections="nonDetections" />',
})

export const Apparent = Template.bind({});
Apparent.args = {
  detections,
  nonDetections: [],
  type: 'apparent',
}

export const Difference = Template.bind({});
Difference.args = {
  detections,
  nonDetections,
  type: 'difference',
}