<script setup lang="ts">
import type { PremadeQuery } from "../stores/search/store.js";

defineProps<{ query: PremadeQuery; index: number }>();
const emit = defineEmits(["search", "fillParameters"]);
</script>

<template>
  <q-card flat bordered>
    <q-img :src="query.image" style="height: 150px" />

    <q-card-section>
      <div class="text-overline">{{ query.category }}</div>
      <div class="text-h5 q-mt-sm q-mb-xs">{{ query.title }}</div>
      <div class="text-caption text-grey">{{ query.description }}</div>
    </q-card-section>

    <q-card-actions>
      <q-btn
        data-test="premade-search"
        flat
        label="Search"
        @click="emit('search')"
      />
      <q-btn
        :data-test="'fill-parameters-' + index"
        flat
        label="Fill Parameters"
        @click="emit('fillParameters')"
      />
    </q-card-actions>
  </q-card>
</template>

<style scoped></style>
