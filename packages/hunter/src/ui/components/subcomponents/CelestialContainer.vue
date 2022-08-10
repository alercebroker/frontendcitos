<template>
  <q-card flat bordered style="height: 100%">
    <q-card-content class="q-pa-sm">
      <CelestialView :object-selected="dummySelectedObject" />
    </q-card-content>
  </q-card>
</template>

<script lang="ts" setup>
import CelestialView from "./CelestialView.vue";

const dummySelectedObject = {
  candid: "123345467",
  oid: "ZTF123545",
  ra: 1231,
  dec: 3213,
  mjd: 55000.2389,
  detectionsQuantity: 69,
};
</script>
