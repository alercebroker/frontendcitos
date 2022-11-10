<script setup lang="ts">
import IndexView from "./ui/views/IndexView.vue";
import { HunterNavbar } from "./ui/components/Navbar";
</script>

<template>
  <header>
    <HunterNavbar />
  </header>
  <router-view />
</template>

<style></style>
