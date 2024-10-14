<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h5">campionamento di un’immagine</div>
      <div class="text-subtitle2">C = (Dp /F) x 206265</div>
      <div class="text-subtitle1">C = campionamento (in secondi d’arco su pixel)</div>
      <div class="text-subtitle1">Dp = dimensioni dei pixel del sensore utilizzato</div>
      <div class="text-subtitle1">F = focale del telescopio</div>
      <div class="text-subtitle1">206265 è il fattore di conversione tra radianti e secondi d’arco</div>
    </q-card-section>
    <q-card-section>
      campionamento di un’immagine
    </q-card-section>
  </q-card>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.my-card{
  width: 100%;
  max-width: 450px;
}
</style>
