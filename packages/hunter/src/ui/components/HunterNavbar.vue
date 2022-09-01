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
    <!-- Login modal (move to component once tested)-->
    <q-dialog v-model="loginModalOpened">
      <q-card bordered class="q-pa-sm" style="min-width: 400px">
        <q-card-section>
          <div class="text-h6">Login</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="username" autofocus placeholder="Username" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="password"
            autofocus
            placeholder="Password"
            type="password"
          />
        </q-card-section>
        <q-card-actions align="around">
          <q-btn
            outline
            color="primary"
            label="Login"
            style="width: 45%"
            @click="login(username, password)"
          />
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
    <!-- end of modal -->
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, toRefs } from "vue";
import { useAuthentication } from "../stores";

const AUTH_URL = "https://dev.users.alerce.online";
//login logic
const loginModalOpened = ref(false);
const loginCredentials = reactive({
  username: "",
  password: "",
});

const { username, password } = toRefs(loginCredentials);
const { userLogged, login } = useAuthentication();

function loginWithGoogle() {
  return;
}
</script>

<style></style>
