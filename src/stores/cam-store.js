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
        expand: 'produttore',
        fields: 'name, pixelsize, expand.produttore.name, megapixel, risoluzione, chip, diagonale',
        sort: "produttore",
      });
      LocalStorage.set('camere', records);
    },
  },
});
