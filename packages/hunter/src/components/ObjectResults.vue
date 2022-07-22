<template>
  <div id="results">
    <div class="row">
      <div class="col-5 q-pa-xs">
        <FirstDetection v-bind="dummySelectedObject" />
      </div>
      <div class="col-7 q-pa-xs">
        <q-card flat bordered class="">
          <q-card-content>
            <LightCurvePlot
              type="apparent"
              :detections="detections"
              :non-detections="[]"
            />
          </q-card-content>
          <q-card-actions align="center">
            <q-radio
              v-model="plotType"
              val="difference"
              label="Difference"
            ></q-radio>
            <q-radio
              v-model="plotType"
              val="apparent"
              label="Apparent"
            ></q-radio>
            <q-radio v-model="plotType" val="folded" label="Folded"></q-radio>
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col-8 q-pa-xs">
        <q-card flat bordered>
          <q-card-content>
            <StampComponent
              image-service-url="http://avro.alerce.online/get_stamp"
              :detections="dummyStampDetections"
              object-id="ZTF20aaelulu"
              :hide-tools="true"
            />
          </q-card-content>
        </q-card>
      </div>
      <div class="col-4 q-pa-xs">
        <q-card flat bordered style="height: 100%">
          <q-card-content>
            <AladinViewer
              :objects="dummyAladin"
              init-object-id="ZTF20aaelulu"
              :field-of-view="360"
              @mounted="() => (firstMounted = true)"
            />
          </q-card-content>
        </q-card>
      </div>
    </div>
    <div class="row q-pa-xs" style="height: 33vh">
      <q-card class="col-12" style="width: 100%">
        <q-card-content horizontal>
          <AladinViewer
            v-if="firstMounted"
            :objects="dummyAladin"
            init-object-id="ZTF20aaelulu"
            div-id="aladin-two"
          />
        </q-card-content>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LightCurvePlot from "@alercebroker/component-library/src/components/plot/LightCurvePlot.vue";
import StampComponent from "@alercebroker/component-library/src/components/stamp/StampCard.vue";
import AladinViewer from "@alercebroker/component-library/src/components/aladin/AladinViewer.vue";

import FirstDetection from "./subcomponents/FirstDetection.vue";

//deletos from here
import detections from "@alercebroker/component-library/src/stories/data/detection.json";

const firstMounted = ref(false);
const plotType = ref("apparent");
const plotOptions = [
  { label: "Apparent", value: "apparent" },
  { label: "Folded", value: "folded" },
  { label: "Difference", value: "difference" },
];

const dummySelectedObject = {
  oid: "ZTF123545",
  ra: 1231,
  dec: 3213,
  mjd: 55000.2389,
  detectionsQuantity: 69,
};
const dummyStampDetections = [
  {
    tid: "ztf",
    mjd: 58855.54229169991,
    candid: "1101542291015015004",
  },
  {
    tid: "ztf",
    mjd: 58859.481250000186,
    candid: "1105481241015015001",
  },
];
const dummyAladin = [
  {
    oid: "ZTF20aaelulu",
    meanra: 185.72886239827588,
    meandec: 15.823611163793103,
  },
  {
    oid: "ZTF20aaelulu",
    meanra: 120.72886239827588,
    meandec: 30.823611163793103,
  },
  {
    oid: "ZTF20aaelulu",
    meanra: 160.72886239827588,
    meandec: 10.823611163793103,
  },
  {
    oid: "ZTF20aaelulu",
    meanra: 100.72886239827588,
    meandec: 50.823611163793103,
  },
];
//to here
</script>

<style scoped>
#results {
  padding: 0;
  margin: 0;
}
</style>
