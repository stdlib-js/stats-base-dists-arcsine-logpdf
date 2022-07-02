// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return n({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__,l=e,y=function(t,n,r){var e,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(a.call(t,n)||c.call(t,n)?(e=t.__proto__,t.__proto__=o,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,n,r.get),p&&f&&f.call(t,n,r.set),t},p=r()?l:y,b=function(t,n,r){p(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})},d=function(t){return t!=t},A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=Object.prototype.toString,m=_,w=function(t){return m.call(t)},s=Object.prototype.hasOwnProperty,v=function(t,n){return null!=t&&s.call(t,n)},U="function"==typeof Symbol?Symbol.toStringTag:"",h=v,j=U,g=_,N=w,S=function(t){var n,r,e;if(null==t)return g.call(t);r=t[j],n=h(t,j);try{t[j]=void 0}catch(n){return g.call(t)}return e=g.call(t),n?t[j]=r:delete t[j],e},E=A&&"symbol"==typeof Symbol.toStringTag?S:N,F=E,T="function"==typeof Uint32Array,O="function"==typeof Uint32Array?Uint32Array:null,P=function(t){return T&&t instanceof Uint32Array||"[object Uint32Array]"===F(t)},x=O,I=function(){var t,n;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,4294967296,4294967297]),t=P(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},G="function"==typeof Uint32Array?Uint32Array:void 0,V=function(){throw new Error("not implemented")},k=I()?G:V,C=E,Y="function"==typeof Float64Array,q="function"==typeof Float64Array?Float64Array:null,z=function(t){return Y&&t instanceof Float64Array||"[object Float64Array]"===C(t)},B=q,D=function(){var t,n;if("function"!=typeof B)return!1;try{n=new B([1,3.14,-3.14,NaN]),t=z(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t},H="function"==typeof Float64Array?Float64Array:void 0,J=function(){throw new Error("not implemented")},K=D()?H:J,L=E,M="function"==typeof Uint8Array,Q="function"==typeof Uint8Array?Uint8Array:null,R=function(t){return M&&t instanceof Uint8Array||"[object Uint8Array]"===L(t)},W=Q,X=function(){var t,n;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,256,257]),t=R(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},Z="function"==typeof Uint8Array?Uint8Array:void 0,$=function(){throw new Error("not implemented")},tt=X()?Z:$,nt=E,rt="function"==typeof Uint16Array,et="function"==typeof Uint16Array?Uint16Array:null,ot=function(t){return rt&&t instanceof Uint16Array||"[object Uint16Array]"===nt(t)},it=et,ut=function(){var t,n;if("function"!=typeof it)return!1;try{n=new it(n=[1,3.14,-3.14,65536,65537]),t=ot(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},ft="function"==typeof Uint16Array?Uint16Array:void 0,at=function(){throw new Error("not implemented")},ct={uint16:ut()?ft:at,uint8:tt};(t=new ct.uint16(1))[0]=4660;var lt=52===new ct.uint8(t.buffer)[0],yt=k,pt=!0===lt?1:0,bt=new K(1),dt=new yt(bt.buffer),At=function(t){return bt[0]=t,dt[pt]},_t=k,mt=!0===lt?1:0,wt=new K(1),st=new _t(wt.buffer),vt=function(t,n){return wt[0]=t,st[mt]=n>>>0,wt[0]},Ut=vt,ht=Number.NEGATIVE_INFINITY,jt=At,gt=Ut,Nt=d,St=ht,Et=function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)},Ft=function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))},Tt=.6931471803691238,Ot=1.9082149292705877e-10,Pt=1048575,xt=function(t){var n,r,e,o,i,u,f,a,c,l,y;return 0===t?St:Nt(t)||t<0?NaN:(o=0,(r=jt(t))<1048576&&(o-=54,r=jt(t*=0x40000000000000)),r>=2146435072?t+t:(o+=(r>>20)-1023|0,o+=(f=614244+(r&=Pt)&1048576|0)>>20|0,u=(t=gt(t,r|1072693248^f))-1,(Pt&2+r)<3?0===u?0===o?0:o*Tt+o*Ot:(i=u*u*(.5-.3333333333333333*u),0===o?u-i:o*Tt-(i-o*Ot-u)):(f=r-398458|0,a=440401-r|0,e=(l=(y=(c=u/(2+u))*c)*y)*Et(l),i=y*Ft(l)+e,(f|=a)>0?(n=.5*u*u,0===o?u-(n-c*(n+i)):o*Tt-(n-(c*(n+i)+o*Ot)-u)):0===o?u-c*(u-i):o*Tt-(c*(u-i)-o*Ot-u))))},It=1.1447298858494002;function Gt(t,n,r){return d(t)||d(n)||d(r)||n>=r?NaN:t<n||t>r?ht:-(It+xt((t-n)*(r-t))/2)}var Vt=function(t){return function(){return t}};return b(Gt,"factory",(function(t,n){return d(t)||d(n)||t>=n?Vt(NaN):function(r){return d(r)?NaN:r<t||r>n?ht:-(It+xt((r-t)*(n-r))/2)}})),Gt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).logpdf=n();
//# sourceMappingURL=index.js.map
