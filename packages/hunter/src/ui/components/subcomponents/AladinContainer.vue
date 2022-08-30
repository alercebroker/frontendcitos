<template>
  <q-card class="col-8" style="height: 100%">
    <q-card-content horizontal>
      <AladinViewer
        :objects="objectListFormatted"
        :init-object-id="objectSelectedId ?? ''"
        div-id="aladin-two"
      />
    </q-card-content>
  </q-card>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import AladinViewer from "@alercebroker/component-library/src/components/aladin/AladinViewer.vue";
import { useObjectStore } from "../../stores";
import { ObjectEntity } from "@/domain/entities/object.entity";

const objectStore = useObjectStore();
const { objectList, selected } = storeToRefs(objectStore);
const objectListFormatted = computed(() => objectList.value.items.map(format));
const objectSelectedId = computed(() => selected.value?.aid);

function format(object: ObjectEntity) {
  const { aid, ra, dec } = object;
  return {
    oid: aid,
    meanra: ra,
    meandec: dec,
  };
}
</script>
