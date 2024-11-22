import { defineStore } from "pinia";
import { LocalStorage } from "quasar";
import { pb } from "src/lib/pocketBase";

export const useScopeStore = defineStore("teleScope", {
  state: () => ({
    teleScope: LocalStorage.getItem("telescopi") || [],
  }),
  getters: {},
  actions: {
    //
    async teleScope() {
      const records = await pb.collection('telescopio').getFullList({
        expand: "produttore",
        fields: "expand.produttore.name, name, fabbricazione, tipo, diametro, focale, peso, luce",
        sort: "-produttore"
      });

      LocalStorage.set("telescopi", records);
    },
  },
});
