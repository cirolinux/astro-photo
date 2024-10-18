<template>
  <div class="text-h4 text-center">Campionamento Deep Sky</div>
  <q-input v-model="fwhm" type="text" label="FWHM" />
  <q-input v-model="dp" type="text" label="dimensione pixel" />
  <q-input v-model="f" type="text" label="focale" />
  <q-input v-model="d" type="text" label="Diametro" />

  <!-- CAMPIONAMENTO fwhm -->
  <q-card class="q-mt-md">
    <q-card-section>
      <span>La porzione di cielo che un singolo pixel è in grado di rappresentare e quindi il
        dettaglio più piccolo che siamo in grado di risolvere.</span>
    </q-card-section>
    <q-card-section>
      <div class="text-h6">
        <q-chip label="Campionamento FWHM (in arcsec/pix)" color="accent" text-color="white" />
        = FWHM
      </div>
      <div class="text-h5 text-center">
        ogni pixel inquadra una porzione di cielo con lato di
        <span class="text-bold text-red">{{ fwhm }}''</span> secondi d'arco
      </div>
    </q-card-section>
  </q-card>
  <!-- CAMPIONAMENTO OTTIMALE -->
  <q-card class="my-card q-mt-md">
    <q-card-section>Affinchè un dettaglio possa essere risolto correttamente, questo deve ricadere in
      almeno 3 o 4 pixel.
    </q-card-section>
    <q-card-section>
      <div class="text-h6">
        <q-chip label="Campionamento OTTIMALE  (in arcsec/pix)" color="accent" text-color="white" />
        = ({{ fwhm }} / 3)
      </div>
      <div class="text-h5 text-center">
        ogni pixel inquadra una porzione di cielo con lato di
        <span class="text-bold text-red">{{ cott }}''</span> secondi d'arco
      </div>
    </q-card-section>
  </q-card>
  <!-- FOCALE RICHIESTA PER TALE STRUMENTO -->
  <q-card class="my-card q-mt-md">
    <q-card-section>
      La focale ottimale rappresenta la lunghezza focale che è nessarario raggiungere
      affinchè si possa raggiungere un valore di campionamento ottimale. Questa formula è
      una stima ottimistica che non tiene conto della qualità dell'ottica o delle
      condizioni di seeing.
    </q-card-section>
    <q-card-section>
      <q-chip label="focale di campionamento ottimale " color="accent" text-color="white" />
      = (Dp/ campionamento ottimale) x 206265
      <div class="text-h5 text-center">
        <span class="text-bold text-accent"> {{ focale }}</span> mm
      </div>
    </q-card-section>
  </q-card>

  <!-- PIXEL SIZE ideale per la fotocamera  -->
  <q-card class="my-card q-mt-md">
    <q-card-section>
      La grandezza del pixe che dovrebbe avere la tua fotocamera in base alla tua
      strumentazione
    </q-card-section>
    <q-card-section>
      <q-chip label="pixel-size ottimale della camera " color="accent" text-color="white" />
      =
      <div class="text-h5 text-center">
        <span class="text-bold text-accent"> {{ pixelsize }}</span> mm
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed, ref } from "vue";

let fwhm = ref(2);
let dp = ref(1.45);
let f = ref(1000);
let d = ref(114);

const cott = computed(() => {
  return (fwhm.value / 3).toFixed(2);
});
const focale = computed(() => {
  return ((dp.value / cott.value / 1000) * 206265).toFixed(0);
});

const pixelsize = computed(() => {
  return 1000 * ((f.value * cott.value) / 206265).toFixed(2);
});
</script>

<style lang="scss" scoped></style>
