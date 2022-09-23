<template>
  <q-card>
    <q-card-section style="padding: 0" v-if="!hideTools">
      <div class="row justify-center">
        <div class="col-6">
          <q-select
            v-model="selected"
            filled
            dense
            :options="props.detections"
            :option-label="formatLabel"
            label="Date"
            map-options
            stack-label
            @update:model-value="changeSelect"
          />
        </div>
        <div class="col-2 q-mt-xs">
          <q-btn
            round
            style="background: white; color: black"
            size="xs"
            class="q-pa-sm q-mr-sm"
            icon="arrow_left"
            @click="previousDetection"
          >
          </q-btn>
          <q-btn
            round
            style="background: white; color: black"
            size="xs"
            class="q-pa-sm"
            icon="arrow_right"
            @click="nextDetection"
          >
          </q-btn>
        </div>
        <div class="col-1">
          <q-btn size="md" color="primary" @click="onAvroClick">AVRO</q-btn>
        </div>
        <div class="col-1">
          <q-icon name="error" size="2rem">
            <q-tooltip max-width="20rem">
              AVRO is the format in which we receive alerts from ZTF. Clicking
              the AVRO button will show the full information contained in the
              avro file for the selected detection.
            </q-tooltip>
          </q-icon>
        </div>
      </div>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section style="padding: 0 5%">
      <div class="row justify-center">
        <div class="col-4">
          <generic-card
            title="Science"
            :viewtype="data.activeTool"
            :candid="selected.candid"
            :image-url="stampImage('science')"
            :objectId="objectId"
          />
        </div>
        <div class="col-4">
          <generic-card
            title="Template"
            :viewtype="data.activeTool"
            :candid="selected.candid"
            :image-url="stampImage('template')"
            :objectId="objectId"
          />
        </div>
        <div class="col-4">
          <generic-card
            title="Difference"
            :viewtype="data.activeTool"
            :candid="selected.candid"
            :image-url="stampImage('difference')"
            :objectId="objectId"
          />
        </div>
      </div>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section v-if="!hideTools">
      <div class="row justify-center">
        <q-icon
          v-for="tool in tools"
          :key="tool.id"
          :name="tool.icon"
          size="2rem"
          class="q-mr-sm"
          @click="selectTool(tool.id)"
        ></q-icon>
        <q-icon name="question_mark" size="2rem">
          <q-tooltip max-width="20rem">
            Use the tool icons to change between <strong>zoom</strong> or
            <strong>crosshair</strong> modes
          </q-tooltip>
        </q-icon>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { stampUrl } from "../../utils/urls";
import { jdToDate } from "../../utils/dates";
import { customIteratorFactory } from "../../utils/array";
import GenericCard from "./subcomponents/GenericCard.vue";

const tools = [
  { id: "zoom", text: "Zoom", icon: "zoom_in" },
  { id: "crosshair", text: "Crosshair", icon: "location_searching" },
];

const props = defineProps({
  detections: { type: Array, required: true },
  imageServiceUrl: { type: String, required: true },
  objectId: { type: String, required: true },
  hideTools: { type: Boolean, default: false },
});

const emit = defineEmits(["selectDetection", "toggleFullscreen", "avroClick"]);

const data = reactive({
  isFullscreen: false,
  selectedIndex: 0,
  activeTool: "crosshair",
});
const selected: any = ref(props.detections[data.selectedIndex]);
const iterator = customIteratorFactory(props.detections, data.selectedIndex);

function nextDetection() {
  iterator.next();
  data.selectedIndex = iterator.current();
  selected.value = props.detections[data.selectedIndex];
}

function previousDetection() {
  iterator.prev();
  data.selectedIndex = iterator.current();
  selected.value = props.detections[data.selectedIndex];
}

function changeSelect(element: any) {
  data.selectedIndex = iterator.moveTo(element);
}

function selectTool(toolId: string) {
  data.activeTool = toolId;
}

function onAvroClick() {
  emit("avroClick", selected);
}

function stampImage(type: string) {
  return async (candid: string, format: string) =>
    await stampUrl({
      baseUrl: props.imageServiceUrl,
      candid,
      type,
      format,
      surveyId: selected.value.tid,
    });
}

function formatLabel(detection: any) {
  return jdToDate(detection.mjd).toUTCString().slice(0, -3) + "UT";
}
</script>

<style scoped>
.col-6,
.col-1,
.col-2,
.col-3 {
  padding: 1rem;
}

.button-panel {
  display: inline-block;
  padding: 0 auto;
  justify-content: space-around;
}

.q-icon:hover {
  cursor: pointer;
  color: lightgray;
}
</style>
