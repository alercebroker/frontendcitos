<script setup lang="ts">
import AladinViewer from "./components/aladin/AladinViewer.vue";

const params = {
  objects: [
    {
      oid: "ZTF20aaelulu",
      ndethist: "259",
      ncovhist: 792,
      mjdstarthist: 58855.45880790008,
      mjdendhist: 58967.22704860009,
      corrected: false,
      stellar: false,
      ndet: 58,
      g_r_max: 0.44063377,
      g_r_max_corr: null,
      g_r_mean: 0.69992447,
      g_r_mean_corr: null,
      firstmjd: 58855.54229169991,
      lastmjd: 58967.22704860009,
      deltajd: 111.68475690018386,
      meanra: 185.72886239827588,
      meandec: 15.823611163793103,
      sigmara: 0.000020912251856557,
      sigmadec: 0.000015130516372812443,
      step_id_corr: "corr_bulk_0.0.1",
    },
  ],
  initObjectId: "ZTF20aaelulu",
};
</script>

<template>
  <header style="width: 100%; height: 100%; min-width: 1000px;">
    <aladin-viewer
      :objects="params.objects"
      :init-object-id="params.initObjectId"
    ></aladin-viewer>
  </header>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
