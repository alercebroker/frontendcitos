<template>
  <q-card id="object-list" flat bordered>
    <q-table
      title="Objects"
      :rows="objects"
      :columns="columns"
      row-key="name"
      @row-click="onRowClicked"
    >
      <template v-slot:body-cell-status>
        <q-td>
          <q-btn flat size="sm" icon="star"></q-btn>
          <q-btn flat size="sm" icon="done"></q-btn>
          <q-btn flat size="sm" icon="clear"></q-btn>
        </q-td>
      </template>
      <template v-slot:header-cell-date="props">
        <q-th :props="props">
          {{ props.col.label }}
          <q-icon name="info">
            <q-tooltip> All times are in UT </q-tooltip>
          </q-icon>
        </q-th>
      </template>
    </q-table>
  </q-card>
</template>

<script setup lang="ts">
import { onMounted, watch, ref } from "vue";
import { columns } from "./utils/constants";
import { parseObjectForView } from "./utils/parser";
import { objects as dummyObjects } from "../stores/_dummies/objects";
import { useObjectStore } from "../stores";
import { ObjectView } from "./utils/types";

const { objectList, _setObjectList, selectObject } = useObjectStore();
const objects = ref<ObjectView[]>([]);

function onRowClicked(_: Event, row: ObjectView) {
  console.log("Clicked", row);
  selectObject(row.name);
}

watch(
  () => objectList.items,
  (newObjectList) => {
    objects.value = newObjectList.map(parseObjectForView);
  }
);

// delet this
onMounted(() => {
  setTimeout(() => {
    _setObjectList(dummyObjects);
  }, 2000);
});
</script>

<style>
.q-btn {
  padding: 0.2rem;
  margin: 0.1rem;
}

#object-list .q-table tbody tr {
  cursor: pointer !important;
}
</style>
