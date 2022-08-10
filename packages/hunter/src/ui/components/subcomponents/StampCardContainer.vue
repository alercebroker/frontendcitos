<template>
  <q-card flat bordered>
    <q-card-content>
      <StampCard
        image-service-url="http://avro.alerce.online/get_stamp"
        :detections="dummyStampDetections"
        object-id="ZTF20aaelulu"
        :hide-tools="true"
      />
    </q-card-content>
  </q-card>
</template>

<script lang="ts" setup>
import StampCard from "@alercebroker/component-library/src/components/stamp/StampCard.vue";

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
</script>
