import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { a as accountStore } from "./accountStore-369f4819.js";
import axios from "axios";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
const index_vue_vue_type_style_index_0_scoped_33c1310a_lang = "";
const _sfc_main = {
  data() {
    return {
      korisnicko_ime: "",
      email: "",
      isLoggedIn: false
    };
  },
  async created() {
    this.isLoggedIn = accountStore.getters.isLoggedIn();
    if (this.isLoggedIn) {
      this.korisnicko_ime = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*=\s*([^;]*).*$)|^.*$/, "$1");
      this.email = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*=\s*([^;]*).*$)|^.*$/, "$1");
    }
  },
  methods: {
    async odjavi() {
      const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
      if (accountStore.getters.isLoggedIn()) {
        axios.post("http://localhost:8000/api/odjavi", {}, {
          headers: {
            "Authorization": `Bearer ${authToken}`
          }
        }).then(() => {
          document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
          document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
          document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
          window.location.href = "/login";
        }).catch((error) => {
          console.error(error);
        });
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_spacer = resolveComponent("v-spacer");
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))} data-v-33c1310a>`);
  if ($data.isLoggedIn) {
    _push(`<div class="container" data-v-33c1310a><h1 class="title" data-v-33c1310a>Domaći recepti</h1><p data-v-33c1310a>Ime: ${ssrInterpolate($data.korisnicko_ime)}</p><p data-v-33c1310a>Email: ${ssrInterpolate($data.email)}</p><div class="button-row" data-v-33c1310a>`);
    _push(ssrRenderComponent(_component_v_spacer, null, null, _parent));
    _push(ssrRenderComponent(_component_router_link, {
      style: { "margin-right": "10px" },
      to: "/dodajrecept"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<button class="button" data-v-33c1310a${_scopeId}>Dodaj recept</button>`);
        } else {
          return [
            createVNode("button", { class: "button" }, "Dodaj recept")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_v_spacer, null, null, _parent));
    _push(ssrRenderComponent(_component_router_link, {
      style: { "margin-right": "10px" },
      to: "/mojirecepti"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<button class="button" data-v-33c1310a${_scopeId}>Prikaži recepte</button>`);
        } else {
          return [
            createVNode("button", { class: "button" }, "Prikaži recepte")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_v_spacer, null, null, _parent));
    _push(`</div><div class="logout-row" data-v-33c1310a><button class="logout-button" data-v-33c1310a>Odjavi se</button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Profil/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-33c1310a"]]);
export {
  index as default
};
//# sourceMappingURL=index-5d3c09c1.js.map
