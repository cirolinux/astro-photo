<template>
  <q-card class="my-card q-ma-xs">
    <q-card-section horizontal>
      <q-card-section class="col-6">
        <div class="text-h4 text-bold">campionamento di un’immagine</div>
        <q-separator spaced />
        <div class="text-h5 text-center">
          <q-chip label="C" color="teal" text-color="white" /> = (<q-chip label="D.P." color="accent" text-color="white" />
          /<q-chip label="F" color="amber-10" text-color="white" />) x
          <q-chip label="206265" color="grey-3" text-color="black" />
        </div>
        <q-separator spaced />
        <div class="text-subtitle1">
          <q-chip label="C" color="teal" text-color="white" /> = campionamento (in secondi
          d’arco su pixel)
        </div>
        <div class="text-subtitle1">
          <q-chip label="D.P." color="accent" text-color="white" /> = dimensioni dei pixel
          del sensore utilizzato
        </div>
        <div class="text-subtitle1">
          <q-chip label="F" text-color="white" color="amber-10" /> = focale del telescopio
        </div>
        <div class="text-subtitle1">
          <q-chip label="206265" /> Fattore di conversione tra radianti e secondi d’arco
        </div>
      </q-card-section>
      <!--  -->
      <q-separator vertical />
      <q-card-section class="col-6 q-pa-lg">
        <q-input v-model="campionamento.dp" input-class="text-center text-bold" type="text" label="Dimensioni dei pixel del sensore in μm(micron):" dense />
        <q-input v-model="campionamento.f" input-class="text-center text-bold" type="text" label="Focale del telescopio in mm(millimetri):" dense />
        <q-separator vertical class="q-mt-xl" />

        <div class="text-center">
          <q-chip square color="teal" text-color="white" :label="result" class="text-bold" />
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed, reactive } from "vue";

const campionamento = reactive({
  dp: 1,
  f: 1000,
});

const result = computed(() => {
  return (campionamento.dp / 1000 / campionamento.f) * 206265;
});
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  min-width: 450px;
}
</style>
