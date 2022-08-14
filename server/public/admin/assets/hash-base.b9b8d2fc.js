import{s as c}from"./safe-buffer.d5a81f77.js";import{r as g}from"./readable-stream.5bcfe07c.js";import{r as b}from"./inherits.66060a12.js";var l,u;function k(){if(u)return l;u=1;var f=c.exports.Buffer,a=g().Transform,_=b();function p(t,r){if(!f.isBuffer(t)&&typeof t!="string")throw new TypeError(r+" must be a string or a buffer")}function i(t){a.call(this),this._block=f.allocUnsafe(t),this._blockSize=t,this._blockOffset=0,this._length=[0,0,0,0],this._finalized=!1}return _(i,a),i.prototype._transform=function(t,r,e){var s=null;try{this.update(t,r)}catch(h){s=h}e(s)},i.prototype._flush=function(t){var r=null;try{this.push(this.digest())}catch(e){r=e}t(r)},i.prototype.update=function(t,r){if(p(t,"Data"),this._finalized)throw new Error("Digest already called");f.isBuffer(t)||(t=f.from(t,r));for(var e=this._block,s=0;this._blockOffset+t.length-s>=this._blockSize;){for(var h=this._blockOffset;h<this._blockSize;)e[h++]=t[s++];this._update(),this._blockOffset=0}for(;s<t.length;)e[this._blockOffset++]=t[s++];for(var n=0,o=t.length*8;o>0;++n)this._length[n]+=o,o=this._length[n]/4294967296|0,o>0&&(this._length[n]-=4294967296*o);return this},i.prototype._update=function(){throw new Error("_update is not implemented")},i.prototype.digest=function(t){if(this._finalized)throw new Error("Digest already called");this._finalized=!0;var r=this._digest();t!==void 0&&(r=r.toString(t)),this._block.fill(0),this._blockOffset=0;for(var e=0;e<4;++e)this._length[e]=0;return r},i.prototype._digest=function(){throw new Error("_digest is not implemented")},l=i,l}export{k as r};
