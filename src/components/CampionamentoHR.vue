<template>
  <q-card class="my-card q-ma-xs">
    <div class="text-h5 text-bold text-center">
      Campionamento ideale nell’imaging in alta risoluzione
    </div>
    <q-card-section horizontal>
      <!--  -->
      <q-card-section class="col-6">
        <q-separator spaced />
        <div class="text-h5 text-center">
          <q-chip label="PR" color="teal" text-color="white" /> = (<q-chip label="120" color="accent" text-color="white" />
          /<q-chip label="D" color="amber-10" text-color="white" />)
        </div>
        <q-separator spaced />
        <div class="text-subtitle1">
          <q-chip label="PR" color="teal" text-color="white" /> = potere risolutivo, in
          secondi d’arco
        </div>
        <div class="text-subtitle1">
          <q-chip label="D" color="amber-10" text-color="white" /> = diametro del
          telescopio espresso in millimetri
        </div>
      </q-card-section>
      <!--  -->
      <q-separator vertical />
      <q-card-section class="col-6 q-pa-lg">
        <q-input v-model="campionamento.d" input-class="text-center text-bold" type="text" label="Diametro del telescopio espresso in millimetri:" dense />
        <q-separator vertical class="q-mt-xl" />

        <div class="text-left">
          <q-chip label="Potere risolutivo" />
          <q-chip square color="teal" text-color="white" :label="result" class="text-bold" />
        </div>
        <q-separator spaced />
        <div class="text-left">
          <q-chip label="Campionamento ottimale" />
          <q-chip square color="teal" text-color="white" :label="cott" class="text-bold" />
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed, reactive } from "vue";

const campionamento = reactive({
  d: 1,
  c: 120,
});

const result = computed(() => {
  return 120 / campionamento.d;
});
const cott = computed(() => {
  return 37 / campionamento.d;
});
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  min-width: 450px;
  padding: auto;
}
</style>
