import{r as U}from"./inherits.66060a12.js";import{s as k}from"./safe-buffer.d5a81f77.js";var P={exports:{}},Q,e0;function R(){if(e0)return Q;e0=1;var o=k.exports.Buffer;function d(n,b){this._block=o.alloc(n),this._finalSize=b,this._blockSize=n,this._len=0}return d.prototype.update=function(n,b){typeof n=="string"&&(b=b||"utf8",n=o.from(n,b));for(var l=this._block,i=this._blockSize,c=n.length,u=this._len,w=0;w<c;){for(var _=u%i,a=Math.min(c-w,i-_),f=0;f<a;f++)l[_+f]=n[w+f];u+=a,w+=a,u%i===0&&this._update(l)}return this._len+=c,this},d.prototype.digest=function(n){var b=this._len%this._blockSize;this._block[b]=128,this._block.fill(0,b+1),b>=this._finalSize&&(this._update(this._block),this._block.fill(0));var l=this._len*8;if(l<=4294967295)this._block.writeUInt32BE(l,this._blockSize-4);else{var i=(l&4294967295)>>>0,c=(l-i)/4294967296;this._block.writeUInt32BE(c,this._blockSize-8),this._block.writeUInt32BE(i,this._blockSize-4)}this._update(this._block);var u=this._hash();return n?u.toString(n):u},d.prototype._update=function(){throw new Error("_update must be implemented by subclass")},Q=d,Q}var V,s0;function y0(){if(s0)return V;s0=1;var o=U(),d=R(),n=k.exports.Buffer,b=[1518500249,1859775393,-1894007588,-899497514],l=new Array(80);function i(){this.init(),this._w=l,d.call(this,64,56)}o(i,d),i.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this};function c(_){return _<<5|_>>>27}function u(_){return _<<30|_>>>2}function w(_,a,f,r){return _===0?a&f|~a&r:_===2?a&f|a&r|f&r:a^f^r}return i.prototype._update=function(_){for(var a=this._w,f=this._a|0,r=this._b|0,x=this._c|0,e=this._d|0,h=this._e|0,t=0;t<16;++t)a[t]=_.readInt32BE(t*4);for(;t<80;++t)a[t]=a[t-3]^a[t-8]^a[t-14]^a[t-16];for(var s=0;s<80;++s){var v=~~(s/20),p=c(f)+w(v,r,x,e)+h+a[s]+b[v]|0;h=e,e=x,x=u(r),r=f,f=p}this._a=f+this._a|0,this._b=r+this._b|0,this._c=x+this._c|0,this._d=e+this._d|0,this._e=h+this._e|0},i.prototype._hash=function(){var _=n.allocUnsafe(20);return _.writeInt32BE(this._a|0,0),_.writeInt32BE(this._b|0,4),_.writeInt32BE(this._c|0,8),_.writeInt32BE(this._d|0,12),_.writeInt32BE(this._e|0,16),_},V=i,V}var X,f0;function D0(){if(f0)return X;f0=1;var o=U(),d=R(),n=k.exports.Buffer,b=[1518500249,1859775393,-1894007588,-899497514],l=new Array(80);function i(){this.init(),this._w=l,d.call(this,64,56)}o(i,d),i.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this};function c(a){return a<<1|a>>>31}function u(a){return a<<5|a>>>27}function w(a){return a<<30|a>>>2}function _(a,f,r,x){return a===0?f&r|~f&x:a===2?f&r|f&x|r&x:f^r^x}return i.prototype._update=function(a){for(var f=this._w,r=this._a|0,x=this._b|0,e=this._c|0,h=this._d|0,t=this._e|0,s=0;s<16;++s)f[s]=a.readInt32BE(s*4);for(;s<80;++s)f[s]=c(f[s-3]^f[s-8]^f[s-14]^f[s-16]);for(var v=0;v<80;++v){var p=~~(v/20),I=u(r)+_(p,x,e,h)+t+f[v]+b[p]|0;t=h,h=e,e=w(x),x=r,r=I}this._a=r+this._a|0,this._b=x+this._b|0,this._c=e+this._c|0,this._d=h+this._d|0,this._e=t+this._e|0},i.prototype._hash=function(){var a=n.allocUnsafe(20);return a.writeInt32BE(this._a|0,0),a.writeInt32BE(this._b|0,4),a.writeInt32BE(this._c|0,8),a.writeInt32BE(this._d|0,12),a.writeInt32BE(this._e|0,16),a},X=i,X}var Y,_0;function o0(){if(_0)return Y;_0=1;var o=U(),d=R(),n=k.exports.Buffer,b=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],l=new Array(64);function i(){this.init(),this._w=l,d.call(this,64,56)}o(i,d),i.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this};function c(r,x,e){return e^r&(x^e)}function u(r,x,e){return r&x|e&(r|x)}function w(r){return(r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10)}function _(r){return(r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7)}function a(r){return(r>>>7|r<<25)^(r>>>18|r<<14)^r>>>3}function f(r){return(r>>>17|r<<15)^(r>>>19|r<<13)^r>>>10}return i.prototype._update=function(r){for(var x=this._w,e=this._a|0,h=this._b|0,t=this._c|0,s=this._d|0,v=this._e|0,p=this._f|0,I=this._g|0,S=this._h|0,E=0;E<16;++E)x[E]=r.readInt32BE(E*4);for(;E<64;++E)x[E]=f(x[E-2])+x[E-7]+a(x[E-15])+x[E-16]|0;for(var F=0;F<64;++F){var H=S+_(v)+c(v,p,I)+b[F]+x[F]|0,g=w(e)+u(e,h,t)|0;S=I,I=p,p=v,v=s+H|0,s=t,t=h,h=e,e=H+g|0}this._a=e+this._a|0,this._b=h+this._b|0,this._c=t+this._c|0,this._d=s+this._d|0,this._e=v+this._e|0,this._f=p+this._f|0,this._g=I+this._g|0,this._h=S+this._h|0},i.prototype._hash=function(){var r=n.allocUnsafe(32);return r.writeInt32BE(this._a,0),r.writeInt32BE(this._b,4),r.writeInt32BE(this._c,8),r.writeInt32BE(this._d,12),r.writeInt32BE(this._e,16),r.writeInt32BE(this._f,20),r.writeInt32BE(this._g,24),r.writeInt32BE(this._h,28),r},Y=i,Y}var Z,x0;function q0(){if(x0)return Z;x0=1;var o=U(),d=o0(),n=R(),b=k.exports.Buffer,l=new Array(64);function i(){this.init(),this._w=l,n.call(this,64,56)}return o(i,d),i.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},i.prototype._hash=function(){var c=b.allocUnsafe(28);return c.writeInt32BE(this._a,0),c.writeInt32BE(this._b,4),c.writeInt32BE(this._c,8),c.writeInt32BE(this._d,12),c.writeInt32BE(this._e,16),c.writeInt32BE(this._f,20),c.writeInt32BE(this._g,24),c},Z=i,Z}var $,n0;function u0(){if(n0)return $;n0=1;var o=U(),d=R(),n=k.exports.Buffer,b=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],l=new Array(160);function i(){this.init(),this._w=l,d.call(this,128,112)}o(i,d),i.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this};function c(h,t,s){return s^h&(t^s)}function u(h,t,s){return h&t|s&(h|t)}function w(h,t){return(h>>>28|t<<4)^(t>>>2|h<<30)^(t>>>7|h<<25)}function _(h,t){return(h>>>14|t<<18)^(h>>>18|t<<14)^(t>>>9|h<<23)}function a(h,t){return(h>>>1|t<<31)^(h>>>8|t<<24)^h>>>7}function f(h,t){return(h>>>1|t<<31)^(h>>>8|t<<24)^(h>>>7|t<<25)}function r(h,t){return(h>>>19|t<<13)^(t>>>29|h<<3)^h>>>6}function x(h,t){return(h>>>19|t<<13)^(t>>>29|h<<3)^(h>>>6|t<<26)}function e(h,t){return h>>>0<t>>>0?1:0}return i.prototype._update=function(h){for(var t=this._w,s=this._ah|0,v=this._bh|0,p=this._ch|0,I=this._dh|0,S=this._eh|0,E=this._fh|0,F=this._gh|0,H=this._hh|0,g=this._al|0,z=this._bl|0,G=this._cl|0,K=this._dl|0,y=this._el|0,L=this._fl|0,J=this._gl|0,M=this._hl|0,B=0;B<32;B+=2)t[B]=h.readInt32BE(B*4),t[B+1]=h.readInt32BE(B*4+4);for(;B<160;B+=2){var N=t[B-30],O=t[B-15*2+1],d0=a(N,O),W=f(O,N);N=t[B-2*2],O=t[B-2*2+1];var v0=r(N,O),j=x(O,N),l0=t[B-7*2],B0=t[B-7*2+1],p0=t[B-16*2],t0=t[B-16*2+1],A=W+B0|0,q=d0+l0+e(A,W)|0;A=A+j|0,q=q+v0+e(A,j)|0,A=A+t0|0,q=q+p0+e(A,t0)|0,t[B]=q,t[B+1]=A}for(var m=0;m<160;m+=2){q=t[m],A=t[m+1];var E0=u(s,v,p),w0=u(g,z,G),C0=w(s,g),r0=w(g,s),A0=_(S,y),I0=_(y,S),S0=b[m],h0=b[m+1],g0=c(S,E,F),a0=c(y,L,J),C=M+I0|0,D=H+A0+e(C,M)|0;C=C+a0|0,D=D+g0+e(C,a0)|0,C=C+h0|0,D=D+S0+e(C,h0)|0,C=C+A|0,D=D+q+e(C,A)|0;var i0=r0+w0|0,F0=C0+E0+e(i0,r0)|0;H=F,M=J,F=E,J=L,E=S,L=y,y=K+C|0,S=I+D+e(y,K)|0,I=p,K=G,p=v,G=z,v=s,z=g,g=C+i0|0,s=D+F0+e(g,C)|0}this._al=this._al+g|0,this._bl=this._bl+z|0,this._cl=this._cl+G|0,this._dl=this._dl+K|0,this._el=this._el+y|0,this._fl=this._fl+L|0,this._gl=this._gl+J|0,this._hl=this._hl+M|0,this._ah=this._ah+s+e(this._al,g)|0,this._bh=this._bh+v+e(this._bl,z)|0,this._ch=this._ch+p+e(this._cl,G)|0,this._dh=this._dh+I+e(this._dl,K)|0,this._eh=this._eh+S+e(this._el,y)|0,this._fh=this._fh+E+e(this._fl,L)|0,this._gh=this._gh+F+e(this._gl,J)|0,this._hh=this._hh+H+e(this._hl,M)|0},i.prototype._hash=function(){var h=n.allocUnsafe(64);function t(s,v,p){h.writeInt32BE(s,p),h.writeInt32BE(v,p+4)}return t(this._ah,this._al,0),t(this._bh,this._bl,8),t(this._ch,this._cl,16),t(this._dh,this._dl,24),t(this._eh,this._el,32),t(this._fh,this._fl,40),t(this._gh,this._gl,48),t(this._hh,this._hl,56),h},$=i,$}var T,c0;function k0(){if(c0)return T;c0=1;var o=U(),d=u0(),n=R(),b=k.exports.Buffer,l=new Array(160);function i(){this.init(),this._w=l,n.call(this,128,112)}return o(i,d),i.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},i.prototype._hash=function(){var c=b.allocUnsafe(48);function u(w,_,a){c.writeInt32BE(w,a),c.writeInt32BE(_,a+4)}return u(this._ah,this._al,0),u(this._bh,this._bl,8),u(this._ch,this._cl,16),u(this._dh,this._dl,24),u(this._eh,this._el,32),u(this._fh,this._fl,40),c},T=i,T}var b0;function U0(){if(b0)return P.exports;b0=1;var o=P.exports=function(n){n=n.toLowerCase();var b=o[n];if(!b)throw new Error(n+" is not supported (we accept pull requests)");return new b};return o.sha=y0(),o.sha1=D0(),o.sha224=q0(),o.sha256=o0(),o.sha384=k0(),o.sha512=u0(),P.exports}export{U0 as r};
