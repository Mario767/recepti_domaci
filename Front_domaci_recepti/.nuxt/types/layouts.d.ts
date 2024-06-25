import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "admin" | "adminlayout" | "deserti" | "dodajrecept" | "glavnajela" | "login" | "mojirecepti" | "odjavi" | "profil" | "recept" | "register" | "search" | "uredirecept" | "default" | "predjela"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}