import{_ as E}from"./index.a0f78d9a.js";import{x as B,y as F,A as U,D as k,t as D}from"./element-plus.69fcf893.js";import{T as A,E as P}from"./@wangeditor.a814ca05.js";import{M as N}from"./picker.43e44498.js";import{i as V}from"./index.01c230e9.js";import{d as w,s as x,e as y,E as R,o as b,c as C,U as t,u as d,k as I,_ as M,r as S,a as g,L as a,M as T,K,V as O,S as z,ad as G}from"./@vue.230e89ba.js";import{c as H,d as L}from"./website.32655d1c.js";import"./@vueuse.88988742.js";import"./dayjs.fcd521bc.js";import"./axios.cd59824e.js";import"./@element-plus.da5c63ac.js";import"./lodash-es.29c53eac.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.1377612b.js";import"./index.adfc69bd.js";import"./index.vue_vue_type_script_setup_true_lang.46ab8d80.js";import"./index.c7f38a4c.js";import"./usePaging.0017d00a.js";import"./vue3-video-play.1b377718.js";import"./vuedraggable.d3ca629d.js";import"./vue.182457a1.js";import"./sortablejs.998e9068.js";import"./lodash.1c715802.js";import"./vue-router.c0281831.js";import"./pinia.1d1aade0.js";import"./vue-demi.bfae2336.js";import"./css-color-function.edf0aab3.js";import"./color.e43c8b30.js";import"./clone.50df6560.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.7817adfa.js";import"./echarts.5e2dc550.js";import"./zrender.510214c4.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b3d01323.js";const $=w({__name:"index",props:{modelValue:{default:""},mode:{default:"simple"},height:{default:"100%"},width:{default:"auto"},toolbarConfig:{default:()=>({excludeKeys:["fullScreen"]})}},emits:["update:modelValue"],setup(s,{emit:e}){const i=s,u=x(),v=x();let l;const p={MENU_CONF:{uploadImage:{customBrowseAndUpload(o){var r;console.log(o),(r=v.value)==null||r.showPopup(-1),l=o}}}},c=y(()=>({height:V(i.height),width:V(i.width)})),m=y({get(){return i.modelValue},set(o){e("update:modelValue",o)}}),f=o=>{o.forEach(r=>{l(r)})};R(()=>{const o=u.value;o!=null&&o.destroy()});const _=o=>{u.value=o};return(o,r)=>(b(),C("div",{class:"border border-br flex flex-col",style:M(d(c))},[t(d(A),{class:"border-b border-br",editor:d(u),defaultConfig:s.toolbarConfig,mode:s.mode},null,8,["editor","defaultConfig","mode"]),t(d(P),{class:"overflow-y-auto flex-1",modelValue:d(m),"onUpdate:modelValue":r[0]||(r[0]=h=>I(m)?m.value=h:null),defaultConfig:p,mode:s.mode,onOnCreated:_},null,8,["modelValue","mode"]),t(N,{ref_key:"materialPickerRef",ref:v,limit:-1,"hidden-upload":"",onChange:f},null,512)],4))}}),j={class:"xl:flex"},q=g("span",{class:"font-medium"},"\u670D\u52A1\u534F\u8BAE",-1),J=g("span",{class:"font-medium"},"\u9690\u79C1\u534F\u8BAE",-1),Q=z("\u4FDD\u5B58"),Se=w({__name:"protocol",setup(s){const e=S({service_title:"",service_content:"",privacy_title:"",privacy_content:""}),i=async()=>{e.value=await H()},u=async()=>{await L({...e.value}),i()};return i(),(v,l)=>{const p=B,c=F,m=U,f=$,_=k,o=D,r=E,h=G("perms");return b(),C(O,null,[g("div",j,[t(_,{class:"!border-none flex-1 xl:mr-4 mb-4",shadow:"never"},{header:a(()=>[q]),default:a(()=>[t(m,{model:e.value,"label-width":"80px"},{default:a(()=>[t(c,{label:"\u534F\u8BAE\u540D\u79F0"},{default:a(()=>[t(p,{modelValue:e.value.service_title,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value.service_title=n)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),t(f,{class:"mb-10",modelValue:e.value.service_content,"onUpdate:modelValue":l[1]||(l[1]=n=>e.value.service_content=n),height:"600"},null,8,["modelValue"])]),_:1}),t(_,{class:"!border-none flex-1 mb-4",shadow:"never"},{header:a(()=>[J]),default:a(()=>[t(m,{model:e.value,"label-width":"80px"},{default:a(()=>[t(c,{label:"\u534F\u8BAE\u540D\u79F0"},{default:a(()=>[t(p,{modelValue:e.value.privacy_title,"onUpdate:modelValue":l[2]||(l[2]=n=>e.value.privacy_title=n)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),t(f,{class:"mb-10",modelValue:e.value.privacy_content,"onUpdate:modelValue":l[3]||(l[3]=n=>e.value.privacy_content=n),height:"600"},null,8,["modelValue"])]),_:1})]),T((b(),K(r,null,{default:a(()=>[t(o,{type:"primary",onClick:u},{default:a(()=>[Q]),_:1})]),_:1})),[[h,["setting.web.web_setting/setAgreement"]]])],64)}}});export{Se as default};
