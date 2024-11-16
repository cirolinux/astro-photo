const columns = [
  { name: "name", align: "left", label: "Produttore", field: row => row.expand.produttore.name, sortable: true },
  { name: "name", align: "left", label: "Fotocamera", field: "name", sortable: true },

];

export default columns;
