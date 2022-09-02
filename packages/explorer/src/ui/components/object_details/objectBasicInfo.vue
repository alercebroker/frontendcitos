<script setup lang="ts">
  // importar el store o lo pido como prop
  // hago la request https
  // pueblo el store

  // lleno el html

  import { ref } from "vue";
  import { useObjectDetailsStore } from "@/ui/stores/object_details";
  import { storeToRefs } from "pinia";
  import { useRoute } from 'vue-router';

  const route = useRoute();
  console.log( route.params );
  const id = route.params.objectId as string
  
  const objectDetailsStore = useObjectDetailsStore()
  const { objectDetails} = storeToRefs(objectDetailsStore)
  
  objectDetailsStore.getObject(id)
  console.log(objectDetails)

</script>


<template>
  <p> {{ objectDetails.aid }}</p>
  <br>
  <p> {{ objectDetails.ra }} </p>
  <br>
</template>

<style lang="sass" scoped></style>
