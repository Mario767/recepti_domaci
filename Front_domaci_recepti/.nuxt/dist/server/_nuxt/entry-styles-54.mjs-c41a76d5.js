const VSliderTrack = ".v-slider-track__background,.v-slider-track__fill,.v-slider-track__tick{background-color:rgb(var(--v-theme-surface-variant))}.v-slider-track__tick--filled{background-color:rgb(var(--v-theme-on-surface-variant))}.v-slider-track{border-radius:6px}.v-slider-track__background,.v-slider-track__fill{border-radius:inherit;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider--pressed .v-slider-track__background,.v-slider--pressed .v-slider-track__fill{transition:none}.v-input--error:not(.v-input--disabled) .v-slider-track__background,.v-input--error:not(.v-input--disabled) .v-slider-track__fill{background-color:currentColor}.v-slider-track__ticks{height:100%;position:relative;width:100%}.v-slider-track__tick{border-radius:2px;height:var(--v-slider-tick-size);opacity:0;position:absolute;transform:translate(calc(var(--v-slider-tick-size)/-2),calc(var(--v-slider-tick-size)/-2));transition:opacity .2s cubic-bezier(.4,0,.2,1);width:var(--v-slider-tick-size)}.v-locale--is-ltr .v-slider-track__tick--first .v-slider-track__tick-label,.v-locale--is-ltr.v-slider-track__tick--first .v-slider-track__tick-label{transform:none}.v-locale--is-rtl .v-slider-track__tick--first .v-slider-track__tick-label,.v-locale--is-rtl.v-slider-track__tick--first .v-slider-track__tick-label{transform:translateX(100%)}.v-locale--is-ltr .v-slider-track__tick--last .v-slider-track__tick-label,.v-locale--is-ltr.v-slider-track__tick--last .v-slider-track__tick-label{transform:translateX(-100%)}.v-locale--is-rtl .v-slider-track__tick--last .v-slider-track__tick-label,.v-locale--is-rtl.v-slider-track__tick--last .v-slider-track__tick-label{transform:none}.v-slider-track__tick-label{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}.v-slider.v-input--horizontal .v-slider-track{align-items:center;display:flex;height:calc(var(--v-slider-track-size) + 2px);touch-action:pan-y;width:100%}.v-slider.v-input--horizontal .v-slider-track__background{height:var(--v-slider-track-size)}.v-slider.v-input--horizontal .v-slider-track__fill{height:inherit}.v-slider.v-input--horizontal .v-slider-track__tick{margin-top:calc(var(--v-slider-track-size)/2 + 1px)}.v-locale--is-rtl .v-slider.v-input--horizontal .v-slider-track__tick,.v-locale--is-rtl.v-slider.v-input--horizontal .v-slider-track__tick{transform:translate(calc(var(--v-slider-tick-size)/2),calc(var(--v-slider-tick-size)/-2))}.v-slider.v-input--horizontal .v-slider-track__tick .v-slider-track__tick-label{margin-top:calc(var(--v-slider-track-size)/2 + 8px)}.v-locale--is-ltr .v-slider.v-input--horizontal .v-slider-track__tick .v-slider-track__tick-label,.v-locale--is-ltr.v-slider.v-input--horizontal .v-slider-track__tick .v-slider-track__tick-label{transform:translateX(-50%)}.v-locale--is-rtl .v-slider.v-input--horizontal .v-slider-track__tick .v-slider-track__tick-label,.v-locale--is-rtl.v-slider.v-input--horizontal .v-slider-track__tick .v-slider-track__tick-label{transform:translateX(50%)}.v-slider.v-input--horizontal .v-slider-track__tick--first{margin-inline-start:calc(var(--v-slider-tick-size) + 1px)}.v-locale--is-ltr .v-slider.v-input--horizontal .v-slider-track__tick--first .v-slider-track__tick-label,.v-locale--is-ltr.v-slider.v-input--horizontal .v-slider-track__tick--first .v-slider-track__tick-label,.v-locale--is-rtl .v-slider.v-input--horizontal .v-slider-track__tick--first .v-slider-track__tick-label,.v-locale--is-rtl.v-slider.v-input--horizontal .v-slider-track__tick--first .v-slider-track__tick-label{transform:translateX(0)}.v-slider.v-input--horizontal .v-slider-track__tick--last{margin-inline-start:calc(100% - var(--v-slider-tick-size) - 1px)}.v-locale--is-ltr .v-slider.v-input--horizontal .v-slider-track__tick--last .v-slider-track__tick-label,.v-locale--is-ltr.v-slider.v-input--horizontal .v-slider-track__tick--last .v-slider-track__tick-label{transform:translateX(-100%)}.v-locale--is-rtl .v-slider.v-input--horizontal .v-slider-track__tick--last .v-slider-track__tick-label,.v-locale--is-rtl.v-slider.v-input--horizontal .v-slider-track__tick--last .v-slider-track__tick-label{transform:translateX(100%)}.v-slider.v-input--vertical .v-slider-track{display:flex;height:100%;justify-content:center;touch-action:pan-x;width:calc(var(--v-slider-track-size) + 2px)}.v-slider.v-input--vertical .v-slider-track__background{width:var(--v-slider-track-size)}.v-slider.v-input--vertical .v-slider-track__fill{width:inherit}.v-slider.v-input--vertical .v-slider-track__ticks{height:100%}.v-slider.v-input--vertical .v-slider-track__tick{margin-inline-start:calc(var(--v-slider-track-size)/2 + 1px);transform:translate(calc(var(--v-slider-tick-size)/-2),calc(var(--v-slider-tick-size)/2))}.v-locale--is-rtl .v-slider.v-input--vertical .v-slider-track__tick,.v-locale--is-rtl.v-slider.v-input--vertical .v-slider-track__tick{transform:translate(calc(var(--v-slider-tick-size)/2),calc(var(--v-slider-tick-size)/2))}.v-slider.v-input--vertical .v-slider-track__tick--first{bottom:calc(var(--v-slider-tick-size) + 1px)}.v-slider.v-input--vertical .v-slider-track__tick--last{bottom:calc(100% - var(--v-slider-tick-size) - 1px)}.v-slider.v-input--vertical .v-slider-track__tick .v-slider-track__tick-label{margin-inline-start:calc(var(--v-slider-track-size)/2 + 12px);transform:translateY(-50%)}.v-slider--focused .v-slider-track__tick,.v-slider-track__ticks--always-show .v-slider-track__tick{opacity:1}.v-slider-track__background--opacity{opacity:.38}";
export {
  VSliderTrack as default
};
//# sourceMappingURL=entry-styles-54.mjs-c41a76d5.js.map
