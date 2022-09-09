<script setup lang="ts">
  import { ref, reactive, onMounted } from "vue";
  import { storeToRefs } from "pinia";
  import { useRoute } from 'vue-router';
  import { useObjectDetailsStore } from "@/ui/stores/object_details";
  import ObjectBasicInfo from '../components/object_details/objectBasicInfo.vue';
  import magStats from "../components/object_details/magStats.vue";
  import lightCurve from "../components/object_details/lightCurve.vue";

  const route = useRoute();
  const id = route.params.objectId as string
  
  const objectDetailsStore = useObjectDetailsStore()
  const { objectDetails } = storeToRefs(objectDetailsStore)

  onMounted(() => {
    objectDetailsStore.getObjectBasicInfo(id)
    objectDetailsStore.getObjectLightCurve(id)
  })

</script>

<template>
  <q-page>
    <div class="row justify-around">
      <div class="col-md-4 col-sm-6 col-xs-12">
        <object-basic-info />
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <light-curve/>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">Aladin</div>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <mag-stats/>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">Stamps</div>
    </div>
  </q-page>
</template>
