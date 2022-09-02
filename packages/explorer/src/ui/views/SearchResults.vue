<script setup lang="ts">
import SearchCardVertical from "../components/SearchCardVertical.vue";
import { reactive } from "vue";
import { useSearchStore } from "@/ui/stores/search";

const searchStore = useSearchStore();
const paginationOpts = reactive({
  rowsPerPage: 0,
});
</script>

<template>
  <q-page>
    <div class="row">
      <div class="col-4">
        <SearchCardVertical />
      </div>
      <div class="col">
        <q-table
          title="Results"
          :rows="searchStore.results.items"
          :columns="searchStore.columns"
          dense
          :pagination="paginationOpts"
        />
      </div>
    </div>
  </q-page>
</template>
