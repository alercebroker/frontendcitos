<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
  ndet: {
    min: 0,
    max: 100,
  },
  firstmjdDate: { from: null, to: null },
  firstmjd: { from: null, to: null },
  aid: "",
  oid: "",
  coordinates: {
    ra: null,
    dec: null,
    radius: null,
  },
  tab: "general",
  fastQueries: [
    {
      title: "Query Title1",
      category: "Query Category",
      description: "description",
      image:
        "https://alerce-science.s3.amazonaws.com/images/nick_hall_alerce_star_trail_web01.max-1600x900.jpg",
    },
    {
      title: "Query Title2",
      category: "Query Category",
      description: "description",
      image:
        "https://alerce-science.s3.amazonaws.com/images/nick_hall_alerce_star_trail_web01.max-1600x900.jpg",
    },
    {
      title: "Query Title3",
      category: "Query Category",
      description: "description",
      image:
        "https://alerce-science.s3.amazonaws.com/images/nick_hall_alerce_star_trail_web01.max-1600x900.jpg",
    },
    {
      title: "Query Title4",
      category: "Query Category",
      description: "description",
      image:
        "https://alerce-science.s3.amazonaws.com/images/nick_hall_alerce_star_trail_web01.max-1600x900.jpg",
    },
  ],
});
</script>

<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-1">
        <q-img
          src="https://alerce-science.s3.amazonaws.com/images/fullAlerceWHITE.max-1920x200.png"
        />
      </div>
    </div>
    <div class="row q-ml-xl q-mr-xl q-mt-sm q-mb-md justify-center">
      <div class="col-md-8">
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <div class="text-h6 text-center">Search Objects</div>
            <q-tabs v-model="state.tab" inline-label>
              <q-tab name="general" icon="search" label="General Filters" />
              <q-tab name="date" icon="calendar_month" label="Date Filters" />
              <q-tab name="conesearch" icon="gps_fixed" label="Conesearch" />
            </q-tabs>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section>
            <div class="row">
              <div class="col-md-8">
                <q-tab-panels v-model="state.tab" animated>
                  <q-tab-panel name="general">
                    <q-input
                      v-model="state.aid"
                      label="ALeRCE ID"
                      debounce="500"
                      square
                      outlined
                    />
                    <q-input
                      class="q-mt-md"
                      v-model="state.oid"
                      label="Object ID"
                      debounce="500"
                      square
                      outlined
                    />
                    <p class="q-mt-lg q-mb-lg">Number of detections</p>
                    <q-range
                      v-model="state.ndet"
                      :min="0"
                      :max="50"
                      label-always
                      debounce="500"
                    />
                  </q-tab-panel>

                  <q-tab-panel name="date">
                    <div class="row items-center justify-center">
                      <div class="col-md-12 col-lg-6">
                        <q-date
                          v-model="state.firstmjdDate"
                          range
                          minimal
                          first-day-of-week="1"
                        />
                      </div>
                      <div class="col-md-12 col-lg-4">
                        <q-input
                          v-model.number="state.firstmjd.from"
                          type="number"
                          label="Firstmjd From"
                          squared
                          outlined
                        />
                        <q-input
                          class="q-mt-md"
                          v-model.number="state.firstmjd.to"
                          type="number"
                          label="Firstmjd To"
                          squared
                          outlined
                        />
                      </div>
                    </div>
                  </q-tab-panel>

                  <q-tab-panel name="conesearch">
                    <p>Discovery Date</p>
                    <div class="row justify-center">
                      <div class="col q-mr-md">
                        <q-input
                          v-model="state.coordinates.ra"
                          type="number"
                          label="RA"
                          squared
                          outlined
                        />
                      </div>
                      <div class="col q-mr-md">
                        <q-input
                          v-model="state.coordinates.dec"
                          type="number"
                          label="Dec"
                          squared
                          outlined
                        />
                      </div>
                      <div class="col">
                        <q-input
                          v-model="state.coordinates.radius"
                          type="number"
                          label="Radius"
                          squared
                          outlined
                        />
                      </div>
                    </div>
                  </q-tab-panel>
                </q-tab-panels>
              </div>
              <div class="col-4 q-mt-md">
                <q-btn
                  class="full-width"
                  color="primary"
                  label="Search"
                  size="xl"
                />
                <q-btn class="full-width q-mt-xl" label="Clear" outline />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row justify-center q-ml-xl q-mr-xl">
      <div
        v-for="query in state.fastQueries"
        :key="query.title"
        class="col-lg-3 col-md-6 col-sm-12 fast-query q-ml-md q-mr-md"
      >
        <q-card flat bordered>
          <q-img :src="query.image" style="height: 150px" />

          <q-card-section>
            <div class="text-overline">{{ query.category }}</div>
            <div class="text-h5 q-mt-sm q-mb-xs">{{ query.title }}</div>
            <div class="text-caption text-grey">{{ query.description }}</div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat label="Search" />
            <q-btn flat label="Fill Parameters" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.fast-query
  max-width: 350px
</style>
