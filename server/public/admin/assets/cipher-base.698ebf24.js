import{s as _}from"./safe-buffer.d5a81f77.js";import{a as d}from"./rollup-plugin-node-polyfills.dd1027b1.js";import{r as c}from"./string_decoder.87146aa7.js";import{r as g}from"./inherits.66060a12.js";var n,a;function v(){if(a)return n;a=1;var s=_.exports.Buffer,h=d.Transform,f=c().StringDecoder,u=g();function i(t){h.call(this),this.hashMode=typeof t=="string",this.hashMode?this[t]=this._finalOrDigest:this.final=this._finalOrDigest,this._final&&(this.__final=this._final,this._final=null),this._decoder=null,this._encoding=null}return u(i,h),i.prototype.update=function(t,r,o){typeof t=="string"&&(t=s.from(t,r));var e=this._update(t);return this.hashMode?this:(o&&(e=this._toString(e,o)),e)},i.prototype.setAutoPadding=function(){},i.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")},i.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")},i.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")},i.prototype._transform=function(t,r,o){var e;try{this.hashMode?this._update(t):this.push(this._update(t))}catch(p){e=p}finally{o(e)}},i.prototype._flush=function(t){var r;try{this.push(this.__final())}catch(o){r=o}t(r)},i.prototype._finalOrDigest=function(t){var r=this.__final()||s.alloc(0);return t&&(r=this._toString(r,t,!0)),r},i.prototype._toString=function(t,r,o){if(this._decoder||(this._decoder=new f(r),this._encoding=r),this._encoding!==r)throw new Error("can't switch encodings");var e=this._decoder.write(t);return o&&(e+=this._decoder.end()),e},n=i,n}export{v as r};
