<template>
  <q-card flat bordered>
    <q-card-content>
      <StampCard
        :image-service-url="
          VUE_APP_STAMPS_API_URL ?? 'https://avro.alerce.online'
        "
        :detections="
          selected?.firstDetection
            ? [selected.firstDetection]
            : [{ candid: 'none', telescope: 'ZTF' }]
        "
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
import { computed, watch, ref } from "vue";

const { VUE_APP_STAMPS_API_URL } = process.env;

const objectStore = useObjectStore();
const { selected, lightcurve } = storeToRefs(objectStore);
const detections = computed(() => {
  if (lightcurve.value.detections.length) {
    return lightcurve.value.detections;
  }
  return [{ candid: "candeed" }];
});
</script>
