import{e as m}from"./elliptic.8f0e0a52.js";const s={IMPOSSIBLE_CASE:"Impossible case. Please create issue.",TWEAK_ADD:"The tweak was out of range or the resulted private key is invalid",TWEAK_MUL:"The tweak was out of range or equal to zero",CONTEXT_RANDOMIZE_UNKNOW:"Unknow error on context randomization",SECKEY_INVALID:"Private Key is invalid",PUBKEY_PARSE:"Public Key could not be parsed",PUBKEY_SERIALIZE:"Public Key serialization error",PUBKEY_COMBINE:"The sum of the public keys is not valid",SIG_PARSE:"Signature could not be parsed",SIGN:"The nonce generation function failed, or the private key was invalid",RECOVER:"Public key could not be recover",ECDH:"Scalar was invalid (zero or overflow)"};function d(t,r){if(!t)throw new Error(r)}function o(t,r,e){if(d(r instanceof Uint8Array,`Expected ${t} to be an Uint8Array`),e!==void 0)if(Array.isArray(e)){const n=e.join(", "),i=`Expected ${t} to be an Uint8Array with length [${n}]`;d(e.includes(r.length),i)}else{const n=`Expected ${t} to be an Uint8Array with length ${e}`;d(r.length===e,n)}}function x(t){d(P(t)==="Boolean","Expected compressed to be a Boolean")}function y(t=e=>new Uint8Array(e),r){return typeof t=="function"&&(t=t(r)),o("output",t,r),t}function P(t){return Object.prototype.toString.call(t).slice(8,-1)}var I=t=>({contextRandomize(r){switch(d(r===null||r instanceof Uint8Array,"Expected seed to be an Uint8Array or null"),r!==null&&o("seed",r,32),t.contextRandomize(r)){case 1:throw new Error(s.CONTEXT_RANDOMIZE_UNKNOW)}},privateKeyVerify(r){return o("private key",r,32),t.privateKeyVerify(r)===0},privateKeyNegate(r){switch(o("private key",r,32),t.privateKeyNegate(r)){case 0:return r;case 1:throw new Error(s.IMPOSSIBLE_CASE)}},privateKeyTweakAdd(r,e){switch(o("private key",r,32),o("tweak",e,32),t.privateKeyTweakAdd(r,e)){case 0:return r;case 1:throw new Error(s.TWEAK_ADD)}},privateKeyTweakMul(r,e){switch(o("private key",r,32),o("tweak",e,32),t.privateKeyTweakMul(r,e)){case 0:return r;case 1:throw new Error(s.TWEAK_MUL)}},publicKeyVerify(r){return o("public key",r,[33,65]),t.publicKeyVerify(r)===0},publicKeyCreate(r,e=!0,n){switch(o("private key",r,32),x(e),n=y(n,e?33:65),t.publicKeyCreate(n,r)){case 0:return n;case 1:throw new Error(s.SECKEY_INVALID);case 2:throw new Error(s.PUBKEY_SERIALIZE)}},publicKeyConvert(r,e=!0,n){switch(o("public key",r,[33,65]),x(e),n=y(n,e?33:65),t.publicKeyConvert(n,r)){case 0:return n;case 1:throw new Error(s.PUBKEY_PARSE);case 2:throw new Error(s.PUBKEY_SERIALIZE)}},publicKeyNegate(r,e=!0,n){switch(o("public key",r,[33,65]),x(e),n=y(n,e?33:65),t.publicKeyNegate(n,r)){case 0:return n;case 1:throw new Error(s.PUBKEY_PARSE);case 2:throw new Error(s.IMPOSSIBLE_CASE);case 3:throw new Error(s.PUBKEY_SERIALIZE)}},publicKeyCombine(r,e=!0,n){d(Array.isArray(r),"Expected public keys to be an Array"),d(r.length>0,"Expected public keys array will have more than zero items");for(const i of r)o("public key",i,[33,65]);switch(x(e),n=y(n,e?33:65),t.publicKeyCombine(n,r)){case 0:return n;case 1:throw new Error(s.PUBKEY_PARSE);case 2:throw new Error(s.PUBKEY_COMBINE);case 3:throw new Error(s.PUBKEY_SERIALIZE)}},publicKeyTweakAdd(r,e,n=!0,i){switch(o("public key",r,[33,65]),o("tweak",e,32),x(n),i=y(i,n?33:65),t.publicKeyTweakAdd(i,r,e)){case 0:return i;case 1:throw new Error(s.PUBKEY_PARSE);case 2:throw new Error(s.TWEAK_ADD)}},publicKeyTweakMul(r,e,n=!0,i){switch(o("public key",r,[33,65]),o("tweak",e,32),x(n),i=y(i,n?33:65),t.publicKeyTweakMul(i,r,e)){case 0:return i;case 1:throw new Error(s.PUBKEY_PARSE);case 2:throw new Error(s.TWEAK_MUL)}},signatureNormalize(r){switch(o("signature",r,64),t.signatureNormalize(r)){case 0:return r;case 1:throw new Error(s.SIG_PARSE)}},signatureExport(r,e){o("signature",r,64),e=y(e,72);const n={output:e,outputlen:72};switch(t.signatureExport(n,r)){case 0:return e.slice(0,n.outputlen);case 1:throw new Error(s.SIG_PARSE);case 2:throw new Error(s.IMPOSSIBLE_CASE)}},signatureImport(r,e){switch(o("signature",r),e=y(e,64),t.signatureImport(e,r)){case 0:return e;case 1:throw new Error(s.SIG_PARSE);case 2:throw new Error(s.IMPOSSIBLE_CASE)}},ecdsaSign(r,e,n={},i){o("message",r,32),o("private key",e,32),d(P(n)==="Object","Expected options to be an Object"),n.data!==void 0&&o("options.data",n.data),n.noncefn!==void 0&&d(P(n.noncefn)==="Function","Expected options.noncefn to be a Function"),i=y(i,64);const a={signature:i,recid:null};switch(t.ecdsaSign(a,r,e,n.data,n.noncefn)){case 0:return a;case 1:throw new Error(s.SIGN);case 2:throw new Error(s.IMPOSSIBLE_CASE)}},ecdsaVerify(r,e,n){switch(o("signature",r,64),o("message",e,32),o("public key",n,[33,65]),t.ecdsaVerify(r,e,n)){case 0:return!0;case 3:return!1;case 1:throw new Error(s.SIG_PARSE);case 2:throw new Error(s.PUBKEY_PARSE)}},ecdsaRecover(r,e,n,i=!0,a){switch(o("signature",r,64),d(P(e)==="Number"&&e>=0&&e<=3,"Expected recovery id to be a Number within interval [0, 3]"),o("message",n,32),x(i),a=y(a,i?33:65),t.ecdsaRecover(a,r,e,n)){case 0:return a;case 1:throw new Error(s.SIG_PARSE);case 2:throw new Error(s.RECOVER);case 3:throw new Error(s.IMPOSSIBLE_CASE)}},ecdh(r,e,n={},i){switch(o("public key",r,[33,65]),o("private key",e,32),d(P(n)==="Object","Expected options to be an Object"),n.data!==void 0&&o("options.data",n.data),n.hashfn!==void 0?(d(P(n.hashfn)==="Function","Expected options.hashfn to be a Function"),n.xbuf!==void 0&&o("options.xbuf",n.xbuf,32),n.ybuf!==void 0&&o("options.ybuf",n.ybuf,32),o("output",i)):i=y(i,32),t.ecdh(i,r,e,n.data,n.hashfn,n.xbuf,n.ybuf)){case 0:return i;case 1:throw new Error(s.PUBKEY_PARSE);case 2:throw new Error(s.ECDH)}}});const v=m.ec,h=new v("secp256k1"),c=h.curve,u=c.n.constructor;function U(t,r){let e=new u(r);if(e.cmp(c.p)>=0)return null;e=e.toRed(c.red);let n=e.redSqr().redIMul(e).redIAdd(c.b).redSqrt();return t===3!==n.isOdd()&&(n=n.redNeg()),h.keyPair({pub:{x:e,y:n}})}function _(t,r,e){let n=new u(r),i=new u(e);if(n.cmp(c.p)>=0||i.cmp(c.p)>=0||(n=n.toRed(c.red),i=i.toRed(c.red),(t===6||t===7)&&i.isOdd()!==(t===7)))return null;const a=n.redSqr().redIMul(n);return i.redSqr().redISub(a.redIAdd(c.b)).isZero()?h.keyPair({pub:{x:n,y:i}}):null}function K(t){const r=t[0];switch(r){case 2:case 3:return t.length!==33?null:U(r,t.subarray(1,33));case 4:case 6:case 7:return t.length!==65?null:_(r,t.subarray(1,33),t.subarray(33,65));default:return null}}function p(t,r){const e=r.encode(null,t.length===33);for(let n=0;n<t.length;++n)t[n]=e[n]}var R={contextRandomize(){return 0},privateKeyVerify(t){const r=new u(t);return r.cmp(c.n)<0&&!r.isZero()?0:1},privateKeyNegate(t){const r=new u(t),e=c.n.sub(r).umod(c.n).toArrayLike(Uint8Array,"be",32);return t.set(e),0},privateKeyTweakAdd(t,r){const e=new u(r);if(e.cmp(c.n)>=0||(e.iadd(new u(t)),e.cmp(c.n)>=0&&e.isub(c.n),e.isZero()))return 1;const n=e.toArrayLike(Uint8Array,"be",32);return t.set(n),0},privateKeyTweakMul(t,r){let e=new u(r);if(e.cmp(c.n)>=0||e.isZero())return 1;e.imul(new u(t)),e.cmp(c.n)>=0&&(e=e.umod(c.n));const n=e.toArrayLike(Uint8Array,"be",32);return t.set(n),0},publicKeyVerify(t){return K(t)===null?1:0},publicKeyCreate(t,r){const e=new u(r);if(e.cmp(c.n)>=0||e.isZero())return 1;const n=h.keyFromPrivate(r).getPublic();return p(t,n),0},publicKeyConvert(t,r){const e=K(r);if(e===null)return 1;const n=e.getPublic();return p(t,n),0},publicKeyNegate(t,r){const e=K(r);if(e===null)return 1;const n=e.getPublic();return n.y=n.y.redNeg(),p(t,n),0},publicKeyCombine(t,r){const e=new Array(r.length);for(let i=0;i<r.length;++i)if(e[i]=K(r[i]),e[i]===null)return 1;let n=e[0].getPublic();for(let i=1;i<e.length;++i)n=n.add(e[i].pub);return n.isInfinity()?2:(p(t,n),0)},publicKeyTweakAdd(t,r,e){const n=K(r);if(n===null)return 1;if(e=new u(e),e.cmp(c.n)>=0)return 2;const i=n.getPublic().add(c.g.mul(e));return i.isInfinity()?2:(p(t,i),0)},publicKeyTweakMul(t,r,e){const n=K(r);if(n===null)return 1;if(e=new u(e),e.cmp(c.n)>=0||e.isZero())return 2;const i=n.getPublic().mul(e);return p(t,i),0},signatureNormalize(t){const r=new u(t.subarray(0,32)),e=new u(t.subarray(32,64));return r.cmp(c.n)>=0||e.cmp(c.n)>=0?1:(e.cmp(h.nh)===1&&t.set(c.n.sub(e).toArrayLike(Uint8Array,"be",32),32),0)},signatureExport(t,r){const e=r.subarray(0,32),n=r.subarray(32,64);if(new u(e).cmp(c.n)>=0||new u(n).cmp(c.n)>=0)return 1;const{output:i}=t;let a=i.subarray(4,4+33);a[0]=0,a.set(e,1);let l=33,w=0;for(;l>1&&a[w]===0&&!(a[w+1]&128);--l,++w);if(a=a.subarray(w),a[0]&128||l>1&&a[0]===0&&!(a[1]&128))return 1;let f=i.subarray(6+33,6+33+33);f[0]=0,f.set(n,1);let E=33,b=0;for(;E>1&&f[b]===0&&!(f[b+1]&128);--E,++b);return f=f.subarray(b),f[0]&128||E>1&&f[0]===0&&!(f[1]&128)?1:(t.outputlen=6+l+E,i[0]=48,i[1]=t.outputlen-2,i[2]=2,i[3]=a.length,i.set(a,4),i[4+l]=2,i[5+l]=f.length,i.set(f,6+l),0)},signatureImport(t,r){if(r.length<8||r.length>72||r[0]!==48||r[1]!==r.length-2||r[2]!==2)return 1;const e=r[3];if(e===0||5+e>=r.length||r[4+e]!==2)return 1;const n=r[5+e];if(n===0||6+e+n!==r.length||r[4]&128||e>1&&r[4]===0&&!(r[5]&128)||r[e+6]&128||n>1&&r[e+6]===0&&!(r[e+7]&128))return 1;let i=r.subarray(4,4+e);if(i.length===33&&i[0]===0&&(i=i.subarray(1)),i.length>32)return 1;let a=r.subarray(6+e);if(a.length===33&&a[0]===0&&(a=a.slice(1)),a.length>32)throw new Error("S length is too long");let l=new u(i);l.cmp(c.n)>=0&&(l=new u(0));let w=new u(r.subarray(6+e));return w.cmp(c.n)>=0&&(w=new u(0)),t.set(l.toArrayLike(Uint8Array,"be",32),0),t.set(w.toArrayLike(Uint8Array,"be",32),32),0},ecdsaSign(t,r,e,n,i){if(i){const w=i;i=f=>{const E=w(r,e,null,n,f);if(!(E instanceof Uint8Array&&E.length===32))throw new Error("This is the way");return new u(E)}}const a=new u(e);if(a.cmp(c.n)>=0||a.isZero())return 1;let l;try{l=h.sign(r,e,{canonical:!0,k:i,pers:n})}catch(w){return 1}return t.signature.set(l.r.toArrayLike(Uint8Array,"be",32),0),t.signature.set(l.s.toArrayLike(Uint8Array,"be",32),32),t.recid=l.recoveryParam,0},ecdsaVerify(t,r,e){const n={r:t.subarray(0,32),s:t.subarray(32,64)},i=new u(n.r),a=new u(n.s);if(i.cmp(c.n)>=0||a.cmp(c.n)>=0)return 1;if(a.cmp(h.nh)===1||i.isZero()||a.isZero())return 3;const l=K(e);if(l===null)return 2;const w=l.getPublic();return h.verify(r,n,w)?0:3},ecdsaRecover(t,r,e,n){const i={r:r.slice(0,32),s:r.slice(32,64)},a=new u(i.r),l=new u(i.s);if(a.cmp(c.n)>=0||l.cmp(c.n)>=0)return 1;if(a.isZero()||l.isZero())return 2;let w;try{w=h.recoverPubKey(n,i,e)}catch(f){return 2}return p(t,w),0},ecdh(t,r,e,n,i,a,l){const w=K(r);if(w===null)return 1;const f=new u(e);if(f.cmp(c.n)>=0||f.isZero())return 2;const E=w.getPublic().mul(f);if(i===void 0){const b=E.encode(null,!0),g=h.hash().update(b).digest();for(let S=0;S<32;++S)t[S]=g[S]}else{a||(a=new Uint8Array(32));const b=E.getX().toArray("be",32);for(let A=0;A<32;++A)a[A]=b[A];l||(l=new Uint8Array(32));const g=E.getY().toArray("be",32);for(let A=0;A<32;++A)l[A]=g[A];const S=i(a,l,n);if(!(S instanceof Uint8Array&&S.length===t.length))return 2;t.set(S)}return 0}},T=I(R);export{T as e};