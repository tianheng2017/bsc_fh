import{c as N}from"./@ethereumjs.af3f5dff.js";function ye(P){throw new Error('Could not dynamically require "'+P+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var pe={exports:{}};/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */(function(P,we){(function(k,g){P.exports=g()})(N,function(){function k(e){var t=typeof e;return e!==null&&(t==="object"||t==="function")}function g(e){return typeof e=="function"}var S=void 0;Array.isArray?S=Array.isArray:S=function(e){return Object.prototype.toString.call(e)==="[object Array]"};var D=S,l=0,j=void 0,C=void 0,c=function(t,r){h[l]=t,h[l+1]=r,l+=2,l===2&&(C?C(v):d())};function z(e){C=e}function B(e){c=e}var I=typeof window!="undefined"?window:void 0,L=I||{},G=L.MutationObserver||L.WebKitMutationObserver,J=typeof self=="undefined"&&typeof process!="undefined"&&{}.toString.call(process)==="[object process]",K=typeof Uint8ClampedArray!="undefined"&&typeof importScripts!="undefined"&&typeof MessageChannel!="undefined";function H(){return function(){return process.nextTick(v)}}function Q(){return typeof j!="undefined"?function(){j(v)}:x()}function X(){var e=0,t=new G(v),r=document.createTextNode("");return t.observe(r,{characterData:!0}),function(){r.data=e=++e%2}}function Z(){var e=new MessageChannel;return e.port1.onmessage=v,function(){return e.port2.postMessage(0)}}function x(){var e=setTimeout;return function(){return e(v,1)}}var h=new Array(1e3);function v(){for(var e=0;e<l;e+=2){var t=h[e],r=h[e+1];t(r),h[e]=void 0,h[e+1]=void 0}l=0}function $(){try{var e=Function("return this")().require("vertx");return j=e.runOnLoop||e.runOnContext,Q()}catch(t){return x()}}var d=void 0;J?d=H():G?d=X():K?d=Z():I===void 0&&typeof ye=="function"?d=$():d=x();function M(e,t){var r=this,n=new this.constructor(_);n[m]===void 0&&V(n);var i=r._state;if(i){var o=arguments[i-1];c(function(){return Y(i,n,o,r._result)})}else T(r,n,e,t);return n}function O(e){var t=this;if(e&&typeof e=="object"&&e.constructor===t)return e;var r=new t(_);return A(r,e),r}var m=Math.random().toString(36).substring(2);function _(){}var y=void 0,b=1,p=2;function ee(){return new TypeError("You cannot resolve a promise with itself")}function te(){return new TypeError("A promises callback cannot return that same promise.")}function re(e,t,r,n){try{e.call(t,r,n)}catch(i){return i}}function ne(e,t,r){c(function(n){var i=!1,o=re(r,t,function(s){i||(i=!0,t!==s?A(n,s):f(n,s))},function(s){i||(i=!0,u(n,s))},"Settle: "+(n._label||" unknown promise"));!i&&o&&(i=!0,u(n,o))},e)}function ie(e,t){t._state===b?f(e,t._result):t._state===p?u(e,t._result):T(t,void 0,function(r){return A(e,r)},function(r){return u(e,r)})}function W(e,t,r){t.constructor===e.constructor&&r===M&&t.constructor.resolve===O?ie(e,t):r===void 0?f(e,t):g(r)?ne(e,t,r):f(e,t)}function A(e,t){if(e===t)u(e,ee());else if(k(t)){var r=void 0;try{r=t.then}catch(n){u(e,n);return}W(e,t,r)}else f(e,t)}function oe(e){e._onerror&&e._onerror(e._result),F(e)}function f(e,t){e._state===y&&(e._result=t,e._state=b,e._subscribers.length!==0&&c(F,e))}function u(e,t){e._state===y&&(e._state=p,e._result=t,c(oe,e))}function T(e,t,r,n){var i=e._subscribers,o=i.length;e._onerror=null,i[o]=t,i[o+b]=r,i[o+p]=n,o===0&&e._state&&c(F,e)}function F(e){var t=e._subscribers,r=e._state;if(t.length!==0){for(var n=void 0,i=void 0,o=e._result,s=0;s<t.length;s+=3)n=t[s],i=t[s+r],n?Y(r,n,i,o):i(o);e._subscribers.length=0}}function Y(e,t,r,n){var i=g(r),o=void 0,s=void 0,w=!0;if(i){try{o=r(n)}catch(E){w=!1,s=E}if(t===o){u(t,te());return}}else o=n;t._state!==y||(i&&w?A(t,o):w===!1?u(t,s):e===b?f(t,o):e===p&&u(t,o))}function se(e,t){try{t(function(n){A(e,n)},function(n){u(e,n)})}catch(r){u(e,r)}}var U=0;function ue(){return U++}function V(e){e[m]=U++,e._state=void 0,e._result=void 0,e._subscribers=[]}function ae(){return new Error("Array Methods must be provided an Array")}var fe=function(){function e(t,r){this._instanceConstructor=t,this.promise=new t(_),this.promise[m]||V(this.promise),D(r)?(this.length=r.length,this._remaining=r.length,this._result=new Array(this.length),this.length===0?f(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),this._remaining===0&&f(this.promise,this._result))):u(this.promise,ae())}return e.prototype._enumerate=function(r){for(var n=0;this._state===y&&n<r.length;n++)this._eachEntry(r[n],n)},e.prototype._eachEntry=function(r,n){var i=this._instanceConstructor,o=i.resolve;if(o===O){var s=void 0,w=void 0,E=!1;try{s=r.then}catch(q){E=!0,w=q}if(s===M&&r._state!==y)this._settledAt(r._state,n,r._result);else if(typeof s!="function")this._remaining--,this._result[n]=r;else if(i===a){var R=new i(_);E?u(R,w):W(R,r,s),this._willSettleAt(R,n)}else this._willSettleAt(new i(function(q){return q(r)}),n)}else this._willSettleAt(o(r),n)},e.prototype._settledAt=function(r,n,i){var o=this.promise;o._state===y&&(this._remaining--,r===p?u(o,i):this._result[n]=i),this._remaining===0&&f(o,this._result)},e.prototype._willSettleAt=function(r,n){var i=this;T(r,void 0,function(o){return i._settledAt(b,n,o)},function(o){return i._settledAt(p,n,o)})},e}();function ce(e){return new fe(this,e).promise}function le(e){var t=this;return D(e)?new t(function(r,n){for(var i=e.length,o=0;o<i;o++)t.resolve(e[o]).then(r,n)}):new t(function(r,n){return n(new TypeError("You must pass an array to race."))})}function he(e){var t=this,r=new t(_);return u(r,e),r}function ve(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function de(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var a=function(){function e(t){this[m]=ue(),this._result=this._state=void 0,this._subscribers=[],_!==t&&(typeof t!="function"&&ve(),this instanceof e?se(this,t):de())}return e.prototype.catch=function(r){return this.then(null,r)},e.prototype.finally=function(r){var n=this,i=n.constructor;return g(r)?n.then(function(o){return i.resolve(r()).then(function(){return o})},function(o){return i.resolve(r()).then(function(){throw o})}):n.then(r,r)},e}();a.prototype.then=M,a.all=ce,a.race=le,a.resolve=O,a.reject=he,a._setScheduler=z,a._setAsap=B,a._asap=c;function _e(){var e=void 0;if(typeof N!="undefined")e=N;else if(typeof self!="undefined")e=self;else try{e=Function("return this")()}catch(n){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var r=null;try{r=Object.prototype.toString.call(t.resolve())}catch(n){}if(r==="[object Promise]"&&!t.cast)return}e.Promise=a}return a.polyfill=_e,a.Promise=a,a})})(pe);export{ye as c,pe as e};