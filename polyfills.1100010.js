/*! For detailed credits and licence information see https://github.com/financial-times/polyfill-library */
!function(t,e){function r(t){if(1/t==-1/0&&(t=0),t>Math.pow(2,32)-1)throw new RangeError("Invalid array length");var e=[];return e.length=t,e}function n(t,e){var r=arguments.length>2?arguments[2]:[];if(!1===c(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(e,r)}function o(t,e){return t[e]}function i(t,e){return e in t}function c(t){return"function"==typeof t}function l(t){if(null===t||t===e)throw TypeError(Object.prototype.toString.call(t)+" is not coercible to Object.");return t}function a(t){return Boolean(t)}function u(t){var e=Number(t);return isNaN(e)?0:1/e==1/0||1/e==-1/0||e===1/0||e===-1/0?e:(e<0?-1:1)*Math.floor(Math.abs(e))}function p(t){var e=u(t);return e<=0?0:Math.min(e,Math.pow(2,53)-1)}function f(t){if(null===t||t===e)throw TypeError();return Object(t)}function y(t,r){var n,o=(n=r,f(t)[n]);if(null===o||o===e)return e;if(!1===c(o))throw new TypeError("Method not callable: "+r);return o}function b(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in t&&(e instanceof t.Symbol||e.constructor===t.Symbol)?"symbol":"object"}}function s(t){return"object"===b(t)&&("function"==typeof t&&!!t.prototype)}function h(r){if("object"!==b(r))return!1;var n="Symbol"in t&&"match"in t.Symbol?o(r,t.Symbol.match):e;if(n!==e)return a(n);try{var i=r.lastIndex;return r.lastIndex=0,RegExp.prototype.exec.call(r),!0}catch(t){}finally{r.lastIndex=i}return!1}function w(r){var i=arguments.length>1?arguments[1]:e;if("object"===b(r)){if(arguments.length<2)var l="default";else i===String?l="string":i===Number&&(l="number");var a="function"==typeof t.Symbol&&"symbol"==typeof t.Symbol.toPrimitive?y(r,t.Symbol.toPrimitive):e;if(a!==e){var u=n(a,r,[l]);if("object"!==b(u))return u;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===l&&(l="number"),function(t,e){if("string"===e)var r=["toString","valueOf"];else r=["valueOf","toString"];for(var i=0;i<r.length;++i){var l=o(t,r[i]);if(c(l)){var a=n(l,t);if("object"!==b(a))return a}}throw new TypeError("Cannot convert to primitive.")}(r,l)}return r}function g(t){switch(b(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return g(w(t,String));default:return String(t)}}var d,j,v,O,m,S,E;function P(t,e,r){var n=function(t,e,r){var n={value:r,writable:!0,enumerable:!0,configurable:!0};try{return Object.defineProperty(t,e,n),!0}catch(t){return!1}}(t,e,r);if(!n)throw new TypeError("Cannot assign value `"+Object.prototype.toString.call(r)+"` to property `"+Object.prototype.toString.call(e)+"` on object `"+Object.prototype.toString.call(t)+"`");return n}function _(t,e,r){var n={value:r,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(t,e,n)}function T(t,e){var r=arguments[2]||{},n=function(t,e){var r=o(t,"prototype");return"object"!==b(r)&&(r=e),r}(t,e),i=Object.create(n);for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&Object.defineProperty(i,c,{configurable:!0,enumerable:!1,writable:!0,value:r[c]});return i}function $(i,c){var l;if(0===c&&1/c==-1/0&&(c=0),!1===(l=i,"[object Array]"===Object.prototype.toString.call(l)))return r(c);var a=o(i,"constructor");if("object"===b(a)&&null===(a="Symbol"in t&&"species"in t.Symbol?o(a,t.Symbol.species):e)&&(a=e),a===e)return r(c);if(!s(a))throw new TypeError("C must be a constructor");return function(t){var e=arguments.length>2?arguments[2]:t,r=arguments.length>1?arguments[1]:[];if(!s(t))throw new TypeError("F must be a constructor.");if(!s(e))throw new TypeError("newTarget must be a constructor.");return e===t?new(Function.prototype.bind.apply(t,[null].concat(r))):n(t,T(e,Object.prototype),r)}(a,[c])}"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(d=Object.defineProperty,j=Object.prototype.hasOwnProperty.call(Object.prototype,"__defineGetter__"),v="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,e,r){if(d&&(t===window||t===document||t===Element.prototype||t instanceof Element))return d(t,e,r);if(null===t||!(t instanceof Object||"object"==typeof t))throw new TypeError("Object.defineProperty called on non-object");if(!(r instanceof Object))throw new TypeError("Property description must be an object");var n=String(e),o="value"in r||"writable"in r,i="get"in r&&typeof r.get,c="set"in r&&typeof r.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!j)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(v);Object.__defineGetter__.call(t,n,r.get)}else t[n]=r.value;if(c){if("function"!==c)throw new TypeError("Setter must be a function");if(!j)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(v);Object.__defineSetter__.call(t,n,r.set)}return"value"in r&&(t[n]=r.value),t}),"findIndex"in Array.prototype||_(Array.prototype,"findIndex",(function(t){var r=f(this),i=p(o(r,"length"));if(!1===c(t))throw new TypeError(t+" is not a function");for(var l=arguments.length>1?arguments[1]:e,u=0;u<i;){var y=g(u),b=o(r,y),s=a(n(t,l,[b,u,r]));if(s)return u;u+=1}return-1})),"bind"in Function.prototype||_(Function.prototype,"bind",(function(t){var e=Array,r=Object,n=e.prototype,o=function(){},i=n.slice,l=n.concat,a=n.push,u=Math.max,p=this;if(!c(p))throw new TypeError("Function.prototype.bind called on incompatible "+p);for(var f,y=i.call(arguments,1),b=function(){if(this instanceof f){var e=p.apply(this,l.call(y,i.call(arguments)));return r(e)===e?e:this}return p.apply(t,l.call(y,i.call(arguments)))},s=u(0,p.length-y.length),h=[],w=0;w<s;w++)a.call(h,"$"+w);return f=Function("binder","return function ("+h.join(",")+"){ return binder.apply(this, arguments); }")(b),p.prototype&&(o.prototype=p.prototype,f.prototype=new o,o.prototype=null),f})),"getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{return"3"===Object.getOwnPropertyDescriptor("13.7",1).value}catch(t){return!1}}()||(O=Object.getOwnPropertyDescriptor,m=function(){try{return 1===Object.defineProperty(document.createElement("div"),"one",{get:function(){return 1}}).one}catch(t){return!1}},S={}.toString,E="".split,_(Object,"getOwnPropertyDescriptor",(function(t,e){var r=f(t);r=("string"===b(r)||r instanceof String)&&"[object String]"==S.call(t)?E.call(t,""):Object(t);var n,o,i=function(t){var e=w(t,String);return"symbol"===b(e)?e:g(e)}(e);if(m)try{return O(r,i)}catch(t){}if(n=r,o=i,Object.prototype.hasOwnProperty.call(n,o))return{enumerable:!0,configurable:!0,writable:!0,value:r[i]}}))),"getPrototypeOf"in Object||_(Object,"getPrototypeOf",(function(t){if(t!==Object(t))throw new TypeError("Object.getPrototypeOf called on non-object");var e=t.__proto__;return e||null===e?e:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Object.prototype:null})),"keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),!0}catch(t){return!1}}()||_(Object,"keys",function(){"use strict";var t=Object.prototype.hasOwnProperty,r=Object.prototype.toString,n=Object.prototype.propertyIsEnumerable,o=!n.call({toString:null},"toString"),i=n.call((function(){}),"prototype"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],l=function(t){var e=t.constructor;return e&&e.prototype===t},a={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},u=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!a["$"+e]&&t.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{l(window[e])}catch(t){return!0}}catch(t){return!0}return!1}();return function(n){var a,p,f,y="[object Function]"===r.call(n),b=(a=n,p=r.call(a),(f="[object Arguments]"===p)||(f="[object Array]"!==p&&null!==a&&"object"==typeof a&&"number"==typeof a.length&&a.length>=0&&"[object Function]"===r.call(a.callee)),f),s="[object String]"===r.call(n),h=[];if(n===e||null===n)throw new TypeError("Cannot convert undefined or null to object");var w=i&&y;if(s&&n.length>0&&!t.call(n,0))for(var g=0;g<n.length;++g)h.push(String(g));if(b&&n.length>0)for(var d=0;d<n.length;++d)h.push(String(d));else for(var j in n)w&&"prototype"===j||!t.call(n,j)||h.push(String(j));if(o)for(var v=function(t){if("undefined"==typeof window||!u)return l(t);try{return l(t)}catch(t){return!1}}(n),O=0;O<c.length;++O)v&&"constructor"===c[O]||!t.call(n,c[O])||h.push(c[O]);return h}}()),"defineProperties"in Object||_(Object,"defineProperties",(function(t,r){if("object"!==b(t))throw new TypeError("Object.defineProperties called on non-object");for(var n=f(r),i=Object.keys(n),c=[],l=0;l<i.length;l++){var a=i[l],u=Object.getOwnPropertyDescriptor(n,a);if(u!==e&&u.enumerable){var p=o(n,a);c.push([a,p])}}for(var y=0;y<c.length;y++){var s=c[y][0];p=c[y][1],Object.defineProperty(t,s,p)}return t})),"create"in Object||function(){if(!({__proto__:null}instanceof Object))var t=function(){return{__proto__:null}};else t=function(){var e=document.createElement("iframe");e.style.display="none";var r=document.body||document.documentElement;r.appendChild(e),e.src="javascript:";var n=e.contentWindow.Object.prototype;r.removeChild(e),e=null,delete n.constructor,delete n.hasOwnProperty,delete n.propertyIsEnumerable,delete n.isPrototypeOf,delete n.toLocaleString,delete n.toString,delete n.valueOf;var o=function(){};return o.prototype=n,t=function(){return new o},new o};function e(){}_(Object,"create",(function(r,n){if("object"!==b(r)&&"null"!==b(r))throw new TypeError("Object prototype may only be an Object or null");if("null"===b(r))var o=t();else e.prototype=r,(o=new e).__proto__=r,o.constructor.prototype=r,o.__proto__=r;return 1 in arguments?Object.defineProperties(o,n):o}))}(),"filter"in Array.prototype||_(Array.prototype,"filter",(function(t){var r=f(this),l=p(o(r,"length"));if(!1===c(t))throw new TypeError(t+" is not a function");for(var u=arguments.length>1?arguments[1]:e,y=$(r,0),b=0,s=0;b<l;){var h=g(b),w=i(r,h);if(w){var d=o(r,h),j=a(n(t,u,[d,b,r]));j&&(P(y,g(s),d),s+=1)}b+=1}return y})),"includes"in String.prototype||_(String.prototype,"includes",(function(t){"use strict";var r=arguments.length>1?arguments[1]:e,n=l(this),o=g(n),i=h(t);if(i)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");var c=g(t),a=u(r),p=o.length,f=Math.min(Math.max(a,0),p);return-1!==String.prototype.indexOf.call(o,c,f)}))}("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});