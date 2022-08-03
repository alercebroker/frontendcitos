<script lang="ts"></script>

<script setup lang="ts">
import { onMounted, defineProps } from "vue";
import celestial from "d3-celestial";
import config from "./config/celestial.config";

const props = defineProps({
  objectSelected: { type: Object, required: true },
});

onMounted(() => {
  const Celestial = celestial.Celestial();
  const { objectSelected } = props;
  const coordinates = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: objectSelected.candid,
        properties: {
          name: objectSelected.name,
          type: "sn",
        },
        geometry: {
          type: "Point",
          coordinates: [objectSelected.ra, objectSelected.dec],
        },
      },
    ],
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
});
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
