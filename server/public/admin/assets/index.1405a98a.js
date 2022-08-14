import{k as _,_ as x}from"./index.a71cd9d1.js";import{D as h}from"./element-plus.2d443847.js";import{C as v}from"./vue-echarts.d50295af.js";import{d as F,$ as y,j as f,o as p,c,a as t,U as a,L as e,T as i,V as B,a8 as w,u as E,a4 as g}from"./@vue.230e89ba.js";import"./@vueuse.88988742.js";import"./lodash.6195a15c.js";import"./@ethereumjs.af3f5dff.js";import"./ethereumjs-util.dbf079cb.js";import"./buffer.b4004db0.js";import"./base64-js.ed86f7b6.js";import"./ieee754.fe4a9da6.js";import"./@ethersproject.5d8623a7.js";import"./hash.js.c7ed14af.js";import"./minimalistic-assert.2f00d150.js";import"./inherits.66060a12.js";import"./js-sha3.0fd6df36.js";import"./rlp.4a2a910e.js";import"./rollup-plugin-node-polyfills.dd1027b1.js";import"./process.627009b3.js";import"./string_decoder.87146aa7.js";import"./safe-buffer.d5a81f77.js";import"./ethereum-cryptography.1b681b54.js";import"./secp256k1.bfa26894.js";import"./elliptic.8f0e0a52.js";import"./bn.js.92292d6f.js";import"./minimalistic-crypto-utils.9fe8a21e.js";import"./brorand.f18a1e1e.js";import"./hmac-drbg.79c494c0.js";import"./randombytes.926bd932.js";import"./keccak.c6d83d20.js";import"./readable-stream.5bcfe07c.js";import"./util-deprecate.e6516745.js";import"./create-hash.0f02e375.js";import"./md5.js.24480850.js";import"./hash-base.b9b8d2fc.js";import"./ripemd160.b7ffce25.js";import"./sha.js.28d4c0c4.js";import"./cipher-base.698ebf24.js";import"./crc-32.e5e20fdb.js";import"./axios.f8ca758d.js";import"./vue-router.c0281831.js";import"./pinia.1d1aade0.js";import"./vue-demi.bfae2336.js";import"./css-color-function.7e799b03.js";import"./color.e43c8b30.js";import"./clone.50df6560.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./ms.a9ae1d6d.js";import"./@element-plus.da5c63ac.js";import"./nprogress.998a2723.js";import"./echarts.5e2dc550.js";import"./zrender.510214c4.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b3d01323.js";import"./dayjs.2133d750.js";import"./lodash-es.29c53eac.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./resize-detector.4e96b72b.js";const b={class:"workbench"},A={class:"md:flex"},C=t("span",{class:"card-title"},"\u4ECA\u65E5\u6570\u636E",-1),k={class:"text-tx-secondary text-xs ml-4"},D={class:"flex flex-wrap"},O={class:"w-1/2 md:w-1/4"},V=t("div",{class:"leading-10"},"\u8BBF\u95EE\u91CF(\u4EBA)",-1),L={class:"text-6xl"},N={class:"text-tx-secondary text-xs"},S={class:"w-1/2 md:w-1/4"},j=t("div",{class:"leading-10"},"\u9500\u552E\u989D(\u5143)",-1),z={class:"text-6xl"},M={class:"text-tx-secondary text-xs"},T={class:"w-1/2 md:w-1/4"},U=t("div",{class:"leading-10"},"\u8BA2\u5355\u91CF(\u7B14)",-1),W={class:"text-6xl"},$={class:"text-tx-secondary text-xs"},q={class:"w-1/2 md:w-1/4"},G=t("div",{class:"leading-10"},"\u65B0\u589E\u7528\u6237",-1),H={class:"text-6xl"},I={class:"text-tx-secondary text-xs"},J={class:"function mb-4"},K=t("span",null,"\u5E38\u7528\u529F\u80FD",-1),P={class:"flex flex-wrap"},Q={class:"mt-2"},R={class:"md:flex"},X=t("span",null,"\u8BBF\u95EE\u91CF\u8D8B\u52BF\u56FE",-1),co=F({__name:"index",setup(Y){const o=y({version:{version:"",website:"",based:"",channel:{gitee:"",website:""}},support:[],today:{},menu:[],visitor:[],article:[],visitorOption:{xAxis:{type:"category",data:[0]},yAxis:{type:"value"},legend:{data:["\u8BBF\u95EE\u91CF"]},itemStyle:{color:"red"},tooltip:{trigger:"axis"},series:[{name:"\u8BBF\u95EE\u91CF",data:[0],type:"line",smooth:!0}]}}),u=()=>{_().then(s=>{o.version=s.version,o.today=s.today,o.menu=s.menu,o.visitor=s.visitor,o.support=s.support,o.visitorOption.xAxis.data=[],o.visitorOption.series[0].data=[],s.visitor.date.reverse().forEach(n=>{o.visitorOption.xAxis.data.push(n)}),s.visitor.list[0].data.forEach(n=>{o.visitorOption.series[0].data.push(n)})}).catch(s=>{console.log("err",s)})};return f(()=>{u()}),(s,n)=>{const d=h,l=x,m=g("router-link");return p(),c("div",b,[t("div",A,[a(d,{class:"!border-none mb-4 flex-1",shadow:"never"},{header:e(()=>[t("div",null,[C,t("span",k," \u66F4\u65B0\u65F6\u95F4\uFF1A"+i(o.today.time),1)])]),default:e(()=>[t("div",D,[t("div",O,[V,t("div",L,i(o.today.today_visitor),1),t("div",N," \u603B\u8BBF\u95EE\u91CF\uFF1A"+i(o.today.total_visitor),1)]),t("div",S,[j,t("div",z,i(o.today.today_sales),1),t("div",M," \u603B\u9500\u552E\u989D\uFF1A"+i(o.today.total_sales),1)]),t("div",T,[U,t("div",W,i(o.today.order_num),1),t("div",$," \u603B\u8BA2\u5355\u91CF\uFF1A"+i(o.today.order_sum),1)]),t("div",q,[G,t("div",H,i(o.today.today_new_user),1),t("div",I," \u603B\u8BBF\u7528\u6237\uFF1A"+i(o.today.total_new_user),1)])])]),_:1})]),t("div",J,[a(d,{class:"flex-1 !border-none",shadow:"never"},{header:e(()=>[K]),default:e(()=>[t("div",P,[(p(!0),c(B,null,w(o.menu,r=>(p(),c("div",{class:"md:w-[12.5%] w-1/4 flex flex-col items-center",key:r},[a(m,{to:r.url,class:"mb-3 flex flex-col items-center"},{default:e(()=>[a(l,{width:"40px",height:"40px",src:r==null?void 0:r.image},null,8,["src"]),t("div",Q,i(r.name),1)]),_:2},1032,["to"])]))),128))])]),_:1})]),t("div",R,[a(d,{class:"flex-1 !border-none mb-4",shadow:"never"},{header:e(()=>[X]),default:e(()=>[t("div",null,[a(E(v),{style:{height:"350px"},option:o.visitorOption,autoresize:!0},null,8,["option"])])]),_:1})])])}}});export{co as default};
