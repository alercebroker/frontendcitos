<template>
  <div :id="props.divId"></div>
</template>
<script lang="ts">
declare const A: any;

function appendScript(lib: string, onload?: () => void): Promise<void> {
  return new Promise((resolve, reject) => {
    function resolveFunction() {
      if (onload) onload();
      resolve();
    }
    // check if library exists before appending it
    if (document.querySelectorAll(`script[src="${lib}"]`).length > 0) {
      return resolveFunction();
    }

    const externalScript = document.createElement("script");
    externalScript.setAttribute("src", lib);
    externalScript.async = false;
    externalScript.onload = resolveFunction;
    document.head.appendChild(externalScript);
  });
}
</script>
<script setup lang="ts">
import { ref, onBeforeMount, reactive, watch, defineEmits } from "vue";
import { draw } from "./utils/draw";

const props = defineProps({
  divId: { type: String, default: "aladin-lite-div" },
  fieldOfView: { type: Number, default: 0.01 },
  objects: { type: Array, default: () => [] }, //astronomic objects
  circleSize: { type: Number, default: 2 },
  displayClass: { type: String, default: "" },
  showCloseObjects: { type: Boolean, default: true },
  initObjectId: { type: String, required: true },
});
const aladin: any = ref(null);
const data = reactive({
  objectSelected: {},
  aladinObjectSelected: null,
  catalog: { sources: [] },
});
const emit = defineEmits(["objectSelected", "mounted"]);

onBeforeMount(async () => {
  await appendScript("https://code.jquery.com/jquery-1.12.1.min.js");
  await appendScript(
    "https://aladin.cds.unistra.fr/AladinLite/api/v3/latest/aladin.js",
    function () {
      A.init.then(() => {
        aladin.value = A.aladin("#" + props.divId, {
          survey: "P/PanSTARRS/DR1/color-z-zg-g",
          fov: props.fieldOfView,
          cooFrame: "J2000d",
          showFov: true,
          showCoordinates: true,
        });
        const objectSelected = findObjectByOid(props.initObjectId);
        updateCatalog(props.objects);
        if (objectSelected) {
          data.objectSelected = objectSelected;
          onObjectSelected(objectSelected);
        }
        aladin.value.setProjection("AIT");
        aladin.value.view.reticleCache.onwheel = onReticleZoom;
        emit("mounted");
      });
    }
  );
});

function findObjectByOid(oid: string) {
  return props.objects.find(
    (obj: any) => obj.oid === props.initObjectId
  ) as any;
}

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

function onObjectClicked(object: any) {
  if (object) {
    emit("objectSelected", findObjectByOid(object.data.name));
    return;
  }
  data.objectSelected = null as any;
  emit("objectSelected", {});
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
  aladin.value.on("objectClicked", onObjectClicked);
  data.catalog = catalog;
}

function onObjectSelected(newObject: any) {
  if (!newObject) return;
  const coordinates = {
    ra: newObject.meanra,
    dec: newObject.meandec,
  };
  addNearCatalogObjects(coordinates);
  data.aladinObjectSelected = data.catalog.sources.find((source: any) => {
    return source.data.name === newObject.oid;
  }) as any;
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

watch(() => [data.objectSelected], onObjectSelected);
watch(
  () => props.initObjectId,
  (newObjectId: string) => {
    const newObject = findObjectByOid(newObjectId);
    onObjectSelected(newObject);
  }
);
watch(
  () => data.aladinObjectSelected,
  (newASelected: any, currentASelected: any) => {
    if (newASelected) newASelected.select();
    if (currentASelected) currentASelected.deselect();
  }
);
watch(
  () => props.objects,
  (newObjects) => {
    updateCatalog(newObjects);
  }
);
</script>

<style>
/*
@import "https://aladin.u-strasbg.fr/AladinLite/api/v2/latest/aladin.min.css";
*/
#aladin-lite-div {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
.aladin-measurement-div {
  color: black !important;
  display: block !important;
}
.aladin-reticleColor {
  color: black;
}
.aladin-location-text {
  color: black;
}
</style>
