import { _ as __nuxt_component_0 } from "./ToolbarPublic-7acb9966.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-691e5b50.js";
import "ufo";
import "vue-router";
import "./accountStore-369f4819.js";
import "universal-cookie";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "h3";
import "destr";
import "defu";
import "klona";
import "@vue/devtools-api";
import "devalue";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ToolbarPublic = __nuxt_component_0;
  _push(ssrRenderComponent(_component_ToolbarPublic, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/Deserti.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Deserti = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Deserti as default
};
//# sourceMappingURL=Deserti-29a64513.js.map
