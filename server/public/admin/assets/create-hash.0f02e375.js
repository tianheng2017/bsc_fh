import{r as m}from"./inherits.66060a12.js";import{r as f}from"./md5.js.24480850.js";import{r as v}from"./ripemd160.b7ffce25.js";import{r as c}from"./sha.js.28d4c0c4.js";import{r as q}from"./cipher-base.698ebf24.js";var a,u;function D(){if(u)return a;u=1;var i=m(),s=f(),d=v(),p=c(),o=q();function e(t){o.call(this,"digest"),this._hash=t}return i(e,o),e.prototype._update=function(t){this._hash.update(t)},e.prototype._final=function(){return this._hash.digest()},a=function(r){return r=r.toLowerCase(),r==="md5"?new s:r==="rmd160"||r==="ripemd160"?new d:new e(p(r))},a}var n,h;function b(){if(h)return n;h=1;var i=f();return n=function(s){return new i().update(s).digest()},n}export{b as a,D as r};
