<template>
  <q-card class="q-mt-xl">
    <q-card-section>
      <div class="text-h4 text-center">
        Campionamento planetario f( {{ rapportFocale(f, d).toFixed(1) }} )
      </div>
      <q-input v-model="dp" type="text" label="Dimensione pixel in micron (dp)" />
      <q-input v-model="f" type="text" label="Lunghezza focale dello strumento in millimetri (F)" />
      <q-input v-model="d" type="text" label="Diametro dello strumento in millimetri (D)" />
      <q-input v-model="λ" type="text" label="Lunghezza d'onda (λ)" />
    </q-card-section>
    <q-card-section>
      <!-- DATI  -->
      <q-card-section class="row">
        <!-- POTERE RISOLUTIVO -->
        <div class="col-4 text-center">
          <q-tooltip> POTERE RISOLUTIVO = 120 / {{ d }} </q-tooltip>
          Potere risolutivo:
          <span class="text-accent text-bold">{{ potereRisolutivo(d).toFixed(2) }}</span>
        </div>
        <!-- CAMPIONAMENTO NATIVO -->
        <div class="col-4 text-center">
          <q-tooltip> CAMPIONAMENTO NATIVO = ( {{ dp }} / {{ f }} ) x 206,265 </q-tooltip>
          Campionamento Nativo:
          <span class="text-accent text-bold">{{
            campionamentoNativo(dp, f).toFixed(2)
            }}</span>
        </div>
        <!-- CAMPIONAMENTO OTTIMALE -->
        <div class="col-4 text-center">
          <q-tooltip>
            CAMPIONAMENTO OTTIMALE = ( {{ λ }} / {{ d }} ) x 0.206265 x 0.33
          </q-tooltip>
          Campionamento Ottimale:
          <span class="text-accent text-bold">{{
            campionamentoOttimale(λ, d).toFixed(2)
            }}</span>
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>

  <!-- FOCALE RICHIESTA PER TALE STRUMENTO -->
  <q-card class="q-mt-md">
    <q-card-section>
      <q-chip label="Focale Ottimale " color="accent" text-color="white" />
      = (( {{ dp / 1000 }} x {{ d }} x 206265) / 116 ) x 3
      <div class="text-h5 text-center">
        <span class="text-bold text-accent">
          {{ focaleOttimale2(dp, d).toFixed(0) }}</span>
        mm - f( {{ nuovaFocale.toFixed(1) }} )
      </div>
    </q-card-section>
  </q-card>
  <!-- FOCALE RICHIESTA PER TALE STRUMENTO -->
  <q-card class="q-mt-md">
    <q-card-section>
      <q-chip label="Focale Ottimale " color="accent" text-color="white" />
      = ( {{ dp / 1000 }} x {{ d }} ) / ( 0.33 x {{ λ / 1000000 }} )
      <div class="text-h5 text-center">
        <span class="text-bold text-accent">
          {{ focaleOttimale(dp, d, λ).toFixed(0) }}</span>
        mm - f( {{ nuovaFocale.toFixed(1) }} )
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed, ref } from "vue";
import {
  potereRisolutivo,
  campionamentoOttimale,
  campionamentoNativo,
  focaleOttimale,
  rapportFocale,
  focaleOttimale2,
} from "src/composable/useCamp";

const dp = ref(1.45); // DIVISO 1.000
const f = ref(1000);
const d = ref(114);
const λ = ref(550); //= DIVISO 1.000.000

//  CAMPIONAMENTO OTTIMALE
const nuovaFocale = computed(() => {
  let f = focaleOttimale(dp.value, d.value, λ.value);
  return rapportFocale(f, d.value);
  // return (λ.value / d.value) * 0.206265 * 0.33;
});
</script>

<style lang="scss" scoped></style>
