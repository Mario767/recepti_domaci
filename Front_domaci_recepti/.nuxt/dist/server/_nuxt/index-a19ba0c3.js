import { nextTick, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { a as accountStore } from "./accountStore-369f4819.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
const index_vue_vue_type_style_index_0_scoped_fbb93576_lang = "";
const _sfc_main = {
  data() {
    return {
      korisnicko_ime: "",
      lozinka: "",
      isLoggedIn: false,
      isCheckingLogin: true,
      errors: {
        korisnicko_ime: "",
        lozinka: "",
        general: ""
      }
    };
  },
  async created() {
    try {
      this.isLoggedIn = await accountStore.getters.isLoggedIn();
      if (this.isLoggedIn) {
        await nextTick();
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error during login check:", error);
    } finally {
      this.isCheckingLogin = false;
    }
  },
  methods: {
    async prijavi() {
      if (this.isCheckingLogin)
        return;
      this.errors = { korisnicko_ime: "", lozinka: "", general: "" };
      if (!this.korisnicko_ime) {
        this.errors.korisnicko_ime = "Korisničko ime je obavezno";
      }
      if (!this.lozinka) {
        this.errors.lozinka = "Lozinka je obavezna";
      }
      if (this.errors.korisnicko_ime || this.errors.lozinka) {
        return;
      }
      try {
        await fetch("http://localhost:8000/sanctum/csrf-cookie");
        const response = await fetch("http://localhost:8000/api/prijavi", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            korisnicko_ime: this.korisnicko_ime,
            lozinka: this.lozinka
          })
        });
        const data = await response.json();
        if (response.ok) {
          document.cookie = `authToken=${data.access_token}; path=/`;
          document.cookie = `username=${this.korisnicko_ime}; path=/`;
          document.cookie = `email=${data.korisnik.email}; path=/`;
          this.isLoggedIn = true;
          await nextTick();
          if (data.korisnik.uloga_id == 2 || data.korisnik.uloga_id) {
            window.location.href = "/admin";
          } else {
            window.location.href = "/";
          }
        } else {
          this.errors = data.errors || {};
        }
      } catch (error) {
        this.errors.general = "Došlo je do greške prilikom prijave: " + error.message;
        console.error("Detalji greške: ", error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))} data-v-fbb93576>`);
  if ($data.isCheckingLogin) {
    _push(`<div data-v-fbb93576><h1 data-v-fbb93576>Provjera prijave...</h1></div>`);
  } else {
    _push(`<div data-v-fbb93576>`);
    if ($data.isLoggedIn) {
      _push(`<div data-v-fbb93576><h1 data-v-fbb93576>Prijavljeni ste</h1></div>`);
    } else {
      _push(`<div class="login-container" data-v-fbb93576><h1 class="title" data-v-fbb93576>Domaći recepti</h1><input class="input-field" type="text" placeholder="Unesi ime"${ssrRenderAttr("value", $data.korisnicko_ime)}${ssrIncludeBooleanAttr($data.isCheckingLogin) ? " disabled" : ""} required data-v-fbb93576>`);
      if ($data.errors.korisnicko_ime) {
        _push(`<p class="error-message" data-v-fbb93576>${ssrInterpolate($data.errors.korisnicko_ime)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input class="input-field" type="password" placeholder="Unesi lozinku"${ssrRenderAttr("value", $data.lozinka)}${ssrIncludeBooleanAttr($data.isCheckingLogin) ? " disabled" : ""} required data-v-fbb93576>`);
      if ($data.errors.lozinka) {
        _push(`<p class="error-message" data-v-fbb93576>${ssrInterpolate($data.errors.lozinka)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="login-button"${ssrIncludeBooleanAttr($data.isCheckingLogin) ? " disabled" : ""} data-v-fbb93576>Prijavi se</button>`);
      if ($data.errors.general) {
        _push(`<p class="error-message" data-v-fbb93576>${ssrInterpolate($data.errors.general)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="register-container" data-v-fbb93576><p data-v-fbb93576>Nemaš račun? `);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/register",
        class: "register-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Registriraj se`);
          } else {
            return [
              createTextVNode("Registriraj se")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div>`);
    }
    _push(`</div>`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fbb93576"]]);
export {
  index as default
};
//# sourceMappingURL=index-a19ba0c3.js.map
