import{t as c}from"./element-plus.69fcf893.js";import{a as l}from"./vue-router.c0281831.js";import{d as u,r as d,G as _,o as n,c as v,a as r,T as i,K as f,L as B,S as g,u as h,R as y}from"./@vue.230e89ba.js";import{d as E}from"./index.01c230e9.js";import"./@vueuse.88988742.js";import"./dayjs.fcd521bc.js";import"./axios.cd59824e.js";import"./@element-plus.da5c63ac.js";import"./lodash-es.29c53eac.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.1c715802.js";import"./pinia.1d1aade0.js";import"./vue-demi.bfae2336.js";import"./css-color-function.edf0aab3.js";import"./color.e43c8b30.js";import"./clone.50df6560.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.7817adfa.js";import"./echarts.5e2dc550.js";import"./zrender.510214c4.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b3d01323.js";const x={class:"error"},k={class:"error-code"},w={class:"lg lighter mt-7 mb-7"},C=u({__name:"error",props:{code:String,title:String,showBtn:{type:Boolean,default:!0}},setup(t){const m=t;let o=null;const e=d(5),s=l();return m.showBtn&&(o=setInterval(()=>{e.value===0?(clearInterval(o),s.go(-1)):e.value--},1e3)),_(()=>{o&&clearInterval(o)}),(D,a)=>{const p=c;return n(),v("div",x,[r("div",null,[r("div",k,i(t.code),1),r("div",w,i(t.title),1),t.showBtn?(n(),f(p,{key:0,type:"primary",onClick:a[0]||(a[0]=I=>h(s).go(-1))},{default:B(()=>[g(i(e.value)+" \u79D2\u540E\u8FD4\u56DE\u4E0A\u4E00\u9875 ",1)]),_:1})):y("",!0)])])}}});const et=E(C,[["__scopeId","data-v-d05c4257"]]);export{et as default};
