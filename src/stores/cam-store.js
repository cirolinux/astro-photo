import { defineStore } from "pinia";
import { LocalStorage } from "quasar";
import { pb } from "src/lib/pocketBase";

export const useCamStore = defineStore("fotoCamere", {
  state: () => ({
    fotoCamere: LocalStorage.getItem("camere") || [],
  }),
  getters: {},
  actions: {
    //
    async photoCam() {
      const records = await pb.collection("camera").getFullList({
        expand: "produttore",
        fields:
          "name, chip, pixelsize, expand.produttore.name, megapixel, formato, risoluzione, chip, diagonale, full_well, qe, noise, fps, adc,",
        sort: "produttore",
      });
      LocalStorage.set("camere", records);
    },
  },
});
