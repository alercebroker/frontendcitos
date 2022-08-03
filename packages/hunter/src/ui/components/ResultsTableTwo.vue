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
      <template v-slot:header-cell-date="props">
        <q-th :props="props">
          {{ props.col.label }}
          <q-icon name="info">
            <q-tooltip> All times are in UT </q-tooltip>
          </q-icon>
        </q-th>
      </template>
    </q-table>
  </q-card>
</template>

<script setup lang="ts">
const columns = [
  {
    name: "status",
    label: "Status",
    field: "status",
    align: "center",
  },
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
    name: "fdtel",
    label: "1D Telescope",
    align: "center",
    field: "fdtel",
  },
  {
    name: "fdmag",
    field: "fdmag",
    align: "center",
    label: "1D Mag",
  },
  {
    name: "fdband",
    field: "fdband",
    align: "center",
    label: "1D Band",
  },
  {
    name: "score",
    label: "Score",
    sortable: true,
    field: "score",
  },
];
const objects2 = [
  {
    name: "ZTF12354",
    date: "21/07 15:55:50",
    obs: 4,
    reported: "",
    score: 0.78,
    fdtel: "ZTF",
    fdmag: 3333,
    fdband: "g",
  },
  {
    name: "ZTF12354",
    date: "21/07 15:55:50",
    obs: 4,
    reported: "",
    score: 0.78,
    fdtel: "ZTF",
    fdmag: 3333,
    fdband: "g",
  },
  {
    name: "ZTF12354",
    date: "21/07 15:55:50",
    obs: 4,
    reported: "",
    score: 0.78,
    fdtel: "ZTF",
    fdmag: 3333,
    fdband: "g",
  },
  {
    name: "ZTF12354",
    date: "21/07 15:55:50",
    obs: 4,
    reported: "",
    score: 0.78,
    fdtel: "ZTF",
    fdmag: 3333,
    fdband: "g",
  },
  {
    name: "ZTF12354",
    date: "21/07 15:55:50",
    obs: 4,
    reported: "",
    score: 0.78,
    fdtel: "ZTF",
    fdmag: 3333,
    fdband: "g",
  },
];
</script>

<style scoped>
.q-btn {
  padding: 0.2rem;
  margin: 0.1rem;
}
</style>
