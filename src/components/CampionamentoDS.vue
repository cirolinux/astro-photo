<template>
  <div class="text-h4 text-center">Campionamento Deep Sky</div>

  <q-input v-model="dp" type="text" label="Dimensione pixel in micron (dp)" />

  <q-input
    v-model="f"
    type="text"
    label="Lunghezza focale dello strumento in millimetri (F)"
  />
  <q-input v-model="d" type="text" label="Diametro dello strumento in millimetri (D)" />
  <q-input v-model="λ" type="text" label="Lunghezza d'onda (λ)" />
  <div class="row">
    <div class="col-6">
      <q-input v-model="fwhmMin" type="text" label="fwhm min." />
    </div>
    <div class="col-6">
      <q-input v-model="fwhmMax" type="text" label="fwhm max." />
    </div>
  </div>
  <!-- PIXEL SIZE ideale per la fotocamera  -->
  <q-card class="my-card q-mt-md">
    <q-card-section>
      La grandezza del pixe che dovrebbe avere la tua fotocamera in base alla tua
      strumentazione ed il Seeing
    </q-card-section>
    <q-card-section>
      <q-chip
        label="pixel-size ottimale della camera "
        color="accent"
        text-color="white"
      />
      = (L x C) / 206265
      <hr />
      <div class="text-h5 text-center row justify-around">
        <span class="text-bold text-red"> minimo: {{ pixelsizeMin.toFixed(2) }} µm </span>
        <span class="text-bold text-green">medio: {{ pixelsizeM.toFixed(2) }} µm</span>
        <span class="text-bold text-red">
          massimo: {{ pixelsizeMax.toFixed(2) }} µm
        </span>
      </div>
    </q-card-section>
  </q-card>

  <!-- POTERE RISOLUTIVO -->
  <q-card class="my-card q-mt-md" v-if="false">
    <q-card-section> Il dettaglio più piccolo che è possibile risolvere. </q-card-section>
    <q-card-section>
      <div class="text-h6">
        <q-chip label="Potere Risolutivo (in arcsec)" color="accent" text-color="white" />
        = (120 / D)
      </div>
      <div class="text-h5 text-center">{{ pr.toFixed(2) }} arc/secs</div>
    </q-card-section>
  </q-card>

  <!-- CAMPIONAMENTO OTTIMALE -->
  <q-card class="my-card q-mt-md" v-if="false">
    <q-card-section
      >Affinchè un dettaglio possa essere risolto correttamente, questo deve ricadere in
      almeno 3 o 4 pixel.
    </q-card-section>
    <q-card-section>
      <div class="text-h6">
        <q-chip
          label="Campionamento OTTIMALE (in arcsec/pix)"
          color="accent"
          text-color="white"
        />
        = ({{ cott.toFixed(2) }} )
      </div>
      <div class="text-h5 text-center">
        ogni pixel inquadra una porzione di cielo con lato di
        <span class="text-bold text-red">{{ cott.toFixed(2) }}''</span> secondi d'arco
      </div>
    </q-card-section>
  </q-card>

  <!-- CAMPIONAMENTO -->
  <q-card class="my-card q-mt-md" v-if="false">
    <q-card-section>
      <span
        >La porzione di cielo che un singolo pixel è in grado di rappresentare e quindi il
        dettaglio più piccolo che siamo in grado di risolvere.</span
      >
    </q-card-section>
    <q-card-section>
      <div class="text-h6">
        <q-chip label="Campionamento (in arcsec/pix)" color="accent" text-color="white" />
        = (Dp / F) * 206265
      </div>
      <div class="text-h5 text-center">
        ogni pixel inquadra una porzione di cielo con lato di
        <span class="text-bold text-red">{{ campionamento.toFixed(2) }}''</span> secondi
        d'arco
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
      <q-chip
        label="focale di campionamento ottimale "
        color="accent"
        text-color="white"
      />
      = ( Dp x D ) / ( 0.33 x λ )
      <div class="text-h5 text-center">
        <span class="text-bold text-accent"> {{ focale.toFixed(0) }}</span> mm
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed, ref } from "vue";

const dp = ref(1.45); // DIVISO 1.000
const f = ref(1000);
const d = ref(114);
const λ = ref(550); //= DIVISO 1.000.000
const fwhmMin = ref(2);
const fwhmMax = ref(4);

//  CAMPIONAMENTO
const campionamento = computed(() => {
  return (dp.value / 1000 / f.value) * 206265;
});

//  POTERE RISOLUTIVO
const pr = computed(() => {
  return 120 / d.value;
});
//  CAMPIONAMENTO OTTIMALE
const cott = computed(() => {
  return (λ.value / d.value) * 0.206265 * 0.33;

  return pr.value / 3;
});

//  FOCALE OTTIMALE
const focale = computed(() => {
  // return (d.value * (dp.value / 1000) * 206265) / 37;
  return (d.value * (dp.value / 1000)) / (0.34 * (λ.value / 1000000));
});

//  Pixel Size ottimale per la tua strumentazione
const pixelsizeMin = computed(() => {
  return ((f.value * fwhmMin.value * 0.33) / 206265) * 1000;
});
const pixelsizeMax = computed(() => {
  return ((f.value * fwhmMax.value * 0.5) / 206265) * 1000;
});
const pixelsizeM = computed(() => {
  return (pixelsizeMin.value + pixelsizeMax.value) / 2;
});
</script>

<style lang="scss" scoped></style>
