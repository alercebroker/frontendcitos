<template>
  <q-card flat>
    <q-card-section class="card-header q-py-sm">
      <div
        class="text-h6"
        style="display: flex; justify-content: space-between"
      >
        {{ title }}
        <q-btn
          outline
          color="primary"
          icon="cloud_download"
          size="sm"
          :href="data.imageDownload"
          ></q-btn
        >
      </div>
    </q-card-section>
    <q-card-section class="card-image">
      <crosshair-image v-if="viewtype === 'crosshair'" :name="props.title" :image="data.image" />
      <zoom-image v-if="viewtype === 'zoom'" :image="data.image" :scale="2"/>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { reactive, onUpdated } from "vue";
import CrosshairImage from "./CrosshairImage.vue";
import ZoomImage from "./ZoomImage.vue";

const props = defineProps({
  title: { type: String, required: true },
  imageUrl: { type: Function, required: true },
  candid: { type: String, required: true },
  viewtype: { type: String, default: 'crosshair' }
});

onUpdated(() => {
  const { candid, imageUrl } = props;
  data.image = imageUrl(candid, "png");
  data.imageDownload = imageUrl(candid, "fits");
});

const data = reactive({
  image: props.imageUrl(props.candid, "png"),
  imageDownload: props.imageUrl(props.candid, "fits"),
});
</script>

<style scoped>
* {
  padding: 0.1rem;
  margin: 0.1rem;
}

.q-btn {
  padding: 0 0.5rem;
}

.card-header {
  padding: 0 1rem;
}

.card-image {
  padding-top: 0;
}
</style>
