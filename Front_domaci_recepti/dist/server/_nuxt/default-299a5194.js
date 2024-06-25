import { _ as __nuxt_component_0 } from "./ToolbarPublic-7acb9966.js";
import { defineComponent, resolveComponent, mergeProps, useSSRContext } from "vue";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FooterPublic",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_footer = resolveComponent("v-footer");
      _push(ssrRenderComponent(_component_v_footer, mergeProps({
        class: "footer",
        color: "#C87C36"
      }, _attrs), null, _parent));
    };
  }
});
const FooterPublic_vue_vue_type_style_index_0_scoped_82e85504_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterPublic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-82e85504"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ToolbarPublic = __nuxt_component_0;
  const _component_FooterPublic = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_ToolbarPublic, null, null, _parent));
  _push(ssrRenderComponent(_component_FooterPublic, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-299a5194.js.map
