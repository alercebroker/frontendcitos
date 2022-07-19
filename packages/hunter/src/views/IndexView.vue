<template>
  <div class="row">
    <div class="col-4">
      <SearchComponent />
      <ResultsTable />
    </div>
    <div class="col-8">
      <!-- Show placeholder as a welcome page (before any query) -->
      <ObjectResults />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import SearchComponent from "../components/SearchComponent.vue";
import ObjectResults from '../components/ObjectResults.vue';
import ResultsTable from '../components/ResultsTable.vue';

//remember to use stores next
const data = reactive({
  query: {},
  queryResult: [],
  objectSelected: null,
})
</script>

<style scoped>

</style>
