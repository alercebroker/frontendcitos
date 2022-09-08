<script setup lang="ts">
import { ref } from "vue";
import { useSearchObjects } from "./hooks/index.js";

const { filters, search, clear } = useSearchObjects();
const tab = ref<string>("general");
</script>
<template>
  <q-card class="my-card" flat bordered>
    <q-card-section>
      <div class="text-h6 text-center">Search Objects</div>
      <q-tabs v-model="tab" inline-label>
        <q-tab name="general" icon="search" label="General Filters" />
        <q-tab
          data-test="date-tab"
          name="date"
          icon="calendar_month"
          label="Date Filters"
        />
        <q-tab name="conesearch" icon="gps_fixed" label="Conesearch" />
      </q-tabs>
    </q-card-section>
    <q-separator inset />
    <q-card-section>
      <div class="row">
        <div class="col-md-8">
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="general">
              <q-input
                data-test="oid"
                class="q-mt-md"
                v-model="filters.oid"
                label="Object ID"
                debounce="500"
                square
                outlined
              />
              <p class="q-mt-lg q-mb-lg">Number of detections</p>
              <q-range
                data-test="ndet"
                v-model="filters.ndet"
                :min="0"
                :max="50"
                label-always
                debounce="500"
              />
            </q-tab-panel>

            <q-tab-panel name="date">
              <div class="row items-center justify-center">
                <div class="col-md-12 col-lg-6">
                  <q-date
                    data-test="firstmjdDate"
                    v-model="filters.firstmjdDate"
                    range
                    minimal
                    first-day-of-week="1"
                  />
                </div>
                <div class="col-md-12 col-lg-4">
                  <q-input
                    data-test="firstmjdFrom"
                    v-model.number="filters.firstmjd.from"
                    type="number"
                    label="Firstmjd From"
                    squared
                    outlined
                  />
                  <q-input
                    data-test="firstmjdTo"
                    class="q-mt-md"
                    v-model.number="filters.firstmjd.to"
                    type="number"
                    label="Firstmjd To"
                    squared
                    outlined
                  />
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="conesearch">
              <p>Discovery Date</p>
              <div class="row justify-center">
                <div class="col q-mr-md">
                  <q-input
                    data-test="ra"
                    v-model="filters.coordinates.ra"
                    type="number"
                    label="RA"
                    squared
                    outlined
                  />
                </div>
                <div class="col q-mr-md">
                  <q-input
                    data-test="dec"
                    v-model="filters.coordinates.dec"
                    type="number"
                    label="Dec"
                    squared
                    outlined
                  />
                </div>
                <div class="col">
                  <q-input
                    data-test="radius"
                    v-model="filters.coordinates.radius"
                    type="number"
                    label="Radius"
                    squared
                    outlined
                  />
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
        <div class="col-4 q-mt-md">
          <q-btn
            data-test="button-search"
            class="full-width"
            color="primary"
            label="Search"
            size="xl"
            @click="search()"
          />
          <q-btn
            data-test="clear"
            class="full-width q-mt-xl"
            label="Clear"
            outline
            @click="clear"
          />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
