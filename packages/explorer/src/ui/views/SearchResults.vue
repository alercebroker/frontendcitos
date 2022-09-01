<script setup lang="ts">
import SearchCardVertical from "../components/SearchCardVertical.vue";
import { storeToRefs } from "pinia";
import { reactive } from "vue";
import { useSearchStore } from "@/ui/stores/search";

const searchStore = useSearchStore();
const { results, columns } = storeToRefs(searchStore);
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
          :rows="results.items"
          :columns="columns"
          dense
          :pagination="paginationOpts"
        />
      </div>
    </div>
  </q-page>
</template>
