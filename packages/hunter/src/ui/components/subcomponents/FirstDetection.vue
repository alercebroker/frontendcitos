<template>
  <q-card flat bordered align="center" class="" style="height: 100%">
    <q-card-section>
      <div class="text-h5">{{ selected?.aid ?? "NONE" }}</div>
      <div class="text-subtitle1">(First detection info.)</div>
    </q-card-section>
    <q-card-section>
      <div class="row">
        <div class="col">
          <div class="text-subtitle2">
            RA: {{ selected?.ra.toFixed(5) ?? 0 }}
          </div>
          <div class="text-subtitle2">
            DEC: {{ selected?.dec.toFixed(5) ?? 0 }}
          </div>
        </div>
        <div class="col">
          <div class="text-subtitle2">MJD: {{ selected?.firstmjd }}</div>
          <div class="text-subtitle2">
            Number of detections: {{ selected?.obs }}
          </div>
        </div>
      </div>
    </q-card-section>
    <q-card-actions align="around">
      <q-btn outline>NED</q-btn>
      <q-btn outline>TNS</q-btn>
      <q-btn outline>SIMBAD</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";
import { useObjectStore } from "@/ui/stores";
import { ObjectEntity } from "@/domain/entities/object.entity";

const objectStore = useObjectStore();
const selected = ref<ObjectEntity>();

watch(
  () => objectStore.selected,
  (newSelected) => {
    selected.value = newSelected;
  }
);

// const props = defineProps({
//   oid: { type: String, required: true },
//   ra: { type: Number, required: true },
//   dec: { type: Number, required: true },
//   mjd: { type: Number, required: true },
//   detectionsQuantity: { type: Number, required: true },
// });
</script>
