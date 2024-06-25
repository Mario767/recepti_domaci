import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "@vue/devtools-api";
import "devalue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const korisnicko_ime = ref("");
    const lozinka = ref("");
    const email = ref("");
    const potvrda_lozinke = ref("");
    const confirmationCode = ref("");
    const showConfirmationCodeInput = ref(false);
    const greska = ref("");
    const registrationSuccess = ref(false);
    const obavijest = ref("");
    const showSnackbar = ref(false);
    const preostaloVrijeme = ref("");
    const errors = ref({
      korisnicko_ime: "",
      email: "",
      lozinka: "",
      potvrda_lozinke: "",
      confirmationCode: ""
      // Dodali smo novo polje za grešku kod koda za potvrdu
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))} data-v-d3a2679e><div class="login-container" data-v-d3a2679e><h1 class="title" data-v-d3a2679e>Domaći recepti</h1>`);
      if (!showConfirmationCodeInput.value && !registrationSuccess.value) {
        _push(`<div data-v-d3a2679e><input class="input-field" type="text" placeholder="Unesi korisničko ime"${ssrRenderAttr("value", korisnicko_ime.value)} data-v-d3a2679e>`);
        if (errors.value.korisnicko_ime) {
          _push(`<p class="error-message" data-v-d3a2679e>${ssrInterpolate(errors.value.korisnicko_ime)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<input class="input-field" type="email" placeholder="Unesi email"${ssrRenderAttr("value", email.value)} data-v-d3a2679e>`);
        if (errors.value.email) {
          _push(`<p class="error-message" data-v-d3a2679e>${ssrInterpolate(errors.value.email)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<input class="input-field" type="password" placeholder="Unesi lozinku"${ssrRenderAttr("value", lozinka.value)} data-v-d3a2679e>`);
        if (errors.value.lozinka) {
          _push(`<p class="error-message" data-v-d3a2679e>${ssrInterpolate(errors.value.lozinka)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<input class="input-field" type="password" placeholder="Potvrdi lozinku"${ssrRenderAttr("value", potvrda_lozinke.value)} data-v-d3a2679e>`);
        if (errors.value.potvrda_lozinke) {
          _push(`<p class="error-message" data-v-d3a2679e>${ssrInterpolate(errors.value.potvrda_lozinke)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button class="register-button" data-v-d3a2679e>Registriraj se</button></div>`);
      } else if (showConfirmationCodeInput.value && !registrationSuccess.value) {
        _push(`<div data-v-d3a2679e><input class="input-field" type="text" placeholder="Unesi kod za potvrdu"${ssrRenderAttr("value", confirmationCode.value)} data-v-d3a2679e>`);
        if (errors.value.confirmationCode) {
          _push(`<p class="error-message" data-v-d3a2679e>${ssrInterpolate(errors.value.confirmationCode)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button class="register-button" data-v-d3a2679e>Potvrdi kod</button><button class="register-button" data-v-d3a2679e>Ponovno pošalji kod</button>`);
        if (preostaloVrijeme.value > 0) {
          _push(`<p data-v-d3a2679e>Kod ističe za: ${ssrInterpolate(preostaloVrijeme.value)} sekundi</p>`);
        } else {
          _push(`<p data-v-d3a2679e>Kod je istekao. Ponovno pošaljite kod za prijavu.</p>`);
        }
        _push(`</div>`);
      } else if (registrationSuccess.value) {
        _push(`<div data-v-d3a2679e><h2 data-v-d3a2679e>Uspješna registracija!</h2><p data-v-d3a2679e>Bit ćete preusmjereni na stranicu za prijavu...</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (greska.value) {
        _push(`<p class="error-message" data-v-d3a2679e>${ssrInterpolate(greska.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (obavijest.value) {
        _push(`<div class="${ssrRenderClass({ snackbar: true, show: showSnackbar.value })}" data-v-d3a2679e>${ssrInterpolate(obavijest.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_d3a2679e_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Register/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d3a2679e"]]);
export {
  index as default
};
//# sourceMappingURL=index-2cfe3b1c.js.map
