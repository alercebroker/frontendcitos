<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
<template>
  <q-layout>
    <q-header>
      <div class="row no-shadow justify-end toolbar-space">
        <q-toolbar class="col-4 bg-primary">
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
.toolbar-space
    background-color: $light-page
</style>
