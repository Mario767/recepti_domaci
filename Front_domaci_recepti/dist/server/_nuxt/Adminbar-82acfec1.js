import { resolveComponent, withCtx, createTextVNode, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  data: () => ({
    drawer: null
  })
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_app = resolveComponent("v-app");
  const _component_v_app_bar = resolveComponent("v-app-bar");
  const _component_v_app_bar_nav_icon = resolveComponent("v-app-bar-nav-icon");
  const _component_v_toolbar_title = resolveComponent("v-toolbar-title");
  const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
  const _component_v_list = resolveComponent("v-list");
  const _component_v_list_item_group = resolveComponent("v-list-item-group");
  const _component_v_list_item = resolveComponent("v-list-item");
  const _component_v_list_item_icon = resolveComponent("v-list-item-icon");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_list_item_content = resolveComponent("v-list-item-content");
  const _component_v_list_item_title = resolveComponent("v-list-item-title");
  const _component_v_main = resolveComponent("v-main");
  const _component_router_view = resolveComponent("router-view");
  _push(ssrRenderComponent(_component_v_app, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_app_bar, { app: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_app_bar_nav_icon, {
                onClick: ($event) => _ctx.drawer = !_ctx.drawer
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_toolbar_title, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Administracija`);
                  } else {
                    return [
                      createTextVNode("Administracija")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_app_bar_nav_icon, {
                  onClick: withModifiers(($event) => _ctx.drawer = !_ctx.drawer, ["stop"])
                }, null, 8, ["onClick"]),
                createVNode(_component_v_toolbar_title, null, {
                  default: withCtx(() => [
                    createTextVNode("Administracija")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_navigation_drawer, {
          modelValue: _ctx.drawer,
          "onUpdate:modelValue": ($event) => _ctx.drawer = $event,
          app: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_list, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list_item_group, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_list_item, {
                            onClick: ($event) => _ctx.$router.push("/")
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_list_item_icon, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_icon, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`mdi-account`);
                                          } else {
                                            return [
                                              createTextVNode("mdi-account")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_v_icon, null, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-account")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_v_list_item_content, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_list_item_title, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`Domaci recepti`);
                                          } else {
                                            return [
                                              createTextVNode("Domaci recepti")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Domaci recepti")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_list_item_icon, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-account")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item_content, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Domaci recepti")
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
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_list_item, {
                            onClick: ($event) => _ctx.$router.push("/admin/")
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_list_item_icon, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_icon, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`mdi-account`);
                                          } else {
                                            return [
                                              createTextVNode("mdi-account")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_v_icon, null, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-account")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_v_list_item_content, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_list_item_title, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`Korisnici`);
                                          } else {
                                            return [
                                              createTextVNode("Korisnici")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Korisnici")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_list_item_icon, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-account")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item_content, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Korisnici")
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
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_list_item, {
                              onClick: ($event) => _ctx.$router.push("/")
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_icon, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-account")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list_item_content, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Domaci recepti")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_v_list_item, {
                              onClick: ($event) => _ctx.$router.push("/admin/")
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_icon, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-account")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list_item_content, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Korisnici")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list_item_group, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item, {
                            onClick: ($event) => _ctx.$router.push("/")
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_icon, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, null, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-account")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_list_item_content, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_title, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Domaci recepti")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_v_list_item, {
                            onClick: ($event) => _ctx.$router.push("/admin/")
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_icon, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, null, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-account")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_list_item_content, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_title, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Korisnici")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
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
                createVNode(_component_v_list, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_group, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item, {
                          onClick: ($event) => _ctx.$router.push("/")
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item_icon, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-account")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_list_item_content, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Domaci recepti")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_v_list_item, {
                          onClick: ($event) => _ctx.$router.push("/admin/")
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item_icon, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-account")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_list_item_content, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Korisnici")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
        _push2(ssrRenderComponent(_component_v_main, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_router_view, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_router_view)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_app_bar, { app: "" }, {
            default: withCtx(() => [
              createVNode(_component_v_app_bar_nav_icon, {
                onClick: withModifiers(($event) => _ctx.drawer = !_ctx.drawer, ["stop"])
              }, null, 8, ["onClick"]),
              createVNode(_component_v_toolbar_title, null, {
                default: withCtx(() => [
                  createTextVNode("Administracija")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_navigation_drawer, {
            modelValue: _ctx.drawer,
            "onUpdate:modelValue": ($event) => _ctx.drawer = $event,
            app: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_v_list, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item_group, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_list_item, {
                        onClick: ($event) => _ctx.$router.push("/")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_icon, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-account")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item_content, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createTextVNode("Domaci recepti")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_v_list_item, {
                        onClick: ($event) => _ctx.$router.push("/admin/")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_icon, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-account")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item_content, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createTextVNode("Korisnici")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode(_component_v_main, null, {
            default: withCtx(() => [
              createVNode(_component_router_view)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Adminbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=Adminbar-82acfec1.js.map
