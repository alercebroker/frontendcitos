<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
<template>
  <q-layout>
    <q-header>
      <div class="row no-shadow justify-end">
        <q-toolbar class="bg-dark col-4">
          <q-avatar>
            <img
              src="https://alerce-static.s3.amazonaws.com/logos/footerAlerceWhite.png"
            />
          </q-avatar>

          <q-toolbar-title>ALeRCE Explorer</q-toolbar-title>
          <q-btn flat round dense icon="menu" class="q-mr-sm" />
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container>
      <RouterView />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="sass">
div
  background-color: $dark-page
</style>
