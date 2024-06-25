import { a as accountStore } from "./accountStore-369f4819.js";
import { mergeProps, unref, useSSRContext } from "vue";
import axios from "axios";
import Cookies from "universal-cookie";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const all = "";
const ShowCard_vue_vue_type_style_index_0_scoped_9edb000f_lang = "";
const cookies = new Cookies();
const _sfc_main = {
  props: {
    recept: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      noviKomentar: "",
      ocjena: 0,
      stars: Array(5).fill("far fa-star"),
      rating: 0
    };
  },
  methods: {
    setRating(rating) {
      this.rating = rating;
      this.stars = this.stars.map((star, index) => {
        if (index < rating) {
          return "fas fa-star";
        } else if (index < rating) {
          return "fas fa-star-half-alt";
        } else {
          return "far fa-star";
        }
      });
    },
    submitRating(rating) {
      const authToken = cookies.get("authToken");
      axios.post("http://127.0.0.1:8000/api/ocjena", {
        recept_id: this.recept.recept_id,
        ocjena: rating
      }, {
        headers: {
          "Authorization": `Bearer ${authToken}`
        }
      }).then(() => {
        this.ocjena = rating;
        alert("Uspješno dodana ocjena!");
      }).catch((error) => {
        console.error(error);
      });
    },
    submitKomentar() {
      const authToken = cookies.get("authToken");
      axios.post("http://127.0.0.1:8000/api/komentari", {
        idrecepta: this.recept.recept_id,
        sadržaj: this.noviKomentar
      }, {
        headers: {
          "Authorization": `Bearer ${authToken}`
        }
      }).then(() => {
        this.noviKomentar = "";
        alert("Uspješno dodan komentar!");
      }).catch((error) => {
        console.error(error);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "recept-container" }, _attrs))} data-v-9edb000f><h1 class="naslov" data-v-9edb000f>${ssrInterpolate($props.recept.naziv_recepta)}</h1><hr style="${ssrRenderStyle({ "height": "1px", "color": "black", "width": "100%" })}" data-v-9edb000f><div class="slika-container" data-v-9edb000f><img${ssrRenderAttr("src", "http://127.0.0.1:8000/" + $props.recept.slika)} alt="Slika recepta" data-v-9edb000f></div><h2 class="opis" data-v-9edb000f>${ssrInterpolate($props.recept.opis)}</h2><div class="ocjene" data-v-9edb000f><p data-v-9edb000f>Prosječna ocjena: <!--[-->`);
  ssrRenderList(5, (n) => {
    _push(`<span class="star" data-v-9edb000f>`);
    if (n <= $props.recept.prosjecnaOcjena) {
      _push(`<i class="fas fa-star" data-v-9edb000f></i>`);
    } else {
      _push(`<i class="far fa-star" data-v-9edb000f></i>`);
    }
    _push(`</span>`);
  });
  _push(`<!--]-->  <span data-v-9edb000f>${ssrInterpolate($props.recept.prosjecnaOcjena.toFixed(1))}</span></p>`);
  if (("accountStore" in _ctx ? _ctx.accountStore : unref(accountStore)).getters.isLoggedIn()) {
    _push(`<div data-v-9edb000f><p data-v-9edb000f>Ocijenite recept: <div class="star-rating" data-v-9edb000f><!--[-->`);
    ssrRenderList($data.stars, (star, index) => {
      _push(`<span class="star" data-v-9edb000f><i class="${ssrRenderClass([star, "star-mar"])}" data-v-9edb000f></i></span>`);
    });
    _push(`<!--]--></div></p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (("accountStore" in _ctx ? _ctx.accountStore : unref(accountStore)).getters.isLoggedIn()) {
    _push(`<div class="pisanjeKomentara" data-v-9edb000f><form data-v-9edb000f><textarea class="komentarField" placeholder="Unesite svoj komentar ovdje" data-v-9edb000f>${ssrInterpolate($data.noviKomentar)}</textarea><br data-v-9edb000f><button type="submit" class="komentarSend" data-v-9edb000f>Pošalji komentar</button></form></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($props.recept.komentari, (komentar) => {
    _push(`<div class="komentar" data-v-9edb000f><p class="komKorIme" data-v-9edb000f>${ssrInterpolate(komentar.korisnicko_ime)}</p><p data-v-9edb000f>${ssrInterpolate(komentar.sadržaj)}</p><p data-v-9edb000f>${ssrInterpolate(komentar.datum_Komentara)}</p></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ShowCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9edb000f"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=ShowCard-7efc8efb.js.map
