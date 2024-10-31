<template>
  <div class="text-h2 text-center">Astro Photo</div>

  <q-card>
    <q-card-section>
      <div class="text-h4 q-mb-md">Deep Sky</div>
      <div class="text-h6">
        Data la tua strumentazione, ti dice quale
        <span class="text-bold text-red">pixel size</span> dovrebbe avere la tua camera. I
        valori minimo e massimo sono da considerarsi al limite del sotto e sopra
        campionamento, Il valore centrale è il valore Medio
      </div>
    </q-card-section>
    <q-card-section>
      <div class="text-h6">
        Il secondo parametro,
        <span class="text-bold text-purple">focale di campionamento ottimale</span>
        risponde alla domanda: ho già una camera, a quale focale dovrei arrivare?
      </div>
    </q-card-section>
  </q-card>

  <q-card class="q-my-md">
    <q-card-section>
      <div class="text-h4 q-mb-md">Planetary</div>
      <div class="text-h6">
        Data la tua strumentazione, ti dice quale
        <span class="text-bold text-red">focale</span> devi raggiungere per la massima
        risoluzione
      </div>
    </q-card-section>
    <q-card-section>
      <div class="text-h6">
        Viene indicata anche la dimensione del pixel che la tua camera può adottare SENZA
        utilizzare lente di Barlow
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup></script>

<style lang="scss" scoped></style>
