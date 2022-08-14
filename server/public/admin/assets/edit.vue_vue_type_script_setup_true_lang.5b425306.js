import{x as M,y as N,G as P,H as S,s as I,A as O}from"./element-plus.69fcf893.js";import{M as G}from"./picker.43e44498.js";import{P as H}from"./index.1377612b.js";import{r as K}from"./role.9c7cdebb.js";import{r as p}from"./index.01c230e9.js";import{d as T}from"./department.19d4d6d7.js";import{c as $}from"./post.620c3f2f.js";import{d as z,s as w,r as J,e as Q,$ as _,o as n,c as C,U as l,L as t,a as B,K as F,R as E,V as W,a8 as X,u as Y}from"./@vue.230e89ba.js";function pe(s){return p.get({url:"/auth.admin/lists",params:s})}function Z(s){return p.post({url:"/auth.admin/add",params:s})}function ee(s){return p.post({url:"/auth.admin/edit",params:s})}function me(s){return p.post({url:"/auth.admin/delete",params:s})}const ue={class:"edit-popup"},oe=B("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100px\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),ce=z({__name:"edit",emits:["success","close"],setup(s,{expose:A,emit:b}){const V=w(),m=w(),c=J("add"),D=Q(()=>c.value=="edit"?"\u7F16\u8F91\u7BA1\u7406\u5458":"\u65B0\u589E\u7BA1\u7406\u5458"),u=_({id:"",account:"",name:"",dept_id:"",jobs_id:"",role_id:"",avatar:"",password:"",password_confirm:"",disable:0,multipoint_login:1,root:0}),f=_({account:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:["blur"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}],role_id:[{required:!0,message:"\u8BF7\u9009\u62E9\u89D2\u8272",trigger:["blur"]}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:["blur"]}],password_confirm:[{required:!0,message:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801",trigger:["blur"]}]}),d=_({role:[],dept:[],jobs:[]}),k=()=>{K({page_type:0}).then(a=>{d.role=a.lists}),T({page_type:0}).then(a=>{d.dept=a}),$({page_type:0}).then(a=>{d.jobs=a.lists})},y=async()=>{var a,e;await((a=V.value)==null?void 0:a.validate()),c.value=="edit"?await ee(u):await Z(u),(e=m.value)==null||e.close(),b("success")},h=(a="add")=>{var e;c.value=a,(e=m.value)==null||e.open()},U=a=>{for(const e in u)a[e]!=null&&a[e]!=null&&(u[e]=a[e]);f.password=[],f.password_confirm=[]},x=()=>{b("close")};return k(),A({open:h,setFormData:U}),(a,e)=>{const i=M,r=N,R=G,g=P,j=S,v=I,q=O;return n(),C("div",ue,[l(H,{ref_key:"popupRef",ref:m,title:Y(D),async:!0,width:"550px",clickModalClose:!0,onConfirm:y,onClose:x},{default:t(()=>[l(q,{ref_key:"formRef",ref:V,model:u,"label-width":"84px",rules:f},{default:t(()=>[l(r,{label:"\u8D26\u53F7",prop:"account"},{default:t(()=>[l(i,{modelValue:u.account,"onUpdate:modelValue":e[0]||(e[0]=o=>u.account=o),disabled:u.root==1,placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7"},null,8,["modelValue","disabled"])]),_:1}),l(r,{label:"\u5934\u50CF"},{default:t(()=>[B("div",null,[B("div",null,[l(R,{modelValue:u.avatar,"onUpdate:modelValue":e[1]||(e[1]=o=>u.avatar=o),limit:1},null,8,["modelValue"])]),oe])]),_:1}),l(r,{label:"\u540D\u79F0",prop:"name"},{default:t(()=>[l(i,{modelValue:u.name,"onUpdate:modelValue":e[2]||(e[2]=o=>u.name=o),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),l(r,{label:"\u89D2\u8272",prop:"role_id"},{default:t(()=>[l(j,{modelValue:u.role_id,"onUpdate:modelValue":e[3]||(e[3]=o=>u.role_id=o),disabled:u.root==1,class:"flex-1",placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272"},{default:t(()=>[u.root==1?(n(),F(g,{key:0,label:"\u7CFB\u7EDF\u7BA1\u7406\u5458",value:0})):E("",!0),(n(!0),C(W,null,X(d.role,(o,L)=>(n(),F(g,{key:L,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),l(r,{label:"\u5BC6\u7801",prop:"password"},{default:t(()=>[l(i,{modelValue:u.password,"onUpdate:modelValue":e[4]||(e[4]=o=>u.password=o),"show-password":"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),l(r,{label:"\u786E\u8BA4\u5BC6\u7801",prop:"password_confirm"},{default:t(()=>[l(i,{modelValue:u.password_confirm,"onUpdate:modelValue":e[5]||(e[5]=o=>u.password_confirm=o),"show-password":"",placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),u.root!=1?(n(),F(r,{key:0,label:"\u7BA1\u7406\u5458\u72B6\u6001"},{default:t(()=>[l(v,{modelValue:u.disable,"onUpdate:modelValue":e[6]||(e[6]=o=>u.disable=o),"active-value":0,"inactive-value":1},null,8,["modelValue"])]),_:1})):E("",!0),l(r,{label:"\u591A\u5904\u767B\u5F55"},{default:t(()=>[l(v,{modelValue:u.multipoint_login,"onUpdate:modelValue":e[7]||(e[7]=o=>u.multipoint_login=o),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title"])])}}});export{ce as _,ee as a,me as b,pe as c};
