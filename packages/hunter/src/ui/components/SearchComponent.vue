<template>
  <q-card flat bordered>
    <q-card-section class="row">
      <div class="col q-mr-sm">
        <q-select
          v-model="selectedTelescope"
          :options="telescopeOptions"
          label="Telescope"
        />
      </div>
      <div class="col q-ml-sm">
        <q-select
          v-model="reportStatus"
          :options="reportOptions"
          label="Report status"
        />
      </div>
    </q-card-section>
    <q-card-section class="row">
      <div class="col-4">
        <q-select v-model="date" :options="dateOptions" label="Date" />
      </div>
      <div class="col-8 q-pl-md q-pt-md">
        Mag. range: {{ range.min }} - {{ range.max }}
        <q-range v-model="range" :min="0" :max="75" />
      </div>
    </q-card-section>
    <q-card-actions>
      <q-btn outline class="full-width">Search</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selectedTelescope = ref("ZTF");
const telescopeOptions = ["ZTF", "ATLAS"];

const reportStatus = ref("Supernova");
const reportOptions = ["Supernova", "Bogus", "None", "Other"];

const date = ref("22-2-2022");
const dateOptions = ["22-2-2022", "11-1-2023"];

const range = ref({
  min: 5,
  max: 50,
});
</script>

<style scoped></style>
