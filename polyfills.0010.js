/*! For detailed credits and licence information see https://github.com/financial-times/polyfill-library */
(function(n){"Promise"in this||function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=100)}({100:
/*!***********************!*\
  !*** ./src/global.js ***!
  \***********************/
function(n,t,e){(function(n){var t=e(/*! ./yaku */5);try{n.Promise=t,window.Promise=t}catch(n){}}).call(t,e(/*! ./../~/webpack/buildin/global.js */2))},2:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
function(n,t){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(n){"object"==typeof window&&(e=window)}n.exports=e},5:
/*!*********************!*\
  !*** ./src/yaku.js ***!
  \*********************/
function(t,e,r){(function(e){!function(){"use strict";function r(){return tn[Y][q]||z}function o(n){return n&&"object"==typeof n}function i(n){return"function"==typeof n}function u(n,t){return n instanceof t}function c(n,t,e){if(!t(n))throw h(e)}function f(){try{return P.apply(T,arguments)}catch(n){return X.e=n,X}}function s(n,t){return P=n,T=t,f}function a(n,t){function e(){for(var e=0;e<o;)t(r[e],r[e+1]),r[e++]=k,r[e++]=k;o=0,r.length>n&&(r.length=n)}var r=I(n),o=0;return function(n,t){r[o++]=n,r[o++]=t,2===o&&tn.nextTick(e)}}function l(n,t){var e,r,o,c,f=0;if(!n)throw h(K);var a=n[tn[Y][$]];if(i(a))r=a.call(n);else{if(!i(n.next)){if(u(n,I)){for(e=n.length;f<e;)t(n[f],f++);return f}throw h(K)}r=n}for(;!(o=r.next()).done;)if((c=s(t)(o.value,f++))===X)throw i(r[B])&&r[B](),c.e;return f}function h(n){return new TypeError(n)}function v(n){return(n?"":N)+(new L).stack}function p(n,t){var e="on"+n.toLowerCase(),r=C[e];O&&O.listeners(n).length?n===W?O.emit(n,t._v,t):O.emit(n,t):r?r({reason:t._v,promise:t}):tn[n](t._v,t)}function _(n){return n&&n._s}function d(n){return _(n)?new n(Z):(t=new n(function(n,o){if(t)throw h();e=n,r=o}),c(e,i),c(r,i),t);var t,e,r}function w(n,t){var e=!1;return function(r){e||(e=!0,H&&(n[J]=v(!0)),t===M?g(n,r):m(n,t,r))}}function y(n,t){function e(n){return r.push(n.replace(/^\s+|\s+$/g,""))}var r=[];return H&&(t[J]&&e(t[J]),function n(t){t&&G in t&&(n(t._next),e(t[G]+""),n(t._p))}(t)),(n&&n.stack?n.stack:n)+("\n"+r.join("\n")).replace(nn,"")}function j(n,t){return n(t)}function m(n,t,e){var r=0,o=n._c;if(n._s===U)for(n._s=t,n._v=e,t===A&&(H&&function(n){return u(n,L)}(e)&&(e.longStack=y(e,n)),rn(n));r<o;)en(n,n[r++]);return n}function g(n,t){if(t===n&&t)return m(n,A,h(Q)),n;if(t!==R&&(i(t)||o(t))){var e=s(b)(t);if(e===X)return m(n,A,e.e),n;i(e)?(H&&_(t)&&(n._next=t),_(t)?x(n,t,e):tn.nextTick(function(){x(n,t,e)})):m(n,M,t)}else m(n,M,t);return n}function b(n){return n.then}function x(n,t,e){var r=s(e,t)(function(e){t&&(t=R,g(n,e))},function(e){t&&(t=R,m(n,A,e))});r===X&&t&&(m(n,A,r.e),t=R)}var k,P,T,R=null,S="object"==typeof self,C=S?self:e,F=C.Promise,O=C.process,E=C.console,H=!1,I=Array,L=Error,A=1,M=2,U=3,Y="Symbol",$="iterator",q="species",z=Y+"("+q+")",B="return",D="_uh",G="_pt",J="_st",K="Invalid argument",N="\nFrom previous ",Q="Chaining cycle detected for promise",V="rejectionHandled",W="unhandledRejection",X={e:R},Z=function(){},nn=/^.+\/node_modules\/yaku\/.+\n?/gm,tn=function(n){var t,e=this;if(!o(e)||e._s!==k)throw h("Invalid this");if(e._s=U,H&&(e[G]=v()),n!==Z){if(!i(n))throw h(K);(t=s(n)(w(e,M),w(e,A)))===X&&m(e,A,t.e)}};tn.default=tn,function(n,t){for(var e in t)n[e]=t[e]}(tn.prototype,{then:function(t,e){if(this._s===n)throw h();return function(n,t,e,r){return i(e)&&(t._onFulfilled=e),i(r)&&(n[D]&&p(V,n),t._onRejected=r),H&&(t._p=n),n[n._c++]=t,n._s!==U&&en(n,t),t}(this,d(tn.speciesConstructor(this,tn)),t,e)},catch:function(n){return this.then(k,n)},finally:function(n){return this.then(function(t){return tn.resolve(n()).then(function(){return t})},function(t){return tn.resolve(n()).then(function(){throw t})})},_c:0,_p:R}),tn.resolve=function(n){return _(n)?n:g(d(this),n)},tn.reject=function(n){return m(d(this),A,n)},tn.race=function(n){var t=this,e=d(t),r=function(n){m(e,M,n)},o=function(n){m(e,A,n)},i=s(l)(n,function(n){t.resolve(n).then(r,o)});return i===X?t.reject(i.e):e},tn.all=function(n){function t(n){m(o,A,n)}var e,r=this,o=d(r),i=[];return(e=s(l)(n,function(n,u){r.resolve(n).then(function(n){i[u]=n,--e||m(o,M,i)},t)}))===X?r.reject(e.e):(e||m(o,M,[]),o)},tn.Symbol=C[Y]||{},s(function(){Object.defineProperty(tn,r(),{get:function(){return this}})})(),tn.speciesConstructor=function(n,t){var e=n.constructor;return e&&e[r()]||t},tn.unhandledRejection=function(n,t){E&&E.error("Uncaught (in promise)",H?t.longStack:y(n,t))},tn.rejectionHandled=Z,tn.enableLongStackTrace=function(){H=!0},tn.nextTick=S?function(n){F?new F(function(n){n()}).then(n):setTimeout(n)}:O.nextTick,tn._s=1;var en=a(999,function(n,t){var e,r;return(r=n._s!==A?t._onFulfilled:t._onRejected)===k?void m(t,n._s,n._v):(e=s(j)(r,n._v))===X?void m(t,A,e.e):void g(t,e)}),rn=a(9,function(n){(function n(t){if(t._umark)return!0;t._umark=!0;for(var e,r=0,o=t._c;r<o;)if((e=t[r++])._onRejected||n(e))return!0})(n)||(n[D]=1,p(W,n))});try{t.exports=tn}catch(n){C.Yaku=tn}}()}).call(e,r(/*! ./../~/webpack/buildin/global.js */2))}})}).call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});