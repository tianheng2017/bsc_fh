import{Z as C,D as b,F as v,X as w,t as A,I as D,M as k}from"./element-plus.69fcf893.js";import{_ as y,s as x}from"./edit.vue_vue_type_script_setup_true_lang.f82b1222.js";import{d as L,s as T,$ as R,o as a,c as S,U as t,L as e,M as d,K as s,S as l,ad as $}from"./@vue.230e89ba.js";import"./@vueuse.88988742.js";import"./dayjs.fcd521bc.js";import"./axios.cd59824e.js";import"./@element-plus.da5c63ac.js";import"./lodash-es.29c53eac.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.01c230e9.js";import"./lodash.1c715802.js";import"./vue-router.c0281831.js";import"./pinia.1d1aade0.js";import"./vue-demi.bfae2336.js";import"./css-color-function.edf0aab3.js";import"./color.e43c8b30.js";import"./clone.50df6560.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.7817adfa.js";import"./echarts.5e2dc550.js";import"./zrender.510214c4.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b3d01323.js";import"./index.1377612b.js";const M={class:"storage"},N=l("\u5F00\u542F"),V=l("\u5173\u95ED"),z=l(" \u8BBE\u7F6E "),Bt=L({__name:"index",setup(I){const c=T(),o=R({loading:!1,lists:[]}),m=async()=>{try{o.loading=!0,o.lists=await x(),o.loading=!1}catch{o.loading=!1}},F=i=>{var r;(r=c.value)==null||r.open(i)};return m(),(i,r)=>{const f=C,p=b,u=v,_=w,B=A,E=D,g=$("perms"),h=k;return a(),S("div",M,[t(p,{class:"!border-none",shadow:"never"},{default:e(()=>[t(f,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1A1.\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\u540E\uFF0C\u9700\u8981\u5C06\u8D44\u6E90\u6587\u4EF6\u4F20\u8F93\u81F3\u65B0\u7684\u5B58\u50A8\u7AEF\uFF1B2.\u8BF7\u52FF\u968F\u610F\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\uFF0C\u53EF\u80FD\u5BFC\u81F4\u56FE\u7247\u65E0\u6CD5\u67E5\u770B",closable:!1,"show-icon":""})]),_:1}),d((a(),s(p,{class:"!border-none mt-4",shadow:"never"},{default:e(()=>[t(E,{size:"large",data:o.lists},{default:e(()=>[t(u,{label:"\u50A8\u5B58\u65B9\u5F0F",prop:"name","min-width":"120"}),t(u,{label:"\u50A8\u5B58\u4F4D\u7F6E",prop:"path","min-width":"160"}),t(u,{label:"\u72B6\u6001","min-width":"80"},{default:e(({row:n})=>[n.status==1?(a(),s(_,{key:0},{default:e(()=>[N]),_:1})):(a(),s(_,{key:1,type:"danger"},{default:e(()=>[V]),_:1}))]),_:1}),t(u,{label:"\u64CD\u4F5C","min-width":"80",fixed:"right"},{default:e(({row:n})=>[d((a(),s(B,{type:"primary",link:"",onClick:K=>F(n.engine)},{default:e(()=>[z]),_:2},1032,["onClick"])),[[g,["setting.storage/setup"]]])]),_:1})]),_:1},8,["data"])]),_:1})),[[h,o.loading]]),t(y,{ref_key:"editRef",ref:c,onSuccess:m},null,512)])}}});export{Bt as default};
