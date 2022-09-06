<template>
  <div>
    <q-toolbar class="bg-black text-white">
      <q-toolbar-title> SN Hunter </q-toolbar-title>
      <q-btn
        v-if="!userLogged.isLogged"
        flat
        dense
        icon="person"
        size="md"
        @click="() => (loginModalOpened = true)"
        >Login</q-btn
      >
      <div v-else>
        Welcome, {{ userLogged.user }}!
        <q-btn flat dense size="md" icon="logout">Logout</q-btn>
      </div>
    </q-toolbar>
    <LoginModal
      :opened="loginModalOpened"
      :login="login"
      :loginWithGoogle="loginWithGoogle"
    />
  </div>
</template>

<script setup lang="ts">
import LoginModal from "@alercebroker/component-library/src/components/login-modal/LoginModal.vue";
import { reactive, ref, toRefs } from "vue";
import { axiosConfigured } from "../axios";
import { useAuthentication } from "../stores";
import { storeToRefs } from "pinia";

const AUTH_URL = "https://dev.users.alerce.online";
//login logic
const loginModalOpened = ref(false);
const userStore = useAuthentication();
let popupInterval: any;

function checkWindow(window: Window) {
  if (!window.closed) return;
  console.log("Closed!");
  clearInterval(popupInterval);
}

const { login } = userStore;
const { userLogged } = storeToRefs(userStore);

function loginWithGoogle() {
  axiosConfigured
    .get(
      `${AUTH_URL}/users/social/o/google-oauth2/?redirect_uri=http://localhost:3000/oauth/`
    )
    .then((response) => {
      const oauthUrl = response.data.authorization_url;
      console.log(oauthUrl, response.request);
      const loginWindow = window.open(oauthUrl, "Google Login");
      if (loginWindow)
        popupInterval = setInterval(() => checkWindow(loginWindow), 250);
    });
}
</script>

<style></style>
