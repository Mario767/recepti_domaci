import { _ as __nuxt_component_0$1 } from "./nuxt-link-691e5b50.js";
import { defineComponent, ref, computed, watch, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, withModifiers, unref, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { a as accountStore } from "./accountStore-369f4819.js";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0 = "" + __publicAssetsURL("img/icon-hat.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ToolbarPublic",
  __ssrInlineRender: true,
  setup(__props) {
    const drawer = ref(false);
    const isMobile = ref(false);
    const isAppInitialized = ref(false);
    const router = useRouter();
    const links = [
      { ime: "Domaci recepti", ruta: "/", icon: "mdi-home" },
      { ime: "Predjela", ruta: "/predjela", icon: "mdi-food-apple" },
      { ime: "Glavna jela", ruta: "/glavnajela", icon: "mdi-food-steak" },
      { ime: "Deserti", ruta: "/deserti", icon: "mdi-food-croissant" },
      { ime: "Pretraži", ruta: "/search", icon: "mdi-magnify" },
      { ime: "Profil", ruta: "/profil", icon: "mdi-account", action: "redirectToProfile" }
    ];
    const drawerIcon = computed(() => drawer.value ? "mdi-chevron-left" : "mdi-menu");
    const closeDrawerOnLargeScreen = () => {
      if (!isMobile.value) {
        drawer.value = false;
      }
    };
    const redirectToProfile = () => {
      if (isMobile.value) {
        drawer.value = false;
      }
      if (accountStore.getters.isLoggedIn()) {
        router.push("/profil");
      } else {
        router.push("/login");
      }
    };
    watch(() => router.currentRoute.value.path, () => {
      if (isMobile.value) {
        drawer.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_icon = resolveComponent("v-list-item-icon");
      const _component_v_list_item_content = resolveComponent("v-list-item-content");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_main = resolveComponent("v-main");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_router_view = resolveComponent("router-view");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_app_bar, {
        fixed: "",
        app: "",
        height: "80",
        color: "#C87C36"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}" data-v-295dd680${_scopeId}><img class="tw-max-h-[80px]"${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "margin-left": "20px" })}" data-v-295dd680${_scopeId}>`);
            if (!isMobile.value && isAppInitialized.value) {
              _push2(ssrRenderComponent(_component_nuxt_link, {
                to: "/",
                class: "dm",
                style: { "margin-left": "10px" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Domaći recepti`);
                  } else {
                    return [
                      createTextVNode("Domaći recepti")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_v_spacer, { class: "mb-8" }, null, _parent2, _scopeId));
            if (!isMobile.value && isAppInitialized.value) {
              _push2(`<div data-v-295dd680${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_link, {
                to: "/predjela",
                class: "t1",
                style: { "margin": "0" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Predjela`);
                  } else {
                    return [
                      createTextVNode("Predjela")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_nuxt_link, {
                to: "/glavnajela",
                class: "t1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Glavna jela`);
                  } else {
                    return [
                      createTextVNode("Glavna jela")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_nuxt_link, {
                to: "/deserti",
                class: "t1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Deserti`);
                  } else {
                    return [
                      createTextVNode("Deserti")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_v_spacer, null, null, _parent2, _scopeId));
            if (!isMobile.value && isAppInitialized.value) {
              _push2(`<div class="vl" style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "font-size": "1.7em" })}" data-v-295dd680${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_link, {
                style: { "padding-right": "10px" },
                to: "/search"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_icon, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`mdi mdi-magnify`);
                        } else {
                          return [
                            createTextVNode("mdi mdi-magnify")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_icon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi mdi-magnify")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div data-v-295dd680${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_icon, { onClick: redirectToProfile }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`mdi mdi-account`);
                  } else {
                    return [
                      createTextVNode("mdi mdi-account")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (isMobile.value) {
              _push2(ssrRenderComponent(_component_v_btn, {
                icon: "",
                onClick: ($event) => drawer.value = !drawer.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_icon, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(drawerIcon.value)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(drawerIcon.value), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_icon, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(drawerIcon.value), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                createVNode("img", {
                  class: "tw-max-h-[80px]",
                  src: _imports_0,
                  style: { "margin-left": "20px" }
                }),
                !isMobile.value && isAppInitialized.value ? (openBlock(), createBlock(_component_nuxt_link, {
                  key: 0,
                  to: "/",
                  class: "dm",
                  style: { "margin-left": "10px" }
                }, {
                  default: withCtx(() => [
                    createTextVNode("Domaći recepti")
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              createVNode(_component_v_spacer, { class: "mb-8" }),
              !isMobile.value && isAppInitialized.value ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(_component_nuxt_link, {
                  to: "/predjela",
                  class: "t1",
                  style: { "margin": "0" }
                }, {
                  default: withCtx(() => [
                    createTextVNode("Predjela")
                  ]),
                  _: 1
                }),
                createVNode(_component_nuxt_link, {
                  to: "/glavnajela",
                  class: "t1"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Glavna jela")
                  ]),
                  _: 1
                }),
                createVNode(_component_nuxt_link, {
                  to: "/deserti",
                  class: "t1"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Deserti")
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              createVNode(_component_v_spacer),
              !isMobile.value && isAppInitialized.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: "vl",
                style: { "display": "flex", "align-items": "center", "font-size": "1.7em" }
              }, [
                createVNode(_component_nuxt_link, {
                  style: { "padding-right": "10px" },
                  to: "/search"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_icon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi mdi-magnify")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_component_v_icon, { onClick: redirectToProfile }, {
                    default: withCtx(() => [
                      createTextVNode("mdi mdi-account")
                    ]),
                    _: 1
                  })
                ])
              ])) : createCommentVNode("", true),
              isMobile.value ? (openBlock(), createBlock(_component_v_btn, {
                key: 2,
                icon: "",
                onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_icon, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(drawerIcon.value), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (isAppInitialized.value) {
        _push(ssrRenderComponent(_component_v_navigation_drawer, {
          modelValue: drawer.value,
          "onUpdate:modelValue": ($event) => drawer.value = $event,
          app: "",
          temporary: "",
          onClick: closeDrawerOnLargeScreen
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_list, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(links, (link, index) => {
                      _push3(ssrRenderComponent(_component_v_list_item, {
                        key: index,
                        onClick: ($event) => link.action === "redirectToProfile" ? redirectToProfile() : unref(router).push(link.ruta),
                        link: ""
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}" data-v-295dd680${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_v_list_item_icon, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_v_icon, null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(link.icon)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(link.icon), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_v_icon, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(link.icon), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_v_list_item_content, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_v_list_item_title, { style: { "padding-left": "5px" } }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(link.ime)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(link.ime), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_v_list_item_title, { style: { "padding-left": "5px" } }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(link.ime), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            return [
                              createVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                                createVNode(_component_v_list_item_icon, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(link.icon), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_list_item_content, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, { style: { "padding-left": "5px" } }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(link.ime), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(), createBlock(Fragment, null, renderList(links, (link, index) => {
                        return createVNode(_component_v_list_item, {
                          key: index,
                          onClick: ($event) => link.action === "redirectToProfile" ? redirectToProfile() : unref(router).push(link.ruta),
                          link: ""
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                              createVNode(_component_v_list_item_icon, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(link.icon), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_list_item_content, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_title, { style: { "padding-left": "5px" } }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(link.ime), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 64))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_list, null, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(links, (link, index) => {
                      return createVNode(_component_v_list_item, {
                        key: index,
                        onClick: ($event) => link.action === "redirectToProfile" ? redirectToProfile() : unref(router).push(link.ruta),
                        link: ""
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                            createVNode(_component_v_list_item_icon, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(link.icon), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_list_item_content, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, { style: { "padding-left": "5px" } }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(link.ime), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["onClick"]);
                    }), 64))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_v_main, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "12"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_sheet, {
                                "min-height": "100vh",
                                rounded: "lg"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_router_view, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_router_view)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_sheet, {
                                  "min-height": "100vh",
                                  rounded: "lg"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_router_view)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_sheet, {
                                "min-height": "100vh",
                                rounded: "lg"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_router_view)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_sheet, {
                              "min-height": "100vh",
                              rounded: "lg"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_router_view)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_container, null, {
                default: withCtx(() => [
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_sheet, {
                            "min-height": "100vh",
                            rounded: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_router_view)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const ToolbarPublic_vue_vue_type_style_index_0_scoped_295dd680_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ToolbarPublic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-295dd680"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=ToolbarPublic-7acb9966.js.map
