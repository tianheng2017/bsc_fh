import{b as ee}from"./bn.js.92292d6f.js";import{r as E}from"./inherits.66060a12.js";import{r as A}from"./safer-buffer.f1661d34.js";import{m as ie}from"./minimalistic-assert.2f00d150.js";var B={},j={},x={},w={},K;function I(){if(K)return w;K=1;const g=E();function d(f){this._reporterState={obj:null,path:[],options:f||{},errors:[]}}w.Reporter=d,d.prototype.isError=function(a){return a instanceof _},d.prototype.save=function(){const a=this._reporterState;return{obj:a.obj,pathLen:a.path.length}},d.prototype.restore=function(a){const u=this._reporterState;u.obj=a.obj,u.path=u.path.slice(0,a.pathLen)},d.prototype.enterKey=function(a){return this._reporterState.path.push(a)},d.prototype.exitKey=function(a){const u=this._reporterState;u.path=u.path.slice(0,a-1)},d.prototype.leaveKey=function(a,u,i){const s=this._reporterState;this.exitKey(a),s.obj!==null&&(s.obj[u]=i)},d.prototype.path=function(){return this._reporterState.path.join("/")},d.prototype.enterObject=function(){const a=this._reporterState,u=a.obj;return a.obj={},u},d.prototype.leaveObject=function(a){const u=this._reporterState,i=u.obj;return u.obj=a,i},d.prototype.error=function(a){let u;const i=this._reporterState,s=a instanceof _;if(s?u=a:u=new _(i.path.map(function(h){return"["+JSON.stringify(h)+"]"}).join(""),a.message||a,a.stack),!i.options.partial)throw u;return s||i.errors.push(u),u},d.prototype.wrapResult=function(a){const u=this._reporterState;return u.options.partial?{result:this.isError(a)?null:a,errors:u.errors}:a};function _(f,a){this.path=f,this.rethrow(a)}return g(_,Error),_.prototype.rethrow=function(a){if(this.message=a+" at: "+(this.path||"(shallow)"),Error.captureStackTrace&&Error.captureStackTrace(this,_),!this.stack)try{throw new Error(this.message)}catch(u){this.stack=u.stack}return this},w}var v={},M;function S(){if(M)return v;M=1;const g=E(),d=I().Reporter,_=A().Buffer;function f(u,i){if(d.call(this,i),!_.isBuffer(u)){this.error("Input not Buffer");return}this.base=u,this.offset=0,this.length=u.length}g(f,d),v.DecoderBuffer=f,f.isDecoderBuffer=function(i){return i instanceof f?!0:typeof i=="object"&&_.isBuffer(i.base)&&i.constructor.name==="DecoderBuffer"&&typeof i.offset=="number"&&typeof i.length=="number"&&typeof i.save=="function"&&typeof i.restore=="function"&&typeof i.isEmpty=="function"&&typeof i.readUInt8=="function"&&typeof i.skip=="function"&&typeof i.raw=="function"},f.prototype.save=function(){return{offset:this.offset,reporter:d.prototype.save.call(this)}},f.prototype.restore=function(i){const s=new f(this.base);return s.offset=i.offset,s.length=this.offset,this.offset=i.offset,d.prototype.restore.call(this,i.reporter),s},f.prototype.isEmpty=function(){return this.offset===this.length},f.prototype.readUInt8=function(i){return this.offset+1<=this.length?this.base.readUInt8(this.offset++,!0):this.error(i||"DecoderBuffer overrun")},f.prototype.skip=function(i,s){if(!(this.offset+i<=this.length))return this.error(s||"DecoderBuffer overrun");const h=new f(this.base);return h._reporterState=this._reporterState,h.offset=this.offset,h.length=this.offset+i,this.offset+=i,h},f.prototype.raw=function(i){return this.base.slice(i?i.offset:this.offset,this.length)};function a(u,i){if(Array.isArray(u))this.length=0,this.value=u.map(function(s){return a.isEncoderBuffer(s)||(s=new a(s,i)),this.length+=s.length,s},this);else if(typeof u=="number"){if(!(0<=u&&u<=255))return i.error("non-byte EncoderBuffer value");this.value=u,this.length=1}else if(typeof u=="string")this.value=u,this.length=_.byteLength(u);else if(_.isBuffer(u))this.value=u,this.length=u.length;else return i.error("Unsupported type: "+typeof u)}return v.EncoderBuffer=a,a.isEncoderBuffer=function(i){return i instanceof a?!0:typeof i=="object"&&i.constructor.name==="EncoderBuffer"&&typeof i.length=="number"&&typeof i.join=="function"},a.prototype.join=function(i,s){return i||(i=_.alloc(this.length)),s||(s=0),this.length===0||(Array.isArray(this.value)?this.value.forEach(function(h){h.join(i,s),s+=h.length}):(typeof this.value=="number"?i[s]=this.value:typeof this.value=="string"?i.write(this.value,s):_.isBuffer(this.value)&&this.value.copy(i,s),s+=this.length)),i},v}var D,F;function P(){if(F)return D;F=1;const g=I().Reporter,d=S().EncoderBuffer,_=S().DecoderBuffer,f=ie,a=["seq","seqof","set","setof","objid","bool","gentime","utctime","null_","enum","int","objDesc","bitstr","bmpstr","charstr","genstr","graphstr","ia5str","iso646str","numstr","octstr","printstr","t61str","unistr","utf8str","videostr"],u=["key","obj","use","optional","explicit","implicit","def","choice","any","contains"].concat(a),i=["_peekTag","_decodeTag","_use","_decodeStr","_decodeObjid","_decodeTime","_decodeNull","_decodeInt","_decodeBool","_decodeList","_encodeComposite","_encodeStr","_encodeObjid","_encodeTime","_encodeNull","_encodeInt","_encodeBool"];function s(o,e,r){const t={};this._baseState=t,t.name=r,t.enc=o,t.parent=e||null,t.children=null,t.tag=null,t.args=null,t.reverseArgs=null,t.choice=null,t.optional=!1,t.any=!1,t.obj=!1,t.use=null,t.useDecoder=null,t.key=null,t.default=null,t.explicit=null,t.implicit=null,t.contains=null,t.parent||(t.children=[],this._wrap())}D=s;const h=["enc","parent","children","tag","args","reverseArgs","choice","optional","any","obj","use","alteredUse","key","default","explicit","implicit","contains"];return s.prototype.clone=function(){const e=this._baseState,r={};h.forEach(function(n){r[n]=e[n]});const t=new this.constructor(r.parent);return t._baseState=r,t},s.prototype._wrap=function(){const e=this._baseState;u.forEach(function(r){this[r]=function(){const n=new this.constructor(this);return e.children.push(n),n[r].apply(n,arguments)}},this)},s.prototype._init=function(e){const r=this._baseState;f(r.parent===null),e.call(this),r.children=r.children.filter(function(t){return t._baseState.parent===this},this),f.equal(r.children.length,1,"Root node can have only one child")},s.prototype._useArgs=function(e){const r=this._baseState,t=e.filter(function(n){return n instanceof this.constructor},this);e=e.filter(function(n){return!(n instanceof this.constructor)},this),t.length!==0&&(f(r.children===null),r.children=t,t.forEach(function(n){n._baseState.parent=this},this)),e.length!==0&&(f(r.args===null),r.args=e,r.reverseArgs=e.map(function(n){if(typeof n!="object"||n.constructor!==Object)return n;const c={};return Object.keys(n).forEach(function(l){l==(l|0)&&(l|=0);const p=n[l];c[p]=l}),c}))},i.forEach(function(o){s.prototype[o]=function(){const r=this._baseState;throw new Error(o+" not implemented for encoding: "+r.enc)}}),a.forEach(function(o){s.prototype[o]=function(){const r=this._baseState,t=Array.prototype.slice.call(arguments);return f(r.tag===null),r.tag=o,this._useArgs(t),this}}),s.prototype.use=function(e){f(e);const r=this._baseState;return f(r.use===null),r.use=e,this},s.prototype.optional=function(){const e=this._baseState;return e.optional=!0,this},s.prototype.def=function(e){const r=this._baseState;return f(r.default===null),r.default=e,r.optional=!0,this},s.prototype.explicit=function(e){const r=this._baseState;return f(r.explicit===null&&r.implicit===null),r.explicit=e,this},s.prototype.implicit=function(e){const r=this._baseState;return f(r.explicit===null&&r.implicit===null),r.implicit=e,this},s.prototype.obj=function(){const e=this._baseState,r=Array.prototype.slice.call(arguments);return e.obj=!0,r.length!==0&&this._useArgs(r),this},s.prototype.key=function(e){const r=this._baseState;return f(r.key===null),r.key=e,this},s.prototype.any=function(){const e=this._baseState;return e.any=!0,this},s.prototype.choice=function(e){const r=this._baseState;return f(r.choice===null),r.choice=e,this._useArgs(Object.keys(e).map(function(t){return e[t]})),this},s.prototype.contains=function(e){const r=this._baseState;return f(r.use===null),r.contains=e,this},s.prototype._decode=function(e,r){const t=this._baseState;if(t.parent===null)return e.wrapResult(t.children[0]._decode(e,r));let n=t.default,c=!0,l=null;if(t.key!==null&&(l=e.enterKey(t.key)),t.optional){let y=null;if(t.explicit!==null?y=t.explicit:t.implicit!==null?y=t.implicit:t.tag!==null&&(y=t.tag),y===null&&!t.any){const m=e.save();try{t.choice===null?this._decodeGeneric(t.tag,e,r):this._decodeChoice(e,r),c=!0}catch(b){c=!1}e.restore(m)}else if(c=this._peekTag(e,y,t.any),e.isError(c))return c}let p;if(t.obj&&c&&(p=e.enterObject()),c){if(t.explicit!==null){const m=this._decodeTag(e,t.explicit);if(e.isError(m))return m;e=m}const y=e.offset;if(t.use===null&&t.choice===null){let m;t.any&&(m=e.save());const b=this._decodeTag(e,t.implicit!==null?t.implicit:t.tag,t.any);if(e.isError(b))return b;t.any?n=e.raw(m):e=b}if(r&&r.track&&t.tag!==null&&r.track(e.path(),y,e.length,"tagged"),r&&r.track&&t.tag!==null&&r.track(e.path(),e.offset,e.length,"content"),t.any||(t.choice===null?n=this._decodeGeneric(t.tag,e,r):n=this._decodeChoice(e,r)),e.isError(n))return n;if(!t.any&&t.choice===null&&t.children!==null&&t.children.forEach(function(b){b._decode(e,r)}),t.contains&&(t.tag==="octstr"||t.tag==="bitstr")){const m=new _(n);n=this._getUse(t.contains,e._reporterState.obj)._decode(m,r)}}return t.obj&&c&&(n=e.leaveObject(p)),t.key!==null&&(n!==null||c===!0)?e.leaveKey(l,t.key,n):l!==null&&e.exitKey(l),n},s.prototype._decodeGeneric=function(e,r,t){const n=this._baseState;return e==="seq"||e==="set"?null:e==="seqof"||e==="setof"?this._decodeList(r,e,n.args[0],t):/str$/.test(e)?this._decodeStr(r,e,t):e==="objid"&&n.args?this._decodeObjid(r,n.args[0],n.args[1],t):e==="objid"?this._decodeObjid(r,null,null,t):e==="gentime"||e==="utctime"?this._decodeTime(r,e,t):e==="null_"?this._decodeNull(r,t):e==="bool"?this._decodeBool(r,t):e==="objDesc"?this._decodeStr(r,e,t):e==="int"||e==="enum"?this._decodeInt(r,n.args&&n.args[0],t):n.use!==null?this._getUse(n.use,r._reporterState.obj)._decode(r,t):r.error("unknown tag: "+e)},s.prototype._getUse=function(e,r){const t=this._baseState;return t.useDecoder=this._use(e,r),f(t.useDecoder._baseState.parent===null),t.useDecoder=t.useDecoder._baseState.children[0],t.implicit!==t.useDecoder._baseState.implicit&&(t.useDecoder=t.useDecoder.clone(),t.useDecoder._baseState.implicit=t.implicit),t.useDecoder},s.prototype._decodeChoice=function(e,r){const t=this._baseState;let n=null,c=!1;return Object.keys(t.choice).some(function(l){const p=e.save(),y=t.choice[l];try{const m=y._decode(e,r);if(e.isError(m))return!1;n={type:l,value:m},c=!0}catch(m){return e.restore(p),!1}return!0},this),c?n:e.error("Choice not matched")},s.prototype._createEncoderBuffer=function(e){return new d(e,this.reporter)},s.prototype._encode=function(e,r,t){const n=this._baseState;if(n.default!==null&&n.default===e)return;const c=this._encodeValue(e,r,t);if(c!==void 0&&!this._skipDefault(c,r,t))return c},s.prototype._encodeValue=function(e,r,t){const n=this._baseState;if(n.parent===null)return n.children[0]._encode(e,r||new g);let c=null;if(this.reporter=r,n.optional&&e===void 0)if(n.default!==null)e=n.default;else return;let l=null,p=!1;if(n.any)c=this._createEncoderBuffer(e);else if(n.choice)c=this._encodeChoice(e,r);else if(n.contains)l=this._getUse(n.contains,t)._encode(e,r),p=!0;else if(n.children)l=n.children.map(function(y){if(y._baseState.tag==="null_")return y._encode(null,r,e);if(y._baseState.key===null)return r.error("Child should have a key");const m=r.enterKey(y._baseState.key);if(typeof e!="object")return r.error("Child expected, but input is not object");const b=y._encode(e[y._baseState.key],r,e);return r.leaveKey(m),b},this).filter(function(y){return y}),l=this._createEncoderBuffer(l);else if(n.tag==="seqof"||n.tag==="setof"){if(!(n.args&&n.args.length===1))return r.error("Too many args for : "+n.tag);if(!Array.isArray(e))return r.error("seqof/setof, but data is not Array");const y=this.clone();y._baseState.implicit=null,l=this._createEncoderBuffer(e.map(function(m){const b=this._baseState;return this._getUse(b.args[0],e)._encode(m,r)},y))}else n.use!==null?c=this._getUse(n.use,t)._encode(e,r):(l=this._encodePrimitive(n.tag,e),p=!0);if(!n.any&&n.choice===null){const y=n.implicit!==null?n.implicit:n.tag,m=n.implicit===null?"universal":"context";y===null?n.use===null&&r.error("Tag could be omitted only for .use()"):n.use===null&&(c=this._encodeComposite(y,p,m,l))}return n.explicit!==null&&(c=this._encodeComposite(n.explicit,!1,"context",c)),c},s.prototype._encodeChoice=function(e,r){const t=this._baseState,n=t.choice[e.type];return n||f(!1,e.type+" not found in "+JSON.stringify(Object.keys(t.choice))),n._encode(e.value,r)},s.prototype._encodePrimitive=function(e,r){const t=this._baseState;if(/str$/.test(e))return this._encodeStr(r,e);if(e==="objid"&&t.args)return this._encodeObjid(r,t.reverseArgs[0],t.args[1]);if(e==="objid")return this._encodeObjid(r,null,null);if(e==="gentime"||e==="utctime")return this._encodeTime(r,e);if(e==="null_")return this._encodeNull();if(e==="int"||e==="enum")return this._encodeInt(r,t.args&&t.reverseArgs[0]);if(e==="bool")return this._encodeBool(r);if(e==="objDesc")return this._encodeStr(r,e);throw new Error("Unsupported tag: "+e)},s.prototype._isNumstr=function(e){return/^[0-9 ]*$/.test(e)},s.prototype._isPrintstr=function(e){return/^[A-Za-z0-9 '()+,-./:=?]*$/.test(e)},D}var k={},G;function $(){return G||(G=1,function(g){function d(_){const f={};return Object.keys(_).forEach(function(a){(a|0)==a&&(a=a|0);const u=_[a];f[u]=a}),f}g.tagClass={0:"universal",1:"application",2:"context",3:"private"},g.tagClassByName=d(g.tagClass),g.tag={0:"end",1:"bool",2:"int",3:"bitstr",4:"octstr",5:"null_",6:"objid",7:"objDesc",8:"external",9:"real",10:"enum",11:"embed",12:"utf8str",13:"relativeOid",16:"seq",17:"set",18:"numstr",19:"printstr",20:"t61str",21:"videostr",22:"ia5str",23:"utctime",24:"gentime",25:"graphstr",26:"iso646str",27:"genstr",28:"unistr",29:"charstr",30:"bmpstr"},g.tagByName=d(g.tag)}(k)),k}var C,L;function te(){if(L)return C;L=1;const g=E(),d=A().Buffer,_=P(),f=$();function a(h){this.enc="der",this.name=h.name,this.entity=h,this.tree=new u,this.tree._init(h.body)}C=a,a.prototype.encode=function(o,e){return this.tree._encode(o,e).join()};function u(h){_.call(this,"der",h)}g(u,_),u.prototype._encodeComposite=function(o,e,r,t){const n=s(o,e,r,this.reporter);if(t.length<128){const p=d.alloc(2);return p[0]=n,p[1]=t.length,this._createEncoderBuffer([p,t])}let c=1;for(let p=t.length;p>=256;p>>=8)c++;const l=d.alloc(1+1+c);l[0]=n,l[1]=128|c;for(let p=1+c,y=t.length;y>0;p--,y>>=8)l[p]=y&255;return this._createEncoderBuffer([l,t])},u.prototype._encodeStr=function(o,e){if(e==="bitstr")return this._createEncoderBuffer([o.unused|0,o.data]);if(e==="bmpstr"){const r=d.alloc(o.length*2);for(let t=0;t<o.length;t++)r.writeUInt16BE(o.charCodeAt(t),t*2);return this._createEncoderBuffer(r)}else return e==="numstr"?this._isNumstr(o)?this._createEncoderBuffer(o):this.reporter.error("Encoding of string type: numstr supports only digits and space"):e==="printstr"?this._isPrintstr(o)?this._createEncoderBuffer(o):this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark"):/str$/.test(e)?this._createEncoderBuffer(o):e==="objDesc"?this._createEncoderBuffer(o):this.reporter.error("Encoding of string type: "+e+" unsupported")},u.prototype._encodeObjid=function(o,e,r){if(typeof o=="string"){if(!e)return this.reporter.error("string objid given, but no values map found");if(!e.hasOwnProperty(o))return this.reporter.error("objid not found in values map");o=e[o].split(/[\s.]+/g);for(let l=0;l<o.length;l++)o[l]|=0}else if(Array.isArray(o)){o=o.slice();for(let l=0;l<o.length;l++)o[l]|=0}if(!Array.isArray(o))return this.reporter.error("objid() should be either array or string, got: "+JSON.stringify(o));if(!r){if(o[1]>=40)return this.reporter.error("Second objid identifier OOB");o.splice(0,2,o[0]*40+o[1])}let t=0;for(let l=0;l<o.length;l++){let p=o[l];for(t++;p>=128;p>>=7)t++}const n=d.alloc(t);let c=n.length-1;for(let l=o.length-1;l>=0;l--){let p=o[l];for(n[c--]=p&127;(p>>=7)>0;)n[c--]=128|p&127}return this._createEncoderBuffer(n)};function i(h){return h<10?"0"+h:h}u.prototype._encodeTime=function(o,e){let r;const t=new Date(o);return e==="gentime"?r=[i(t.getUTCFullYear()),i(t.getUTCMonth()+1),i(t.getUTCDate()),i(t.getUTCHours()),i(t.getUTCMinutes()),i(t.getUTCSeconds()),"Z"].join(""):e==="utctime"?r=[i(t.getUTCFullYear()%100),i(t.getUTCMonth()+1),i(t.getUTCDate()),i(t.getUTCHours()),i(t.getUTCMinutes()),i(t.getUTCSeconds()),"Z"].join(""):this.reporter.error("Encoding "+e+" time is not supported yet"),this._encodeStr(r,"octstr")},u.prototype._encodeNull=function(){return this._createEncoderBuffer("")},u.prototype._encodeInt=function(o,e){if(typeof o=="string"){if(!e)return this.reporter.error("String int or enum given, but no values map");if(!e.hasOwnProperty(o))return this.reporter.error("Values map doesn't contain: "+JSON.stringify(o));o=e[o]}if(typeof o!="number"&&!d.isBuffer(o)){const n=o.toArray();!o.sign&&n[0]&128&&n.unshift(0),o=d.from(n)}if(d.isBuffer(o)){let n=o.length;o.length===0&&n++;const c=d.alloc(n);return o.copy(c),o.length===0&&(c[0]=0),this._createEncoderBuffer(c)}if(o<128)return this._createEncoderBuffer(o);if(o<256)return this._createEncoderBuffer([0,o]);let r=1;for(let n=o;n>=256;n>>=8)r++;const t=new Array(r);for(let n=t.length-1;n>=0;n--)t[n]=o&255,o>>=8;return t[0]&128&&t.unshift(0),this._createEncoderBuffer(d.from(t))},u.prototype._encodeBool=function(o){return this._createEncoderBuffer(o?255:0)},u.prototype._use=function(o,e){return typeof o=="function"&&(o=o(e)),o._getEncoder("der").tree},u.prototype._skipDefault=function(o,e,r){const t=this._baseState;let n;if(t.default===null)return!1;const c=o.join();if(t.defaultBuffer===void 0&&(t.defaultBuffer=this._encodeValue(t.default,e,r).join()),c.length!==t.defaultBuffer.length)return!1;for(n=0;n<c.length;n++)if(c[n]!==t.defaultBuffer[n])return!1;return!0};function s(h,o,e,r){let t;if(h==="seqof"?h="seq":h==="setof"&&(h="set"),f.tagByName.hasOwnProperty(h))t=f.tagByName[h];else if(typeof h=="number"&&(h|0)===h)t=h;else return r.error("Unknown tag: "+h);return t>=31?r.error("Multi-octet tag encoding unsupported"):(o||(t|=32),t|=f.tagClassByName[e||"universal"]<<6,t)}return C}var q,z;function se(){if(z)return q;z=1;const g=E(),d=te();function _(f){d.call(this,f),this.enc="pem"}return g(_,d),q=_,_.prototype.encode=function(a,u){const s=d.prototype.encode.call(this,a).toString("base64"),h=["-----BEGIN "+u.label+"-----"];for(let o=0;o<s.length;o+=64)h.push(s.slice(o,o+64));return h.push("-----END "+u.label+"-----"),h.join(`
`)},q}var J;function re(){return J||(J=1,function(g){const d=g;d.der=te(),d.pem=se()}(x)),x}var N={},U,V;function ne(){if(V)return U;V=1;const g=E(),d=ee.exports,_=S().DecoderBuffer,f=P(),a=$();function u(o){this.enc="der",this.name=o.name,this.entity=o,this.tree=new i,this.tree._init(o.body)}U=u,u.prototype.decode=function(e,r){return _.isDecoderBuffer(e)||(e=new _(e,r)),this.tree._decode(e,r)};function i(o){f.call(this,"der",o)}g(i,f),i.prototype._peekTag=function(e,r,t){if(e.isEmpty())return!1;const n=e.save(),c=s(e,'Failed to peek tag: "'+r+'"');return e.isError(c)?c:(e.restore(n),c.tag===r||c.tagStr===r||c.tagStr+"of"===r||t)},i.prototype._decodeTag=function(e,r,t){const n=s(e,'Failed to decode tag of "'+r+'"');if(e.isError(n))return n;let c=h(e,n.primitive,'Failed to get length of "'+r+'"');if(e.isError(c))return c;if(!t&&n.tag!==r&&n.tagStr!==r&&n.tagStr+"of"!==r)return e.error('Failed to match tag: "'+r+'"');if(n.primitive||c!==null)return e.skip(c,'Failed to match body of: "'+r+'"');const l=e.save(),p=this._skipUntilEnd(e,'Failed to skip indefinite length body: "'+this.tag+'"');return e.isError(p)?p:(c=e.offset-l.offset,e.restore(l),e.skip(c,'Failed to match body of: "'+r+'"'))},i.prototype._skipUntilEnd=function(e,r){for(;;){const t=s(e,r);if(e.isError(t))return t;const n=h(e,t.primitive,r);if(e.isError(n))return n;let c;if(t.primitive||n!==null?c=e.skip(n):c=this._skipUntilEnd(e,r),e.isError(c))return c;if(t.tagStr==="end")break}},i.prototype._decodeList=function(e,r,t,n){const c=[];for(;!e.isEmpty();){const l=this._peekTag(e,"end");if(e.isError(l))return l;const p=t.decode(e,"der",n);if(e.isError(p)&&l)break;c.push(p)}return c},i.prototype._decodeStr=function(e,r){if(r==="bitstr"){const t=e.readUInt8();return e.isError(t)?t:{unused:t,data:e.raw()}}else if(r==="bmpstr"){const t=e.raw();if(t.length%2===1)return e.error("Decoding of string type: bmpstr length mismatch");let n="";for(let c=0;c<t.length/2;c++)n+=String.fromCharCode(t.readUInt16BE(c*2));return n}else if(r==="numstr"){const t=e.raw().toString("ascii");return this._isNumstr(t)?t:e.error("Decoding of string type: numstr unsupported characters")}else{if(r==="octstr")return e.raw();if(r==="objDesc")return e.raw();if(r==="printstr"){const t=e.raw().toString("ascii");return this._isPrintstr(t)?t:e.error("Decoding of string type: printstr unsupported characters")}else return/str$/.test(r)?e.raw().toString():e.error("Decoding of string type: "+r+" unsupported")}},i.prototype._decodeObjid=function(e,r,t){let n;const c=[];let l=0,p=0;for(;!e.isEmpty();)p=e.readUInt8(),l<<=7,l|=p&127,(p&128)===0&&(c.push(l),l=0);p&128&&c.push(l);const y=c[0]/40|0,m=c[0]%40;if(t?n=c:n=[y,m].concat(c.slice(1)),r){let b=r[n.join(" ")];b===void 0&&(b=r[n.join(".")]),b!==void 0&&(n=b)}return n},i.prototype._decodeTime=function(e,r){const t=e.raw().toString();let n,c,l,p,y,m;if(r==="gentime")n=t.slice(0,4)|0,c=t.slice(4,6)|0,l=t.slice(6,8)|0,p=t.slice(8,10)|0,y=t.slice(10,12)|0,m=t.slice(12,14)|0;else if(r==="utctime")n=t.slice(0,2)|0,c=t.slice(2,4)|0,l=t.slice(4,6)|0,p=t.slice(6,8)|0,y=t.slice(8,10)|0,m=t.slice(10,12)|0,n<70?n=2e3+n:n=1900+n;else return e.error("Decoding "+r+" time is not supported yet");return Date.UTC(n,c-1,l,p,y,m,0)},i.prototype._decodeNull=function(){return null},i.prototype._decodeBool=function(e){const r=e.readUInt8();return e.isError(r)?r:r!==0},i.prototype._decodeInt=function(e,r){const t=e.raw();let n=new d(t);return r&&(n=r[n.toString(10)]||n),n},i.prototype._use=function(e,r){return typeof e=="function"&&(e=e(r)),e._getDecoder("der").tree};function s(o,e){let r=o.readUInt8(e);if(o.isError(r))return r;const t=a.tagClass[r>>6],n=(r&32)===0;if((r&31)===31){let l=r;for(r=0;(l&128)===128;){if(l=o.readUInt8(e),o.isError(l))return l;r<<=7,r|=l&127}}else r&=31;const c=a.tag[r];return{cls:t,primitive:n,tag:r,tagStr:c}}function h(o,e,r){let t=o.readUInt8(r);if(o.isError(t))return t;if(!e&&t===128)return null;if((t&128)===0)return t;const n=t&127;if(n>4)return o.error("length octect is too long");t=0;for(let c=0;c<n;c++){t<<=8;const l=o.readUInt8(r);if(o.isError(l))return l;t|=l}return t}return U}var T,Z;function ce(){if(Z)return T;Z=1;const g=E(),d=A().Buffer,_=ne();function f(a){_.call(this,a),this.enc="pem"}return g(f,_),T=f,f.prototype.decode=function(u,i){const s=u.toString().split(/[\r\n]+/g),h=i.label.toUpperCase(),o=/^-----(BEGIN|END) ([^-]+)-----$/;let e=-1,r=-1;for(let c=0;c<s.length;c++){const l=s[c].match(o);if(l!==null&&l[2]===h)if(e===-1){if(l[1]!=="BEGIN")break;e=c}else{if(l[1]!=="END")break;r=c;break}}if(e===-1||r===-1)throw new Error("PEM section not found for: "+h);const t=s.slice(e+1,r).join("");t.replace(/[^a-z0-9+/=]+/gi,"");const n=d.from(t,"base64");return _.prototype.decode.call(this,n,i)},T}var H;function oe(){return H||(H=1,function(g){const d=g;d.der=ne(),d.pem=ce()}(N)),N}var Y;function ue(){return Y||(Y=1,function(g){const d=re(),_=oe(),f=E(),a=g;a.define=function(s,h){return new u(s,h)};function u(i,s){this.name=i,this.body=s,this.decoders={},this.encoders={}}u.prototype._createNamed=function(s){const h=this.name;function o(e){this._initNamed(e,h)}return f(o,s),o.prototype._initNamed=function(r,t){s.call(this,r,t)},new o(this)},u.prototype._getDecoder=function(s){return s=s||"der",this.decoders.hasOwnProperty(s)||(this.decoders[s]=this._createNamed(_[s])),this.decoders[s]},u.prototype.decode=function(s,h,o){return this._getDecoder(h).decode(s,o)},u.prototype._getEncoder=function(s){return s=s||"der",this.encoders.hasOwnProperty(s)||(this.encoders[s]=this._createNamed(d[s])),this.encoders[s]},u.prototype.encode=function(s,h,o){return this._getEncoder(h).encode(s,o)}}(j)),j}var O={},Q;function le(){return Q||(Q=1,function(g){const d=g;d.Reporter=I().Reporter,d.DecoderBuffer=S().DecoderBuffer,d.EncoderBuffer=S().EncoderBuffer,d.Node=P()}(O)),O}var R={},W;function fe(){return W||(W=1,function(g){const d=g;d._reverse=function(f){const a={};return Object.keys(f).forEach(function(u){(u|0)==u&&(u=u|0);const i=f[u];a[i]=u}),a},d.der=$()}(R)),R}var X;function _e(){return X||(X=1,function(g){const d=g;d.bignum=ee.exports,d.define=ue().define,d.base=le(),d.constants=fe(),d.decoders=oe(),d.encoders=re()}(B)),B}export{_e as r};