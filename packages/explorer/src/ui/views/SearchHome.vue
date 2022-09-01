<script setup lang="ts">
import { useSearchStore } from "@/ui/stores/search";
import SearchCardHorizontal from "../components/SearchCardHorizontal.vue";
import PremadeQueryCard from "../components/PremadeQueryCard.vue";

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
        <PremadeQueryCard
          :query="query"
          :index="index"
          @search="searchStore.search()"
          @fillParameters="searchStore.fillParameters(query.title)"
        />
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.fast-query
  max-width: 350px
</style>
