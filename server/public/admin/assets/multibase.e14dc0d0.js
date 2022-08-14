import{b as w}from"./buffer.b4004db0.js";import{s as z}from"./base-x.4c919252.js";var x={exports:{}};class q{constructor(e,n,o,r){this.name=e,this.code=n,this.alphabet=r,o&&r&&(this.engine=o(r))}encode(e){return this.engine.encode(e)}decode(e){return this.engine.decode(e)}isImplemented(){return this.engine}}var U=q;const{Buffer:v}=w;var A=function(e){return{encode(n){return typeof n=="string"?v.from(n).toString("hex"):n.toString("hex")},decode(n){for(const o of n)if(e.indexOf(o)<0)throw new Error("invalid base16 character");return v.from(n,"hex")}}};function L(c,e){c=c.replace(new RegExp("=","g"),"");const n=c.length;let o=0,r=0,t=0;const a=new Uint8Array(n*5/8|0);for(let d=0;d<n;d++)r=r<<5|e.indexOf(c[d]),o+=5,o>=8&&(a[t++]=r>>>o-8&255,o-=8);return a.buffer}function y(c,e){const n=c.byteLength,o=new Uint8Array(c),r=e.indexOf("=")===e.length-1;r&&(e=e.substring(0,e.length-1));let t=0,a=0,d="";for(let u=0;u<n;u++)for(a=a<<8|o[u],t+=8;t>=5;)d+=e[a>>>t-5&31],t-=5;if(t>0&&(d+=e[a<<5-t&31]),r)for(;d.length%8!==0;)d+="=";return d}var M=function(e){return{encode(n){return y(typeof n=="string"?Uint8Array.from(n):n,e)},decode(n){for(const o of n)if(e.indexOf(o)<0)throw new Error("invalid base32 character");return L(n,e)}}};const{Buffer:j}=w;var R=function(e){const n=e.indexOf("=")>-1,o=e.indexOf("-")>-1&&e.indexOf("_")>-1;return{encode(r){let t="";typeof r=="string"?t=j.from(r).toString("base64"):t=r.toString("base64"),o&&(t=t.replace(/\+/g,"-").replace(/\//g,"_"));const a=t.indexOf("=");return a>0&&!n&&(t=t.substring(0,a)),t},decode(r){for(const t of r)if(e.indexOf(t)<0)throw new Error("invalid base64 character");return j.from(r,"base64")}}};const X=U,m=z,Z=A,g=M,h=R,B=[["base1","1","","1"],["base2","0",m,"01"],["base8","7",m,"01234567"],["base10","9",m,"0123456789"],["base16","f",Z,"0123456789abcdef"],["base32","b",g,"abcdefghijklmnopqrstuvwxyz234567"],["base32pad","c",g,"abcdefghijklmnopqrstuvwxyz234567="],["base32hex","v",g,"0123456789abcdefghijklmnopqrstuv"],["base32hexpad","t",g,"0123456789abcdefghijklmnopqrstuv="],["base32z","h",g,"ybndrfg8ejkmcpqxot1uwisza345h769"],["base58flickr","Z",m,"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"],["base58btc","z",m,"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"],["base64","m",h,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"],["base64pad","M",h,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],["base64url","u",h,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"],["base64urlpad","U",h,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_="]],E=B.reduce((c,e)=>(c[e[0]]=new X(e[0],e[1],e[2],e[3]),c),{}),D=B.reduce((c,e)=>(c[e[1]]=E[e[0]],c),{});var F={names:E,codes:D};(function(c,e){const{Buffer:n}=w,o=F;e=c.exports=r,e.encode=t,e.decode=a,e.isEncoded=d,e.names=Object.freeze(Object.keys(o.names)),e.codes=Object.freeze(Object.keys(o.codes));function r(s,i){if(!i)throw new Error("requires an encoded buffer");const f=b(s),l=n.from(f.code),k=f.name;return u(k,i),n.concat([l,i])}function t(s,i){const f=b(s),l=f.name;return r(l,n.from(f.encode(i)))}function a(s){n.isBuffer(s)&&(s=s.toString());const i=s.substring(0,1);s=s.substring(1,s.length),typeof s=="string"&&(s=n.from(s));const f=b(i);return n.from(f.decode(s.toString()))}function d(s){if(n.isBuffer(s)&&(s=s.toString()),Object.prototype.toString.call(s)!=="[object String]")return!1;const i=s.substring(0,1);try{return b(i).name}catch(f){return!1}}function u(s,i){b(s).decode(i.toString())}function b(s){let i;if(o.names[s])i=o.names[s];else if(o.codes[s])i=o.codes[s];else throw new Error("Unsupported encoding");if(!i.isImplemented())throw new Error("Base "+s+" is not implemented yet");return i}})(x,x.exports);export{x as s};
