import{t as c}from"./element-plus.2d443847.js";import{a as l}from"./vue-router.c0281831.js";import{d as u,r as d,G as _,o as s,c as v,a as i,T as e,K as f,L as B,S as g,u as h,R as y}from"./@vue.230e89ba.js";import{d as E}from"./index.a71cd9d1.js";import"./@vueuse.88988742.js";import"./dayjs.2133d750.js";import"./@ethereumjs.af3f5dff.js";import"./ethereumjs-util.dbf079cb.js";import"./buffer.b4004db0.js";import"./base64-js.ed86f7b6.js";import"./ieee754.fe4a9da6.js";import"./@ethersproject.5d8623a7.js";import"./hash.js.c7ed14af.js";import"./minimalistic-assert.2f00d150.js";import"./inherits.66060a12.js";import"./js-sha3.0fd6df36.js";import"./rlp.4a2a910e.js";import"./rollup-plugin-node-polyfills.dd1027b1.js";import"./process.627009b3.js";import"./string_decoder.87146aa7.js";import"./safe-buffer.d5a81f77.js";import"./ethereum-cryptography.1b681b54.js";import"./secp256k1.bfa26894.js";import"./elliptic.8f0e0a52.js";import"./bn.js.92292d6f.js";import"./minimalistic-crypto-utils.9fe8a21e.js";import"./brorand.f18a1e1e.js";import"./hmac-drbg.79c494c0.js";import"./randombytes.926bd932.js";import"./keccak.c6d83d20.js";import"./readable-stream.5bcfe07c.js";import"./util-deprecate.e6516745.js";import"./create-hash.0f02e375.js";import"./md5.js.24480850.js";import"./hash-base.b9b8d2fc.js";import"./ripemd160.b7ffce25.js";import"./sha.js.28d4c0c4.js";import"./cipher-base.698ebf24.js";import"./crc-32.e5e20fdb.js";import"./@element-plus.da5c63ac.js";import"./lodash-es.29c53eac.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.6195a15c.js";import"./axios.f8ca758d.js";import"./pinia.1d1aade0.js";import"./vue-demi.bfae2336.js";import"./css-color-function.7e799b03.js";import"./color.e43c8b30.js";import"./clone.50df6560.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./ms.a9ae1d6d.js";import"./nprogress.998a2723.js";import"./echarts.5e2dc550.js";import"./zrender.510214c4.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b3d01323.js";const x={class:"error"},k={class:"error-code"},w={class:"lg lighter mt-7 mb-7"},C=u({__name:"error",props:{code:String,title:String,showBtn:{type:Boolean,default:!0}},setup(t){const a=t;let o=null;const r=d(5),m=l();return a.showBtn&&(o=setInterval(()=>{r.value===0?(clearInterval(o),m.go(-1)):r.value--},1e3)),_(()=>{o&&clearInterval(o)}),(D,p)=>{const n=c;return s(),v("div",x,[i("div",null,[i("div",k,e(t.code),1),i("div",w,e(t.title),1),t.showBtn?(s(),f(n,{key:0,type:"primary",onClick:p[0]||(p[0]=I=>h(m).go(-1))},{default:B(()=>[g(e(r.value)+" \u79D2\u540E\u8FD4\u56DE\u4E0A\u4E00\u9875 ",1)]),_:1})):y("",!0)])])}}});const Gt=E(C,[["__scopeId","data-v-d05c4257"]]);export{Gt as default};