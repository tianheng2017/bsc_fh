import{e as v}from"./eventemitter3.3dc09485.js";var m=v.exports,o=function(t){var n,i,e=new Promise(function(){n=arguments[0],i=arguments[1]});if(t)return{resolve:n,reject:i,eventEmitter:e};var r=new m;return e._events=r._events,e.emit=r.emit,e.on=r.on,e.once=r.once,e.off=r.off,e.listeners=r.listeners,e.addListener=r.addListener,e.removeListener=r.removeListener,e.removeAllListeners=r.removeAllListeners,{resolve:n,reject:i,eventEmitter:e}};o.resolve=function(s){var t=o(!0);return t.resolve(s),t.eventEmitter};var a=o;export{a as l};
