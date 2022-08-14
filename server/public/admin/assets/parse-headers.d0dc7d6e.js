var i=function(t){return t.replace(/^\s+|\s+$/g,"")},c=function(t){return Object.prototype.toString.call(t)==="[object Array]"},p=function(t){if(!t)return{};for(var r={},f=i(t).split(`
`),n=0;n<f.length;n++){var s=f[n],o=s.indexOf(":"),e=i(s.slice(0,o)).toLowerCase(),a=i(s.slice(o+1));typeof r[e]=="undefined"?r[e]=a:c(r[e])?r[e].push(a):r[e]=[r[e],a]}return r};export{p};
