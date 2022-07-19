<template>
  <div id="results">
    <div class="row">
      <div class="col-6">
        <q-card align="center" class="q-ma-sm">
          <q-card-section>
            <div class="text-h5">
              ZTF12354
            </div>
            <div class="text-subtitle1">
              (First detection info.)
            </div>
          </q-card-section>
          <q-card-section>
            <div class="row">
              <div class="col">
                <div class="text-subtitle2">
                  RA: 123253
                </div>
                <div class="text-subtitle2">
                  DEC: 123253
                </div>
              </div>
              <div class="col">
                <div class="text-subtitle2">
                  MJD: 9837459834
                </div>
                <div class="text-subtitle2">
                  Number of detections: 69
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-actions align="around">
            <q-btn>NED</q-btn>
            <q-btn>TNS</q-btn>
            <q-btn>SIMBAD</q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-6">
        <LightCurvePlot
          type="apparent"
          :detections="detections"
          :non-detections="[]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LightCurvePlot from "@alercebroker/component-library/src/components/plot/LightCurvePlot.vue"
import detections from "@alercebroker/component-library/src/stories/data/detection.json";
</script>

<style scoped>
#results {
  padding: 0;
  margin: 0;
}
</style>