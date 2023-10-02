// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-pi@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";function d(t,r,d){return s(t)||s(r)||s(d)||r>=d?NaN:t<r||t>d?i:-(e+n((t-r)*(d-t))/2)}function m(t,d){return s(t)||s(d)||t>=d?r(NaN):function(r){if(s(r))return NaN;if(r<t||r>d)return i;return-(e+n((r-t)*(d-r))/2)}}t(d,"factory",m);export{d as default,m as factory};
//# sourceMappingURL=index.mjs.map
