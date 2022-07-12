<script lang="ts" setup>
import { onMounted, ref, onUpdated } from "vue";
const canvasRef: any = ref(null);

const props = defineProps({
  name: { type: String, required: true },
  image: { type: String, required: true },
  crosshairSpace: { type: Number, default: 20 },
});

function drawCrosshair(
  x: number,
  y: number,
  w: number,
  h: number,
  ctx: any,
  sp: number
) {
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgba(255,0,0,0.3)";
  ctx.beginPath();
  ctx.moveTo(x, h / 4);
  ctx.lineTo(x, y - sp);
  ctx.moveTo(x, y + sp);
  ctx.lineTo(x, h - h / 4);
  ctx.moveTo(w / 4, y);
  ctx.lineTo(x - sp, y);
  ctx.moveTo(x + sp, y);
  ctx.lineTo(w - w / 4, y);
  ctx.stroke();
}

function drawImage() {
  const ctx = canvasRef.value.getContext("2d");
  const canvas = canvasRef.value;
  const img = new Image();
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
    drawCrosshair(
      canvas.width / 2,
      canvas.height / 2,
      canvas.width,
      canvas.height,
      ctx,
      props.crosshairSpace
    );
  };
  img.src = props.image;
  img.alt = 'https://via.placeholder.com/300';
}

onMounted(() => {
  drawImage();
});

onUpdated(() => {
  drawImage();
})

</script>

<template>
<div>
  <canvas ref="canvasRef" style="height: 100%; width: 100%"></canvas>
</div>
</template>