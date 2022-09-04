<template>
  <p>Logging in...</p>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const AUTH_URL = "https://dev.users.alerce.online";

onMounted(() => {
  console.log(route.query);
  const { code, state } = route.query;
  const formData = new URLSearchParams();
  formData.append("code", code as string);
  formData.append("state", state as string);
  axios
    .post(`${AUTH_URL}/users/social/o/google-oauth2/`, formData, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      withCredentials: true,
    })
    .then((response) => {
      console.log("OAuth response", response);
    });
});
</script>
