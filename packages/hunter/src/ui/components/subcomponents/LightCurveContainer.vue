<template>
  <q-card flat bordered class="">
    <q-card-content>
      <LightCurvePlot
        :type="plotType"
        :detections="lightcurve.detections"
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
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import LightCurvePlot from "@alercebroker/component-library/src/components/plot/LightCurvePlot.vue";
import { useObjectStore } from "../../stores";

const objectStore = useObjectStore();
const { lightcurve } = storeToRefs(objectStore);

const plotType = ref("difference");
const plotOptions = [
  { label: "Apparent", value: "apparent" },
  { label: "Folded", value: "folded" },
  { label: "Difference", value: "difference" },
];
</script>
