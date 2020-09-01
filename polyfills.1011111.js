/*! For detailed credits and licence information see https://github.com/financial-times/polyfill-library */
!function(t,e){function n(t){if(1/t==-1/0&&(t=0),t>Math.pow(2,32)-1)throw new RangeError("Invalid array length");var e=[];return e.length=t,e}function r(t,e){var n=arguments.length>2?arguments[2]:[];if(!1===c(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(e,n)}function o(t,e){return t[e]}function i(t,e){return e in t}function c(t){return"function"==typeof t}function a(t){if(null==t)throw TypeError(Object.prototype.toString.call(t)+" is not coercible to Object.");return t}function u(t){return Boolean(t)}function s(t){var e=Number(t);return isNaN(e)?0:1/e==1/0||1/e==-1/0||e===1/0||e===-1/0?e:(e<0?-1:1)*Math.floor(Math.abs(e))}function l(t){var e=s(t);return e<=0?0:Math.min(e,Math.pow(2,53)-1)}function f(t){if(null==t)throw TypeError();return Object(t)}function p(t,e){var n,r=(n=e,f(t)[n]);if(null!=r){if(!1===c(r))throw new TypeError("Method not callable: "+e);return r}}function y(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in t&&(e instanceof t.Symbol||e.constructor===t.Symbol)?"symbol":"object"}}function d(t,e){var n=o(t,"prototype");return"object"!==y(n)&&(n=e),n}function h(t){return"object"===y(t)&&("function"==typeof t&&!!t.prototype)}function b(e){if("object"!==y(e))return!1;var n="Symbol"in t&&"match"in t.Symbol?o(e,t.Symbol.match):void 0;if(void 0!==n)return u(n);try{var r=e.lastIndex;return e.lastIndex=0,RegExp.prototype.exec.call(e),!0}catch(t){}finally{e.lastIndex=r}return!1}function v(t,e){if("string"===e)var n=["toString","valueOf"];else n=["valueOf","toString"];for(var i=0;i<n.length;++i){var a=o(t,n[i]);if(c(a)){var u=r(a,t);if("object"!==y(u))return u}}throw new TypeError("Cannot convert to primitive.")}function m(t,e){return y(t)===y(e)&&("number"===y(t)?!(!isNaN(t)||!isNaN(e))||(1/t==1/0&&1/e==-1/0||(1/t==-1/0&&1/e==1/0||t===e)):function(t,e){return t===e}(t,e))}function w(e){var n=arguments.length>1?arguments[1]:void 0;if("object"===y(e)){if(arguments.length<2)var o="default";else n===String?o="string":n===Number&&(o="number");var i="function"==typeof t.Symbol&&"symbol"==typeof t.Symbol.toPrimitive?p(e,t.Symbol.toPrimitive):void 0;if(void 0!==i){var c=r(i,e,[o]);if("object"!==y(c))return c;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===o&&(o="number"),v(e,o)}return e}function g(t){switch(y(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return g(w(t,String));default:return String(t)}}var E,j,O,_,S,T,P;function A(t,e,n){var r=function(t,e,n){var r={value:n,writable:!0,enumerable:!0,configurable:!0};try{return Object.defineProperty(t,e,r),!0}catch(t){return!1}}(t,e,n);if(!r)throw new TypeError("Cannot assign value `"+Object.prototype.toString.call(n)+"` to property `"+Object.prototype.toString.call(e)+"` on object `"+Object.prototype.toString.call(t)+"`");return r}function x(t,e,n){var r={value:n,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(t,e,r)}function L(t,e){var n=arguments[2]||{},r=d(t,e),o=Object.create(r);for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&Object.defineProperty(o,i,{configurable:!0,enumerable:!1,writable:!0,value:n[i]});return o}function D(e,i){var c;if(0===i&&1/i==-1/0&&(i=0),!1===(c=e,"[object Array]"===Object.prototype.toString.call(c)))return n(i);var a=o(e,"constructor");if("object"===y(a)&&null===(a="Symbol"in t&&"species"in t.Symbol?o(a,t.Symbol.species):void 0)&&(a=void 0),void 0===a)return n(i);if(!h(a))throw new TypeError("C must be a constructor");return function(t){var e=arguments.length>2?arguments[2]:t,n=arguments.length>1?arguments[1]:[];if(!h(t))throw new TypeError("F must be a constructor.");if(!h(e))throw new TypeError("newTarget must be a constructor.");if(e===t)return new(Function.prototype.bind.apply(t,[null].concat(n)));var o=L(e,Object.prototype);return r(t,o,n)}(a,[i])}"document"in t||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(t.HTMLDocument?t.Document=t.HTMLDocument:(t.Document=t.HTMLDocument=document.constructor=new Function("return function Document() {}")(),t.Document.prototype=document)),"Element"in t&&"HTMLElement"in t||function(){if(!("Element"in t)||!("HTMLElement"in t))if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {}")();var e,n=document.appendChild(document.createElement("body")),r=n.appendChild(document.createElement("iframe")).contentWindow.document,o=Element.prototype=r.appendChild(r.createElement("*")),i={},c=function(t,e){var n,r,o,a=t.childNodes||[],u=-1;if(1===t.nodeType&&t.constructor!==Element)for(n in t.constructor=Element,i)r=i[n],t[n]=r;for(;o=e&&a[++u];)c(o,e);return t},a=document.getElementsByTagName("*"),u=document.createElement,s=100;o.attachEvent("onpropertychange",(function(t){for(var e,n=t.propertyName,r=!Object.prototype.hasOwnProperty.call(i,n),c=o[n],u=i[n],s=-1;e=a[++s];)1===e.nodeType&&(r||e[n]===u)&&(e[n]=c);i[n]=c})),o.constructor=Element,o.hasAttribute||(o.hasAttribute=function(t){return null!==this.getAttribute(t)}),l()||(document.onreadystatechange=l,e=setInterval(l,25)),document.createElement=function(t){var e=u(String(t).toLowerCase());return c(e)},document.removeChild(n)}else window.HTMLElement=window.Element;function l(){return s--||clearTimeout(e),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(c(document,!0),e&&document.body.prototype&&clearTimeout(e),!!document.body.prototype)}}(),"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(E=Object.defineProperty,j=Object.prototype.hasOwnProperty.call(Object.prototype,"__defineGetter__"),O="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,e,n){if(E&&(t===window||t===document||t===Element.prototype||t instanceof Element))return E(t,e,n);if(null===t||!(t instanceof Object||"object"==typeof t))throw new TypeError("Object.defineProperty called on non-object");if(!(n instanceof Object))throw new TypeError("Property description must be an object");var r=String(e),o="value"in n||"writable"in n,i="get"in n&&typeof n.get,c="set"in n&&typeof n.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!j)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(O);Object.__defineGetter__.call(t,r,n.get)}else t[r]=n.value;if(c){if("function"!==c)throw new TypeError("Setter must be a function");if(!j)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(O);Object.__defineSetter__.call(t,r,n.set)}return"value"in n&&(t[r]=n.value),t}),"forEach"in Array.prototype||x(Array.prototype,"forEach",(function(t){var e=f(this),n=e instanceof String?e.split(""):e,a=l(o(e,"length"));if(!1===c(t))throw new TypeError(t+" is not a function");for(var u=arguments.length>1?arguments[1]:void 0,s=0;s<a;){var p=g(s),y=i(n,p);if(y){var d=o(n,p);r(t,u,[d,s,e])}s+=1}})),"includes"in Array.prototype||x(Array.prototype,"includes",(function(t){"use strict";var e=f(this),n=l(o(e,"length"));if(0===n)return!1;var r=s(arguments[1]);if(r>=0)var i=r;else(i=n+r)<0&&(i=0);for(;i<n;){var c=o(e,g(i));if(m(t,c))return!0;i+=1}return!1})),"indexOf"in Array.prototype||x(Array.prototype,"indexOf",(function(t){var e=f(this),n=l(o(e,"length"));if(0===n)return-1;var r=s(arguments[1]);if(r>=n)return-1;if(r>=0)var c=1/r==-1/0?0:r;else(c=n+r)<0&&(c=0);for(;c<n;){var a=i(e,g(c));if(a){var u=o(e,g(c)),p=t===u;if(p)return c}c+=1}return-1})),"bind"in Function.prototype||x(Function.prototype,"bind",(function(t){var e=Array,n=Object,r=e.prototype,o=function(){},i=r.slice,a=r.concat,u=r.push,s=Math.max,l=this;if(!c(l))throw new TypeError("Function.prototype.bind called on incompatible "+l);for(var f,p=i.call(arguments,1),y=function(){if(this instanceof f){var e=l.apply(this,a.call(p,i.call(arguments)));return n(e)===e?e:this}return l.apply(t,a.call(p,i.call(arguments)))},d=s(0,l.length-p.length),h=[],b=0;b<d;b++)u.call(h,"$"+b);return f=Function("binder","return function ("+h.join(",")+"){ return binder.apply(this, arguments); }")(y),l.prototype&&(o.prototype=l.prototype,f.prototype=new o,o.prototype=null),f})),"freeze"in Object||x(Object,"freeze",(function(t){return t})),"getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{return"3"===Object.getOwnPropertyDescriptor("13.7",1).value}catch(t){return!1}}()||(_=Object.getOwnPropertyDescriptor,S=function(){try{return 1===Object.defineProperty(document.createElement("div"),"one",{get:function(){return 1}}).one}catch(t){return!1}},T={}.toString,P="".split,x(Object,"getOwnPropertyDescriptor",(function(t,e){var n=f(t);n=("string"===y(n)||n instanceof String)&&"[object String]"==T.call(t)?P.call(t,""):Object(t);var r,o,i=function(t){var e=w(t,String);return"symbol"===y(e)?e:g(e)}(e);if(S)try{return _(n,i)}catch(t){}if(r=n,o=i,Object.prototype.hasOwnProperty.call(r,o))return{enumerable:!0,configurable:!0,writable:!0,value:n[i]}}))),"getPrototypeOf"in Object||x(Object,"getPrototypeOf",(function(t){if(t!==Object(t))throw new TypeError("Object.getPrototypeOf called on non-object");var e=t.__proto__;return e||null===e?e:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Object.prototype:null})),"keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),!0}catch(t){return!1}}()||x(Object,"keys",function(){"use strict";var t=Object.prototype.hasOwnProperty,e=Object.prototype.toString,n=Object.prototype.propertyIsEnumerable,r=!n.call({toString:null},"toString"),o=n.call((function(){}),"prototype"),i=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],c=function(t){var e=t.constructor;return e&&e.prototype===t},a={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},u=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!a["$"+e]&&t.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{c(window[e])}catch(t){return!0}}catch(t){return!0}return!1}();return function(n){var a,s,l,f="[object Function]"===e.call(n),p=(a=n,s=e.call(a),(l="[object Arguments]"===s)||(l="[object Array]"!==s&&null!==a&&"object"==typeof a&&"number"==typeof a.length&&a.length>=0&&"[object Function]"===e.call(a.callee)),l),y="[object String]"===e.call(n),d=[];if(null==n)throw new TypeError("Cannot convert undefined or null to object");var h=o&&f;if(y&&n.length>0&&!t.call(n,0))for(var b=0;b<n.length;++b)d.push(String(b));if(p&&n.length>0)for(var v=0;v<n.length;++v)d.push(String(v));else for(var m in n)h&&"prototype"===m||!t.call(n,m)||d.push(String(m));if(r)for(var w=function(t){if("undefined"==typeof window||!u)return c(t);try{return c(t)}catch(t){return!1}}(n),g=0;g<i.length;++g)w&&"constructor"===i[g]||!t.call(n,i[g])||d.push(i[g]);return d}}()),"defineProperties"in Object||x(Object,"defineProperties",(function(t,e){if("object"!==y(t))throw new TypeError("Object.defineProperties called on non-object");for(var n=f(e),r=Object.keys(n),i=[],c=0;c<r.length;c++){var a=r[c],u=Object.getOwnPropertyDescriptor(n,a);if(void 0!==u&&u.enumerable){var s=o(n,a);i.push([a,s])}}for(var l=0;l<i.length;l++){var p=i[l][0];s=i[l][1],Object.defineProperty(t,p,s)}return t})),"create"in Object||function(){if(!({__proto__:null}instanceof Object))var t=function(){return{__proto__:null}};else t=function(){var e=document.createElement("iframe");e.style.display="none";var n=document.body||document.documentElement;n.appendChild(e),e.src="javascript:";var r=e.contentWindow.Object.prototype;n.removeChild(e),e=null,delete r.constructor,delete r.hasOwnProperty,delete r.propertyIsEnumerable,delete r.isPrototypeOf,delete r.toLocaleString,delete r.toString,delete r.valueOf;var o=function(){};return o.prototype=r,t=function(){return new o},new o};function e(){}x(Object,"create",(function(n,r){if("object"!==y(n)&&"null"!==y(n))throw new TypeError("Object prototype may only be an Object or null");if("null"===y(n))var o=t();else e.prototype=n,(o=new e).__proto__=n,o.constructor.prototype=n,o.__proto__=n;return 1 in arguments?Object.defineProperties(o,r):o}))}(),"filter"in Array.prototype||x(Array.prototype,"filter",(function(t){var e=f(this),n=l(o(e,"length"));if(!1===c(t))throw new TypeError(t+" is not a function");for(var a=arguments.length>1?arguments[1]:void 0,s=D(e,0),p=0,y=0;p<n;){var d=g(p),h=i(e,d);if(h){var b=o(e,d),v=u(r(t,a,[b,p,e]));v&&(A(s,g(y),b),y+=1)}p+=1}return s})),"map"in Array.prototype||x(Array.prototype,"map",(function(t){var e=f(this),n=l(o(e,"length"));if(!1===c(t))throw new TypeError(t+" is not a function");for(var a=arguments.length>1?arguments[1]:void 0,u=D(e,n),s=0;s<n;){var p=g(s),y=i(e,p);if(y){var d=o(e,p),h=r(t,a,[d,s,e]);A(u,p,h)}s+=1}return u})),"getOwnPropertyNames"in Object&&function(){try{return Object.getOwnPropertyNames(1),!0}catch(t){return!1}}()||function(){var e={}.toString,n="".split,r=[].concat,o=Object.prototype.hasOwnProperty,i=Object.getOwnPropertyNames||Object.keys,c="object"==typeof t?i(t):[];x(Object,"getOwnPropertyNames",(function(t){var a=f(t);if("[object Window]"===e.call(a))try{return i(a)}catch(t){return r.call([],c)}a="[object String]"==e.call(a)?n.call(a,""):Object(a);for(var u=i(a),s=["length","prototype"],l=0;l<s.length;l++){var p=s[l];o.call(a,p)&&!u.includes(p)&&u.push(p)}if(u.includes("__proto__")){var y=u.indexOf("__proto__");u.splice(y,1)}return u}))}(),"values"in Object||function(){var t={}.toString,e="".split;x(Object,"values",(function(n){var r="[object String]"==t.call(n)?e.call(n,""):f(n);return Object.keys(r).map((function(t){return r[t]}))}))}(),"endsWith"in String.prototype||x(String.prototype,"endsWith",(function(t){"use strict";var e=arguments.length>1?arguments[1]:void 0,n=a(this),r=g(n),o=b(t);if(o)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var i=g(t),c=r.length,u=void 0===e?c:s(e),l=Math.min(Math.max(u,0),c),f=i.length,p=l-f;return!(p<0)&&r.substr(p,f)===i})),"includes"in String.prototype||x(String.prototype,"includes",(function(t){"use strict";var e=arguments.length>1?arguments[1]:void 0,n=a(this),r=g(n),o=b(t);if(o)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");var i=g(t),c=s(e),u=r.length,l=Math.min(Math.max(c,0),u);return-1!==String.prototype.indexOf.call(r,i,l)})),"Symbol"in t&&0===t.Symbol.length||function(e,n,r){"use strict";var o,i=0,c=""+Math.random(),a="__symbol:",u=a.length,s="__symbol@@"+c,l="defineProperty",f="defineProperties",p="getOwnPropertyNames",y="getOwnPropertyDescriptor",d="propertyIsEnumerable",h=e.prototype,b=h.hasOwnProperty,v=h[d],m=h.toString,w=Array.prototype.concat,g=e.getOwnPropertyNames?e.getOwnPropertyNames(t):[],E=e[p],j=function(t){if("[object Window]"===m.call(t))try{return E(t)}catch(t){return w.call([],g)}return E(t)},O=e[y],_=e.create,S=e.keys,T=e.freeze||e,P=e[l],A=e[f],x=O(e,p),L=function(t,e,n){if(!b.call(t,s))try{P(t,s,{enumerable:!1,configurable:!1,writable:!1,value:{}})}catch(e){t[s]={}}t[s]["@@"+e]=n},D=function(t,e){var n=_(t);return j(e).forEach((function(t){H.call(e,t)&&C(n,t,e[t])})),n},M=function(){},R=function(t){return t!=s&&!b.call(N,t)},B=function(t){return t!=s&&b.call(N,t)},H=function(t){var e=""+t;return B(e)?b.call(this,e)&&this[s]["@@"+e]:v.call(this,t)},I=function(t){var n={enumerable:!1,configurable:!0,get:M,set:function(e){o(this,t,{enumerable:!1,configurable:!0,writable:!0,value:e}),L(this,t,!0)}};try{P(h,t,n)}catch(e){h[t]=n.value}return T(N[t]=P(e(t),"constructor",F))},k=function t(){var e=arguments[0];if(this instanceof t)throw new TypeError("Symbol is not a constructor");return I(a.concat(e||"",c,++i))},N=_(null),F={value:k},q=function(t){return N[t]},C=function(t,e,n){var r=""+e;return B(r)?(o(t,r,n.enumerable?function(t){var e=_(t);return e.enumerable=!1,e}(n):n),L(t,r,!!n.enumerable)):P(t,e,n),t},U=function(t){return j(t).filter(t===h?(e=t,function(t){return b.call(e,s)&&b.call(e[s],"@@"+t)}):B).map(q);var e};x.value=C,P(e,l,x),x.value=U,P(e,"getOwnPropertySymbols",x),x.value=function(t){return j(t).filter(R)},P(e,p,x),x.value=function(t,e){var n=U(e);return n.length?S(e).concat(n).forEach((function(n){H.call(e,n)&&C(t,n,e[n])})):A(t,e),t},P(e,f,x),x.value=H,P(h,d,x),x.value=k,P(r,"Symbol",x),x.value=function(t){var e=a.concat(a,t,c);return e in h?N[e]:I(e)},P(k,"for",x),x.value=function(t){if(R(t))throw new TypeError(t+" is not a symbol");return b.call(N,t)?t.slice(2*u,-c.length):void 0},P(k,"keyFor",x),x.value=function(t,e){var n=O(t,e);return n&&B(e)&&(n.enumerable=H.call(t,e)),n},P(e,y,x),x.value=function(t,e){return 1===arguments.length||void 0===e?_(t):D(t,e)},P(e,"create",x);var $=null===function(){return this}.call(null);x.value=$?function(){var t=m.call(this);return"[object String]"===t&&B(this)?"[object Symbol]":t}:function(){if(this===window)return"[object Null]";var t=m.call(this);return"[object String]"===t&&B(this)?"[object Symbol]":t},P(h,"toString",x),o=function(t,e,n){var r=O(h,e);delete h[e],P(t,e,n),t!==h&&P(h,e,r)}}(Object,0,this),"Symbol"in t&&"iterator"in t.Symbol||Object.defineProperty(t.Symbol,"iterator",{value:t.Symbol("iterator")}),"Symbol"in t&&"toStringTag"in t.Symbol||Object.defineProperty(Symbol,"toStringTag",{value:Symbol("toStringTag")}),"Promise"in t||function(){"use strict";var e,n,r="object"==typeof t,o=t,i=o.Promise,c=o.process,a=o.console,u=!0,s=Array,l=Error,f={e:null},p=function(){},y=/^.+\/node_modules\/yaku\/.+\n?/gm,d=function(t){var e;if(!b(this)||void 0!==this._s)throw _("Invalid this");if(this._s=3,u&&(this._pt=S()),t!==p){if(!v(t))throw _("Invalid argument");(e=E(t)(D(this,2),D(this,1)))===f&&B(this,1,e.e)}};function h(){return d.Symbol.species||"Symbol(species)"}function b(t){return t&&"object"==typeof t}function v(t){return"function"==typeof t}function m(t,e){return t instanceof e}function w(t,e,n){if(!e(t))throw _(n)}function g(){try{return e.apply(n,arguments)}catch(t){return f.e=t,f}}function E(t,r){return e=t,n=r,g}function j(t,e){var n=s(t),r=0;function o(){for(var o=0;o<r;)e(n[o],n[o+1]),n[o++]=void 0,n[o++]=void 0;r=0,n.length>t&&(n.length=t)}return function(t,e){n[r++]=t,n[r++]=e,2===r&&d.nextTick(o)}}function O(t,e){var n,r,o,i,c=0;if(!t)throw _("Invalid argument");var a=t[d.Symbol.iterator];if(v(a))r=a.call(t);else{if(!v(t.next)){if(m(t,s)){for(n=t.length;c<n;)e(t[c],c++);return c}throw _("Invalid argument")}r=t}for(;!(o=r.next()).done;)if((i=E(e)(o.value,c++))===f)throw v(r.return)&&r.return(),i.e;return c}function _(t){return new TypeError(t)}function S(t){return(t?"":"\nFrom previous ")+(new l).stack}d.default=d,function(t,e){for(var n in e)t[n]=e[n]}(d.prototype,{then:function(t,e){if(void 0===this._s)throw _();return function(t,e,n,r){v(n)&&(e._onFulfilled=n);v(r)&&(t._uh&&A("rejectionHandled",t),e._onRejected=r);u&&(e._p=t);t[t._c++]=e,3!==t._s&&T(t,e);return e}(this,L(d.speciesConstructor(this,d)),t,e)},catch:function(t){return this.then(void 0,t)},finally:function(t){return this.then((function(e){return d.resolve(t()).then((function(){return e}))}),(function(e){return d.resolve(t()).then((function(){throw e}))}))},_c:0,_p:null}),d.resolve=function(t){return x(t)?t:H(L(this),t)},d.reject=function(t){return B(L(this),1,t)},d.race=function(t){var e=this,n=L(e),r=function(t){B(n,2,t)},o=function(t){B(n,1,t)},i=E(O)(t,(function(t){e.resolve(t).then(r,o)}));return i===f?e.reject(i.e):n},d.all=function(t){var e,n=this,r=L(n),o=[];function i(t){B(r,1,t)}return(e=E(O)(t,(function(t,c){n.resolve(t).then((function(t){o[c]=t,--e||B(r,2,o)}),i)})))===f?n.reject(e.e):(e||B(r,2,[]),r)},d.Symbol=o.Symbol||{},E((function(){Object.defineProperty(d,h(),{get:function(){return this}})}))(),d.speciesConstructor=function(t,e){var n=t.constructor;return n&&n[h()]||e},d.unhandledRejection=function(t,e){a&&a.error("Uncaught (in promise)",u?e.longStack:M(t,e))},d.rejectionHandled=p,d.enableLongStackTrace=function(){u=!0},d.nextTick=r?function(t){i?new i((function(t){t()})).then(t):setTimeout(t)}:c.nextTick,d._s=1;var T=j(999,(function(t,e){var n,r;void 0!==(r=1!==t._s?e._onFulfilled:e._onRejected)?(n=E(R)(r,t._v))!==f?H(e,n):B(e,1,n.e):B(e,t._s,t._v)})),P=j(9,(function(t){(function t(e){if(e._umark)return!0;e._umark=!0;var n,r=0,o=e._c;for(;r<o;)if((n=e[r++])._onRejected||t(n))return!0})(t)||(t._uh=1,A("unhandledRejection",t))}));function A(t,e){var n="on"+t.toLowerCase(),r=o[n];c&&c.listeners(t).length?"unhandledRejection"===t?c.emit(t,e._v,e):c.emit(t,e):r?r({reason:e._v,promise:e}):d[t](e._v,e)}function x(t){return t&&t._s}function L(t){return x(t)?new t(p):(e=new t((function(t,o){if(e)throw _();n=t,r=o})),w(n,v),w(r,v),e);var e,n,r}function D(t,e){var n=!1;return function(r){n||(n=!0,u&&(t._st=S(!0)),2===e?H(t,r):B(t,e,r))}}function M(t,e){var n=[];function r(t){return n.push(t.replace(/^\s+|\s+$/g,""))}return u&&(e._st&&r(e._st),function t(e){e&&"_pt"in e&&(t(e._next),r(e._pt+""),t(e._p))}(e)),(t&&t.stack?t.stack:t)+("\n"+n.join("\n")).replace(y,"")}function R(t,e){return t(e)}function B(t,e,n){var r=0,o=t._c;if(3===t._s)for(t._s=e,t._v=n,1===e&&(u&&m(n,l)&&(n.longStack=M(n,t)),P(t));r<o;)T(t,t[r++]);return t}function H(t,e){if(e===t&&e)return B(t,1,_("Chaining cycle detected for promise")),t;if(null!==e&&(v(e)||b(e))){var n=E(I)(e);if(n===f)return B(t,1,n.e),t;v(n)?(u&&x(e)&&(t._next=e),x(e)?k(t,e,n):d.nextTick((function(){k(t,e,n)}))):B(t,2,e)}else B(t,2,e);return t}function I(t){return t.then}function k(t,e,n){var r=E(n,e)((function(n){e&&(e=null,H(t,n))}),(function(n){e&&(e=null,B(t,1,n))}));r===f&&e&&(B(t,1,r.e),e=null)}o.Promise=d}(),"Window"in t||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(e){e.constructor?e.Window=e.constructor:(e.Window=e.constructor=new Function("return function Window() {}")()).prototype=t}(t),function(t){if(!("Event"in t))return!1;try{return new Event("click"),!0}catch(t){return!1}}(t)||function(){var t={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};if("undefined"!=typeof document&&"undefined"!=typeof window){var e=window.Event&&window.Event.prototype||null;n.NONE=0,n.CAPTURING_PHASE=1,n.AT_TARGET=2,n.BUBBLING_PHASE=3,window.Event=Window.prototype.Event=n,e&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:e}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var e=this,n=arguments[0],r=arguments[1];if(e===window&&n in t)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");e._events||(e._events={}),e._events[n]||(e._events[n]=function(t){var n,r=e._events[t.type].list,o=r.slice(),i=-1,c=o.length;for(t.preventDefault=function(){!1!==t.cancelable&&(t.returnValue=!1)},t.stopPropagation=function(){t.cancelBubble=!0},t.stopImmediatePropagation=function(){t.cancelBubble=!0,t.cancelImmediate=!0},t.currentTarget=e,t.relatedTarget=t.fromElement||null,t.target=t.target||t.srcElement||e,t.timeStamp=(new Date).getTime(),t.clientX&&(t.pageX=t.clientX+document.documentElement.scrollLeft,t.pageY=t.clientY+document.documentElement.scrollTop);++i<c&&!t.cancelImmediate;)i in o&&(n=o[i],r.includes(n)&&"function"==typeof n&&n.call(e,t))},e._events[n].list=[],e.attachEvent&&e.attachEvent("on"+n,e._events[n])),e._events[n].list.push(r)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var t,e=this,n=arguments[0],r=arguments[1];e._events&&e._events[n]&&e._events[n].list&&-1!==(t=e._events[n].list.indexOf(r))&&(e._events[n].list.splice(t,1),e._events[n].list.length||(e.detachEvent&&e.detachEvent("on"+n,e._events[n]),delete e._events[n]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(t){if(!arguments.length)throw new Error("Not enough arguments");if(!t||"string"!=typeof t.type)throw new Error("DOM Events Exception 0");var e=this,n=t.type;try{if(!t.bubbles){t.cancelBubble=!0;var r=function(t){t.cancelBubble=!0,(e||window).detachEvent("on"+n,r)};this.attachEvent("on"+n,r)}this.fireEvent("on"+n,t)}catch(r){t.target=e;do{t.currentTarget=e,"_events"in e&&"function"==typeof e._events[n]&&e._events[n].call(e,t),"function"==typeof e["on"+n]&&e["on"+n].call(e,t),e=9===e.nodeType?e.parentWindow:e.parentNode}while(e&&!t.cancelBubble)}return!0},document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&document.dispatchEvent(new n("DOMContentLoaded",{bubbles:!0}))})))}function n(t,e){if(!t)throw new Error("Not enough arguments");var n;if("createEvent"in document){n=document.createEvent("Event");var r=!(!e||void 0===e.bubbles)&&e.bubbles,o=!(!e||void 0===e.cancelable)&&e.cancelable;return n.initEvent(t,r,o),n}return(n=document.createEventObject()).type=t,n.bubbles=!(!e||void 0===e.bubbles)&&e.bubbles,n.cancelable=!(!e||void 0===e.cancelable)&&e.cancelable,n}}(),"XMLHttpRequest"in t&&"prototype"in t.XMLHttpRequest&&"addEventListener"in t.XMLHttpRequest.prototype||function(t,e){t.XMLHttpRequest=function(){var t=this,n=t._request=e?new e:new ActiveXObject("MSXML2.XMLHTTP.3.0");n.onreadystatechange=function(){t.readyState=n.readyState;var e=4===t.readyState;t.response=t.responseText=e?n.responseText:null,t.status=e?n.status:null,t.statusText=e?n.statusText:null,t.dispatchEvent(new Event("readystatechange")),e&&t.dispatchEvent(new Event("load"))},"onerror"in n&&(n.onerror=function(){t.dispatchEvent(new Event("error"))})},t.XMLHttpRequest.UNSENT=0,t.XMLHttpRequest.OPENED=1,t.XMLHttpRequest.HEADERS_RECEIVED=2,t.XMLHttpRequest.LOADING=3,t.XMLHttpRequest.DONE=4;var n=t.XMLHttpRequest.prototype;n.addEventListener=t.addEventListener,n.removeEventListener=t.removeEventListener,n.dispatchEvent=t.dispatchEvent,n.abort=function(){return this._request()},n.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders()},n.getResponseHeader=function(t){return this._request.getResponseHeader(t)},n.open=function(t,e){this._request.open(t,e,arguments[2],arguments[3],arguments[4])},n.overrideMimeType=function(t){this._request.overrideMimeType(t)},n.send=function(){this._request.send(0 in arguments?arguments[0]:null)},n.setRequestHeader=function(t,e){this._request.setRequestHeader(t,e)}}(t,t.XMLHttpRequest),"fetch"in t||function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.WHATWGFetch={})}(this,(function(e){"use strict";var n="URLSearchParams"in t,r="Symbol"in t&&"iterator"in Symbol,o="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in t,c="ArrayBuffer"in t;if(c)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(t){return t&&a.indexOf(Object.prototype.toString.call(t))>-1};function s(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function l(t){return"string"!=typeof t&&(t=String(t)),t}function f(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r&&(e[Symbol.iterator]=function(){return e}),e}function p(t){this.map={},t instanceof p?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function y(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function d(t){return new Promise((function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function h(t){var e=new FileReader,n=d(e);return e.readAsArrayBuffer(t),n}function b(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:o&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():c&&o&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=b(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c&&(ArrayBuffer.prototype.isPrototypeOf(t)||u(t))?this._bodyArrayBuffer=b(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var t=y(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?y(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var t,e,n,r=y(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,n=d(e),e.readAsText(t),n;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}p.prototype.append=function(t,e){t=s(t),e=l(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},p.prototype.delete=function(t){delete this.map[s(t)]},p.prototype.get=function(t){return t=s(t),this.has(t)?this.map[t]:null},p.prototype.has=function(t){return this.map.hasOwnProperty(s(t))},p.prototype.set=function(t,e){this.map[s(t)]=l(e)},p.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},p.prototype.keys=function(){var t=[];return this.forEach((function(e,n){t.push(n)})),f(t)},p.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),f(t)},p.prototype.entries=function(){var t=[];return this.forEach((function(e,n){t.push([n,e])})),f(t)},r&&(p.prototype[Symbol.iterator]=p.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function w(t,e){var n,r,o=(e=e||{}).body;if(t instanceof w){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new p(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new p(e.headers)),this.method=(n=e.method||this.method||"GET",r=n.toUpperCase(),m.indexOf(r)>-1?r:n),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function g(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}})),e}function E(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new p(e.headers),this.url=e.url||"",this._initBody(t)}w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},v.call(w.prototype),v.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new p(this.headers),url:this.url})},E.error=function(){var t=new E(null,{status:0,statusText:""});return t.type="error",t};var j=[301,302,303,307,308];E.redirect=function(t,e){if(-1===j.indexOf(e))throw new RangeError("Invalid status code");return new E(null,{status:e,headers:{location:t}})},e.DOMException=t.DOMException;try{new e.DOMException}catch(t){e.DOMException=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function O(t,n){return new Promise((function(r,i){var c=new w(t,n);if(c.signal&&c.signal.aborted)return i(new e.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function u(){a.abort()}a.onload=function(){var t,e,n={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new p,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}})),e)};n.url="responseURL"in a?a.responseURL:n.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;r(new E(o,n))},a.onerror=function(){i(new TypeError("Network request failed"))},a.ontimeout=function(){i(new TypeError("Network request failed"))},a.onabort=function(){i(new e.DOMException("Aborted","AbortError"))},a.open(c.method,c.url,!0),"include"===c.credentials?a.withCredentials=!0:"omit"===c.credentials&&(a.withCredentials=!1),"responseType"in a&&o&&(a.responseType="blob"),c.headers.forEach((function(t,e){a.setRequestHeader(e,t)})),c.signal&&(c.signal.addEventListener("abort",u),a.onreadystatechange=function(){4===a.readyState&&c.signal.removeEventListener("abort",u)}),a.send(void 0===c._bodyInit?null:c._bodyInit)}))}O.polyfill=!0,t.fetch=O,t.Headers=p,t.Request=w,t.Response=E,e.Headers=p,e.Request=w,e.Response=E,e.fetch=O,Object.defineProperty(e,"__esModule",{value:!0})}))}("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});