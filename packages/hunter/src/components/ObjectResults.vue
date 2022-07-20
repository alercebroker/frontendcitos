<template>
  <div id="results">
    <div class="row">
      <div class="col-6"><FirstDetection v-bind="dummySelectedObject" /></div>
      <div class="col-6">
        <q-card flat bordered class="q-ma-sm" style="height: 100%">
          <LightCurvePlot
            type="apparent"
            :detections="detections"
            :non-detections="[]"
          />
        </q-card>
      </div>
    </div>
    <div class="row">
      <q-card flat bordered class="q-ma-sm q-mt-md col-9">
        <q-card-content>
          <StampComponent
            image-service-url="http://avro.alerce.online/get_stamp"
            :detections="dummyStampDetections"
            object-id="ZTF20aaelulu"
          />
        </q-card-content>
      </q-card>
      <q-card flat bordered class="col-3">
        <CelestialView />
      </q-card>
    </div>
    <div class="row">
      <q-card>
        <q-card-content>
          Ayy lmao
        </q-card-content>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import LightCurvePlot from "@alercebroker/component-library/src/components/plot/LightCurvePlot.vue";
import StampComponent from "@alercebroker/component-library/src/components/stamp/StampCard.vue";
import FirstDetection from "./subcomponents/FirstDetection.vue";
import CelestialView from "./CelestialView.vue";

//deletos from here
import detections from "@alercebroker/component-library/src/stories/data/detection.json";

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
//to here
</script>

<style scoped>
#results {
  padding: 0;
  margin: 0;
}
</style>