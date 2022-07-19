<template>
  <q-card class="q-ma-sm">
    <q-card-section class="row">
      <div class="col q-mr-sm">
        <q-select v-model="model" :options="options" label="Classifier" />
      </div>
      <div class="col q-ml-sm">
        <q-select v-model="model" :options="options" label="Class" />
      </div>
    </q-card-section>
    <q-card-section> 
        <q-select v-model="date" :options="dateOptions" label="Date" />
    </q-card-section>
    <q-card-actions>
      <q-btn push class="full-width">Search</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const model = ref("stamp_classifier");
const date = ref("22-2-2022");

const options = ["stamp_classifier", "others"];
const dateOptions = ["22-2-2022 - 11-1-2023"];
</script>

<style scoped>
</style>