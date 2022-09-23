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
          @click="imageDownload"
        ></q-btn>
      </div>
    </q-card-section>
    <q-card-section class="card-image">
      <crosshair-image
        v-if="viewtype === 'crosshair'"
        :name="props.title"
        :image="image"
      />
      <zoom-image v-if="viewtype === 'zoom'" :image="image" :scale="2" />
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import CrosshairImage from "./CrosshairImage.vue";
import ZoomImage from "./ZoomImage.vue";

const props = defineProps({
  title: { type: String, required: true },
  imageUrl: { type: Function, required: true },
  candid: { type: String, required: true },
  viewtype: { type: String, default: "crosshair" },
  objectId: { type: String },
});

const image = ref("");
const imageDownload = ref();

onMounted(() => {
  props.imageUrl(props.candid, "png").then((result: string) => {
    image.value = result;
  });
  props.imageUrl(props.candid, "fits").then((result: Blob) => {
    imageDownload.value = () => {
      console.log("blob", result);
      let downloadUrl = window.URL.createObjectURL(result);
      let a = document.createElement("a");
      a.href = downloadUrl;
      a.download = `${props.objectId}_${props.candid}_${props.title}.fits.gz`;
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(downloadUrl);
    };
  });
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
