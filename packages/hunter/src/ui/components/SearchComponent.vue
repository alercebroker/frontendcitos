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
      <q-btn outline class="full-width" @click="_checkData">Search</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, watch } from "vue";
import { CompleteObjectFilter } from "@/application/common/types.js";
import { gregorianToMjd, mjdToDate } from "@/application/common/utils";

const data = reactive<CompleteObjectFilter>({
  telescope: "ZTF",
  firstmjd: [],
  lastmjd: [],
  report: "Supernova",
  magnitude: {
    min: 5,
    max: 50,
  },
});

const { telescope, firstmjd, lastmjd, report, magnitude } = toRefs(data);

const telescopeOptions = ["ZTF", "ATLAS"];
const reportOptions = ["Supernova", "Bogus", "None", "Other"];
const date = ref("Last 24 hours");
const dateOptions = ["Last 24 hours", "Last 48 hours", "Last week", "Custom"];

function _checkData() {
  console.log(data);
}

watch(
  date,
  (newDate) => {
    console.log(newDate);
    const now = new Date();
    data.lastmjd = [gregorianToMjd(now.toUTCString())];
    switch (newDate) {
      case "Last 24 hours":
        now.setDate(now.getDate() - 1);
        break;
      case "Last 48 hours":
        now.setDate(now.getDate() - 2);
        break;
      case "Last week":
        now.setDate(now.getDate() - 7);
        break;
    }
    data.firstmjd = [gregorianToMjd(now.toUTCString())];
  },
  {
    immediate: true,
  }
);
</script>

<style scoped></style>
