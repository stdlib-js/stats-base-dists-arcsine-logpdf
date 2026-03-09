"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=a(function(m,f){
var u=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-ln/dist'),c=require('@stdlib/constants-float64-ln-pi/dist'),l=require('@stdlib/constants-float64-ninf/dist');function p(e,r,i){return u(e)||u(r)||u(i)||r>=i?NaN:e<r||e>i?l:-(c+N((e-r)*(i-e))/2)}f.exports=p
});var q=a(function(O,s){
var y=require('@stdlib/utils-constant-function/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),I=require('@stdlib/math-base-special-ln/dist'),d=require('@stdlib/constants-float64-ln-pi/dist'),F=require('@stdlib/constants-float64-ninf/dist');function g(e,r){if(n(e)||n(r)||e>=r)return y(NaN);return i;function i(t){return n(t)?NaN:t<e||t>r?F:-(d+I((t-e)*(r-t))/2)}}s.exports=g
});var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=o(),P=q();L(v,"factory",P);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
