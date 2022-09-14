<template>
  <q-dialog v-model="opened">
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
          <q-btn
            outline
            icon="mdi-google"
            class="full-width"
            @click="loginWithGoogle()"
            >Login with Google</q-btn
          >
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script setup lang="ts">
import { reactive, toRefs } from "vue";

const data = reactive({
  username: "",
  password: "",
});

const { username, password } = toRefs(data);

const props = defineProps({
  opened: { required: true, type: Boolean },
  login: { required: true, type: Function },
  loginWithGoogle: { required: true, type: Function }
})

</script>

<style>

</style>