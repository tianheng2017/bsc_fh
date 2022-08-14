import{l as x}from"./web3-core.2b55c245.js";import{l as A}from"./web3-core-helpers.1fd5b4bd.js";import{l as H}from"./web3-core-subscriptions.e36166d3.js";import{l as S}from"./web3-core-method.621da27b.js";import{l as M}from"./web3-utils.4b7ab516.js";import{l as q}from"./web3-net.1c4b8581.js";import{l as I}from"./web3-eth-ens.adb9ce83.js";import{l as R}from"./web3-eth-personal.74c3babf.js";import{l as O}from"./web3-eth-contract.278927df.js";import{l as E}from"./web3-eth-iban.17b5d44a.js";import{l as j}from"./web3-eth-accounts.4ddd5ab8.js";import{l as L}from"./web3-eth-abi.7549ebed.js";var $=function(o){var e=this,l;return this.net.getId().then(function(c){return l=c,e.getBlock(0)}).then(function(c){var s="private";return c.hash==="0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3"&&l===1&&(s="main"),c.hash==="0x41941023680923e0fe4d74a34bdac8141f2540e3ae90623718e47d66d1ca4a2d"&&l===3&&(s="ropsten"),c.hash==="0x6341fd3daf94b748c72ced5a5b26028f2474f5f00d824504e4fa37a75767e177"&&l===4&&(s="rinkeby"),c.hash==="0xbf7e331f7f7c1dd2e05159666b3bf8bc7a8a3a9eb1d518969eab529dd9b88c1a"&&l===5&&(s="goerli"),c.hash==="0xa3c565fc15c7478862d50ccd6561e3c06b24cc509bf388941c25ea985ce32cb9"&&l===42&&(s="kovan"),typeof o=="function"&&o(null,s),s}).catch(function(c){if(typeof o=="function")o(c);else throw c})},D=$,P=x,W=A,U=H.subscriptions,a=S,i=M,V=q,G=I,K=R,y=O,z=E,J=j,C=L,Q=D,r=W.formatters,X=function(o){return typeof o[0]=="string"&&o[0].indexOf("0x")===0?"eth_getBlockByHash":"eth_getBlockByNumber"},Y=function(o){return typeof o[0]=="string"&&o[0].indexOf("0x")===0?"eth_getTransactionByBlockHashAndIndex":"eth_getTransactionByBlockNumberAndIndex"},Z=function(o){return typeof o[0]=="string"&&o[0].indexOf("0x")===0?"eth_getUncleByBlockHashAndIndex":"eth_getUncleByBlockNumberAndIndex"},tt=function(o){return typeof o[0]=="string"&&o[0].indexOf("0x")===0?"eth_getBlockTransactionCountByHash":"eth_getBlockTransactionCountByNumber"},et=function(o){return typeof o[0]=="string"&&o[0].indexOf("0x")===0?"eth_getUncleCountByBlockHash":"eth_getUncleCountByBlockNumber"},w=function(){var e=this;P.packageInit(this,arguments);var l=this.setRequestManager;this.setRequestManager=function(t){return l(t),e.net.setRequestManager(t),e.personal.setRequestManager(t),e.accounts.setRequestManager(t),e.Contract._requestManager=e._requestManager,e.Contract.currentProvider=e._provider,!0};var c=this.setProvider;this.setProvider=function(){c.apply(e,arguments),e.setRequestManager(e._requestManager),e.ens._detectedAddress=null,e.ens._lastSyncCheck=null};var s=!1,m=null,f="latest",h=50,d=24,g=750,b=1e3,k=10,_=100,F,B,v;Object.defineProperty(this,"handleRevert",{get:function(){return s},set:function(t){s=t,e.Contract.handleRevert=s,u.forEach(function(n){n.handleRevert=s})},enumerable:!0}),Object.defineProperty(this,"defaultCommon",{get:function(){return v},set:function(t){v=t,e.Contract.defaultCommon=v,u.forEach(function(n){n.defaultCommon=v})},enumerable:!0}),Object.defineProperty(this,"defaultHardfork",{get:function(){return B},set:function(t){B=t,e.Contract.defaultHardfork=B,u.forEach(function(n){n.defaultHardfork=B})},enumerable:!0}),Object.defineProperty(this,"defaultChain",{get:function(){return F},set:function(t){F=t,e.Contract.defaultChain=F,u.forEach(function(n){n.defaultChain=F})},enumerable:!0}),Object.defineProperty(this,"transactionPollingTimeout",{get:function(){return g},set:function(t){g=t,e.Contract.transactionPollingTimeout=g,u.forEach(function(n){n.transactionPollingTimeout=g})},enumerable:!0}),Object.defineProperty(this,"transactionPollingInterval",{get:function(){return b},set:function(t){b=t,e.Contract.transactionPollingInterval=b,u.forEach(function(n){n.transactionPollingInterval=b})},enumerable:!0}),Object.defineProperty(this,"transactionConfirmationBlocks",{get:function(){return d},set:function(t){d=t,e.Contract.transactionConfirmationBlocks=d,u.forEach(function(n){n.transactionConfirmationBlocks=d})},enumerable:!0}),Object.defineProperty(this,"transactionBlockTimeout",{get:function(){return h},set:function(t){h=t,e.Contract.transactionBlockTimeout=h,u.forEach(function(n){n.transactionBlockTimeout=h})},enumerable:!0}),Object.defineProperty(this,"blockHeaderTimeout",{get:function(){return k},set:function(t){k=t,e.Contract.blockHeaderTimeout=k,u.forEach(function(n){n.blockHeaderTimeout=k})},enumerable:!0}),Object.defineProperty(this,"defaultAccount",{get:function(){return m},set:function(t){return t&&(m=i.toChecksumAddress(r.inputAddressFormatter(t))),e.Contract.defaultAccount=m,e.personal.defaultAccount=m,u.forEach(function(n){n.defaultAccount=m}),t},enumerable:!0}),Object.defineProperty(this,"defaultBlock",{get:function(){return f},set:function(t){return f=t,e.Contract.defaultBlock=f,e.personal.defaultBlock=f,u.forEach(function(n){n.defaultBlock=f}),t},enumerable:!0}),Object.defineProperty(this,"maxListenersWarningThreshold",{get:function(){return _},set:function(t){e.currentProvider&&e.currentProvider.setMaxListeners&&(_=t,e.currentProvider.setMaxListeners(t))},enumerable:!0}),this.clearSubscriptions=e._requestManager.clearSubscriptions.bind(e._requestManager),this.removeSubscriptionById=e._requestManager.removeSubscription.bind(e._requestManager),this.net=new V(this),this.net.getNetworkType=Q.bind(this),this.accounts=new J(this),this.personal=new K(this),this.personal.defaultAccount=this.defaultAccount,this.maxListenersWarningThreshold=_;var T=this,p=function(){y.apply(this,arguments);var n=this,N=T.setProvider;T.setProvider=function(){N.apply(T,arguments),P.packageInit(n,[T])}};p.setProvider=function(){y.setProvider.apply(this,arguments)},p.prototype=Object.create(y.prototype),p.prototype.constructor=p,this.Contract=p,this.Contract.defaultAccount=this.defaultAccount,this.Contract.defaultBlock=this.defaultBlock,this.Contract.transactionBlockTimeout=this.transactionBlockTimeout,this.Contract.transactionConfirmationBlocks=this.transactionConfirmationBlocks,this.Contract.transactionPollingTimeout=this.transactionPollingTimeout,this.Contract.transactionPollingInterval=this.transactionPollingInterval,this.Contract.blockHeaderTimeout=this.blockHeaderTimeout,this.Contract.handleRevert=this.handleRevert,this.Contract._requestManager=this._requestManager,this.Contract._ethAccounts=this.accounts,this.Contract.currentProvider=this._requestManager.provider,this.Iban=z,this.abi=C,this.ens=new G(this);var u=[new a({name:"getNodeInfo",call:"web3_clientVersion"}),new a({name:"getProtocolVersion",call:"eth_protocolVersion",params:0}),new a({name:"getCoinbase",call:"eth_coinbase",params:0}),new a({name:"isMining",call:"eth_mining",params:0}),new a({name:"getHashrate",call:"eth_hashrate",params:0,outputFormatter:i.hexToNumber}),new a({name:"isSyncing",call:"eth_syncing",params:0,outputFormatter:r.outputSyncingFormatter}),new a({name:"getGasPrice",call:"eth_gasPrice",params:0,outputFormatter:r.outputBigNumberFormatter}),new a({name:"getFeeHistory",call:"eth_feeHistory",params:3,inputFormatter:[i.numberToHex,r.inputBlockNumberFormatter,null]}),new a({name:"getAccounts",call:"eth_accounts",params:0,outputFormatter:i.toChecksumAddress}),new a({name:"getBlockNumber",call:"eth_blockNumber",params:0,outputFormatter:i.hexToNumber}),new a({name:"getBalance",call:"eth_getBalance",params:2,inputFormatter:[r.inputAddressFormatter,r.inputDefaultBlockNumberFormatter],outputFormatter:r.outputBigNumberFormatter}),new a({name:"getStorageAt",call:"eth_getStorageAt",params:3,inputFormatter:[r.inputAddressFormatter,i.numberToHex,r.inputDefaultBlockNumberFormatter]}),new a({name:"getCode",call:"eth_getCode",params:2,inputFormatter:[r.inputAddressFormatter,r.inputDefaultBlockNumberFormatter]}),new a({name:"getBlock",call:X,params:2,inputFormatter:[r.inputBlockNumberFormatter,function(t){return!!t}],outputFormatter:r.outputBlockFormatter}),new a({name:"getUncle",call:Z,params:2,inputFormatter:[r.inputBlockNumberFormatter,i.numberToHex],outputFormatter:r.outputBlockFormatter}),new a({name:"getBlockTransactionCount",call:tt,params:1,inputFormatter:[r.inputBlockNumberFormatter],outputFormatter:i.hexToNumber}),new a({name:"getBlockUncleCount",call:et,params:1,inputFormatter:[r.inputBlockNumberFormatter],outputFormatter:i.hexToNumber}),new a({name:"getTransaction",call:"eth_getTransactionByHash",params:1,inputFormatter:[null],outputFormatter:r.outputTransactionFormatter}),new a({name:"getTransactionFromBlock",call:Y,params:2,inputFormatter:[r.inputBlockNumberFormatter,i.numberToHex],outputFormatter:r.outputTransactionFormatter}),new a({name:"getTransactionReceipt",call:"eth_getTransactionReceipt",params:1,inputFormatter:[null],outputFormatter:r.outputTransactionReceiptFormatter}),new a({name:"getTransactionCount",call:"eth_getTransactionCount",params:2,inputFormatter:[r.inputAddressFormatter,r.inputDefaultBlockNumberFormatter],outputFormatter:i.hexToNumber}),new a({name:"sendSignedTransaction",call:"eth_sendRawTransaction",params:1,inputFormatter:[null],abiCoder:C}),new a({name:"signTransaction",call:"eth_signTransaction",params:1,inputFormatter:[r.inputTransactionFormatter]}),new a({name:"sendTransaction",call:"eth_sendTransaction",params:1,inputFormatter:[r.inputTransactionFormatter],abiCoder:C}),new a({name:"sign",call:"eth_sign",params:2,inputFormatter:[r.inputSignFormatter,r.inputAddressFormatter],transformPayload:function(t){return t.params.reverse(),t}}),new a({name:"call",call:"eth_call",params:2,inputFormatter:[r.inputCallFormatter,r.inputDefaultBlockNumberFormatter],abiCoder:C}),new a({name:"estimateGas",call:"eth_estimateGas",params:1,inputFormatter:[r.inputCallFormatter],outputFormatter:i.hexToNumber}),new a({name:"submitWork",call:"eth_submitWork",params:3}),new a({name:"getWork",call:"eth_getWork",params:0}),new a({name:"getPastLogs",call:"eth_getLogs",params:1,inputFormatter:[r.inputLogFormatter],outputFormatter:r.outputLogFormatter}),new a({name:"getChainId",call:"eth_chainId",params:0,outputFormatter:i.hexToNumber}),new a({name:"requestAccounts",call:"eth_requestAccounts",params:0,outputFormatter:i.toChecksumAddress}),new a({name:"getProof",call:"eth_getProof",params:3,inputFormatter:[r.inputAddressFormatter,r.inputStorageKeysFormatter,r.inputDefaultBlockNumberFormatter],outputFormatter:r.outputProofFormatter}),new a({name:"getPendingTransactions",call:"eth_pendingTransactions",params:0,outputFormatter:r.outputTransactionFormatter}),new a({name:"createAccessList",call:"eth_createAccessList",params:2,inputFormatter:[r.inputTransactionFormatter,r.inputDefaultBlockNumberFormatter]}),new U({name:"subscribe",type:"eth",subscriptions:{newBlockHeaders:{subscriptionName:"newHeads",params:0,outputFormatter:r.outputBlockFormatter},pendingTransactions:{subscriptionName:"newPendingTransactions",params:0},logs:{params:1,inputFormatter:[r.inputLogFormatter],outputFormatter:r.outputLogFormatter,subscriptionHandler:function(t){t.removed?this.emit("changed",t):this.emit("data",t),typeof this.callback=="function"&&this.callback(null,t,this)}},syncing:{params:0,outputFormatter:r.outputSyncingFormatter,subscriptionHandler:function(t){var n=this;this._isSyncing!==!0?(this._isSyncing=!0,this.emit("changed",n._isSyncing),typeof this.callback=="function"&&this.callback(null,n._isSyncing,this),setTimeout(function(){n.emit("data",t),typeof n.callback=="function"&&n.callback(null,t,n)},0)):(this.emit("data",t),typeof n.callback=="function"&&this.callback(null,t,this),clearTimeout(this._isSyncingTimeout),this._isSyncingTimeout=setTimeout(function(){t.currentBlock>t.highestBlock-200&&(n._isSyncing=!1,n.emit("changed",n._isSyncing),typeof n.callback=="function"&&n.callback(null,n._isSyncing,n))},500))}}}})];u.forEach(function(t){t.attachToObject(e),t.setRequestManager(e._requestManager,e.accounts),t.defaultBlock=e.defaultBlock,t.defaultAccount=e.defaultAccount,t.transactionBlockTimeout=e.transactionBlockTimeout,t.transactionConfirmationBlocks=e.transactionConfirmationBlocks,t.transactionPollingTimeout=e.transactionPollingTimeout,t.transactionPollingInterval=e.transactionPollingInterval,t.handleRevert=e.handleRevert})};P.addProviders(w);var ht=w;export{ht as l};
