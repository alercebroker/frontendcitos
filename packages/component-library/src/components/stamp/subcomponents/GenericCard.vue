<template>
  <q-card flat>
    <q-card-section class="card-header q-py-sm">
      <div class="text-h6" style="display: flex; justify-content: space-between">
        {{ title }}
        <q-btn outline color="primary" icon="cloud_download" :href="imageUrl(props.candid, 'fits')">Download</q-btn>  
      </div>
    </q-card-section>
    <q-card-section class="card-image">
      <img :src="imageUrl(props.candid, 'png')" alt="https://via.placeholder.com/300">
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: { type: String, required: true },
  imageUrl: { type: Function, required: true },
  candid: { type: String, required: true },
})
</script>

<style scoped>
* {
  padding: 0.1rem;
  margin: 0.1rem;
}

.q-btn {
  padding: 0 0.5rem;
}
</style>
