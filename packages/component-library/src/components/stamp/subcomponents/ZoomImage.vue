<template>
  <div
    class="zoom-on-hover"
    ref="imgDiv"
    @mousemove="move($event)"
    @mouseenter="zoom"
    @mouseleave="unzoom"
  >
    <img
      ref="normalImageRef"
      class="normal"
      :src="image"
      alt="https://via.placeholder.com/300"
    />
    <img
      ref="zoomedImageRef"
      class="zoom"
      :src="image"
      alt="https://via.placeholder.com/300"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { Ref } from "vue";

const normalImageRef: Ref<HTMLElement | null> = ref(null);
const zoomedImageRef: Ref<HTMLElement | null> = ref(null);
const imgDiv: Ref<HTMLElement | null> = ref(null);
const resizeCheckIntervalsRef = ref(null);

const props = defineProps({
  image: { type: String, required: true },
  scale: { type: Number, default: 1 },
  customClasses: { type: Array, default: () => [] },
});

onMounted(() => {
  if (!zoomedImageRef.value) return;
  zoomedImageRef.value.style.transform = "scale(" + props.scale + ")";
});

function zoom() {
  if (!zoomedImageRef.value || !normalImageRef.value) return;
  zoomedImageRef.value.style.opacity = "1";
  normalImageRef.value.style.opacity = "0";
}

function unzoom() {
  if (!zoomedImageRef.value || !normalImageRef.value) return;
  zoomedImageRef.value.style.opacity = "0";
  normalImageRef.value.style.opacity = "1";
}

function pageOffset(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    y: rect.top + scrollTop,
    x: rect.left + scrollLeft,
  };
}

function move(evt: MouseEvent) {
  if (!zoomedImageRef.value || !normalImageRef.value || !imgDiv.value) return;
  const offset = pageOffset(imgDiv.value);
  const zoomed = zoomedImageRef.value;
  const normal = normalImageRef.value;

  const relativeX = evt.clientX - offset.x + window.scrollX;
  const relativeY = evt.clientY - offset.y + window.scrollY;
  const normalFactorX = relativeX / normal.offsetWidth;
  const normalFactorY = relativeY / normal.offsetHeight;
  const x =
    normalFactorX * (zoomed.offsetWidth * props.scale - normal.offsetWidth);
  const y =
    normalFactorY * (zoomed.offsetHeight * props.scale - normal.offsetHeight);
  zoomed.style.left = -x + "px";
  zoomed.style.top = -y + "px";
}
</script>

<style lang="css" scoped>
.zoom-on-hover {
  position: relative;
  overflow: hidden;
}
.zoom-on-hover .normal {
  width: 100%;
}
.zoom-on-hover .zoom {
  position: absolute;
  opacity: 0;
  transform-origin: top left;
}
</style>
