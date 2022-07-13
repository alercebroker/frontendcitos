<template>
  <div id="aladin-div"></div>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive, watch } from "vue";
import { draw } from "./utils/draw";
import * as A from "@cquiroz/aladin-lite/lib/js/A";

const props = defineProps({
  fieldOfView: { type: Number, default: 0.03 },
  objects: { type: Array, default: () => [] }, //astronomic objects
  circleSize: { type: Number, default: 2 },
  displayClass: { type: String, default: "" },
  showCloseObjects: { type: Boolean, default: true },
  initObjectId: { type: String, required: true },
});
const aladin: any = ref(null);
const data = reactive({
  objectSelected: {},
  catalog: [],
});

onMounted(() => {
  aladin.value = A.aladin("#aladin-div", {
    survey: "P/PanSTARRS/DR1/color-z-zg-g",
    fov: props.fieldOfView,
    cooFrame: "J2000d",
    showFov: true,
    showCoordinates: true,
  });
  data.objectSelected = props.objects.find(
    (obj: any) => obj.oid === props.initObjectId
  ) as any;
  updateCatalog(props.objects);
  onObjectSelected(data.objectSelected);
  aladin.value.view.reticleCanvas.onwheel = onReticleZoom;
});

function onReticleZoom(event: WheelEvent) {
  event.preventDefault();
  event.stopPropagation();
  let level = aladin.value.view.zoomLevel;
  const delta = -event.deltaY;

  if (delta > 0) {
    level++;
  } else {
    level--;
  }
  aladin.value.view.setZoomLevel(level);
  return false;
}

function updateCatalog(objects: any[]) {
  aladin.value.removeLayers();
  const sources = objects.map((object: any) =>
    A.source(object.meanra, object.meandec, {
      name: object.oid,
      size: props.circleSize,
      class: object[props.displayClass] ?? "",
    })
  );
  if (!sources.length) return;

  const catalog = A.catalog({ sourceSize: 10, shape: draw });
  catalog.addSources(sources);
  aladin.value.addCatalog(catalog);
  //onclick
  data.catalog = catalog;
}

function onObjectSelected(newObject: any) {
  console.info("new object selected", newObject);
  const coordinates = {
    ra: newObject.meanra,
    dec: newObject.meandec,
  };
  addNearCatalogObjects(coordinates);
  aladin.value.gotoRaDec(coordinates.ra, coordinates.dec);
}

function addNearCatalogObjects(coordinates: { ra: number; dec: number }) {
  if (!props.showCloseObjects || !aladin.value) return;

  aladin.value.addCatalog(
    A.catalogFromSimbad(coordinates, 0.014, { onClick: "showTable" })
  );

  aladin.value.addCatalog(
    A.catalogFromNED(coordinates, 0.014, {
      onClick: "showTable",
      shape: "plus",
    })
  );

  aladin.value.addCatalog(
    A.catalogFromVizieR("I/311/hip2", coordinates, 0.014, {
      onClick: "showTable",
    })
  );
}

watch([data.objectSelected], onObjectSelected);
</script>

<style scoped>
#aladin-div {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  min-height: 400px;
}
.aladin-measurement-div {
  color: black;
}
.aladin-reticleColor {
  color: black;
}
.aladin-location-text {
  color: black;
}
</style>