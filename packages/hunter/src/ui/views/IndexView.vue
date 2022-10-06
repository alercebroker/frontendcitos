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
      <div class="q-pa-xs" style="height: 100%" v-if="!selected">
        <InfoComponent />
      </div>
      <ObjectResults v-bind:hidden="!Boolean(selected)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeMount } from "vue";
import { getActivePinia, storeToRefs } from "pinia";
import { Loading } from "quasar";
import SearchComponent from "../components/SearchComponent.vue";
import ObjectResults from "../components/ObjectResults.vue";
import ResultsTable from "../components/ResultsTable.vue";
import InfoComponent from "../components/InfoComponent.vue";
import { useAuth, useObjectStore } from "../stores";

const { verifySession } = useAuth(getActivePinia());
const objectStore = useObjectStore();
const { selected } = storeToRefs(objectStore);

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
