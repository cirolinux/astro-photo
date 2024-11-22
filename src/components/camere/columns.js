
const columns = [
  { name: "name", align: "left", label: "Produttore", field: row => row.expand.produttore.name, sortable: true },
  { name: "name", align: "left", label: "Fotocamera", field: "name", sortable: true },
  { name: "pizelsize", align: "left", label: "Pixel-Size", field: 'pixelsize', sortable: true },
  { name: "megapixel", align: "left", label: "Megapixel", field: 'megapixel', sortable: true },
  { name: "risoluzione", align: "left", label: "Risoluzione", field: 'risoluzione', sortable: true },
  { name: "chip", align: "left", label: "Chip-Size (mm/inch)", field: 'chip', sortable: true },
  { name: "diagonale", align: "left", label: "Diagonale (mm)", field: 'diagonale', sortable: true },
  { name: "full_well", align: "left", label: "Full Well", field: 'full_well', sortable: true },
  { name: "qe", align: "left", label: "Q.E.", field: 'qe', sortable: true },
  { name: "noise", align: "left", label: "Read Noise", field: 'noise', sortable: true },
  { name: "fps", align: "left", label: "FPS", field: 'fps', sortable: true },
  { name: "adc", align: "left", label: "ADC (bit)", field: 'adc', sortable: true },
];

export default columns;
