<template>
  <q-card id="object-list" flat bordered>
    <q-table
      title="Objects"
      :rows="objectList.items.map(parseObjectForView)"
      :columns="columns"
      v-model:pagination="tablePagination"
      row-key="name"
      :loading="isLoading"
      @row-click="onRowClicked"
      @update:pagination="onPaginationChange"
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
import { onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { columns } from "../utils/constants";
import { parseObjectForView } from "../utils/parser";
import { useObjectStore } from "../../stores";
import { ObjectView } from "../utils/types";

const objectStore = useObjectStore();
const { selectObject, _setObjectList, populateDetections } = objectStore;
const { objectList, isLoading } = storeToRefs(objectStore);

const tablePagination = ref({
  page: 1,
  rowsPerPage: 7,
});

function onRowClicked(_: Event, row: ObjectView) {
  selectObject(row.name);
}

async function onPaginationChange(newPagination: {
  page: number;
  rowsPerPage: number;
}) {
  //lazily load the detections when passing page
  const { rowsPerPage, page } = newPagination;
  const from = (page - 1) * rowsPerPage;
  const to = page * rowsPerPage - 1;
  populateDetections(from, to);
}
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
