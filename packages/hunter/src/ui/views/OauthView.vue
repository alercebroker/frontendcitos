<template>
  <p>Logging in...</p>
</template>

<script setup lang="ts">
import { getActivePinia } from "pinia";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useAlerceAuth } from "../stores";

const route = useRoute();
const { oauthLogin } = useAlerceAuth(getActivePinia());

onMounted(async () => {
  const { code, state } = route.query;
  await oauthLogin(code as string, state as string);
  window.close();
});
</script>
