import { _ as __nuxt_component_0 } from "./CardRecepti-f61b2deb.js";
import axios from "axios";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./accountStore-369f4819.js";
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
const index_vue_vue_type_style_index_0_scoped_80949edf_lang = "";
const _sfc_main = {
  components: {
    CardRecepti: __nuxt_component_0
  },
  data() {
    return {
      recepti: null,
      error: null,
      naziv_recepta: ""
      // Inicijalizirajte ovo kao prazan string
    };
  },
  methods: {
    fetchData(page = 1) {
      axios.get(`http://127.0.0.1:8000/api/search/${this.naziv_recepta}?page=${page}`).then((response) => {
        this.recepti = response.data;
        console.log(this.recepti);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CardRecepti = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))} data-v-80949edf><div class="search-form" data-v-80949edf><form data-v-80949edf><input${ssrRenderAttr("value", $data.naziv_recepta)} type="text" placeholder="Unesite naziv recepta" data-v-80949edf><button type="submit" data-v-80949edf>Pretraži</button></form></div>`);
  _push(ssrRenderComponent(_component_CardRecepti, {
    recepti: $data.recepti && $data.recepti.recepti ? $data.recepti.recepti.data : []
  }, null, _parent));
  if ($data.recepti && $data.recepti.recepti && $data.recepti.recepti.data.length === 0) {
    _push(`<p data-v-80949edf>Nema rezultata za pretragu &quot;${ssrInterpolate($data.naziv_recepta)}&quot;</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="pagination" data-v-80949edf>`);
  if ($data.recepti && $data.recepti.recepti && $data.recepti.recepti.current_page > 1) {
    _push(`<button class="pagination-button" data-v-80949edf>Previous</button>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.recepti && $data.recepti.recepti && $data.recepti.recepti.last_page > $data.recepti.recepti.current_page) {
    _push(`<button class="pagination-button" data-v-80949edf>Next</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($data.error) {
    _push(`<p data-v-80949edf>${ssrInterpolate($data.error)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Search/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-80949edf"]]);
export {
  index as default
};
//# sourceMappingURL=index-89166003.js.map
