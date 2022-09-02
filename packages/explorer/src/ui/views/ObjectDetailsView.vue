<script setup lang="ts">
  import ObjectBasicInfo from '../components/object_details/objectBasicInfo.vue';
</script>

<template>
  <q-page>
    <object-basic-info />
    <div class="row justify-around">
      <div class="col-md-4 col-sm-6 col-xs-12">Object Basic Info</div>
      <div class="col-md-4 col-sm-6 col-xs-12">Light Curve</div>
      <div class="col-md-4 col-sm-6 col-xs-12">Aladin</div>
      <div class="col-md-4 col-sm-6 col-xs-12">Magstats</div>
      <div class="col-md-4 col-sm-6 col-xs-12">Stamps</div>
    </div>
  </q-page>
</template>
