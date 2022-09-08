<script setup lang="ts">
import SearchCardVertical from "../components/SearchCardVertical.vue";
import { onMounted, ref } from "vue";
import { useSearchStore } from "@/ui/stores/search";
import { useRoute, useRouter } from "vue-router";

const searchStore = useSearchStore();
const paginationOpts = ref({
  sortBy: "",
  descending: false,
  rowsNumber: 50000,
  rowsPerPage: 20,
  page: 1,
});
const rowsPerPageOpts = ref([5, 10, 15, 20, 25, 30]);
const route = useRoute();
const router = useRouter();

function onRequest(requestProp: any): void {
  const { sortBy, descending, page, rowsPerPage } = requestProp.pagination;
  searchStore.filters = {
    ...searchStore.filters,
    ...{ sortBy, descending, page, rowsPerPage },
  };
  searchStore.search();
  paginationOpts.value = {
    ...paginationOpts.value,
    ...{ sortBy, descending, page, rowsPerPage },
  };
}

onMounted(() => {
  searchStore.filters = { ...searchStore.filters, ...route.query };
  searchStore.search();
});

function onRowClick(_evt: any, _row: any, index: number) {
  const row = searchStore.results.items[index];
  router.push({ name: "object", params: { objectId: row.aid } });
}
</script>
<template>
  <q-page>
    <div class="row">
      <div class="col-4">
        <SearchCardVertical />
      </div>
      <div class="col">
        <q-table
          v-model:pagination="paginationOpts"
          data-test="resultsTable"
          title="Results"
          dense
          rows-per-page-label="Objects per page"
          :rows="searchStore.results.items"
          :columns="searchStore.columns"
          :rows-per-page-options="rowsPerPageOpts"
          @request="onRequest"
          @row-click="onRowClick"
        />
      </div>
    </div>
  </q-page>
</template>
