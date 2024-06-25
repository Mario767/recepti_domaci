import { a as accountStore } from "./accountStore-369f4819.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const CardRecepti_vue_vue_type_style_index_0_scoped_f33e4e64_lang = "";
const _sfc_main = {
  props: {
    recepti: {
      type: Array,
      required: true
    }
  },
  methods: {
    getImageUrl(slika) {
      return "http://127.0.0.1:8000/" + slika;
    },
    goToRecept(recept) {
      let formattedNaziv = recept.naziv_recepta.replace(/\s+/g, "_");
      this.$router.push({ path: `/News/${formattedNaziv}` });
      accountStore.actions.setReceptId(recept.recept_id);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-recepti" }, _attrs))} data-v-f33e4e64><!--[-->`);
  ssrRenderList($props.recepti, (recept) => {
    _push(`<div class="card card-hover" data-v-f33e4e64><img${ssrRenderAttr("src", $options.getImageUrl(recept.slika))} alt="Recept slika" data-v-f33e4e64><div class="card-body" data-v-f33e4e64><h5 class="card-title" data-v-f33e4e64>${ssrInterpolate(recept.naziv_recepta)}</h5><p class="card-text" data-v-f33e4e64>Autor: ${ssrInterpolate(recept.korisnicko_ime)}</p></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardRecepti.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f33e4e64"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=CardRecepti-f61b2deb.js.map
