<template>
  <q-card flat bordered class="">
    <q-card-content>
      <LightCurvePlot
        :type="plotType"
        :detections="detections"
        :non-detections="[]"
      />
    </q-card-content>
    <q-card-actions align="center">
      <q-radio
        size="xs"
        v-model="plotType"
        val="difference"
        label="Difference"
      ></q-radio>
      <q-radio
        size="xs"
        v-model="plotType"
        val="apparent"
        label="Apparent"
      ></q-radio>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import LightCurvePlot from "@alercebroker/component-library/src/components/plot/LightCurvePlot.vue";
import detections from "@alercebroker/component-library/src/stories/data/detection.json";

const plotType = ref("apparent");
const plotOptions = [
  { label: "Apparent", value: "apparent" },
  { label: "Folded", value: "folded" },
  { label: "Difference", value: "difference" },
];
</script>
