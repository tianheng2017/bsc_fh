import{A as C}from"./element-plus.69fcf893.js";import{P as w}from"./index.1377612b.js";import{a as B}from"./dict.23a76c01.js";import{r as l,j as D}from"./index.01c230e9.js";import{d as L,s as p,r as R,e as x,$ as u,o as b,c as E,U as f,L as T,u as M}from"./@vue.230e89ba.js";function $(o){return l.get({url:"/transfer_log/lists",params:o})}function A(o){return l.post({url:"/transfer_log/add",params:o})}function P(o){return l.post({url:"/transfer_log/edit",params:o})}const j={class:"edit-popup"},z=L({__name:"edit",emits:["success","close"],setup(o,{expose:d,emit:c}){const i=p(),r=p(),n=R("add"),m=x(()=>n.value=="edit"?"\u7F16\u8F91\u8F6C\u5165\u8BB0\u5F55\u8868":"\u65B0\u589E\u8F6C\u5165\u8BB0\u5F55\u8868"),s=u({id:""}),_=u({state:[]}),h=()=>{B({type_value:"state",page_type:0}).then(e=>{_.state=e.lists})},v=u({}),y=e=>{for(const t in s)e[t]!=null&&e[t]!=null&&(s[t]=e[t]);s.block_time=D(s.block_time,"yyyy-mm-dd hh:MM:ss")},g=async()=>{var t,a;await((t=i.value)==null?void 0:t.validate());const e={...s};n.value=="edit"?await P(e):await A(e),(a=r.value)==null||a.close(),c("success")},F=(e="add")=>{var t;n.value=e,(t=r.value)==null||t.open()},k=()=>{c("close")};return h(),d({open:F,setFormData:y}),(e,t)=>{const a=C;return b(),E("div",j,[f(w,{ref_key:"popupRef",ref:r,title:M(m),async:!0,width:"550px",clickModalClose:!0,onConfirm:g,onClose:k},{default:T(()=>[f(a,{ref_key:"formRef",ref:i,model:s,"label-width":"90px",rules:v},null,8,["model","rules"])]),_:1},8,["title"])])}}});export{z as _,$ as a};
