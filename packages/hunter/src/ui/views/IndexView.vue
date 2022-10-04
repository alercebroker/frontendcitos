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
import { onMounted, onBeforeMount } from "vue";
import { getActivePinia } from "pinia";
import { Loading } from "quasar";
import SearchComponent from "../components/SearchComponent.vue";
import ObjectResults from "../components/ObjectResults.vue";
import ResultsTable from "../components/ResultsTable.vue";
import { useAuth } from "../stores";
//remember to use stores next
const { verifySession } = useAuth(getActivePinia());

onBeforeMount(() => {
  Loading.show();
});

onMounted(async () => {
  try {
    await verifySession();
  } catch (e) {
    console.error("Unable to verify session");
  } finally {
    Loading.hide();
  }
});
</script>

<style scoped></style>
