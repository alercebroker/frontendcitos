<template>
  <div>
    <v-chart autoresize :option="options"></v-chart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, reactive } from "vue";
import { buildApparentPlotOptions } from "./functional-test";

const props = defineProps({
  detections: { type: Array, required: true },
  nonDetections: [],
});

const options = reactive(buildApparentPlotOptions(props.detections, "#fff"));
</script>
