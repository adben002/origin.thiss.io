/*! For detailed credits and licence information see https://github.com/financial-times/polyfill-library */
!function(t,e){function r(t){if(1/t==-1/0&&(t=0),t>Math.pow(2,32)-1)throw new RangeError("Invalid array length");var e=[];return e.length=t,e}function n(t,e){var r=arguments.length>2?arguments[2]:[];if(!1===c(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(e,r)}function o(t,e){return t[e]}function i(t,e){return e in t}function c(t){return"function"==typeof t}function u(t){if(null==t)throw TypeError(Object.prototype.toString.call(t)+" is not coercible to Object.");return t}function a(t){return Boolean(t)}function l(t){var e=Number(t);return isNaN(e)?0:1/e==1/0||1/e==-1/0||e===1/0||e===-1/0?e:(e<0?-1:1)*Math.floor(Math.abs(e))}function f(t){var e=l(t);return e<=0?0:Math.min(e,Math.pow(2,53)-1)}function p(t){if(null==t)throw TypeError();return Object(t)}function s(t,e){var r,n=(r=e,p(t)[r]);if(null!=n){if(!1===c(n))throw new TypeError("Method not callable: "+e);return n}}function y(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in t&&(e instanceof t.Symbol||e.constructor===t.Symbol)?"symbol":"object"}}function b(t,e){var r=o(t,"prototype");return"object"!==y(r)&&(r=e),r}function v(t){return"object"===y(t)&&("function"==typeof t&&!!t.prototype)}function h(e){if("object"!==y(e))return!1;var r="Symbol"in t&&"match"in t.Symbol?o(e,t.Symbol.match):void 0;if(void 0!==r)return a(r);try{var n=e.lastIndex;return e.lastIndex=0,RegExp.prototype.exec.call(e),!0}catch(t){}finally{e.lastIndex=n}return!1}function g(t,e){if("string"===e)var r=["toString","valueOf"];else r=["valueOf","toString"];for(var i=0;i<r.length;++i){var u=o(t,r[i]);if(c(u)){var a=n(u,t);if("object"!==y(a))return a}}throw new TypeError("Cannot convert to primitive.")}function d(t,e){return y(t)===y(e)&&("number"===y(t)?!(!isNaN(t)||!isNaN(e))||(1/t==1/0&&1/e==-1/0||(1/t==-1/0&&1/e==1/0||t===e)):function(t,e){return t===e}(t,e))}function w(e){var r=arguments.length>1?arguments[1]:void 0;if("object"===y(e)){if(arguments.length<2)var o="default";else r===String?o="string":r===Number&&(o="number");var i="function"==typeof t.Symbol&&"symbol"==typeof t.Symbol.toPrimitive?s(e,t.Symbol.toPrimitive):void 0;if(void 0!==i){var c=n(i,e,[o]);if("object"!==y(c))return c;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===o&&(o="number"),g(e,o)}return e}function j(t){switch(y(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return j(w(t,String));default:return String(t)}}var m,O,_,S,P,E,T;function x(t,e,r){var n=function(t,e,r){var n={value:r,writable:!0,enumerable:!0,configurable:!0};try{return Object.defineProperty(t,e,n),!0}catch(t){return!1}}(t,e,r);if(!n)throw new TypeError("Cannot assign value `"+Object.prototype.toString.call(r)+"` to property `"+Object.prototype.toString.call(e)+"` on object `"+Object.prototype.toString.call(t)+"`");return n}function k(t,e,r){var n={value:r,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(t,e,n)}function $(t,e){var r=arguments[2]||{},n=b(t,e),o=Object.create(n);for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&Object.defineProperty(o,i,{configurable:!0,enumerable:!1,writable:!0,value:r[i]});return o}function A(e,i){var c;if(0===i&&1/i==-1/0&&(i=0),!1===(c=e,"[object Array]"===Object.prototype.toString.call(c)))return r(i);var u=o(e,"constructor");if("object"===y(u)&&null===(u="Symbol"in t&&"species"in t.Symbol?o(u,t.Symbol.species):void 0)&&(u=void 0),void 0===u)return r(i);if(!v(u))throw new TypeError("C must be a constructor");return function(t){var e=arguments.length>2?arguments[2]:t,r=arguments.length>1?arguments[1]:[];if(!v(t))throw new TypeError("F must be a constructor.");if(!v(e))throw new TypeError("newTarget must be a constructor.");if(e===t)return new(Function.prototype.bind.apply(t,[null].concat(r)));var o=$(e,Object.prototype);return n(t,o,r)}(u,[i])}"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(m=Object.defineProperty,O=Object.prototype.hasOwnProperty.call(Object.prototype,"__defineGetter__"),_="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,e,r){if(m&&(t===window||t===document||t===Element.prototype||t instanceof Element))return m(t,e,r);if(null===t||!(t instanceof Object||"object"==typeof t))throw new TypeError("Object.defineProperty called on non-object");if(!(r instanceof Object))throw new TypeError("Property description must be an object");var n=String(e),o="value"in r||"writable"in r,i="get"in r&&typeof r.get,c="set"in r&&typeof r.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!O)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(_);Object.__defineGetter__.call(t,n,r.get)}else t[n]=r.value;if(c){if("function"!==c)throw new TypeError("Setter must be a function");if(!O)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(_);Object.__defineSetter__.call(t,n,r.set)}return"value"in r&&(t[n]=r.value),t}),"forEach"in Array.prototype||k(Array.prototype,"forEach",(function(t){var e=p(this),r=e instanceof String?e.split(""):e,u=f(o(e,"length"));if(!1===c(t))throw new TypeError(t+" is not a function");for(var a=arguments.length>1?arguments[1]:void 0,l=0;l<u;){var s=j(l),y=i(r,s);if(y){var b=o(r,s);n(t,a,[b,l,e])}l+=1}})),"includes"in Array.prototype||k(Array.prototype,"includes",(function(t){"use strict";var e=p(this),r=f(o(e,"length"));if(0===r)return!1;var n=l(arguments[1]);if(n>=0)var i=n;else(i=r+n)<0&&(i=0);for(;i<r;){var c=o(e,j(i));if(d(t,c))return!0;i+=1}return!1})),"indexOf"in Array.prototype||k(Array.prototype,"indexOf",(function(t){var e=p(this),r=f(o(e,"length"));if(0===r)return-1;var n=l(arguments[1]);if(n>=r)return-1;if(n>=0)var c=1/n==-1/0?0:n;else(c=r+n)<0&&(c=0);for(;c<r;){var u=i(e,j(c));if(u){var a=o(e,j(c)),s=t===a;if(s)return c}c+=1}return-1})),"bind"in Function.prototype||k(Function.prototype,"bind",(function(t){var e=Array,r=Object,n=e.prototype,o=function(){},i=n.slice,u=n.concat,a=n.push,l=Math.max,f=this;if(!c(f))throw new TypeError("Function.prototype.bind called on incompatible "+f);for(var p,s=i.call(arguments,1),y=function(){if(this instanceof p){var e=f.apply(this,u.call(s,i.call(arguments)));return r(e)===e?e:this}return f.apply(t,u.call(s,i.call(arguments)))},b=l(0,f.length-s.length),v=[],h=0;h<b;h++)a.call(v,"$"+h);return p=Function("binder","return function ("+v.join(",")+"){ return binder.apply(this, arguments); }")(y),f.prototype&&(o.prototype=f.prototype,p.prototype=new o,o.prototype=null),p})),"freeze"in Object||k(Object,"freeze",(function(t){return t})),"getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{return"3"===Object.getOwnPropertyDescriptor("13.7",1).value}catch(t){return!1}}()||(S=Object.getOwnPropertyDescriptor,P=function(){try{return 1===Object.defineProperty(document.createElement("div"),"one",{get:function(){return 1}}).one}catch(t){return!1}},E={}.toString,T="".split,k(Object,"getOwnPropertyDescriptor",(function(t,e){var r=p(t);r=("string"===y(r)||r instanceof String)&&"[object String]"==E.call(t)?T.call(t,""):Object(t);var n,o,i=function(t){var e=w(t,String);return"symbol"===y(e)?e:j(e)}(e);if(P)try{return S(r,i)}catch(t){}if(n=r,o=i,Object.prototype.hasOwnProperty.call(n,o))return{enumerable:!0,configurable:!0,writable:!0,value:r[i]}}))),"getPrototypeOf"in Object||k(Object,"getPrototypeOf",(function(t){if(t!==Object(t))throw new TypeError("Object.getPrototypeOf called on non-object");var e=t.__proto__;return e||null===e?e:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Object.prototype:null})),"keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),!0}catch(t){return!1}}()||k(Object,"keys",function(){"use strict";var t=Object.prototype.hasOwnProperty,e=Object.prototype.toString,r=Object.prototype.propertyIsEnumerable,n=!r.call({toString:null},"toString"),o=r.call((function(){}),"prototype"),i=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],c=function(t){var e=t.constructor;return e&&e.prototype===t},u={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},a=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!u["$"+e]&&t.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{c(window[e])}catch(t){return!0}}catch(t){return!0}return!1}();return function(r){var u,l,f,p="[object Function]"===e.call(r),s=(u=r,l=e.call(u),(f="[object Arguments]"===l)||(f="[object Array]"!==l&&null!==u&&"object"==typeof u&&"number"==typeof u.length&&u.length>=0&&"[object Function]"===e.call(u.callee)),f),y="[object String]"===e.call(r),b=[];if(null==r)throw new TypeError("Cannot convert undefined or null to object");var v=o&&p;if(y&&r.length>0&&!t.call(r,0))for(var h=0;h<r.length;++h)b.push(String(h));if(s&&r.length>0)for(var g=0;g<r.length;++g)b.push(String(g));else for(var d in r)v&&"prototype"===d||!t.call(r,d)||b.push(String(d));if(n)for(var w=function(t){if("undefined"==typeof window||!a)return c(t);try{return c(t)}catch(t){return!1}}(r),j=0;j<i.length;++j)w&&"constructor"===i[j]||!t.call(r,i[j])||b.push(i[j]);return b}}()),"defineProperties"in Object||k(Object,"defineProperties",(function(t,e){if("object"!==y(t))throw new TypeError("Object.defineProperties called on non-object");for(var r=p(e),n=Object.keys(r),i=[],c=0;c<n.length;c++){var u=n[c],a=Object.getOwnPropertyDescriptor(r,u);if(void 0!==a&&a.enumerable){var l=o(r,u);i.push([u,l])}}for(var f=0;f<i.length;f++){var s=i[f][0];l=i[f][1],Object.defineProperty(t,s,l)}return t})),"create"in Object||function(){if(!({__proto__:null}instanceof Object))var t=function(){return{__proto__:null}};else t=function(){var e=document.createElement("iframe");e.style.display="none";var r=document.body||document.documentElement;r.appendChild(e),e.src="javascript:";var n=e.contentWindow.Object.prototype;r.removeChild(e),e=null,delete n.constructor,delete n.hasOwnProperty,delete n.propertyIsEnumerable,delete n.isPrototypeOf,delete n.toLocaleString,delete n.toString,delete n.valueOf;var o=function(){};return o.prototype=n,t=function(){return new o},new o};function e(){}k(Object,"create",(function(r,n){if("object"!==y(r)&&"null"!==y(r))throw new TypeError("Object prototype may only be an Object or null");if("null"===y(r))var o=t();else e.prototype=r,(o=new e).__proto__=r,o.constructor.prototype=r,o.__proto__=r;return 1 in arguments?Object.defineProperties(o,n):o}))}(),"filter"in Array.prototype||k(Array.prototype,"filter",(function(t){var e=p(this),r=f(o(e,"length"));if(!1===c(t))throw new TypeError(t+" is not a function");for(var u=arguments.length>1?arguments[1]:void 0,l=A(e,0),s=0,y=0;s<r;){var b=j(s),v=i(e,b);if(v){var h=o(e,b),g=a(n(t,u,[h,s,e]));g&&(x(l,j(y),h),y+=1)}s+=1}return l})),"map"in Array.prototype||k(Array.prototype,"map",(function(t){var e=p(this),r=f(o(e,"length"));if(!1===c(t))throw new TypeError(t+" is not a function");for(var u=arguments.length>1?arguments[1]:void 0,a=A(e,r),l=0;l<r;){var s=j(l),y=i(e,s);if(y){var b=o(e,s),v=n(t,u,[b,l,e]);x(a,s,v)}l+=1}return a})),"getOwnPropertyNames"in Object&&function(){try{return Object.getOwnPropertyNames(1),!0}catch(t){return!1}}()||function(){var e={}.toString,r="".split,n=[].concat,o=Object.prototype.hasOwnProperty,i=Object.getOwnPropertyNames||Object.keys,c="object"==typeof t?i(t):[];k(Object,"getOwnPropertyNames",(function(t){var u=p(t);if("[object Window]"===e.call(u))try{return i(u)}catch(t){return n.call([],c)}u="[object String]"==e.call(u)?r.call(u,""):Object(u);for(var a=i(u),l=["length","prototype"],f=0;f<l.length;f++){var s=l[f];o.call(u,s)&&!a.includes(s)&&a.push(s)}if(a.includes("__proto__")){var y=a.indexOf("__proto__");a.splice(y,1)}return a}))}(),"values"in Object||function(){var t={}.toString,e="".split;k(Object,"values",(function(r){var n="[object String]"==t.call(r)?e.call(r,""):p(r);return Object.keys(n).map((function(t){return n[t]}))}))}(),"endsWith"in String.prototype||k(String.prototype,"endsWith",(function(t){"use strict";var e=arguments.length>1?arguments[1]:void 0,r=u(this),n=j(r),o=h(t);if(o)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var i=j(t),c=n.length,a=void 0===e?c:l(e),f=Math.min(Math.max(a,0),c),p=i.length,s=f-p;return!(s<0)&&n.substr(s,p)===i})),"includes"in String.prototype||k(String.prototype,"includes",(function(t){"use strict";var e=arguments.length>1?arguments[1]:void 0,r=u(this),n=j(r),o=h(t);if(o)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");var i=j(t),c=l(e),a=n.length,f=Math.min(Math.max(c,0),a);return-1!==String.prototype.indexOf.call(n,i,f)})),"Symbol"in t&&0===t.Symbol.length||function(e,r,n){"use strict";var o,i=0,c=""+Math.random(),u="__symbol:",a=u.length,l="__symbol@@"+c,f="defineProperty",p="defineProperties",s="getOwnPropertyNames",y="getOwnPropertyDescriptor",b="propertyIsEnumerable",v=e.prototype,h=v.hasOwnProperty,g=v[b],d=v.toString,w=Array.prototype.concat,j=e.getOwnPropertyNames?e.getOwnPropertyNames(t):[],m=e[s],O=function(t){if("[object Window]"===d.call(t))try{return m(t)}catch(t){return w.call([],j)}return m(t)},_=e[y],S=e.create,P=e.keys,E=e.freeze||e,T=e[f],x=e[p],k=_(e,s),$=function(t,e,r){if(!h.call(t,l))try{T(t,l,{enumerable:!1,configurable:!1,writable:!1,value:{}})}catch(e){t[l]={}}t[l]["@@"+e]=r},A=function(t,e){var r=S(t);return O(e).forEach((function(t){C.call(e,t)&&L(r,t,e[t])})),r},N=function(){},F=function(t){return t!=l&&!h.call(R,t)},I=function(t){return t!=l&&h.call(R,t)},C=function(t){var e=""+t;return I(e)?h.call(this,e)&&this[l]["@@"+e]:g.call(this,t)},M=function(t){var r={enumerable:!1,configurable:!0,get:N,set:function(e){o(this,t,{enumerable:!1,configurable:!0,writable:!0,value:e}),$(this,t,!0)}};try{T(v,t,r)}catch(e){v[t]=r.value}return E(R[t]=T(e(t),"constructor",W))},D=function t(){var e=arguments[0];if(this instanceof t)throw new TypeError("Symbol is not a constructor");return M(u.concat(e||"",c,++i))},R=S(null),W={value:D},G=function(t){return R[t]},L=function(t,e,r){var n=""+e;return I(n)?(o(t,n,r.enumerable?function(t){var e=S(t);return e.enumerable=!1,e}(r):r),$(t,n,!!r.enumerable)):T(t,e,r),t},H=function(t){return O(t).filter(t===v?(e=t,function(t){return h.call(e,l)&&h.call(e[l],"@@"+t)}):I).map(G);var e};k.value=L,T(e,f,k),k.value=H,T(e,"getOwnPropertySymbols",k),k.value=function(t){return O(t).filter(F)},T(e,s,k),k.value=function(t,e){var r=H(e);return r.length?P(e).concat(r).forEach((function(r){C.call(e,r)&&L(t,r,e[r])})):x(t,e),t},T(e,p,k),k.value=C,T(v,b,k),k.value=D,T(n,"Symbol",k),k.value=function(t){var e=u.concat(u,t,c);return e in v?R[e]:M(e)},T(D,"for",k),k.value=function(t){if(F(t))throw new TypeError(t+" is not a symbol");return h.call(R,t)?t.slice(2*a,-c.length):void 0},T(D,"keyFor",k),k.value=function(t,e){var r=_(t,e);return r&&I(e)&&(r.enumerable=C.call(t,e)),r},T(e,y,k),k.value=function(t,e){return 1===arguments.length||void 0===e?S(t):A(t,e)},T(e,"create",k);var z=null===function(){return this}.call(null);k.value=z?function(){var t=d.call(this);return"[object String]"===t&&I(this)?"[object Symbol]":t}:function(){if(this===window)return"[object Null]";var t=d.call(this);return"[object String]"===t&&I(this)?"[object Symbol]":t},T(v,"toString",k),o=function(t,e,r){var n=_(v,e);delete v[e],T(t,e,r),t!==v&&T(v,e,n)}}(Object,0,this),"Symbol"in t&&"toStringTag"in t.Symbol||Object.defineProperty(Symbol,"toStringTag",{value:Symbol("toStringTag")}),"Promise"in t||function(){"use strict";var e,r,n="object"==typeof t,o=t,i=o.Promise,c=o.process,u=o.console,a=!0,l=Array,f=Error,p={e:null},s=function(){},y=/^.+\/node_modules\/yaku\/.+\n?/gm,b=function(t){var e;if(!h(this)||void 0!==this._s)throw S("Invalid this");if(this._s=3,a&&(this._pt=P()),t!==s){if(!g(t))throw S("Invalid argument");(e=m(t)(A(this,2),A(this,1)))===p&&I(this,1,e.e)}};function v(){return b.Symbol.species||"Symbol(species)"}function h(t){return t&&"object"==typeof t}function g(t){return"function"==typeof t}function d(t,e){return t instanceof e}function w(t,e,r){if(!e(t))throw S(r)}function j(){try{return e.apply(r,arguments)}catch(t){return p.e=t,p}}function m(t,n){return e=t,r=n,j}function O(t,e){var r=l(t),n=0;function o(){for(var o=0;o<n;)e(r[o],r[o+1]),r[o++]=void 0,r[o++]=void 0;n=0,r.length>t&&(r.length=t)}return function(t,e){r[n++]=t,r[n++]=e,2===n&&b.nextTick(o)}}function _(t,e){var r,n,o,i,c=0;if(!t)throw S("Invalid argument");var u=t[b.Symbol.iterator];if(g(u))n=u.call(t);else{if(!g(t.next)){if(d(t,l)){for(r=t.length;c<r;)e(t[c],c++);return c}throw S("Invalid argument")}n=t}for(;!(o=n.next()).done;)if((i=m(e)(o.value,c++))===p)throw g(n.return)&&n.return(),i.e;return c}function S(t){return new TypeError(t)}function P(t){return(t?"":"\nFrom previous ")+(new f).stack}b.default=b,function(t,e){for(var r in e)t[r]=e[r]}(b.prototype,{then:function(t,e){if(void 0===this._s)throw S();return function(t,e,r,n){g(r)&&(e._onFulfilled=r);g(n)&&(t._uh&&x("rejectionHandled",t),e._onRejected=n);a&&(e._p=t);t[t._c++]=e,3!==t._s&&E(t,e);return e}(this,$(b.speciesConstructor(this,b)),t,e)},catch:function(t){return this.then(void 0,t)},finally:function(t){return this.then((function(e){return b.resolve(t()).then((function(){return e}))}),(function(e){return b.resolve(t()).then((function(){throw e}))}))},_c:0,_p:null}),b.resolve=function(t){return k(t)?t:C($(this),t)},b.reject=function(t){return I($(this),1,t)},b.race=function(t){var e=this,r=$(e),n=function(t){I(r,2,t)},o=function(t){I(r,1,t)},i=m(_)(t,(function(t){e.resolve(t).then(n,o)}));return i===p?e.reject(i.e):r},b.all=function(t){var e,r=this,n=$(r),o=[];function i(t){I(n,1,t)}return(e=m(_)(t,(function(t,c){r.resolve(t).then((function(t){o[c]=t,--e||I(n,2,o)}),i)})))===p?r.reject(e.e):(e||I(n,2,[]),n)},b.Symbol=o.Symbol||{},m((function(){Object.defineProperty(b,v(),{get:function(){return this}})}))(),b.speciesConstructor=function(t,e){var r=t.constructor;return r&&r[v()]||e},b.unhandledRejection=function(t,e){u&&u.error("Uncaught (in promise)",a?e.longStack:N(t,e))},b.rejectionHandled=s,b.enableLongStackTrace=function(){a=!0},b.nextTick=n?function(t){i?new i((function(t){t()})).then(t):setTimeout(t)}:c.nextTick,b._s=1;var E=O(999,(function(t,e){var r,n;void 0!==(n=1!==t._s?e._onFulfilled:e._onRejected)?(r=m(F)(n,t._v))!==p?C(e,r):I(e,1,r.e):I(e,t._s,t._v)})),T=O(9,(function(t){(function t(e){if(e._umark)return!0;e._umark=!0;var r,n=0,o=e._c;for(;n<o;)if((r=e[n++])._onRejected||t(r))return!0})(t)||(t._uh=1,x("unhandledRejection",t))}));function x(t,e){var r="on"+t.toLowerCase(),n=o[r];c&&c.listeners(t).length?"unhandledRejection"===t?c.emit(t,e._v,e):c.emit(t,e):n?n({reason:e._v,promise:e}):b[t](e._v,e)}function k(t){return t&&t._s}function $(t){return k(t)?new t(s):(e=new t((function(t,o){if(e)throw S();r=t,n=o})),w(r,g),w(n,g),e);var e,r,n}function A(t,e){var r=!1;return function(n){r||(r=!0,a&&(t._st=P(!0)),2===e?C(t,n):I(t,e,n))}}function N(t,e){var r=[];function n(t){return r.push(t.replace(/^\s+|\s+$/g,""))}return a&&(e._st&&n(e._st),function t(e){e&&"_pt"in e&&(t(e._next),n(e._pt+""),t(e._p))}(e)),(t&&t.stack?t.stack:t)+("\n"+r.join("\n")).replace(y,"")}function F(t,e){return t(e)}function I(t,e,r){var n=0,o=t._c;if(3===t._s)for(t._s=e,t._v=r,1===e&&(a&&d(r,f)&&(r.longStack=N(r,t)),T(t));n<o;)E(t,t[n++]);return t}function C(t,e){if(e===t&&e)return I(t,1,S("Chaining cycle detected for promise")),t;if(null!==e&&(g(e)||h(e))){var r=m(M)(e);if(r===p)return I(t,1,r.e),t;g(r)?(a&&k(e)&&(t._next=e),k(e)?D(t,e,r):b.nextTick((function(){D(t,e,r)}))):I(t,2,e)}else I(t,2,e);return t}function M(t){return t.then}function D(t,e,r){var n=m(r,e)((function(r){e&&(e=null,C(t,r))}),(function(r){e&&(e=null,I(t,1,r))}));n===p&&e&&(I(t,1,n.e),e=null)}o.Promise=b}()}("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});