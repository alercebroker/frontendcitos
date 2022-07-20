<script lang="ts">
import { Celestial } from "d3-celestial";
import "d3-celestial/celestial";
</script>

<script setup lang="ts">
import { onMounted } from "vue";
import config from "./config/celestial.config";

onMounted(() => {
  //const Celestial = celestial.Celestial();
  //Celestial.display(config);
});
</script>

<style scoped>
@import "d3-celestial/celestial.css";
</style>

<template>
  <div id="celestial-map"></div>
</template>
