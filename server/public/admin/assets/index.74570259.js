var B=(F,s,t)=>new Promise((n,l)=>{var a=o=>{try{m(t.next(o))}catch(e){l(e)}},u=o=>{try{m(t.throw(o))}catch(e){l(e)}},m=o=>o.done?n(o.value):Promise.resolve(o.value).then(a,u);m((t=t.apply(F,s)).next())});import{Z as v,D as w,F as A,X as D,t as k,I as y,M as x}from"./element-plus.2d443847.js";import{_ as L,s as T}from"./edit.vue_vue_type_script_setup_true_lang.dfe016b2.js";import{d as R,s as S,$,o as p,c as M,U as i,L as r,M as E,K as c,S as d,ad as N}from"./@vue.230e89ba.js";import"./@vueuse.88988742.js";import"./dayjs.2133d750.js";import"./@ethereumjs.af3f5dff.js";import"./ethereumjs-util.dbf079cb.js";import"./buffer.b4004db0.js";import"./base64-js.ed86f7b6.js";import"./ieee754.fe4a9da6.js";import"./@ethersproject.5d8623a7.js";import"./hash.js.c7ed14af.js";import"./minimalistic-assert.2f00d150.js";import"./inherits.66060a12.js";import"./js-sha3.0fd6df36.js";import"./rlp.4a2a910e.js";import"./rollup-plugin-node-polyfills.dd1027b1.js";import"./process.627009b3.js";import"./string_decoder.87146aa7.js";import"./safe-buffer.d5a81f77.js";import"./ethereum-cryptography.1b681b54.js";import"./secp256k1.bfa26894.js";import"./elliptic.8f0e0a52.js";import"./bn.js.92292d6f.js";import"./minimalistic-crypto-utils.9fe8a21e.js";import"./brorand.f18a1e1e.js";import"./hmac-drbg.79c494c0.js";import"./randombytes.926bd932.js";import"./keccak.c6d83d20.js";import"./readable-stream.5bcfe07c.js";import"./util-deprecate.e6516745.js";import"./create-hash.0f02e375.js";import"./md5.js.24480850.js";import"./hash-base.b9b8d2fc.js";import"./ripemd160.b7ffce25.js";import"./sha.js.28d4c0c4.js";import"./cipher-base.698ebf24.js";import"./crc-32.e5e20fdb.js";import"./@element-plus.da5c63ac.js";import"./lodash-es.29c53eac.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.a71cd9d1.js";import"./lodash.6195a15c.js";import"./axios.f8ca758d.js";import"./vue-router.c0281831.js";import"./pinia.1d1aade0.js";import"./vue-demi.bfae2336.js";import"./css-color-function.7e799b03.js";import"./color.e43c8b30.js";import"./clone.50df6560.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./ms.a9ae1d6d.js";import"./nprogress.998a2723.js";import"./echarts.5e2dc550.js";import"./zrender.510214c4.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b3d01323.js";import"./index.89655f46.js";const V={class:"storage"},z=d("\u5F00\u542F"),I=d("\u5173\u95ED"),K=d(" \u8BBE\u7F6E "),Yt=R({__name:"index",setup(F){const s=S(),t=$({loading:!1,lists:[]}),n=()=>B(this,null,function*(){try{t.loading=!0,t.lists=yield T(),t.loading=!1}catch(a){t.loading=!1}}),l=a=>{var u;(u=s.value)==null||u.open(a)};return n(),(a,u)=>{const m=v,o=w,e=A,f=D,g=k,h=y,C=N("perms"),b=x;return p(),M("div",V,[i(o,{class:"!border-none",shadow:"never"},{default:r(()=>[i(m,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1A1.\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\u540E\uFF0C\u9700\u8981\u5C06\u8D44\u6E90\u6587\u4EF6\u4F20\u8F93\u81F3\u65B0\u7684\u5B58\u50A8\u7AEF\uFF1B2.\u8BF7\u52FF\u968F\u610F\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\uFF0C\u53EF\u80FD\u5BFC\u81F4\u56FE\u7247\u65E0\u6CD5\u67E5\u770B",closable:!1,"show-icon":""})]),_:1}),E((p(),c(o,{class:"!border-none mt-4",shadow:"never"},{default:r(()=>[i(h,{size:"large",data:t.lists},{default:r(()=>[i(e,{label:"\u50A8\u5B58\u65B9\u5F0F",prop:"name","min-width":"120"}),i(e,{label:"\u50A8\u5B58\u4F4D\u7F6E",prop:"path","min-width":"160"}),i(e,{label:"\u72B6\u6001","min-width":"80"},{default:r(({row:_})=>[_.status==1?(p(),c(f,{key:0},{default:r(()=>[z]),_:1})):(p(),c(f,{key:1,type:"danger"},{default:r(()=>[I]),_:1}))]),_:1}),i(e,{label:"\u64CD\u4F5C","min-width":"80",fixed:"right"},{default:r(({row:_})=>[E((p(),c(g,{type:"primary",link:"",onClick:U=>l(_.engine)},{default:r(()=>[K]),_:2},1032,["onClick"])),[[C,["setting.storage/setup"]]])]),_:1})]),_:1},8,["data"])]),_:1})),[[b,t.loading]]),i(L,{ref_key:"editRef",ref:s,onSuccess:n},null,512)])}}});export{Yt as default};