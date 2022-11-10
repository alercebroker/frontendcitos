<template>
  <div class="row">
    <div class="col-5">
      <div class="q-pa-xs">
        <SearchComponent />
      </div>
      <div class="q-pa-xs">
        <ResultsTableComponent />
      </div>
    </div>
    <div class="col-7">
      <div class="q-pa-xs" style="height: 100%" v-if="!selected">
        <InfoComponent />
      </div>
      <ObjectViewComponent v-bind:hidden="!Boolean(selected)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeMount } from "vue";
import { getActivePinia, storeToRefs } from "pinia";
import { Loading } from "quasar";
import { SearchComponent } from "../components/SearchComponent";
import { ObjectViewComponent } from "../components/ObjectViewComponent";
import { ResultsTableComponent } from "../components/ResultsTable";
import { InfoComponent } from "../components/InfoComponent";
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
