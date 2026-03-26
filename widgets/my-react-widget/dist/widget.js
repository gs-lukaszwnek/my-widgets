var uf = { exports: {} }, pu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function Wv() {
  if (mr) return pu;
  mr = 1;
  var T = Symbol.for("react.transitional.element"), il = Symbol.for("react.fragment");
  function j(m, J, ml) {
    var P = null;
    if (ml !== void 0 && (P = "" + ml), J.key !== void 0 && (P = "" + J.key), "key" in J) {
      ml = {};
      for (var yl in J)
        yl !== "key" && (ml[yl] = J[yl]);
    } else ml = J;
    return J = ml.ref, {
      $$typeof: T,
      type: m,
      key: P,
      ref: J !== void 0 ? J : null,
      props: ml
    };
  }
  return pu.Fragment = il, pu.jsx = j, pu.jsxs = j, pu;
}
var yr;
function $v() {
  return yr || (yr = 1, uf.exports = Wv()), uf.exports;
}
var C = $v();
const Fv = '/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-outline-style:solid}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-500:oklch(63.7% .237 25.331);--color-red-700:oklch(50.5% .213 27.518);--color-orange-400:oklch(75% .183 55.934);--color-orange-950:oklch(26.6% .079 36.259);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-950:oklch(27.9% .077 45.635);--color-yellow-300:oklch(90.5% .182 98.111);--color-yellow-950:oklch(28.6% .066 53.813);--color-lime-400:oklch(84.1% .238 128.85);--color-lime-500:oklch(76.8% .233 130.85);--color-lime-950:oklch(27.4% .072 132.109);--color-cyan-200:oklch(91.7% .08 205.041);--color-cyan-950:oklch(30.2% .056 229.695);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-400:oklch(74.6% .16 232.661);--color-sky-950:oklch(29.3% .066 243.157);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-950:oklch(25.7% .09 281.288);--color-violet-500:oklch(60.6% .25 292.717);--color-violet-700:oklch(49.1% .27 292.581);--color-fuchsia-500:oklch(66.7% .295 322.15);--color-fuchsia-700:oklch(51.8% .253 323.949);--color-pink-300:oklch(82.3% .12 346.018);--color-pink-400:oklch(71.8% .202 349.761);--color-pink-950:oklch(28.4% .109 3.907);--color-rose-50:oklch(96.9% .015 12.422);--color-rose-100:oklch(94.1% .03 12.58);--color-rose-300:oklch(81% .117 11.638);--color-rose-500:oklch(64.5% .246 16.439);--color-rose-600:oklch(58.6% .253 17.585);--color-rose-700:oklch(51.4% .222 16.935);--color-rose-800:oklch(45.5% .188 13.697);--color-rose-900:oklch(41% .159 10.272);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-950:oklch(12.9% .042 264.695);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-800:oklch(27.4% .006 286.033);--color-stone-200:oklch(92.3% .003 48.717);--color-stone-300:oklch(86.9% .005 56.366);--color-stone-400:oklch(70.9% .01 56.259);--color-stone-500:oklch(55.3% .013 58.071);--color-stone-600:oklch(44.4% .011 73.639);--color-stone-700:oklch(37.4% .01 67.558);--color-stone-900:oklch(21.6% .006 56.043);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-wider:.05em;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.start{inset-inline-start:var(--spacing)}.end{inset-inline-end:var(--spacing)}.mt-0{margin-top:calc(var(--spacing) * 0)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.flex{display:flex}.grid{display:grid}.hidden{display:none}.table{display:table}.h-1{height:calc(var(--spacing) * 1)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-32{height:calc(var(--spacing) * 32)}.h-full{height:100%}.min-h-\\[44px\\]{min-height:44px}.min-h-\\[160px\\]{min-height:160px}.w-32{width:calc(var(--spacing) * 32)}.w-full{width:100%}.flex-1{flex:1}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)))}.gap-x-4{column-gap:calc(var(--spacing) * 4)}.gap-y-1{row-gap:calc(var(--spacing) * 1)}.self-center{align-self:center}.overflow-hidden{overflow:hidden}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-stone-300{border-color:var(--color-stone-300)}.border-stone-500{border-color:var(--color-stone-500)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-cyan-200{background-color:var(--color-cyan-200)}.bg-fuchsia-500{background-color:var(--color-fuchsia-500)}.bg-fuchsia-700{background-color:var(--color-fuchsia-700)}.bg-indigo-300{background-color:var(--color-indigo-300)}.bg-indigo-600{background-color:var(--color-indigo-600)}.bg-indigo-700{background-color:var(--color-indigo-700)}.bg-lime-400{background-color:var(--color-lime-400)}.bg-lime-500{background-color:var(--color-lime-500)}.bg-orange-400{background-color:var(--color-orange-400)}.bg-pink-300{background-color:var(--color-pink-300)}.bg-pink-400{background-color:var(--color-pink-400)}.bg-red-500{background-color:var(--color-red-500)}.bg-red-700{background-color:var(--color-red-700)}.bg-rose-100{background-color:var(--color-rose-100)}.bg-rose-500{background-color:var(--color-rose-500)}.bg-rose-600{background-color:var(--color-rose-600)}.bg-rose-700{background-color:var(--color-rose-700)}.bg-sky-400{background-color:var(--color-sky-400)}.bg-slate-400{background-color:var(--color-slate-400)}.bg-stone-200{background-color:var(--color-stone-200)}.bg-stone-300{background-color:var(--color-stone-300)}.bg-stone-500{background-color:var(--color-stone-500)}.bg-stone-700{background-color:var(--color-stone-700)}.bg-violet-500{background-color:var(--color-violet-500)}.bg-violet-700{background-color:var(--color-violet-700)}.bg-white{background-color:var(--color-white)}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-yellow-300{background-color:var(--color-yellow-300)}.bg-zinc-700{background-color:var(--color-zinc-700)}.bg-zinc-800{background-color:var(--color-zinc-800)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-rose-50{--tw-gradient-from:var(--color-rose-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-amber-50{--tw-gradient-via:var(--color-amber-50);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-sky-50{--tw-gradient-to:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-contain{object-fit:contain}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-5{padding:calc(var(--spacing) * 5)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.py-0{padding-block:calc(var(--spacing) * 0)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.font-mono{font-family:var(--font-mono)}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.text-amber-950{color:var(--color-amber-950)}.text-cyan-950{color:var(--color-cyan-950)}.text-indigo-950{color:var(--color-indigo-950)}.text-lime-950{color:var(--color-lime-950)}.text-orange-950{color:var(--color-orange-950)}.text-pink-950{color:var(--color-pink-950)}.text-rose-600{color:var(--color-rose-600)}.text-rose-900{color:var(--color-rose-900)}.text-sky-950{color:var(--color-sky-950)}.text-slate-950{color:var(--color-slate-950)}.text-stone-500{color:var(--color-stone-500)}.text-stone-600{color:var(--color-stone-600)}.text-stone-700{color:var(--color-stone-700)}.text-stone-900{color:var(--color-stone-900)}.text-white{color:var(--color-white)}.text-yellow-950{color:var(--color-yellow-950)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.shadow-inner{--tw-shadow:inset 0 2px 4px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-1{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-stone-200{--tw-ring-color:var(--color-stone-200)}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a)) drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a) drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.placeholder\\:text-stone-400::placeholder{color:var(--color-stone-400)}.placeholder\\:text-stone-600::placeholder{color:var(--color-stone-600)}@media(hover:hover){.hover\\:bg-rose-700:hover{background-color:var(--color-rose-700)}.hover\\:bg-rose-800:hover{background-color:var(--color-rose-800)}}.focus\\:border-rose-500:focus{border-color:var(--color-rose-500)}.focus\\:border-rose-700:focus{border-color:var(--color-rose-700)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-rose-300:focus{--tw-ring-color:var(--color-rose-300)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-rose-700:focus-visible{--tw-ring-color:var(--color-rose-700)}.focus-visible\\:outline:focus-visible{outline-style:var(--tw-outline-style);outline-width:1px}.focus-visible\\:outline-2:focus-visible{outline-style:var(--tw-outline-style);outline-width:2px}.focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.focus-visible\\:outline-rose-700:focus-visible{outline-color:var(--color-rose-700)}.focus-visible\\:outline-rose-800:focus-visible{outline-color:var(--color-rose-800)}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:bg-rose-300:disabled{background-color:var(--color-rose-300)}.disabled\\:text-rose-900:disabled{color:var(--color-rose-900)}@media(min-width:40rem){.sm\\:flex-row{flex-direction:row}}}:host{color-scheme:light;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:Inter,system-ui,-apple-system,sans-serif;line-height:1.5;display:block}@media(prefers-reduced-motion:reduce){*,:before,:after{scroll-behavior:auto!important;transition-duration:.01ms!important;animation-duration:.01ms!important;animation-iteration-count:1!important}}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}';
var nf = { exports: {} }, Su = {}, cf = { exports: {} }, ff = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr;
function Iv() {
  return gr || (gr = 1, (function(T) {
    function il(b, A) {
      var H = b.length;
      b.push(A);
      l: for (; 0 < H; ) {
        var al = H - 1 >>> 1, fl = b[al];
        if (0 < J(fl, A))
          b[al] = A, b[H] = fl, H = al;
        else break l;
      }
    }
    function j(b) {
      return b.length === 0 ? null : b[0];
    }
    function m(b) {
      if (b.length === 0) return null;
      var A = b[0], H = b.pop();
      if (H !== A) {
        b[0] = H;
        l: for (var al = 0, fl = b.length, s = fl >>> 1; al < s; ) {
          var z = 2 * (al + 1) - 1, x = b[z], O = z + 1, q = b[O];
          if (0 > J(x, H))
            O < fl && 0 > J(q, x) ? (b[al] = q, b[O] = H, al = O) : (b[al] = x, b[z] = H, al = z);
          else if (O < fl && 0 > J(q, H))
            b[al] = q, b[O] = H, al = O;
          else break l;
        }
      }
      return A;
    }
    function J(b, A) {
      var H = b.sortIndex - A.sortIndex;
      return H !== 0 ? H : b.id - A.id;
    }
    if (T.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var ml = performance;
      T.unstable_now = function() {
        return ml.now();
      };
    } else {
      var P = Date, yl = P.now();
      T.unstable_now = function() {
        return P.now() - yl;
      };
    }
    var D = [], E = [], k = 1, N = null, cl = 3, Al = !1, Ol = !1, Ml = !1, Gl = !1, xl = typeof setTimeout == "function" ? setTimeout : null, kt = typeof clearTimeout == "function" ? clearTimeout : null, jl = typeof setImmediate < "u" ? setImmediate : null;
    function ct(b) {
      for (var A = j(E); A !== null; ) {
        if (A.callback === null) m(E);
        else if (A.startTime <= b)
          m(E), A.sortIndex = A.expirationTime, il(D, A);
        else break;
        A = j(E);
      }
    }
    function Et(b) {
      if (Ml = !1, ct(b), !Ol)
        if (j(D) !== null)
          Ol = !0, Xl || (Xl = !0, Zl());
        else {
          var A = j(E);
          A !== null && bt(Et, A.startTime - b);
        }
    }
    var Xl = !1, L = -1, Ql = 5, Tt = -1;
    function Ga() {
      return Gl ? !0 : !(T.unstable_now() - Tt < Ql);
    }
    function At() {
      if (Gl = !1, Xl) {
        var b = T.unstable_now();
        Tt = b;
        var A = !0;
        try {
          l: {
            Ol = !1, Ml && (Ml = !1, kt(L), L = -1), Al = !0;
            var H = cl;
            try {
              t: {
                for (ct(b), N = j(D); N !== null && !(N.expirationTime > b && Ga()); ) {
                  var al = N.callback;
                  if (typeof al == "function") {
                    N.callback = null, cl = N.priorityLevel;
                    var fl = al(
                      N.expirationTime <= b
                    );
                    if (b = T.unstable_now(), typeof fl == "function") {
                      N.callback = fl, ct(b), A = !0;
                      break t;
                    }
                    N === j(D) && m(D), ct(b);
                  } else m(D);
                  N = j(D);
                }
                if (N !== null) A = !0;
                else {
                  var s = j(E);
                  s !== null && bt(
                    Et,
                    s.startTime - b
                  ), A = !1;
                }
              }
              break l;
            } finally {
              N = null, cl = H, Al = !1;
            }
            A = void 0;
          }
        } finally {
          A ? Zl() : Xl = !1;
        }
      }
    }
    var Zl;
    if (typeof jl == "function")
      Zl = function() {
        jl(At);
      };
    else if (typeof MessageChannel < "u") {
      var Sa = new MessageChannel(), Dt = Sa.port2;
      Sa.port1.onmessage = At, Zl = function() {
        Dt.postMessage(null);
      };
    } else
      Zl = function() {
        xl(At, 0);
      };
    function bt(b, A) {
      L = xl(function() {
        b(T.unstable_now());
      }, A);
    }
    T.unstable_IdlePriority = 5, T.unstable_ImmediatePriority = 1, T.unstable_LowPriority = 4, T.unstable_NormalPriority = 3, T.unstable_Profiling = null, T.unstable_UserBlockingPriority = 2, T.unstable_cancelCallback = function(b) {
      b.callback = null;
    }, T.unstable_forceFrameRate = function(b) {
      0 > b || 125 < b ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ql = 0 < b ? Math.floor(1e3 / b) : 5;
    }, T.unstable_getCurrentPriorityLevel = function() {
      return cl;
    }, T.unstable_next = function(b) {
      switch (cl) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = cl;
      }
      var H = cl;
      cl = A;
      try {
        return b();
      } finally {
        cl = H;
      }
    }, T.unstable_requestPaint = function() {
      Gl = !0;
    }, T.unstable_runWithPriority = function(b, A) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var H = cl;
      cl = b;
      try {
        return A();
      } finally {
        cl = H;
      }
    }, T.unstable_scheduleCallback = function(b, A, H) {
      var al = T.unstable_now();
      switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? al + H : al) : H = al, b) {
        case 1:
          var fl = -1;
          break;
        case 2:
          fl = 250;
          break;
        case 5:
          fl = 1073741823;
          break;
        case 4:
          fl = 1e4;
          break;
        default:
          fl = 5e3;
      }
      return fl = H + fl, b = {
        id: k++,
        callback: A,
        priorityLevel: b,
        startTime: H,
        expirationTime: fl,
        sortIndex: -1
      }, H > al ? (b.sortIndex = H, il(E, b), j(D) === null && b === j(E) && (Ml ? (kt(L), L = -1) : Ml = !0, bt(Et, H - al))) : (b.sortIndex = fl, il(D, b), Ol || Al || (Ol = !0, Xl || (Xl = !0, Zl()))), b;
    }, T.unstable_shouldYield = Ga, T.unstable_wrapCallback = function(b) {
      var A = cl;
      return function() {
        var H = cl;
        cl = A;
        try {
          return b.apply(this, arguments);
        } finally {
          cl = H;
        }
      };
    };
  })(ff)), ff;
}
var br;
function Pv() {
  return br || (br = 1, cf.exports = Iv()), cf.exports;
}
var of = { exports: {} }, R = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr;
function lh() {
  if (pr) return R;
  pr = 1;
  var T = Symbol.for("react.transitional.element"), il = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), ml = Symbol.for("react.consumer"), P = Symbol.for("react.context"), yl = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), N = Symbol.for("react.activity"), cl = Symbol.iterator;
  function Al(s) {
    return s === null || typeof s != "object" ? null : (s = cl && s[cl] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var Ol = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Ml = Object.assign, Gl = {};
  function xl(s, z, x) {
    this.props = s, this.context = z, this.refs = Gl, this.updater = x || Ol;
  }
  xl.prototype.isReactComponent = {}, xl.prototype.setState = function(s, z) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, z, "setState");
  }, xl.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function kt() {
  }
  kt.prototype = xl.prototype;
  function jl(s, z, x) {
    this.props = s, this.context = z, this.refs = Gl, this.updater = x || Ol;
  }
  var ct = jl.prototype = new kt();
  ct.constructor = jl, Ml(ct, xl.prototype), ct.isPureReactComponent = !0;
  var Et = Array.isArray;
  function Xl() {
  }
  var L = { H: null, A: null, T: null, S: null }, Ql = Object.prototype.hasOwnProperty;
  function Tt(s, z, x) {
    var O = x.ref;
    return {
      $$typeof: T,
      type: s,
      key: z,
      ref: O !== void 0 ? O : null,
      props: x
    };
  }
  function Ga(s, z) {
    return Tt(s.type, z, s.props);
  }
  function At(s) {
    return typeof s == "object" && s !== null && s.$$typeof === T;
  }
  function Zl(s) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(x) {
      return z[x];
    });
  }
  var Sa = /\/+/g;
  function Dt(s, z) {
    return typeof s == "object" && s !== null && s.key != null ? Zl("" + s.key) : z.toString(36);
  }
  function bt(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(Xl, Xl) : (s.status = "pending", s.then(
          function(z) {
            s.status === "pending" && (s.status = "fulfilled", s.value = z);
          },
          function(z) {
            s.status === "pending" && (s.status = "rejected", s.reason = z);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function b(s, z, x, O, q) {
    var G = typeof s;
    (G === "undefined" || G === "boolean") && (s = null);
    var I = !1;
    if (s === null) I = !0;
    else
      switch (G) {
        case "bigint":
        case "string":
        case "number":
          I = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case T:
            case il:
              I = !0;
              break;
            case k:
              return I = s._init, b(
                I(s._payload),
                z,
                x,
                O,
                q
              );
          }
      }
    if (I)
      return q = q(s), I = O === "" ? "." + Dt(s, 0) : O, Et(q) ? (x = "", I != null && (x = I.replace(Sa, "$&/") + "/"), b(q, z, x, "", function(_e) {
        return _e;
      })) : q != null && (At(q) && (q = Ga(
        q,
        x + (q.key == null || s && s.key === q.key ? "" : ("" + q.key).replace(
          Sa,
          "$&/"
        ) + "/") + I
      )), z.push(q)), 1;
    I = 0;
    var Yl = O === "" ? "." : O + ":";
    if (Et(s))
      for (var gl = 0; gl < s.length; gl++)
        O = s[gl], G = Yl + Dt(O, gl), I += b(
          O,
          z,
          x,
          G,
          q
        );
    else if (gl = Al(s), typeof gl == "function")
      for (s = gl.call(s), gl = 0; !(O = s.next()).done; )
        O = O.value, G = Yl + Dt(O, gl++), I += b(
          O,
          z,
          x,
          G,
          q
        );
    else if (G === "object") {
      if (typeof s.then == "function")
        return b(
          bt(s),
          z,
          x,
          O,
          q
        );
      throw z = String(s), Error(
        "Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return I;
  }
  function A(s, z, x) {
    if (s == null) return s;
    var O = [], q = 0;
    return b(s, O, "", "", function(G) {
      return z.call(x, G, q++);
    }), O;
  }
  function H(s) {
    if (s._status === -1) {
      var z = s._result;
      z = z(), z.then(
        function(x) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = x);
        },
        function(x) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = x);
        }
      ), s._status === -1 && (s._status = 0, s._result = z);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var al = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var z = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(z)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  }, fl = {
    map: A,
    forEach: function(s, z, x) {
      A(
        s,
        function() {
          z.apply(this, arguments);
        },
        x
      );
    },
    count: function(s) {
      var z = 0;
      return A(s, function() {
        z++;
      }), z;
    },
    toArray: function(s) {
      return A(s, function(z) {
        return z;
      }) || [];
    },
    only: function(s) {
      if (!At(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  };
  return R.Activity = N, R.Children = fl, R.Component = xl, R.Fragment = j, R.Profiler = J, R.PureComponent = jl, R.StrictMode = m, R.Suspense = D, R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L, R.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return L.H.useMemoCache(s);
    }
  }, R.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, R.cacheSignal = function() {
    return null;
  }, R.cloneElement = function(s, z, x) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var O = Ml({}, s.props), q = s.key;
    if (z != null)
      for (G in z.key !== void 0 && (q = "" + z.key), z)
        !Ql.call(z, G) || G === "key" || G === "__self" || G === "__source" || G === "ref" && z.ref === void 0 || (O[G] = z[G]);
    var G = arguments.length - 2;
    if (G === 1) O.children = x;
    else if (1 < G) {
      for (var I = Array(G), Yl = 0; Yl < G; Yl++)
        I[Yl] = arguments[Yl + 2];
      O.children = I;
    }
    return Tt(s.type, q, O);
  }, R.createContext = function(s) {
    return s = {
      $$typeof: P,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: ml,
      _context: s
    }, s;
  }, R.createElement = function(s, z, x) {
    var O, q = {}, G = null;
    if (z != null)
      for (O in z.key !== void 0 && (G = "" + z.key), z)
        Ql.call(z, O) && O !== "key" && O !== "__self" && O !== "__source" && (q[O] = z[O]);
    var I = arguments.length - 2;
    if (I === 1) q.children = x;
    else if (1 < I) {
      for (var Yl = Array(I), gl = 0; gl < I; gl++)
        Yl[gl] = arguments[gl + 2];
      q.children = Yl;
    }
    if (s && s.defaultProps)
      for (O in I = s.defaultProps, I)
        q[O] === void 0 && (q[O] = I[O]);
    return Tt(s, G, q);
  }, R.createRef = function() {
    return { current: null };
  }, R.forwardRef = function(s) {
    return { $$typeof: yl, render: s };
  }, R.isValidElement = At, R.lazy = function(s) {
    return {
      $$typeof: k,
      _payload: { _status: -1, _result: s },
      _init: H
    };
  }, R.memo = function(s, z) {
    return {
      $$typeof: E,
      type: s,
      compare: z === void 0 ? null : z
    };
  }, R.startTransition = function(s) {
    var z = L.T, x = {};
    L.T = x;
    try {
      var O = s(), q = L.S;
      q !== null && q(x, O), typeof O == "object" && O !== null && typeof O.then == "function" && O.then(Xl, al);
    } catch (G) {
      al(G);
    } finally {
      z !== null && x.types !== null && (z.types = x.types), L.T = z;
    }
  }, R.unstable_useCacheRefresh = function() {
    return L.H.useCacheRefresh();
  }, R.use = function(s) {
    return L.H.use(s);
  }, R.useActionState = function(s, z, x) {
    return L.H.useActionState(s, z, x);
  }, R.useCallback = function(s, z) {
    return L.H.useCallback(s, z);
  }, R.useContext = function(s) {
    return L.H.useContext(s);
  }, R.useDebugValue = function() {
  }, R.useDeferredValue = function(s, z) {
    return L.H.useDeferredValue(s, z);
  }, R.useEffect = function(s, z) {
    return L.H.useEffect(s, z);
  }, R.useEffectEvent = function(s) {
    return L.H.useEffectEvent(s);
  }, R.useId = function() {
    return L.H.useId();
  }, R.useImperativeHandle = function(s, z, x) {
    return L.H.useImperativeHandle(s, z, x);
  }, R.useInsertionEffect = function(s, z) {
    return L.H.useInsertionEffect(s, z);
  }, R.useLayoutEffect = function(s, z) {
    return L.H.useLayoutEffect(s, z);
  }, R.useMemo = function(s, z) {
    return L.H.useMemo(s, z);
  }, R.useOptimistic = function(s, z) {
    return L.H.useOptimistic(s, z);
  }, R.useReducer = function(s, z, x) {
    return L.H.useReducer(s, z, x);
  }, R.useRef = function(s) {
    return L.H.useRef(s);
  }, R.useState = function(s) {
    return L.H.useState(s);
  }, R.useSyncExternalStore = function(s, z, x) {
    return L.H.useSyncExternalStore(
      s,
      z,
      x
    );
  }, R.useTransition = function() {
    return L.H.useTransition();
  }, R.version = "19.2.5", R;
}
var Sr;
function df() {
  return Sr || (Sr = 1, of.exports = lh()), of.exports;
}
var sf = { exports: {} }, ql = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr;
function th() {
  if (zr) return ql;
  zr = 1;
  var T = df();
  function il(D) {
    var E = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var k = 2; k < arguments.length; k++)
        E += "&args[]=" + encodeURIComponent(arguments[k]);
    }
    return "Minified React error #" + D + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function j() {
  }
  var m = {
    d: {
      f: j,
      r: function() {
        throw Error(il(522));
      },
      D: j,
      C: j,
      L: j,
      m: j,
      X: j,
      S: j,
      M: j
    },
    p: 0,
    findDOMNode: null
  }, J = Symbol.for("react.portal");
  function ml(D, E, k) {
    var N = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: J,
      key: N == null ? null : "" + N,
      children: D,
      containerInfo: E,
      implementation: k
    };
  }
  var P = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function yl(D, E) {
    if (D === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m, ql.createPortal = function(D, E) {
    var k = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(il(299));
    return ml(D, E, null, k);
  }, ql.flushSync = function(D) {
    var E = P.T, k = m.p;
    try {
      if (P.T = null, m.p = 2, D) return D();
    } finally {
      P.T = E, m.p = k, m.d.f();
    }
  }, ql.preconnect = function(D, E) {
    typeof D == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, m.d.C(D, E));
  }, ql.prefetchDNS = function(D) {
    typeof D == "string" && m.d.D(D);
  }, ql.preinit = function(D, E) {
    if (typeof D == "string" && E && typeof E.as == "string") {
      var k = E.as, N = yl(k, E.crossOrigin), cl = typeof E.integrity == "string" ? E.integrity : void 0, Al = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      k === "style" ? m.d.S(
        D,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: N,
          integrity: cl,
          fetchPriority: Al
        }
      ) : k === "script" && m.d.X(D, {
        crossOrigin: N,
        integrity: cl,
        fetchPriority: Al,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, ql.preinitModule = function(D, E) {
    if (typeof D == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var k = yl(
            E.as,
            E.crossOrigin
          );
          m.d.M(D, {
            crossOrigin: k,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && m.d.M(D);
  }, ql.preload = function(D, E) {
    if (typeof D == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var k = E.as, N = yl(k, E.crossOrigin);
      m.d.L(D, k, {
        crossOrigin: N,
        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0,
        type: typeof E.type == "string" ? E.type : void 0,
        fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
        referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
        imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
        imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
        media: typeof E.media == "string" ? E.media : void 0
      });
    }
  }, ql.preloadModule = function(D, E) {
    if (typeof D == "string")
      if (E) {
        var k = yl(E.as, E.crossOrigin);
        m.d.m(D, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: k,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else m.d.m(D);
  }, ql.requestFormReset = function(D) {
    m.d.r(D);
  }, ql.unstable_batchedUpdates = function(D, E) {
    return D(E);
  }, ql.useFormState = function(D, E, k) {
    return P.H.useFormState(D, E, k);
  }, ql.useFormStatus = function() {
    return P.H.useHostTransitionStatus();
  }, ql.version = "19.2.5", ql;
}
var Er;
function ah() {
  if (Er) return sf.exports;
  Er = 1;
  function T() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
      } catch (il) {
        console.error(il);
      }
  }
  return T(), sf.exports = th(), sf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr;
function eh() {
  if (Tr) return Su;
  Tr = 1;
  var T = Pv(), il = df(), j = ah();
  function m(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function J(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function ml(l) {
    var t = l, a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function P(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function yl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function D(l) {
    if (ml(l) !== l)
      throw Error(m(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (t = ml(l), t === null) throw Error(m(188));
      return t !== l ? null : l;
    }
    for (var a = l, e = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (e = u.return, e !== null) {
          a = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === a) return D(u), l;
          if (n === e) return D(u), t;
          n = n.sibling;
        }
        throw Error(m(188));
      }
      if (a.return !== e.return) a = u, e = n;
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === a) {
            i = !0, a = u, e = n;
            break;
          }
          if (c === e) {
            i = !0, e = u, a = n;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === a) {
              i = !0, a = n, e = u;
              break;
            }
            if (c === e) {
              i = !0, e = n, a = u;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(m(189));
        }
      }
      if (a.alternate !== e) throw Error(m(190));
    }
    if (a.tag !== 3) throw Error(m(188));
    return a.stateNode.current === a ? l : t;
  }
  function k(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = k(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var N = Object.assign, cl = Symbol.for("react.element"), Al = Symbol.for("react.transitional.element"), Ol = Symbol.for("react.portal"), Ml = Symbol.for("react.fragment"), Gl = Symbol.for("react.strict_mode"), xl = Symbol.for("react.profiler"), kt = Symbol.for("react.consumer"), jl = Symbol.for("react.context"), ct = Symbol.for("react.forward_ref"), Et = Symbol.for("react.suspense"), Xl = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), Ql = Symbol.for("react.lazy"), Tt = Symbol.for("react.activity"), Ga = Symbol.for("react.memo_cache_sentinel"), At = Symbol.iterator;
  function Zl(l) {
    return l === null || typeof l != "object" ? null : (l = At && l[At] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Sa = Symbol.for("react.client.reference");
  function Dt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Sa ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Ml:
        return "Fragment";
      case xl:
        return "Profiler";
      case Gl:
        return "StrictMode";
      case Et:
        return "Suspense";
      case Xl:
        return "SuspenseList";
      case Tt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Ol:
          return "Portal";
        case jl:
          return l.displayName || "Context";
        case kt:
          return (l._context.displayName || "Context") + ".Consumer";
        case ct:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case L:
          return t = l.displayName || null, t !== null ? t : Dt(l.type) || "Memo";
        case Ql:
          t = l._payload, l = l._init;
          try {
            return Dt(l(t));
          } catch {
          }
      }
    return null;
  }
  var bt = Array.isArray, b = il.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = j.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, al = [], fl = -1;
  function s(l) {
    return { current: l };
  }
  function z(l) {
    0 > fl || (l.current = al[fl], al[fl] = null, fl--);
  }
  function x(l, t) {
    fl++, al[fl] = l.current, l.current = t;
  }
  var O = s(null), q = s(null), G = s(null), I = s(null);
  function Yl(l, t) {
    switch (x(G, t), x(q, l), x(O, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Y0(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Y0(t), l = B0(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    z(O), x(O, l);
  }
  function gl() {
    z(O), z(q), z(G);
  }
  function _e(l) {
    l.memoizedState !== null && x(I, l);
    var t = O.current, a = B0(t, l.type);
    t !== a && (x(q, l), x(O, a));
  }
  function zu(l) {
    q.current === l && (z(O), z(q)), I.current === l && (z(I), mu._currentValue = H);
  }
  var Gn, vf;
  function za(l) {
    if (Gn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Gn = t && t[1] || "", vf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Gn + l + vf;
  }
  var Xn = !1;
  function Qn(l, t) {
    if (!l || Xn) return "";
    Xn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var S = function() {
                throw Error();
              };
              if (Object.defineProperty(S.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(S, []);
                } catch (y) {
                  var h = y;
                }
                Reflect.construct(l, [], S);
              } else {
                try {
                  S.call();
                } catch (y) {
                  h = y;
                }
                l.call(S.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (y) {
                h = y;
              }
              (S = l()) && typeof S.catch == "function" && S.catch(function() {
              });
            }
          } catch (y) {
            if (y && h && typeof y.stack == "string")
              return [y.stack, h.stack];
          }
          return [null, null];
        }
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        e.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = e.DetermineComponentFrameRoot(), i = n[0], c = n[1];
      if (i && c) {
        var f = i.split(`
`), v = c.split(`
`);
        for (u = e = 0; e < f.length && !f[e].includes("DetermineComponentFrameRoot"); )
          e++;
        for (; u < v.length && !v[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (e === f.length || u === v.length)
          for (e = f.length - 1, u = v.length - 1; 1 <= e && 0 <= u && f[e] !== v[u]; )
            u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (f[e] !== v[u]) {
            if (e !== 1 || u !== 1)
              do
                if (e--, u--, 0 > u || f[e] !== v[u]) {
                  var g = `
` + f[e].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      Xn = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? za(a) : "";
  }
  function _r(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return za(l.type);
      case 16:
        return za("Lazy");
      case 13:
        return l.child !== t && t !== null ? za("Suspense Fallback") : za("Suspense");
      case 19:
        return za("SuspenseList");
      case 0:
      case 15:
        return Qn(l.type, !1);
      case 11:
        return Qn(l.type.render, !1);
      case 1:
        return Qn(l.type, !0);
      case 31:
        return za("Activity");
      default:
        return "";
    }
  }
  function hf(l) {
    try {
      var t = "", a = null;
      do
        t += _r(l, a), a = l, l = l.return;
      while (l);
      return t;
    } catch (e) {
      return `
Error generating stack: ` + e.message + `
` + e.stack;
    }
  }
  var Zn = Object.prototype.hasOwnProperty, Vn = T.unstable_scheduleCallback, Ln = T.unstable_cancelCallback, Or = T.unstable_shouldYield, Mr = T.unstable_requestPaint, Fl = T.unstable_now, Dr = T.unstable_getCurrentPriorityLevel, mf = T.unstable_ImmediatePriority, yf = T.unstable_UserBlockingPriority, Eu = T.unstable_NormalPriority, Ur = T.unstable_LowPriority, gf = T.unstable_IdlePriority, wr = T.log, Nr = T.unstable_setDisableYieldValue, Oe = null, Il = null;
  function Wt(l) {
    if (typeof wr == "function" && Nr(l), Il && typeof Il.setStrictMode == "function")
      try {
        Il.setStrictMode(Oe, l);
      } catch {
      }
  }
  var Pl = Math.clz32 ? Math.clz32 : Cr, Hr = Math.log, Rr = Math.LN2;
  function Cr(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Hr(l) / Rr | 0) | 0;
  }
  var Tu = 256, Au = 262144, xu = 4194304;
  function Ea(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function _u(l, t, a) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var u = 0, n = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var c = e & 134217727;
    return c !== 0 ? (e = c & ~n, e !== 0 ? u = Ea(e) : (i &= c, i !== 0 ? u = Ea(i) : a || (a = c & ~l, a !== 0 && (u = Ea(a))))) : (c = e & ~n, c !== 0 ? u = Ea(c) : i !== 0 ? u = Ea(i) : a || (a = e & ~l, a !== 0 && (u = Ea(a)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : u;
  }
  function Me(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function jr(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function bf() {
    var l = xu;
    return xu <<= 1, (xu & 62914560) === 0 && (xu = 4194304), l;
  }
  function Kn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function De(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function qr(l, t, a, e, u, n) {
    var i = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var c = l.entanglements, f = l.expirationTimes, v = l.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var g = 31 - Pl(a), S = 1 << g;
      c[g] = 0, f[g] = -1;
      var h = v[g];
      if (h !== null)
        for (v[g] = null, g = 0; g < h.length; g++) {
          var y = h[g];
          y !== null && (y.lane &= -536870913);
        }
      a &= ~S;
    }
    e !== 0 && pf(l, e, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function pf(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var e = 31 - Pl(t);
    l.entangledLanes |= t, l.entanglements[e] = l.entanglements[e] | 1073741824 | a & 261930;
  }
  function Sf(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var e = 31 - Pl(a), u = 1 << e;
      u & t | l[e] & t && (l[e] |= t), a &= ~u;
    }
  }
  function zf(l, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Jn(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Jn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function kn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ef() {
    var l = A.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : fr(l.type));
  }
  function Tf(l, t) {
    var a = A.p;
    try {
      return A.p = l, t();
    } finally {
      A.p = a;
    }
  }
  var $t = Math.random().toString(36).slice(2), wl = "__reactFiber$" + $t, Vl = "__reactProps$" + $t, Xa = "__reactContainer$" + $t, Wn = "__reactEvents$" + $t, Yr = "__reactListeners$" + $t, Br = "__reactHandles$" + $t, Af = "__reactResources$" + $t, Ue = "__reactMarker$" + $t;
  function $n(l) {
    delete l[wl], delete l[Vl], delete l[Wn], delete l[Yr], delete l[Br];
  }
  function Qa(l) {
    var t = l[wl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[Xa] || a[wl]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (l = K0(l); l !== null; ) {
            if (a = l[wl]) return a;
            l = K0(l);
          }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function Za(l) {
    if (l = l[wl] || l[Xa]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function we(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(m(33));
  }
  function Va(l) {
    var t = l[Af];
    return t || (t = l[Af] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Dl(l) {
    l[Ue] = !0;
  }
  var xf = /* @__PURE__ */ new Set(), _f = {};
  function Ta(l, t) {
    La(l, t), La(l + "Capture", t);
  }
  function La(l, t) {
    for (_f[l] = t, l = 0; l < t.length; l++)
      xf.add(t[l]);
  }
  var Gr = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Of = {}, Mf = {};
  function Xr(l) {
    return Zn.call(Mf, l) ? !0 : Zn.call(Of, l) ? !1 : Gr.test(l) ? Mf[l] = !0 : (Of[l] = !0, !1);
  }
  function Ou(l, t, a) {
    if (Xr(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var e = t.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Mu(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Ut(l, t, a, e) {
    if (e === null) l.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + e);
    }
  }
  function ft(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Df(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Qr(l, t, a) {
    var e = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
      var u = e.get, n = e.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(i) {
          a = "" + i, n.call(this, i);
        }
      }), Object.defineProperty(l, t, {
        enumerable: e.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(i) {
          a = "" + i;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Fn(l) {
    if (!l._valueTracker) {
      var t = Df(l) ? "checked" : "value";
      l._valueTracker = Qr(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Uf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), e = "";
    return l && (e = Df(l) ? l.checked ? "true" : "false" : l.value), l = e, l !== a ? (t.setValue(l), !0) : !1;
  }
  function Du(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Zr = /[\n"\\]/g;
  function ot(l) {
    return l.replace(
      Zr,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function In(l, t, a, e, u, n, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ft(t)) : l.value !== "" + ft(t) && (l.value = "" + ft(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? Pn(l, i, ft(t)) : a != null ? Pn(l, i, ft(a)) : e != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ft(c) : l.removeAttribute("name");
  }
  function wf(l, t, a, e, u, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        Fn(l);
        return;
      }
      a = a != null ? "" + ft(a) : "", t = t != null ? "" + ft(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    e = e ?? u, e = typeof e != "function" && typeof e != "symbol" && !!e, l.checked = c ? l.checked : !!e, l.defaultChecked = !!e, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), Fn(l);
  }
  function Pn(l, t, a) {
    t === "number" && Du(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function Ka(l, t, a, e) {
    if (l = l.options, t) {
      t = {};
      for (var u = 0; u < a.length; u++)
        t["$" + a[u]] = !0;
      for (a = 0; a < l.length; a++)
        u = t.hasOwnProperty("$" + l[a].value), l[a].selected !== u && (l[a].selected = u), u && e && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + ft(a), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === a) {
          l[u].selected = !0, e && (l[u].defaultSelected = !0);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Nf(l, t, a) {
    if (t != null && (t = "" + ft(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ft(a) : "";
  }
  function Hf(l, t, a, e) {
    if (t == null) {
      if (e != null) {
        if (a != null) throw Error(m(92));
        if (bt(e)) {
          if (1 < e.length) throw Error(m(93));
          e = e[0];
        }
        a = e;
      }
      a == null && (a = ""), t = a;
    }
    a = ft(t), l.defaultValue = a, e = l.textContent, e === a && e !== "" && e !== null && (l.value = e), Fn(l);
  }
  function Ja(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Vr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Rf(l, t, a) {
    var e = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? e ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : e ? l.setProperty(t, a) : typeof a != "number" || a === 0 || Vr.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function Cf(l, t, a) {
    if (t != null && typeof t != "object")
      throw Error(m(62));
    if (l = l.style, a != null) {
      for (var e in a)
        !a.hasOwnProperty(e) || t != null && t.hasOwnProperty(e) || (e.indexOf("--") === 0 ? l.setProperty(e, "") : e === "float" ? l.cssFloat = "" : l[e] = "");
      for (var u in t)
        e = t[u], t.hasOwnProperty(u) && a[u] !== e && Rf(l, u, e);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Rf(l, n, t[n]);
  }
  function li(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Lr = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Kr = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Uu(l) {
    return Kr.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function wt() {
  }
  var ti = null;
  function ai(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var ka = null, Wa = null;
  function jf(l) {
    var t = Za(l);
    if (t && (l = t.stateNode)) {
      var a = l[Vl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (In(
            l,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + ot(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var e = a[t];
              if (e !== l && e.form === l.form) {
                var u = e[Vl] || null;
                if (!u) throw Error(m(90));
                In(
                  e,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              e = a[t], e.form === l.form && Uf(e);
          }
          break l;
        case "textarea":
          Nf(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && Ka(l, !!a.multiple, t, !1);
      }
    }
  }
  var ei = !1;
  function qf(l, t, a) {
    if (ei) return l(t, a);
    ei = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (ei = !1, (ka !== null || Wa !== null) && (bn(), ka && (t = ka, l = Wa, Wa = ka = null, jf(t), l)))
        for (t = 0; t < l.length; t++) jf(l[t]);
    }
  }
  function Ne(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[Vl] || null;
    if (e === null) return null;
    a = e[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (e = !e.disabled) || (l = l.type, e = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !e;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function")
      throw Error(
        m(231, t, typeof a)
      );
    return a;
  }
  var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ui = !1;
  if (Nt)
    try {
      var He = {};
      Object.defineProperty(He, "passive", {
        get: function() {
          ui = !0;
        }
      }), window.addEventListener("test", He, He), window.removeEventListener("test", He, He);
    } catch {
      ui = !1;
    }
  var Ft = null, ni = null, wu = null;
  function Yf() {
    if (wu) return wu;
    var l, t = ni, a = t.length, e, u = "value" in Ft ? Ft.value : Ft.textContent, n = u.length;
    for (l = 0; l < a && t[l] === u[l]; l++) ;
    var i = a - l;
    for (e = 1; e <= i && t[a - e] === u[n - e]; e++) ;
    return wu = u.slice(l, 1 < e ? 1 - e : void 0);
  }
  function Nu(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Hu() {
    return !0;
  }
  function Bf() {
    return !1;
  }
  function Ll(l) {
    function t(a, e, u, n, i) {
      this._reactName = a, this._targetInst = u, this.type = e, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Hu : Bf, this.isPropagationStopped = Bf, this;
    }
    return N(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Hu);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Hu);
      },
      persist: function() {
      },
      isPersistent: Hu
    }), t;
  }
  var Aa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ru = Ll(Aa), Re = N({}, Aa, { view: 0, detail: 0 }), Jr = Ll(Re), ii, ci, Ce, Cu = N({}, Re, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: oi,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ce && (Ce && l.type === "mousemove" ? (ii = l.screenX - Ce.screenX, ci = l.screenY - Ce.screenY) : ci = ii = 0, Ce = l), ii);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ci;
    }
  }), Gf = Ll(Cu), kr = N({}, Cu, { dataTransfer: 0 }), Wr = Ll(kr), $r = N({}, Re, { relatedTarget: 0 }), fi = Ll($r), Fr = N({}, Aa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ir = Ll(Fr), Pr = N({}, Aa, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), ld = Ll(Pr), td = N({}, Aa, { data: 0 }), Xf = Ll(td), ad = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, ed = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ud = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function nd(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = ud[l]) ? !!t[l] : !1;
  }
  function oi() {
    return nd;
  }
  var id = N({}, Re, {
    key: function(l) {
      if (l.key) {
        var t = ad[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Nu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? ed[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: oi,
    charCode: function(l) {
      return l.type === "keypress" ? Nu(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Nu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), cd = Ll(id), fd = N({}, Cu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Qf = Ll(fd), od = N({}, Re, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: oi
  }), sd = Ll(od), rd = N({}, Aa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), dd = Ll(rd), vd = N({}, Cu, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), hd = Ll(vd), md = N({}, Aa, {
    newState: 0,
    oldState: 0
  }), yd = Ll(md), gd = [9, 13, 27, 32], si = Nt && "CompositionEvent" in window, je = null;
  Nt && "documentMode" in document && (je = document.documentMode);
  var bd = Nt && "TextEvent" in window && !je, Zf = Nt && (!si || je && 8 < je && 11 >= je), Vf = " ", Lf = !1;
  function Kf(l, t) {
    switch (l) {
      case "keyup":
        return gd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Jf(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var $a = !1;
  function pd(l, t) {
    switch (l) {
      case "compositionend":
        return Jf(t);
      case "keypress":
        return t.which !== 32 ? null : (Lf = !0, Vf);
      case "textInput":
        return l = t.data, l === Vf && Lf ? null : l;
      default:
        return null;
    }
  }
  function Sd(l, t) {
    if ($a)
      return l === "compositionend" || !si && Kf(l, t) ? (l = Yf(), wu = ni = Ft = null, $a = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Zf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var zd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function kf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!zd[l.type] : t === "textarea";
  }
  function Wf(l, t, a, e) {
    ka ? Wa ? Wa.push(e) : Wa = [e] : ka = e, t = xn(t, "onChange"), 0 < t.length && (a = new Ru(
      "onChange",
      "change",
      null,
      a,
      e
    ), l.push({ event: a, listeners: t }));
  }
  var qe = null, Ye = null;
  function Ed(l) {
    N0(l, 0);
  }
  function ju(l) {
    var t = we(l);
    if (Uf(t)) return l;
  }
  function $f(l, t) {
    if (l === "change") return t;
  }
  var Ff = !1;
  if (Nt) {
    var ri;
    if (Nt) {
      var di = "oninput" in document;
      if (!di) {
        var If = document.createElement("div");
        If.setAttribute("oninput", "return;"), di = typeof If.oninput == "function";
      }
      ri = di;
    } else ri = !1;
    Ff = ri && (!document.documentMode || 9 < document.documentMode);
  }
  function Pf() {
    qe && (qe.detachEvent("onpropertychange", lo), Ye = qe = null);
  }
  function lo(l) {
    if (l.propertyName === "value" && ju(Ye)) {
      var t = [];
      Wf(
        t,
        Ye,
        l,
        ai(l)
      ), qf(Ed, t);
    }
  }
  function Td(l, t, a) {
    l === "focusin" ? (Pf(), qe = t, Ye = a, qe.attachEvent("onpropertychange", lo)) : l === "focusout" && Pf();
  }
  function Ad(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return ju(Ye);
  }
  function xd(l, t) {
    if (l === "click") return ju(t);
  }
  function _d(l, t) {
    if (l === "input" || l === "change")
      return ju(t);
  }
  function Od(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var lt = typeof Object.is == "function" ? Object.is : Od;
  function Be(l, t) {
    if (lt(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(l), e = Object.keys(t);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!Zn.call(t, u) || !lt(l[u], t[u]))
        return !1;
    }
    return !0;
  }
  function to(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ao(l, t) {
    var a = to(l);
    l = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (e = l + a.textContent.length, l <= t && e >= t)
          return { node: a, offset: t - l };
        l = e;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = to(a);
    }
  }
  function eo(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? eo(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function uo(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Du(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Du(l.document);
    }
    return t;
  }
  function vi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Md = Nt && "documentMode" in document && 11 >= document.documentMode, Fa = null, hi = null, Ge = null, mi = !1;
  function no(l, t, a) {
    var e = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    mi || Fa == null || Fa !== Du(e) || (e = Fa, "selectionStart" in e && vi(e) ? e = { start: e.selectionStart, end: e.selectionEnd } : (e = (e.ownerDocument && e.ownerDocument.defaultView || window).getSelection(), e = {
      anchorNode: e.anchorNode,
      anchorOffset: e.anchorOffset,
      focusNode: e.focusNode,
      focusOffset: e.focusOffset
    }), Ge && Be(Ge, e) || (Ge = e, e = xn(hi, "onSelect"), 0 < e.length && (t = new Ru(
      "onSelect",
      "select",
      null,
      t,
      a
    ), l.push({ event: t, listeners: e }), t.target = Fa)));
  }
  function xa(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var Ia = {
    animationend: xa("Animation", "AnimationEnd"),
    animationiteration: xa("Animation", "AnimationIteration"),
    animationstart: xa("Animation", "AnimationStart"),
    transitionrun: xa("Transition", "TransitionRun"),
    transitionstart: xa("Transition", "TransitionStart"),
    transitioncancel: xa("Transition", "TransitionCancel"),
    transitionend: xa("Transition", "TransitionEnd")
  }, yi = {}, io = {};
  Nt && (io = document.createElement("div").style, "AnimationEvent" in window || (delete Ia.animationend.animation, delete Ia.animationiteration.animation, delete Ia.animationstart.animation), "TransitionEvent" in window || delete Ia.transitionend.transition);
  function _a(l) {
    if (yi[l]) return yi[l];
    if (!Ia[l]) return l;
    var t = Ia[l], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in io)
        return yi[l] = t[a];
    return l;
  }
  var co = _a("animationend"), fo = _a("animationiteration"), oo = _a("animationstart"), Dd = _a("transitionrun"), Ud = _a("transitionstart"), wd = _a("transitioncancel"), so = _a("transitionend"), ro = /* @__PURE__ */ new Map(), gi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  gi.push("scrollEnd");
  function pt(l, t) {
    ro.set(l, t), Ta(t, [l]);
  }
  var qu = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, st = [], Pa = 0, bi = 0;
  function Yu() {
    for (var l = Pa, t = bi = Pa = 0; t < l; ) {
      var a = st[t];
      st[t++] = null;
      var e = st[t];
      st[t++] = null;
      var u = st[t];
      st[t++] = null;
      var n = st[t];
      if (st[t++] = null, e !== null && u !== null) {
        var i = e.pending;
        i === null ? u.next = u : (u.next = i.next, i.next = u), e.pending = u;
      }
      n !== 0 && vo(a, u, n);
    }
  }
  function Bu(l, t, a, e) {
    st[Pa++] = l, st[Pa++] = t, st[Pa++] = a, st[Pa++] = e, bi |= e, l.lanes |= e, l = l.alternate, l !== null && (l.lanes |= e);
  }
  function pi(l, t, a, e) {
    return Bu(l, t, a, e), Gu(l);
  }
  function Oa(l, t) {
    return Bu(l, null, null, t), Gu(l);
  }
  function vo(l, t, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var u = !1, n = l.return; n !== null; )
      n.childLanes |= a, e = n.alternate, e !== null && (e.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - Pl(a), l = n.hiddenUpdates, e = l[u], e === null ? l[u] = [t] : e.push(t), t.lane = a | 536870912), n) : null;
  }
  function Gu(l) {
    if (50 < fu)
      throw fu = 0, Mc = null, Error(m(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var le = {};
  function Nd(l, t, a, e) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = e, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function tt(l, t, a, e) {
    return new Nd(l, t, a, e);
  }
  function Si(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Ht(l, t) {
    var a = l.alternate;
    return a === null ? (a = tt(
      l.tag,
      t,
      l.key,
      l.mode
    ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function ho(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Xu(l, t, a, e, u, n) {
    var i = 0;
    if (e = l, typeof l == "function") Si(l) && (i = 1);
    else if (typeof l == "string")
      i = qv(
        l,
        a,
        O.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Tt:
          return l = tt(31, a, t, u), l.elementType = Tt, l.lanes = n, l;
        case Ml:
          return Ma(a.children, u, n, t);
        case Gl:
          i = 8, u |= 24;
          break;
        case xl:
          return l = tt(12, a, t, u | 2), l.elementType = xl, l.lanes = n, l;
        case Et:
          return l = tt(13, a, t, u), l.elementType = Et, l.lanes = n, l;
        case Xl:
          return l = tt(19, a, t, u), l.elementType = Xl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case jl:
                i = 10;
                break l;
              case kt:
                i = 9;
                break l;
              case ct:
                i = 11;
                break l;
              case L:
                i = 14;
                break l;
              case Ql:
                i = 16, e = null;
                break l;
            }
          i = 29, a = Error(
            m(130, l === null ? "null" : typeof l, "")
          ), e = null;
      }
    return t = tt(i, a, t, u), t.elementType = l, t.type = e, t.lanes = n, t;
  }
  function Ma(l, t, a, e) {
    return l = tt(7, l, e, t), l.lanes = a, l;
  }
  function zi(l, t, a) {
    return l = tt(6, l, null, t), l.lanes = a, l;
  }
  function mo(l) {
    var t = tt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Ei(l, t, a) {
    return t = tt(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var yo = /* @__PURE__ */ new WeakMap();
  function rt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = yo.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: hf(t)
      }, yo.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: hf(t)
    };
  }
  var te = [], ae = 0, Qu = null, Xe = 0, dt = [], vt = 0, It = null, xt = 1, _t = "";
  function Rt(l, t) {
    te[ae++] = Xe, te[ae++] = Qu, Qu = l, Xe = t;
  }
  function go(l, t, a) {
    dt[vt++] = xt, dt[vt++] = _t, dt[vt++] = It, It = l;
    var e = xt;
    l = _t;
    var u = 32 - Pl(e) - 1;
    e &= ~(1 << u), a += 1;
    var n = 32 - Pl(t) + u;
    if (30 < n) {
      var i = u - u % 5;
      n = (e & (1 << i) - 1).toString(32), e >>= i, u -= i, xt = 1 << 32 - Pl(t) + u | a << u | e, _t = n + l;
    } else
      xt = 1 << n | a << u | e, _t = l;
  }
  function Ti(l) {
    l.return !== null && (Rt(l, 1), go(l, 1, 0));
  }
  function Ai(l) {
    for (; l === Qu; )
      Qu = te[--ae], te[ae] = null, Xe = te[--ae], te[ae] = null;
    for (; l === It; )
      It = dt[--vt], dt[vt] = null, _t = dt[--vt], dt[vt] = null, xt = dt[--vt], dt[vt] = null;
  }
  function bo(l, t) {
    dt[vt++] = xt, dt[vt++] = _t, dt[vt++] = It, xt = t.id, _t = t.overflow, It = l;
  }
  var Nl = null, sl = null, K = !1, Pt = null, ht = !1, xi = Error(m(519));
  function la(l) {
    var t = Error(
      m(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Qe(rt(t, l)), xi;
  }
  function po(l) {
    var t = l.stateNode, a = l.type, e = l.memoizedProps;
    switch (t[wl] = l, t[Vl] = e, a) {
      case "dialog":
        Q("cancel", t), Q("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Q("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < su.length; a++)
          Q(su[a], t);
        break;
      case "source":
        Q("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Q("error", t), Q("load", t);
        break;
      case "details":
        Q("toggle", t);
        break;
      case "input":
        Q("invalid", t), wf(
          t,
          e.value,
          e.defaultValue,
          e.checked,
          e.defaultChecked,
          e.type,
          e.name,
          !0
        );
        break;
      case "select":
        Q("invalid", t);
        break;
      case "textarea":
        Q("invalid", t), Hf(t, e.value, e.defaultValue, e.children);
    }
    a = e.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || e.suppressHydrationWarning === !0 || j0(t.textContent, a) ? (e.popover != null && (Q("beforetoggle", t), Q("toggle", t)), e.onScroll != null && Q("scroll", t), e.onScrollEnd != null && Q("scrollend", t), e.onClick != null && (t.onclick = wt), t = !0) : t = !1, t || la(l, !0);
  }
  function So(l) {
    for (Nl = l.return; Nl; )
      switch (Nl.tag) {
        case 5:
        case 31:
        case 13:
          ht = !1;
          return;
        case 27:
        case 3:
          ht = !0;
          return;
        default:
          Nl = Nl.return;
      }
  }
  function ee(l) {
    if (l !== Nl) return !1;
    if (!K) return So(l), K = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Zc(l.type, l.memoizedProps)), a = !a), a && sl && la(l), So(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      sl = L0(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      sl = L0(l);
    } else
      t === 27 ? (t = sl, ha(l.type) ? (l = kc, kc = null, sl = l) : sl = t) : sl = Nl ? yt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Da() {
    sl = Nl = null, K = !1;
  }
  function _i() {
    var l = Pt;
    return l !== null && (Wl === null ? Wl = l : Wl.push.apply(
      Wl,
      l
    ), Pt = null), l;
  }
  function Qe(l) {
    Pt === null ? Pt = [l] : Pt.push(l);
  }
  var Oi = s(null), Ua = null, Ct = null;
  function ta(l, t, a) {
    x(Oi, t._currentValue), t._currentValue = a;
  }
  function jt(l) {
    l._currentValue = Oi.current, z(Oi);
  }
  function Mi(l, t, a) {
    for (; l !== null; ) {
      var e = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, e !== null && (e.childLanes |= t)) : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function Di(l, t, a, e) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var f = 0; f < t.length; f++)
            if (c.context === t[f]) {
              n.lanes |= a, c = n.alternate, c !== null && (c.lanes |= a), Mi(
                n.return,
                a,
                l
              ), e || (i = null);
              break l;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (i = u.return, i === null) throw Error(m(341));
        i.lanes |= a, n = i.alternate, n !== null && (n.lanes |= a), Mi(i, a, l), i = null;
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (u = i.sibling, u !== null) {
            u.return = i.return, i = u;
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function ue(l, t, a, e) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(m(387));
        if (i = i.memoizedProps, i !== null) {
          var c = u.type;
          lt(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (u === I.current) {
        if (i = u.alternate, i === null) throw Error(m(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(mu) : l = [mu]);
      }
      u = u.return;
    }
    l !== null && Di(
      t,
      l,
      a,
      e
    ), t.flags |= 262144;
  }
  function Zu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!lt(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function wa(l) {
    Ua = l, Ct = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Hl(l) {
    return zo(Ua, l);
  }
  function Vu(l, t) {
    return Ua === null && wa(l), zo(l, t);
  }
  function zo(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Ct === null) {
      if (l === null) throw Error(m(308));
      Ct = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Ct = Ct.next = t;
    return a;
  }
  var Hd = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, e) {
        l.push(e);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(a) {
        return a();
      });
    };
  }, Rd = T.unstable_scheduleCallback, Cd = T.unstable_NormalPriority, Sl = {
    $$typeof: jl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ui() {
    return {
      controller: new Hd(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ze(l) {
    l.refCount--, l.refCount === 0 && Rd(Cd, function() {
      l.controller.abort();
    });
  }
  var Ve = null, wi = 0, ne = 0, ie = null;
  function jd(l, t) {
    if (Ve === null) {
      var a = Ve = [];
      wi = 0, ne = Rc(), ie = {
        status: "pending",
        value: void 0,
        then: function(e) {
          a.push(e);
        }
      };
    }
    return wi++, t.then(Eo, Eo), t;
  }
  function Eo() {
    if (--wi === 0 && Ve !== null) {
      ie !== null && (ie.status = "fulfilled");
      var l = Ve;
      Ve = null, ne = 0, ie = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function qd(l, t) {
    var a = [], e = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        a.push(u);
      }
    };
    return l.then(
      function() {
        e.status = "fulfilled", e.value = t;
        for (var u = 0; u < a.length; u++) (0, a[u])(t);
      },
      function(u) {
        for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++)
          (0, a[u])(void 0);
      }
    ), e;
  }
  var To = b.S;
  b.S = function(l, t) {
    i0 = Fl(), typeof t == "object" && t !== null && typeof t.then == "function" && jd(l, t), To !== null && To(l, t);
  };
  var Na = s(null);
  function Ni() {
    var l = Na.current;
    return l !== null ? l : ol.pooledCache;
  }
  function Lu(l, t) {
    t === null ? x(Na, Na.current) : x(Na, t.pool);
  }
  function Ao() {
    var l = Ni();
    return l === null ? null : { parent: Sl._currentValue, pool: l };
  }
  var ce = Error(m(460)), Hi = Error(m(474)), Ku = Error(m(542)), Ju = { then: function() {
  } };
  function xo(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function _o(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(wt, wt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Mo(l), l;
      default:
        if (typeof t.status == "string") t.then(wt, wt);
        else {
          if (l = ol, l !== null && 100 < l.shellSuspendCounter)
            throw Error(m(482));
          l = t, l.status = "pending", l.then(
            function(e) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = e;
              }
            },
            function(e) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = e;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Mo(l), l;
        }
        throw Ra = t, ce;
    }
  }
  function Ha(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ra = a, ce) : a;
    }
  }
  var Ra = null;
  function Oo() {
    if (Ra === null) throw Error(m(459));
    var l = Ra;
    return Ra = null, l;
  }
  function Mo(l) {
    if (l === ce || l === Ku)
      throw Error(m(483));
  }
  var fe = null, Le = 0;
  function ku(l) {
    var t = Le;
    return Le += 1, fe === null && (fe = []), _o(fe, l, t);
  }
  function Ke(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function Wu(l, t) {
    throw t.$$typeof === cl ? Error(m(525)) : (l = Object.prototype.toString.call(t), Error(
      m(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Do(l) {
    function t(r, o) {
      if (l) {
        var d = r.deletions;
        d === null ? (r.deletions = [o], r.flags |= 16) : d.push(o);
      }
    }
    function a(r, o) {
      if (!l) return null;
      for (; o !== null; )
        t(r, o), o = o.sibling;
      return null;
    }
    function e(r) {
      for (var o = /* @__PURE__ */ new Map(); r !== null; )
        r.key !== null ? o.set(r.key, r) : o.set(r.index, r), r = r.sibling;
      return o;
    }
    function u(r, o) {
      return r = Ht(r, o), r.index = 0, r.sibling = null, r;
    }
    function n(r, o, d) {
      return r.index = d, l ? (d = r.alternate, d !== null ? (d = d.index, d < o ? (r.flags |= 67108866, o) : d) : (r.flags |= 67108866, o)) : (r.flags |= 1048576, o);
    }
    function i(r) {
      return l && r.alternate === null && (r.flags |= 67108866), r;
    }
    function c(r, o, d, p) {
      return o === null || o.tag !== 6 ? (o = zi(d, r.mode, p), o.return = r, o) : (o = u(o, d), o.return = r, o);
    }
    function f(r, o, d, p) {
      var U = d.type;
      return U === Ml ? g(
        r,
        o,
        d.props.children,
        p,
        d.key
      ) : o !== null && (o.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Ql && Ha(U) === o.type) ? (o = u(o, d.props), Ke(o, d), o.return = r, o) : (o = Xu(
        d.type,
        d.key,
        d.props,
        null,
        r.mode,
        p
      ), Ke(o, d), o.return = r, o);
    }
    function v(r, o, d, p) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== d.containerInfo || o.stateNode.implementation !== d.implementation ? (o = Ei(d, r.mode, p), o.return = r, o) : (o = u(o, d.children || []), o.return = r, o);
    }
    function g(r, o, d, p, U) {
      return o === null || o.tag !== 7 ? (o = Ma(
        d,
        r.mode,
        p,
        U
      ), o.return = r, o) : (o = u(o, d), o.return = r, o);
    }
    function S(r, o, d) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = zi(
          "" + o,
          r.mode,
          d
        ), o.return = r, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Al:
            return d = Xu(
              o.type,
              o.key,
              o.props,
              null,
              r.mode,
              d
            ), Ke(d, o), d.return = r, d;
          case Ol:
            return o = Ei(
              o,
              r.mode,
              d
            ), o.return = r, o;
          case Ql:
            return o = Ha(o), S(r, o, d);
        }
        if (bt(o) || Zl(o))
          return o = Ma(
            o,
            r.mode,
            d,
            null
          ), o.return = r, o;
        if (typeof o.then == "function")
          return S(r, ku(o), d);
        if (o.$$typeof === jl)
          return S(
            r,
            Vu(r, o),
            d
          );
        Wu(r, o);
      }
      return null;
    }
    function h(r, o, d, p) {
      var U = o !== null ? o.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return U !== null ? null : c(r, o, "" + d, p);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Al:
            return d.key === U ? f(r, o, d, p) : null;
          case Ol:
            return d.key === U ? v(r, o, d, p) : null;
          case Ql:
            return d = Ha(d), h(r, o, d, p);
        }
        if (bt(d) || Zl(d))
          return U !== null ? null : g(r, o, d, p, null);
        if (typeof d.then == "function")
          return h(
            r,
            o,
            ku(d),
            p
          );
        if (d.$$typeof === jl)
          return h(
            r,
            o,
            Vu(r, d),
            p
          );
        Wu(r, d);
      }
      return null;
    }
    function y(r, o, d, p, U) {
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return r = r.get(d) || null, c(o, r, "" + p, U);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Al:
            return r = r.get(
              p.key === null ? d : p.key
            ) || null, f(o, r, p, U);
          case Ol:
            return r = r.get(
              p.key === null ? d : p.key
            ) || null, v(o, r, p, U);
          case Ql:
            return p = Ha(p), y(
              r,
              o,
              d,
              p,
              U
            );
        }
        if (bt(p) || Zl(p))
          return r = r.get(d) || null, g(o, r, p, U, null);
        if (typeof p.then == "function")
          return y(
            r,
            o,
            d,
            ku(p),
            U
          );
        if (p.$$typeof === jl)
          return y(
            r,
            o,
            d,
            Vu(o, p),
            U
          );
        Wu(o, p);
      }
      return null;
    }
    function _(r, o, d, p) {
      for (var U = null, W = null, M = o, B = o = 0, V = null; M !== null && B < d.length; B++) {
        M.index > B ? (V = M, M = null) : V = M.sibling;
        var $ = h(
          r,
          M,
          d[B],
          p
        );
        if ($ === null) {
          M === null && (M = V);
          break;
        }
        l && M && $.alternate === null && t(r, M), o = n($, o, B), W === null ? U = $ : W.sibling = $, W = $, M = V;
      }
      if (B === d.length)
        return a(r, M), K && Rt(r, B), U;
      if (M === null) {
        for (; B < d.length; B++)
          M = S(r, d[B], p), M !== null && (o = n(
            M,
            o,
            B
          ), W === null ? U = M : W.sibling = M, W = M);
        return K && Rt(r, B), U;
      }
      for (M = e(M); B < d.length; B++)
        V = y(
          M,
          r,
          B,
          d[B],
          p
        ), V !== null && (l && V.alternate !== null && M.delete(
          V.key === null ? B : V.key
        ), o = n(
          V,
          o,
          B
        ), W === null ? U = V : W.sibling = V, W = V);
      return l && M.forEach(function(pa) {
        return t(r, pa);
      }), K && Rt(r, B), U;
    }
    function w(r, o, d, p) {
      if (d == null) throw Error(m(151));
      for (var U = null, W = null, M = o, B = o = 0, V = null, $ = d.next(); M !== null && !$.done; B++, $ = d.next()) {
        M.index > B ? (V = M, M = null) : V = M.sibling;
        var pa = h(r, M, $.value, p);
        if (pa === null) {
          M === null && (M = V);
          break;
        }
        l && M && pa.alternate === null && t(r, M), o = n(pa, o, B), W === null ? U = pa : W.sibling = pa, W = pa, M = V;
      }
      if ($.done)
        return a(r, M), K && Rt(r, B), U;
      if (M === null) {
        for (; !$.done; B++, $ = d.next())
          $ = S(r, $.value, p), $ !== null && (o = n($, o, B), W === null ? U = $ : W.sibling = $, W = $);
        return K && Rt(r, B), U;
      }
      for (M = e(M); !$.done; B++, $ = d.next())
        $ = y(M, r, B, $.value, p), $ !== null && (l && $.alternate !== null && M.delete($.key === null ? B : $.key), o = n($, o, B), W === null ? U = $ : W.sibling = $, W = $);
      return l && M.forEach(function(kv) {
        return t(r, kv);
      }), K && Rt(r, B), U;
    }
    function nl(r, o, d, p) {
      if (typeof d == "object" && d !== null && d.type === Ml && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Al:
            l: {
              for (var U = d.key; o !== null; ) {
                if (o.key === U) {
                  if (U = d.type, U === Ml) {
                    if (o.tag === 7) {
                      a(
                        r,
                        o.sibling
                      ), p = u(
                        o,
                        d.props.children
                      ), p.return = r, r = p;
                      break l;
                    }
                  } else if (o.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Ql && Ha(U) === o.type) {
                    a(
                      r,
                      o.sibling
                    ), p = u(o, d.props), Ke(p, d), p.return = r, r = p;
                    break l;
                  }
                  a(r, o);
                  break;
                } else t(r, o);
                o = o.sibling;
              }
              d.type === Ml ? (p = Ma(
                d.props.children,
                r.mode,
                p,
                d.key
              ), p.return = r, r = p) : (p = Xu(
                d.type,
                d.key,
                d.props,
                null,
                r.mode,
                p
              ), Ke(p, d), p.return = r, r = p);
            }
            return i(r);
          case Ol:
            l: {
              for (U = d.key; o !== null; ) {
                if (o.key === U)
                  if (o.tag === 4 && o.stateNode.containerInfo === d.containerInfo && o.stateNode.implementation === d.implementation) {
                    a(
                      r,
                      o.sibling
                    ), p = u(o, d.children || []), p.return = r, r = p;
                    break l;
                  } else {
                    a(r, o);
                    break;
                  }
                else t(r, o);
                o = o.sibling;
              }
              p = Ei(d, r.mode, p), p.return = r, r = p;
            }
            return i(r);
          case Ql:
            return d = Ha(d), nl(
              r,
              o,
              d,
              p
            );
        }
        if (bt(d))
          return _(
            r,
            o,
            d,
            p
          );
        if (Zl(d)) {
          if (U = Zl(d), typeof U != "function") throw Error(m(150));
          return d = U.call(d), w(
            r,
            o,
            d,
            p
          );
        }
        if (typeof d.then == "function")
          return nl(
            r,
            o,
            ku(d),
            p
          );
        if (d.$$typeof === jl)
          return nl(
            r,
            o,
            Vu(r, d),
            p
          );
        Wu(r, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint" ? (d = "" + d, o !== null && o.tag === 6 ? (a(r, o.sibling), p = u(o, d), p.return = r, r = p) : (a(r, o), p = zi(d, r.mode, p), p.return = r, r = p), i(r)) : a(r, o);
    }
    return function(r, o, d, p) {
      try {
        Le = 0;
        var U = nl(
          r,
          o,
          d,
          p
        );
        return fe = null, U;
      } catch (M) {
        if (M === ce || M === Ku) throw M;
        var W = tt(29, M, null, r.mode);
        return W.lanes = p, W.return = r, W;
      } finally {
      }
    };
  }
  var Ca = Do(!0), Uo = Do(!1), aa = !1;
  function Ri(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ci(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ea(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ua(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (e = e.shared, (F & 2) !== 0) {
      var u = e.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), e.pending = t, t = Gu(l), vo(l, null, a), t;
    }
    return Bu(l, e, t, a), Gu(l);
  }
  function Je(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var e = t.lanes;
      e &= l.pendingLanes, a |= e, t.lanes = a, Sf(l, a);
    }
  }
  function ji(l, t) {
    var a = l.updateQueue, e = l.alternate;
    if (e !== null && (e = e.updateQueue, a === e)) {
      var u = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          n === null ? u = n = i : n = n.next = i, a = a.next;
        } while (a !== null);
        n === null ? u = n = t : n = n.next = t;
      } else u = n = t;
      a = {
        baseState: e.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks
      }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var qi = !1;
  function ke() {
    if (qi) {
      var l = ie;
      if (l !== null) throw l;
    }
  }
  function We(l, t, a, e) {
    qi = !1;
    var u = l.updateQueue;
    aa = !1;
    var n = u.firstBaseUpdate, i = u.lastBaseUpdate, c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var f = c, v = f.next;
      f.next = null, i === null ? n = v : i.next = v, i = f;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== i && (c === null ? g.firstBaseUpdate = v : c.next = v, g.lastBaseUpdate = f));
    }
    if (n !== null) {
      var S = u.baseState;
      i = 0, g = v = f = null, c = n;
      do {
        var h = c.lane & -536870913, y = h !== c.lane;
        if (y ? (Z & h) === h : (e & h) === h) {
          h !== 0 && h === ne && (qi = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var _ = l, w = c;
            h = t;
            var nl = a;
            switch (w.tag) {
              case 1:
                if (_ = w.payload, typeof _ == "function") {
                  S = _.call(nl, S, h);
                  break l;
                }
                S = _;
                break l;
              case 3:
                _.flags = _.flags & -65537 | 128;
              case 0:
                if (_ = w.payload, h = typeof _ == "function" ? _.call(nl, S, h) : _, h == null) break l;
                S = N({}, S, h);
                break l;
              case 2:
                aa = !0;
            }
          }
          h = c.callback, h !== null && (l.flags |= 64, y && (l.flags |= 8192), y = u.callbacks, y === null ? u.callbacks = [h] : y.push(h));
        } else
          y = {
            lane: h,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, g === null ? (v = g = y, f = S) : g = g.next = y, i |= h;
        if (c = c.next, c === null) {
          if (c = u.shared.pending, c === null)
            break;
          y = c, c = y.next, y.next = null, u.lastBaseUpdate = y, u.shared.pending = null;
        }
      } while (!0);
      g === null && (f = S), u.baseState = f, u.firstBaseUpdate = v, u.lastBaseUpdate = g, n === null && (u.shared.lanes = 0), oa |= i, l.lanes = i, l.memoizedState = S;
    }
  }
  function wo(l, t) {
    if (typeof l != "function")
      throw Error(m(191, l));
    l.call(t);
  }
  function No(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        wo(a[l], t);
  }
  var oe = s(null), $u = s(0);
  function Ho(l, t) {
    l = Lt, x($u, l), x(oe, t), Lt = l | t.baseLanes;
  }
  function Yi() {
    x($u, Lt), x(oe, oe.current);
  }
  function Bi() {
    Lt = $u.current, z(oe), z($u);
  }
  var at = s(null), mt = null;
  function na(l) {
    var t = l.alternate;
    x(bl, bl.current & 1), x(at, l), mt === null && (t === null || oe.current !== null || t.memoizedState !== null) && (mt = l);
  }
  function Gi(l) {
    x(bl, bl.current), x(at, l), mt === null && (mt = l);
  }
  function Ro(l) {
    l.tag === 22 ? (x(bl, bl.current), x(at, l), mt === null && (mt = l)) : ia();
  }
  function ia() {
    x(bl, bl.current), x(at, at.current);
  }
  function et(l) {
    z(at), mt === l && (mt = null), z(bl);
  }
  var bl = s(0);
  function Fu(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Kc(a) || Jc(a)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var qt = 0, Y = null, el = null, zl = null, Iu = !1, se = !1, ja = !1, Pu = 0, $e = 0, re = null, Yd = 0;
  function vl() {
    throw Error(m(321));
  }
  function Xi(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!lt(l[a], t[a])) return !1;
    return !0;
  }
  function Qi(l, t, a, e, u, n) {
    return qt = n, Y = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, b.H = l === null || l.memoizedState === null ? gs : ec, ja = !1, n = a(e, u), ja = !1, se && (n = jo(
      t,
      a,
      e,
      u
    )), Co(l), n;
  }
  function Co(l) {
    b.H = Pe;
    var t = el !== null && el.next !== null;
    if (qt = 0, zl = el = Y = null, Iu = !1, $e = 0, re = null, t) throw Error(m(300));
    l === null || El || (l = l.dependencies, l !== null && Zu(l) && (El = !0));
  }
  function jo(l, t, a, e) {
    Y = l;
    var u = 0;
    do {
      if (se && (re = null), $e = 0, se = !1, 25 <= u) throw Error(m(301));
      if (u += 1, zl = el = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      b.H = bs, n = t(a, e);
    } while (se);
    return n;
  }
  function Bd() {
    var l = b.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Fe(t) : t, l = l.useState()[0], (el !== null ? el.memoizedState : null) !== l && (Y.flags |= 1024), t;
  }
  function Zi() {
    var l = Pu !== 0;
    return Pu = 0, l;
  }
  function Vi(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function Li(l) {
    if (Iu) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Iu = !1;
    }
    qt = 0, zl = el = Y = null, se = !1, $e = Pu = 0, re = null;
  }
  function Bl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return zl === null ? Y.memoizedState = zl = l : zl = zl.next = l, zl;
  }
  function pl() {
    if (el === null) {
      var l = Y.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = el.next;
    var t = zl === null ? Y.memoizedState : zl.next;
    if (t !== null)
      zl = t, el = l;
    else {
      if (l === null)
        throw Y.alternate === null ? Error(m(467)) : Error(m(310));
      el = l, l = {
        memoizedState: el.memoizedState,
        baseState: el.baseState,
        baseQueue: el.baseQueue,
        queue: el.queue,
        next: null
      }, zl === null ? Y.memoizedState = zl = l : zl = zl.next = l;
    }
    return zl;
  }
  function ln() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fe(l) {
    var t = $e;
    return $e += 1, re === null && (re = []), l = _o(re, l, t), t = Y, (zl === null ? t.memoizedState : zl.next) === null && (t = t.alternate, b.H = t === null || t.memoizedState === null ? gs : ec), l;
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Fe(l);
      if (l.$$typeof === jl) return Hl(l);
    }
    throw Error(m(438, String(l)));
  }
  function Ki(l) {
    var t = null, a = Y.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var e = Y.alternate;
      e !== null && (e = e.updateQueue, e !== null && (e = e.memoCache, e != null && (t = {
        data: e.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = ln(), Y.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(l), e = 0; e < l; e++)
        a[e] = Ga;
    return t.index++, a;
  }
  function Yt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function an(l) {
    var t = pl();
    return Ji(t, el, l);
  }
  function Ji(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(m(311));
    e.lastRenderedReducer = a;
    var u = l.baseQueue, n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        u.next = n.next, n.next = i;
      }
      t.baseQueue = u = n, e.pending = null;
    }
    if (n = l.baseState, u === null) l.memoizedState = n;
    else {
      t = u.next;
      var c = i = null, f = null, v = t, g = !1;
      do {
        var S = v.lane & -536870913;
        if (S !== v.lane ? (Z & S) === S : (qt & S) === S) {
          var h = v.revertLane;
          if (h === 0)
            f !== null && (f = f.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }), S === ne && (g = !0);
          else if ((qt & h) === h) {
            v = v.next, h === ne && (g = !0);
            continue;
          } else
            S = {
              lane: 0,
              revertLane: v.revertLane,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }, f === null ? (c = f = S, i = n) : f = f.next = S, Y.lanes |= h, oa |= h;
          S = v.action, ja && a(n, S), n = v.hasEagerState ? v.eagerState : a(n, S);
        } else
          h = {
            lane: S,
            revertLane: v.revertLane,
            gesture: v.gesture,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null
          }, f === null ? (c = f = h, i = n) : f = f.next = h, Y.lanes |= S, oa |= S;
        v = v.next;
      } while (v !== null && v !== t);
      if (f === null ? i = n : f.next = c, !lt(n, l.memoizedState) && (El = !0, g && (a = ie, a !== null)))
        throw a;
      l.memoizedState = n, l.baseState = i, l.baseQueue = f, e.lastRenderedState = n;
    }
    return u === null && (e.lanes = 0), [l.memoizedState, e.dispatch];
  }
  function ki(l) {
    var t = pl(), a = t.queue;
    if (a === null) throw Error(m(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch, u = a.pending, n = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var i = u = u.next;
      do
        n = l(n, i.action), i = i.next;
      while (i !== u);
      lt(n, t.memoizedState) || (El = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, e];
  }
  function qo(l, t, a) {
    var e = Y, u = pl(), n = K;
    if (n) {
      if (a === void 0) throw Error(m(407));
      a = a();
    } else a = t();
    var i = !lt(
      (el || u).memoizedState,
      a
    );
    if (i && (u.memoizedState = a, El = !0), u = u.queue, Fi(Go.bind(null, e, u, l), [
      l
    ]), u.getSnapshot !== t || i || zl !== null && zl.memoizedState.tag & 1) {
      if (e.flags |= 2048, de(
        9,
        { destroy: void 0 },
        Bo.bind(
          null,
          e,
          u,
          a,
          t
        ),
        null
      ), ol === null) throw Error(m(349));
      n || (qt & 127) !== 0 || Yo(e, t, a);
    }
    return a;
  }
  function Yo(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = Y.updateQueue, t === null ? (t = ln(), Y.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function Bo(l, t, a, e) {
    t.value = a, t.getSnapshot = e, Xo(t) && Qo(l);
  }
  function Go(l, t, a) {
    return a(function() {
      Xo(t) && Qo(l);
    });
  }
  function Xo(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !lt(l, a);
    } catch {
      return !0;
    }
  }
  function Qo(l) {
    var t = Oa(l, 2);
    t !== null && $l(t, l, 2);
  }
  function Wi(l) {
    var t = Bl();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), ja) {
        Wt(!0);
        try {
          a();
        } finally {
          Wt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yt,
      lastRenderedState: l
    }, t;
  }
  function Zo(l, t, a, e) {
    return l.baseState = a, Ji(
      l,
      el,
      typeof e == "function" ? e : Yt
    );
  }
  function Gd(l, t, a, e, u) {
    if (nn(l)) throw Error(m(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          n.listeners.push(i);
        }
      };
      b.T !== null ? a(!0) : n.isTransition = !1, e(n), a = t.pending, a === null ? (n.next = t.pending = n, Vo(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function Vo(l, t) {
    var a = t.action, e = t.payload, u = l.state;
    if (t.isTransition) {
      var n = b.T, i = {};
      b.T = i;
      try {
        var c = a(u, e), f = b.S;
        f !== null && f(i, c), Lo(l, t, c);
      } catch (v) {
        $i(l, t, v);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), b.T = n;
      }
    } else
      try {
        n = a(u, e), Lo(l, t, n);
      } catch (v) {
        $i(l, t, v);
      }
  }
  function Lo(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(e) {
        Ko(l, t, e);
      },
      function(e) {
        return $i(l, t, e);
      }
    ) : Ko(l, t, a);
  }
  function Ko(l, t, a) {
    t.status = "fulfilled", t.value = a, Jo(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, Vo(l, a)));
  }
  function $i(l, t, a) {
    var e = l.pending;
    if (l.pending = null, e !== null) {
      e = e.next;
      do
        t.status = "rejected", t.reason = a, Jo(t), t = t.next;
      while (t !== e);
    }
    l.action = null;
  }
  function Jo(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function ko(l, t) {
    return t;
  }
  function Wo(l, t) {
    if (K) {
      var a = ol.formState;
      if (a !== null) {
        l: {
          var e = Y;
          if (K) {
            if (sl) {
              t: {
                for (var u = sl, n = ht; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (u = yt(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                sl = yt(
                  u.nextSibling
                ), e = u.data === "F!";
                break l;
              }
            }
            la(e);
          }
          e = !1;
        }
        e && (t = a[0]);
      }
    }
    return a = Bl(), a.memoizedState = a.baseState = t, e = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ko,
      lastRenderedState: t
    }, a.queue = e, a = hs.bind(
      null,
      Y,
      e
    ), e.dispatch = a, e = Wi(!1), n = ac.bind(
      null,
      Y,
      !1,
      e.queue
    ), e = Bl(), u = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, e.queue = u, a = Gd.bind(
      null,
      Y,
      u,
      n,
      a
    ), u.dispatch = a, e.memoizedState = l, [t, a, !1];
  }
  function $o(l) {
    var t = pl();
    return Fo(t, el, l);
  }
  function Fo(l, t, a) {
    if (t = Ji(
      l,
      t,
      ko
    )[0], l = an(Yt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var e = Fe(t);
      } catch (i) {
        throw i === ce ? Ku : i;
      }
    else e = t;
    t = pl();
    var u = t.queue, n = u.dispatch;
    return a !== t.memoizedState && (Y.flags |= 2048, de(
      9,
      { destroy: void 0 },
      Xd.bind(null, u, a),
      null
    )), [e, n, l];
  }
  function Xd(l, t) {
    l.action = t;
  }
  function Io(l) {
    var t = pl(), a = el;
    if (a !== null)
      return Fo(t, a, l);
    pl(), t = t.memoizedState, a = pl();
    var e = a.queue.dispatch;
    return a.memoizedState = l, [t, e, !1];
  }
  function de(l, t, a, e) {
    return l = { tag: l, create: a, deps: e, inst: t, next: null }, t = Y.updateQueue, t === null && (t = ln(), Y.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (e = a.next, a.next = l, l.next = e, t.lastEffect = l), l;
  }
  function Po() {
    return pl().memoizedState;
  }
  function en(l, t, a, e) {
    var u = Bl();
    Y.flags |= l, u.memoizedState = de(
      1 | t,
      { destroy: void 0 },
      a,
      e === void 0 ? null : e
    );
  }
  function un(l, t, a, e) {
    var u = pl();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    el !== null && e !== null && Xi(e, el.memoizedState.deps) ? u.memoizedState = de(t, n, a, e) : (Y.flags |= l, u.memoizedState = de(
      1 | t,
      n,
      a,
      e
    ));
  }
  function ls(l, t) {
    en(8390656, 8, l, t);
  }
  function Fi(l, t) {
    un(2048, 8, l, t);
  }
  function Qd(l) {
    Y.flags |= 4;
    var t = Y.updateQueue;
    if (t === null)
      t = ln(), Y.updateQueue = t, t.events = [l];
    else {
      var a = t.events;
      a === null ? t.events = [l] : a.push(l);
    }
  }
  function ts(l) {
    var t = pl().memoizedState;
    return Qd({ ref: t, nextImpl: l }), function() {
      if ((F & 2) !== 0) throw Error(m(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function as(l, t) {
    return un(4, 2, l, t);
  }
  function es(l, t) {
    return un(4, 4, l, t);
  }
  function us(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function ns(l, t, a) {
    a = a != null ? a.concat([l]) : null, un(4, 4, us.bind(null, t, l), a);
  }
  function Ii() {
  }
  function is(l, t) {
    var a = pl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    return t !== null && Xi(t, e[1]) ? e[0] : (a.memoizedState = [l, t], l);
  }
  function cs(l, t) {
    var a = pl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    if (t !== null && Xi(t, e[1]))
      return e[0];
    if (e = l(), ja) {
      Wt(!0);
      try {
        l();
      } finally {
        Wt(!1);
      }
    }
    return a.memoizedState = [e, t], e;
  }
  function Pi(l, t, a) {
    return a === void 0 || (qt & 1073741824) !== 0 && (Z & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = f0(), Y.lanes |= l, oa |= l, a);
  }
  function fs(l, t, a, e) {
    return lt(a, t) ? a : oe.current !== null ? (l = Pi(l, a, e), lt(l, t) || (El = !0), l) : (qt & 42) === 0 || (qt & 1073741824) !== 0 && (Z & 261930) === 0 ? (El = !0, l.memoizedState = a) : (l = f0(), Y.lanes |= l, oa |= l, t);
  }
  function os(l, t, a, e, u) {
    var n = A.p;
    A.p = n !== 0 && 8 > n ? n : 8;
    var i = b.T, c = {};
    b.T = c, ac(l, !1, t, a);
    try {
      var f = u(), v = b.S;
      if (v !== null && v(c, f), f !== null && typeof f == "object" && typeof f.then == "function") {
        var g = qd(
          f,
          e
        );
        Ie(
          l,
          t,
          g,
          it(l)
        );
      } else
        Ie(
          l,
          t,
          e,
          it(l)
        );
    } catch (S) {
      Ie(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: S },
        it()
      );
    } finally {
      A.p = n, i !== null && c.types !== null && (i.types = c.types), b.T = i;
    }
  }
  function Zd() {
  }
  function lc(l, t, a, e) {
    if (l.tag !== 5) throw Error(m(476));
    var u = ss(l).queue;
    os(
      l,
      u,
      t,
      H,
      a === null ? Zd : function() {
        return rs(l), a(e);
      }
    );
  }
  function ss(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: H,
      baseState: H,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: H
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function rs(l) {
    var t = ss(l);
    t.next === null && (t = l.alternate.memoizedState), Ie(
      l,
      t.next.queue,
      {},
      it()
    );
  }
  function tc() {
    return Hl(mu);
  }
  function ds() {
    return pl().memoizedState;
  }
  function vs() {
    return pl().memoizedState;
  }
  function Vd(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = it();
          l = ea(a);
          var e = ua(t, l, a);
          e !== null && ($l(e, t, a), Je(e, t, a)), t = { cache: Ui() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ld(l, t, a) {
    var e = it();
    a = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l) ? ms(t, a) : (a = pi(l, t, a, e), a !== null && ($l(a, l, e), ys(a, t, e)));
  }
  function hs(l, t, a) {
    var e = it();
    Ie(l, t, a, e);
  }
  function Ie(l, t, a, e) {
    var u = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (nn(l)) ms(t, u);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var i = t.lastRenderedState, c = n(i, a);
          if (u.hasEagerState = !0, u.eagerState = c, lt(c, i))
            return Bu(l, t, u, 0), ol === null && Yu(), !1;
        } catch {
        } finally {
        }
      if (a = pi(l, t, u, e), a !== null)
        return $l(a, l, e), ys(a, t, e), !0;
    }
    return !1;
  }
  function ac(l, t, a, e) {
    if (e = {
      lane: 2,
      revertLane: Rc(),
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l)) {
      if (t) throw Error(m(479));
    } else
      t = pi(
        l,
        a,
        e,
        2
      ), t !== null && $l(t, l, 2);
  }
  function nn(l) {
    var t = l.alternate;
    return l === Y || t !== null && t === Y;
  }
  function ms(l, t) {
    se = Iu = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function ys(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      e &= l.pendingLanes, a |= e, t.lanes = a, Sf(l, a);
    }
  }
  var Pe = {
    readContext: Hl,
    use: tn,
    useCallback: vl,
    useContext: vl,
    useEffect: vl,
    useImperativeHandle: vl,
    useLayoutEffect: vl,
    useInsertionEffect: vl,
    useMemo: vl,
    useReducer: vl,
    useRef: vl,
    useState: vl,
    useDebugValue: vl,
    useDeferredValue: vl,
    useTransition: vl,
    useSyncExternalStore: vl,
    useId: vl,
    useHostTransitionStatus: vl,
    useFormState: vl,
    useActionState: vl,
    useOptimistic: vl,
    useMemoCache: vl,
    useCacheRefresh: vl
  };
  Pe.useEffectEvent = vl;
  var gs = {
    readContext: Hl,
    use: tn,
    useCallback: function(l, t) {
      return Bl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Hl,
    useEffect: ls,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, en(
        4194308,
        4,
        us.bind(null, t, l),
        a
      );
    },
    useLayoutEffect: function(l, t) {
      return en(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      en(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var a = Bl();
      t = t === void 0 ? null : t;
      var e = l();
      if (ja) {
        Wt(!0);
        try {
          l();
        } finally {
          Wt(!1);
        }
      }
      return a.memoizedState = [e, t], e;
    },
    useReducer: function(l, t, a) {
      var e = Bl();
      if (a !== void 0) {
        var u = a(t);
        if (ja) {
          Wt(!0);
          try {
            a(t);
          } finally {
            Wt(!1);
          }
        }
      } else u = t;
      return e.memoizedState = e.baseState = u, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: u
      }, e.queue = l, l = l.dispatch = Ld.bind(
        null,
        Y,
        l
      ), [e.memoizedState, l];
    },
    useRef: function(l) {
      var t = Bl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Wi(l);
      var t = l.queue, a = hs.bind(null, Y, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: Ii,
    useDeferredValue: function(l, t) {
      var a = Bl();
      return Pi(a, l, t);
    },
    useTransition: function() {
      var l = Wi(!1);
      return l = os.bind(
        null,
        Y,
        l.queue,
        !0,
        !1
      ), Bl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var e = Y, u = Bl();
      if (K) {
        if (a === void 0)
          throw Error(m(407));
        a = a();
      } else {
        if (a = t(), ol === null)
          throw Error(m(349));
        (Z & 127) !== 0 || Yo(e, t, a);
      }
      u.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return u.queue = n, ls(Go.bind(null, e, n, l), [
        l
      ]), e.flags |= 2048, de(
        9,
        { destroy: void 0 },
        Bo.bind(
          null,
          e,
          n,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var l = Bl(), t = ol.identifierPrefix;
      if (K) {
        var a = _t, e = xt;
        a = (e & ~(1 << 32 - Pl(e) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Pu++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Yd++, t = "_" + t + "r_" + a.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: tc,
    useFormState: Wo,
    useActionState: Wo,
    useOptimistic: function(l) {
      var t = Bl();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = ac.bind(
        null,
        Y,
        !0,
        a
      ), a.dispatch = t, [l, t];
    },
    useMemoCache: Ki,
    useCacheRefresh: function() {
      return Bl().memoizedState = Vd.bind(
        null,
        Y
      );
    },
    useEffectEvent: function(l) {
      var t = Bl(), a = { impl: l };
      return t.memoizedState = a, function() {
        if ((F & 2) !== 0)
          throw Error(m(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, ec = {
    readContext: Hl,
    use: tn,
    useCallback: is,
    useContext: Hl,
    useEffect: Fi,
    useImperativeHandle: ns,
    useInsertionEffect: as,
    useLayoutEffect: es,
    useMemo: cs,
    useReducer: an,
    useRef: Po,
    useState: function() {
      return an(Yt);
    },
    useDebugValue: Ii,
    useDeferredValue: function(l, t) {
      var a = pl();
      return fs(
        a,
        el.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = an(Yt)[0], t = pl().memoizedState;
      return [
        typeof l == "boolean" ? l : Fe(l),
        t
      ];
    },
    useSyncExternalStore: qo,
    useId: ds,
    useHostTransitionStatus: tc,
    useFormState: $o,
    useActionState: $o,
    useOptimistic: function(l, t) {
      var a = pl();
      return Zo(a, el, l, t);
    },
    useMemoCache: Ki,
    useCacheRefresh: vs
  };
  ec.useEffectEvent = ts;
  var bs = {
    readContext: Hl,
    use: tn,
    useCallback: is,
    useContext: Hl,
    useEffect: Fi,
    useImperativeHandle: ns,
    useInsertionEffect: as,
    useLayoutEffect: es,
    useMemo: cs,
    useReducer: ki,
    useRef: Po,
    useState: function() {
      return ki(Yt);
    },
    useDebugValue: Ii,
    useDeferredValue: function(l, t) {
      var a = pl();
      return el === null ? Pi(a, l, t) : fs(
        a,
        el.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = ki(Yt)[0], t = pl().memoizedState;
      return [
        typeof l == "boolean" ? l : Fe(l),
        t
      ];
    },
    useSyncExternalStore: qo,
    useId: ds,
    useHostTransitionStatus: tc,
    useFormState: Io,
    useActionState: Io,
    useOptimistic: function(l, t) {
      var a = pl();
      return el !== null ? Zo(a, el, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: Ki,
    useCacheRefresh: vs
  };
  bs.useEffectEvent = ts;
  function uc(l, t, a, e) {
    t = l.memoizedState, a = a(e, t), a = a == null ? t : N({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var nc = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var e = it(), u = ea(e);
      u.payload = t, a != null && (u.callback = a), t = ua(l, u, e), t !== null && ($l(t, l, e), Je(t, l, e));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var e = it(), u = ea(e);
      u.tag = 1, u.payload = t, a != null && (u.callback = a), t = ua(l, u, e), t !== null && ($l(t, l, e), Je(t, l, e));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = it(), e = ea(a);
      e.tag = 2, t != null && (e.callback = t), t = ua(l, e, a), t !== null && ($l(t, l, a), Je(t, l, a));
    }
  };
  function ps(l, t, a, e, u, n, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(e, n, i) : t.prototype && t.prototype.isPureReactComponent ? !Be(a, e) || !Be(u, n) : !0;
  }
  function Ss(l, t, a, e) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, e), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, e), t.state !== l && nc.enqueueReplaceState(t, t.state, null);
  }
  function qa(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var e in t)
        e !== "ref" && (a[e] = t[e]);
    }
    if (l = l.defaultProps) {
      a === t && (a = N({}, a));
      for (var u in l)
        a[u] === void 0 && (a[u] = l[u]);
    }
    return a;
  }
  function zs(l) {
    qu(l);
  }
  function Es(l) {
    console.error(l);
  }
  function Ts(l) {
    qu(l);
  }
  function cn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function As(l, t, a) {
    try {
      var e = l.onCaughtError;
      e(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function ic(l, t, a) {
    return a = ea(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      cn(l, t);
    }, a;
  }
  function xs(l) {
    return l = ea(l), l.tag = 3, l;
  }
  function _s(l, t, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      l.payload = function() {
        return u(n);
      }, l.callback = function() {
        As(t, a, e);
      };
    }
    var i = a.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      As(t, a, e), typeof u != "function" && (sa === null ? sa = /* @__PURE__ */ new Set([this]) : sa.add(this));
      var c = e.stack;
      this.componentDidCatch(e.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Kd(l, t, a, e, u) {
    if (a.flags |= 32768, e !== null && typeof e == "object" && typeof e.then == "function") {
      if (t = a.alternate, t !== null && ue(
        t,
        a,
        u,
        !0
      ), a = at.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return mt === null ? pn() : a.alternate === null && hl === 0 && (hl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, e === Ju ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([e]) : t.add(e), wc(l, e, u)), !1;
          case 22:
            return a.flags |= 65536, e === Ju ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([e])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([e]) : a.add(e)), wc(l, e, u)), !1;
        }
        throw Error(m(435, a.tag));
      }
      return wc(l, e, u), pn(), !1;
    }
    if (K)
      return t = at.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, e !== xi && (l = Error(m(422), { cause: e }), Qe(rt(l, a)))) : (e !== xi && (t = Error(m(423), {
        cause: e
      }), Qe(
        rt(t, a)
      )), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, e = rt(e, a), u = ic(
        l.stateNode,
        e,
        u
      ), ji(l, u), hl !== 4 && (hl = 2)), !1;
    var n = Error(m(520), { cause: e });
    if (n = rt(n, a), cu === null ? cu = [n] : cu.push(n), hl !== 4 && (hl = 2), t === null) return !0;
    e = rt(e, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = u & -u, a.lanes |= l, l = ic(a.stateNode, e, l), ji(a, l), !1;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (sa === null || !sa.has(n))))
            return a.flags |= 65536, u &= -u, a.lanes |= u, u = xs(u), _s(
              u,
              l,
              a,
              e
            ), ji(a, u), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var cc = Error(m(461)), El = !1;
  function Rl(l, t, a, e) {
    t.child = l === null ? Uo(t, null, a, e) : Ca(
      t,
      l.child,
      a,
      e
    );
  }
  function Os(l, t, a, e, u) {
    a = a.render;
    var n = t.ref;
    if ("ref" in e) {
      var i = {};
      for (var c in e)
        c !== "ref" && (i[c] = e[c]);
    } else i = e;
    return wa(t), e = Qi(
      l,
      t,
      a,
      i,
      n,
      u
    ), c = Zi(), l !== null && !El ? (Vi(l, t, u), Bt(l, t, u)) : (K && c && Ti(t), t.flags |= 1, Rl(l, t, e, u), t.child);
  }
  function Ms(l, t, a, e, u) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !Si(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, Ds(
        l,
        t,
        n,
        e,
        u
      )) : (l = Xu(
        a.type,
        null,
        e,
        t,
        t.mode,
        u
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !mc(l, u)) {
      var i = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Be, a(i, e) && l.ref === t.ref)
        return Bt(l, t, u);
    }
    return t.flags |= 1, l = Ht(n, e), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Ds(l, t, a, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Be(n, e) && l.ref === t.ref)
        if (El = !1, t.pendingProps = e = n, mc(l, u))
          (l.flags & 131072) !== 0 && (El = !0);
        else
          return t.lanes = l.lanes, Bt(l, t, u);
    }
    return fc(
      l,
      t,
      a,
      e,
      u
    );
  }
  function Us(l, t, a, e) {
    var u = e.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | a : a, l !== null) {
          for (e = t.child = l.child, u = 0; e !== null; )
            u = u | e.lanes | e.childLanes, e = e.sibling;
          e = u & ~n;
        } else e = 0, t.child = null;
        return ws(
          l,
          t,
          n,
          a,
          e
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Lu(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Ho(t, n) : Yi(), Ro(t);
      else
        return e = t.lanes = 536870912, ws(
          l,
          t,
          n !== null ? n.baseLanes | a : a,
          a,
          e
        );
    } else
      n !== null ? (Lu(t, n.cachePool), Ho(t, n), ia(), t.memoizedState = null) : (l !== null && Lu(t, null), Yi(), ia());
    return Rl(l, t, u, a), t.child;
  }
  function lu(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function ws(l, t, a, e, u) {
    var n = Ni();
    return n = n === null ? null : { parent: Sl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: a,
      cachePool: n
    }, l !== null && Lu(t, null), Yi(), Ro(t), l !== null && ue(l, t, e, !0), t.childLanes = u, null;
  }
  function fn(l, t) {
    return t = sn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Ns(l, t, a) {
    return Ca(t, l.child, null, a), l = fn(t, t.pendingProps), l.flags |= 2, et(t), t.memoizedState = null, l;
  }
  function Jd(l, t, a) {
    var e = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (K) {
        if (e.mode === "hidden")
          return l = fn(t, e), t.lanes = 536870912, lu(null, l);
        if (Gi(t), (l = sl) ? (l = V0(
          l,
          ht
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: xt, overflow: _t } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = mo(l), a.return = t, t.child = a, Nl = t, sl = null)) : l = null, l === null) throw la(t);
        return t.lanes = 536870912, null;
      }
      return fn(t, e);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (Gi(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = Ns(
            l,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(m(558));
      else if (El || ue(l, t, a, !1), u = (a & l.childLanes) !== 0, El || u) {
        if (e = ol, e !== null && (i = zf(e, a), i !== 0 && i !== n.retryLane))
          throw n.retryLane = i, Oa(l, i), $l(e, l, i), cc;
        pn(), t = Ns(
          l,
          t,
          a
        );
      } else
        l = n.treeContext, sl = yt(i.nextSibling), Nl = t, K = !0, Pt = null, ht = !1, l !== null && bo(t, l), t = fn(t, e), t.flags |= 4096;
      return t;
    }
    return l = Ht(l.child, {
      mode: e.mode,
      children: e.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function on(l, t) {
    var a = t.ref;
    if (a === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(m(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function fc(l, t, a, e, u) {
    return wa(t), a = Qi(
      l,
      t,
      a,
      e,
      void 0,
      u
    ), e = Zi(), l !== null && !El ? (Vi(l, t, u), Bt(l, t, u)) : (K && e && Ti(t), t.flags |= 1, Rl(l, t, a, u), t.child);
  }
  function Hs(l, t, a, e, u, n) {
    return wa(t), t.updateQueue = null, a = jo(
      t,
      e,
      a,
      u
    ), Co(l), e = Zi(), l !== null && !El ? (Vi(l, t, n), Bt(l, t, n)) : (K && e && Ti(t), t.flags |= 1, Rl(l, t, a, n), t.child);
  }
  function Rs(l, t, a, e, u) {
    if (wa(t), t.stateNode === null) {
      var n = le, i = a.contextType;
      typeof i == "object" && i !== null && (n = Hl(i)), n = new a(e, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = nc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = e, n.state = t.memoizedState, n.refs = {}, Ri(t), i = a.contextType, n.context = typeof i == "object" && i !== null ? Hl(i) : le, n.state = t.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (uc(
        t,
        a,
        i,
        e
      ), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && nc.enqueueReplaceState(n, n.state, null), We(t, e, n, u), ke(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, f = qa(a, c);
      n.props = f;
      var v = n.context, g = a.contextType;
      i = le, typeof g == "object" && g !== null && (i = Hl(g));
      var S = a.getDerivedStateFromProps;
      g = typeof S == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || v !== i) && Ss(
        t,
        n,
        e,
        i
      ), aa = !1;
      var h = t.memoizedState;
      n.state = h, We(t, e, n, u), ke(), v = t.memoizedState, c || h !== v || aa ? (typeof S == "function" && (uc(
        t,
        a,
        S,
        e
      ), v = t.memoizedState), (f = aa || ps(
        t,
        a,
        f,
        e,
        h,
        v,
        i
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = e, t.memoizedState = v), n.props = e, n.state = v, n.context = i, e = f) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !1);
    } else {
      n = t.stateNode, Ci(l, t), i = t.memoizedProps, g = qa(a, i), n.props = g, S = t.pendingProps, h = n.context, v = a.contextType, f = le, typeof v == "object" && v !== null && (f = Hl(v)), c = a.getDerivedStateFromProps, (v = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== S || h !== f) && Ss(
        t,
        n,
        e,
        f
      ), aa = !1, h = t.memoizedState, n.state = h, We(t, e, n, u), ke();
      var y = t.memoizedState;
      i !== S || h !== y || aa || l !== null && l.dependencies !== null && Zu(l.dependencies) ? (typeof c == "function" && (uc(
        t,
        a,
        c,
        e
      ), y = t.memoizedState), (g = aa || ps(
        t,
        a,
        g,
        e,
        h,
        y,
        f
      ) || l !== null && l.dependencies !== null && Zu(l.dependencies)) ? (v || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(e, y, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        e,
        y,
        f
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), t.memoizedProps = e, t.memoizedState = y), n.props = e, n.state = y, n.context = f, e = g) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), e = !1);
    }
    return n = e, on(l, t), e = (t.flags & 128) !== 0, n || e ? (n = t.stateNode, a = e && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && e ? (t.child = Ca(
      t,
      l.child,
      null,
      u
    ), t.child = Ca(
      t,
      null,
      a,
      u
    )) : Rl(l, t, a, u), t.memoizedState = n.state, l = t.child) : l = Bt(
      l,
      t,
      u
    ), l;
  }
  function Cs(l, t, a, e) {
    return Da(), t.flags |= 256, Rl(l, t, a, e), t.child;
  }
  var oc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function sc(l) {
    return { baseLanes: l, cachePool: Ao() };
  }
  function rc(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= nt), l;
  }
  function js(l, t, a) {
    var e = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, i;
    if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (bl.current & 2) !== 0), i && (u = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (K) {
        if (u ? na(t) : ia(), (l = sl) ? (l = V0(
          l,
          ht
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: xt, overflow: _t } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = mo(l), a.return = t, t.child = a, Nl = t, sl = null)) : l = null, l === null) throw la(t);
        return Jc(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = e.children;
      return e = e.fallback, u ? (ia(), u = t.mode, c = sn(
        { mode: "hidden", children: c },
        u
      ), e = Ma(
        e,
        u,
        a,
        null
      ), c.return = t, e.return = t, c.sibling = e, t.child = c, e = t.child, e.memoizedState = sc(a), e.childLanes = rc(
        l,
        i,
        a
      ), t.memoizedState = oc, lu(null, e)) : (na(t), dc(t, c));
    }
    var f = l.memoizedState;
    if (f !== null && (c = f.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (na(t), t.flags &= -257, t = vc(
          l,
          t,
          a
        )) : t.memoizedState !== null ? (ia(), t.child = l.child, t.flags |= 128, t = null) : (ia(), c = e.fallback, u = t.mode, e = sn(
          { mode: "visible", children: e.children },
          u
        ), c = Ma(
          c,
          u,
          a,
          null
        ), c.flags |= 2, e.return = t, c.return = t, e.sibling = c, t.child = e, Ca(
          t,
          l.child,
          null,
          a
        ), e = t.child, e.memoizedState = sc(a), e.childLanes = rc(
          l,
          i,
          a
        ), t.memoizedState = oc, t = lu(null, e));
      else if (na(t), Jc(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var v = i.dgst;
        i = v, e = Error(m(419)), e.stack = "", e.digest = i, Qe({ value: e, source: null, stack: null }), t = vc(
          l,
          t,
          a
        );
      } else if (El || ue(l, t, a, !1), i = (a & l.childLanes) !== 0, El || i) {
        if (i = ol, i !== null && (e = zf(i, a), e !== 0 && e !== f.retryLane))
          throw f.retryLane = e, Oa(l, e), $l(i, l, e), cc;
        Kc(c) || pn(), t = vc(
          l,
          t,
          a
        );
      } else
        Kc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, sl = yt(
          c.nextSibling
        ), Nl = t, K = !0, Pt = null, ht = !1, l !== null && bo(t, l), t = dc(
          t,
          e.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (ia(), c = e.fallback, u = t.mode, f = l.child, v = f.sibling, e = Ht(f, {
      mode: "hidden",
      children: e.children
    }), e.subtreeFlags = f.subtreeFlags & 65011712, v !== null ? c = Ht(
      v,
      c
    ) : (c = Ma(
      c,
      u,
      a,
      null
    ), c.flags |= 2), c.return = t, e.return = t, e.sibling = c, t.child = e, lu(null, e), e = t.child, c = l.child.memoizedState, c === null ? c = sc(a) : (u = c.cachePool, u !== null ? (f = Sl._currentValue, u = u.parent !== f ? { parent: f, pool: f } : u) : u = Ao(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: u
    }), e.memoizedState = c, e.childLanes = rc(
      l,
      i,
      a
    ), t.memoizedState = oc, lu(l.child, e)) : (na(t), a = l.child, l = a.sibling, a = Ht(a, {
      mode: "visible",
      children: e.children
    }), a.return = t, a.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function dc(l, t) {
    return t = sn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function sn(l, t) {
    return l = tt(22, l, null, t), l.lanes = 0, l;
  }
  function vc(l, t, a) {
    return Ca(t, l.child, null, a), l = dc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function qs(l, t, a) {
    l.lanes |= t;
    var e = l.alternate;
    e !== null && (e.lanes |= t), Mi(l.return, t, a);
  }
  function hc(l, t, a, e, u, n) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: e,
      tail: a,
      tailMode: u,
      treeForkCount: n
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = e, i.tail = a, i.tailMode = u, i.treeForkCount = n);
  }
  function Ys(l, t, a) {
    var e = t.pendingProps, u = e.revealOrder, n = e.tail;
    e = e.children;
    var i = bl.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, x(bl, i), Rl(l, t, e, a), e = K ? Xe : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && qs(l, a, t);
        else if (l.tag === 19)
          qs(l, a, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          l = a.alternate, l !== null && Fu(l) === null && (u = a), a = a.sibling;
        a = u, a === null ? (u = t.child, t.child = null) : (u = a.sibling, a.sibling = null), hc(
          t,
          !1,
          u,
          a,
          n,
          e
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (l = u.alternate, l !== null && Fu(l) === null) {
            t.child = u;
            break;
          }
          l = u.sibling, u.sibling = a, a = u, u = l;
        }
        hc(
          t,
          !0,
          a,
          null,
          n,
          e
        );
        break;
      case "together":
        hc(
          t,
          !1,
          null,
          null,
          void 0,
          e
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Bt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), oa |= t.lanes, (a & t.childLanes) === 0)
      if (l !== null) {
        if (ue(
          l,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(m(153));
    if (t.child !== null) {
      for (l = t.child, a = Ht(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        l = l.sibling, a = a.sibling = Ht(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function mc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Zu(l)));
  }
  function kd(l, t, a) {
    switch (t.tag) {
      case 3:
        Yl(t, t.stateNode.containerInfo), ta(t, Sl, l.memoizedState.cache), Da();
        break;
      case 27:
      case 5:
        _e(t);
        break;
      case 4:
        Yl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ta(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Gi(t), null;
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null)
          return e.dehydrated !== null ? (na(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? js(l, t, a) : (na(t), l = Bt(
            l,
            t,
            a
          ), l !== null ? l.sibling : null);
        na(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (e = (a & t.childLanes) !== 0, e || (ue(
          l,
          t,
          a,
          !1
        ), e = (a & t.childLanes) !== 0), u) {
          if (e)
            return Ys(
              l,
              t,
              a
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), x(bl, bl.current), e) break;
        return null;
      case 22:
        return t.lanes = 0, Us(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        ta(t, Sl, l.memoizedState.cache);
    }
    return Bt(l, t, a);
  }
  function Bs(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        El = !0;
      else {
        if (!mc(l, a) && (t.flags & 128) === 0)
          return El = !1, kd(
            l,
            t,
            a
          );
        El = (l.flags & 131072) !== 0;
      }
    else
      El = !1, K && (t.flags & 1048576) !== 0 && go(t, Xe, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var e = t.pendingProps;
          if (l = Ha(t.elementType), t.type = l, typeof l == "function")
            Si(l) ? (e = qa(l, e), t.tag = 1, t = Rs(
              null,
              t,
              l,
              e,
              a
            )) : (t.tag = 0, t = fc(
              null,
              t,
              l,
              e,
              a
            ));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === ct) {
                t.tag = 11, t = Os(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break l;
              } else if (u === L) {
                t.tag = 14, t = Ms(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break l;
              }
            }
            throw t = Dt(l) || l, Error(m(306, t, ""));
          }
        }
        return t;
      case 0:
        return fc(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return e = t.type, u = qa(
          e,
          t.pendingProps
        ), Rs(
          l,
          t,
          e,
          u,
          a
        );
      case 3:
        l: {
          if (Yl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(m(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          u = n.element, Ci(l, t), We(t, e, null, a);
          var i = t.memoizedState;
          if (e = i.cache, ta(t, Sl, e), e !== n.cache && Di(
            t,
            [Sl],
            a,
            !0
          ), ke(), e = i.element, n.isDehydrated)
            if (n = {
              element: e,
              isDehydrated: !1,
              cache: i.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Cs(
                l,
                t,
                e,
                a
              );
              break l;
            } else if (e !== u) {
              u = rt(
                Error(m(424)),
                t
              ), Qe(u), t = Cs(
                l,
                t,
                e,
                a
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (sl = yt(l.firstChild), Nl = t, K = !0, Pt = null, ht = !0, a = Uo(
                t,
                null,
                e,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Da(), e === u) {
              t = Bt(
                l,
                t,
                a
              );
              break l;
            }
            Rl(l, t, e, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return on(l, t), l === null ? (a = $0(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : K || (a = t.type, l = t.pendingProps, e = _n(
          G.current
        ).createElement(a), e[wl] = t, e[Vl] = l, Cl(e, a, l), Dl(e), t.stateNode = e) : t.memoizedState = $0(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return _e(t), l === null && K && (e = t.stateNode = J0(
          t.type,
          t.pendingProps,
          G.current
        ), Nl = t, ht = !0, u = sl, ha(t.type) ? (kc = u, sl = yt(e.firstChild)) : sl = u), Rl(
          l,
          t,
          t.pendingProps.children,
          a
        ), on(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && K && ((u = e = sl) && (e = Av(
          e,
          t.type,
          t.pendingProps,
          ht
        ), e !== null ? (t.stateNode = e, Nl = t, sl = yt(e.firstChild), ht = !1, u = !0) : u = !1), u || la(t)), _e(t), u = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, e = n.children, Zc(u, n) ? e = null : i !== null && Zc(u, i) && (t.flags |= 32), t.memoizedState !== null && (u = Qi(
          l,
          t,
          Bd,
          null,
          null,
          a
        ), mu._currentValue = u), on(l, t), Rl(l, t, e, a), t.child;
      case 6:
        return l === null && K && ((l = a = sl) && (a = xv(
          a,
          t.pendingProps,
          ht
        ), a !== null ? (t.stateNode = a, Nl = t, sl = null, l = !0) : l = !1), l || la(t)), null;
      case 13:
        return js(l, t, a);
      case 4:
        return Yl(
          t,
          t.stateNode.containerInfo
        ), e = t.pendingProps, l === null ? t.child = Ca(
          t,
          null,
          e,
          a
        ) : Rl(l, t, e, a), t.child;
      case 11:
        return Os(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Rl(
          l,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Rl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Rl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return e = t.pendingProps, ta(t, t.type, e.value), Rl(l, t, e.children, a), t.child;
      case 9:
        return u = t.type._context, e = t.pendingProps.children, wa(t), u = Hl(u), e = e(u), t.flags |= 1, Rl(l, t, e, a), t.child;
      case 14:
        return Ms(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Ds(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Ys(l, t, a);
      case 31:
        return Jd(l, t, a);
      case 22:
        return Us(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return wa(t), e = Hl(Sl), l === null ? (u = Ni(), u === null && (u = ol, n = Ui(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= a), u = n), t.memoizedState = { parent: e, cache: u }, Ri(t), ta(t, Sl, u)) : ((l.lanes & a) !== 0 && (Ci(l, t), We(t, null, null, a), ke()), u = l.memoizedState, n = t.memoizedState, u.parent !== e ? (u = { parent: e, cache: e }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), ta(t, Sl, e)) : (e = n.cache, ta(t, Sl, e), e !== u.cache && Di(
          t,
          [Sl],
          a,
          !0
        ))), Rl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(m(156, t.tag));
  }
  function Gt(l) {
    l.flags |= 4;
  }
  function yc(l, t, a, e, u) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (u & 335544128) === u)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (d0()) l.flags |= 8192;
        else
          throw Ra = Ju, Hi;
    } else l.flags &= -16777217;
  }
  function Gs(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !tr(t))
      if (d0()) l.flags |= 8192;
      else
        throw Ra = Ju, Hi;
  }
  function rn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? bf() : 536870912, l.lanes |= t, ye |= t);
  }
  function tu(l, t) {
    if (!K)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? l.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = l.tail;
          for (var e = null; a !== null; )
            a.alternate !== null && (e = a), a = a.sibling;
          e === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : e.sibling = null;
      }
  }
  function rl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, e = 0;
    if (t)
      for (var u = l.child; u !== null; )
        a |= u.lanes | u.childLanes, e |= u.subtreeFlags & 65011712, e |= u.flags & 65011712, u.return = l, u = u.sibling;
    else
      for (u = l.child; u !== null; )
        a |= u.lanes | u.childLanes, e |= u.subtreeFlags, e |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= e, l.childLanes = a, t;
  }
  function Wd(l, t, a) {
    var e = t.pendingProps;
    switch (Ai(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return rl(t), null;
      case 1:
        return rl(t), null;
      case 3:
        return a = t.stateNode, e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), jt(Sl), gl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (ee(t) ? Gt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, _i())), rl(t), null;
      case 26:
        var u = t.type, n = t.memoizedState;
        return l === null ? (Gt(t), n !== null ? (rl(t), Gs(t, n)) : (rl(t), yc(
          t,
          u,
          null,
          e,
          a
        ))) : n ? n !== l.memoizedState ? (Gt(t), rl(t), Gs(t, n)) : (rl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== e && Gt(t), rl(t), yc(
          t,
          u,
          l,
          e,
          a
        )), null;
      case 27:
        if (zu(t), a = G.current, u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== e && Gt(t);
        else {
          if (!e) {
            if (t.stateNode === null)
              throw Error(m(166));
            return rl(t), null;
          }
          l = O.current, ee(t) ? po(t) : (l = J0(u, e, a), t.stateNode = l, Gt(t));
        }
        return rl(t), null;
      case 5:
        if (zu(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== e && Gt(t);
        else {
          if (!e) {
            if (t.stateNode === null)
              throw Error(m(166));
            return rl(t), null;
          }
          if (n = O.current, ee(t))
            po(t);
          else {
            var i = _n(
              G.current
            );
            switch (n) {
              case 1:
                n = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                n = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof e.is == "string" ? i.createElement("select", {
                      is: e.is
                    }) : i.createElement("select"), e.multiple ? n.multiple = !0 : e.size && (n.size = e.size);
                    break;
                  default:
                    n = typeof e.is == "string" ? i.createElement(u, { is: e.is }) : i.createElement(u);
                }
            }
            n[wl] = t, n[Vl] = e;
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t)
                  break l;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            t.stateNode = n;
            l: switch (Cl(n, u, e), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!e.autoFocus;
                break l;
              case "img":
                e = !0;
                break l;
              default:
                e = !1;
            }
            e && Gt(t);
          }
        }
        return rl(t), yc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== e && Gt(t);
        else {
          if (typeof e != "string" && t.stateNode === null)
            throw Error(m(166));
          if (l = G.current, ee(t)) {
            if (l = t.stateNode, a = t.memoizedProps, e = null, u = Nl, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            l[wl] = t, l = !!(l.nodeValue === a || e !== null && e.suppressHydrationWarning === !0 || j0(l.nodeValue, a)), l || la(t, !0);
          } else
            l = _n(l).createTextNode(
              e
            ), l[wl] = t, t.stateNode = l;
        }
        return rl(t), null;
      case 31:
        if (a = t.memoizedState, l === null || l.memoizedState !== null) {
          if (e = ee(t), a !== null) {
            if (l === null) {
              if (!e) throw Error(m(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(557));
              l[wl] = t;
            } else
              Da(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            rl(t), l = !1;
          } else
            a = _i(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = !0;
          if (!l)
            return t.flags & 256 ? (et(t), t) : (et(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(m(558));
        }
        return rl(t), null;
      case 13:
        if (e = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = ee(t), e !== null && e.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(m(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(m(317));
              u[wl] = t;
            } else
              Da(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            rl(t), u = !1;
          } else
            u = _i(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (et(t), t) : (et(t), null);
        }
        return et(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = e !== null, l = l !== null && l.memoizedState !== null, a && (e = t.child, u = null, e.alternate !== null && e.alternate.memoizedState !== null && e.alternate.memoizedState.cachePool !== null && (u = e.alternate.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== u && (e.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), rn(t, t.updateQueue), rl(t), null);
      case 4:
        return gl(), l === null && Yc(t.stateNode.containerInfo), rl(t), null;
      case 10:
        return jt(t.type), rl(t), null;
      case 19:
        if (z(bl), e = t.memoizedState, e === null) return rl(t), null;
        if (u = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (u) tu(e, !1);
          else {
            if (hl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = Fu(l), n !== null) {
                  for (t.flags |= 128, tu(e, !1), l = n.updateQueue, t.updateQueue = l, rn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; )
                    ho(a, l), a = a.sibling;
                  return x(
                    bl,
                    bl.current & 1 | 2
                  ), K && Rt(t, e.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && Fl() > yn && (t.flags |= 128, u = !0, tu(e, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = Fu(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, rn(t, l), tu(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !K)
                return rl(t), null;
            } else
              2 * Fl() - e.renderingStartTime > yn && a !== 536870912 && (t.flags |= 128, u = !0, tu(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (l = e.tail, e.rendering = l, e.tail = l.sibling, e.renderingStartTime = Fl(), l.sibling = null, a = bl.current, x(
          bl,
          u ? a & 1 | 2 : a & 1
        ), K && Rt(t, e.treeForkCount), l) : (rl(t), null);
      case 22:
      case 23:
        return et(t), Bi(), e = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== e && (t.flags |= 8192) : e && (t.flags |= 8192), e ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (rl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : rl(t), a = t.updateQueue, a !== null && rn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (t.flags |= 2048), l !== null && z(Na), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), jt(Sl), rl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function $d(l, t) {
    switch (Ai(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return jt(Sl), gl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return zu(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (et(t), t.alternate === null)
            throw Error(m(340));
          Da();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (et(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(m(340));
          Da();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return z(bl), null;
      case 4:
        return gl(), null;
      case 10:
        return jt(t.type), null;
      case 22:
      case 23:
        return et(t), Bi(), l !== null && z(Na), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return jt(Sl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xs(l, t) {
    switch (Ai(t), t.tag) {
      case 3:
        jt(Sl), gl();
        break;
      case 26:
      case 27:
      case 5:
        zu(t);
        break;
      case 4:
        gl();
        break;
      case 31:
        t.memoizedState !== null && et(t);
        break;
      case 13:
        et(t);
        break;
      case 19:
        z(bl);
        break;
      case 10:
        jt(t.type);
        break;
      case 22:
      case 23:
        et(t), Bi(), l !== null && z(Na);
        break;
      case 24:
        jt(Sl);
    }
  }
  function au(l, t) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            e = void 0;
            var n = a.create, i = a.inst;
            e = n(), i.destroy = e;
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (c) {
      tl(t, t.return, c);
    }
  }
  function ca(l, t, a) {
    try {
      var e = t.updateQueue, u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            var i = e.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, u = t;
              var f = a, v = c;
              try {
                v();
              } catch (g) {
                tl(
                  u,
                  f,
                  g
                );
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (g) {
      tl(t, t.return, g);
    }
  }
  function Qs(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        No(t, a);
      } catch (e) {
        tl(l, l.return, e);
      }
    }
  }
  function Zs(l, t, a) {
    a.props = qa(
      l.type,
      l.memoizedProps
    ), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (e) {
      tl(l, t, e);
    }
  }
  function eu(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(e) : a.current = e;
      }
    } catch (u) {
      tl(l, t, u);
    }
  }
  function Ot(l, t) {
    var a = l.ref, e = l.refCleanup;
    if (a !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          tl(l, t, u);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          tl(l, t, u);
        }
      else a.current = null;
  }
  function Vs(l) {
    var t = l.type, a = l.memoizedProps, e = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break l;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (u) {
      tl(l, l.return, u);
    }
  }
  function gc(l, t, a) {
    try {
      var e = l.stateNode;
      bv(e, l.type, a, t), e[Vl] = t;
    } catch (u) {
      tl(l, l.return, u);
    }
  }
  function Ls(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ha(l.type) || l.tag === 4;
  }
  function bc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Ls(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && ha(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function pc(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = wt));
    else if (e !== 4 && (e === 27 && ha(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null))
      for (pc(l, t, a), l = l.sibling; l !== null; )
        pc(l, t, a), l = l.sibling;
  }
  function dn(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (e !== 4 && (e === 27 && ha(l.type) && (a = l.stateNode), l = l.child, l !== null))
      for (dn(l, t, a), l = l.sibling; l !== null; )
        dn(l, t, a), l = l.sibling;
  }
  function Ks(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var e = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Cl(t, e, a), t[wl] = l, t[Vl] = a;
    } catch (n) {
      tl(l, l.return, n);
    }
  }
  var Xt = !1, Tl = !1, Sc = !1, Js = typeof WeakSet == "function" ? WeakSet : Set, Ul = null;
  function Fd(l, t) {
    if (l = l.containerInfo, Xc = Hn, l = uo(l), vi(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var u = e.anchorOffset, n = e.focusNode;
            e = e.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var i = 0, c = -1, f = -1, v = 0, g = 0, S = l, h = null;
            t: for (; ; ) {
              for (var y; S !== a || u !== 0 && S.nodeType !== 3 || (c = i + u), S !== n || e !== 0 && S.nodeType !== 3 || (f = i + e), S.nodeType === 3 && (i += S.nodeValue.length), (y = S.firstChild) !== null; )
                h = S, S = y;
              for (; ; ) {
                if (S === l) break t;
                if (h === a && ++v === u && (c = i), h === n && ++g === e && (f = i), (y = S.nextSibling) !== null) break;
                S = h, h = S.parentNode;
              }
              S = y;
            }
            a = c === -1 || f === -1 ? null : { start: c, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Qc = { focusedElem: l, selectionRange: a }, Hn = !1, Ul = t; Ul !== null; )
      if (t = Ul, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Ul = l;
      else
        for (; Ul !== null; ) {
          switch (t = Ul, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (a = 0; a < l.length; a++)
                  u = l[a], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, a = t, u = n.memoizedProps, n = n.memoizedState, e = a.stateNode;
                try {
                  var _ = qa(
                    a.type,
                    u
                  );
                  l = e.getSnapshotBeforeUpdate(
                    _,
                    n
                  ), e.__reactInternalSnapshotBeforeUpdate = l;
                } catch (w) {
                  tl(
                    a,
                    a.return,
                    w
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9)
                  Lc(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Lc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(m(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Ul = l;
            break;
          }
          Ul = t.return;
        }
  }
  function ks(l, t, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Zt(l, a), e & 4 && au(5, a);
        break;
      case 1:
        if (Zt(l, a), e & 4)
          if (l = a.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (i) {
              tl(a, a.return, i);
            }
          else {
            var u = qa(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                u,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              tl(
                a,
                a.return,
                i
              );
            }
          }
        e & 64 && Qs(a), e & 512 && eu(a, a.return);
        break;
      case 3:
        if (Zt(l, a), e & 64 && (l = a.updateQueue, l !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            No(l, t);
          } catch (i) {
            tl(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && e & 4 && Ks(a);
      case 26:
      case 5:
        Zt(l, a), t === null && e & 4 && Vs(a), e & 512 && eu(a, a.return);
        break;
      case 12:
        Zt(l, a);
        break;
      case 31:
        Zt(l, a), e & 4 && Fs(l, a);
        break;
      case 13:
        Zt(l, a), e & 4 && Is(l, a), e & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = iv.bind(
          null,
          a
        ), _v(l, a))));
        break;
      case 22:
        if (e = a.memoizedState !== null || Xt, !e) {
          t = t !== null && t.memoizedState !== null || Tl, u = Xt;
          var n = Tl;
          Xt = e, (Tl = t) && !n ? Vt(
            l,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Zt(l, a), Xt = u, Tl = n;
        }
        break;
      case 30:
        break;
      default:
        Zt(l, a);
    }
  }
  function Ws(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Ws(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && $n(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var dl = null, Kl = !1;
  function Qt(l, t, a) {
    for (a = a.child; a !== null; )
      $s(l, t, a), a = a.sibling;
  }
  function $s(l, t, a) {
    if (Il && typeof Il.onCommitFiberUnmount == "function")
      try {
        Il.onCommitFiberUnmount(Oe, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Tl || Ot(a, t), Qt(
          l,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Tl || Ot(a, t);
        var e = dl, u = Kl;
        ha(a.type) && (dl = a.stateNode, Kl = !1), Qt(
          l,
          t,
          a
        ), du(a.stateNode), dl = e, Kl = u;
        break;
      case 5:
        Tl || Ot(a, t);
      case 6:
        if (e = dl, u = Kl, dl = null, Qt(
          l,
          t,
          a
        ), dl = e, Kl = u, dl !== null)
          if (Kl)
            try {
              (dl.nodeType === 9 ? dl.body : dl.nodeName === "HTML" ? dl.ownerDocument.body : dl).removeChild(a.stateNode);
            } catch (n) {
              tl(
                a,
                t,
                n
              );
            }
          else
            try {
              dl.removeChild(a.stateNode);
            } catch (n) {
              tl(
                a,
                t,
                n
              );
            }
        break;
      case 18:
        dl !== null && (Kl ? (l = dl, Q0(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          a.stateNode
        ), Ae(l)) : Q0(dl, a.stateNode));
        break;
      case 4:
        e = dl, u = Kl, dl = a.stateNode.containerInfo, Kl = !0, Qt(
          l,
          t,
          a
        ), dl = e, Kl = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ca(2, a, t), Tl || ca(4, a, t), Qt(
          l,
          t,
          a
        );
        break;
      case 1:
        Tl || (Ot(a, t), e = a.stateNode, typeof e.componentWillUnmount == "function" && Zs(
          a,
          t,
          e
        )), Qt(
          l,
          t,
          a
        );
        break;
      case 21:
        Qt(
          l,
          t,
          a
        );
        break;
      case 22:
        Tl = (e = Tl) || a.memoizedState !== null, Qt(
          l,
          t,
          a
        ), Tl = e;
        break;
      default:
        Qt(
          l,
          t,
          a
        );
    }
  }
  function Fs(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Ae(l);
      } catch (a) {
        tl(t, t.return, a);
      }
    }
  }
  function Is(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Ae(l);
      } catch (a) {
        tl(t, t.return, a);
      }
  }
  function Id(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Js()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Js()), t;
      default:
        throw Error(m(435, l.tag));
    }
  }
  function vn(l, t) {
    var a = Id(l);
    t.forEach(function(e) {
      if (!a.has(e)) {
        a.add(e);
        var u = cv.bind(null, l, e);
        e.then(u, u);
      }
    });
  }
  function Jl(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var u = a[e], n = l, i = t, c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ha(c.type)) {
                dl = c.stateNode, Kl = !1;
                break l;
              }
              break;
            case 5:
              dl = c.stateNode, Kl = !1;
              break l;
            case 3:
            case 4:
              dl = c.stateNode.containerInfo, Kl = !0;
              break l;
          }
          c = c.return;
        }
        if (dl === null) throw Error(m(160));
        $s(n, i, u), dl = null, Kl = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Ps(t, l), t = t.sibling;
  }
  var St = null;
  function Ps(l, t) {
    var a = l.alternate, e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Jl(t, l), kl(l), e & 4 && (ca(3, l, l.return), au(3, l), ca(5, l, l.return));
        break;
      case 1:
        Jl(t, l), kl(l), e & 512 && (Tl || a === null || Ot(a, a.return)), e & 64 && Xt && (l = l.updateQueue, l !== null && (e = l.callbacks, e !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? e : a.concat(e))));
        break;
      case 26:
        var u = St;
        if (Jl(t, l), kl(l), e & 512 && (Tl || a === null || Ot(a, a.return)), e & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (e = l.memoizedState, a === null)
            if (e === null)
              if (l.stateNode === null) {
                l: {
                  e = l.type, a = l.memoizedProps, u = u.ownerDocument || u;
                  t: switch (e) {
                    case "title":
                      n = u.getElementsByTagName("title")[0], (!n || n[Ue] || n[wl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(e), u.head.insertBefore(
                        n,
                        u.querySelector("head > title")
                      )), Cl(n, e, a), n[wl] = l, Dl(n), e = n;
                      break l;
                    case "link":
                      var i = P0(
                        "link",
                        "href",
                        u
                      ).get(e + (a.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (n = i[c], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      n = u.createElement(e), Cl(n, e, a), u.head.appendChild(n);
                      break;
                    case "meta":
                      if (i = P0(
                        "meta",
                        "content",
                        u
                      ).get(e + (a.content || ""))) {
                        for (c = 0; c < i.length; c++)
                          if (n = i[c], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      n = u.createElement(e), Cl(n, e, a), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(m(468, e));
                  }
                  n[wl] = l, Dl(n), e = n;
                }
                l.stateNode = e;
              } else
                lr(
                  u,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = I0(
                u,
                e,
                l.memoizedProps
              );
          else
            n !== e ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, e === null ? lr(
              u,
              l.type,
              l.stateNode
            ) : I0(
              u,
              e,
              l.memoizedProps
            )) : e === null && l.stateNode !== null && gc(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Jl(t, l), kl(l), e & 512 && (Tl || a === null || Ot(a, a.return)), a !== null && e & 4 && gc(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Jl(t, l), kl(l), e & 512 && (Tl || a === null || Ot(a, a.return)), l.flags & 32) {
          u = l.stateNode;
          try {
            Ja(u, "");
          } catch (_) {
            tl(l, l.return, _);
          }
        }
        e & 4 && l.stateNode != null && (u = l.memoizedProps, gc(
          l,
          u,
          a !== null ? a.memoizedProps : u
        )), e & 1024 && (Sc = !0);
        break;
      case 6:
        if (Jl(t, l), kl(l), e & 4) {
          if (l.stateNode === null)
            throw Error(m(162));
          e = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = e;
          } catch (_) {
            tl(l, l.return, _);
          }
        }
        break;
      case 3:
        if (Dn = null, u = St, St = On(t.containerInfo), Jl(t, l), St = u, kl(l), e & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Ae(t.containerInfo);
          } catch (_) {
            tl(l, l.return, _);
          }
        Sc && (Sc = !1, l0(l));
        break;
      case 4:
        e = St, St = On(
          l.stateNode.containerInfo
        ), Jl(t, l), kl(l), St = e;
        break;
      case 12:
        Jl(t, l), kl(l);
        break;
      case 31:
        Jl(t, l), kl(l), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, vn(l, e)));
        break;
      case 13:
        Jl(t, l), kl(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (mn = Fl()), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, vn(l, e)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null, v = Xt, g = Tl;
        if (Xt = v || u, Tl = g || f, Jl(t, l), Tl = g, Xt = v, kl(l), e & 8192)
          l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (a === null || f || Xt || Tl || Ya(l)), a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                f = a = t;
                try {
                  if (n = f.stateNode, u)
                    i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = f.stateNode;
                    var S = f.memoizedProps.style, h = S != null && S.hasOwnProperty("display") ? S.display : null;
                    c.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (_) {
                  tl(f, f.return, _);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (_) {
                  tl(f, f.return, _);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                f = t;
                try {
                  var y = f.stateNode;
                  u ? Z0(y, !0) : Z0(f.stateNode, !1);
                } catch (_) {
                  tl(f, f.return, _);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        e & 4 && (e = l.updateQueue, e !== null && (a = e.retryQueue, a !== null && (e.retryQueue = null, vn(l, a))));
        break;
      case 19:
        Jl(t, l), kl(l), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, vn(l, e)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Jl(t, l), kl(l);
    }
  }
  function kl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, e = l.return; e !== null; ) {
          if (Ls(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(m(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode, n = bc(l);
            dn(l, n, u);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (Ja(i, ""), a.flags &= -33);
            var c = bc(l);
            dn(l, c, i);
            break;
          case 3:
          case 4:
            var f = a.stateNode.containerInfo, v = bc(l);
            pc(
              l,
              v,
              f
            );
            break;
          default:
            throw Error(m(161));
        }
      } catch (g) {
        tl(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function l0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        l0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Zt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        ks(l, t.alternate, t), t = t.sibling;
  }
  function Ya(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ca(4, t, t.return), Ya(t);
          break;
        case 1:
          Ot(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Zs(
            t,
            t.return,
            a
          ), Ya(t);
          break;
        case 27:
          du(t.stateNode);
        case 26:
        case 5:
          Ot(t, t.return), Ya(t);
          break;
        case 22:
          t.memoizedState === null && Ya(t);
          break;
        case 30:
          Ya(t);
          break;
        default:
          Ya(t);
      }
      l = l.sibling;
    }
  }
  function Vt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var e = t.alternate, u = l, n = t, i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Vt(
            u,
            n,
            a
          ), au(4, n);
          break;
        case 1:
          if (Vt(
            u,
            n,
            a
          ), e = n, u = e.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (v) {
              tl(e, e.return, v);
            }
          if (e = n, u = e.updateQueue, u !== null) {
            var c = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  wo(f[u], c);
            } catch (v) {
              tl(e, e.return, v);
            }
          }
          a && i & 64 && Qs(n), eu(n, n.return);
          break;
        case 27:
          Ks(n);
        case 26:
        case 5:
          Vt(
            u,
            n,
            a
          ), a && e === null && i & 4 && Vs(n), eu(n, n.return);
          break;
        case 12:
          Vt(
            u,
            n,
            a
          );
          break;
        case 31:
          Vt(
            u,
            n,
            a
          ), a && i & 4 && Fs(u, n);
          break;
        case 13:
          Vt(
            u,
            n,
            a
          ), a && i & 4 && Is(u, n);
          break;
        case 22:
          n.memoizedState === null && Vt(
            u,
            n,
            a
          ), eu(n, n.return);
          break;
        case 30:
          break;
        default:
          Vt(
            u,
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function zc(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Ze(a));
  }
  function Ec(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ze(l));
  }
  function zt(l, t, a, e) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        t0(
          l,
          t,
          a,
          e
        ), t = t.sibling;
  }
  function t0(l, t, a, e) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        zt(
          l,
          t,
          a,
          e
        ), u & 2048 && au(9, t);
        break;
      case 1:
        zt(
          l,
          t,
          a,
          e
        );
        break;
      case 3:
        zt(
          l,
          t,
          a,
          e
        ), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ze(l)));
        break;
      case 12:
        if (u & 2048) {
          zt(
            l,
            t,
            a,
            e
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, i = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              i,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (f) {
            tl(t, t.return, f);
          }
        } else
          zt(
            l,
            t,
            a,
            e
          );
        break;
      case 31:
        zt(
          l,
          t,
          a,
          e
        );
        break;
      case 13:
        zt(
          l,
          t,
          a,
          e
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, i = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? zt(
          l,
          t,
          a,
          e
        ) : uu(l, t) : n._visibility & 2 ? zt(
          l,
          t,
          a,
          e
        ) : (n._visibility |= 2, ve(
          l,
          t,
          a,
          e,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && zc(i, t);
        break;
      case 24:
        zt(
          l,
          t,
          a,
          e
        ), u & 2048 && Ec(t.alternate, t);
        break;
      default:
        zt(
          l,
          t,
          a,
          e
        );
    }
  }
  function ve(l, t, a, e, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, i = t, c = a, f = e, v = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ve(
            n,
            i,
            c,
            f,
            u
          ), au(8, i);
          break;
        case 23:
          break;
        case 22:
          var g = i.stateNode;
          i.memoizedState !== null ? g._visibility & 2 ? ve(
            n,
            i,
            c,
            f,
            u
          ) : uu(
            n,
            i
          ) : (g._visibility |= 2, ve(
            n,
            i,
            c,
            f,
            u
          )), u && v & 2048 && zc(
            i.alternate,
            i
          );
          break;
        case 24:
          ve(
            n,
            i,
            c,
            f,
            u
          ), u && v & 2048 && Ec(i.alternate, i);
          break;
        default:
          ve(
            n,
            i,
            c,
            f,
            u
          );
      }
      t = t.sibling;
    }
  }
  function uu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l, e = t, u = e.flags;
        switch (e.tag) {
          case 22:
            uu(a, e), u & 2048 && zc(
              e.alternate,
              e
            );
            break;
          case 24:
            uu(a, e), u & 2048 && Ec(e.alternate, e);
            break;
          default:
            uu(a, e);
        }
        t = t.sibling;
      }
  }
  var nu = 8192;
  function he(l, t, a) {
    if (l.subtreeFlags & nu)
      for (l = l.child; l !== null; )
        a0(
          l,
          t,
          a
        ), l = l.sibling;
  }
  function a0(l, t, a) {
    switch (l.tag) {
      case 26:
        he(
          l,
          t,
          a
        ), l.flags & nu && l.memoizedState !== null && Yv(
          a,
          St,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        he(
          l,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var e = St;
        St = On(l.stateNode.containerInfo), he(
          l,
          t,
          a
        ), St = e;
        break;
      case 22:
        l.memoizedState === null && (e = l.alternate, e !== null && e.memoizedState !== null ? (e = nu, nu = 16777216, he(
          l,
          t,
          a
        ), nu = e) : he(
          l,
          t,
          a
        ));
        break;
      default:
        he(
          l,
          t,
          a
        );
    }
  }
  function e0(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function iu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          Ul = e, n0(
            e,
            l
          );
        }
      e0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        u0(l), l = l.sibling;
  }
  function u0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        iu(l), l.flags & 2048 && ca(9, l, l.return);
        break;
      case 3:
        iu(l);
        break;
      case 12:
        iu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, hn(l)) : iu(l);
        break;
      default:
        iu(l);
    }
  }
  function hn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          Ul = e, n0(
            e,
            l
          );
        }
      e0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, t, t.return), hn(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, hn(t));
          break;
        default:
          hn(t);
      }
      l = l.sibling;
    }
  }
  function n0(l, t) {
    for (; Ul !== null; ) {
      var a = Ul;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          Ze(a.memoizedState.cache);
      }
      if (e = a.child, e !== null) e.return = a, Ul = e;
      else
        l: for (a = l; Ul !== null; ) {
          e = Ul;
          var u = e.sibling, n = e.return;
          if (Ws(e), e === a) {
            Ul = null;
            break l;
          }
          if (u !== null) {
            u.return = n, Ul = u;
            break l;
          }
          Ul = n;
        }
    }
  }
  var Pd = {
    getCacheForType: function(l) {
      var t = Hl(Sl), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    },
    cacheSignal: function() {
      return Hl(Sl).controller.signal;
    }
  }, lv = typeof WeakMap == "function" ? WeakMap : Map, F = 0, ol = null, X = null, Z = 0, ll = 0, ut = null, fa = !1, me = !1, Tc = !1, Lt = 0, hl = 0, oa = 0, Ba = 0, Ac = 0, nt = 0, ye = 0, cu = null, Wl = null, xc = !1, mn = 0, i0 = 0, yn = 1 / 0, gn = null, sa = null, _l = 0, ra = null, ge = null, Kt = 0, _c = 0, Oc = null, c0 = null, fu = 0, Mc = null;
  function it() {
    return (F & 2) !== 0 && Z !== 0 ? Z & -Z : b.T !== null ? Rc() : Ef();
  }
  function f0() {
    if (nt === 0)
      if ((Z & 536870912) === 0 || K) {
        var l = Au;
        Au <<= 1, (Au & 3932160) === 0 && (Au = 262144), nt = l;
      } else nt = 536870912;
    return l = at.current, l !== null && (l.flags |= 32), nt;
  }
  function $l(l, t, a) {
    (l === ol && (ll === 2 || ll === 9) || l.cancelPendingCommit !== null) && (be(l, 0), da(
      l,
      Z,
      nt,
      !1
    )), De(l, a), ((F & 2) === 0 || l !== ol) && (l === ol && ((F & 2) === 0 && (Ba |= a), hl === 4 && da(
      l,
      Z,
      nt,
      !1
    )), Mt(l));
  }
  function o0(l, t, a) {
    if ((F & 6) !== 0) throw Error(m(327));
    var e = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Me(l, t), u = e ? ev(l, t) : Uc(l, t, !0), n = e;
    do {
      if (u === 0) {
        me && !e && da(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, n && !tv(a)) {
          u = Uc(l, t, !1), n = !1;
          continue;
        }
        if (u === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var i = 0;
          else
            i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              u = cu;
              var f = c.current.memoizedState.isDehydrated;
              if (f && (be(c, i).flags |= 256), i = Uc(
                c,
                i,
                !1
              ), i !== 2) {
                if (Tc && !f) {
                  c.errorRecoveryDisabledLanes |= n, Ba |= n, u = 4;
                  break l;
                }
                n = Wl, Wl = u, n !== null && (Wl === null ? Wl = n : Wl.push.apply(
                  Wl,
                  n
                ));
              }
              u = i;
            }
            if (n = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          be(l, 0), da(l, t, 0, !0);
          break;
        }
        l: {
          switch (e = l, n = u, n) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              da(
                e,
                t,
                nt,
                !fa
              );
              break l;
            case 2:
              Wl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((t & 62914560) === t && (u = mn + 300 - Fl(), 10 < u)) {
            if (da(
              e,
              t,
              nt,
              !fa
            ), _u(e, 0, !0) !== 0) break l;
            Kt = t, e.timeoutHandle = G0(
              s0.bind(
                null,
                e,
                a,
                Wl,
                gn,
                xc,
                t,
                nt,
                Ba,
                ye,
                fa,
                n,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break l;
          }
          s0(
            e,
            a,
            Wl,
            gn,
            xc,
            t,
            nt,
            Ba,
            ye,
            fa,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Mt(l);
  }
  function s0(l, t, a, e, u, n, i, c, f, v, g, S, h, y) {
    if (l.timeoutHandle = -1, S = t.subtreeFlags, S & 8192 || (S & 16785408) === 16785408) {
      S = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: wt
      }, a0(
        t,
        n,
        S
      );
      var _ = (n & 62914560) === n ? mn - Fl() : (n & 4194048) === n ? i0 - Fl() : 0;
      if (_ = Bv(
        S,
        _
      ), _ !== null) {
        Kt = n, l.cancelPendingCommit = _(
          b0.bind(
            null,
            l,
            t,
            n,
            a,
            e,
            u,
            i,
            c,
            f,
            g,
            S,
            null,
            h,
            y
          )
        ), da(l, n, i, !v);
        return;
      }
    }
    b0(
      l,
      t,
      n,
      a,
      e,
      u,
      i,
      c,
      f
    );
  }
  function tv(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var e = 0; e < a.length; e++) {
          var u = a[e], n = u.getSnapshot;
          u = u.value;
          try {
            if (!lt(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function da(l, t, a, e) {
    t &= ~Ac, t &= ~Ba, l.suspendedLanes |= t, l.pingedLanes &= ~t, e && (l.warmLanes |= t), e = l.expirationTimes;
    for (var u = t; 0 < u; ) {
      var n = 31 - Pl(u), i = 1 << n;
      e[n] = -1, u &= ~i;
    }
    a !== 0 && pf(l, a, t);
  }
  function bn() {
    return (F & 6) === 0 ? (ou(0), !1) : !0;
  }
  function Dc() {
    if (X !== null) {
      if (ll === 0)
        var l = X.return;
      else
        l = X, Ct = Ua = null, Li(l), fe = null, Le = 0, l = X;
      for (; l !== null; )
        Xs(l.alternate, l), l = l.return;
      X = null;
    }
  }
  function be(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, zv(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), Kt = 0, Dc(), ol = l, X = a = Ht(l.current, null), Z = t, ll = 0, ut = null, fa = !1, me = Me(l, t), Tc = !1, ye = nt = Ac = Ba = oa = hl = 0, Wl = cu = null, xc = !1, (t & 8) !== 0 && (t |= t & 32);
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= t; 0 < e; ) {
        var u = 31 - Pl(e), n = 1 << u;
        t |= l[u], e &= ~n;
      }
    return Lt = t, Yu(), a;
  }
  function r0(l, t) {
    Y = null, b.H = Pe, t === ce || t === Ku ? (t = Oo(), ll = 3) : t === Hi ? (t = Oo(), ll = 4) : ll = t === cc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ut = t, X === null && (hl = 1, cn(
      l,
      rt(t, l.current)
    ));
  }
  function d0() {
    var l = at.current;
    return l === null ? !0 : (Z & 4194048) === Z ? mt === null : (Z & 62914560) === Z || (Z & 536870912) !== 0 ? l === mt : !1;
  }
  function v0() {
    var l = b.H;
    return b.H = Pe, l === null ? Pe : l;
  }
  function h0() {
    var l = b.A;
    return b.A = Pd, l;
  }
  function pn() {
    hl = 4, fa || (Z & 4194048) !== Z && at.current !== null || (me = !0), (oa & 134217727) === 0 && (Ba & 134217727) === 0 || ol === null || da(
      ol,
      Z,
      nt,
      !1
    );
  }
  function Uc(l, t, a) {
    var e = F;
    F |= 2;
    var u = v0(), n = h0();
    (ol !== l || Z !== t) && (gn = null, be(l, t)), t = !1;
    var i = hl;
    l: do
      try {
        if (ll !== 0 && X !== null) {
          var c = X, f = ut;
          switch (ll) {
            case 8:
              Dc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              at.current === null && (t = !0);
              var v = ll;
              if (ll = 0, ut = null, pe(l, c, f, v), a && me) {
                i = 0;
                break l;
              }
              break;
            default:
              v = ll, ll = 0, ut = null, pe(l, c, f, v);
          }
        }
        av(), i = hl;
        break;
      } catch (g) {
        r0(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Ct = Ua = null, F = e, b.H = u, b.A = n, X === null && (ol = null, Z = 0, Yu()), i;
  }
  function av() {
    for (; X !== null; ) m0(X);
  }
  function ev(l, t) {
    var a = F;
    F |= 2;
    var e = v0(), u = h0();
    ol !== l || Z !== t ? (gn = null, yn = Fl() + 500, be(l, t)) : me = Me(
      l,
      t
    );
    l: do
      try {
        if (ll !== 0 && X !== null) {
          t = X;
          var n = ut;
          t: switch (ll) {
            case 1:
              ll = 0, ut = null, pe(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (xo(n)) {
                ll = 0, ut = null, y0(t);
                break;
              }
              t = function() {
                ll !== 2 && ll !== 9 || ol !== l || (ll = 7), Mt(l);
              }, n.then(t, t);
              break l;
            case 3:
              ll = 7;
              break l;
            case 4:
              ll = 5;
              break l;
            case 7:
              xo(n) ? (ll = 0, ut = null, y0(t)) : (ll = 0, ut = null, pe(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (X.tag) {
                case 26:
                  i = X.memoizedState;
                case 5:
                case 27:
                  var c = X;
                  if (i ? tr(i) : c.stateNode.complete) {
                    ll = 0, ut = null;
                    var f = c.sibling;
                    if (f !== null) X = f;
                    else {
                      var v = c.return;
                      v !== null ? (X = v, Sn(v)) : X = null;
                    }
                    break t;
                  }
              }
              ll = 0, ut = null, pe(l, t, n, 5);
              break;
            case 6:
              ll = 0, ut = null, pe(l, t, n, 6);
              break;
            case 8:
              Dc(), hl = 6;
              break l;
            default:
              throw Error(m(462));
          }
        }
        uv();
        break;
      } catch (g) {
        r0(l, g);
      }
    while (!0);
    return Ct = Ua = null, b.H = e, b.A = u, F = a, X !== null ? 0 : (ol = null, Z = 0, Yu(), hl);
  }
  function uv() {
    for (; X !== null && !Or(); )
      m0(X);
  }
  function m0(l) {
    var t = Bs(l.alternate, l, Lt);
    l.memoizedProps = l.pendingProps, t === null ? Sn(l) : X = t;
  }
  function y0(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Hs(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Z
        );
        break;
      case 11:
        t = Hs(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Z
        );
        break;
      case 5:
        Li(t);
      default:
        Xs(a, t), t = X = ho(t, Lt), t = Bs(a, t, Lt);
    }
    l.memoizedProps = l.pendingProps, t === null ? Sn(l) : X = t;
  }
  function pe(l, t, a, e) {
    Ct = Ua = null, Li(t), fe = null, Le = 0;
    var u = t.return;
    try {
      if (Kd(
        l,
        u,
        t,
        a,
        Z
      )) {
        hl = 1, cn(
          l,
          rt(a, l.current)
        ), X = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw X = u, n;
      hl = 1, cn(
        l,
        rt(a, l.current)
      ), X = null;
      return;
    }
    t.flags & 32768 ? (K || e === 1 ? l = !0 : me || (Z & 536870912) !== 0 ? l = !1 : (fa = l = !0, (e === 2 || e === 9 || e === 3 || e === 6) && (e = at.current, e !== null && e.tag === 13 && (e.flags |= 16384))), g0(t, l)) : Sn(t);
  }
  function Sn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        g0(
          t,
          fa
        );
        return;
      }
      l = t.return;
      var a = Wd(
        t.alternate,
        t,
        Lt
      );
      if (a !== null) {
        X = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        X = t;
        return;
      }
      X = t = l;
    } while (t !== null);
    hl === 0 && (hl = 5);
  }
  function g0(l, t) {
    do {
      var a = $d(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, X = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        X = l;
        return;
      }
      X = l = a;
    } while (l !== null);
    hl = 6, X = null;
  }
  function b0(l, t, a, e, u, n, i, c, f) {
    l.cancelPendingCommit = null;
    do
      zn();
    while (_l !== 0);
    if ((F & 6) !== 0) throw Error(m(327));
    if (t !== null) {
      if (t === l.current) throw Error(m(177));
      if (n = t.lanes | t.childLanes, n |= bi, qr(
        l,
        a,
        n,
        i,
        c,
        f
      ), l === ol && (X = ol = null, Z = 0), ge = t, ra = l, Kt = a, _c = n, Oc = u, c0 = e, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, fv(Eu, function() {
        return T0(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), e = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || e) {
        e = b.T, b.T = null, u = A.p, A.p = 2, i = F, F |= 4;
        try {
          Fd(l, t, a);
        } finally {
          F = i, A.p = u, b.T = e;
        }
      }
      _l = 1, p0(), S0(), z0();
    }
  }
  function p0() {
    if (_l === 1) {
      _l = 0;
      var l = ra, t = ge, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = b.T, b.T = null;
        var e = A.p;
        A.p = 2;
        var u = F;
        F |= 4;
        try {
          Ps(t, l);
          var n = Qc, i = uo(l.containerInfo), c = n.focusedElem, f = n.selectionRange;
          if (i !== c && c && c.ownerDocument && eo(
            c.ownerDocument.documentElement,
            c
          )) {
            if (f !== null && vi(c)) {
              var v = f.start, g = f.end;
              if (g === void 0 && (g = v), "selectionStart" in c)
                c.selectionStart = v, c.selectionEnd = Math.min(
                  g,
                  c.value.length
                );
              else {
                var S = c.ownerDocument || document, h = S && S.defaultView || window;
                if (h.getSelection) {
                  var y = h.getSelection(), _ = c.textContent.length, w = Math.min(f.start, _), nl = f.end === void 0 ? w : Math.min(f.end, _);
                  !y.extend && w > nl && (i = nl, nl = w, w = i);
                  var r = ao(
                    c,
                    w
                  ), o = ao(
                    c,
                    nl
                  );
                  if (r && o && (y.rangeCount !== 1 || y.anchorNode !== r.node || y.anchorOffset !== r.offset || y.focusNode !== o.node || y.focusOffset !== o.offset)) {
                    var d = S.createRange();
                    d.setStart(r.node, r.offset), y.removeAllRanges(), w > nl ? (y.addRange(d), y.extend(o.node, o.offset)) : (d.setEnd(o.node, o.offset), y.addRange(d));
                  }
                }
              }
            }
            for (S = [], y = c; y = y.parentNode; )
              y.nodeType === 1 && S.push({
                element: y,
                left: y.scrollLeft,
                top: y.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < S.length; c++) {
              var p = S[c];
              p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
            }
          }
          Hn = !!Xc, Qc = Xc = null;
        } finally {
          F = u, A.p = e, b.T = a;
        }
      }
      l.current = t, _l = 2;
    }
  }
  function S0() {
    if (_l === 2) {
      _l = 0;
      var l = ra, t = ge, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = b.T, b.T = null;
        var e = A.p;
        A.p = 2;
        var u = F;
        F |= 4;
        try {
          ks(l, t.alternate, t);
        } finally {
          F = u, A.p = e, b.T = a;
        }
      }
      _l = 3;
    }
  }
  function z0() {
    if (_l === 4 || _l === 3) {
      _l = 0, Mr();
      var l = ra, t = ge, a = Kt, e = c0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? _l = 5 : (_l = 0, ge = ra = null, E0(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (u === 0 && (sa = null), kn(a), t = t.stateNode, Il && typeof Il.onCommitFiberRoot == "function")
        try {
          Il.onCommitFiberRoot(
            Oe,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (e !== null) {
        t = b.T, u = A.p, A.p = 2, b.T = null;
        try {
          for (var n = l.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          b.T = t, A.p = u;
        }
      }
      (Kt & 3) !== 0 && zn(), Mt(l), u = l.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? l === Mc ? fu++ : (fu = 0, Mc = l) : fu = 0, ou(0);
    }
  }
  function E0(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ze(t)));
  }
  function zn() {
    return p0(), S0(), z0(), T0();
  }
  function T0() {
    if (_l !== 5) return !1;
    var l = ra, t = _c;
    _c = 0;
    var a = kn(Kt), e = b.T, u = A.p;
    try {
      A.p = 32 > a ? 32 : a, b.T = null, a = Oc, Oc = null;
      var n = ra, i = Kt;
      if (_l = 0, ge = ra = null, Kt = 0, (F & 6) !== 0) throw Error(m(331));
      var c = F;
      if (F |= 4, u0(n.current), t0(
        n,
        n.current,
        i,
        a
      ), F = c, ou(0, !1), Il && typeof Il.onPostCommitFiberRoot == "function")
        try {
          Il.onPostCommitFiberRoot(Oe, n);
        } catch {
        }
      return !0;
    } finally {
      A.p = u, b.T = e, E0(l, t);
    }
  }
  function A0(l, t, a) {
    t = rt(a, t), t = ic(l.stateNode, t, 2), l = ua(l, t, 2), l !== null && (De(l, 2), Mt(l));
  }
  function tl(l, t, a) {
    if (l.tag === 3)
      A0(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          A0(
            t,
            l,
            a
          );
          break;
        } else if (t.tag === 1) {
          var e = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof e.componentDidCatch == "function" && (sa === null || !sa.has(e))) {
            l = rt(a, l), a = xs(2), e = ua(t, a, 2), e !== null && (_s(
              a,
              e,
              t,
              l
            ), De(e, 2), Mt(e));
            break;
          }
        }
        t = t.return;
      }
  }
  function wc(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new lv();
      var u = /* @__PURE__ */ new Set();
      e.set(t, u);
    } else
      u = e.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), e.set(t, u));
    u.has(a) || (Tc = !0, u.add(a), l = nv.bind(null, l, t, a), t.then(l, l));
  }
  function nv(l, t, a) {
    var e = l.pingCache;
    e !== null && e.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, ol === l && (Z & a) === a && (hl === 4 || hl === 3 && (Z & 62914560) === Z && 300 > Fl() - mn ? (F & 2) === 0 && be(l, 0) : Ac |= a, ye === Z && (ye = 0)), Mt(l);
  }
  function x0(l, t) {
    t === 0 && (t = bf()), l = Oa(l, t), l !== null && (De(l, t), Mt(l));
  }
  function iv(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), x0(l, a);
  }
  function cv(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var e = l.stateNode, u = l.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    e !== null && e.delete(t), x0(l, a);
  }
  function fv(l, t) {
    return Vn(l, t);
  }
  var En = null, Se = null, Nc = !1, Tn = !1, Hc = !1, va = 0;
  function Mt(l) {
    l !== Se && l.next === null && (Se === null ? En = Se = l : Se = Se.next = l), Tn = !0, Nc || (Nc = !0, sv());
  }
  function ou(l, t) {
    if (!Hc && Tn) {
      Hc = !0;
      do
        for (var a = !1, e = En; e !== null; ) {
          if (l !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = e.suspendedLanes, c = e.pingedLanes;
              n = (1 << 31 - Pl(42 | l) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, D0(e, n));
          } else
            n = Z, n = _u(
              e,
              e === ol ? n : 0,
              e.cancelPendingCommit !== null || e.timeoutHandle !== -1
            ), (n & 3) === 0 || Me(e, n) || (a = !0, D0(e, n));
          e = e.next;
        }
      while (a);
      Hc = !1;
    }
  }
  function ov() {
    _0();
  }
  function _0() {
    Tn = Nc = !1;
    var l = 0;
    va !== 0 && Sv() && (l = va);
    for (var t = Fl(), a = null, e = En; e !== null; ) {
      var u = e.next, n = O0(e, t);
      n === 0 ? (e.next = null, a === null ? En = u : a.next = u, u === null && (Se = a)) : (a = e, (l !== 0 || (n & 3) !== 0) && (Tn = !0)), e = u;
    }
    _l !== 0 && _l !== 5 || ou(l), va !== 0 && (va = 0);
  }
  function O0(l, t) {
    for (var a = l.suspendedLanes, e = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - Pl(n), c = 1 << i, f = u[i];
      f === -1 ? ((c & a) === 0 || (c & e) !== 0) && (u[i] = jr(c, t)) : f <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = ol, a = Z, a = _u(
      l,
      l === t ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e = l.callbackNode, a === 0 || l === t && (ll === 2 || ll === 9) || l.cancelPendingCommit !== null)
      return e !== null && e !== null && Ln(e), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Me(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (e !== null && Ln(e), kn(a)) {
        case 2:
        case 8:
          a = yf;
          break;
        case 32:
          a = Eu;
          break;
        case 268435456:
          a = gf;
          break;
        default:
          a = Eu;
      }
      return e = M0.bind(null, l), a = Vn(a, e), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return e !== null && e !== null && Ln(e), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function M0(l, t) {
    if (_l !== 0 && _l !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (zn() && l.callbackNode !== a)
      return null;
    var e = Z;
    return e = _u(
      l,
      l === ol ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e === 0 ? null : (o0(l, e, t), O0(l, Fl()), l.callbackNode != null && l.callbackNode === a ? M0.bind(null, l) : null);
  }
  function D0(l, t) {
    if (zn()) return null;
    o0(l, t, !0);
  }
  function sv() {
    Ev(function() {
      (F & 6) !== 0 ? Vn(
        mf,
        ov
      ) : _0();
    });
  }
  function Rc() {
    if (va === 0) {
      var l = ne;
      l === 0 && (l = Tu, Tu <<= 1, (Tu & 261888) === 0 && (Tu = 256)), va = l;
    }
    return va;
  }
  function U0(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Uu("" + l);
  }
  function w0(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function rv(l, t, a, e, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var n = U0(
        (u[Vl] || null).action
      ), i = e.submitter;
      i && (t = (t = i[Vl] || null) ? U0(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
      var c = new Ru(
        "action",
        "action",
        null,
        e,
        u
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (e.defaultPrevented) {
                if (va !== 0) {
                  var f = i ? w0(u, i) : new FormData(u);
                  lc(
                    a,
                    {
                      pending: !0,
                      data: f,
                      method: u.method,
                      action: n
                    },
                    null,
                    f
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), f = i ? w0(u, i) : new FormData(u), lc(
                  a,
                  {
                    pending: !0,
                    data: f,
                    method: u.method,
                    action: n
                  },
                  n,
                  f
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Cc = 0; Cc < gi.length; Cc++) {
    var jc = gi[Cc], dv = jc.toLowerCase(), vv = jc[0].toUpperCase() + jc.slice(1);
    pt(
      dv,
      "on" + vv
    );
  }
  pt(co, "onAnimationEnd"), pt(fo, "onAnimationIteration"), pt(oo, "onAnimationStart"), pt("dblclick", "onDoubleClick"), pt("focusin", "onFocus"), pt("focusout", "onBlur"), pt(Dd, "onTransitionRun"), pt(Ud, "onTransitionStart"), pt(wd, "onTransitionCancel"), pt(so, "onTransitionEnd"), La("onMouseEnter", ["mouseout", "mouseover"]), La("onMouseLeave", ["mouseout", "mouseover"]), La("onPointerEnter", ["pointerout", "pointerover"]), La("onPointerLeave", ["pointerout", "pointerover"]), Ta(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ta(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ta("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ta(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ta(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ta(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var su = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), hv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su)
  );
  function N0(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a], u = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = e.length - 1; 0 <= i; i--) {
            var c = e[i], f = c.instance, v = c.currentTarget;
            if (c = c.listener, f !== n && u.isPropagationStopped())
              break l;
            n = c, u.currentTarget = v;
            try {
              n(u);
            } catch (g) {
              qu(g);
            }
            u.currentTarget = null, n = f;
          }
        else
          for (i = 0; i < e.length; i++) {
            if (c = e[i], f = c.instance, v = c.currentTarget, c = c.listener, f !== n && u.isPropagationStopped())
              break l;
            n = c, u.currentTarget = v;
            try {
              n(u);
            } catch (g) {
              qu(g);
            }
            u.currentTarget = null, n = f;
          }
      }
    }
  }
  function Q(l, t) {
    var a = t[Wn];
    a === void 0 && (a = t[Wn] = /* @__PURE__ */ new Set());
    var e = l + "__bubble";
    a.has(e) || (H0(t, l, 2, !1), a.add(e));
  }
  function qc(l, t, a) {
    var e = 0;
    t && (e |= 4), H0(
      a,
      l,
      e,
      t
    );
  }
  var An = "_reactListening" + Math.random().toString(36).slice(2);
  function Yc(l) {
    if (!l[An]) {
      l[An] = !0, xf.forEach(function(a) {
        a !== "selectionchange" && (hv.has(a) || qc(a, !1, l), qc(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[An] || (t[An] = !0, qc("selectionchange", !1, t));
    }
  }
  function H0(l, t, a, e) {
    switch (fr(t)) {
      case 2:
        var u = Qv;
        break;
      case 8:
        u = Zv;
        break;
      default:
        u = Pc;
    }
    a = u.bind(
      null,
      t,
      a,
      l
    ), u = void 0, !ui || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), e ? u !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: u
    }) : l.addEventListener(t, a, !0) : u !== void 0 ? l.addEventListener(t, a, {
      passive: u
    }) : l.addEventListener(t, a, !1);
  }
  function Bc(l, t, a, e, u) {
    var n = e;
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
      l: for (; ; ) {
        if (e === null) return;
        var i = e.tag;
        if (i === 3 || i === 4) {
          var c = e.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = e.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = Qa(c), i === null) return;
            if (f = i.tag, f === 5 || f === 6 || f === 26 || f === 27) {
              e = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        e = e.return;
      }
    qf(function() {
      var v = n, g = ai(a), S = [];
      l: {
        var h = ro.get(l);
        if (h !== void 0) {
          var y = Ru, _ = l;
          switch (l) {
            case "keypress":
              if (Nu(a) === 0) break l;
            case "keydown":
            case "keyup":
              y = cd;
              break;
            case "focusin":
              _ = "focus", y = fi;
              break;
            case "focusout":
              _ = "blur", y = fi;
              break;
            case "beforeblur":
            case "afterblur":
              y = fi;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              y = Gf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              y = Wr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              y = sd;
              break;
            case co:
            case fo:
            case oo:
              y = Ir;
              break;
            case so:
              y = dd;
              break;
            case "scroll":
            case "scrollend":
              y = Jr;
              break;
            case "wheel":
              y = hd;
              break;
            case "copy":
            case "cut":
            case "paste":
              y = ld;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              y = Qf;
              break;
            case "toggle":
            case "beforetoggle":
              y = yd;
          }
          var w = (t & 4) !== 0, nl = !w && (l === "scroll" || l === "scrollend"), r = w ? h !== null ? h + "Capture" : null : h;
          w = [];
          for (var o = v, d; o !== null; ) {
            var p = o;
            if (d = p.stateNode, p = p.tag, p !== 5 && p !== 26 && p !== 27 || d === null || r === null || (p = Ne(o, r), p != null && w.push(
              ru(o, p, d)
            )), nl) break;
            o = o.return;
          }
          0 < w.length && (h = new y(
            h,
            _,
            null,
            a,
            g
          ), S.push({ event: h, listeners: w }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", y = l === "mouseout" || l === "pointerout", h && a !== ti && (_ = a.relatedTarget || a.fromElement) && (Qa(_) || _[Xa]))
            break l;
          if ((y || h) && (h = g.window === g ? g : (h = g.ownerDocument) ? h.defaultView || h.parentWindow : window, y ? (_ = a.relatedTarget || a.toElement, y = v, _ = _ ? Qa(_) : null, _ !== null && (nl = ml(_), w = _.tag, _ !== nl || w !== 5 && w !== 27 && w !== 6) && (_ = null)) : (y = null, _ = v), y !== _)) {
            if (w = Gf, p = "onMouseLeave", r = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (w = Qf, p = "onPointerLeave", r = "onPointerEnter", o = "pointer"), nl = y == null ? h : we(y), d = _ == null ? h : we(_), h = new w(
              p,
              o + "leave",
              y,
              a,
              g
            ), h.target = nl, h.relatedTarget = d, p = null, Qa(g) === v && (w = new w(
              r,
              o + "enter",
              _,
              a,
              g
            ), w.target = d, w.relatedTarget = nl, p = w), nl = p, y && _)
              t: {
                for (w = mv, r = y, o = _, d = 0, p = r; p; p = w(p))
                  d++;
                p = 0;
                for (var U = o; U; U = w(U))
                  p++;
                for (; 0 < d - p; )
                  r = w(r), d--;
                for (; 0 < p - d; )
                  o = w(o), p--;
                for (; d--; ) {
                  if (r === o || o !== null && r === o.alternate) {
                    w = r;
                    break t;
                  }
                  r = w(r), o = w(o);
                }
                w = null;
              }
            else w = null;
            y !== null && R0(
              S,
              h,
              y,
              w,
              !1
            ), _ !== null && nl !== null && R0(
              S,
              nl,
              _,
              w,
              !0
            );
          }
        }
        l: {
          if (h = v ? we(v) : window, y = h.nodeName && h.nodeName.toLowerCase(), y === "select" || y === "input" && h.type === "file")
            var W = $f;
          else if (kf(h))
            if (Ff)
              W = _d;
            else {
              W = Ad;
              var M = Td;
            }
          else
            y = h.nodeName, !y || y.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? v && li(v.elementType) && (W = $f) : W = xd;
          if (W && (W = W(l, v))) {
            Wf(
              S,
              W,
              a,
              g
            );
            break l;
          }
          M && M(l, h, v), l === "focusout" && v && h.type === "number" && v.memoizedProps.value != null && Pn(h, "number", h.value);
        }
        switch (M = v ? we(v) : window, l) {
          case "focusin":
            (kf(M) || M.contentEditable === "true") && (Fa = M, hi = v, Ge = null);
            break;
          case "focusout":
            Ge = hi = Fa = null;
            break;
          case "mousedown":
            mi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            mi = !1, no(S, a, g);
            break;
          case "selectionchange":
            if (Md) break;
          case "keydown":
          case "keyup":
            no(S, a, g);
        }
        var B;
        if (si)
          l: {
            switch (l) {
              case "compositionstart":
                var V = "onCompositionStart";
                break l;
              case "compositionend":
                V = "onCompositionEnd";
                break l;
              case "compositionupdate":
                V = "onCompositionUpdate";
                break l;
            }
            V = void 0;
          }
        else
          $a ? Kf(l, a) && (V = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (V = "onCompositionStart");
        V && (Zf && a.locale !== "ko" && ($a || V !== "onCompositionStart" ? V === "onCompositionEnd" && $a && (B = Yf()) : (Ft = g, ni = "value" in Ft ? Ft.value : Ft.textContent, $a = !0)), M = xn(v, V), 0 < M.length && (V = new Xf(
          V,
          l,
          null,
          a,
          g
        ), S.push({ event: V, listeners: M }), B ? V.data = B : (B = Jf(a), B !== null && (V.data = B)))), (B = bd ? pd(l, a) : Sd(l, a)) && (V = xn(v, "onBeforeInput"), 0 < V.length && (M = new Xf(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          g
        ), S.push({
          event: M,
          listeners: V
        }), M.data = B)), rv(
          S,
          l,
          v,
          a,
          g
        );
      }
      N0(S, t);
    });
  }
  function ru(l, t, a) {
    return {
      instance: l,
      listener: t,
      currentTarget: a
    };
  }
  function xn(l, t) {
    for (var a = t + "Capture", e = []; l !== null; ) {
      var u = l, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Ne(l, a), u != null && e.unshift(
        ru(l, u, n)
      ), u = Ne(l, t), u != null && e.push(
        ru(l, u, n)
      )), l.tag === 3) return e;
      l = l.return;
    }
    return [];
  }
  function mv(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function R0(l, t, a, e, u) {
    for (var n = t._reactName, i = []; a !== null && a !== e; ) {
      var c = a, f = c.alternate, v = c.stateNode;
      if (c = c.tag, f !== null && f === e) break;
      c !== 5 && c !== 26 && c !== 27 || v === null || (f = v, u ? (v = Ne(a, n), v != null && i.unshift(
        ru(a, v, f)
      )) : u || (v = Ne(a, n), v != null && i.push(
        ru(a, v, f)
      ))), a = a.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var yv = /\r\n?/g, gv = /\u0000|\uFFFD/g;
  function C0(l) {
    return (typeof l == "string" ? l : "" + l).replace(yv, `
`).replace(gv, "");
  }
  function j0(l, t) {
    return t = C0(t), C0(l) === t;
  }
  function ul(l, t, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string" ? t === "body" || t === "textarea" && e === "" || Ja(l, e) : (typeof e == "number" || typeof e == "bigint") && t !== "body" && Ja(l, "" + e);
        break;
      case "className":
        Mu(l, "class", e);
        break;
      case "tabIndex":
        Mu(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Mu(l, a, e);
        break;
      case "style":
        Cf(l, e, n);
        break;
      case "data":
        if (t !== "object") {
          Mu(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (e == null || typeof e == "function" || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        e = Uu("" + e), l.setAttribute(a, e);
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (a === "formAction" ? (t !== "input" && ul(l, t, "name", u.name, u, null), ul(
            l,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), ul(
            l,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), ul(
            l,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (ul(l, t, "encType", u.encType, u, null), ul(l, t, "method", u.method, u, null), ul(l, t, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        e = Uu("" + e), l.setAttribute(a, e);
        break;
      case "onClick":
        e != null && (l.onclick = wt);
        break;
      case "onScroll":
        e != null && Q("scroll", l);
        break;
      case "onScrollEnd":
        e != null && Q("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e))
            throw Error(m(61));
          if (a = e.__html, a != null) {
            if (u.children != null) throw Error(m(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (e == null || typeof e == "function" || typeof e == "boolean" || typeof e == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = Uu("" + e), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, "" + e) : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        e && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === !0 ? l.setAttribute(a, "") : e !== !1 && e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, e) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null && typeof e != "function" && typeof e != "symbol" && !isNaN(e) && 1 <= e ? l.setAttribute(a, e) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e) ? l.removeAttribute(a) : l.setAttribute(a, e);
        break;
      case "popover":
        Q("beforetoggle", l), Q("toggle", l), Ou(l, "popover", e);
        break;
      case "xlinkActuate":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          e
        );
        break;
      case "xlinkArcrole":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          e
        );
        break;
      case "xlinkRole":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          e
        );
        break;
      case "xlinkShow":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          e
        );
        break;
      case "xlinkTitle":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          e
        );
        break;
      case "xlinkType":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          e
        );
        break;
      case "xmlBase":
        Ut(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          e
        );
        break;
      case "xmlLang":
        Ut(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          e
        );
        break;
      case "xmlSpace":
        Ut(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          e
        );
        break;
      case "is":
        Ou(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Lr.get(a) || a, Ou(l, a, e));
    }
  }
  function Gc(l, t, a, e, u, n) {
    switch (a) {
      case "style":
        Cf(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e))
            throw Error(m(61));
          if (a = e.__html, a != null) {
            if (u.children != null) throw Error(m(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string" ? Ja(l, e) : (typeof e == "number" || typeof e == "bigint") && Ja(l, "" + e);
        break;
      case "onScroll":
        e != null && Q("scroll", l);
        break;
      case "onScrollEnd":
        e != null && Q("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = wt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!_f.hasOwnProperty(a))
          l: {
            if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), t = a.slice(2, u ? a.length - 7 : void 0), n = l[Vl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof e == "function")) {
              typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, e, u);
              break l;
            }
            a in l ? l[a] = e : e === !0 ? l.setAttribute(a, "") : Ou(l, a, e);
          }
    }
  }
  function Cl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Q("error", l), Q("load", l);
        var e = !1, u = !1, n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var i = a[n];
            if (i != null)
              switch (n) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(m(137, t));
                default:
                  ul(l, t, n, i, a, null);
              }
          }
        u && ul(l, t, "srcSet", a.srcSet, a, null), e && ul(l, t, "src", a.src, a, null);
        return;
      case "input":
        Q("invalid", l);
        var c = n = i = u = null, f = null, v = null;
        for (e in a)
          if (a.hasOwnProperty(e)) {
            var g = a[e];
            if (g != null)
              switch (e) {
                case "name":
                  u = g;
                  break;
                case "type":
                  i = g;
                  break;
                case "checked":
                  f = g;
                  break;
                case "defaultChecked":
                  v = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  c = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(m(137, t));
                  break;
                default:
                  ul(l, t, e, g, a, null);
              }
          }
        wf(
          l,
          n,
          c,
          f,
          v,
          i,
          u,
          !1
        );
        return;
      case "select":
        Q("invalid", l), e = i = n = null;
        for (u in a)
          if (a.hasOwnProperty(u) && (c = a[u], c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                e = c;
              default:
                ul(l, t, u, c, a, null);
            }
        t = n, a = i, l.multiple = !!e, t != null ? Ka(l, !!e, t, !1) : a != null && Ka(l, !!e, a, !0);
        return;
      case "textarea":
        Q("invalid", l), n = u = e = null;
        for (i in a)
          if (a.hasOwnProperty(i) && (c = a[i], c != null))
            switch (i) {
              case "value":
                e = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(m(91));
                break;
              default:
                ul(l, t, i, c, a, null);
            }
        Hf(l, e, u, n);
        return;
      case "option":
        for (f in a)
          if (a.hasOwnProperty(f) && (e = a[f], e != null))
            switch (f) {
              case "selected":
                l.selected = e && typeof e != "function" && typeof e != "symbol";
                break;
              default:
                ul(l, t, f, e, a, null);
            }
        return;
      case "dialog":
        Q("beforetoggle", l), Q("toggle", l), Q("cancel", l), Q("close", l);
        break;
      case "iframe":
      case "object":
        Q("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < su.length; e++)
          Q(su[e], l);
        break;
      case "image":
        Q("error", l), Q("load", l);
        break;
      case "details":
        Q("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Q("error", l), Q("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (v in a)
          if (a.hasOwnProperty(v) && (e = a[v], e != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, t));
              default:
                ul(l, t, v, e, a, null);
            }
        return;
      default:
        if (li(t)) {
          for (g in a)
            a.hasOwnProperty(g) && (e = a[g], e !== void 0 && Gc(
              l,
              t,
              g,
              e,
              a,
              void 0
            ));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && (e = a[c], e != null && ul(l, t, c, e, a, null));
  }
  function bv(l, t, a, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, n = null, i = null, c = null, f = null, v = null, g = null;
        for (y in a) {
          var S = a[y];
          if (a.hasOwnProperty(y) && S != null)
            switch (y) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = S;
              default:
                e.hasOwnProperty(y) || ul(l, t, y, null, e, S);
            }
        }
        for (var h in e) {
          var y = e[h];
          if (S = a[h], e.hasOwnProperty(h) && (y != null || S != null))
            switch (h) {
              case "type":
                n = y;
                break;
              case "name":
                u = y;
                break;
              case "checked":
                v = y;
                break;
              case "defaultChecked":
                g = y;
                break;
              case "value":
                i = y;
                break;
              case "defaultValue":
                c = y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null)
                  throw Error(m(137, t));
                break;
              default:
                y !== S && ul(
                  l,
                  t,
                  h,
                  y,
                  e,
                  S
                );
            }
        }
        In(
          l,
          i,
          c,
          f,
          v,
          g,
          n,
          u
        );
        return;
      case "select":
        y = i = c = h = null;
        for (n in a)
          if (f = a[n], a.hasOwnProperty(n) && f != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                y = f;
              default:
                e.hasOwnProperty(n) || ul(
                  l,
                  t,
                  n,
                  null,
                  e,
                  f
                );
            }
        for (u in e)
          if (n = e[u], f = a[u], e.hasOwnProperty(u) && (n != null || f != null))
            switch (u) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== f && ul(
                  l,
                  t,
                  u,
                  n,
                  e,
                  f
                );
            }
        t = c, a = i, e = y, h != null ? Ka(l, !!a, h, !1) : !!e != !!a && (t != null ? Ka(l, !!a, t, !0) : Ka(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        y = h = null;
        for (c in a)
          if (u = a[c], a.hasOwnProperty(c) && u != null && !e.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                ul(l, t, c, null, e, u);
            }
        for (i in e)
          if (u = e[i], n = a[i], e.hasOwnProperty(i) && (u != null || n != null))
            switch (i) {
              case "value":
                h = u;
                break;
              case "defaultValue":
                y = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(m(91));
                break;
              default:
                u !== n && ul(l, t, i, u, e, n);
            }
        Nf(l, h, y);
        return;
      case "option":
        for (var _ in a)
          if (h = a[_], a.hasOwnProperty(_) && h != null && !e.hasOwnProperty(_))
            switch (_) {
              case "selected":
                l.selected = !1;
                break;
              default:
                ul(
                  l,
                  t,
                  _,
                  null,
                  e,
                  h
                );
            }
        for (f in e)
          if (h = e[f], y = a[f], e.hasOwnProperty(f) && h !== y && (h != null || y != null))
            switch (f) {
              case "selected":
                l.selected = h && typeof h != "function" && typeof h != "symbol";
                break;
              default:
                ul(
                  l,
                  t,
                  f,
                  h,
                  e,
                  y
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var w in a)
          h = a[w], a.hasOwnProperty(w) && h != null && !e.hasOwnProperty(w) && ul(l, t, w, null, e, h);
        for (v in e)
          if (h = e[v], y = a[v], e.hasOwnProperty(v) && h !== y && (h != null || y != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(m(137, t));
                break;
              default:
                ul(
                  l,
                  t,
                  v,
                  h,
                  e,
                  y
                );
            }
        return;
      default:
        if (li(t)) {
          for (var nl in a)
            h = a[nl], a.hasOwnProperty(nl) && h !== void 0 && !e.hasOwnProperty(nl) && Gc(
              l,
              t,
              nl,
              void 0,
              e,
              h
            );
          for (g in e)
            h = e[g], y = a[g], !e.hasOwnProperty(g) || h === y || h === void 0 && y === void 0 || Gc(
              l,
              t,
              g,
              h,
              e,
              y
            );
          return;
        }
    }
    for (var r in a)
      h = a[r], a.hasOwnProperty(r) && h != null && !e.hasOwnProperty(r) && ul(l, t, r, null, e, h);
    for (S in e)
      h = e[S], y = a[S], !e.hasOwnProperty(S) || h === y || h == null && y == null || ul(l, t, S, h, e, y);
  }
  function q0(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function pv() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), e = 0; e < a.length; e++) {
        var u = a[e], n = u.transferSize, i = u.initiatorType, c = u.duration;
        if (n && c && q0(i)) {
          for (i = 0, c = u.responseEnd, e += 1; e < a.length; e++) {
            var f = a[e], v = f.startTime;
            if (v > c) break;
            var g = f.transferSize, S = f.initiatorType;
            g && q0(S) && (f = f.responseEnd, i += g * (f < c ? 1 : (c - v) / (f - v)));
          }
          if (--e, t += 8 * (n + i) / (u.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Xc = null, Qc = null;
  function _n(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Y0(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function B0(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Zc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Vc = null;
  function Sv() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Vc ? !1 : (Vc = l, !0) : (Vc = null, !1);
  }
  var G0 = typeof setTimeout == "function" ? setTimeout : void 0, zv = typeof clearTimeout == "function" ? clearTimeout : void 0, X0 = typeof Promise == "function" ? Promise : void 0, Ev = typeof queueMicrotask == "function" ? queueMicrotask : typeof X0 < "u" ? function(l) {
    return X0.resolve(null).then(l).catch(Tv);
  } : G0;
  function Tv(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function ha(l) {
    return l === "head";
  }
  function Q0(l, t) {
    var a = t, e = 0;
    do {
      var u = a.nextSibling;
      if (l.removeChild(a), u && u.nodeType === 8)
        if (a = u.data, a === "/$" || a === "/&") {
          if (e === 0) {
            l.removeChild(u), Ae(t);
            return;
          }
          e--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          e++;
        else if (a === "html")
          du(l.ownerDocument.documentElement);
        else if (a === "head") {
          a = l.ownerDocument.head, du(a);
          for (var n = a.firstChild; n; ) {
            var i = n.nextSibling, c = n.nodeName;
            n[Ue] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = i;
          }
        } else
          a === "body" && du(l.ownerDocument.body);
      a = u;
    } while (a);
    Ae(t);
  }
  function Z0(l, t) {
    var a = l;
    l = 0;
    do {
      var e = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), e && e.nodeType === 8)
        if (a = e.data, a === "/$") {
          if (l === 0) break;
          l--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
      a = e;
    } while (a);
  }
  function Lc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Lc(a), $n(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Av(l, t, a, e) {
    for (; l.nodeType === 1; ) {
      var u = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (e) {
        if (!l[Ue])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = yt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function xv(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = yt(l.nextSibling), l === null)) return null;
    return l;
  }
  function V0(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = yt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Kc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Jc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function _v(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var e = function() {
        t(), a.removeEventListener("DOMContentLoaded", e);
      };
      a.addEventListener("DOMContentLoaded", e), l._reactRetry = e;
    }
  }
  function yt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var kc = null;
  function L0(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return yt(l.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function K0(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function J0(l, t, a) {
    switch (t = _n(a), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(m(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(m(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(m(454));
        return l;
      default:
        throw Error(m(451));
    }
  }
  function du(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    $n(l);
  }
  var gt = /* @__PURE__ */ new Map(), k0 = /* @__PURE__ */ new Set();
  function On(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Jt = A.d;
  A.d = {
    f: Ov,
    r: Mv,
    D: Dv,
    C: Uv,
    L: wv,
    m: Nv,
    X: Rv,
    S: Hv,
    M: Cv
  };
  function Ov() {
    var l = Jt.f(), t = bn();
    return l || t;
  }
  function Mv(l) {
    var t = Za(l);
    t !== null && t.tag === 5 && t.type === "form" ? rs(t) : Jt.r(l);
  }
  var ze = typeof document > "u" ? null : document;
  function W0(l, t, a) {
    var e = ze;
    if (e && typeof t == "string" && t) {
      var u = ot(t);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), k0.has(u) || (k0.add(u), l = { rel: l, crossOrigin: a, href: t }, e.querySelector(u) === null && (t = e.createElement("link"), Cl(t, "link", l), Dl(t), e.head.appendChild(t)));
    }
  }
  function Dv(l) {
    Jt.D(l), W0("dns-prefetch", l, null);
  }
  function Uv(l, t) {
    Jt.C(l, t), W0("preconnect", l, t);
  }
  function wv(l, t, a) {
    Jt.L(l, t, a);
    var e = ze;
    if (e && l && t) {
      var u = 'link[rel="preload"][as="' + ot(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + ot(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (u += '[imagesizes="' + ot(
        a.imageSizes
      ) + '"]')) : u += '[href="' + ot(l) + '"]';
      var n = u;
      switch (t) {
        case "style":
          n = Ee(l);
          break;
        case "script":
          n = Te(l);
      }
      gt.has(n) || (l = N(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        },
        a
      ), gt.set(n, l), e.querySelector(u) !== null || t === "style" && e.querySelector(vu(n)) || t === "script" && e.querySelector(hu(n)) || (t = e.createElement("link"), Cl(t, "link", l), Dl(t), e.head.appendChild(t)));
    }
  }
  function Nv(l, t) {
    Jt.m(l, t);
    var a = ze;
    if (a && l) {
      var e = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + ot(e) + '"][href="' + ot(l) + '"]', n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Te(l);
      }
      if (!gt.has(n) && (l = N({ rel: "modulepreload", href: l }, t), gt.set(n, l), a.querySelector(u) === null)) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(hu(n)))
              return;
        }
        e = a.createElement("link"), Cl(e, "link", l), Dl(e), a.head.appendChild(e);
      }
    }
  }
  function Hv(l, t, a) {
    Jt.S(l, t, a);
    var e = ze;
    if (e && l) {
      var u = Va(e).hoistableStyles, n = Ee(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = e.querySelector(
          vu(n)
        ))
          c.loading = 5;
        else {
          l = N(
            { rel: "stylesheet", href: l, "data-precedence": t },
            a
          ), (a = gt.get(n)) && Wc(l, a);
          var f = i = e.createElement("link");
          Dl(f), Cl(f, "link", l), f._p = new Promise(function(v, g) {
            f.onload = v, f.onerror = g;
          }), f.addEventListener("load", function() {
            c.loading |= 1;
          }), f.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Mn(i, t, e);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, u.set(n, i);
      }
    }
  }
  function Rv(l, t) {
    Jt.X(l, t);
    var a = ze;
    if (a && l) {
      var e = Va(a).hoistableScripts, u = Te(l), n = e.get(u);
      n || (n = a.querySelector(hu(u)), n || (l = N({ src: l, async: !0 }, t), (t = gt.get(u)) && $c(l, t), n = a.createElement("script"), Dl(n), Cl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(u, n));
    }
  }
  function Cv(l, t) {
    Jt.M(l, t);
    var a = ze;
    if (a && l) {
      var e = Va(a).hoistableScripts, u = Te(l), n = e.get(u);
      n || (n = a.querySelector(hu(u)), n || (l = N({ src: l, async: !0, type: "module" }, t), (t = gt.get(u)) && $c(l, t), n = a.createElement("script"), Dl(n), Cl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(u, n));
    }
  }
  function $0(l, t, a, e) {
    var u = (u = G.current) ? On(u) : null;
    if (!u) throw Error(m(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Ee(a.href), a = Va(
          u
        ).hoistableStyles, e = a.get(t), e || (e = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, e)), e) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = Ee(a.href);
          var n = Va(
            u
          ).hoistableStyles, i = n.get(l);
          if (i || (u = u.ownerDocument || u, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, i), (n = u.querySelector(
            vu(l)
          )) && !n._p && (i.instance = n, i.state.loading = 5), gt.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, gt.set(l, a), n || jv(
            u,
            l,
            a,
            i.state
          ))), t && e === null)
            throw Error(m(528, ""));
          return i;
        }
        if (t && e !== null)
          throw Error(m(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Te(a), a = Va(
          u
        ).hoistableScripts, e = a.get(t), e || (e = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, e)), e) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(m(444, l));
    }
  }
  function Ee(l) {
    return 'href="' + ot(l) + '"';
  }
  function vu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function F0(l) {
    return N({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function jv(l, t, a, e) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? e.loading = 1 : (t = l.createElement("link"), e.preload = t, t.addEventListener("load", function() {
      return e.loading |= 1;
    }), t.addEventListener("error", function() {
      return e.loading |= 2;
    }), Cl(t, "link", a), Dl(t), l.head.appendChild(t));
  }
  function Te(l) {
    return '[src="' + ot(l) + '"]';
  }
  function hu(l) {
    return "script[async]" + l;
  }
  function I0(l, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var e = l.querySelector(
            'style[data-href~="' + ot(a.href) + '"]'
          );
          if (e)
            return t.instance = e, Dl(e), e;
          var u = N({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return e = (l.ownerDocument || l).createElement(
            "style"
          ), Dl(e), Cl(e, "style", u), Mn(e, a.precedence, l), t.instance = e;
        case "stylesheet":
          u = Ee(a.href);
          var n = l.querySelector(
            vu(u)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Dl(n), n;
          e = F0(a), (u = gt.get(u)) && Wc(e, u), n = (l.ownerDocument || l).createElement("link"), Dl(n);
          var i = n;
          return i._p = new Promise(function(c, f) {
            i.onload = c, i.onerror = f;
          }), Cl(n, "link", e), t.state.loading |= 4, Mn(n, a.precedence, l), t.instance = n;
        case "script":
          return n = Te(a.src), (u = l.querySelector(
            hu(n)
          )) ? (t.instance = u, Dl(u), u) : (e = a, (u = gt.get(n)) && (e = N({}, a), $c(e, u)), l = l.ownerDocument || l, u = l.createElement("script"), Dl(u), Cl(u, "link", e), l.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(m(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (e = t.instance, t.state.loading |= 4, Mn(e, a.precedence, l));
    return t.instance;
  }
  function Mn(l, t, a) {
    for (var e = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = e.length ? e[e.length - 1] : null, n = u, i = 0; i < e.length; i++) {
      var c = e[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function Wc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function $c(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Dn = null;
  function P0(l, t, a) {
    if (Dn === null) {
      var e = /* @__PURE__ */ new Map(), u = Dn = /* @__PURE__ */ new Map();
      u.set(a, e);
    } else
      u = Dn, e = u.get(a), e || (e = /* @__PURE__ */ new Map(), u.set(a, e));
    if (e.has(l)) return e;
    for (e.set(l, null), a = a.getElementsByTagName(l), u = 0; u < a.length; u++) {
      var n = a[u];
      if (!(n[Ue] || n[wl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = e.get(i);
        c ? c.push(n) : e.set(i, [n]);
      }
    }
    return e;
  }
  function lr(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(
      a,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function qv(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function tr(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Yv(l, t, a, e) {
    if (a.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var u = Ee(e.href), n = t.querySelector(
          vu(u)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Un.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, Dl(n);
          return;
        }
        n = t.ownerDocument || t, e = F0(e), (u = gt.get(u)) && Wc(e, u), n = n.createElement("link"), Dl(n);
        var i = n;
        i._p = new Promise(function(c, f) {
          i.onload = c, i.onerror = f;
        }), Cl(n, "link", e), a.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Un.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Fc = 0;
  function Bv(l, t) {
    return l.stylesheets && l.count === 0 && Nn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var e = setTimeout(function() {
        if (l.stylesheets && Nn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Fc === 0 && (Fc = 62500 * pv());
      var u = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Nn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Fc ? 50 : 800) + t
      );
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(e), clearTimeout(u);
      };
    } : null;
  }
  function Un() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Nn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var wn = null;
  function Nn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, wn = /* @__PURE__ */ new Map(), t.forEach(Gv, l), wn = null, Un.call(l));
  }
  function Gv(l, t) {
    if (!(t.state.loading & 4)) {
      var a = wn.get(l);
      if (a) var e = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), wn.set(l, a);
        for (var u = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < u.length; n++) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), e = i);
        }
        e && a.set(null, e);
      }
      u = t.instance, i = u.getAttribute("data-precedence"), n = a.get(i) || e, n === e && a.set(null, u), a.set(i, u), this.count++, e = Un.bind(this), u.addEventListener("load", e), u.addEventListener("error", e), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4;
    }
  }
  var mu = {
    $$typeof: jl,
    Provider: null,
    Consumer: null,
    _currentValue: H,
    _currentValue2: H,
    _threadCount: 0
  };
  function Xv(l, t, a, e, u, n, i, c, f) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Kn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kn(0), this.hiddenUpdates = Kn(null), this.identifierPrefix = e, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ar(l, t, a, e, u, n, i, c, f, v, g, S) {
    return l = new Xv(
      l,
      t,
      a,
      i,
      f,
      v,
      g,
      S,
      c
    ), t = 1, n === !0 && (t |= 24), n = tt(3, null, null, t), l.current = n, n.stateNode = l, t = Ui(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: e,
      isDehydrated: a,
      cache: t
    }, Ri(n), l;
  }
  function er(l) {
    return l ? (l = le, l) : le;
  }
  function ur(l, t, a, e, u, n) {
    u = er(u), e.context === null ? e.context = u : e.pendingContext = u, e = ea(t), e.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (e.callback = n), a = ua(l, e, t), a !== null && ($l(a, l, t), Je(a, l, t));
  }
  function nr(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Ic(l, t) {
    nr(l, t), (l = l.alternate) && nr(l, t);
  }
  function ir(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Oa(l, 67108864);
      t !== null && $l(t, l, 67108864), Ic(l, 67108864);
    }
  }
  function cr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = it();
      t = Jn(t);
      var a = Oa(l, t);
      a !== null && $l(a, l, t), Ic(l, t);
    }
  }
  var Hn = !0;
  function Qv(l, t, a, e) {
    var u = b.T;
    b.T = null;
    var n = A.p;
    try {
      A.p = 2, Pc(l, t, a, e);
    } finally {
      A.p = n, b.T = u;
    }
  }
  function Zv(l, t, a, e) {
    var u = b.T;
    b.T = null;
    var n = A.p;
    try {
      A.p = 8, Pc(l, t, a, e);
    } finally {
      A.p = n, b.T = u;
    }
  }
  function Pc(l, t, a, e) {
    if (Hn) {
      var u = lf(e);
      if (u === null)
        Bc(
          l,
          t,
          e,
          Rn,
          a
        ), or(l, e);
      else if (Lv(
        u,
        l,
        t,
        a,
        e
      ))
        e.stopPropagation();
      else if (or(l, e), t & 4 && -1 < Vv.indexOf(l)) {
        for (; u !== null; ) {
          var n = Za(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var i = Ea(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << 31 - Pl(i);
                      c.entanglements[1] |= f, i &= ~f;
                    }
                    Mt(n), (F & 6) === 0 && (yn = Fl() + 500, ou(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Oa(n, 2), c !== null && $l(c, n, 2), bn(), Ic(n, 2);
            }
          if (n = lf(e), n === null && Bc(
            l,
            t,
            e,
            Rn,
            a
          ), n === u) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else
        Bc(
          l,
          t,
          e,
          null,
          a
        );
    }
  }
  function lf(l) {
    return l = ai(l), tf(l);
  }
  var Rn = null;
  function tf(l) {
    if (Rn = null, l = Qa(l), l !== null) {
      var t = ml(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = P(t), l !== null) return l;
          l = null;
        } else if (a === 31) {
          if (l = yl(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Rn = l, null;
  }
  function fr(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Dr()) {
          case mf:
            return 2;
          case yf:
            return 8;
          case Eu:
          case Ur:
            return 32;
          case gf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var af = !1, ma = null, ya = null, ga = null, yu = /* @__PURE__ */ new Map(), gu = /* @__PURE__ */ new Map(), ba = [], Vv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function or(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ma = null;
        break;
      case "dragenter":
      case "dragleave":
        ya = null;
        break;
      case "mouseover":
      case "mouseout":
        ga = null;
        break;
      case "pointerover":
      case "pointerout":
        yu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gu.delete(t.pointerId);
    }
  }
  function bu(l, t, a, e, u, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: e,
      nativeEvent: n,
      targetContainers: [u]
    }, t !== null && (t = Za(t), t !== null && ir(t)), l) : (l.eventSystemFlags |= e, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
  }
  function Lv(l, t, a, e, u) {
    switch (t) {
      case "focusin":
        return ma = bu(
          ma,
          l,
          t,
          a,
          e,
          u
        ), !0;
      case "dragenter":
        return ya = bu(
          ya,
          l,
          t,
          a,
          e,
          u
        ), !0;
      case "mouseover":
        return ga = bu(
          ga,
          l,
          t,
          a,
          e,
          u
        ), !0;
      case "pointerover":
        var n = u.pointerId;
        return yu.set(
          n,
          bu(
            yu.get(n) || null,
            l,
            t,
            a,
            e,
            u
          )
        ), !0;
      case "gotpointercapture":
        return n = u.pointerId, gu.set(
          n,
          bu(
            gu.get(n) || null,
            l,
            t,
            a,
            e,
            u
          )
        ), !0;
    }
    return !1;
  }
  function sr(l) {
    var t = Qa(l.target);
    if (t !== null) {
      var a = ml(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = P(a), t !== null) {
            l.blockedOn = t, Tf(l.priority, function() {
              cr(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = yl(a), t !== null) {
            l.blockedOn = t, Tf(l.priority, function() {
              cr(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Cn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = lf(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var e = new a.constructor(
          a.type,
          a
        );
        ti = e, a.target.dispatchEvent(e), ti = null;
      } else
        return t = Za(a), t !== null && ir(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function rr(l, t, a) {
    Cn(l) && a.delete(t);
  }
  function Kv() {
    af = !1, ma !== null && Cn(ma) && (ma = null), ya !== null && Cn(ya) && (ya = null), ga !== null && Cn(ga) && (ga = null), yu.forEach(rr), gu.forEach(rr);
  }
  function jn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, af || (af = !0, T.unstable_scheduleCallback(
      T.unstable_NormalPriority,
      Kv
    )));
  }
  var qn = null;
  function dr(l) {
    qn !== l && (qn = l, T.unstable_scheduleCallback(
      T.unstable_NormalPriority,
      function() {
        qn === l && (qn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t], e = l[t + 1], u = l[t + 2];
          if (typeof e != "function") {
            if (tf(e || a) === null)
              continue;
            break;
          }
          var n = Za(a);
          n !== null && (l.splice(t, 3), t -= 3, lc(
            n,
            {
              pending: !0,
              data: u,
              method: a.method,
              action: e
            },
            e,
            u
          ));
        }
      }
    ));
  }
  function Ae(l) {
    function t(f) {
      return jn(f, l);
    }
    ma !== null && jn(ma, l), ya !== null && jn(ya, l), ga !== null && jn(ga, l), yu.forEach(t), gu.forEach(t);
    for (var a = 0; a < ba.length; a++) {
      var e = ba[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < ba.length && (a = ba[0], a.blockedOn === null); )
      sr(a), a.blockedOn === null && ba.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (e = 0; e < a.length; e += 3) {
        var u = a[e], n = a[e + 1], i = u[Vl] || null;
        if (typeof n == "function")
          i || dr(a);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, i = n[Vl] || null)
              c = i.formAction;
            else if (tf(u) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? a[e + 1] = c : (a.splice(e, 3), e -= 3), dr(a);
        }
      }
  }
  function vr() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(i) {
            return u = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      u !== null && (u(), u = null), e || setTimeout(a, 20);
    }
    function a() {
      if (!e && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var e = !1, u = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        e = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function ef(l) {
    this._internalRoot = l;
  }
  Yn.prototype.render = ef.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(m(409));
    var a = t.current, e = it();
    ur(a, e, l, t, null, null);
  }, Yn.prototype.unmount = ef.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      ur(l.current, 2, null, l, null, null), bn(), t[Xa] = null;
    }
  };
  function Yn(l) {
    this._internalRoot = l;
  }
  Yn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Ef();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < ba.length && t !== 0 && t < ba[a].priority; a++) ;
      ba.splice(a, 0, l), a === 0 && sr(l);
    }
  };
  var hr = il.version;
  if (hr !== "19.2.5")
    throw Error(
      m(
        527,
        hr,
        "19.2.5"
      )
    );
  A.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(m(188)) : (l = Object.keys(l).join(","), Error(m(268, l)));
    return l = E(t), l = l !== null ? k(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Jv = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bn.isDisabled && Bn.supportsFiber)
      try {
        Oe = Bn.inject(
          Jv
        ), Il = Bn;
      } catch {
      }
  }
  return Su.createRoot = function(l, t) {
    if (!J(l)) throw Error(m(299));
    var a = !1, e = "", u = zs, n = Es, i = Ts;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (e = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = ar(
      l,
      1,
      !1,
      null,
      null,
      a,
      e,
      null,
      u,
      n,
      i,
      vr
    ), l[Xa] = t.current, Yc(l), new ef(t);
  }, Su.hydrateRoot = function(l, t, a) {
    if (!J(l)) throw Error(m(299));
    var e = !1, u = "", n = zs, i = Es, c = Ts, f = null;
    return a != null && (a.unstable_strictMode === !0 && (e = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (i = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.formState !== void 0 && (f = a.formState)), t = ar(
      l,
      1,
      !0,
      t,
      a ?? null,
      e,
      u,
      f,
      n,
      i,
      c,
      vr
    ), t.context = er(null), a = t.current, e = it(), e = Jn(e), u = ea(e), u.callback = null, ua(a, u, e), a = e, t.current.lanes = a, De(t, a), Mt(t), l[Xa] = t.current, Yc(l), new Yn(t);
  }, Su.version = "19.2.5", Su;
}
var Ar;
function uh() {
  if (Ar) return nf.exports;
  Ar = 1;
  function T() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
      } catch (il) {
        console.error(il);
      }
  }
  return T(), nf.exports = eh(), nf.exports;
}
var nh = uh(), xe = df();
const ih = "my-react-widget-pokeapi", rf = (T) => T !== null && typeof T == "object", ch = (T) => {
  if (!rf(T)) return;
  const il = T.data;
  if (rf(il)) return il;
  const j = T.body;
  return rf(j) ? j : T;
}, fh = (T) => `${(T / 10).toFixed(1)} m`, oh = (T) => `${(T / 10).toFixed(1)} kg`, sh = {
  normal: "bg-stone-300 text-stone-900",
  fire: "bg-orange-400 text-orange-950",
  water: "bg-sky-400 text-sky-950",
  electric: "bg-yellow-300 text-yellow-950",
  grass: "bg-lime-400 text-lime-950",
  ice: "bg-cyan-200 text-cyan-950",
  fighting: "bg-red-700 text-white",
  poison: "bg-fuchsia-700 text-white",
  ground: "bg-amber-500 text-amber-950",
  flying: "bg-indigo-300 text-indigo-950",
  psychic: "bg-pink-400 text-pink-950",
  bug: "bg-lime-500 text-lime-950",
  rock: "bg-stone-700 text-white",
  ghost: "bg-violet-700 text-white",
  dragon: "bg-indigo-700 text-white",
  dark: "bg-zinc-800 text-white",
  steel: "bg-slate-400 text-slate-950",
  fairy: "bg-pink-300 text-pink-950"
};
function rh({
  sdk: T,
  widgetServiceSdk: il
}) {
  var cl;
  const [j, m] = xe.useState(T.getProps()), [J, ml] = xe.useState(j.defaultPokemon ?? "pikachu"), [P, yl] = xe.useState({ kind: "idle" }), D = xe.useRef(0);
  xe.useEffect(() => T.on("propsChanged", m), [T]), xe.useEffect(() => {
    E(j.defaultPokemon ?? "pikachu");
  }, []);
  const E = async (Al) => {
    const Ol = Al.trim().toLowerCase();
    if (!Ol) {
      yl({ kind: "error", message: "Type a Pokémon name to search." });
      return;
    }
    const Ml = ++D.current;
    yl({ kind: "loading" });
    try {
      const Gl = await il.connectors.execute({
        permalink: ih,
        method: "GET",
        queryParams: { name: Ol }
      });
      if (Ml !== D.current) return;
      const xl = ch(Gl);
      if (!xl || typeof xl.id != "number") {
        yl({ kind: "error", message: `No Pokémon found for "${Ol}".` });
        return;
      }
      yl({ kind: "ready", pokemon: xl });
    } catch (Gl) {
      if (Ml !== D.current) return;
      const xl = Gl instanceof Error ? Gl.message : "Request failed";
      yl({ kind: "error", message: xl });
    }
  }, k = (Al) => {
    Al.preventDefault(), E(J);
  }, N = ((cl = j.title) == null ? void 0 : cl.trim()) || "Pokédex";
  return /* @__PURE__ */ C.jsxs(
    "section",
    {
      "aria-labelledby": "pokedex-heading",
      className: "rounded-2xl bg-gradient-to-br from-rose-50 via-amber-50 to-sky-50 p-5 shadow-md ring-1 ring-stone-200",
      children: [
        /* @__PURE__ */ C.jsxs("header", { className: "mb-4 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ C.jsx(
            "h2",
            {
              id: "pokedex-heading",
              className: "text-lg font-bold tracking-tight text-stone-900",
              children: N
            }
          ),
          /* @__PURE__ */ C.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-rose-600", children: "PokéAPI" })
        ] }),
        /* @__PURE__ */ C.jsxs("form", { onSubmit: k, className: "mb-4 flex gap-2", children: [
          /* @__PURE__ */ C.jsx("label", { htmlFor: "pokemon-input", className: "sr-only", children: "Pokémon name or ID" }),
          /* @__PURE__ */ C.jsx(
            "input",
            {
              id: "pokemon-input",
              type: "text",
              value: J,
              onChange: (Al) => ml(Al.target.value),
              placeholder: "e.g. pikachu, 25, charizard",
              className: "min-h-[44px] flex-1 rounded-lg border border-stone-500 bg-white px-3 py-2.5 text-sm text-stone-900 placeholder:text-stone-600 focus:border-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-700"
            }
          ),
          /* @__PURE__ */ C.jsx(
            "button",
            {
              type: "submit",
              disabled: P.kind === "loading",
              className: "min-h-[44px] rounded-lg bg-rose-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-800 disabled:cursor-not-allowed disabled:bg-rose-300 disabled:text-rose-900",
              children: P.kind === "loading" ? "Searching…" : "Search"
            }
          )
        ] }),
        /* @__PURE__ */ C.jsx("p", { role: "status", "aria-live": "polite", className: "sr-only", children: P.kind === "loading" ? "Loading Pokémon…" : "" }),
        /* @__PURE__ */ C.jsx("p", { role: "alert", "aria-live": "assertive", className: "sr-only", children: P.kind === "error" ? P.message : "" }),
        /* @__PURE__ */ C.jsxs("div", { className: "min-h-[160px]", children: [
          P.kind === "idle" && /* @__PURE__ */ C.jsx("p", { className: "text-sm text-stone-700", children: "Type a name and press Search." }),
          P.kind === "loading" && /* @__PURE__ */ C.jsx("p", { className: "text-sm text-stone-700", children: "Loading Pokémon…" }),
          P.kind === "error" && /* @__PURE__ */ C.jsx("p", { className: "rounded-lg bg-rose-100 p-3 text-sm font-medium text-rose-900", children: P.message }),
          P.kind === "ready" && /* @__PURE__ */ C.jsx(dh, { pokemon: P.pokemon })
        ] })
      ]
    }
  );
}
function dh({ pokemon: T }) {
  var j, m;
  const il = ((m = (j = T.sprites.other) == null ? void 0 : j["official-artwork"]) == null ? void 0 : m.front_default) ?? T.sprites.front_default ?? "";
  return /* @__PURE__ */ C.jsxs("article", { className: "flex flex-col gap-4 rounded-xl bg-white/80 p-4 shadow-inner ring-1 ring-stone-200 sm:flex-row", children: [
    il && /* @__PURE__ */ C.jsx(
      "img",
      {
        src: il,
        alt: `Official artwork of ${T.name}`,
        className: "h-32 w-32 self-center object-contain drop-shadow",
        loading: "lazy"
      }
    ),
    /* @__PURE__ */ C.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ C.jsxs("div", { className: "flex items-baseline justify-between gap-2", children: [
        /* @__PURE__ */ C.jsx("h3", { className: "text-xl font-bold capitalize text-stone-900", children: T.name }),
        /* @__PURE__ */ C.jsxs("span", { className: "font-mono text-sm text-stone-500", children: [
          "#",
          String(T.id).padStart(3, "0")
        ] })
      ] }),
      /* @__PURE__ */ C.jsx("ul", { className: "mt-2 flex flex-wrap gap-1.5", children: T.types.map((J) => /* @__PURE__ */ C.jsx(
        "li",
        {
          className: `rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${sh[J.type.name] ?? "bg-stone-300 text-stone-900"}`,
          children: J.type.name
        },
        J.type.name
      )) }),
      /* @__PURE__ */ C.jsxs("dl", { className: "mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-stone-700", children: [
        /* @__PURE__ */ C.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ C.jsx("dt", { className: "font-medium", children: "Height" }),
          /* @__PURE__ */ C.jsx("dd", { className: "font-mono", children: fh(T.height) })
        ] }),
        /* @__PURE__ */ C.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ C.jsx("dt", { className: "font-medium", children: "Weight" }),
          /* @__PURE__ */ C.jsx("dd", { className: "font-mono", children: oh(T.weight) })
        ] }),
        /* @__PURE__ */ C.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ C.jsx("dt", { className: "font-medium", children: "Base XP" }),
          /* @__PURE__ */ C.jsx("dd", { className: "font-mono", children: T.base_experience })
        ] }),
        /* @__PURE__ */ C.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ C.jsx("dt", { className: "font-medium", children: "Stats" }),
          /* @__PURE__ */ C.jsx("dd", { className: "font-mono", children: T.stats.length })
        ] })
      ] }),
      /* @__PURE__ */ C.jsx("ul", { className: "mt-3 space-y-1", children: T.stats.map((J) => /* @__PURE__ */ C.jsxs("li", { className: "text-xs", children: [
        /* @__PURE__ */ C.jsxs("div", { className: "flex items-baseline justify-between", children: [
          /* @__PURE__ */ C.jsx("span", { className: "font-medium capitalize text-stone-700", children: J.stat.name.replace("-", " ") }),
          /* @__PURE__ */ C.jsx("span", { className: "font-mono text-stone-600", children: J.base_stat })
        ] }),
        /* @__PURE__ */ C.jsx(
          "div",
          {
            className: "mt-0.5 h-1.5 w-full overflow-hidden rounded-full bg-stone-200",
            "aria-hidden": "true",
            children: /* @__PURE__ */ C.jsx(
              "div",
              {
                className: "h-full bg-rose-500",
                style: { width: `${Math.min(100, J.base_stat / 200 * 100)}%` }
              }
            )
          }
        )
      ] }, J.stat.name)) })
    ] })
  ] });
}
const vh = (T) => T.replaceAll(":root", ":host");
let hh = vh(Fv);
const xr = /* @__PURE__ */ new Set();
async function mh(T) {
  await T.whenReady();
  const il = new window.WidgetServiceSDK(), j = document.createElement("style");
  j.textContent = hh, xr.add(j), T.shadowRoot.insertBefore(j, T.shadowRoot.firstChild);
  const m = nh.createRoot(T.getContainer());
  m.render(/* @__PURE__ */ C.jsx(rh, { sdk: T, widgetServiceSdk: il })), T.on("destroy", () => {
    xr.delete(j), j.remove(), m.unmount();
  });
}
export {
  mh as init
};
