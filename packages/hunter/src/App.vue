<script setup lang="ts">
import { onMounted } from "vue";
import { useAlerceAuth } from "./ui/stores";
import IndexView from "./ui/views/IndexView.vue";
import HunterNavbar from "./ui/components/HunterNavbar.vue";
import { getActivePinia } from "pinia";

const { verifySession } = useAlerceAuth(getActivePinia());

onMounted(async () => {
  await verifySession();
});
</script>

<template>
  <header>
    <HunterNavbar />
  </header>
  <router-view />
</template>

<style></style>
