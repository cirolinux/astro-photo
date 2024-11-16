<template>
  <div class="text-h4 text-center">Campionamento Deep Sky</div>

  <!-- INPUT -->
  <q-card>
    <q-card-section>
      <q-input v-model="dp" type="text" label="Dimensione pixel in micron (dp)" />
      <q-input v-model="f" type="text" label="Lunghezza focale dello strumento in millimetri (F)" />
      <q-input v-model="d" type="text" label="Diametro dello strumento in millimetri (D)" />
      <q-input v-model="λ" type="text" label="Lunghezza d'onda (λ)" />
      <!-- FWHM -->
      <div class="row">
        <div class="col-6">
          <q-input v-model="fwhmMin" type="text" label="fwhm min." />
        </div>
        <div class="col-6">
          <q-input v-model="fwhmMax" type="text" label="fwhm max." />
        </div>
      </div>
    </q-card-section>
    <!-- DATI -->
    <q-card-section class="row">
      <!-- POTERE RISOLUTIVO -->
      <div class="col-4 text-center">
        <q-tooltip> ( 120/{{ d }} ) </q-tooltip>
        Potere risolutivo:
        <span class="text-accent text-bold">{{ potereRisolutivo(d).toFixed(2) }}</span>
      </div>
      <!-- CAMPIONAMENTO -->
      <div class="col-4 text-center">
        <q-tooltip> ({{ dp / 1000 }} / {{ f }}) * 206265 </q-tooltip>
        Campionamento Nativo:
        <span class="text-accent text-bold">{{ campionamentoNativo(dp, f).toFixed(2) }}''</span>
      </div>
      <!-- CAMPIONAMENTO OTTIMALE -->
      <div class="col-4 text-center">
        FWHM Minimo:
        <span class="text-accent text-bold">{{
          campionamentoOttimaleMin(fwhmMin).toFixed(2)
          }}</span>
        Media:
        <span class="text-accent text-bold">{{
          campionamentoOttimalleMedio(
            campionamentoOttimaleMin(fwhmMin),
            campionamentoOttimaleMax(fwhmMax)
          ).toFixed(2)
        }}</span>
        FWHM Massimo
        <span class="text-accent text-bold">{{
          campionamentoOttimaleMax(fwhmMax).toFixed(2)
          }}</span>
      </div>
    </q-card-section>
  </q-card>

  <!-- PIXEL SIZE ideale per la fotocamera  -->
  <q-card class="q-mt-md">
    <q-card-section>
      La grandezza del pixe che dovrebbe avere la tua fotocamera in base alla tua
      strumentazione ed il Seeing
    </q-card-section>
    <q-card-section>
      <q-chip label="pixel-size ottimale della camera " color="accent" text-color="white" />
      = (L x C) / 206,265
      <hr />
      <div class="text-h5 text-center row justify-around">
        <span class="text-bold text-red">
          minimo:
          {{ pizelSizeOttimaleMin(f, fwhmMin).toFixed(2) }} µm
        </span>
        <span class="text-bold text-blue">buono:
          {{ pizelSizeOttimaleBuono(f, fwhmMin, fwhmMax).toFixed(2) }}
          µm</span>
        <span class="text-bold text-green">Ottimo:
          {{ pizelSizeOttimale(f, fwhmMin, fwhmMax).toFixed(2) }}
          µm</span>
        <span class="text-bold text-blue">Buono:
          {{ pizelSizeOttimaleBuono_(f, fwhmMin, fwhmMax).toFixed(2) }}
          µm</span>
        <span class="text-bold text-red">
          massimo:
          {{ pizelSizeOttimaleMax(f, fwhmMax).toFixed(2) }} µm
        </span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed, ref } from "vue";
import {
  potereRisolutivo,
  pizelSizeOttimale,
  pizelSizeOttimaleMax,
  pizelSizeOttimaleMin,
  campionamentoOttimaleMin,
  campionamentoOttimalleMedio,
  campionamentoOttimaleMax,
  campionamentoNativo,
  pizelSizeOttimaleBuono,
  pizelSizeOttimaleBuono_,
} from "src/composable/useCamp";
const dp = ref(1.45); // DIVISO 1.000
const f = ref(1000);
const d = ref(114);
const λ = ref(550); //= DIVISO 1.000.000
const fwhmMin = ref(2);
const fwhmMax = ref(4);
</script>

<style lang="scss" scoped></style>
