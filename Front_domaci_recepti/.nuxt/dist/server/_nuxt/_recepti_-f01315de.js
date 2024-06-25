import { _ as __nuxt_component_0 } from "./ShowCard-7efc8efb.js";
import { useSSRContext } from "vue";
import axios from "axios";
import { a as accountStore } from "./accountStore-369f4819.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main = {
  data() {
    return {
      recept: null
    };
  },
  created() {
    this.fetchRecept();
  },
  methods: {
    fetchRecept() {
      let receptId = accountStore.state.receptId;
      if (typeof sessionStorage !== "undefined") {
        receptId = receptId || sessionStorage.getItem("receptId");
      }
      axios.get(`http://127.0.0.1:8000/api/recept/${receptId}`).then((response) => {
        this.recept = response.data;
      }).catch((error) => {
        console.error(error);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ShowCard = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($data.recept) {
    _push(ssrRenderComponent(_component_ShowCard, { recept: $data.recept }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Recepti/[recepti].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _recepti_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _recepti_ as default
};
//# sourceMappingURL=_recepti_-f01315de.js.map
