<template>
  <q-card>
    <q-card-section>
      <div class="row justify-center">
        <div class="col-6">
          <q-select
            v-model="selected"
            filled
            dense
            :options="[{ id: 1, label: 'KEK' }]"
            label="Label (stacked)"
            stack-label
          />
        </div>
        <div class="col-3">
          <q-btn round color="primary" size="xs" icon="arrow_left"></q-btn>
          <q-btn round color="primary" size="xs" icon="arrow_right"></q-btn>
        </div>
        <div class="col-1"></div>
        <q-separator></q-separator>
        <div class="col-1"></div>
      </div>
    </q-card-section>
    <q-card-section> </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const selected = ref(1);
</script>

<style scoped>
.col-6,
.col-1,
.col-3 {
  padding: 1rem;
}
</style>
