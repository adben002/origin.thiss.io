/*! For detailed credits and licence information see https://github.com/financial-times/polyfill-library */
!function(t,e){function r(t){if(1/t==-1/0&&(t=0),t>Math.pow(2,32)-1)throw new RangeError("Invalid array length");var e=[];return e.length=t,e}function n(t,e){var r=arguments.length>2?arguments[2]:[];if(!1===c(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(e,r)}function o(t,e){return t[e]}function i(t,e){return e in t}function c(t){return"function"==typeof t}function l(t){return Boolean(t)}function a(t){var e=function(t){var e=Number(t);return isNaN(e)?0:1/e==1/0||1/e==-1/0||e===1/0||e===-1/0?e:(e<0?-1:1)*Math.floor(Math.abs(e))}(t);return e<=0?0:Math.min(e,Math.pow(2,53)-1)}function u(t){if(null==t)throw TypeError();return Object(t)}function f(t,e){var r,n=(r=e,u(t)[r]);if(null!=n){if(!1===c(n))throw new TypeError("Method not callable: "+e);return n}}function p(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in t&&(e instanceof t.Symbol||e.constructor===t.Symbol)?"symbol":"object"}}function y(t,e){var r=o(t,"prototype");return"object"!==p(r)&&(r=e),r}function b(t){return"object"===p(t)&&("function"==typeof t&&!!t.prototype)}function s(t,e){if("string"===e)var r=["toString","valueOf"];else r=["valueOf","toString"];for(var i=0;i<r.length;++i){var l=o(t,r[i]);if(c(l)){var a=n(l,t);if("object"!==p(a))return a}}throw new TypeError("Cannot convert to primitive.")}function w(e){var r=arguments.length>1?arguments[1]:void 0;if("object"===p(e)){if(arguments.length<2)var o="default";else r===String?o="string":r===Number&&(o="number");var i="function"==typeof t.Symbol&&"symbol"==typeof t.Symbol.toPrimitive?f(e,t.Symbol.toPrimitive):void 0;if(void 0!==i){var c=n(i,e,[o]);if("object"!==p(c))return c;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===o&&(o="number"),s(e,o)}return e}function v(t){switch(p(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return v(w(t,String));default:return String(t)}}var h,d,j,g,O,m,S;function E(t,e,r){var n=function(t,e,r){var n={value:r,writable:!0,enumerable:!0,configurable:!0};try{return Object.defineProperty(t,e,n),!0}catch(t){return!1}}(t,e,r);if(!n)throw new TypeError("Cannot assign value `"+Object.prototype.toString.call(r)+"` to property `"+Object.prototype.toString.call(e)+"` on object `"+Object.prototype.toString.call(t)+"`");return n}function P(t,e,r){var n={value:r,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(t,e,n)}function _(t,e){var r=arguments[2]||{},n=y(t,e),o=Object.create(n);for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&Object.defineProperty(o,i,{configurable:!0,enumerable:!1,writable:!0,value:r[i]});return o}function T(e,i){var c;if(0===i&&1/i==-1/0&&(i=0),!1===(c=e,"[object Array]"===Object.prototype.toString.call(c)))return r(i);var l=o(e,"constructor");if("object"===p(l)&&null===(l="Symbol"in t&&"species"in t.Symbol?o(l,t.Symbol.species):void 0)&&(l=void 0),void 0===l)return r(i);if(!b(l))throw new TypeError("C must be a constructor");return function(t){var e=arguments.length>2?arguments[2]:t,r=arguments.length>1?arguments[1]:[];if(!b(t))throw new TypeError("F must be a constructor.");if(!b(e))throw new TypeError("newTarget must be a constructor.");if(e===t)return new(Function.prototype.bind.apply(t,[null].concat(r)));var o=_(e,Object.prototype);return n(t,o,r)}(l,[i])}"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(h=Object.defineProperty,d=Object.prototype.hasOwnProperty.call(Object.prototype,"__defineGetter__"),j="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,e,r){if(h&&(t===window||t===document||t===Element.prototype||t instanceof Element))return h(t,e,r);if(null===t||!(t instanceof Object||"object"==typeof t))throw new TypeError("Object.defineProperty called on non-object");if(!(r instanceof Object))throw new TypeError("Property description must be an object");var n=String(e),o="value"in r||"writable"in r,i="get"in r&&typeof r.get,c="set"in r&&typeof r.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!d)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(j);Object.__defineGetter__.call(t,n,r.get)}else t[n]=r.value;if(c){if("function"!==c)throw new TypeError("Setter must be a function");if(!d)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(o)throw new TypeError(j);Object.__defineSetter__.call(t,n,r.set)}return"value"in r&&(t[n]=r.value),t}),"bind"in Function.prototype||P(Function.prototype,"bind",(function(t){var e=Array,r=Object,n=e.prototype,o=function(){},i=n.slice,l=n.concat,a=n.push,u=Math.max,f=this;if(!c(f))throw new TypeError("Function.prototype.bind called on incompatible "+f);for(var p,y=i.call(arguments,1),b=function(){if(this instanceof p){var e=f.apply(this,l.call(y,i.call(arguments)));return r(e)===e?e:this}return f.apply(t,l.call(y,i.call(arguments)))},s=u(0,f.length-y.length),w=[],v=0;v<s;v++)a.call(w,"$"+v);return p=Function("binder","return function ("+w.join(",")+"){ return binder.apply(this, arguments); }")(b),f.prototype&&(o.prototype=f.prototype,p.prototype=new o,o.prototype=null),p})),"getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{return"3"===Object.getOwnPropertyDescriptor("13.7",1).value}catch(t){return!1}}()||(g=Object.getOwnPropertyDescriptor,O=function(){try{return 1===Object.defineProperty(document.createElement("div"),"one",{get:function(){return 1}}).one}catch(t){return!1}},m={}.toString,S="".split,P(Object,"getOwnPropertyDescriptor",(function(t,e){var r=u(t);r=("string"===p(r)||r instanceof String)&&"[object String]"==m.call(t)?S.call(t,""):Object(t);var n,o,i=function(t){var e=w(t,String);return"symbol"===p(e)?e:v(e)}(e);if(O)try{return g(r,i)}catch(t){}if(n=r,o=i,Object.prototype.hasOwnProperty.call(n,o))return{enumerable:!0,configurable:!0,writable:!0,value:r[i]}}))),"getPrototypeOf"in Object||P(Object,"getPrototypeOf",(function(t){if(t!==Object(t))throw new TypeError("Object.getPrototypeOf called on non-object");var e=t.__proto__;return e||null===e?e:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Object.prototype:null})),"keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),!0}catch(t){return!1}}()||P(Object,"keys",function(){"use strict";var t=Object.prototype.hasOwnProperty,e=Object.prototype.toString,r=Object.prototype.propertyIsEnumerable,n=!r.call({toString:null},"toString"),o=r.call((function(){}),"prototype"),i=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],c=function(t){var e=t.constructor;return e&&e.prototype===t},l={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},a=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!l["$"+e]&&t.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{c(window[e])}catch(t){return!0}}catch(t){return!0}return!1}();return function(r){var l,u,f,p="[object Function]"===e.call(r),y=(l=r,u=e.call(l),(f="[object Arguments]"===u)||(f="[object Array]"!==u&&null!==l&&"object"==typeof l&&"number"==typeof l.length&&l.length>=0&&"[object Function]"===e.call(l.callee)),f),b="[object String]"===e.call(r),s=[];if(null==r)throw new TypeError("Cannot convert undefined or null to object");var w=o&&p;if(b&&r.length>0&&!t.call(r,0))for(var v=0;v<r.length;++v)s.push(String(v));if(y&&r.length>0)for(var h=0;h<r.length;++h)s.push(String(h));else for(var d in r)w&&"prototype"===d||!t.call(r,d)||s.push(String(d));if(n)for(var j=function(t){if("undefined"==typeof window||!a)return c(t);try{return c(t)}catch(t){return!1}}(r),g=0;g<i.length;++g)j&&"constructor"===i[g]||!t.call(r,i[g])||s.push(i[g]);return s}}()),"defineProperties"in Object||P(Object,"defineProperties",(function(t,e){if("object"!==p(t))throw new TypeError("Object.defineProperties called on non-object");for(var r=u(e),n=Object.keys(r),i=[],c=0;c<n.length;c++){var l=n[c],a=Object.getOwnPropertyDescriptor(r,l);if(void 0!==a&&a.enumerable){var f=o(r,l);i.push([l,f])}}for(var y=0;y<i.length;y++){var b=i[y][0];f=i[y][1],Object.defineProperty(t,b,f)}return t})),"create"in Object||function(){if(!({__proto__:null}instanceof Object))var t=function(){return{__proto__:null}};else t=function(){var e=document.createElement("iframe");e.style.display="none";var r=document.body||document.documentElement;r.appendChild(e),e.src="javascript:";var n=e.contentWindow.Object.prototype;r.removeChild(e),e=null,delete n.constructor,delete n.hasOwnProperty,delete n.propertyIsEnumerable,delete n.isPrototypeOf,delete n.toLocaleString,delete n.toString,delete n.valueOf;var o=function(){};return o.prototype=n,t=function(){return new o},new o};function e(){}P(Object,"create",(function(r,n){if("object"!==p(r)&&"null"!==p(r))throw new TypeError("Object prototype may only be an Object or null");if("null"===p(r))var o=t();else e.prototype=r,(o=new e).__proto__=r,o.constructor.prototype=r,o.__proto__=r;return 1 in arguments?Object.defineProperties(o,n):o}))}(),"filter"in Array.prototype||P(Array.prototype,"filter",(function(t){var e=u(this),r=a(o(e,"length"));if(!1===c(t))throw new TypeError(t+" is not a function");for(var f=arguments.length>1?arguments[1]:void 0,p=T(e,0),y=0,b=0;y<r;){var s=v(y),w=i(e,s);if(w){var h=o(e,s),d=l(n(t,f,[h,y,e]));d&&(E(p,v(b),h),b+=1)}y+=1}return p}))}("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});