<template>
  <q-card class="col-8" style="height: 100%">
    <q-card-content horizontal>
      <AladinViewer
        :objects="dummyAladin"
        init-object-id="ZTF20aaelulu"
        div-id="aladin-two"
      />
    </q-card-content>
  </q-card>
</template>

<script lang="ts" setup>
import AladinViewer from "@alercebroker/component-library/src/components/aladin/AladinViewer.vue";

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
</script>
