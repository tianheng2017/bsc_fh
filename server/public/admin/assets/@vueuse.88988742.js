var M=(e,t,r)=>new Promise((n,a)=>{var o=i=>{try{l(r.next(i))}catch(c){a(c)}},s=i=>{try{l(r.throw(i))}catch(c){a(c)}},l=i=>i.done?n(i.value):Promise.resolve(i.value).then(o,s);l((r=r.apply(e,t)).next())});import{g as le,f as ie,i as z,j as ue,n as Y,k as ce,r as w,s as Z,l as fe,m as de,w as F,u as O,p as pe,e as R}from"./@vue.230e89ba.js";var ve=Object.defineProperty,me=Object.defineProperties,ge=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,W=(e,t,r)=>t in e?ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,he=(e,t)=>{for(var r in t||(t={}))we.call(t,r)&&W(e,r,t[r]);if(A)for(var r of A(t))_e.call(t,r)&&W(e,r,t[r]);return e},be=(e,t)=>me(e,ge(t));function lt(e,t){var r;const n=Z();return fe(()=>{n.value=e()},be(he({},t),{flush:(r=t==null?void 0:t.flush)!=null?r:"sync"})),de(n)}var V;const T=typeof window!="undefined",ye=e=>typeof e!="undefined",it=e=>typeof e=="boolean",ut=e=>typeof e=="number",Oe=e=>typeof e=="string",I=()=>{};T&&((V=window==null?void 0:window.navigator)==null?void 0:V.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function k(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const ee=e=>e();function Pe(e,t={}){let r,n;return o=>{const s=O(e),l=O(t.maxWait);if(r&&clearTimeout(r),s<=0||l!==void 0&&l<=0)return n&&(clearTimeout(n),n=null),o();l&&!n&&(n=setTimeout(()=>{r&&clearTimeout(r),n=null,o()},l)),r=setTimeout(()=>{n&&clearTimeout(n),n=null,o()},s)}}function Se(e,t=!0,r=!0){let n=0,a,o=!0;const s=()=>{a&&(clearTimeout(a),a=void 0)};return i=>{const c=O(e),m=Date.now()-n;if(s(),c<=0)return n=Date.now(),i();m>c&&(r||!o)?(n=Date.now(),i()):t&&(a=setTimeout(()=>{n=Date.now(),o=!0,s(),i()},c)),!r&&!a&&(a=setTimeout(()=>o=!0,c)),o=!1}}function Ee(e=ee){const t=w(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...o)=>{t.value&&e(...o)}}}function D(e){return le()?(ie(e),!0):!1}function $e(e,t=200,r={}){return k(Pe(t,r),e)}function ct(e,t=200,r={}){if(t<=0)return e;const n=w(e.value),a=$e(()=>{n.value=e.value},t,r);return F(e,()=>a()),n}function ft(e,t=200,r=!0,n=!0){return k(Se(t,r,n),e)}function Fe(e,t=!0){z()?pe(e):t?e():Y(e)}function te(e,t=!0){z()?ue(e):t?e():Y(e)}function dt(e,t,r={}){const{immediate:n=!0}=r,a=w(!1);let o=null;function s(){o&&(clearTimeout(o),o=null)}function l(){a.value=!1,s()}function i(...c){s(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...c)},O(t))}return n&&(a.value=!0,T&&i()),D(l),{isPending:a,start:i,stop:l}}function pt(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=ce(e),o=w(e);function s(l){return arguments.length?(o.value=l,o.value):(o.value=o.value===O(r)?O(n):O(r),o.value)}return a?s:[o,s]}var q=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,De=(e,t)=>{var r={};for(var n in e)je.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&q)for(var n of q(e))t.indexOf(n)<0&&Te.call(e,n)&&(r[n]=e[n]);return r};function Ne(e,t,r={}){const n=r,{eventFilter:a=ee}=n,o=De(n,["eventFilter"]);return F(e,k(a,t),o)}var Me=Object.defineProperty,Re=Object.defineProperties,Ce=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,H=(e,t,r)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ie=(e,t)=>{for(var r in t||(t={}))re.call(t,r)&&H(e,r,t[r]);if(C)for(var r of C(t))ne.call(t,r)&&H(e,r,t[r]);return e},Le=(e,t)=>Re(e,Ce(t)),xe=(e,t)=>{var r={};for(var n in e)re.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&C)for(var n of C(e))t.indexOf(n)<0&&ne.call(e,n)&&(r[n]=e[n]);return r};function ze(e,t,r={}){const n=r,{eventFilter:a}=n,o=xe(n,["eventFilter"]),{eventFilter:s,pause:l,resume:i,isActive:c}=Ee(a);return{stop:Ne(e,t,Le(Ie({},o),{eventFilter:s})),pause:l,resume:i,isActive:c}}function $(e){var t;const r=O(e);return(t=r==null?void 0:r.$el)!=null?t:r}const y=T?window:void 0,ae=T?window.document:void 0;T&&window.navigator;T&&window.location;function b(...e){let t,r,n,a;if(Oe(e[0])?([r,n,a]=e,t=y):[t,r,n,a]=e,!t)return I;let o=I;const s=F(()=>$(t),i=>{o(),i&&(i.addEventListener(r,n,a),o=()=>{i.removeEventListener(r,n,a),o=I})},{immediate:!0,flush:"post"}),l=()=>{s(),o()};return D(l),l}function vt(e,t,r={}){const{window:n=y,ignore:a,capture:o=!0,detectIframe:s=!1}=r;if(!n)return;const l=w(!0);let i;const c=u=>{n.clearTimeout(i);const f=$(e),g=u.composedPath();!f||f===u.target||g.includes(f)||!l.value||a&&a.length>0&&a.some(v=>{const _=$(v);return _&&(u.target===_||g.includes(_))})||t(u)},m=[b(n,"click",c,{passive:!0,capture:o}),b(n,"pointerdown",u=>{const f=$(e);l.value=!!f&&!u.composedPath().includes(f)},{passive:!0}),b(n,"pointerup",u=>{if(u.button===0){const f=u.composedPath();u.composedPath=()=>f,i=n.setTimeout(()=>c(u),50)}},{passive:!0}),s&&b(n,"blur",u=>{var f;const g=$(e);((f=document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&!(g!=null&&g.contains(document.activeElement))&&t(u)})].filter(Boolean);return()=>m.forEach(u=>u())}function ke(e,t={}){const{window:r=y}=t,n=Boolean(r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=w(!1),s=()=>{!n||(a||(a=r.matchMedia(e)),o.value=a.matches)};return Fe(()=>{s(),a&&("addEventListener"in a?a.addEventListener("change",s):a.addListener(s),D(()=>{"removeEventListener"in a?a.removeEventListener("change",s):a.removeListener(s)}))}),o}const L=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},x="__vueuse_ssr_handlers__";L[x]=L[x]||{};const Ae=L[x];function oe(e,t){return Ae[e]||t}function We(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const Ve={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function qe(e,t,r,n={}){var a;const{flush:o="pre",deep:s=!0,listenToStorageChanges:l=!0,writeDefaults:i=!0,shallow:c,window:m=y,eventFilter:p,onError:u=d=>{console.error(d)}}=n,f=(c?Z:w)(t);if(!r)try{r=oe("getDefaultStorage",()=>{var d;return(d=y)==null?void 0:d.localStorage})()}catch(d){u(d)}if(!r)return f;const g=O(t),v=We(g),_=(a=n.serializer)!=null?a:Ve[v],{pause:h,resume:S}=ze(f,()=>E(f.value),{flush:o,deep:s,eventFilter:p});return m&&l&&b(m,"storage",N),N(),f;function E(d){try{d==null?r.removeItem(e):r.setItem(e,_.write(d))}catch(P){u(P)}}function j(d){if(!(d&&d.key!==e)){h();try{const P=d?d.newValue:r.getItem(e);return P==null?(i&&g!==null&&r.setItem(e,_.write(g)),g):typeof P!="string"?P:_.read(P)}catch(P){u(P)}finally{S()}}}function N(d){d&&d.key!==e||(f.value=j(d))}}function se(e){return ke("(prefers-color-scheme: dark)",e)}var He=Object.defineProperty,B=Object.getOwnPropertySymbols,Be=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,J=(e,t,r)=>t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Qe=(e,t)=>{for(var r in t||(t={}))Be.call(t,r)&&J(e,r,t[r]);if(B)for(var r of B(t))Je.call(t,r)&&J(e,r,t[r]);return e};function Ue(e={}){const{selector:t="html",attribute:r="class",window:n=y,storage:a,storageKey:o="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:l,emitAuto:i}=e,c=Qe({auto:"",light:"light",dark:"dark"},e.modes||{}),m=se({window:n}),p=R(()=>m.value?"dark":"light"),u=l||(o==null?w("auto"):qe(o,"auto",a,{window:n,listenToStorageChanges:s})),f=R({get(){return u.value==="auto"&&!i?p.value:u.value},set(h){u.value=h}}),g=oe("updateHTMLAttrs",(h,S,E)=>{const j=n==null?void 0:n.document.querySelector(h);if(!!j)if(S==="class"){const N=E.split(/\s/g);Object.values(c).flatMap(d=>(d||"").split(/\s/g)).filter(Boolean).forEach(d=>{N.includes(d)?j.classList.add(d):j.classList.remove(d)})}else j.setAttribute(S,E)});function v(h){var S;const E=h==="auto"?p.value:h;g(t,r,(S=c[E])!=null?S:E)}function _(h){e.onChanged?e.onChanged(h,v):v(h)}return F(f,_,{flush:"post",immediate:!0}),te(()=>_(f.value)),f}var Ge=Object.defineProperty,Ke=Object.defineProperties,Xe=Object.getOwnPropertyDescriptors,Q=Object.getOwnPropertySymbols,Ye=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,U=(e,t,r)=>t in e?Ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,et=(e,t)=>{for(var r in t||(t={}))Ye.call(t,r)&&U(e,r,t[r]);if(Q)for(var r of Q(t))Ze.call(t,r)&&U(e,r,t[r]);return e},tt=(e,t)=>Ke(e,Xe(t));function mt(e={}){const{valueDark:t="dark",valueLight:r="",window:n=y}=e,a=Ue(tt(et({},e),{onChanged:(l,i)=>{var c;e.onChanged?(c=e.onChanged)==null||c.call(e,l==="dark"):i(l)},modes:{dark:t,light:r}})),o=se({window:n});return R({get(){return a.value==="dark"},set(l){l===o.value?a.value="auto":a.value=l?"dark":"light"}})}function gt({document:e=ae}={}){if(!e)return w("visible");const t=w(e.visibilityState);return b(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var G=Object.getOwnPropertySymbols,rt=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable,at=(e,t)=>{var r={};for(var n in e)rt.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&G)for(var n of G(e))t.indexOf(n)<0&&nt.call(e,n)&&(r[n]=e[n]);return r};function wt(e,t,r={}){const n=r,{window:a=y}=n,o=at(n,["window"]);let s;const l=a&&"ResizeObserver"in a,i=()=>{s&&(s.disconnect(),s=void 0)},c=F(()=>$(e),p=>{i(),l&&a&&p&&(s=new ResizeObserver(t),s.observe(p,o))},{immediate:!0,flush:"post"}),m=()=>{i(),c()};return D(m),{isSupported:l,stop:m}}const K=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function _t(e,t={}){const{document:r=ae,autoExit:n=!1}=t,a=e||(r==null?void 0:r.querySelector("html")),o=w(!1);let s=!1,l=K[0];if(!r)s=!1;else for(const v of K)if(v[1]in r){l=v,s=!0;break}const[i,c,m,,p]=l;function u(){return M(this,null,function*(){!s||(r!=null&&r[m]&&(yield r[c]()),o.value=!1)})}function f(){return M(this,null,function*(){if(!s)return;yield u();const v=$(a);v&&(yield v[i](),o.value=!0)})}function g(){return M(this,null,function*(){o.value?yield u():yield f()})}return r&&b(r,p,()=>{o.value=!!(r!=null&&r[m])},!1),n&&D(u),{isSupported:s,isFullscreen:o,enter:f,exit:u,toggle:g}}var X;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(X||(X={}));function ht(e,t,r,n={}){var a,o,s;const{passive:l=!1,eventName:i,deep:c=!1,defaultValue:m}=n,p=z(),u=r||(p==null?void 0:p.emit)||((a=p==null?void 0:p.$emit)==null?void 0:a.bind(p))||((s=(o=p==null?void 0:p.proxy)==null?void 0:o.$emit)==null?void 0:s.bind(p==null?void 0:p.proxy));let f=i;t||(t="modelValue"),f=i||f||`update:${t.toString()}`;const g=()=>ye(e[t])?e[t]:m;if(l){const v=w(g());return F(()=>e[t],_=>v.value=_),F(v,_=>{(_!==e[t]||c)&&u(f,_)},{deep:c}),v}else return R({get(){return g()},set(v){u(f,v)}})}function bt({window:e=y}={}){if(!e)return w(!1);const t=w(e.document.hasFocus());return b(e,"blur",()=>{t.value=!1}),b(e,"focus",()=>{t.value=!0}),t}function yt(e={}){const{window:t=y,initialWidth:r=1/0,initialHeight:n=1/0,listenOrientation:a=!0}=e,o=w(r),s=w(n),l=()=>{t&&(o.value=t.innerWidth,s.value=t.innerHeight)};return l(),te(l),b("resize",l,{passive:!0}),a&&b("orientationchange",l,{passive:!0}),{width:o,height:s}}export{ut as a,it as b,b as c,$ as d,dt as e,ft as f,gt as g,bt as h,T as i,lt as j,ht as k,_t as l,mt as m,pt as n,vt as o,yt as p,ct as r,D as t,wt as u};
