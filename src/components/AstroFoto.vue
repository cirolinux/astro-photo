<template>
  <q-table
    title="Fotocamere:"
    flat
    bordered
    no-results-label="Il filtro non ha rilevato alcun risultato!"
    no-data-label="Non ci sono Camere con questi parametri"
    :rows="rows"
    :columns="columns"
    row-key="name"
  />
</template>

<script setup>
import columns from "src/DB/columns";
import { LocalStorage } from "quasar";
import { useCamStore } from "src/stores/cam-store";
import { ref } from "vue";

const store = useCamStore();
// DATI TABELLA:
const rows = ref();
rows.value = LocalStorage.getItem("camere"); //store.fotoCamere;
console.log(rows.value);
</script>

<style lang="scss" scoped></style>
