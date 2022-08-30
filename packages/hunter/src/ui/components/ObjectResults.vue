<template>
  <div id="results">
    <div class="row">
      <div class="col-6 q-pa-xs">
        <FirstDetection />
      </div>
      <div class="col-6 q-pa-xs">
        <LightCurveContainer />
      </div>
    </div>
    <div class="row">
      <div class="col-12 q-pa-xs">
        <StampCardContainer />
      </div>
    </div>
    <div class="row q-pa-xs">
      <div class="col-7 q-pa-xs" style="height: 27vh">
        <AladinContainer />
      </div>
      <div class="col-5 q-pa-xs">
        <CelestialContainer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import FirstDetection from "./subcomponents/FirstDetection.vue";
import LightCurveContainer from "./subcomponents/LightCurveContainer.vue";
import StampCardContainer from "./subcomponents/StampCardContainer.vue";
import AladinContainer from "./subcomponents/AladinContainer.vue";
import CelestialContainer from "./subcomponents/CelestialContainer.vue";

//deletos from here

//to here
</script>

<style scoped>
#results {
  padding: 0;
  margin: 0;
}
</style>
