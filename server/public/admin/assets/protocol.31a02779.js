var k=Object.defineProperty;var x=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var y=(t,e,o)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,w=(t,e)=>{for(var o in e||(e={}))D.call(e,o)&&y(t,o,e[o]);if(x)for(var o of x(e))A.call(e,o)&&y(t,o,e[o]);return t};var b=(t,e,o)=>new Promise((u,c)=>{var a=r=>{try{s(o.next(r))}catch(p){c(p)}},f=r=>{try{s(o.throw(r))}catch(p){c(p)}},s=r=>r.done?u(r.value):Promise.resolve(r.value).then(a,f);s((o=o.apply(t,e)).next())});import{_ as P}from"./index.31df34f5.js";import{x as N,y as R,A as I,D as M,t as S}from"./element-plus.2d443847.js";import{T,E as K}from"./@wangeditor.a814ca05.js";import{M as O}from"./picker.6271ba56.js";import{i as C}from"./index.a71cd9d1.js";import{d as F,s as E,e as B,E as z,o as g,c as U,U as i,u as _,k as G,_ as H,r as L,a as V,L as m,M as $,K as j,V as q,S as J,ad as Q}from"./@vue.230e89ba.js";import{c as W,d as X}from"./website.2f74f20f.js";import"./@vueuse.88988742.js";import"./dayjs.2133d750.js";import"./@ethereumjs.af3f5dff.js";import"./ethereumjs-util.dbf079cb.js";import"./buffer.b4004db0.js";import"./base64-js.ed86f7b6.js";import"./ieee754.fe4a9da6.js";import"./@ethersproject.5d8623a7.js";import"./hash.js.c7ed14af.js";import"./minimalistic-assert.2f00d150.js";import"./inherits.66060a12.js";import"./js-sha3.0fd6df36.js";import"./rlp.4a2a910e.js";import"./rollup-plugin-node-polyfills.dd1027b1.js";import"./process.627009b3.js";import"./string_decoder.87146aa7.js";import"./safe-buffer.d5a81f77.js";import"./ethereum-cryptography.1b681b54.js";import"./secp256k1.bfa26894.js";import"./elliptic.8f0e0a52.js";import"./bn.js.92292d6f.js";import"./minimalistic-crypto-utils.9fe8a21e.js";import"./brorand.f18a1e1e.js";import"./hmac-drbg.79c494c0.js";import"./randombytes.926bd932.js";import"./keccak.c6d83d20.js";import"./readable-stream.5bcfe07c.js";import"./util-deprecate.e6516745.js";import"./create-hash.0f02e375.js";import"./md5.js.24480850.js";import"./hash-base.b9b8d2fc.js";import"./ripemd160.b7ffce25.js";import"./sha.js.28d4c0c4.js";import"./cipher-base.698ebf24.js";import"./crc-32.e5e20fdb.js";import"./@element-plus.da5c63ac.js";import"./lodash-es.29c53eac.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.89655f46.js";import"./index.82f2deeb.js";import"./index.vue_vue_type_script_setup_true_lang.1619ae31.js";import"./index.302b9479.js";import"./usePaging.0017d00a.js";import"./vue3-video-play.1b377718.js";import"./vuedraggable.0c65adb4.js";import"./vue.81ce608f.js";import"./sortablejs.4c0ef175.js";import"./lodash.6195a15c.js";import"./axios.f8ca758d.js";import"./vue-router.c0281831.js";import"./pinia.1d1aade0.js";import"./vue-demi.bfae2336.js";import"./css-color-function.7e799b03.js";import"./color.e43c8b30.js";import"./clone.50df6560.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./ms.a9ae1d6d.js";import"./nprogress.998a2723.js";import"./echarts.5e2dc550.js";import"./zrender.510214c4.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b3d01323.js";const Y=F({__name:"index",props:{modelValue:{default:""},mode:{default:"simple"},height:{default:"100%"},width:{default:"auto"},toolbarConfig:{default:()=>({excludeKeys:["fullScreen"]})}},emits:["update:modelValue"],setup(t,{emit:e}){const o=t,u=E(),c=E();let a;const f={MENU_CONF:{uploadImage:{customBrowseAndUpload(l){var n;console.log(l),(n=c.value)==null||n.showPopup(-1),a=l}}}},s=B(()=>({height:C(o.height),width:C(o.width)})),r=B({get(){return o.modelValue},set(l){e("update:modelValue",l)}}),p=l=>{l.forEach(n=>{a(n)})};z(()=>{const l=u.value;l!=null&&l.destroy()});const v=l=>{u.value=l};return(l,n)=>(g(),U("div",{class:"border border-br flex flex-col",style:H(_(s))},[i(_(T),{class:"border-b border-br",editor:_(u),defaultConfig:t.toolbarConfig,mode:t.mode},null,8,["editor","defaultConfig","mode"]),i(_(K),{class:"overflow-y-auto flex-1",modelValue:_(r),"onUpdate:modelValue":n[0]||(n[0]=h=>G(r)?r.value=h:null),defaultConfig:f,mode:t.mode,onOnCreated:v},null,8,["modelValue","mode"]),i(O,{ref_key:"materialPickerRef",ref:c,limit:-1,"hidden-upload":"",onChange:p},null,512)],4))}}),Z={class:"xl:flex"},ee=V("span",{class:"font-medium"},"\u670D\u52A1\u534F\u8BAE",-1),oe=V("span",{class:"font-medium"},"\u9690\u79C1\u534F\u8BAE",-1),te=J("\u4FDD\u5B58"),Bo=F({__name:"protocol",setup(t){const e=L({service_title:"",service_content:"",privacy_title:"",privacy_content:""}),o=()=>b(this,null,function*(){e.value=yield W()}),u=()=>b(this,null,function*(){yield X(w({},e.value)),o()});return o(),(c,a)=>{const f=N,s=R,r=I,p=Y,v=M,l=S,n=P,h=Q("perms");return g(),U(q,null,[V("div",Z,[i(v,{class:"!border-none flex-1 xl:mr-4 mb-4",shadow:"never"},{header:m(()=>[ee]),default:m(()=>[i(r,{model:e.value,"label-width":"80px"},{default:m(()=>[i(s,{label:"\u534F\u8BAE\u540D\u79F0"},{default:m(()=>[i(f,{modelValue:e.value.service_title,"onUpdate:modelValue":a[0]||(a[0]=d=>e.value.service_title=d)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),i(p,{class:"mb-10",modelValue:e.value.service_content,"onUpdate:modelValue":a[1]||(a[1]=d=>e.value.service_content=d),height:"600"},null,8,["modelValue"])]),_:1}),i(v,{class:"!border-none flex-1 mb-4",shadow:"never"},{header:m(()=>[oe]),default:m(()=>[i(r,{model:e.value,"label-width":"80px"},{default:m(()=>[i(s,{label:"\u534F\u8BAE\u540D\u79F0"},{default:m(()=>[i(f,{modelValue:e.value.privacy_title,"onUpdate:modelValue":a[2]||(a[2]=d=>e.value.privacy_title=d)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),i(p,{class:"mb-10",modelValue:e.value.privacy_content,"onUpdate:modelValue":a[3]||(a[3]=d=>e.value.privacy_content=d),height:"600"},null,8,["modelValue"])]),_:1})]),$((g(),j(n,null,{default:m(()=>[i(l,{type:"primary",onClick:u},{default:m(()=>[te]),_:1})]),_:1})),[[h,["setting.web.web_setting/setAgreement"]]])],64)}}});export{Bo as default};
