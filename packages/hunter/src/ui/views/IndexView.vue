<template>
  <div class="row">
    <div class="col-5">
      <div class="q-pa-xs">
        <SearchComponent />
      </div>
      <div class="q-pa-xs">
        <ResultsTable />
      </div>
    </div>
    <div class="col-7">
      <ObjectResults />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import SearchComponent from "../components/SearchComponent.vue";
import ObjectResults from "../components/ObjectResults.vue";
import ResultsTable from "../components/ResultsTable.vue";

//remember to use stores next
const data = reactive({
  query: {},
  queryResult: [],
  objectSelected: null,
});
</script>

<style scoped></style>
