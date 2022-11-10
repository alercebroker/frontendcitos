<template>
  <div>
    <q-toolbar class="bg-black text-white">
      <q-toolbar-title> SN Hunter </q-toolbar-title>
      <q-btn
        v-if="!loggedUser.isLogged"
        flat
        dense
        icon="person"
        size="md"
        @click="() => (loginModalOpened = !loginModalOpened)"
        >Login</q-btn
      >
      <div v-else>
        Welcome, {{ loggedUser.user }}!
        <q-btn flat dense size="md" icon="logout" @click="logout">Logout</q-btn>
      </div>
    </q-toolbar>
    <LoginModal
      :opened="loginModalOpened"
      :login="credentialsLogin"
      :loginWithGoogle="oauthPopup"
    />
  </div>
</template>

<script setup lang="ts">
import LoginModal from "@alercebroker/component-library/src/components/login-modal/LoginModal.vue";
import { watch, ref, toRefs } from "vue";
import { useAuth } from "../../stores";
import { storeToRefs, getActivePinia, StoreGeneric } from "pinia";

//login logic
const loginModalOpened = ref(false);
const waitingForPopup = ref(false);
const alerceUserStore = useAuth(getActivePinia());
let popup: Window | null | undefined;
let popupInterval: any;

const { credentialsLogin, logout, oauthLoginPopup, verifySession } =
  alerceUserStore;
const { loggedUser } = storeToRefs(alerceUserStore as StoreGeneric);

async function checkWindow(window: Window) {
  if (!window.closed && waitingForPopup.value) return;
  waitingForPopup.value = false;
  try {
    console.log("Closed, verifying session...");
    await verifySession();
  } catch (e) {
    console.error("Something went wrong...");
  } finally {
    clearInterval(popupInterval);
  }
}

async function oauthPopup() {
  popup = await oauthLoginPopup(
    process.env.VUE_APP_OAUTH_CALLBACK_URL as string
  );
  waitingForPopup.value = true;
  popupInterval = setInterval(checkWindow, 2500, popup);
}

watch(loggedUser, () => (loginModalOpened.value = false));
</script>

<style></style>
