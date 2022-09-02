<script setup lang="ts">
import { useSearchObjects } from "./hooks/useSearchObjects.js";

const { filters, search } = useSearchObjects();
</script>
<template>
  <q-card class="my-card" flat bordered>
    <q-card-section>
      <div class="text-h6 text-center">Search Objects</div>
    </q-card-section>
    <q-separator inset />
    <q-card-section>
      <div class="row">
        <div class="col-12">
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
        </div>
      </div>

      <p>Discovery Date</p>
      <div class="row justify-center">
        <div class="col-12">
          <q-date
            data-test="firstmjdDate"
            v-model="filters.firstmjdDate"
            range
            minimal
            first-day-of-week="1"
          />
        </div>
        <div class="col-6">
          <q-input
            class="q-mr"
            data-test="firstmjdFrom"
            v-model.number="filters.firstmjd.from"
            type="number"
            label="Firstmjd From"
            squared
            outlined
          />
        </div>
        <div class="col-6">
          <q-input
            data-test="firstmjdTo"
            class="q-mr"
            v-model.number="filters.firstmjd.to"
            type="number"
            label="Firstmjd To"
            squared
            outlined
          />
        </div>
      </div>

      <p>Coordinates</p>
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
      <div class="col-4 q-mt-md">
        <q-btn
          data-test="button-search"
          class="full-width"
          color="primary"
          label="Search"
          size="xl"
          @click="search()"
        />
        <q-btn class="full-width q-mt-md" label="Clear" outline />
      </div>
    </q-card-section>
  </q-card>
</template>
