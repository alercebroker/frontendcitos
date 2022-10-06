<template>
  <q-card flat bordered>
    <q-card-section class="row">
      <div class="col q-mr-sm">
        <q-select
          v-model="telescope"
          :options="telescopeOptions"
          label="Telescope"
        />
      </div>
      <div class="col q-ml-sm">
        <q-select
          v-model="report"
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
        Magnitude: {{ magnitude.min }} - {{ magnitude.max }}
        <q-range v-model="magnitude" :min="0" :max="75" />
      </div>
    </q-card-section>
    <q-card-actions>
      <q-btn
        outline
        class="full-width"
        @click="searchByFilter(data)"
        :loading="isLoading"
        >Search</q-btn
      >
    </q-card-actions>
    <span v-if="errorStatus">{{ errorStatus }}</span>
  </q-card>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, watch, onMounted } from "vue";
import { useObjectStore } from "../stores";
import { CompleteObjectFilter } from "@/application/common/types.js";
import { gregorianToMjd } from "@/application/common/utils";
import { storeToRefs } from "pinia";

const objectStore = useObjectStore();
const { searchByFilter } = objectStore;
const { isLoading, errorStatus } = storeToRefs(objectStore);

const data = reactive<CompleteObjectFilter>({
  telescope: "ZTF",
  firstmjd: [],
  lastmjd: [],
  report: "Non Reported",
  magnitude: {
    min: 5,
    max: 50,
  },
});

const { telescope, firstmjd, lastmjd, report, magnitude } = toRefs(data);

const telescopeOptions = ["ZTF", "ATLAS"];
const reportOptions = ["Reported", "Non Reported"];
const date = ref({ label: "Last 24 hours", diff: 1 });
const dateOptions = [
  { label: "Last 24 hours", diff: 1 },
  { label: "Last 48 hours", diff: 2 },
  { label: "Last week", diff: 7 },
];

onMounted(() => {
  searchByFilter(data);
});

watch(
  date,
  (newDate: { label: string; diff: number }) => {
    const now = new Date();
    const since = new Date(now);
    since.setDate(since.getDate() - newDate.diff);
    data.firstmjd = [
      gregorianToMjd(since.toUTCString()),
      gregorianToMjd(now.toUTCString()),
    ];
  },
  {
    immediate: true,
  }
);
</script>

<style scoped></style>
