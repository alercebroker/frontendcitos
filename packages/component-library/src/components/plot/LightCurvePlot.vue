<template>
  <v-chart v-if="options" autoresize :option="options" style="height: 500px;"></v-chart>
</template>

<script lang="ts" setup>
import { defineProps, ref, onMounted } from "vue";
import formatTooltip from "./utils/formatTooltip";
import { apparentPlotOptions } from "./apparent";
import { differencePlotOptions } from "./difference";

const props = defineProps({
  detections: { type: Array, required: true },
  nonDetections: { type: Array, required: true },
  type: { type: String, required: true },
  period: { type: Number, default: 0 }
});
const events = defineEmits(['detectionClick'])
const options: any = ref(null)

onMounted(() => {
  localOptionsFactory();
})

function localOptionsFactory() {
  switch(props.type) {
    case 'apparent':
      options.value = apparentPlotOptions(props.detections, props.nonDetections)("#fff", formatTooltip);
      return;
    case 'difference':
      options.value = differencePlotOptions(props.detections, props.nonDetections)("#fff", formatTooltip);
      return;
    case 'folded':
      options.value = null;
      return;
  }
}

console.log(options);
</script>

<style scoped>
#main-chart {
  width: 100%;
  height: 100%;
}
</style>