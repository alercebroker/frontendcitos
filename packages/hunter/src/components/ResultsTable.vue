<template>
  <q-card flat class="q-ma-sm">
    <div v-for="object in objects" :key="object.name">
      <q-card class="q-ma-xs">
        <q-card-section class="row">
          <div class="col-7">
            <div class="text-subtitle2">
              {{ object.name }}
            </div>
            <div class="text-caption">
              FirstMJD: 540000
            </div>
          </div>
          <div class="col-5 self-center" align="right">
            <q-btn flat size="sm" icon="done"></q-btn>
            <q-btn flat size="sm" icon="clear"></q-btn>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-card>
</template>

<script setup lang="ts">
const objects = [
  { name: "ZTF12354" },
  { name: "ZTF12354" },
  { name: "ZTF12354" },
  { name: "ZTF12354" },
  { name: "ZTF12354" },
]
</script>

<style scoped>
.q-btn {
  padding: 0.2rem;
  margin: 0.1rem;
}
</style>