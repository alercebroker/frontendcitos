<template>
  <v-chart
    v-if="options"
    autoresize
    :option="options"
    @click="onDetectionClick"
    style="height: 500px"
  ></v-chart>
</template>

<script lang="ts" setup>
import { defineProps, ref, onMounted, watch, computed } from "vue";
import formatTooltip from "./utils/formatTooltip";
import { jdToDate } from "./utils/dates";
import { apparentPlotOptions } from "./apparent";
import { differencePlotOptions } from "./difference";
import { foldedPlotOptions } from "./folded";

const props = defineProps({
  detections: { type: Array, required: true },
  nonDetections: { type: Array, required: true },
  type: { type: String, required: true },
  period: { type: Number, default: 1 },
  dark: { type: Boolean, default: true },
});
const emit = defineEmits(["detectionClick"]);
const fontColor = computed(() => (props.dark ? "#fff" : "#000"));
const options: any = ref(null);

onMounted(() => {
  localOptionsFactory();
});

watch(
  () => [props.type, props.period],
  () => {
    localOptionsFactory();
  }
);

function onDetectionClick(target: any) {
  const serieType = target.seriesName;
  if (serieType.includes("non-detections") || serieType.includes("DR"))
    return null;
  const date = jdToDate(target.value[0]).toUTCString().slice(0, -3) + "UT";
  emit("detectionClick", {
    mjd: target.value[0],
    date,
    index: props.detections.findIndex((x: any) => x.mjd === target.value[0]),
  });
}

function localOptionsFactory() {
  const { detections, nonDetections, period } = props;
  switch (props.type) {
    case "apparent":
      options.value = apparentPlotOptions(detections, nonDetections)(
        fontColor,
        formatTooltip
      );
      return;
    case "difference":
      options.value = differencePlotOptions(detections, nonDetections)(
        fontColor,
        formatTooltip
      );
      return;
    case "folded":
      options.value = foldedPlotOptions(
        detections,
        nonDetections,
        period
      )(fontColor, formatTooltip);
      return;
  }
}
</script>

<style scoped>
#main-chart {
  width: 100%;
  height: 100%;
}
</style>
