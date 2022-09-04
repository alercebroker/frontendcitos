<script setup lang="ts">
import { onMounted } from "vue";
import { useAuthentication } from "./ui/stores";
import IndexView from "./ui/views/IndexView.vue";
import HunterNavbar from "./ui/components/HunterNavbar.vue";

const { verifySession } = useAuthentication();

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
