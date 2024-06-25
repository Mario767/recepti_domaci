import { a as accountStore } from "./accountStore-369f4819.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import axios from "axios";
import "universal-cookie";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "@vue/devtools-api";
import "devalue";
const HomeRecepti_vue_vue_type_style_index_0_scoped_d36e7898_lang = "";
const _sfc_main$1 = {
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-recepti" }, _attrs))} data-v-d36e7898><!--[-->`);
  ssrRenderList($props.recepti, (recept) => {
    _push(`<div class="card card-hover" data-v-d36e7898><img${ssrRenderAttr("src", $options.getImageUrl(recept.slika))} alt="Recept slika" data-v-d36e7898><div class="card-body" data-v-d36e7898><h5 class="card-title" data-v-d36e7898>${ssrInterpolate(recept.naziv_recepta)}</h5><p class="card-text" data-v-d36e7898>Autor: ${ssrInterpolate(recept.korisnicko_ime)}</p><div class="prosjecna-ocjena" data-v-d36e7898>`);
    if (recept.prosjecna_ocjena !== null && recept.prosjecna_ocjena !== void 0) {
      _push(`<span class="ocjena-title" data-v-d36e7898>Ocjena:</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<!--[-->`);
    ssrRenderList(5, (i) => {
      _push(`<!--[-->`);
      if (i <= Math.floor(recept.prosjecna_ocjena)) {
        _push(`<span class="star-filled" data-v-d36e7898>★</span>`);
      } else {
        _push(`<span class="star" data-v-d36e7898>★</span>`);
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]-->`);
    if (recept.prosjecna_ocjena !== null && recept.prosjecna_ocjena !== void 0) {
      _push(`<span class="ocjena" data-v-d36e7898>${ssrInterpolate(recept.prosjecna_ocjena)}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeRecepti.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-d36e7898"]]);
const index_vue_vue_type_style_index_0_scoped_14ab791d_lang = "";
axios.defaults.baseURL = "http://127.0.0.1:8000/";
const _sfc_main = {
  components: {
    HomeRecepti: __nuxt_component_0
  },
  data() {
    return {
      topJela: {},
      // Inicijalizacija objekta topJela
      error: null
    };
  },
  mounted() {
    axios.get("api/topjela").then((response) => {
      this.topJela = response.data.top_jela;
    }).catch((error) => {
      this.error = "Došlo je do greške prilikom dohvata top jela: " + error.message;
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HomeRecepti = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))} data-v-14ab791d><!--[-->`);
  ssrRenderList($data.topJela, (jelo, index2) => {
    _push(`<div data-v-14ab791d><h2 class="naslovi" data-v-14ab791d>${ssrInterpolate(index2)}</h2>`);
    _push(ssrRenderComponent(_component_HomeRecepti, { recepti: jelo }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]-->`);
  if ($data.error) {
    _push(`<p data-v-14ab791d>${ssrInterpolate($data.error)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-14ab791d"]]);
export {
  index as default
};
//# sourceMappingURL=index-c55daf89.js.map
