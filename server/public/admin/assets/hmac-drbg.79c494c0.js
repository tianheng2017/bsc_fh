import{h as p}from"./hash.js.c7ed14af.js";import{u as m}from"./minimalistic-crypto-utils.9fe8a21e.js";import{m as c}from"./minimalistic-assert.2f00d150.js";var l=p,a=m,u=c;function r(s){if(!(this instanceof r))return new r(s);this.hash=s.hash,this.predResist=!!s.predResist,this.outLen=this.hash.outSize,this.minEntropy=s.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var t=a.toArray(s.entropy,s.entropyEnc||"hex"),e=a.toArray(s.nonce,s.nonceEnc||"hex"),i=a.toArray(s.pers,s.persEnc||"hex");u(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(t,e,i)}var g=r;r.prototype._init=function(t,e,i){var n=t.concat(e).concat(i);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var h=0;h<this.V.length;h++)this.K[h]=0,this.V[h]=1;this._update(n),this._reseed=1,this.reseedInterval=281474976710656};r.prototype._hmac=function(){return new l.hmac(this.hash,this.K)};r.prototype._update=function(t){var e=this._hmac().update(this.V).update([0]);t&&(e=e.update(t)),this.K=e.digest(),this.V=this._hmac().update(this.V).digest(),t&&(this.K=this._hmac().update(this.V).update([1]).update(t).digest(),this.V=this._hmac().update(this.V).digest())};r.prototype.reseed=function(t,e,i,n){typeof e!="string"&&(n=i,i=e,e=null),t=a.toArray(t,e),i=a.toArray(i,n),u(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(t.concat(i||[])),this._reseed=1};r.prototype.generate=function(t,e,i,n){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required");typeof e!="string"&&(n=i,i=e,e=null),i&&(i=a.toArray(i,n||"hex"),this._update(i));for(var h=[];h.length<t;)this.V=this._hmac().update(this.V).digest(),h=h.concat(this.V);var o=h.slice(0,t);return this._update(i),this._reseed++,a.encode(o,e)};export{g as h};
