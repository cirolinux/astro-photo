const columns = [
  {
    name: "name",
    align: "left",
    label: "Produttore",
    field: (row) => row.expand?.produttore.name,
    sortable: true,
  },
  {
    name: "name",
    align: "left",
    label: "Nome",
    field: "name",
    sortable: true,
  },
  {
    name: "fabbricazione",
    align: "left",
    label: "Fabbricazione",
    field: "fabbricazione",
    sortable: true,
  },
  {
    name: "tipo",
    align: "left",
    label: "Tipo",
    field: "tipo",
    sortable: true,
  },
  {
    name: "diametro",
    align: "left",
    label: "Diametro",
    field: "diametro",
    sortable: true,
  },
  {
    name: "focale",
    align: "left",
    label: "Focale",
    field: "focale",
    sortable: true,
  },
  {
    name: "peso",
    align: "left",
    label: "Peso (kg)",
    field: "peso",
    sortable: true,
  },
  {
    name: "luce",
    align: "left",
    label: "Raccolta Luce",
    field: "luce",
    sortable: true,
  },



];

export default columns;
