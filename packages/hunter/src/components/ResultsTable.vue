<template>
  <q-card flat bordered>
    <div v-for="object in objects" :key="object.name">
      <q-card class="q-ma-xs">
        <q-card-section class="row">
          <div class="col-4">
            <div class="text-subtitle1">
              {{ object.name }}
            </div>
            <div class="text-caption">
              21/07/22 15:55:50 UT
            </div>
          </div>
          <div class="col-3 row items-center q-pl-sm">
            <div class="text-caption">
              #Obs: 4
            </div>
            <div class="text-caption">
              Reported: TOM
            </div>
          </div>
          <div class="col-5 self-center" align="right">
            <div class="text-subtitle1 q-mr-sm" style="display: inline;">
              0.78
            </div>
            <q-btn flat size="sm" icon="star"></q-btn>
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