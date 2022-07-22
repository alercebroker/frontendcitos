<template>
  <q-card flat bordered>
    <q-table title="Objects" :rows="objects2" :columns="columns" row-key="name">
      <template v-slot:body-cell-status>
        <q-td>
          <q-btn flat size="sm" icon="star"></q-btn>
          <q-btn flat size="sm" icon="done"></q-btn>
          <q-btn flat size="sm" icon="clear"></q-btn>
        </q-td>
      </template>
    </q-table>
  </q-card>
</template>

<script setup lang="ts">
const columns = [
  {
    name: "name",
    sortable: true,
    label: "ObjectID",
    field: "name",
  },
  {
    name: "date",
    label: "Discovery",
    field: "date",
    align: "center",
  },
  {
    name: "obs",
    label: "# Obs",
    align: "center",
    field: "obs",
  },
  {
    name: "score",
    label: "Score",
    sortable: true,
    field: "score",
  },
  {
    name: "status",
    label: "Status",
    field: "status",
    align: "center",
  },
];
const objects2 = [
  {
    name: "ZTF12354",
    date: "21/07/22 15:55:50 UT",
    obs: 4,
    reported: "",
    score: 0.78,
  },
  {
    name: "ZTF12354",
    date: "21/07/22 15:55:50 UT",
    obs: 4,
    reported: "",
    score: 0.78,
  },
  {
    name: "ZTF12354",
    date: "21/07/22 15:55:50 UT",
    obs: 4,
    reported: "",
    score: 0.78,
  },
  {
    name: "ZTF12354",
    date: "21/07/22 15:55:50 UT",
    obs: 4,
    reported: "",
    score: 0.78,
  },
  {
    name: "ZTF12354",
    date: "21/07/22 15:55:50 UT",
    obs: 4,
    reported: "",
    score: 0.78,
  },
];
</script>

<style scoped>
.q-btn {
  padding: 0.2rem;
  margin: 0.1rem;
}
</style>
