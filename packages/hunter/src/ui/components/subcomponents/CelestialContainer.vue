<template>
  <q-card flat bordered style="height: 100%">
    <q-card-content class="q-pa-sm">
      <CelestialView
        :object-list="objectStore.objectList.items"
        :object-selected="selectedRef"
      />
    </q-card-content>
  </q-card>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useObjectStore } from "../../stores";
import CelestialView from "./CelestialView.vue";

const selectedRef = ref();
const objectStore = useObjectStore();

watch(
  () => objectStore.selected,
  (newSelection) => {
    selectedRef.value = newSelection;
  }
);
</script>
