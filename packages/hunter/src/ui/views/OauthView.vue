<template>
  <p v-if="loading">Logging in...</p>
  <div v-else>
    <p v-if="!error.isDismissed">Error logging in... {{ error.message }}</p>
    <p v-else>Logged in successfully!</p>
  </div>
</template>

<script setup lang="ts">
import { getActivePinia, StoreGeneric, storeToRefs } from "pinia";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useAuth } from "../stores";

const route = useRoute();
const alerceUserStore = useAuth(getActivePinia());
const { oauthLogin } = alerceUserStore;
const { error } = storeToRefs(alerceUserStore as StoreGeneric);

const loading = ref(true);

onMounted(async () => {
  const { code, state } = route.query;
  await oauthLogin(code as string, state as string);
  loading.value = false;
});

watch(loading, () => {
  if (error.value.isDismissed) {
    window.close();
  }
});
</script>
