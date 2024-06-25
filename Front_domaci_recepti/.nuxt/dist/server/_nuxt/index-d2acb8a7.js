import { resolveComponent, mergeProps, useSSRContext } from "vue";
import axios from "axios";
import { a as accountStore } from "./accountStore-369f4819.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr } from "vue/server-renderer";
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
const index_vue_vue_type_style_index_0_scoped_e23555b8_lang = "";
const _sfc_main = {
  data() {
    return {
      originalRecept: null,
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
      if (this.originalRecept.nazivRecepta === this.nazivRecepta && this.originalRecept.opis === this.opis && this.originalRecept.vrstaJela === this.vrstaJela && !this.slika) {
        this.$router.go(-1);
        return;
      }
      const formData = new FormData();
      formData.append("recept_id", accountStore.state.receptId);
      formData.append("naziv_recepta", this.nazivRecepta);
      formData.append("opis", this.opis);
      if (this.slika) {
        formData.append("slika", this.slika);
      }
      formData.append("vrstajela", this.vrstaJela);
      const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
      axios.post("http://localhost:8000/api/updaterec", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${authToken}`
        }
      }).then(() => {
        this.$router.go(-1);
      }).catch((error) => {
        console.error("Došlo je do greške prilikom spremanja recepta:", error);
      });
    },
    getReceptData(id_recepta) {
      axios.get(`http://127.0.0.1:8000/api/dohvatirec/${id_recepta}`).then((response) => {
        this.originalRecept = response.data;
        this.nazivRecepta = response.data.naziv_recepta;
        this.opis = response.data.opis;
        this.vrstaJela = response.data.vrstajela;
      }).catch((error) => {
        console.error("Došlo je do greške prilikom dohvaćanja recepta:", error);
      });
    }
  },
  created() {
    let receptId = accountStore.state.receptId;
    if (typeof sessionStorage !== "undefined") {
      receptId = receptId || sessionStorage.getItem("receptId");
    }
    this.getReceptData(receptId);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_combobox = resolveComponent("v-combobox");
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))} data-v-e23555b8><h2 class="title" data-v-e23555b8>Uredi recept</h2><form class="form-container" data-v-e23555b8><div class="form-group" data-v-e23555b8><label for="naziv_recepta" data-v-e23555b8>Naziv recepta:</label><input type="text" id="naziv_recepta"${ssrRenderAttr("value", $data.nazivRecepta)} maxlength="60" required data-v-e23555b8></div><div class="form-group" data-v-e23555b8><label for="opis" data-v-e23555b8>Opis:</label><textarea id="opis" maxlength="1000" required data-v-e23555b8>${ssrInterpolate($data.opis)}</textarea></div><div class="form-group" data-v-e23555b8><label for="slika" data-v-e23555b8>Slika:</label><input type="file" id="slika" accept="image/*" data-v-e23555b8>`);
  if ($data.slikaTooLarge) {
    _push(`<span class="error-message" data-v-e23555b8>Slika je prevelika (max 5 MB)</span>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.slikaInvalidFormat) {
    _push(`<span class="error-message" data-v-e23555b8>Neispravan format slike</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="form-group" data-v-e23555b8>`);
  _push(ssrRenderComponent(_component_v_combobox, {
    label: "Vrsta jela",
    modelValue: $data.vrstaJela,
    "onUpdate:modelValue": ($event) => $data.vrstaJela = $event,
    items: ["Glavno jelo", "Predjelo", "Desert"],
    required: ""
  }, null, _parent));
  _push(`</div><button type="submit"${ssrIncludeBooleanAttr($data.slikaTooLarge || $data.slikaInvalidFormat) ? " disabled" : ""} data-v-e23555b8>Spremi recept</button></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Uredirecept/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e23555b8"]]);
export {
  index as default
};
//# sourceMappingURL=index-d2acb8a7.js.map
