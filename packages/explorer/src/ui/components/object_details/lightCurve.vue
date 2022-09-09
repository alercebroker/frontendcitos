<script setup lang="ts">
  import { ref, reactive, computed } from "vue";
  import { storeToRefs } from "pinia";
  import { useObjectDetailsStore } from "@/ui/stores/object_details";
  import LightCurvePlot from "@alercebroker/component-library/src/components/plot/LightCurvePlot.vue"
  
  const objectDetailsStore = useObjectDetailsStore()
  const { objectDetections, objectNonDetections } = storeToRefs(objectDetailsStore)

  const radioValue = ref("apparent")

</script>


<template>
  <q-card flat bordered class="">
    <q-card-content>
      <light-curve-plot
        :detections="objectDetections"
        :non-detections="objectNonDetections"
        :type="radioValue"
        :dark="false"
      ></light-curve-plot>
    </q-card-content>
    <q-card-actions align='center'>
      <q-radio v-model="radioValue" size='xs' :val="'apparent'" label="apparent"></q-radio>
      <q-radio v-model="radioValue" size='xs' :val="'difference'" label="difference"></q-radio>
    </q-card-actions>
  </q-card>
</template>

<style lang="sass" scoped></style>
