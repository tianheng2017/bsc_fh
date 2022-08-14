import{c as E}from"./color.e43c8b30.js";import{r as N}from"./ms.a9ae1d6d.js";var S={},k=function(t,o,r){for(var v=0,f={},l=0;l<r.length;l++)if(t==r.substr(l,t.length))"start"in f||(f.start=l),v++;else if(o==r.substr(l,o.length)&&"start"in f&&(v--,!v))return f.end=l,f.pre=r.substr(0,f.start),f.body=f.end-f.start>1?r.substring(f.start+t.length,f.end):"",f.post=r.slice(f.end+o.length),f},y={exports:{}};function _(t){r.debug=r,r.default=r,r.coerce=c,r.disable=i,r.enable=l,r.enabled=u,r.humanize=N(),Object.keys(t).forEach(function(a){r[a]=t[a]}),r.instances=[],r.names=[],r.skips=[],r.formatters={};function o(a){for(var e=0,n=0;n<a.length;n++)e=(e<<5)-e+a.charCodeAt(n),e|=0;return r.colors[Math.abs(e)%r.colors.length]}r.selectColor=o;function r(a){var e;function n(){if(!!n.enabled){for(var s=arguments.length,C=new Array(s),d=0;d<s;d++)C[d]=arguments[d];var h=n,p=Number(new Date),I=p-(e||p);h.diff=I,h.prev=e,h.curr=p,e=p,C[0]=r.coerce(C[0]),typeof C[0]!="string"&&C.unshift("%O");var F=0;C[0]=C[0].replace(/%([a-zA-Z%])/g,function(b,R){if(b==="%%")return b;F++;var g=r.formatters[R];if(typeof g=="function"){var z=C[F];b=g.call(h,z),C.splice(F,1),F--}return b}),r.formatArgs.call(h,C);var j=h.log||r.log;j.apply(h,C)}}return n.namespace=a,n.enabled=r.enabled(a),n.useColors=r.useColors(),n.color=o(a),n.destroy=v,n.extend=f,typeof r.init=="function"&&r.init(n),r.instances.push(n),n}function v(){var a=r.instances.indexOf(this);return a!==-1?(r.instances.splice(a,1),!0):!1}function f(a,e){return r(this.namespace+(typeof e=="undefined"?":":e)+a)}function l(a){r.save(a),r.names=[],r.skips=[];var e,n=(typeof a=="string"?a:"").split(/[\s,]+/),s=n.length;for(e=0;e<s;e++)!n[e]||(a=n[e].replace(/\*/g,".*?"),a[0]==="-"?r.skips.push(new RegExp("^"+a.substr(1)+"$")):r.names.push(new RegExp("^"+a+"$")));for(e=0;e<r.instances.length;e++){var C=r.instances[e];C.enabled=r.enabled(C.namespace)}}function i(){r.enable("")}function u(a){if(a[a.length-1]==="*")return!0;var e,n;for(e=0,n=r.skips.length;e<n;e++)if(r.skips[e].test(a))return!1;for(e=0,n=r.names.length;e<n;e++)if(r.names[e].test(a))return!0;return!1}function c(a){return a instanceof Error?a.stack||a.message:a}return r.enable(r.load()),r}var B=_;(function(t,o){function r(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?r=function(s){return typeof s}:r=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},r(e)}o.log=l,o.formatArgs=f,o.save=i,o.load=u,o.useColors=v,o.storage=c(),o.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function v(){return typeof window!="undefined"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document!="undefined"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window!="undefined"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function f(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!!this.useColors){var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var s=0,C=0;e[0].replace(/%[a-zA-Z%]/g,function(d){d!=="%%"&&(s++,d==="%c"&&(C=s))}),e.splice(C,0,n)}}function l(){var e;return(typeof console=="undefined"?"undefined":r(console))==="object"&&console.log&&(e=console).log.apply(e,arguments)}function i(e){try{e?o.storage.setItem("debug",e):o.storage.removeItem("debug")}catch(n){}}function u(){var e;try{e=o.storage.getItem("debug")}catch(n){}return!e&&typeof process!="undefined"&&"env"in process&&(e=process.env.DEBUG),e}function c(){try{return localStorage}catch(e){}}t.exports=B(o);var a=t.exports.formatters;a.j=function(e){try{return JSON.stringify(e)}catch(n){return"[UnexpectedJSONParseError]: "+n.message}}})(y,y.exports);var D=k,m=y.exports("css-color-function:parse"),M=L;function L(t){typeof t!="string"&&(t=t.toString()),m("string %s",t);function o(e){var n=e.exec(t);if(!!n)return t=t.slice(n[0].length),n.slice(1)}function r(){o(/^\s+/)}function v(){var e=o(/^\)/);if(!!e)return m("rparen"),e}function f(){var e=o(/^([\+\-\*])/);if(!!e){var n={};return n.type="modifier",n.value=e[0],m("modifier %o",n),n}}function l(){var e=o(/^([^\)\s]+)/);if(!!e){var n={};return n.type="number",n.value=e[0],m("number %o",n),n}}function i(){for(var e=[],n;n=f()||a()||l();)e.push(n),r();return m("args %o",e),e}function u(){var e=o(/^(\w+)\(/);if(!!e){r();var n={};return n.type="function",n.name=e[0],n.arguments=i(),v(),m("adjuster %o",n),n}}function c(){var e={};e.type="color";var n=o(/([^\)\s]+)/)[0];if(n.indexOf("(")!=-1){var s=o(/([^\)]*?\))/)[0];n=n+s}return e.value=n,r(),e}function a(){if(!!t.match(/^color\(/)){var e=D("(",")",t);if(!e)throw new SyntaxError("Missing closing parenthese for '"+t+"'");if(e.body==="")throw new SyntaxError("color() function cannot be empty");t=e.body,r();var n={};n.type="function",n.name="color",n.arguments=[a()||c()],m("function arguments %o",n.arguments);for(var s;s=u();)n.arguments.push(s),r();return t=e.post,r(),m("function %o",n),n}}return a()}var O={};(function(t){var o=E;t.red=r("red"),t.blue=r("blue"),t.green=r("green"),t.alpha=t.a=r("alpha"),t.rgb=function(){},t.hue=t.h=v("hue"),t.saturation=t.s=v("saturation"),t.lightness=t.l=v("lightness"),t.whiteness=t.w=v("whiteness"),t.blackness=t.b=v("blackness"),t.blend=function(i,u){var c=i.alpha();i.alpha(1);var a=new o(u[0].value),e=1-parseInt(u[1].value,10)/100;i.mix(a,e).alpha(c)},t.tint=function(i,u){u.unshift({type:"argument",value:"white"}),t.blend(i,u)},t.shade=function(i,u){u.unshift({type:"argument",value:"black"}),t.blend(i,u)},t.contrast=function(i,u){u.length==0&&u.push({type:"argument",value:"100%"});var c=1-parseInt(u[0].value,10)/100,a=i.luminosity()<.5?new o({h:i.hue(),w:100,b:0}):new o({h:i.hue(),w:0,b:100}),e=a,n=4.5;if(i.contrast(a)>n){var e=l(n,i,a),s=e.alpha();e.alpha(1),e.mix(a,c).alpha(s)}i.hwb(e.hwb())};function r(i){return function(u,c){var a;c[0].type=="modifier"&&(a=c.shift().value);var e=c[0].value;e.indexOf("%")!=-1?(e=parseInt(e,10)/100,a?a!="*"&&(e=u[i]()*e):e=e*(i=="alpha"?1:255)):e=Number(e),u[i](f(u[i](),e,a))}}function v(i){return function(u,c){var a;c[0].type=="modifier"&&(a=c.shift().value);var e=parseFloat(c[0].value,10);u[i](f(u[i](),e,a))}}function f(i,u,c){switch(c){case"+":return i+u;case"-":return i-u;case"*":return i*u;default:return u}}function l(i,u,c){u.hue();for(var a=u.clone(),e=u.whiteness(),n=u.blackness(),s=c.whiteness(),C=c.blackness();Math.abs(e-s)>1||Math.abs(n-C)>1;){var d=Math.round((s+e)/2),h=Math.round((C+n)/2);a.whiteness(d),a.blackness(h),a.contrast(u)>i?(s=d,C=h):(e=d,n=h)}return a}})(O);var U=k,G=E,J=M,A=O,W=$;function $(t){var o=t.indexOf("color(");if(o==-1)return t;if(t=t.slice(o),t=U("(",")",t),!t)throw new SyntaxError("Missing closing parenthese for '"+t+"'");var r=J("color("+t.body+")");return w(r)+$(t.post)}function w(t){var o=new G(t.arguments[0].type=="function"?w(t.arguments[0]):t.arguments[0].value),r=t.arguments.slice(1);return r.forEach(function(v){var f=v.name;if(!A[f])throw new Error("Unknown <color-adjuster> '"+f+"'");v.arguments.forEach(function(l){l.type=="function"&&l.name=="color"&&(l.value=w(l),l.type="color",delete l.name)}),A[f](o,v.arguments)}),o.rgbString()}var Z=W,q=M;S.convert=Z;S.parse=q;export{S as l};