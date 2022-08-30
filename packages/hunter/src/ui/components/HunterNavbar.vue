<template>
  <div>
    <q-toolbar class="bg-black text-white">
      <q-toolbar-title> SN Hunter </q-toolbar-title>
      <q-btn flat dense icon="person" @click="() => (loginModalOpened = true)"
        >Login</q-btn
      >
    </q-toolbar>
    <q-dialog v-model="loginModalOpened">
      <q-card bordered class="q-pa-sm" style="min-width: 400px">
        <q-card-section>
          <div class="text-h6">Login</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="username" autofocus placeholder="Username" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="username" autofocus placeholder="Password" />
        </q-card-section>
        <q-card-actions align="around">
          <q-btn outline color="primary" label="Login" style="width: 45%" />
          <q-btn
            outline
            color="secondary"
            label="Register"
            style="width: 45%"
          />
        </q-card-actions>
        <q-card-actions>
          <q-btn outline icon="mdi-google" class="full-width"
            >Login with Google</q-btn
          >
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, toRefs } from "vue";

const loginModalOpened = ref(false);
const loginCredentials = reactive({
  username: "",
  password: "",
});

const { username, password } = toRefs(loginCredentials);
</script>

<style></style>
