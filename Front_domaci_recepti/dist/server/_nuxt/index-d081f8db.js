import { _ as __nuxt_component_0 } from "./CardRecepti-f61b2deb.js";
import axios from "axios";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
const index_vue_vue_type_style_index_0_scoped_791d373a_lang = "";
const _sfc_main = {
  components: {
    CardRecepti: __nuxt_component_0
  },
  data() {
    return {
      recepti: null,
      error: null
    };
  },
  mounted() {
    this.fetchData(1);
  },
  methods: {
    fetchData(page) {
      axios.get(`http://127.0.0.1:8000/api/dohvatipredjelo?page=${page}`).then((response) => {
        this.recepti = response.data.recepti;
      }).catch((error) => {
        this.error = "Došlo je do greške prilikom dohvata recepata: " + error.message;
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CardRecepti = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))} data-v-791d373a>`);
  _push(ssrRenderComponent(_component_CardRecepti, {
    recepti: $data.recepti ? $data.recepti.data : []
  }, null, _parent));
  _push(`<div class="pagination" data-v-791d373a>`);
  if ($data.recepti && $data.recepti.current_page > 1) {
    _push(`<button class="pagination-button" data-v-791d373a>Previous</button>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.recepti && $data.recepti.last_page > $data.recepti.current_page) {
    _push(`<button class="pagination-button" data-v-791d373a>Next</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($data.error) {
    _push(`<p data-v-791d373a>${ssrInterpolate($data.error)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Predjela/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-791d373a"]]);
export {
  index as default
};
//# sourceMappingURL=index-d081f8db.js.map
