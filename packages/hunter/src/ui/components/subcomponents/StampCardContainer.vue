<template>
  <q-card flat bordered>
    <q-card-content>
      <StampCard
        image-service-url="http://avro.alerce.online/get_stamp"
        :detections="[{ candid: '11' }]"
        :object-id="selected ? selected.aid : 'ZTF20aaelulu'"
        :hide-tools="true"
      />
    </q-card-content>
  </q-card>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useObjectStore } from "@/ui/stores";
import StampCard from "@alercebroker/component-library/src/components/stamp/StampCard.vue";

const objectStore = useObjectStore();
const { selected } = storeToRefs(objectStore);
</script>
