/*! For detailed credits and licence information see https://github.com/financial-times/polyfill-library */
!function(t,e){function r(t){if(1/t==-1/0&&(t=0),t>Math.pow(2,32)-1)throw new RangeError("Invalid array length");var e=[];return e.length=t,e}function n(t,e){var r=arguments.length>2?arguments[2]:[];if(!1===c(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(e,r)}function o(t,e){return t[e]}function i(t,e){return e in t}function c(t){return"function"==typeof t}function u(t){if(null===t||t===e)throw TypeError(Object.prototype.toString.call(t)+" is not coercible to Object.");return t}function a(t){var e=Number(t);return isNaN(e)?0:1/e==1/0||1/e==-1/0||e===1/0||e===-1/0?e:(e<0?-1:1)*Math.floor(Math.abs(e))}function l(t){var e=a(t);return e<=0?0:Math.min(e,Math.pow(2,53)-1)}function f(t){if(null===t||t===e)throw TypeError();return Object(t)}function p(t,r){var n,o=(n=r,f(t)[n]);if(null===o||o===e)return e;if(!1===c(o))throw new TypeError("Method not callable: "+r);return o}function s(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in t&&(e instanceof t.Symbol||e.constructor===t.Symbol)?"symbol":"object"}}function y(t){return"object"===s(t)&&("function"==typeof t&&!!t.prototype)}function b(r){if("object"!==s(r))return!1;var n="Symbol"in t&&"match"in t.Symbol?o(r,t.Symbol.match):e;if(n!==e)return function(t){return Boolean(t)}(n);try{var i=r.lastIndex;return r.lastIndex=0,RegExp.prototype.exec.call(r),!0}catch(t){}finally{r.lastIndex=i}return!1}function h(t,e){return s(t)===s(e)&&("number"===s(t)?!(!isNaN(t)||!isNaN(e))||(1/t==1/0&&1/e==-1/0||(1/t==-1/0&&1/e==1/0||t===e)):function(t,e){return t===e}(t,e))}function v(r){var i=arguments.length>1?arguments[1]:e;if("object"===s(r)){if(arguments.length<2)var u="default";else i===String?u="string":i===Number&&(u="number");var a="function"==typeof t.Symbol&&"symbol"==typeof t.Symbol.toPrimitive?p(r,t.Symbol.toPrimitive):e;if(a!==e){var l=n(a,r,[u]);if("object"!==s(l))return l;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===u&&(u="number"),function(t,e){if("string"===e)var r=["toString","valueOf"];else r=["valueOf","toString"];for(var i=0;i<r.length;++i){var u=o(t,r[i]);if(c(u)){var a=n(u,t);if("object"!==s(a))return a}}throw new TypeError("Cannot convert to primitive.")}(r,u)}return r}function g(t){switch(s(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return g(v(t,String));default:return String(t)}}var w,j,d,m,O,_,S;function P(t,e,r){var n=function(t,e,r){var n={value:r,writable:!0,enumerable:!0,configurable:!0};try{return Object.defineProperty(t,e,n),!0}catch(t){return!1}}(t,e,r);if(!n)throw new TypeError("Cannot assign value `"+Object.prototype.toString.call(r)+"` to property `"+Object.prototype.toString.call(e)+"` on object `"+Object.prototype.toString.call(t)+"`");return n}function E(t,e,r){var n={value:r,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(t,e,n)}function T(t,e){var r=arguments[2]||{},n=function(t,e){var r=o(t,"prototype");return"object"!==s(r)&&(r=e),r}(t,e),i=Object.create(n);for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&Object.defineProperty(i,c,{configurable:!0,enumerable:!1,writable:!0,value:r[c]});return i}function k(i,c){var u;if(0===c&&1/c==-1/0&&(c=0),!1===(u=i,"[object Array]"===Object.prototype.toString.call(u)))return r(c);var a=o(i,"constructor");if("object"===s(a)&&null===(a="Symbol"in t&&"species"in t.Symbol?o(a,t.Symbol.species):e)&&(a=e),a===e)return r(c);if(!y(a))throw new TypeError("C must be a constructor");return function(t){var e=arguments.length>2?arguments[2]:t,r=arguments.length>1?arguments[1]:[];if(!y(t))throw new TypeError("F must be a constructor.");if(!y(e))throw new TypeError("newTarget must be a constructor.");return e===t?new(Function.prototype.bind.apply(t,[null].concat(r))):n(t,T(e,Object.prototype),r)}(a,[c])}"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(w=Object.defineProperty,j=Object.prototype.hasOwnProperty.call(Object.prototype,"__defineGetter__"),d="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,e,r){if(w&&(t===window||t===document||t===Element.prototype||t instanceof Element))return w(t,e,r);if(null===t||!(t instanceof Object||"object"==typeof t))throw new TypeError("Object.defineProperty called on non-object");if(!(r instanceof Object))throw new TypeError("Property description must be an object");var n=String(e),o="value"in r||"writable"in r,i="get"in r&&typeof r.get,c="set"in r&&typeof r.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!j)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(d);Object.__defineGetter__.call(t,n,r.get)}else t[n]=r.value;if(c){if("function"!==c)throw new TypeError("Setter must be a function");if(!j)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(d);Object.__defineSetter__.call(t,n,r.set)}return"value"in r&&(t[n]=r.value),t}),"forEach"in Array.prototype||E(Array.prototype,"forEach",(function(t){var r=f(this),u=r instanceof String?r.split(""):r,a=l(o(r,"length"));if(!1===c(t))throw new TypeError(t+" is not a function");for(var p=arguments.length>1?arguments[1]:e,s=0;s<a;){var y=g(s),b=i(u,y);if(b){var h=o(u,y);n(t,p,[h,s,r])}s+=1}return e})),"includes"in Array.prototype||E(Array.prototype,"includes",(function(t){"use strict";var e=f(this),r=l(o(e,"length"));if(0===r)return!1;var n=a(arguments[1]);if(n>=0)var i=n;else(i=r+n)<0&&(i=0);for(;i<r;){var c=o(e,g(i));if(h(t,c))return!0;i+=1}return!1})),"indexOf"in Array.prototype||E(Array.prototype,"indexOf",(function(t){var e=f(this),r=l(o(e,"length"));if(0===r)return-1;var n=a(arguments[1]);if(n>=r)return-1;if(n>=0)var c=1/n==-1/0?0:n;else(c=r+n)<0&&(c=0);for(;c<r;){var u=i(e,g(c));if(u){var p=o(e,g(c)),s=t===p;if(s)return c}c+=1}return-1})),"bind"in Function.prototype||E(Function.prototype,"bind",(function(t){var e=Array,r=Object,n=e.prototype,o=function(){},i=n.slice,u=n.concat,a=n.push,l=Math.max,f=this;if(!c(f))throw new TypeError("Function.prototype.bind called on incompatible "+f);for(var p,s=i.call(arguments,1),y=function(){if(this instanceof p){var e=f.apply(this,u.call(s,i.call(arguments)));return r(e)===e?e:this}return f.apply(t,u.call(s,i.call(arguments)))},b=l(0,f.length-s.length),h=[],v=0;v<b;v++)a.call(h,"$"+v);return p=Function("binder","return function ("+h.join(",")+"){ return binder.apply(this, arguments); }")(y),f.prototype&&(o.prototype=f.prototype,p.prototype=new o,o.prototype=null),p})),"freeze"in Object||E(Object,"freeze",(function(t){return t})),"getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{return"3"===Object.getOwnPropertyDescriptor("13.7",1).value}catch(t){return!1}}()||(m=Object.getOwnPropertyDescriptor,O=function(){try{return 1===Object.defineProperty(document.createElement("div"),"one",{get:function(){return 1}}).one}catch(t){return!1}},_={}.toString,S="".split,E(Object,"getOwnPropertyDescriptor",(function(t,e){var r=f(t);r=("string"===s(r)||r instanceof String)&&"[object String]"==_.call(t)?S.call(t,""):Object(t);var n,o,i=function(t){var e=v(t,String);return"symbol"===s(e)?e:g(e)}(e);if(O)try{return m(r,i)}catch(t){}if(n=r,o=i,Object.prototype.hasOwnProperty.call(n,o))return{enumerable:!0,configurable:!0,writable:!0,value:r[i]}}))),"getPrototypeOf"in Object||E(Object,"getPrototypeOf",(function(t){if(t!==Object(t))throw new TypeError("Object.getPrototypeOf called on non-object");var e=t.__proto__;return e||null===e?e:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Object.prototype:null})),"keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),!0}catch(t){return!1}}()||E(Object,"keys",function(){"use strict";var t=Object.prototype.hasOwnProperty,r=Object.prototype.toString,n=Object.prototype.propertyIsEnumerable,o=!n.call({toString:null},"toString"),i=n.call((function(){}),"prototype"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],u=function(t){var e=t.constructor;return e&&e.prototype===t},a={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},l=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!a["$"+e]&&t.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{u(window[e])}catch(t){return!0}}catch(t){return!0}return!1}();return function(n){var a,f,p,s="[object Function]"===r.call(n),y=(a=n,f=r.call(a),(p="[object Arguments]"===f)||(p="[object Array]"!==f&&null!==a&&"object"==typeof a&&"number"==typeof a.length&&a.length>=0&&"[object Function]"===r.call(a.callee)),p),b="[object String]"===r.call(n),h=[];if(n===e||null===n)throw new TypeError("Cannot convert undefined or null to object");var v=i&&s;if(b&&n.length>0&&!t.call(n,0))for(var g=0;g<n.length;++g)h.push(String(g));if(y&&n.length>0)for(var w=0;w<n.length;++w)h.push(String(w));else for(var j in n)v&&"prototype"===j||!t.call(n,j)||h.push(String(j));if(o)for(var d=function(t){if("undefined"==typeof window||!l)return u(t);try{return u(t)}catch(t){return!1}}(n),m=0;m<c.length;++m)d&&"constructor"===c[m]||!t.call(n,c[m])||h.push(c[m]);return h}}()),"defineProperties"in Object||E(Object,"defineProperties",(function(t,r){if("object"!==s(t))throw new TypeError("Object.defineProperties called on non-object");for(var n=f(r),i=Object.keys(n),c=[],u=0;u<i.length;u++){var a=i[u],l=Object.getOwnPropertyDescriptor(n,a);if(l!==e&&l.enumerable){var p=o(n,a);c.push([a,p])}}for(var y=0;y<c.length;y++){var b=c[y][0];p=c[y][1],Object.defineProperty(t,b,p)}return t})),"create"in Object||function(){if(!({__proto__:null}instanceof Object))var t=function(){return{__proto__:null}};else t=function(){var e=document.createElement("iframe");e.style.display="none";var r=document.body||document.documentElement;r.appendChild(e),e.src="javascript:";var n=e.contentWindow.Object.prototype;r.removeChild(e),e=null,delete n.constructor,delete n.hasOwnProperty,delete n.propertyIsEnumerable,delete n.isPrototypeOf,delete n.toLocaleString,delete n.toString,delete n.valueOf;var o=function(){};return o.prototype=n,t=function(){return new o},new o};function e(){}E(Object,"create",(function(r,n){if("object"!==s(r)&&"null"!==s(r))throw new TypeError("Object prototype may only be an Object or null");if("null"===s(r))var o=t();else e.prototype=r,(o=new e).__proto__=r,o.constructor.prototype=r,o.__proto__=r;return 1 in arguments?Object.defineProperties(o,n):o}))}(),"map"in Array.prototype||E(Array.prototype,"map",(function(t){var r=f(this),u=l(o(r,"length"));if(!1===c(t))throw new TypeError(t+" is not a function");for(var a=arguments.length>1?arguments[1]:e,p=k(r,u),s=0;s<u;){var y=g(s),b=i(r,y);if(b){var h=o(r,y),v=n(t,a,[h,s,r]);P(p,y,v)}s+=1}return p})),"getOwnPropertyNames"in Object&&function(){try{return Object.getOwnPropertyNames(1),!0}catch(t){return!1}}()||function(){var e={}.toString,r="".split,n=[].concat,o=Object.prototype.hasOwnProperty,i=Object.getOwnPropertyNames||Object.keys,c="object"==typeof t?i(t):[];E(Object,"getOwnPropertyNames",(function(t){var u=f(t);if("[object Window]"===e.call(u))try{return i(u)}catch(t){return n.call([],c)}u="[object String]"==e.call(u)?r.call(u,""):Object(u);for(var a=i(u),l=["length","prototype"],p=0;p<l.length;p++){var s=l[p];o.call(u,s)&&!a.includes(s)&&a.push(s)}if(a.includes("__proto__")){var y=a.indexOf("__proto__");a.splice(y,1)}return a}))}(),"values"in Object||function(){var t={}.toString,e="".split;E(Object,"values",(function(r){var n="[object String]"==t.call(r)?e.call(r,""):f(r);return Object.keys(n).map((function(t){return n[t]}))}))}(),"endsWith"in String.prototype||E(String.prototype,"endsWith",(function(t){"use strict";var r=arguments.length>1?arguments[1]:e,n=u(this),o=g(n),i=b(t);if(i)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var c=g(t),l=o.length,f=r===e?l:a(r),p=Math.min(Math.max(f,0),l),s=c.length,y=p-s;return!(y<0)&&o.substr(y,s)===c})),"Symbol"in t&&0===t.Symbol.length||function(e,r,n){"use strict";var o,i=0,c=""+Math.random(),u="__symbol:",a=u.length,l="__symbol@@"+c,f="defineProperty",p="defineProperties",s="getOwnPropertyNames",y="getOwnPropertyDescriptor",b="propertyIsEnumerable",h=e.prototype,v=h.hasOwnProperty,g=h[b],w=h.toString,j=Array.prototype.concat,d=e.getOwnPropertyNames?e.getOwnPropertyNames(t):[],m=e[s],O=function(t){if("[object Window]"===w.call(t))try{return m(t)}catch(t){return j.call([],d)}return m(t)},_=e[y],S=e.create,P=e.keys,E=e.freeze||e,T=e[f],k=e[p],$=_(e,s),x=function(t,e,r){if(!v.call(t,l))try{T(t,l,{enumerable:!1,configurable:!1,writable:!1,value:{}})}catch(e){t[l]={}}t[l]["@@"+e]=r},N=function(t,e){var r=S(t);return O(e).forEach((function(t){I.call(e,t)&&L(r,t,e[t])})),r},A=function(){},F=function(t){return t!=l&&!v.call(W,t)},C=function(t){return t!=l&&v.call(W,t)},I=function(t){var e=""+t;return C(e)?v.call(this,e)&&this[l]["@@"+e]:g.call(this,t)},M=function(t){var r={enumerable:!1,configurable:!0,get:A,set:function(e){o(this,t,{enumerable:!1,configurable:!0,writable:!0,value:e}),x(this,t,!0)}};try{T(h,t,r)}catch(e){h[t]=r.value}return E(W[t]=T(e(t),"constructor",R))},D=function t(){var e=arguments[0];if(this instanceof t)throw new TypeError("Symbol is not a constructor");return M(u.concat(e||"",c,++i))},W=S(null),R={value:D},G=function(t){return W[t]},L=function(t,e,r){var n=""+e;return C(n)?(o(t,n,r.enumerable?function(t){var e=S(t);return e.enumerable=!1,e}(r):r),x(t,n,!!r.enumerable)):T(t,e,r),t},H=function(t){return O(t).filter(t===h?(e=t,function(t){return v.call(e,l)&&v.call(e[l],"@@"+t)}):C).map(G);var e};$.value=L,T(e,f,$),$.value=H,T(e,"getOwnPropertySymbols",$),$.value=function(t){return O(t).filter(F)},T(e,s,$),$.value=function(t,e){var r=H(e);return r.length?P(e).concat(r).forEach((function(r){I.call(e,r)&&L(t,r,e[r])})):k(t,e),t},T(e,p,$),$.value=I,T(h,b,$),$.value=D,T(n,"Symbol",$),$.value=function(t){var e=u.concat(u,t,c);return e in h?W[e]:M(e)},T(D,"for",$),$.value=function(t){if(F(t))throw new TypeError(t+" is not a symbol");return v.call(W,t)?t.slice(2*a,-c.length):void 0},T(D,"keyFor",$),$.value=function(t,e){var r=_(t,e);return r&&C(e)&&(r.enumerable=I.call(t,e)),r},T(e,y,$),$.value=function(t,e){return 1===arguments.length||void 0===e?S(t):N(t,e)},T(e,"create",$);var z=null===function(){return this}.call(null);$.value=z?function(){var t=w.call(this);return"[object String]"===t&&C(this)?"[object Symbol]":t}:function(){if(this===window)return"[object Null]";var t=w.call(this);return"[object String]"===t&&C(this)?"[object Symbol]":t},T(h,"toString",$),o=function(t,e,r){var n=_(h,e);delete h[e],T(t,e,r),t!==h&&T(h,e,n)}}(Object,0,this),"Symbol"in t&&"toStringTag"in t.Symbol||Object.defineProperty(Symbol,"toStringTag",{value:Symbol("toStringTag")}),"Promise"in t||function(){"use strict";var r,n,o,i=null,c="object"==typeof t,u=t,a=u.Promise,l=u.process,f=u.console,p=!0,s=Array,y=Error,b=1,h=2,v=3,g="Symbol",w="iterator",j="species",d=g+"("+j+")",m="return",O="_uh",_="_pt",S="_st",P="Invalid argument",E="\nFrom previous ",T="Chaining cycle detected for promise",k="rejectionHandled",$="unhandledRejection",x={e:i},N=function(){},A=/^.+\/node_modules\/yaku\/.+\n?/gm,F=function(t){var e;if(!I(this)||this._s!==r)throw z("Invalid this");if(this._s=v,p&&(this[_]=B()),t!==N){if(!M(t))throw z(P);(e=G(t)(K(this,h),K(this,b)))===x&&Z(this,b,e.e)}};function C(){return F[g][j]||d}function I(t){return t&&"object"==typeof t}function M(t){return"function"==typeof t}function D(t,e){return t instanceof e}function W(t,e,r){if(!e(t))throw z(r)}function R(){try{return n.apply(o,arguments)}catch(t){return x.e=t,x}}function G(t,e){return n=t,o=e,R}function L(t,e){var n=s(t),o=0;function i(){for(var i=0;i<o;)e(n[i],n[i+1]),n[i++]=r,n[i++]=r;o=0,n.length>t&&(n.length=t)}return function(t,e){n[o++]=t,n[o++]=e,2===o&&F.nextTick(i)}}function H(t,e){var r,n,o,i,c=0;if(!t)throw z(P);var u=t[F[g][w]];if(M(u))n=u.call(t);else{if(!M(t.next)){if(D(t,s)){for(r=t.length;c<r;)e(t[c],c++);return c}throw z(P)}n=t}for(;!(o=n.next()).done;)if((i=G(e)(o.value,c++))===x)throw M(n[m])&&n[m](),i.e;return c}function z(t){return new TypeError(t)}function B(t){return(t?"":E)+(new y).stack}F.default=F,function(t,e){for(var r in e)t[r]=e[r]}(F.prototype,{then:function(t,r){if(this._s===e)throw z();return function(t,e,r,n){M(r)&&(e._onFulfilled=r);M(n)&&(t[O]&&U(k,t),e._onRejected=n);p&&(e._p=t);t[t._c++]=e,t._s!==v&&X(t,e);return e}(this,J(F.speciesConstructor(this,F)),t,r)},catch:function(t){return this.then(r,t)},finally:function(t){return this.then((function(e){return F.resolve(t()).then((function(){return e}))}),(function(e){return F.resolve(t()).then((function(){throw e}))}))},_c:0,_p:i}),F.resolve=function(t){return q(t)?t:tt(J(this),t)},F.reject=function(t){return Z(J(this),b,t)},F.race=function(t){var e=this,r=J(e),n=function(t){Z(r,h,t)},o=function(t){Z(r,b,t)},i=G(H)(t,(function(t){e.resolve(t).then(n,o)}));return i===x?e.reject(i.e):r},F.all=function(t){var e,r=this,n=J(r),o=[];function i(t){Z(n,b,t)}return(e=G(H)(t,(function(t,c){r.resolve(t).then((function(t){o[c]=t,--e||Z(n,h,o)}),i)})))===x?r.reject(e.e):(e||Z(n,h,[]),n)},F.Symbol=u[g]||{},G((function(){Object.defineProperty(F,C(),{get:function(){return this}})}))(),F.speciesConstructor=function(t,e){var r=t.constructor;return r&&r[C()]||e},F.unhandledRejection=function(t,e){f&&f.error("Uncaught (in promise)",p?e.longStack:Q(t,e))},F.rejectionHandled=N,F.enableLongStackTrace=function(){p=!0},F.nextTick=c?function(t){a?new a((function(t){t()})).then(t):setTimeout(t)}:l.nextTick,F._s=1;var X=L(999,(function(t,e){var n,o;(o=t._s!==b?e._onFulfilled:e._onRejected)!==r?(n=G(V)(o,t._v))!==x?tt(e,n):Z(e,b,n.e):Z(e,t._s,t._v)})),Y=L(9,(function(t){(function t(e){if(e._umark)return!0;e._umark=!0;var r,n=0,o=e._c;for(;n<o;)if((r=e[n++])._onRejected||t(r))return!0})(t)||(t[O]=1,U($,t))}));function U(t,e){var r="on"+t.toLowerCase(),n=u[r];l&&l.listeners(t).length?t===$?l.emit(t,e._v,e):l.emit(t,e):n?n({reason:e._v,promise:e}):F[t](e._v,e)}function q(t){return t&&t._s}function J(t){return q(t)?new t(N):(e=new t((function(t,o){if(e)throw z();r=t,n=o})),W(r,M),W(n,M),e);var e,r,n}function K(t,e){var r=!1;return function(n){r||(r=!0,p&&(t[S]=B(!0)),e===h?tt(t,n):Z(t,e,n))}}function Q(t,e){var r=[];function n(t){return r.push(t.replace(/^\s+|\s+$/g,""))}return p&&(e[S]&&n(e[S]),function t(e){e&&_ in e&&(t(e._next),n(e[_]+""),t(e._p))}(e)),(t&&t.stack?t.stack:t)+("\n"+r.join("\n")).replace(A,"")}function V(t,e){return t(e)}function Z(t,e,r){var n=0,o=t._c;if(t._s===v)for(t._s=e,t._v=r,e===b&&(p&&D(r,y)&&(r.longStack=Q(r,t)),Y(t));n<o;)X(t,t[n++]);return t}function tt(t,e){if(e===t&&e)return Z(t,b,z(T)),t;if(e!==i&&(M(e)||I(e))){var r=G(et)(e);if(r===x)return Z(t,b,r.e),t;M(r)?(p&&q(e)&&(t._next=e),q(e)?rt(t,e,r):F.nextTick((function(){rt(t,e,r)}))):Z(t,h,e)}else Z(t,h,e);return t}function et(t){return t.then}function rt(t,e,r){var n=G(r,e)((function(r){e&&(e=i,tt(t,r))}),(function(r){e&&(e=i,Z(t,b,r))}));n===x&&e&&(Z(t,b,n.e),e=i)}u.Promise=F}()}("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});