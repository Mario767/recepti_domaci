import { resolveComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, createCommentVNode, toDisplayString, useSSRContext } from "vue";
import axios from "axios";
import { a as accountStore } from "./accountStore-369f4819.js";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  data() {
    return {
      vrstaKorisnika: "",
      korisnici: [],
      korisnickoIme: "",
      headers: [
        { text: "Id", value: "Id" },
        { text: "Ime", value: "Ime" },
        { text: "Datum", value: "Datum" },
        { text: "Akcija", value: "action", sortable: false }
      ],
      loading: false,
      page: 1,
      nextPageAvailable: false,
      snackbar: false,
      snackbarMessage: "",
      snackbarColor: "",
      timeout: 3e3
    };
  },
  watch: {
    vrstaKorisnika() {
      this.page = 1;
      this.fetchKorisnici();
    }
  },
  methods: {
    goToRecepti(korisnik) {
      this.$router.push({ path: `/admin/recepti` });
      accountStore.actions.setKorinsikId(korisnik.Id);
    },
    async demote(idKorisnika) {
      var _a, _b;
      try {
        const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
        const response = await axios.post("http://127.0.0.1:8000/api/adminukloni", { korisnik_id: idKorisnika }, {
          headers: { Authorization: `Bearer ${authToken}` }
        });
        console.log(response.data);
        this.snackbarMessage = "Korisniku uspješno skinuta uloga admina.";
        this.snackbarColor = "success";
        this.snackbar = true;
        this.fetchKorisnici();
      } catch (error) {
        console.error(error);
        this.snackbarMessage = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Došlo je do greške.";
        this.snackbarColor = "error";
        this.snackbar = true;
      }
    },
    async izbrisi(idKorisnika) {
      var _a, _b;
      try {
        const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
        const response = await axios.post("http://127.0.0.1:8000/api/delkorisnik", { korisnik_id: idKorisnika }, {
          headers: { Authorization: `Bearer ${authToken}` }
        });
        console.log(response.data);
        this.snackbarMessage = "Korisnik uspješno izbrisan.";
        this.snackbarColor = "success";
        this.snackbar = true;
        this.fetchKorisnici();
      } catch (error) {
        console.error(error);
        this.snackbarMessage = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Došlo je do greške.";
        this.snackbarColor = "error";
        this.snackbar = true;
      }
    },
    async promoviraj(idKorisnika) {
      var _a, _b;
      try {
        const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
        const response = await axios.post("http://127.0.0.1:8000/api/adminuloge", { korisnik_id: idKorisnika }, {
          headers: { Authorization: `Bearer ${authToken}` }
        });
        console.log(response.data);
        this.snackbarMessage = "Korisnik uspješno promoviran.";
        this.snackbarColor = "success";
        this.snackbar = true;
        this.fetchKorisnici();
      } catch (error) {
        console.error(error);
        this.snackbarMessage = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Došlo je do greške.";
        this.snackbarColor = "error";
        this.snackbar = true;
      }
    },
    async fetchKorisnici(page) {
      var _a, _b;
      this.loading = true;
      this.page = Number(page);
      if (isNaN(this.page)) {
        this.page = 1;
      }
      const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
      let url = "";
      if (this.vrstaKorisnika === "Admin") {
        url = "http://localhost:8000/api/korisniciadmin";
      } else {
        url = "http://localhost:8000/api/korisnici";
      }
      try {
        const response = await axios.get(url, {
          params: { page: this.page },
          headers: { Authorization: `Bearer ${authToken}` }
        });
        this.korisnici = response.data.data;
        this.nextPageAvailable = response.data.next_page_url !== null;
        this.loading = false;
      } catch (error) {
        console.error(error);
        this.snackbarMessage = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Došlo je do greške.";
        this.snackbarColor = "error";
        this.snackbar = true;
        this.loading = false;
      }
    },
    async pretraziKorisnika() {
      this.page = 1;
      await this.fetchKorisnici();
    }
  },
  created() {
    this.fetchKorisnici();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_combobox = resolveComponent("v-combobox");
  const _component_v_text_field = resolveComponent("v-text-field");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_data_table = resolveComponent("v-data-table");
  const _component_v_snackbar = resolveComponent("v-snackbar");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_v_row, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="form-group"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_combobox, {
          class: "combobox",
          label: "Vrsta korisnika",
          modelValue: $data.vrstaKorisnika,
          "onUpdate:modelValue": ($event) => $data.vrstaKorisnika = $event,
          items: ["Admin", "Korisnik"],
          required: "",
          onChange: $options.fetchKorisnici
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_text_field, {
                modelValue: $data.korisnickoIme,
                "onUpdate:modelValue": ($event) => $data.korisnickoIme = $event,
                label: "Korisničko ime",
                required: ""
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_btn, {
                class: "btn",
                onClick: $options.pretraziKorisnika
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Pretraži`);
                  } else {
                    return [
                      createTextVNode("Pretraži")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_text_field, {
                  modelValue: $data.korisnickoIme,
                  "onUpdate:modelValue": ($event) => $data.korisnickoIme = $event,
                  label: "Korisničko ime",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_btn, {
                  class: "btn",
                  onClick: $options.pretraziKorisnika
                }, {
                  default: withCtx(() => [
                    createTextVNode("Pretraži")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "form-group" }, [
            createVNode(_component_v_combobox, {
              class: "combobox",
              label: "Vrsta korisnika",
              modelValue: $data.vrstaKorisnika,
              "onUpdate:modelValue": ($event) => $data.vrstaKorisnika = $event,
              items: ["Admin", "Korisnik"],
              required: "",
              onChange: $options.fetchKorisnici
            }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"]),
            createVNode(_component_v_row, null, {
              default: withCtx(() => [
                createVNode(_component_v_text_field, {
                  modelValue: $data.korisnickoIme,
                  "onUpdate:modelValue": ($event) => $data.korisnickoIme = $event,
                  label: "Korisničko ime",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_btn, {
                  class: "btn",
                  onClick: $options.pretraziKorisnika
                }, {
                  default: withCtx(() => [
                    createTextVNode("Pretraži")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_data_table, {
    headers: $data.headers,
    items: $data.korisnici,
    class: "elevation-1",
    loading: $data.loading
  }, {
    "item.action": withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_btn, {
          class: "btn",
          style: { "background-color": "#FF6347", "margin-right": "0.1rem" },
          onClick: ($event) => $options.goToRecepti(item)
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Recepti`);
            } else {
              return [
                createTextVNode("Recepti")
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        if ($data.vrstaKorisnika !== "Admin") {
          _push2(`<!--[-->`);
          _push2(ssrRenderComponent(_component_v_btn, {
            class: "btn",
            style: { "margin": "0", "margin-right": "0.1rem" },
            color: "primary",
            onClick: ($event) => $options.promoviraj(item.Id)
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Promote`);
              } else {
                return [
                  createTextVNode("Promote")
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_v_btn, {
            class: "btn",
            style: { "margin": "0" },
            color: "error",
            onClick: ($event) => $options.izbrisi(item.Id)
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Izbriši`);
              } else {
                return [
                  createTextVNode("Izbriši")
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`<!--]-->`);
        } else {
          _push2(`<!---->`);
        }
        if ($data.vrstaKorisnika === "Admin") {
          _push2(ssrRenderComponent(_component_v_btn, {
            class: "btn",
            style: { "margin-right": "0.5rem" },
            color: "error",
            onClick: ($event) => $options.demote(item.Id)
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Demote`);
              } else {
                return [
                  createTextVNode("Demote")
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode(_component_v_btn, {
            class: "btn",
            style: { "background-color": "#FF6347", "margin-right": "0.1rem" },
            onClick: ($event) => $options.goToRecepti(item)
          }, {
            default: withCtx(() => [
              createTextVNode("Recepti")
            ]),
            _: 2
          }, 1032, ["onClick"]),
          $data.vrstaKorisnika !== "Admin" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
            createVNode(_component_v_btn, {
              class: "btn",
              style: { "margin": "0", "margin-right": "0.1rem" },
              color: "primary",
              onClick: ($event) => $options.promoviraj(item.Id)
            }, {
              default: withCtx(() => [
                createTextVNode("Promote")
              ]),
              _: 2
            }, 1032, ["onClick"]),
            createVNode(_component_v_btn, {
              class: "btn",
              style: { "margin": "0" },
              color: "error",
              onClick: ($event) => $options.izbrisi(item.Id)
            }, {
              default: withCtx(() => [
                createTextVNode("Izbriši")
              ]),
              _: 2
            }, 1032, ["onClick"])
          ], 64)) : createCommentVNode("", true),
          $data.vrstaKorisnika === "Admin" ? (openBlock(), createBlock(_component_v_btn, {
            key: 1,
            class: "btn",
            style: { "margin-right": "0.5rem" },
            color: "error",
            onClick: ($event) => $options.demote(item.Id)
          }, {
            default: withCtx(() => [
              createTextVNode("Demote")
            ]),
            _: 2
          }, 1032, ["onClick"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="pagination">`);
  if ($data.page > 1) {
    _push(`<button class="pagination-button">Previous</button>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.nextPageAvailable) {
    _push(`<button class="pagination-button">Next</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  _push(ssrRenderComponent(_component_v_snackbar, {
    modelValue: $data.snackbar,
    "onUpdate:modelValue": ($event) => $data.snackbar = $event,
    timeout: $data.timeout,
    color: $data.snackbarColor,
    style: { bottom: "50px" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($data.snackbarMessage)} `);
        _push2(ssrRenderComponent(_component_v_btn, {
          color: "white",
          text: "",
          onClick: ($event) => $data.snackbar = false,
          class: "snackbar-close-btn"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Close`);
            } else {
              return [
                createTextVNode("Close")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createTextVNode(toDisplayString($data.snackbarMessage) + " ", 1),
          createVNode(_component_v_btn, {
            color: "white",
            text: "",
            onClick: ($event) => $data.snackbar = false,
            class: "snackbar-close-btn"
          }, {
            default: withCtx(() => [
              createTextVNode("Close")
            ]),
            _: 1
          }, 8, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-94a34323.js.map
