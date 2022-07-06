import LightCurvePlot from '../components/plot/LightCurvePlot.vue';
import detections from './data/detection.json';
import nonDetections from './data/non_detection.json';
import otherDetections from './data/detections_two.json';
import { mockDetections, mockNonDetections } from '../components/plot/__tests__/__mocks__';

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
                :non-detections="nonDetections" \
                :period="period" />',
})

export const Apparent = Template.bind({});
Apparent.args = {
  detections,
  nonDetections: [],
  type: 'apparent',
}

export const Difference = Template.bind({});
Difference.args = {
  detections: mockDetections,
  nonDetections: mockNonDetections,
  type: 'difference',
}

export const Folded = Template.bind({});
Folded.args = {
  detections: otherDetections,
  nonDetections: [],
  type: 'folded',
  period: 2,
}