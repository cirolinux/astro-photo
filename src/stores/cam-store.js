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
        fields: 'name, expand.produttore.name',
        sort: "produttore",
      });
      LocalStorage.set('camere', records);
    },
  },
});
