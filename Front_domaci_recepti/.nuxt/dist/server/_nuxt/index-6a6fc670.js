import { a as accountStore } from "./accountStore-369f4819.js";
import axios from "axios";
import Cookies from "universal-cookie";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
const Mojirec_vue_vue_type_style_index_0_scoped_f350723b_lang = "";
const cookies = new Cookies();
const _sfc_main$1 = {
  props: {
    recepti: {
      type: Array,
      required: true
    }
  },
  methods: {
    getImageUrl(slika) {
      return "http://127.0.0.1:8000/" + slika;
    },
    goToRecept(recept) {
      let formattedNaziv = recept.naziv_recepta.replace(/\s+/g, "_");
      this.$router.push({ path: `/News/${formattedNaziv}` });
      accountStore.actions.setReceptId(recept.recept_id);
    },
    deleteRecept(receptId) {
      const authToken = cookies.get("authToken");
      axios.post("http://127.0.0.1:8000/api/obrisirec", {
        recept_id: receptId
      }, {
        headers: {
          "Authorization": `Bearer ${authToken}`
        }
      }).then((response) => {
        console.log("Recept je uspješno izbrisan:", response);
        this.$emit("recept-izbrisan");
      }).catch((error) => {
        console.error("Došlo je do pogreške prilikom brisanja recepta:", error);
      });
    },
    editRecept(receptId) {
      accountStore.actions.setReceptId(receptId);
      this.$router.push({ path: `/uredirecept` });
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-recepti" }, _attrs))} data-v-f350723b><!--[-->`);
  ssrRenderList($props.recepti, (recept) => {
    _push(`<div class="card card-hover" data-v-f350723b><img${ssrRenderAttr("src", $options.getImageUrl(recept.slika))} alt="Recept slika" data-v-f350723b><div class="card-body" data-v-f350723b><h5 class="card-title" data-v-f350723b>${ssrInterpolate(recept.naziv_recepta)}</h5></div><div class="card-buttons" data-v-f350723b><button class="delete-button" data-v-f350723b>Izbriši</button><button class="edit-button" data-v-f350723b>Uredi</button></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mojirec.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-f350723b"]]);
const index_vue_vue_type_style_index_0_scoped_0ed57142_lang = "";
axios.defaults.baseURL = "http://127.0.0.1:8000/";
const _sfc_main = {
  components: {
    Mojirec: __nuxt_component_0
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
      const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
      axios.get(`api/mojirecepti?page=${page}`, {
        headers: {
          "Authorization": `Bearer ${authToken}`
        }
      }).then((response) => {
        this.recepti = response.data;
      }).catch((error) => {
        this.error = "Došlo je do greške prilikom dohvata recepata: " + error.message;
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Mojirec = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))} data-v-0ed57142>`);
  _push(ssrRenderComponent(_component_Mojirec, {
    recepti: $data.recepti ? $data.recepti.data : [],
    onReceptIzbrisan: ($event) => $options.fetchData($data.recepti.current_page)
  }, null, _parent));
  _push(`<div class="pagination" data-v-0ed57142>`);
  if ($data.recepti && $data.recepti.current_page > 1) {
    _push(`<button class="pagination-button" data-v-0ed57142>Previous</button>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.recepti && $data.recepti.last_page > $data.recepti.current_page) {
    _push(`<button class="pagination-button" data-v-0ed57142>Next</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($data.error) {
    _push(`<p data-v-0ed57142>${ssrInterpolate($data.error)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Mojirecepti/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0ed57142"]]);
export {
  index as default
};
//# sourceMappingURL=index-6a6fc670.js.map
