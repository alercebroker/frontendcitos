<template>
  <div id="main-chart">
    <v-chart autoresize :option="options" style="height: 500px;"></v-chart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, reactive } from "vue";
import formatTooltip from "./utils/formatTooltip";
import { apparentPlotOptions } from "./apparent"; 

const props = defineProps({
  detections: { type: Array, required: true },
  nonDetections: { type: Array, required: true },
});

const options = reactive(apparentPlotOptions(props.detections, props.nonDetections)("#fff", formatTooltip));
console.log(options);
</script>

<style scoped>
#main-chart {
  width: 100%;
  height: 100%;
}
</style>