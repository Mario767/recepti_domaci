import axios from "axios";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const index_vue_vue_type_style_index_0_scoped_b939f766_lang = "";
const _sfc_main = {
  data() {
    return {
      nazivRecepta: "",
      opis: "",
      slika: null,
      vrstaJela: null,
      slikaTooLarge: false,
      slikaInvalidFormat: false
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      const maxSize = 5 * 1024 * 1024;
      const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
      if (!file)
        return;
      if (file.size > maxSize) {
        this.slikaTooLarge = true;
        this.slikaInvalidFormat = false;
        return;
      }
      if (!allowedTypes.includes(file.type)) {
        this.slikaInvalidFormat = true;
        this.slikaTooLarge = false;
        return;
      }
      this.slikaTooLarge = false;
      this.slikaInvalidFormat = false;
      this.slika = file;
    },
    submitForm() {
      const formData = new FormData();
      formData.append("naziv_recepta", this.nazivRecepta);
      formData.append("opis", this.opis);
      formData.append("slika", this.slika);
      formData.append("vrstajela", this.vrstaJela);
      const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
      axios.post("http://localhost:8000/api/recepti", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${authToken}`
        }
      }).then(() => {
        this.$router.push("/mojirecepti");
      }).catch((error) => {
        console.error("Došlo je do greške prilikom spremanja recepta:", error);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_combobox = resolveComponent("v-combobox");
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))} data-v-b939f766><h2 data-v-b939f766>Dodaj novi recept</h2><form data-v-b939f766><div class="form-group" data-v-b939f766><label for="naziv_recepta" data-v-b939f766>Naziv recepta:</label><input type="text" id="naziv_recepta"${ssrRenderAttr("value", $data.nazivRecepta)} maxlength="60" required data-v-b939f766></div><div class="form-group" data-v-b939f766><label for="opis" data-v-b939f766>Opis:</label><textarea id="opis" maxlength="1000" required data-v-b939f766>${ssrInterpolate($data.opis)}</textarea></div><div class="form-group" data-v-b939f766><label for="slika" data-v-b939f766>Slika:</label><input type="file" id="slika" accept="image/*" required data-v-b939f766>`);
  if ($data.slikaTooLarge) {
    _push(`<span style="${ssrRenderStyle({ "color": "red" })}" data-v-b939f766>Slika je prevelika (max 5 MB)</span>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.slikaInvalidFormat) {
    _push(`<span style="${ssrRenderStyle({ "color": "red" })}" data-v-b939f766>Neispravan format slike</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="form-group" data-v-b939f766>`);
  _push(ssrRenderComponent(_component_v_combobox, {
    label: "Vrsta jela",
    modelValue: $data.vrstaJela,
    "onUpdate:modelValue": ($event) => $data.vrstaJela = $event,
    items: ["Glavno jelo", "Predjelo", "Desert"],
    required: ""
  }, null, _parent));
  _push(`</div><button type="submit"${ssrIncludeBooleanAttr($data.slikaTooLarge || $data.slikaInvalidFormat) ? " disabled" : ""} data-v-b939f766>Spremi recept</button></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dodajrecept/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b939f766"]]);
export {
  index as default
};
//# sourceMappingURL=index-1ad517ff.js.map
