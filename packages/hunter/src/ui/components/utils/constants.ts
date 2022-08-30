export const columns = [
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
