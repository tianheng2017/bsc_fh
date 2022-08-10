import{Y as J,x as O,t as Y,E as I,J as Z,K as H,y as Q,L as X,W as ee,A as ue}from"./element-plus.6014d9af.js";import{g as le,h as oe,b as te,M as _}from"./index.78f53bc3.js";import{d as q,r as N,s as $,$ as W,e as P,w as se,n as S,j as ae,o as p,c as h,U as l,L as o,u as c,a as s,K as v,V as T,a8 as L,P as ne,T as de,Z as R,S as C,R as b}from"./@vue.67e62321.js";import{c as ie}from"./@vueuse.4608b35b.js";import{m as re,a as pe,b as me}from"./menu.ec9046cc.js";import{P as ce}from"./index.50733217.js";const Fe={class:"icon-select"},_e={class:"flex justify-between"},fe=s("div",{class:"mb-3"},"\u8BF7\u9009\u62E9\u56FE\u6807",-1),Ee=["onClick"],ve={class:"h-[280px]"},Ce={class:"flex flex-wrap"},be={class:"flex w-4"},Ve=C("\u65E0"),Be=q({__name:"picker",props:{modelValue:{default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(D,{emit:V}){const B=N(0),y=[{name:"element\u56FE\u6807",icons:le()},{name:"\u672C\u5730\u56FE\u6807",icons:oe()}],E=$(),t=W({inputValue:"",popoverVisible:!1,popoverWidth:0,mouseoverSelect:!1,inputFocus:!1}),g=()=>{t.inputFocus=t.popoverVisible=!0},u=()=>{t.inputFocus=!1,t.popoverVisible=t.mouseoverSelect},x=m=>{t.mouseoverSelect=t.popoverVisible=!1,V("update:modelValue",m),V("change",m)},k=()=>{V("update:modelValue",""),V("change","")},U=P(()=>{var F,d;const m=(d=(F=y[B.value])==null?void 0:F.icons)!=null?d:[];if(!t.inputValue)return m;const n=t.inputValue.toLowerCase();return m.filter(e=>{if(e.toLowerCase().indexOf(n)!==-1)return e})}),w=()=>{S(()=>{var n;const m=(n=E.value)==null?void 0:n.$el.offsetWidth;t.popoverWidth=m<300?300:m})};return ie(document.body,"click",()=>{t.popoverVisible=!!(t.inputFocus||t.mouseoverSelect)}),se(()=>t.popoverVisible,async m=>{var n,F;await S(),m?(n=E.value)==null||n.focus():(F=E.value)==null||F.blur()}),ae(()=>{w()}),(m,n)=>{const F=te,d=Y,e=I,f=J;return p(),h("div",Fe,[l(f,{visible:t.popoverVisible,"onUpdate:visible":n[3]||(n[3]=r=>t.popoverVisible=r),width:t.popoverWidth},{reference:o(()=>[l(c(O),{ref_key:"inputRef",ref:E,modelValue:t.inputValue,"onUpdate:modelValue":n[2]||(n[2]=r=>t.inputValue=r),modelModifiers:{trim:!0},placeholder:"\u641C\u7D22\u56FE\u6807",disabled:D.disabled,onFocus:g,onBlur:u},{prepend:o(()=>[s("div",be,[D.modelValue?(p(),v(F,{key:D.modelValue,name:D.modelValue},null,8,["name"])):(p(),h(T,{key:1},[Ve],64))])]),append:o(()=>[l(d,null,{default:o(()=>[l(F,{name:"el-icon-Close",size:18,onClick:k})]),_:1})]),_:1},8,["modelValue","disabled"])]),default:o(()=>[s("div",{onMouseover:n[0]||(n[0]=R(r=>t.mouseoverSelect=!0,["stop"])),onMouseout:n[1]||(n[1]=R(r=>t.mouseoverSelect=!1,["stop"]))},[s("div",null,[s("div",_e,[fe,s("div",null,[(p(),h(T,null,L(y,(r,i)=>s("span",{key:i,class:ne(["cursor-pointer text-sm ml-2",{"text-primary":i==B.value}]),onClick:M=>B.value=i},de(r.name),11,Ee)),64))])]),s("div",ve,[l(e,null,{default:o(()=>[s("div",Ce,[(p(!0),h(T,null,L(c(U),r=>(p(),h("div",{key:r,class:"m-1"},[l(d,{onClick:i=>x(r)},{default:o(()=>[l(F,{name:r,size:18},null,8,["name"])]),_:2},1032,["onClick"])]))),128))])]),_:1})])])],32)]),_:1},8,["visible","width"])])}}}),he={class:"edit-popup"},De=C("\u76EE\u5F55"),ye=C("\u83DC\u5355"),Ae=C("\u6309\u94AE"),ke={class:"flex-1"},ge=s("div",{class:"form-tips"}," \u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934 ",-1),xe={class:"flex-1"},Ue=s("div",{class:"form-tips"}," \u8BBF\u95EE\u7684\u7EC4\u4EF6\u8DEF\u5F84\uFF0C\u5982\uFF1A`user/setting`\uFF0C\u9ED8\u8BA4\u5728`views`\u76EE\u5F55\u4E0B ",-1),we={class:"flex-1"},Te=s("div",{class:"form-tips"}," \u5C06\u4F5C\u4E3Aserver\u7AEFAPI\u9A8C\u6743\u4F7F\u7528\uFF0C\u5982`auth.admin/user`\uFF0C\u8BF7\u8C28\u614E\u4FEE\u6539 ",-1),Ne={class:"flex-1"},$e=s("div",{class:"form-tips"},' \u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A`{"id": 1, "name": "admin"}`\u6216`id=1&name=admin` ',-1),Me=C("\u663E\u793A"),Se=C("\u9690\u85CF"),Le=s("div",{class:"form-tips"}," \u9009\u62E9\u9690\u85CF\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE ",-1),Re=C("\u6B63\u5E38"),Oe=C("\u505C\u7528"),Ie=s("div",{class:"form-tips"}," \u9009\u62E9\u505C\u7528\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u8BBF\u95EE ",-1),qe=s("div",{class:"form-tips"},"\u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D",-1),Je=q({__name:"edit",emits:["success","close"],setup(D,{expose:V,emit:B}){const y=$(),E=$(),t=N("add"),g=P(()=>t.value=="edit"?"\u7F16\u8F91\u83DC\u5355":"\u65B0\u589E\u83DC\u5355"),u=W({id:"",pid:0,type:_.CATALOGUE,icon:"",name:"",sort:1,paths:"",perms:"",component:"",selected:"",params:"",is_cache:0,is_show:1,is_disable:0}),x={pid:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355",trigger:["blur","change"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",trigger:"blur"}],paths:[{required:!0,message:"\u8BF7\u8F93\u5165\u8DEF\u7531\u5730\u5740",trigger:"blur"}],component:[{required:!0,message:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u5730\u5740",trigger:"blur"}]},k=N([]),U=async()=>{const d=await re({page_type:0}),e={id:0,name:"\u9876\u7EA7",children:[]};e.children=d.lists,k.value.push(e)},w=async()=>{var d,e;await((d=y.value)==null?void 0:d.validate()),t.value=="edit"?await pe(u):await me(u),(e=E.value)==null||e.close(),B("success")},m=(d="add")=>{var e;t.value=d,(e=E.value)==null||e.open()},n=d=>{for(const e in u)d[e]!=null&&d[e]!=null&&(u[e]=d[e])},F=()=>{B("close")};return U(),V({open:m,setFormData:n}),(d,e)=>{const f=Z,r=H,i=Q,M=X,A=O,G=Be,z=ee,j=ue,K=I;return p(),h("div",he,[l(ce,{ref_key:"popupRef",ref:E,title:c(g),async:!0,width:"550px",clickModalClose:!0,onConfirm:w,onClose:F},{default:o(()=>[l(K,{class:"h-[400px] sm:h-[500px]"},{default:o(()=>[l(j,{ref_key:"formRef",ref:y,model:u,"label-width":"80px",rules:x},{default:o(()=>[l(i,{label:"\u83DC\u5355\u7C7B\u578B",prop:"type",required:""},{default:o(()=>[l(r,{modelValue:u.type,"onUpdate:modelValue":e[0]||(e[0]=a=>u.type=a)},{default:o(()=>[l(f,{label:c(_).CATALOGUE},{default:o(()=>[De]),_:1},8,["label"]),l(f,{label:c(_).MENU},{default:o(()=>[ye]),_:1},8,["label"]),l(f,{label:c(_).BUTTON},{default:o(()=>[Ae]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1}),l(i,{label:"\u7236\u7EA7\u83DC\u5355",prop:"pid"},{default:o(()=>[l(M,{class:"flex-1",modelValue:u.pid,"onUpdate:modelValue":e[1]||(e[1]=a=>u.pid=a),data:k.value,clearable:"","node-key":"id",props:{label:"name"},"default-expand-all":!0,placeholder:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355","check-strictly":""},null,8,["modelValue","data"])]),_:1}),l(i,{label:"\u83DC\u5355\u540D\u79F0",prop:"name"},{default:o(()=>[l(A,{modelValue:u.name,"onUpdate:modelValue":e[2]||(e[2]=a=>u.name=a),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0"},null,8,["modelValue"])]),_:1}),u.type!=c(_).BUTTON?(p(),v(i,{key:0,label:"\u83DC\u5355\u56FE\u6807",prop:"icon"},{default:o(()=>[l(G,{class:"flex-1",modelValue:u.icon,"onUpdate:modelValue":e[3]||(e[3]=a=>u.icon=a)},null,8,["modelValue"])]),_:1})):b("",!0),u.type!=c(_).BUTTON?(p(),v(i,{key:1,label:"\u8DEF\u7531\u8DEF\u5F84",prop:"paths"},{default:o(()=>[s("div",ke,[l(A,{modelValue:u.paths,"onUpdate:modelValue":e[4]||(e[4]=a=>u.paths=a),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u8DEF\u5F84"},null,8,["modelValue"]),ge])]),_:1})):b("",!0),u.type==c(_).MENU?(p(),v(i,{key:2,label:"\u7EC4\u4EF6\u8DEF\u5F84",prop:"component"},{default:o(()=>[s("div",xe,[l(A,{modelValue:u.component,"onUpdate:modelValue":e[5]||(e[5]=a=>u.component=a),placeholder:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u8DEF\u5F84"},null,8,["modelValue"]),Ue])]),_:1})):b("",!0),u.type!=c(_).CATALOGUE?(p(),v(i,{key:3,label:"\u6743\u9650\u5B57\u7B26",prop:"perms"},{default:o(()=>[s("div",we,[l(A,{modelValue:u.perms,"onUpdate:modelValue":e[6]||(e[6]=a=>u.perms=a),placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u5B57\u7B26"},null,8,["modelValue"]),Te])]),_:1})):b("",!0),u.type==c(_).MENU?(p(),v(i,{key:4,label:"\u8DEF\u7531\u53C2\u6570",prop:"params"},{default:o(()=>[s("div",null,[s("div",Ne,[l(A,{modelValue:u.params,"onUpdate:modelValue":e[7]||(e[7]=a=>u.params=a),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u53C2\u6570"},null,8,["modelValue"])]),$e])]),_:1})):b("",!0),u.type!=c(_).BUTTON?(p(),v(i,{key:5,label:"\u662F\u5426\u663E\u793A",prop:"is_show",required:""},{default:o(()=>[s("div",null,[l(r,{modelValue:u.is_show,"onUpdate:modelValue":e[8]||(e[8]=a=>u.is_show=a)},{default:o(()=>[l(f,{label:1},{default:o(()=>[Me]),_:1}),l(f,{label:0},{default:o(()=>[Se]),_:1})]),_:1},8,["modelValue"]),Le])]),_:1})):b("",!0),u.type!=c(_).BUTTON?(p(),v(i,{key:6,label:"\u83DC\u5355\u72B6\u6001",prop:"is_disable",required:""},{default:o(()=>[s("div",null,[l(r,{modelValue:u.is_disable,"onUpdate:modelValue":e[9]||(e[9]=a=>u.is_disable=a)},{default:o(()=>[l(f,{label:0},{default:o(()=>[Re]),_:1}),l(f,{label:1},{default:o(()=>[Oe]),_:1})]),_:1},8,["modelValue"]),Ie])]),_:1})):b("",!0),l(i,{label:"\u83DC\u5355\u6392\u5E8F",prop:"sort"},{default:o(()=>[s("div",null,[l(z,{modelValue:u.sort,"onUpdate:modelValue":e[10]||(e[10]=a=>u.sort=a)},null,8,["modelValue"]),qe])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1},8,["title"])])}}});export{Je as _};
