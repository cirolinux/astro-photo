<template>
  <q-table
    title="Fotocamere:"
    flat
    bordered
    no-results-label="Il filtro non ha rilevato alcun risultato!"
    no-data-label="Non ci sono Camere con questi parametri"
    :rows="rows"
    :columns="columns"
    :pagination="initialPagination"
    :filter="filter"
    row-key="name"
    dense
  >
    <template v-slot:top-right>
      <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
  </q-table>
</template>

<script setup>
import columns from "./columns";
import { LocalStorage } from "quasar";
import { useCamStore } from "src/stores/cam-store";
import { ref } from "vue";

const store = useCamStore();
// DATI TABELLA:
const rows = ref();
const filter = ref("");
rows.value = LocalStorage.getItem("camere"); //store.fotoCamere;
console.log(rows.value);

const initialPagination = ref({
  sortBy: "desc",
  descending: false,
  page: 1,
  rowsPerPage: 50,
});
</script>

<style lang="scss" scoped></style>
