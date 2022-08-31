<script setup lang="ts">
import { useSearchStore } from "@/ui/stores/search";
import SearchCardHorizontal from "../components/SearchCardHorizontal.vue";

const searchStore = useSearchStore();
</script>

<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-1">
        <q-img
          src="https://alerce-science.s3.amazonaws.com/images/fullAlerceWHITE.max-1920x200.png"
        />
      </div>
    </div>
    <div class="row q-ml-xl q-mr-xl q-mt-sm q-mb-md justify-center">
      <div class="col-md-8">
        <SearchCardHorizontal />
      </div>
    </div>
    <div class="row justify-center q-ml-xl q-mr-xl">
      <div
        v-for="(query, index) in searchStore.premadeQueries"
        :key="index"
        class="col-lg-3 col-md-6 col-sm-12 fast-query q-ml-md q-mr-md"
      >
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
              @click="searchStore.search()"
            />
            <q-btn
              :data-test="'fill-parameters-' + index"
              flat
              label="Fill Parameters"
              @click="searchStore.fillParameters(query.title)"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.fast-query
  max-width: 350px
</style>
