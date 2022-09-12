<script setup lang="ts">
  import { ref, onMounted, computed } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { storeToRefs } from "pinia";
  import type { QTableProps } from 'quasar'
  import { useSearchStore } from "@/ui/stores/search";
  
  const route = useRoute();
  const router = useRouter();

  const searchStore = useSearchStore()
  const { results } = storeToRefs(searchStore)

  const paginationOpts = ref({
    sortBy: "",
    descending: false,
    rowsNumber: 50000,
    rowsPerPage: 20,
    page: 1,
  });
  const columns_definition: QTableProps['columns'] = [
    {name: 'aid', field: 'aid', label: 'Object List', required: true},
  ];
  const objecsAidtList = computed( () => {
    return results.value.items.map((item) => {item.aid})
  })

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
    <q-table
      v-model:pagination="paginationOpts"
      dense
      :rows="objecsAidtList"
      :columns="columns_definition"
      :rows-per-page-options="[20]"
      @request="onRequest"
      @row-click="onRowClick"
    />
  </q-page>
</template>

<style lang="sass" scoped></style>
