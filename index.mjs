// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.14-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-gamma@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";function f(e,t){return h(e)?h(t)?null:new TypeError(a("0oV72,Go",t)):new TypeError(a("0oV71,NQ",e))}function u(){var h,u,g,j,c,b,v;if(0===arguments.length)h=m();else if(1===arguments.length){if(!s(j=arguments[0]))throw new TypeError(a("0oV2V,FD",j));if(i(j,"prng")){if(!r(j.prng))throw new TypeError(a("0oV6u,JI","prng",j.prng));h=m({prng:j.prng})}else h=m(j)}else{if(v=f(u=arguments[0],g=arguments[1]))throw v;if(arguments.length>2){if(!s(j=arguments[2]))throw new TypeError(a("0oV2V,FD",j));if(i(j,"prng")){if(!r(j.prng))throw new TypeError(a("0oV6u,JI","prng",j.prng));h=m(u,g,{prng:j.prng})}else h=m(u,g,j)}else h=m(u,g)}return b=void 0===u?G:T,c=h.PRNG,e(b,"NAME","invgamma"),j&&j.prng?(e(b,"seed",null),e(b,"seedLength",null),n(b,"state",o(null),d),e(b,"stateLength",null),e(b,"byteLength",null),e(b,"toJSON",o(null))):(t(b,"seed",y),t(b,"seedLength",x),n(b,"state",L,E),t(b,"stateLength",w),t(b,"byteLength",N),e(b,"toJSON",V)),e(b,"PRNG",c),b;function y(){return c.seed}function x(){return c.seedLength}function w(){return c.stateLength}function N(){return c.byteLength}function L(){return c.state}function E(e){c.state=e}function V(){var e={type:"PRNG"};return e.name=b.NAME,e.state=p(c.state),e.params=void 0===u?[]:[u,g],e}function T(){return 1/h()}function G(e,t){return l(e)||l(t)||e<=0||t<=0?NaN:1/h(e,t)}}var g=u();e(g,"factory",u);export{g as default,u as factory};
//# sourceMappingURL=index.mjs.map
