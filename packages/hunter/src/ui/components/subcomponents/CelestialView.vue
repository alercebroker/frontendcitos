<script lang="ts"></script>

<script setup lang="ts">
import { ref, watch, onMounted, defineProps } from "vue";
import celestial from "d3-celestial";
import config from "../config/celestial.config";

const CelestialRef = ref<any>();
const props = defineProps({
  objectList: { type: Array, required: true },
  objectSelected: { type: Object },
});

function addPoints() {
  const Celestial = CelestialRef.value;
  Celestial.clear();
  const { objectList } = props;
  const coordinates = {
    type: "FeatureCollection",
    features: objectList.map((object: any) => ({
      type: "Feature",
      id: object.aid,
      properties: {
        name: object.aid,
        type: "sn",
      },
      geometry: {
        type: "Point",
        coordinates: [object.ra, object.dec],
      },
    })),
  };

  Celestial.add({
    type: "raw",
    callback() {
      const dsn = Celestial.getData(coordinates, config.transform);
      Celestial.container
        .selectAll(".sn")
        .data(dsn.features)
        .enter()
        .append("path")
        .attr("class", "sn")
        .attr("id", (d: any) => d.id);
      Celestial.redraw();
    },
    redraw() {
      Celestial.container.selectAll(".sn").each(function (d: any) {
        const pt = Celestial.mapProjection(d.geometry.coordinates);
        Celestial.setStyle({
          stroke: "#534B8C",
          width: 3,
          fill: "rgba(255, 204, 255, 0.8)",
        });
        Celestial.context.beginPath();
        Celestial.context.arc(pt[0], pt[1], 4, 0, 2 * Math.PI);
        Celestial.context.closePath();
        Celestial.context.stroke();
        Celestial.context.fill();
      });
    },
  });
  Celestial.display(config);
}

function moveToPoint(ra: number, dec: number) {
  const point = [ra, dec, 0];
  const animations = [{ param: "center", value: point, duration: 250 }];
  CelestialRef.value.animate(animations, false);
}

onMounted(() => {
  CelestialRef.value = celestial.Celestial();
  addPoints();
});

watch(
  () => props.objectList,
  () => {
    addPoints();
  }
);

watch(
  () => props.objectSelected,
  (newObjectSelected: any) => {
    if (!newObjectSelected) return;
    const { ra, dec } = newObjectSelected;
    moveToPoint(ra, dec);
  }
);
</script>

<style scoped>
#celestial-map {
  width: 100%;
  height: 100% !important;
  padding: inherit;
}
</style>

<template>
  <div id="celestial-map"></div>
</template>
