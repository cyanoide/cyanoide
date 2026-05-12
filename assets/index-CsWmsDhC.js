(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function fv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var If={exports:{}},Eo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function QS(){if(n_)return Eo;n_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Eo.Fragment=e,Eo.jsx=i,Eo.jsxs=i,Eo}var i_;function JS(){return i_||(i_=1,If.exports=QS()),If.exports}var Qt=JS(),Ff={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function $S(){if(a_)return ie;a_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),M=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=M&&N[M]||N["@@iterator"],typeof N=="function"?N:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,x={};function g(N,nt,xt){this.props=N,this.context=nt,this.refs=x,this.updater=xt||A}g.prototype.isReactComponent={},g.prototype.setState=function(N,nt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,nt,"setState")},g.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function B(){}B.prototype=g.prototype;function L(N,nt,xt){this.props=N,this.context=nt,this.refs=x,this.updater=xt||A}var w=L.prototype=new B;w.constructor=L,b(w,g.prototype),w.isPureReactComponent=!0;var q=Array.isArray;function H(){}var P={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function D(N,nt,xt){var K=xt.ref;return{$$typeof:o,type:N,key:nt,ref:K!==void 0?K:null,props:xt}}function C(N,nt){return D(N.type,nt,N.props)}function G(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function lt(N){var nt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xt){return nt[xt]})}var st=/\/+/g;function gt(N,nt){return typeof N=="object"&&N!==null&&N.key!=null?lt(""+N.key):nt.toString(36)}function dt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(H,H):(N.status="pending",N.then(function(nt){N.status==="pending"&&(N.status="fulfilled",N.value=nt)},function(nt){N.status==="pending"&&(N.status="rejected",N.reason=nt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function O(N,nt,xt,K,ct){var yt=typeof N;(yt==="undefined"||yt==="boolean")&&(N=null);var St=!1;if(N===null)St=!0;else switch(yt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(N.$$typeof){case o:case e:St=!0;break;case v:return St=N._init,O(St(N._payload),nt,xt,K,ct)}}if(St)return ct=ct(N),St=K===""?"."+gt(N,0):K,q(ct)?(xt="",St!=null&&(xt=St.replace(st,"$&/")+"/"),O(ct,nt,xt,"",function(Zt){return Zt})):ct!=null&&(G(ct)&&(ct=C(ct,xt+(ct.key==null||N&&N.key===ct.key?"":(""+ct.key).replace(st,"$&/")+"/")+St)),nt.push(ct)),1;St=0;var It=K===""?".":K+":";if(q(N))for(var jt=0;jt<N.length;jt++)K=N[jt],yt=It+gt(K,jt),St+=O(K,nt,xt,yt,ct);else if(jt=y(N),typeof jt=="function")for(N=jt.call(N),jt=0;!(K=N.next()).done;)K=K.value,yt=It+gt(K,jt++),St+=O(K,nt,xt,yt,ct);else if(yt==="object"){if(typeof N.then=="function")return O(dt(N),nt,xt,K,ct);throw nt=String(N),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return St}function Z(N,nt,xt){if(N==null)return N;var K=[],ct=0;return O(N,K,"","",function(yt){return nt.call(xt,yt,ct++)}),K}function j(N){if(N._status===-1){var nt=N._result;nt=nt(),nt.then(function(xt){(N._status===0||N._status===-1)&&(N._status=1,N._result=xt)},function(xt){(N._status===0||N._status===-1)&&(N._status=2,N._result=xt)}),N._status===-1&&(N._status=0,N._result=nt)}if(N._status===1)return N._result.default;throw N._result}var vt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Et={map:Z,forEach:function(N,nt,xt){Z(N,function(){nt.apply(this,arguments)},xt)},count:function(N){var nt=0;return Z(N,function(){nt++}),nt},toArray:function(N){return Z(N,function(nt){return nt})||[]},only:function(N){if(!G(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ie.Activity=S,ie.Children=Et,ie.Component=g,ie.Fragment=i,ie.Profiler=l,ie.PureComponent=L,ie.StrictMode=r,ie.Suspense=m,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ie.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},ie.cache=function(N){return function(){return N.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(N,nt,xt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var K=b({},N.props),ct=N.key;if(nt!=null)for(yt in nt.key!==void 0&&(ct=""+nt.key),nt)!V.call(nt,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&nt.ref===void 0||(K[yt]=nt[yt]);var yt=arguments.length-2;if(yt===1)K.children=xt;else if(1<yt){for(var St=Array(yt),It=0;It<yt;It++)St[It]=arguments[It+2];K.children=St}return D(N.type,ct,K)},ie.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ie.createElement=function(N,nt,xt){var K,ct={},yt=null;if(nt!=null)for(K in nt.key!==void 0&&(yt=""+nt.key),nt)V.call(nt,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(ct[K]=nt[K]);var St=arguments.length-2;if(St===1)ct.children=xt;else if(1<St){for(var It=Array(St),jt=0;jt<St;jt++)It[jt]=arguments[jt+2];ct.children=It}if(N&&N.defaultProps)for(K in St=N.defaultProps,St)ct[K]===void 0&&(ct[K]=St[K]);return D(N,yt,ct)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(N){return{$$typeof:d,render:N}},ie.isValidElement=G,ie.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:j}},ie.memo=function(N,nt){return{$$typeof:p,type:N,compare:nt===void 0?null:nt}},ie.startTransition=function(N){var nt=P.T,xt={};P.T=xt;try{var K=N(),ct=P.S;ct!==null&&ct(xt,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(H,vt)}catch(yt){vt(yt)}finally{nt!==null&&xt.types!==null&&(nt.types=xt.types),P.T=nt}},ie.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ie.use=function(N){return P.H.use(N)},ie.useActionState=function(N,nt,xt){return P.H.useActionState(N,nt,xt)},ie.useCallback=function(N,nt){return P.H.useCallback(N,nt)},ie.useContext=function(N){return P.H.useContext(N)},ie.useDebugValue=function(){},ie.useDeferredValue=function(N,nt){return P.H.useDeferredValue(N,nt)},ie.useEffect=function(N,nt){return P.H.useEffect(N,nt)},ie.useEffectEvent=function(N){return P.H.useEffectEvent(N)},ie.useId=function(){return P.H.useId()},ie.useImperativeHandle=function(N,nt,xt){return P.H.useImperativeHandle(N,nt,xt)},ie.useInsertionEffect=function(N,nt){return P.H.useInsertionEffect(N,nt)},ie.useLayoutEffect=function(N,nt){return P.H.useLayoutEffect(N,nt)},ie.useMemo=function(N,nt){return P.H.useMemo(N,nt)},ie.useOptimistic=function(N,nt){return P.H.useOptimistic(N,nt)},ie.useReducer=function(N,nt,xt){return P.H.useReducer(N,nt,xt)},ie.useRef=function(N){return P.H.useRef(N)},ie.useState=function(N){return P.H.useState(N)},ie.useSyncExternalStore=function(N,nt,xt){return P.H.useSyncExternalStore(N,nt,xt)},ie.useTransition=function(){return P.H.useTransition()},ie.version="19.2.6",ie}var r_;function dd(){return r_||(r_=1,Ff.exports=$S()),Ff.exports}var He=dd();const tx=fv(He);var Hf={exports:{}},To={},Gf={exports:{}},Vf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function ex(){return s_||(s_=1,(function(o){function e(O,Z){var j=O.length;O.push(Z);t:for(;0<j;){var vt=j-1>>>1,Et=O[vt];if(0<l(Et,Z))O[vt]=Z,O[j]=Et,j=vt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var Z=O[0],j=O.pop();if(j!==Z){O[0]=j;t:for(var vt=0,Et=O.length,N=Et>>>1;vt<N;){var nt=2*(vt+1)-1,xt=O[nt],K=nt+1,ct=O[K];if(0>l(xt,j))K<Et&&0>l(ct,xt)?(O[vt]=ct,O[K]=j,vt=K):(O[vt]=xt,O[nt]=j,vt=nt);else if(K<Et&&0>l(ct,j))O[vt]=ct,O[K]=j,vt=K;else break t}}return Z}function l(O,Z){var j=O.sortIndex-Z.sortIndex;return j!==0?j:O.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,S=null,M=3,y=!1,A=!1,b=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(O){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=O)r(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function q(O){if(b=!1,w(O),!A)if(i(m)!==null)A=!0,H||(H=!0,lt());else{var Z=i(p);Z!==null&&dt(q,Z.startTime-O)}}var H=!1,P=-1,V=5,D=-1;function C(){return x?!0:!(o.unstable_now()-D<V)}function G(){if(x=!1,H){var O=o.unstable_now();D=O;var Z=!0;try{t:{A=!1,b&&(b=!1,B(P),P=-1),y=!0;var j=M;try{e:{for(w(O),S=i(m);S!==null&&!(S.expirationTime>O&&C());){var vt=S.callback;if(typeof vt=="function"){S.callback=null,M=S.priorityLevel;var Et=vt(S.expirationTime<=O);if(O=o.unstable_now(),typeof Et=="function"){S.callback=Et,w(O),Z=!0;break e}S===i(m)&&r(m),w(O)}else r(m);S=i(m)}if(S!==null)Z=!0;else{var N=i(p);N!==null&&dt(q,N.startTime-O),Z=!1}}break t}finally{S=null,M=j,y=!1}Z=void 0}}finally{Z?lt():H=!1}}}var lt;if(typeof L=="function")lt=function(){L(G)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,gt=st.port2;st.port1.onmessage=G,lt=function(){gt.postMessage(null)}}else lt=function(){g(G,0)};function dt(O,Z){P=g(function(){O(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return M},o.unstable_next=function(O){switch(M){case 1:case 2:case 3:var Z=3;break;default:Z=M}var j=M;M=Z;try{return O()}finally{M=j}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(O,Z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var j=M;M=O;try{return Z()}finally{M=j}},o.unstable_scheduleCallback=function(O,Z,j){var vt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?vt+j:vt):j=vt,O){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=j+Et,O={id:v++,callback:Z,priorityLevel:O,startTime:j,expirationTime:Et,sortIndex:-1},j>vt?(O.sortIndex=j,e(p,O),i(m)===null&&O===i(p)&&(b?(B(P),P=-1):b=!0,dt(q,j-vt))):(O.sortIndex=Et,e(m,O),A||y||(A=!0,H||(H=!0,lt()))),O},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(O){var Z=M;return function(){var j=M;M=Z;try{return O.apply(this,arguments)}finally{M=j}}}})(Vf)),Vf}var o_;function nx(){return o_||(o_=1,Gf.exports=ex()),Gf.exports}var Xf={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function ix(){if(l_)return bn;l_=1;var o=dd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:p,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},bn.flushSync=function(m){var p=h.T,v=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=v,r.d.f()}},bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,S=d(v,p.crossOrigin),M=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:M,fetchPriority:y}):v==="script"&&r.d.X(m,{crossOrigin:S,integrity:M,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,S=d(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},bn.requestFormReset=function(m){r.d.r(m)},bn.unstable_batchedUpdates=function(m,p){return m(p)},bn.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.2.6",bn}var u_;function ax(){if(u_)return Xf.exports;u_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Xf.exports=ix(),Xf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function rx(){if(c_)return To;c_=1;var o=nx(),e=dd(),i=ax();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var _=!1,E=u.child;E;){if(E===a){_=!0,a=u,s=f;break}if(E===s){_=!0,s=u,a=f;break}E=E.sibling}if(!_){for(E=f.child;E;){if(E===a){_=!0,a=f,s=u;break}if(E===s){_=!0,s=f,a=u;break}E=E.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,M=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case g:return"Profiler";case x:return"StrictMode";case q:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case L:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:gt(t.type)||"Memo";case V:n=t._payload,t=t._init;try{return gt(t(n))}catch{}}return null}var dt=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},vt=[],Et=-1;function N(t){return{current:t}}function nt(t){0>Et||(t.current=vt[Et],vt[Et]=null,Et--)}function xt(t,n){Et++,vt[Et]=t.current,t.current=n}var K=N(null),ct=N(null),yt=N(null),St=N(null);function It(t,n){switch(xt(yt,n),xt(ct,t),xt(K,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?bg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=bg(n),t=Ag(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}nt(K),xt(K,t)}function jt(){nt(K),nt(ct),nt(yt)}function Zt(t){t.memoizedState!==null&&xt(St,t);var n=K.current,a=Ag(n,t.type);n!==a&&(xt(ct,t),xt(K,a))}function Ve(t){ct.current===t&&(nt(K),nt(ct)),St.current===t&&(nt(St),So._currentValue=j)}var Ie,ce;function I(t){if(Ie===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ie=n&&n[1]||"",ce=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ie+t+ce}var En=!1;function ue(t,n){if(!t||En)return"";En=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(at){var $=at}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(at){$=at}t.call(mt.prototype)}}else{try{throw Error()}catch(at){$=at}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(at){if(at&&$&&typeof at.stack=="string")return[at.stack,$.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],E=f[1];if(_&&E){var z=_.split(`
`),J=E.split(`
`);for(u=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(s===z.length||u===J.length)for(s=z.length-1,u=J.length-1;1<=s&&0<=u&&z[s]!==J[u];)u--;for(;1<=s&&0<=u;s--,u--)if(z[s]!==J[u]){if(s!==1||u!==1)do if(s--,u--,0>u||z[s]!==J[u]){var ut=`
`+z[s].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=s&&0<=u);break}}}finally{En=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?I(a):""}function de(t,n){switch(t.tag){case 26:case 27:case 5:return I(t.type);case 16:return I("Lazy");case 13:return t.child!==n&&n!==null?I("Suspense Fallback"):I("Suspense");case 19:return I("SuspenseList");case 0:case 15:return ue(t.type,!1);case 11:return ue(t.type.render,!1);case 1:return ue(t.type,!0);case 31:return I("Activity");default:return""}}function Xt(t){try{var n="",a=null;do n+=de(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var we=Object.prototype.hasOwnProperty,Vt=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,T=o.unstable_shouldYield,tt=o.unstable_requestPaint,ft=o.unstable_now,Mt=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,Ct=o.unstable_NormalPriority,Pt=o.unstable_LowPriority,pe=o.unstable_IdlePriority,bt=o.log,zt=o.unstable_setDisableYieldValue,kt=null,Gt=null;function Nt(t){if(typeof bt=="function"&&zt(t),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(kt,t)}catch{}}var Jt=Math.clz32?Math.clz32:k,ae=Math.log,Le=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(ae(t)/Le|0)|0}var At=256,ot=262144,_t=4194304;function Rt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function wt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?u=Rt(s):(_&=E,_!==0?u=Rt(_):a||(a=E&~t,a!==0&&(u=Rt(a))))):(E=s&~f,E!==0?u=Rt(E):_!==0?u=Rt(_):a||(a=s&~t,a!==0&&(u=Rt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function $t(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function qe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ln(){var t=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),t}function ye(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function gn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function fi(t,n,a,s,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,z=t.expirationTimes,J=t.hiddenUpdates;for(a=_&~a;0<a;){var ut=31-Jt(a),mt=1<<ut;E[ut]=0,z[ut]=-1;var $=J[ut];if($!==null)for(J[ut]=null,ut=0;ut<$.length;ut++){var at=$[ut];at!==null&&(at.lane&=-536870913)}a&=~mt}s!==0&&Ds(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Ds(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Jt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Us(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Jt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Ei(t,n){var a=n&-n;return a=(a&42)!==0?1:Xa(a),(a&(t.suspendedLanes|n))!==0?0:a}function Xa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Er(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ls(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Zg(t.type))}function ka(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var hi=Math.random().toString(36).slice(2),je="__reactFiber$"+hi,_n="__reactProps$"+hi,Ui="__reactContainer$"+hi,Ns="__reactEvents$"+hi,Uu="__reactListeners$"+hi,Lu="__reactHandles$"+hi,Io="__reactResources$"+hi,Wa="__reactMarker$"+hi;function Os(t){delete t[je],delete t[_n],delete t[Ns],delete t[Uu],delete t[Lu]}function R(t){var n=t[je];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ui]||a[je]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Ng(t);t!==null;){if(a=t[je])return a;t=Ng(t)}return n}t=a,a=t.parentNode}return null}function W(t){if(t=t[je]||t[Ui]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function et(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function it(t){var n=t[Io];return n||(n=t[Io]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(t){t[Wa]=!0}var Tt=new Set,Dt={};function Lt(t,n){Ot(t,n),Ot(t+"Capture",n)}function Ot(t,n){for(Dt[t]=n,t=0;t<n.length;t++)Tt.add(n[t])}var te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},Wt={};function _e(t){return we.call(Wt,t)?!0:we.call(ee,t)?!1:te.test(t)?Wt[t]=!0:(ee[t]=!0,!1)}function ve(t,n,a){if(_e(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ee(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function ne(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Yt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function un(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Me(t){if(!t._valueTracker){var n=Yt(t)?"checked":"value";t._valueTracker=un(t,n,""+t[n])}}function Ln(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Yt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function di(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Cn=/[\n"\\]/g;function dn(t){return t.replace(Cn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ne(t,n,a,s,u,f,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ne(n)):t.value!==""+ne(n)&&(t.value=""+ne(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?Tn(t,_,ne(n)):a!=null?Tn(t,_,ne(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ne(E):t.removeAttribute("name")}function wn(t,n,a,s,u,f,_,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Me(t);return}a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Me(t)}function Tn(t,n,a){n==="number"&&di(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ze(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function vn(t,n,a){if(n!=null&&(n=""+ne(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ne(a):""}function Tr(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(dt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ne(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Me(t)}function Nn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var qv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||qv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ed(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&yd(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&yd(t,f,n[f])}function Nu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fo(t){return jv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Li(){}var Ou=null;function Pu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var br=null,Ar=null;function Td(t){var n=W(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ne(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[_n]||null;if(!u)throw Error(r(90));Ne(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Ln(s)}break t;case"textarea":vn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ze(t,!!a.multiple,n,!1)}}}var zu=!1;function bd(t,n,a){if(zu)return t(n,a);zu=!0;try{var s=t(n);return s}finally{if(zu=!1,(br!==null||Ar!==null)&&(Al(),br&&(n=br,t=Ar,Ar=br=null,Td(n),t)))for(n=0;n<t.length;n++)Td(t[n])}}function Ps(t,n){var a=t.stateNode;if(a===null)return null;var s=a[_n]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=!1;if(Ni)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Bu=!1}var ca=null,Iu=null,Ho=null;function Ad(){if(Ho)return Ho;var t,n=Iu,a=n.length,s,u="value"in ca?ca.value:ca.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===u[f-s];s++);return Ho=u.slice(t,1<s?1-s:void 0)}function Go(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Vo(){return!0}function Rd(){return!1}function On(t){function n(a,s,u,f,_){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Vo:Rd,this.isPropagationStopped=Rd,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=On(qa),Bs=S({},qa,{view:0,detail:0}),Zv=On(Bs),Fu,Hu,Is,ko=S({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(Fu=t.screenX-Is.screenX,Hu=t.screenY-Is.screenY):Hu=Fu=0,Is=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:Hu}}),Cd=On(ko),Kv=S({},ko,{dataTransfer:0}),Qv=On(Kv),Jv=S({},Bs,{relatedTarget:0}),Gu=On(Jv),$v=S({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),t0=On($v),e0=S({},qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),n0=On(e0),i0=S({},qa,{data:0}),wd=On(i0),a0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=s0[t])?!!n[t]:!1}function Vu(){return o0}var l0=S({},Bs,{key:function(t){if(t.key){var n=a0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Go(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?r0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(t){return t.type==="keypress"?Go(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Go(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),u0=On(l0),c0=S({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dd=On(c0),f0=S({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),h0=On(f0),d0=S({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),p0=On(d0),m0=S({},ko,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),g0=On(m0),_0=S({},qa,{newState:0,oldState:0}),v0=On(_0),S0=[9,13,27,32],Xu=Ni&&"CompositionEvent"in window,Fs=null;Ni&&"documentMode"in document&&(Fs=document.documentMode);var x0=Ni&&"TextEvent"in window&&!Fs,Ud=Ni&&(!Xu||Fs&&8<Fs&&11>=Fs),Ld=" ",Nd=!1;function Od(t,n){switch(t){case"keyup":return S0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function M0(t,n){switch(t){case"compositionend":return Pd(n);case"keypress":return n.which!==32?null:(Nd=!0,Ld);case"textInput":return t=n.data,t===Ld&&Nd?null:t;default:return null}}function y0(t,n){if(Rr)return t==="compositionend"||!Xu&&Od(t,n)?(t=Ad(),Ho=Iu=ca=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ud&&n.locale!=="ko"?null:n.data;default:return null}}var E0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!E0[t.type]:n==="textarea"}function Bd(t,n,a,s){br?Ar?Ar.push(s):Ar=[s]:br=s,n=Nl(n,"onChange"),0<n.length&&(a=new Xo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Hs=null,Gs=null;function T0(t){Sg(t,0)}function Wo(t){var n=et(t);if(Ln(n))return t}function Id(t,n){if(t==="change")return n}var Fd=!1;if(Ni){var ku;if(Ni){var Wu="oninput"in document;if(!Wu){var Hd=document.createElement("div");Hd.setAttribute("oninput","return;"),Wu=typeof Hd.oninput=="function"}ku=Wu}else ku=!1;Fd=ku&&(!document.documentMode||9<document.documentMode)}function Gd(){Hs&&(Hs.detachEvent("onpropertychange",Vd),Gs=Hs=null)}function Vd(t){if(t.propertyName==="value"&&Wo(Gs)){var n=[];Bd(n,Gs,t,Pu(t)),bd(T0,n)}}function b0(t,n,a){t==="focusin"?(Gd(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",Vd)):t==="focusout"&&Gd()}function A0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wo(Gs)}function R0(t,n){if(t==="click")return Wo(n)}function C0(t,n){if(t==="input"||t==="change")return Wo(n)}function w0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var kn=typeof Object.is=="function"?Object.is:w0;function Vs(t,n){if(kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!we.call(n,u)||!kn(t[u],n[u]))return!1}return!0}function Xd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kd(t,n){var a=Xd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Xd(a)}}function Wd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Wd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function qd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=di(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=di(t.document)}return n}function qu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var D0=Ni&&"documentMode"in document&&11>=document.documentMode,Cr=null,Yu=null,Xs=null,ju=!1;function Yd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ju||Cr==null||Cr!==di(s)||(s=Cr,"selectionStart"in s&&qu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Xs&&Vs(Xs,s)||(Xs=s,s=Nl(Yu,"onSelect"),0<s.length&&(n=new Xo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Cr)))}function Ya(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var wr={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},Zu={},jd={};Ni&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function ja(t){if(Zu[t])return Zu[t];if(!wr[t])return t;var n=wr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in jd)return Zu[t]=n[a];return t}var Zd=ja("animationend"),Kd=ja("animationiteration"),Qd=ja("animationstart"),U0=ja("transitionrun"),L0=ja("transitionstart"),N0=ja("transitioncancel"),Jd=ja("transitionend"),$d=new Map,Ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ku.push("scrollEnd");function pi(t,n){$d.set(t,n),Lt(n,[t])}var qo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},$n=[],Dr=0,Qu=0;function Yo(){for(var t=Dr,n=Qu=Dr=0;n<t;){var a=$n[n];$n[n++]=null;var s=$n[n];$n[n++]=null;var u=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,s!==null&&u!==null){var _=s.pending;_===null?u.next=u:(u.next=_.next,_.next=u),s.pending=u}f!==0&&tp(a,u,f)}}function jo(t,n,a,s){$n[Dr++]=t,$n[Dr++]=n,$n[Dr++]=a,$n[Dr++]=s,Qu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Ju(t,n,a,s){return jo(t,n,a,s),Zo(t)}function Za(t,n){return jo(t,null,null,n),Zo(t)}function tp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Jt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Zo(t){if(50<fo)throw fo=0,lf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={};function O0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,s){return new O0(t,n,a,s)}function $u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Oi(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ep(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ko(t,n,a,s,u,f){var _=0;if(s=t,typeof t=="function")$u(t)&&(_=1);else if(typeof t=="string")_=FS(t,a,K.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=Wn(31,a,n,u),t.elementType=D,t.lanes=f,t;case b:return Ka(a.children,u,f,n);case x:_=8,u|=24;break;case g:return t=Wn(12,a,n,u|2),t.elementType=g,t.lanes=f,t;case q:return t=Wn(13,a,n,u),t.elementType=q,t.lanes=f,t;case H:return t=Wn(19,a,n,u),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:_=10;break t;case B:_=9;break t;case w:_=11;break t;case P:_=14;break t;case V:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Wn(_,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Ka(t,n,a,s){return t=Wn(7,t,s,n),t.lanes=a,t}function tc(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function np(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function ec(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ip=new WeakMap;function ti(t,n){if(typeof t=="object"&&t!==null){var a=ip.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Xt(n)},ip.set(t,n),n)}return{value:t,source:n,stack:Xt(n)}}var Lr=[],Nr=0,Qo=null,ks=0,ei=[],ni=0,fa=null,Ti=1,bi="";function Pi(t,n){Lr[Nr++]=ks,Lr[Nr++]=Qo,Qo=t,ks=n}function ap(t,n,a){ei[ni++]=Ti,ei[ni++]=bi,ei[ni++]=fa,fa=t;var s=Ti;t=bi;var u=32-Jt(s)-1;s&=~(1<<u),a+=1;var f=32-Jt(n)+u;if(30<f){var _=u-u%5;f=(s&(1<<_)-1).toString(32),s>>=_,u-=_,Ti=1<<32-Jt(n)+u|a<<u|s,bi=f+t}else Ti=1<<f|a<<u|s,bi=t}function nc(t){t.return!==null&&(Pi(t,1),ap(t,1,0))}function ic(t){for(;t===Qo;)Qo=Lr[--Nr],Lr[Nr]=null,ks=Lr[--Nr],Lr[Nr]=null;for(;t===fa;)fa=ei[--ni],ei[ni]=null,bi=ei[--ni],ei[ni]=null,Ti=ei[--ni],ei[ni]=null}function rp(t,n){ei[ni++]=Ti,ei[ni++]=bi,ei[ni++]=fa,Ti=n.id,bi=n.overflow,fa=t}var Sn=null,ke=null,Se=!1,ha=null,ii=!1,ac=Error(r(519));function da(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ws(ti(n,t)),ac}function sp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[je]=t,n[_n]=s,a){case"dialog":he("cancel",n),he("close",n);break;case"iframe":case"object":case"embed":he("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)he(po[a],n);break;case"source":he("error",n);break;case"img":case"image":case"link":he("error",n),he("load",n);break;case"details":he("toggle",n);break;case"input":he("invalid",n),wn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":he("invalid",n);break;case"textarea":he("invalid",n),Tr(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Eg(n.textContent,a)?(s.popover!=null&&(he("beforetoggle",n),he("toggle",n)),s.onScroll!=null&&he("scroll",n),s.onScrollEnd!=null&&he("scrollend",n),s.onClick!=null&&(n.onclick=Li),n=!0):n=!1,n||da(t,!0)}function op(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:ii=!1;return;case 27:case 3:ii=!0;return;default:Sn=Sn.return}}function Or(t){if(t!==Sn)return!1;if(!Se)return op(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ef(t.type,t.memoizedProps)),a=!a),a&&ke&&da(t),op(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ke=Lg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ke=Lg(t)}else n===27?(n=ke,Ra(t.type)?(t=Cf,Cf=null,ke=t):ke=n):ke=Sn?ri(t.stateNode.nextSibling):null;return!0}function Qa(){ke=Sn=null,Se=!1}function rc(){var t=ha;return t!==null&&(In===null?In=t:In.push.apply(In,t),ha=null),t}function Ws(t){ha===null?ha=[t]:ha.push(t)}var sc=N(null),Ja=null,zi=null;function pa(t,n,a){xt(sc,n._currentValue),n._currentValue=a}function Bi(t){t._currentValue=sc.current,nt(sc)}function oc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function lc(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=u;for(var z=0;z<n.length;z++)if(E.context===n[z]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),oc(f.return,a,t),s||(_=null);break t}f=E.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),oc(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Pr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var E=u.type;kn(u.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(u===St.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(So):t=[So])}u=u.return}t!==null&&lc(n,t,a,s),n.flags|=262144}function Jo(t){for(t=t.firstContext;t!==null;){if(!kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function $a(t){Ja=t,zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function xn(t){return lp(Ja,t)}function $o(t,n){return Ja===null&&$a(t),lp(t,n)}function lp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},zi===null){if(t===null)throw Error(r(308));zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else zi=zi.next=n;return a}var P0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},z0=o.unstable_scheduleCallback,B0=o.unstable_NormalPriority,nn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uc(){return{controller:new P0,data:new Map,refCount:0}}function qs(t){t.refCount--,t.refCount===0&&z0(B0,function(){t.controller.abort()})}var Ys=null,cc=0,zr=0,Br=null;function I0(t,n){if(Ys===null){var a=Ys=[];cc=0,zr=pf(),Br={status:"pending",value:void 0,then:function(s){a.push(s)}}}return cc++,n.then(up,up),n}function up(){if(--cc===0&&Ys!==null){Br!==null&&(Br.status="fulfilled");var t=Ys;Ys=null,zr=0,Br=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function F0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var cp=O.S;O.S=function(t,n){Ym=ft(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&I0(t,n),cp!==null&&cp(t,n)};var tr=N(null);function fc(){var t=tr.current;return t!==null?t:Fe.pooledCache}function tl(t,n){n===null?xt(tr,tr.current):xt(tr,n.pool)}function fp(){var t=fc();return t===null?null:{parent:nn._currentValue,pool:t}}var Ir=Error(r(460)),hc=Error(r(474)),el=Error(r(542)),nl={then:function(){}};function hp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function dp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Li,Li),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,mp(t),t;default:if(typeof n.status=="string")n.then(Li,Li);else{if(t=Fe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,mp(t),t}throw nr=n,Ir}}function er(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(nr=a,Ir):a}}var nr=null;function pp(){if(nr===null)throw Error(r(459));var t=nr;return nr=null,t}function mp(t){if(t===Ir||t===el)throw Error(r(483))}var Fr=null,js=0;function il(t){var n=js;return js+=1,Fr===null&&(Fr=[]),dp(Fr,t,n)}function Zs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function al(t,n){throw n.$$typeof===M?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function gp(t){function n(Y,F){if(t){var Q=Y.deletions;Q===null?(Y.deletions=[F],Y.flags|=16):Q.push(F)}}function a(Y,F){if(!t)return null;for(;F!==null;)n(Y,F),F=F.sibling;return null}function s(Y){for(var F=new Map;Y!==null;)Y.key!==null?F.set(Y.key,Y):F.set(Y.index,Y),Y=Y.sibling;return F}function u(Y,F){return Y=Oi(Y,F),Y.index=0,Y.sibling=null,Y}function f(Y,F,Q){return Y.index=Q,t?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<F?(Y.flags|=67108866,F):Q):(Y.flags|=67108866,F)):(Y.flags|=1048576,F)}function _(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function E(Y,F,Q,ht){return F===null||F.tag!==6?(F=tc(Q,Y.mode,ht),F.return=Y,F):(F=u(F,Q),F.return=Y,F)}function z(Y,F,Q,ht){var qt=Q.type;return qt===b?ut(Y,F,Q.props.children,ht,Q.key):F!==null&&(F.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===V&&er(qt)===F.type)?(F=u(F,Q.props),Zs(F,Q),F.return=Y,F):(F=Ko(Q.type,Q.key,Q.props,null,Y.mode,ht),Zs(F,Q),F.return=Y,F)}function J(Y,F,Q,ht){return F===null||F.tag!==4||F.stateNode.containerInfo!==Q.containerInfo||F.stateNode.implementation!==Q.implementation?(F=ec(Q,Y.mode,ht),F.return=Y,F):(F=u(F,Q.children||[]),F.return=Y,F)}function ut(Y,F,Q,ht,qt){return F===null||F.tag!==7?(F=Ka(Q,Y.mode,ht,qt),F.return=Y,F):(F=u(F,Q),F.return=Y,F)}function mt(Y,F,Q){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=tc(""+F,Y.mode,Q),F.return=Y,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case y:return Q=Ko(F.type,F.key,F.props,null,Y.mode,Q),Zs(Q,F),Q.return=Y,Q;case A:return F=ec(F,Y.mode,Q),F.return=Y,F;case V:return F=er(F),mt(Y,F,Q)}if(dt(F)||lt(F))return F=Ka(F,Y.mode,Q,null),F.return=Y,F;if(typeof F.then=="function")return mt(Y,il(F),Q);if(F.$$typeof===L)return mt(Y,$o(Y,F),Q);al(Y,F)}return null}function $(Y,F,Q,ht){var qt=F!==null?F.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return qt!==null?null:E(Y,F,""+Q,ht);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return Q.key===qt?z(Y,F,Q,ht):null;case A:return Q.key===qt?J(Y,F,Q,ht):null;case V:return Q=er(Q),$(Y,F,Q,ht)}if(dt(Q)||lt(Q))return qt!==null?null:ut(Y,F,Q,ht,null);if(typeof Q.then=="function")return $(Y,F,il(Q),ht);if(Q.$$typeof===L)return $(Y,F,$o(Y,Q),ht);al(Y,Q)}return null}function at(Y,F,Q,ht,qt){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return Y=Y.get(Q)||null,E(F,Y,""+ht,qt);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case y:return Y=Y.get(ht.key===null?Q:ht.key)||null,z(F,Y,ht,qt);case A:return Y=Y.get(ht.key===null?Q:ht.key)||null,J(F,Y,ht,qt);case V:return ht=er(ht),at(Y,F,Q,ht,qt)}if(dt(ht)||lt(ht))return Y=Y.get(Q)||null,ut(F,Y,ht,qt,null);if(typeof ht.then=="function")return at(Y,F,Q,il(ht),qt);if(ht.$$typeof===L)return at(Y,F,Q,$o(F,ht),qt);al(F,ht)}return null}function Bt(Y,F,Q,ht){for(var qt=null,Te=null,Ft=F,se=F=0,ge=null;Ft!==null&&se<Q.length;se++){Ft.index>se?(ge=Ft,Ft=null):ge=Ft.sibling;var be=$(Y,Ft,Q[se],ht);if(be===null){Ft===null&&(Ft=ge);break}t&&Ft&&be.alternate===null&&n(Y,Ft),F=f(be,F,se),Te===null?qt=be:Te.sibling=be,Te=be,Ft=ge}if(se===Q.length)return a(Y,Ft),Se&&Pi(Y,se),qt;if(Ft===null){for(;se<Q.length;se++)Ft=mt(Y,Q[se],ht),Ft!==null&&(F=f(Ft,F,se),Te===null?qt=Ft:Te.sibling=Ft,Te=Ft);return Se&&Pi(Y,se),qt}for(Ft=s(Ft);se<Q.length;se++)ge=at(Ft,Y,se,Q[se],ht),ge!==null&&(t&&ge.alternate!==null&&Ft.delete(ge.key===null?se:ge.key),F=f(ge,F,se),Te===null?qt=ge:Te.sibling=ge,Te=ge);return t&&Ft.forEach(function(La){return n(Y,La)}),Se&&Pi(Y,se),qt}function Kt(Y,F,Q,ht){if(Q==null)throw Error(r(151));for(var qt=null,Te=null,Ft=F,se=F=0,ge=null,be=Q.next();Ft!==null&&!be.done;se++,be=Q.next()){Ft.index>se?(ge=Ft,Ft=null):ge=Ft.sibling;var La=$(Y,Ft,be.value,ht);if(La===null){Ft===null&&(Ft=ge);break}t&&Ft&&La.alternate===null&&n(Y,Ft),F=f(La,F,se),Te===null?qt=La:Te.sibling=La,Te=La,Ft=ge}if(be.done)return a(Y,Ft),Se&&Pi(Y,se),qt;if(Ft===null){for(;!be.done;se++,be=Q.next())be=mt(Y,be.value,ht),be!==null&&(F=f(be,F,se),Te===null?qt=be:Te.sibling=be,Te=be);return Se&&Pi(Y,se),qt}for(Ft=s(Ft);!be.done;se++,be=Q.next())be=at(Ft,Y,se,be.value,ht),be!==null&&(t&&be.alternate!==null&&Ft.delete(be.key===null?se:be.key),F=f(be,F,se),Te===null?qt=be:Te.sibling=be,Te=be);return t&&Ft.forEach(function(KS){return n(Y,KS)}),Se&&Pi(Y,se),qt}function ze(Y,F,Q,ht){if(typeof Q=="object"&&Q!==null&&Q.type===b&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:t:{for(var qt=Q.key;F!==null;){if(F.key===qt){if(qt=Q.type,qt===b){if(F.tag===7){a(Y,F.sibling),ht=u(F,Q.props.children),ht.return=Y,Y=ht;break t}}else if(F.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===V&&er(qt)===F.type){a(Y,F.sibling),ht=u(F,Q.props),Zs(ht,Q),ht.return=Y,Y=ht;break t}a(Y,F);break}else n(Y,F);F=F.sibling}Q.type===b?(ht=Ka(Q.props.children,Y.mode,ht,Q.key),ht.return=Y,Y=ht):(ht=Ko(Q.type,Q.key,Q.props,null,Y.mode,ht),Zs(ht,Q),ht.return=Y,Y=ht)}return _(Y);case A:t:{for(qt=Q.key;F!==null;){if(F.key===qt)if(F.tag===4&&F.stateNode.containerInfo===Q.containerInfo&&F.stateNode.implementation===Q.implementation){a(Y,F.sibling),ht=u(F,Q.children||[]),ht.return=Y,Y=ht;break t}else{a(Y,F);break}else n(Y,F);F=F.sibling}ht=ec(Q,Y.mode,ht),ht.return=Y,Y=ht}return _(Y);case V:return Q=er(Q),ze(Y,F,Q,ht)}if(dt(Q))return Bt(Y,F,Q,ht);if(lt(Q)){if(qt=lt(Q),typeof qt!="function")throw Error(r(150));return Q=qt.call(Q),Kt(Y,F,Q,ht)}if(typeof Q.then=="function")return ze(Y,F,il(Q),ht);if(Q.$$typeof===L)return ze(Y,F,$o(Y,Q),ht);al(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,F!==null&&F.tag===6?(a(Y,F.sibling),ht=u(F,Q),ht.return=Y,Y=ht):(a(Y,F),ht=tc(Q,Y.mode,ht),ht.return=Y,Y=ht),_(Y)):a(Y,F)}return function(Y,F,Q,ht){try{js=0;var qt=ze(Y,F,Q,ht);return Fr=null,qt}catch(Ft){if(Ft===Ir||Ft===el)throw Ft;var Te=Wn(29,Ft,null,Y.mode);return Te.lanes=ht,Te.return=Y,Te}finally{}}}var ir=gp(!0),_p=gp(!1),ma=!1;function dc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function _a(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Re&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Zo(t),tp(t,null,a),n}return jo(t,s,n,a),Zo(t)}function Ks(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Us(t,a)}}function mc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var gc=!1;function Qs(){if(gc){var t=Br;if(t!==null)throw t}}function Js(t,n,a,s){gc=!1;var u=t.updateQueue;ma=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var z=E,J=z.next;z.next=null,_===null?f=J:_.next=J,_=z;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==_&&(E===null?ut.firstBaseUpdate=J:E.next=J,ut.lastBaseUpdate=z))}if(f!==null){var mt=u.baseState;_=0,ut=J=z=null,E=f;do{var $=E.lane&-536870913,at=$!==E.lane;if(at?(me&$)===$:(s&$)===$){$!==0&&$===zr&&(gc=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Bt=t,Kt=E;$=n;var ze=a;switch(Kt.tag){case 1:if(Bt=Kt.payload,typeof Bt=="function"){mt=Bt.call(ze,mt,$);break t}mt=Bt;break t;case 3:Bt.flags=Bt.flags&-65537|128;case 0:if(Bt=Kt.payload,$=typeof Bt=="function"?Bt.call(ze,mt,$):Bt,$==null)break t;mt=S({},mt,$);break t;case 2:ma=!0}}$=E.callback,$!==null&&(t.flags|=64,at&&(t.flags|=8192),at=u.callbacks,at===null?u.callbacks=[$]:at.push($))}else at={lane:$,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(J=ut=at,z=mt):ut=ut.next=at,_|=$;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;at=E,E=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);ut===null&&(z=mt),u.baseState=z,u.firstBaseUpdate=J,u.lastBaseUpdate=ut,f===null&&(u.shared.lanes=0),ya|=_,t.lanes=_,t.memoizedState=mt}}function vp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Sp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)vp(a[t],n)}var Hr=N(null),rl=N(0);function xp(t,n){t=qi,xt(rl,t),xt(Hr,n),qi=t|n.baseLanes}function _c(){xt(rl,qi),xt(Hr,Hr.current)}function vc(){qi=rl.current,nt(Hr),nt(rl)}var qn=N(null),ai=null;function va(t){var n=t.alternate;xt(Je,Je.current&1),xt(qn,t),ai===null&&(n===null||Hr.current!==null||n.memoizedState!==null)&&(ai=t)}function Sc(t){xt(Je,Je.current),xt(qn,t),ai===null&&(ai=t)}function Mp(t){t.tag===22?(xt(Je,Je.current),xt(qn,t),ai===null&&(ai=t)):Sa()}function Sa(){xt(Je,Je.current),xt(qn,qn.current)}function Yn(t){nt(qn),ai===t&&(ai=null),nt(Je)}var Je=N(0);function sl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Af(a)||Rf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ii=0,re=null,Oe=null,an=null,ol=!1,Gr=!1,ar=!1,ll=0,$s=0,Vr=null,H0=0;function Ke(){throw Error(r(321))}function xc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!kn(t[a],n[a]))return!1;return!0}function Mc(t,n,a,s,u,f){return Ii=f,re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?am:zc,ar=!1,f=a(s,u),ar=!1,Gr&&(f=Ep(n,a,s,u)),yp(t),f}function yp(t){O.H=no;var n=Oe!==null&&Oe.next!==null;if(Ii=0,an=Oe=re=null,ol=!1,$s=0,Vr=null,n)throw Error(r(300));t===null||rn||(t=t.dependencies,t!==null&&Jo(t)&&(rn=!0))}function Ep(t,n,a,s){re=t;var u=0;do{if(Gr&&(Vr=null),$s=0,Gr=!1,25<=u)throw Error(r(301));if(u+=1,an=Oe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=rm,f=n(a,s)}while(Gr);return f}function G0(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?to(n):n,t=t.useState()[0],(Oe!==null?Oe.memoizedState:null)!==t&&(re.flags|=1024),n}function yc(){var t=ll!==0;return ll=0,t}function Ec(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Tc(t){if(ol){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ol=!1}Ii=0,an=Oe=re=null,Gr=!1,$s=ll=0,Vr=null}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?re.memoizedState=an=t:an=an.next=t,an}function $e(){if(Oe===null){var t=re.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var n=an===null?re.memoizedState:an.next;if(n!==null)an=n,Oe=t;else{if(t===null)throw re.alternate===null?Error(r(467)):Error(r(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},an===null?re.memoizedState=an=t:an=an.next=t}return an}function ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(t){var n=$s;return $s+=1,Vr===null&&(Vr=[]),t=dp(Vr,t,n),n=re,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?am:zc),t}function cl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return to(t);if(t.$$typeof===L)return xn(t)}throw Error(r(438,String(t)))}function bc(t){var n=null,a=re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=re.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ul(),re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function Fi(t,n){return typeof n=="function"?n(t):n}function fl(t){var n=$e();return Ac(n,Oe,t)}function Ac(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var E=_=null,z=null,J=n,ut=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(me&mt)===mt:(Ii&mt)===mt){var $=J.revertLane;if($===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===zr&&(ut=!0);else if((Ii&$)===$){J=J.next,$===zr&&(ut=!0);continue}else mt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(E=z=mt,_=f):z=z.next=mt,re.lanes|=$,ya|=$;mt=J.action,ar&&a(f,mt),f=J.hasEagerState?J.eagerState:a(f,mt)}else $={lane:mt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(E=z=$,_=f):z=z.next=$,re.lanes|=mt,ya|=mt;J=J.next}while(J!==null&&J!==n);if(z===null?_=f:z.next=E,!kn(f,t.memoizedState)&&(rn=!0,ut&&(a=Br,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=z,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Rc(t){var n=$e(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);kn(f,n.memoizedState)||(rn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Tp(t,n,a){var s=re,u=$e(),f=Se;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!kn((Oe||u).memoizedState,a);if(_&&(u.memoizedState=a,rn=!0),u=u.queue,Dc(Rp.bind(null,s,u,t),[t]),u.getSnapshot!==n||_||an!==null&&an.memoizedState.tag&1){if(s.flags|=2048,Xr(9,{destroy:void 0},Ap.bind(null,s,u,a,n),null),Fe===null)throw Error(r(349));f||(Ii&127)!==0||bp(s,n,a)}return a}function bp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=re.updateQueue,n===null?(n=ul(),re.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Ap(t,n,a,s){n.value=a,n.getSnapshot=s,Cp(n)&&wp(t)}function Rp(t,n,a){return a(function(){Cp(n)&&wp(t)})}function Cp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!kn(t,a)}catch{return!0}}function wp(t){var n=Za(t,2);n!==null&&Fn(n,t,2)}function Cc(t){var n=Dn();if(typeof t=="function"){var a=t;if(t=a(),ar){Nt(!0);try{a()}finally{Nt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},n}function Dp(t,n,a,s){return t.baseState=a,Ac(t,Oe,typeof s=="function"?s:Fi)}function V0(t,n,a,s,u){if(pl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Up(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Up(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=O.T,_={};O.T=_;try{var E=a(u,s),z=O.S;z!==null&&z(_,E),Lp(t,n,E)}catch(J){wc(t,n,J)}finally{f!==null&&_.types!==null&&(f.types=_.types),O.T=f}}else try{f=a(u,s),Lp(t,n,f)}catch(J){wc(t,n,J)}}function Lp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Np(t,n,s)},function(s){return wc(t,n,s)}):Np(t,n,a)}function Np(t,n,a){n.status="fulfilled",n.value=a,Op(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Up(t,a)))}function wc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Op(n),n=n.next;while(n!==s)}t.action=null}function Op(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Pp(t,n){return n}function zp(t,n){if(Se){var a=Fe.formState;if(a!==null){t:{var s=re;if(Se){if(ke){e:{for(var u=ke,f=ii;u.nodeType!==8;){if(!f){u=null;break e}if(u=ri(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){ke=ri(u.nextSibling),s=u.data==="F!";break t}}da(s)}s=!1}s&&(n=a[0])}}return a=Dn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pp,lastRenderedState:n},a.queue=s,a=em.bind(null,re,s),s.dispatch=a,s=Cc(!1),f=Pc.bind(null,re,!1,s.queue),s=Dn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=V0.bind(null,re,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Bp(t){var n=$e();return Ip(n,Oe,t)}function Ip(t,n,a){if(n=Ac(t,n,Pp)[0],t=fl(Fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=to(n)}catch(_){throw _===Ir?el:_}else s=n;n=$e();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(re.flags|=2048,Xr(9,{destroy:void 0},X0.bind(null,u,a),null)),[s,f,t]}function X0(t,n){t.action=n}function Fp(t){var n=$e(),a=Oe;if(a!==null)return Ip(n,a,t);$e(),n=n.memoizedState,a=$e();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Xr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=re.updateQueue,n===null&&(n=ul(),re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Hp(){return $e().memoizedState}function hl(t,n,a,s){var u=Dn();re.flags|=t,u.memoizedState=Xr(1|n,{destroy:void 0},a,s===void 0?null:s)}function dl(t,n,a,s){var u=$e();s=s===void 0?null:s;var f=u.memoizedState.inst;Oe!==null&&s!==null&&xc(s,Oe.memoizedState.deps)?u.memoizedState=Xr(n,f,a,s):(re.flags|=t,u.memoizedState=Xr(1|n,f,a,s))}function Gp(t,n){hl(8390656,8,t,n)}function Dc(t,n){dl(2048,8,t,n)}function k0(t){re.flags|=4;var n=re.updateQueue;if(n===null)n=ul(),re.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Vp(t){var n=$e().memoizedState;return k0({ref:n,nextImpl:t}),function(){if((Re&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Xp(t,n){return dl(4,2,t,n)}function kp(t,n){return dl(4,4,t,n)}function Wp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function qp(t,n,a){a=a!=null?a.concat([t]):null,dl(4,4,Wp.bind(null,n,t),a)}function Uc(){}function Yp(t,n){var a=$e();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&xc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function jp(t,n){var a=$e();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&xc(n,s[1]))return s[0];if(s=t(),ar){Nt(!0);try{t()}finally{Nt(!1)}}return a.memoizedState=[s,n],s}function Lc(t,n,a){return a===void 0||(Ii&1073741824)!==0&&(me&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Zm(),re.lanes|=t,ya|=t,a)}function Zp(t,n,a,s){return kn(a,n)?a:Hr.current!==null?(t=Lc(t,a,s),kn(t,n)||(rn=!0),t):(Ii&42)===0||(Ii&1073741824)!==0&&(me&261930)===0?(rn=!0,t.memoizedState=a):(t=Zm(),re.lanes|=t,ya|=t,n)}function Kp(t,n,a,s,u){var f=Z.p;Z.p=f!==0&&8>f?f:8;var _=O.T,E={};O.T=E,Pc(t,!1,n,a);try{var z=u(),J=O.S;if(J!==null&&J(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ut=F0(z,s);eo(t,n,ut,Kn(t))}else eo(t,n,s,Kn(t))}catch(mt){eo(t,n,{then:function(){},status:"rejected",reason:mt},Kn())}finally{Z.p=f,_!==null&&E.types!==null&&(_.types=E.types),O.T=_}}function W0(){}function Nc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Qp(t).queue;Kp(t,u,n,j,a===null?W0:function(){return Jp(t),a(s)})}function Qp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Jp(t){var n=Qp(t);n.next===null&&(n=t.alternate.memoizedState),eo(t,n.next.queue,{},Kn())}function Oc(){return xn(So)}function $p(){return $e().memoizedState}function tm(){return $e().memoizedState}function q0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=ga(a);var s=_a(n,t,a);s!==null&&(Fn(s,n,a),Ks(s,n,a)),n={cache:uc()},t.payload=n;return}n=n.return}}function Y0(t,n,a){var s=Kn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},pl(t)?nm(n,a):(a=Ju(t,n,a,s),a!==null&&(Fn(a,t,s),im(a,n,s)))}function em(t,n,a){var s=Kn();eo(t,n,a,s)}function eo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(pl(t))nm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,E=f(_,a);if(u.hasEagerState=!0,u.eagerState=E,kn(E,_))return jo(t,n,u,0),Fe===null&&Yo(),!1}catch{}finally{}if(a=Ju(t,n,u,s),a!==null)return Fn(a,t,s),im(a,n,s),!0}return!1}function Pc(t,n,a,s){if(s={lane:2,revertLane:pf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},pl(t)){if(n)throw Error(r(479))}else n=Ju(t,a,s,2),n!==null&&Fn(n,t,2)}function pl(t){var n=t.alternate;return t===re||n!==null&&n===re}function nm(t,n){Gr=ol=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function im(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Us(t,a)}}var no={readContext:xn,use:cl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};no.useEffectEvent=Ke;var am={readContext:xn,use:cl,useCallback:function(t,n){return Dn().memoizedState=[t,n===void 0?null:n],t},useContext:xn,useEffect:Gp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,hl(4194308,4,Wp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return hl(4194308,4,t,n)},useInsertionEffect:function(t,n){hl(4,2,t,n)},useMemo:function(t,n){var a=Dn();n=n===void 0?null:n;var s=t();if(ar){Nt(!0);try{t()}finally{Nt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Dn();if(a!==void 0){var u=a(n);if(ar){Nt(!0);try{a(n)}finally{Nt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=Y0.bind(null,re,t),[s.memoizedState,t]},useRef:function(t){var n=Dn();return t={current:t},n.memoizedState=t},useState:function(t){t=Cc(t);var n=t.queue,a=em.bind(null,re,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Uc,useDeferredValue:function(t,n){var a=Dn();return Lc(a,t,n)},useTransition:function(){var t=Cc(!1);return t=Kp.bind(null,re,t.queue,!0,!1),Dn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=re,u=Dn();if(Se){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Fe===null)throw Error(r(349));(me&127)!==0||bp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Gp(Rp.bind(null,s,f,t),[t]),s.flags|=2048,Xr(9,{destroy:void 0},Ap.bind(null,s,f,a,n),null),a},useId:function(){var t=Dn(),n=Fe.identifierPrefix;if(Se){var a=bi,s=Ti;a=(s&~(1<<32-Jt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ll++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=H0++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Oc,useFormState:zp,useActionState:zp,useOptimistic:function(t){var n=Dn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Pc.bind(null,re,!0,a),a.dispatch=n,[t,n]},useMemoCache:bc,useCacheRefresh:function(){return Dn().memoizedState=q0.bind(null,re)},useEffectEvent:function(t){var n=Dn(),a={impl:t};return n.memoizedState=a,function(){if((Re&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},zc={readContext:xn,use:cl,useCallback:Yp,useContext:xn,useEffect:Dc,useImperativeHandle:qp,useInsertionEffect:Xp,useLayoutEffect:kp,useMemo:jp,useReducer:fl,useRef:Hp,useState:function(){return fl(Fi)},useDebugValue:Uc,useDeferredValue:function(t,n){var a=$e();return Zp(a,Oe.memoizedState,t,n)},useTransition:function(){var t=fl(Fi)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Tp,useId:$p,useHostTransitionStatus:Oc,useFormState:Bp,useActionState:Bp,useOptimistic:function(t,n){var a=$e();return Dp(a,Oe,t,n)},useMemoCache:bc,useCacheRefresh:tm};zc.useEffectEvent=Vp;var rm={readContext:xn,use:cl,useCallback:Yp,useContext:xn,useEffect:Dc,useImperativeHandle:qp,useInsertionEffect:Xp,useLayoutEffect:kp,useMemo:jp,useReducer:Rc,useRef:Hp,useState:function(){return Rc(Fi)},useDebugValue:Uc,useDeferredValue:function(t,n){var a=$e();return Oe===null?Lc(a,t,n):Zp(a,Oe.memoizedState,t,n)},useTransition:function(){var t=Rc(Fi)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Tp,useId:$p,useHostTransitionStatus:Oc,useFormState:Fp,useActionState:Fp,useOptimistic:function(t,n){var a=$e();return Oe!==null?Dp(a,Oe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:bc,useCacheRefresh:tm};rm.useEffectEvent=Vp;function Bc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ic={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Kn(),u=ga(s);u.payload=n,a!=null&&(u.callback=a),n=_a(t,u,s),n!==null&&(Fn(n,t,s),Ks(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Kn(),u=ga(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=_a(t,u,s),n!==null&&(Fn(n,t,s),Ks(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),s=ga(a);s.tag=2,n!=null&&(s.callback=n),n=_a(t,s,a),n!==null&&(Fn(n,t,a),Ks(n,t,a))}};function sm(t,n,a,s,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(u,f):!0}function om(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Ic.enqueueReplaceState(n,n.state,null)}function rr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function lm(t){qo(t)}function um(t){console.error(t)}function cm(t){qo(t)}function ml(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function fm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Fc(t,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){ml(t,n)},a}function hm(t){return t=ga(t),t.tag=3,t}function dm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){fm(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){fm(n,a,s),typeof u!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function j0(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Pr(n,a,u,!0),a=qn.current,a!==null){switch(a.tag){case 31:case 13:return ai===null?Rl():a.alternate===null&&Qe===0&&(Qe=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===nl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),ff(t,s,u)),!1;case 22:return a.flags|=65536,s===nl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),ff(t,s,u)),!1}throw Error(r(435,a.tag))}return ff(t,s,u),Rl(),!1}if(Se)return n=qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==ac&&(t=Error(r(422),{cause:s}),Ws(ti(t,a)))):(s!==ac&&(n=Error(r(423),{cause:s}),Ws(ti(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=ti(s,a),u=Fc(t.stateNode,s,u),mc(t,u),Qe!==4&&(Qe=2)),!1;var f=Error(r(520),{cause:s});if(f=ti(f,a),co===null?co=[f]:co.push(f),Qe!==4&&(Qe=2),n===null)return!0;s=ti(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Fc(a.stateNode,s,t),mc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=hm(u),dm(u,t,a,s),mc(a,u),!1}a=a.return}while(a!==null);return!1}var Hc=Error(r(461)),rn=!1;function Mn(t,n,a,s){n.child=t===null?_p(n,null,a,s):ir(n,t.child,a,s)}function pm(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var E in s)E!=="ref"&&(_[E]=s[E])}else _=s;return $a(n),s=Mc(t,n,a,_,f,u),E=yc(),t!==null&&!rn?(Ec(t,n,u),Hi(t,n,u)):(Se&&E&&nc(n),n.flags|=1,Mn(t,n,s,u),n.child)}function mm(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!$u(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,gm(t,n,f,s,u)):(t=Ko(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!jc(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(_,s)&&t.ref===n.ref)return Hi(t,n,u)}return n.flags|=1,t=Oi(f,s),t.ref=n.ref,t.return=n,n.child=t}function gm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Vs(f,s)&&t.ref===n.ref)if(rn=!1,n.pendingProps=s=f,jc(t,u))(t.flags&131072)!==0&&(rn=!0);else return n.lanes=t.lanes,Hi(t,n,u)}return Gc(t,n,a,s,u)}function _m(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return vm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&tl(n,f!==null?f.cachePool:null),f!==null?xp(n,f):_c(),Mp(n);else return s=n.lanes=536870912,vm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(tl(n,f.cachePool),xp(n,f),Sa(),n.memoizedState=null):(t!==null&&tl(n,null),_c(),Sa());return Mn(t,n,u,a),n.child}function io(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function vm(t,n,a,s,u){var f=fc();return f=f===null?null:{parent:nn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&tl(n,null),_c(),Mp(n),t!==null&&Pr(t,n,s,!0),n.childLanes=u,null}function gl(t,n){return n=vl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Sm(t,n,a){return ir(n,t.child,null,a),t=gl(n,n.pendingProps),t.flags|=2,Yn(n),n.memoizedState=null,t}function Z0(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(s.mode==="hidden")return t=gl(n,s),n.lanes=536870912,io(null,t);if(Sc(n),(t=ke)?(t=Ug(t,ii),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fa!==null?{id:Ti,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=np(t),a.return=n,n.child=a,Sn=n,ke=null)):t=null,t===null)throw da(n);return n.lanes=536870912,null}return gl(n,s)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Sc(n),u)if(n.flags&256)n.flags&=-257,n=Sm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(rn||Pr(t,n,a,!1),u=(a&t.childLanes)!==0,rn||u){if(s=Fe,s!==null&&(_=Ei(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Za(t,_),Fn(s,t,_),Hc;Rl(),n=Sm(t,n,a)}else t=f.treeContext,ke=ri(_.nextSibling),Sn=n,Se=!0,ha=null,ii=!1,t!==null&&rp(n,t),n=gl(n,s),n.flags|=4096;return n}return t=Oi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function _l(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Gc(t,n,a,s,u){return $a(n),a=Mc(t,n,a,s,void 0,u),s=yc(),t!==null&&!rn?(Ec(t,n,u),Hi(t,n,u)):(Se&&s&&nc(n),n.flags|=1,Mn(t,n,a,u),n.child)}function xm(t,n,a,s,u,f){return $a(n),n.updateQueue=null,a=Ep(n,s,a,u),yp(t),s=yc(),t!==null&&!rn?(Ec(t,n,f),Hi(t,n,f)):(Se&&s&&nc(n),n.flags|=1,Mn(t,n,a,f),n.child)}function Mm(t,n,a,s,u){if($a(n),n.stateNode===null){var f=Ur,_=a.contextType;typeof _=="object"&&_!==null&&(f=xn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ic,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},dc(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?xn(_):Ur,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Bc(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Ic.enqueueReplaceState(f,f.state,null),Js(n,s,f,u),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,z=rr(a,E);f.props=z;var J=f.context,ut=a.contextType;_=Ur,typeof ut=="object"&&ut!==null&&(_=xn(ut));var mt=a.getDerivedStateFromProps;ut=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||J!==_)&&om(n,f,s,_),ma=!1;var $=n.memoizedState;f.state=$,Js(n,s,f,u),Qs(),J=n.memoizedState,E||$!==J||ma?(typeof mt=="function"&&(Bc(n,a,mt,s),J=n.memoizedState),(z=ma||sm(n,a,z,s,$,J,_))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=_,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,pc(t,n),_=n.memoizedProps,ut=rr(a,_),f.props=ut,mt=n.pendingProps,$=f.context,J=a.contextType,z=Ur,typeof J=="object"&&J!==null&&(z=xn(J)),E=a.getDerivedStateFromProps,(J=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==mt||$!==z)&&om(n,f,s,z),ma=!1,$=n.memoizedState,f.state=$,Js(n,s,f,u),Qs();var at=n.memoizedState;_!==mt||$!==at||ma||t!==null&&t.dependencies!==null&&Jo(t.dependencies)?(typeof E=="function"&&(Bc(n,a,E,s),at=n.memoizedState),(ut=ma||sm(n,a,ut,s,$,at,z)||t!==null&&t.dependencies!==null&&Jo(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,at,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,at,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=at),f.props=s,f.state=at,f.context=z,s=ut):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,_l(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=ir(n,t.child,null,u),n.child=ir(n,null,a,u)):Mn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Hi(t,n,u),t}function ym(t,n,a,s){return Qa(),n.flags|=256,Mn(t,n,a,s),n.child}var Vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xc(t){return{baseLanes:t,cachePool:fp()}}function kc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Zn),t}function Em(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(Je.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(u?va(n):Sa(),(t=ke)?(t=Ug(t,ii),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fa!==null?{id:Ti,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=np(t),a.return=n,n.child=a,Sn=n,ke=null)):t=null,t===null)throw da(n);return Rf(t)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,u?(Sa(),u=n.mode,E=vl({mode:"hidden",children:E},u),s=Ka(s,u,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=Xc(a),s.childLanes=kc(t,_,a),n.memoizedState=Vc,io(null,s)):(va(n),Wc(n,E))}var z=t.memoizedState;if(z!==null&&(E=z.dehydrated,E!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=qc(t,n,a)):n.memoizedState!==null?(Sa(),n.child=t.child,n.flags|=128,n=null):(Sa(),E=s.fallback,u=n.mode,s=vl({mode:"visible",children:s.children},u),E=Ka(E,u,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,ir(n,t.child,null,a),s=n.child,s.memoizedState=Xc(a),s.childLanes=kc(t,_,a),n.memoizedState=Vc,n=io(null,s));else if(va(n),Rf(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var J=_.dgst;_=J,s=Error(r(419)),s.stack="",s.digest=_,Ws({value:s,source:null,stack:null}),n=qc(t,n,a)}else if(rn||Pr(t,n,a,!1),_=(a&t.childLanes)!==0,rn||_){if(_=Fe,_!==null&&(s=Ei(_,a),s!==0&&s!==z.retryLane))throw z.retryLane=s,Za(t,s),Fn(_,t,s),Hc;Af(E)||Rl(),n=qc(t,n,a)}else Af(E)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,ke=ri(E.nextSibling),Sn=n,Se=!0,ha=null,ii=!1,t!==null&&rp(n,t),n=Wc(n,s.children),n.flags|=4096);return n}return u?(Sa(),E=s.fallback,u=n.mode,z=t.child,J=z.sibling,s=Oi(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,J!==null?E=Oi(J,E):(E=Ka(E,u,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,io(null,s),s=n.child,E=t.child.memoizedState,E===null?E=Xc(a):(u=E.cachePool,u!==null?(z=nn._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=fp(),E={baseLanes:E.baseLanes|a,cachePool:u}),s.memoizedState=E,s.childLanes=kc(t,_,a),n.memoizedState=Vc,io(t.child,s)):(va(n),a=t.child,t=a.sibling,a=Oi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Wc(t,n){return n=vl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function vl(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function qc(t,n,a){return ir(n,t.child,null,a),t=Wc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Tm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),oc(t.return,n,a)}function Yc(t,n,a,s,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function bm(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var _=Je.current,E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,xt(Je,_),Mn(t,n,s,a),s=Se?ks:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tm(t,a,n);else if(t.tag===19)Tm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&sl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Yc(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&sl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Yc(n,!0,a,null,f,s);break;case"together":Yc(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Hi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Pr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Oi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Oi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function jc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Jo(t)))}function K0(t,n,a){switch(n.tag){case 3:It(n,n.stateNode.containerInfo),pa(n,nn,t.memoizedState.cache),Qa();break;case 27:case 5:Zt(n);break;case 4:It(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Sc(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Em(t,n,a):(va(n),t=Hi(t,n,a),t!==null?t.sibling:null);va(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Pr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return bm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(Je,Je.current),s)break;return null;case 22:return n.lanes=0,_m(t,n,a,n.pendingProps);case 24:pa(n,nn,t.memoizedState.cache)}return Hi(t,n,a)}function Am(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)rn=!0;else{if(!jc(t,a)&&(n.flags&128)===0)return rn=!1,K0(t,n,a);rn=(t.flags&131072)!==0}else rn=!1,Se&&(n.flags&1048576)!==0&&ap(n,ks,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=er(n.elementType),n.type=t,typeof t=="function")$u(t)?(s=rr(t,s),n.tag=1,n=Mm(null,n,t,s,a)):(n.tag=0,n=Gc(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=pm(null,n,t,s,a);break t}else if(u===P){n.tag=14,n=mm(null,n,t,s,a);break t}}throw n=gt(t)||t,Error(r(306,n,""))}}return n;case 0:return Gc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=rr(s,n.pendingProps),Mm(t,n,s,u,a);case 3:t:{if(It(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,pc(t,n),Js(n,s,null,a);var _=n.memoizedState;if(s=_.cache,pa(n,nn,s),s!==f.cache&&lc(n,[nn],a,!0),Qs(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ym(t,n,s,a);break t}else if(s!==u){u=ti(Error(r(424)),n),Ws(u),n=ym(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ke=ri(t.firstChild),Sn=n,Se=!0,ha=null,ii=!0,a=_p(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Qa(),s===u){n=Hi(t,n,a);break t}Mn(t,n,s,a)}n=n.child}return n;case 26:return _l(t,n),t===null?(a=Bg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,s=Ol(yt.current).createElement(a),s[je]=n,s[_n]=t,yn(s,a,t),X(s),n.stateNode=s):n.memoizedState=Bg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Zt(n),t===null&&Se&&(s=n.stateNode=Og(n.type,n.pendingProps,yt.current),Sn=n,ii=!0,u=ke,Ra(n.type)?(Cf=u,ke=ri(s.firstChild)):ke=u),Mn(t,n,n.pendingProps.children,a),_l(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((u=s=ke)&&(s=AS(s,n.type,n.pendingProps,ii),s!==null?(n.stateNode=s,Sn=n,ke=ri(s.firstChild),ii=!1,u=!0):u=!1),u||da(n)),Zt(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,s=f.children,Ef(u,f)?s=null:_!==null&&Ef(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Mc(t,n,G0,null,null,a),So._currentValue=u),_l(t,n),Mn(t,n,s,a),n.child;case 6:return t===null&&Se&&((t=a=ke)&&(a=RS(a,n.pendingProps,ii),a!==null?(n.stateNode=a,Sn=n,ke=null,t=!0):t=!1),t||da(n)),null;case 13:return Em(t,n,a);case 4:return It(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=ir(n,null,s,a):Mn(t,n,s,a),n.child;case 11:return pm(t,n,n.type,n.pendingProps,a);case 7:return Mn(t,n,n.pendingProps,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,pa(n,n.type,s.value),Mn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,$a(n),u=xn(u),s=s(u),n.flags|=1,Mn(t,n,s,a),n.child;case 14:return mm(t,n,n.type,n.pendingProps,a);case 15:return gm(t,n,n.type,n.pendingProps,a);case 19:return bm(t,n,a);case 31:return Z0(t,n,a);case 22:return _m(t,n,a,n.pendingProps);case 24:return $a(n),s=xn(nn),t===null?(u=fc(),u===null&&(u=Fe,f=uc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},dc(n),pa(n,nn,u)):((t.lanes&a)!==0&&(pc(t,n),Js(n,null,null,a),Qs()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),pa(n,nn,s)):(s=f.cache,pa(n,nn,s),s!==u.cache&&lc(n,[nn],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Gi(t){t.flags|=4}function Zc(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if($m())t.flags|=8192;else throw nr=nl,hc}else t.flags&=-16777217}function Rm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Vg(n))if($m())t.flags|=8192;else throw nr=nl,hc}function Sl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ln():536870912,t.lanes|=n,Yr|=n)}function ao(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Q0(t,n,a){var s=n.pendingProps;switch(ic(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Bi(nn),jt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Or(n)?Gi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,rc())),We(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Gi(n),f!==null?(We(n),Rm(n,f)):(We(n),Zc(n,u,null,s,a))):f?f!==t.memoizedState?(Gi(n),We(n),Rm(n,f)):(We(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Gi(n),We(n),Zc(n,u,t,s,a)),null;case 27:if(Ve(n),a=yt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}t=K.current,Or(n)?sp(n):(t=Og(u,s,a),n.stateNode=t,Gi(n))}return We(n),null;case 5:if(Ve(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}if(f=K.current,Or(n))sp(n);else{var _=Ol(yt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(u,{is:s.is}):_.createElement(u)}}f[je]=n,f[_n]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(yn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Gi(n)}}return We(n),Zc(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Gi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=yt.current,Or(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Sn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[je]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Eg(t.nodeValue,a)),t||da(n,!0)}else t=Ol(t).createTextNode(s),t[je]=n,n.stateNode=t}return We(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Or(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[je]=n}else Qa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),t=!1}else a=rc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Yn(n),n):(Yn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return We(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Or(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[je]=n}else Qa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),u=!1}else u=rc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Yn(n),n):(Yn(n),null)}return Yn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Sl(n,n.updateQueue),We(n),null);case 4:return jt(),t===null&&vf(n.stateNode.containerInfo),We(n),null;case 10:return Bi(n.type),We(n),null;case 19:if(nt(Je),s=n.memoizedState,s===null)return We(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)ao(s,!1);else{if(Qe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=sl(t),f!==null){for(n.flags|=128,ao(s,!1),t=f.updateQueue,n.updateQueue=t,Sl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)ep(a,t),a=a.sibling;return xt(Je,Je.current&1|2),Se&&Pi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&ft()>Tl&&(n.flags|=128,u=!0,ao(s,!1),n.lanes=4194304)}else{if(!u)if(t=sl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Sl(n,t),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Se)return We(n),null}else 2*ft()-s.renderingStartTime>Tl&&a!==536870912&&(n.flags|=128,u=!0,ao(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ft(),t.sibling=null,a=Je.current,xt(Je,u?a&1|2:a&1),Se&&Pi(n,s.treeForkCount),t):(We(n),null);case 22:case 23:return Yn(n),vc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Sl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&nt(tr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bi(nn),We(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function J0(t,n){switch(ic(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Bi(nn),jt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ve(n),null;case 31:if(n.memoizedState!==null){if(Yn(n),n.alternate===null)throw Error(r(340));Qa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Yn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Qa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return nt(Je),null;case 4:return jt(),null;case 10:return Bi(n.type),null;case 22:case 23:return Yn(n),vc(),t!==null&&nt(tr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Bi(nn),null;case 25:return null;default:return null}}function Cm(t,n){switch(ic(n),n.tag){case 3:Bi(nn),jt();break;case 26:case 27:case 5:Ve(n);break;case 4:jt();break;case 31:n.memoizedState!==null&&Yn(n);break;case 13:Yn(n);break;case 19:nt(Je);break;case 10:Bi(n.type);break;case 22:case 23:Yn(n),vc(),t!==null&&nt(tr);break;case 24:Bi(nn)}}function ro(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==u)}}catch(E){Ue(n,n.return,E)}}function xa(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var _=s.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,u=n;var z=a,J=E;try{J()}catch(ut){Ue(u,z,ut)}}}s=s.next}while(s!==f)}}catch(ut){Ue(n,n.return,ut)}}function wm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Sp(n,a)}catch(s){Ue(t,t.return,s)}}}function Dm(t,n,a){a.props=rr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ue(t,n,s)}}function so(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Ue(t,n,u)}}function Ai(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ue(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ue(t,n,u)}else a.current=null}function Um(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ue(t,t.return,u)}}function Kc(t,n,a){try{var s=t.stateNode;xS(s,t.type,a,n),s[_n]=n}catch(u){Ue(t,t.return,u)}}function Lm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ra(t.type)||t.tag===4}function Qc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Lm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ra(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Li));else if(s!==4&&(s===27&&Ra(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Jc(t,n,a),t=t.sibling;t!==null;)Jc(t,n,a),t=t.sibling}function xl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ra(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(xl(t,n,a),t=t.sibling;t!==null;)xl(t,n,a),t=t.sibling}function Nm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);yn(n,s,a),n[je]=t,n[_n]=a}catch(f){Ue(t,t.return,f)}}var Vi=!1,sn=!1,$c=!1,Om=typeof WeakSet=="function"?WeakSet:Set,pn=null;function $0(t,n){if(t=t.containerInfo,Mf=Gl,t=qd(t),qu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,E=-1,z=-1,J=0,ut=0,mt=t,$=null;e:for(;;){for(var at;mt!==a||u!==0&&mt.nodeType!==3||(E=_+u),mt!==f||s!==0&&mt.nodeType!==3||(z=_+s),mt.nodeType===3&&(_+=mt.nodeValue.length),(at=mt.firstChild)!==null;)$=mt,mt=at;for(;;){if(mt===t)break e;if($===a&&++J===u&&(E=_),$===f&&++ut===s&&(z=_),(at=mt.nextSibling)!==null)break;mt=$,$=mt.parentNode}mt=at}a=E===-1||z===-1?null:{start:E,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(yf={focusedElem:t,selectionRange:a},Gl=!1,pn=n;pn!==null;)if(n=pn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,pn=t;else for(;pn!==null;){switch(n=pn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Bt=rr(a.type,u);t=s.getSnapshotBeforeUpdate(Bt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Kt){Ue(a,a.return,Kt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)bf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":bf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,pn=t;break}pn=n.return}}function Pm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ki(t,a),s&4&&ro(5,a);break;case 1:if(ki(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Ue(a,a.return,_)}else{var u=rr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ue(a,a.return,_)}}s&64&&wm(a),s&512&&so(a,a.return);break;case 3:if(ki(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Sp(t,n)}catch(_){Ue(a,a.return,_)}}break;case 27:n===null&&s&4&&Nm(a);case 26:case 5:ki(t,a),n===null&&s&4&&Um(a),s&512&&so(a,a.return);break;case 12:ki(t,a);break;case 31:ki(t,a),s&4&&Im(t,a);break;case 13:ki(t,a),s&4&&Fm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=lS.bind(null,a),CS(t,a))));break;case 22:if(s=a.memoizedState!==null||Vi,!s){n=n!==null&&n.memoizedState!==null||sn,u=Vi;var f=sn;Vi=s,(sn=n)&&!f?Wi(t,a,(a.subtreeFlags&8772)!==0):ki(t,a),Vi=u,sn=f}break;case 30:break;default:ki(t,a)}}function zm(t){var n=t.alternate;n!==null&&(t.alternate=null,zm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Os(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ye=null,Pn=!1;function Xi(t,n,a){for(a=a.child;a!==null;)Bm(t,n,a),a=a.sibling}function Bm(t,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(kt,a)}catch{}switch(a.tag){case 26:sn||Ai(a,n),Xi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:sn||Ai(a,n);var s=Ye,u=Pn;Ra(a.type)&&(Ye=a.stateNode,Pn=!1),Xi(t,n,a),go(a.stateNode),Ye=s,Pn=u;break;case 5:sn||Ai(a,n);case 6:if(s=Ye,u=Pn,Ye=null,Xi(t,n,a),Ye=s,Pn=u,Ye!==null)if(Pn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(f){Ue(a,n,f)}else try{Ye.removeChild(a.stateNode)}catch(f){Ue(a,n,f)}break;case 18:Ye!==null&&(Pn?(t=Ye,wg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),es(t)):wg(Ye,a.stateNode));break;case 4:s=Ye,u=Pn,Ye=a.stateNode.containerInfo,Pn=!0,Xi(t,n,a),Ye=s,Pn=u;break;case 0:case 11:case 14:case 15:xa(2,a,n),sn||xa(4,a,n),Xi(t,n,a);break;case 1:sn||(Ai(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Dm(a,n,s)),Xi(t,n,a);break;case 21:Xi(t,n,a);break;case 22:sn=(s=sn)||a.memoizedState!==null,Xi(t,n,a),sn=s;break;default:Xi(t,n,a)}}function Im(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{es(t)}catch(a){Ue(n,n.return,a)}}}function Fm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{es(t)}catch(a){Ue(n,n.return,a)}}function tS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Om),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Om),n;default:throw Error(r(435,t.tag))}}function Ml(t,n){var a=tS(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=uS.bind(null,t,s);s.then(u,u)}})}function zn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,_=n,E=_;t:for(;E!==null;){switch(E.tag){case 27:if(Ra(E.type)){Ye=E.stateNode,Pn=!1;break t}break;case 5:Ye=E.stateNode,Pn=!1;break t;case 3:case 4:Ye=E.stateNode.containerInfo,Pn=!0;break t}E=E.return}if(Ye===null)throw Error(r(160));Bm(f,_,u),Ye=null,Pn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Hm(n,t),n=n.sibling}var mi=null;function Hm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:zn(n,t),Bn(t),s&4&&(xa(3,t,t.return),ro(3,t),xa(5,t,t.return));break;case 1:zn(n,t),Bn(t),s&512&&(sn||a===null||Ai(a,a.return)),s&64&&Vi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=mi;if(zn(n,t),Bn(t),s&512&&(sn||a===null||Ai(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Wa]||f[je]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),yn(f,s,a),f[je]=t,X(f),s=f;break t;case"link":var _=Hg("link","href",u).get(s+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(f=_[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break e}}f=u.createElement(s),yn(f,s,a),u.head.appendChild(f);break;case"meta":if(_=Hg("meta","content",u).get(s+(a.content||""))){for(E=0;E<_.length;E++)if(f=_[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break e}}f=u.createElement(s),yn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[je]=t,X(f),s=f}t.stateNode=s}else Gg(u,t.type,t.stateNode);else t.stateNode=Fg(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Gg(u,t.type,t.stateNode):Fg(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Kc(t,t.memoizedProps,a.memoizedProps)}break;case 27:zn(n,t),Bn(t),s&512&&(sn||a===null||Ai(a,a.return)),a!==null&&s&4&&Kc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,t),Bn(t),s&512&&(sn||a===null||Ai(a,a.return)),t.flags&32){u=t.stateNode;try{Nn(u,"")}catch(Bt){Ue(t,t.return,Bt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Kc(t,u,a!==null?a.memoizedProps:u)),s&1024&&($c=!0);break;case 6:if(zn(n,t),Bn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Bt){Ue(t,t.return,Bt)}}break;case 3:if(Bl=null,u=mi,mi=Pl(n.containerInfo),zn(n,t),mi=u,Bn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{es(n.containerInfo)}catch(Bt){Ue(t,t.return,Bt)}$c&&($c=!1,Gm(t));break;case 4:s=mi,mi=Pl(t.stateNode.containerInfo),zn(n,t),Bn(t),mi=s;break;case 12:zn(n,t),Bn(t);break;case 31:zn(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ml(t,s)));break;case 13:zn(n,t),Bn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(El=ft()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ml(t,s)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,J=Vi,ut=sn;if(Vi=J||u,sn=ut||z,zn(n,t),sn=ut,Vi=J,Bn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||Vi||sn||sr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=z.stateNode;var mt=z.memoizedProps.style,$=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;E.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Bt){Ue(z,z.return,Bt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(Bt){Ue(z,z.return,Bt)}}}else if(n.tag===18){if(a===null){z=n;try{var at=z.stateNode;u?Dg(at,!0):Dg(z.stateNode,!1)}catch(Bt){Ue(z,z.return,Bt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ml(t,a))));break;case 19:zn(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ml(t,s)));break;case 30:break;case 21:break;default:zn(n,t),Bn(t)}}function Bn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Lm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Qc(t);xl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Nn(_,""),a.flags&=-33);var E=Qc(t);xl(t,E,_);break;case 3:case 4:var z=a.stateNode.containerInfo,J=Qc(t);Jc(t,J,z);break;default:throw Error(r(161))}}catch(ut){Ue(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Gm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Gm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ki(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Pm(t,n.alternate,n),n=n.sibling}function sr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:xa(4,n,n.return),sr(n);break;case 1:Ai(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Dm(n,n.return,a),sr(n);break;case 27:go(n.stateNode);case 26:case 5:Ai(n,n.return),sr(n);break;case 22:n.memoizedState===null&&sr(n);break;case 30:sr(n);break;default:sr(n)}t=t.sibling}}function Wi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Wi(u,f,a),ro(4,f);break;case 1:if(Wi(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Ue(s,s.return,J)}if(s=f,u=s.updateQueue,u!==null){var E=s.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)vp(z[u],E)}catch(J){Ue(s,s.return,J)}}a&&_&64&&wm(f),so(f,f.return);break;case 27:Nm(f);case 26:case 5:Wi(u,f,a),a&&s===null&&_&4&&Um(f),so(f,f.return);break;case 12:Wi(u,f,a);break;case 31:Wi(u,f,a),a&&_&4&&Im(u,f);break;case 13:Wi(u,f,a),a&&_&4&&Fm(u,f);break;case 22:f.memoizedState===null&&Wi(u,f,a),so(f,f.return);break;case 30:break;default:Wi(u,f,a)}n=n.sibling}}function tf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qs(a))}function ef(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t))}function gi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Vm(t,n,a,s),n=n.sibling}function Vm(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:gi(t,n,a,s),u&2048&&ro(9,n);break;case 1:gi(t,n,a,s);break;case 3:gi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t)));break;case 12:if(u&2048){gi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,E=f.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Ue(n,n.return,z)}}else gi(t,n,a,s);break;case 31:gi(t,n,a,s);break;case 13:gi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?gi(t,n,a,s):oo(t,n):f._visibility&2?gi(t,n,a,s):(f._visibility|=2,kr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&tf(_,n);break;case 24:gi(t,n,a,s),u&2048&&ef(n.alternate,n);break;default:gi(t,n,a,s)}}function kr(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,E=a,z=s,J=_.flags;switch(_.tag){case 0:case 11:case 15:kr(f,_,E,z,u),ro(8,_);break;case 23:break;case 22:var ut=_.stateNode;_.memoizedState!==null?ut._visibility&2?kr(f,_,E,z,u):oo(f,_):(ut._visibility|=2,kr(f,_,E,z,u)),u&&J&2048&&tf(_.alternate,_);break;case 24:kr(f,_,E,z,u),u&&J&2048&&ef(_.alternate,_);break;default:kr(f,_,E,z,u)}n=n.sibling}}function oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:oo(a,s),u&2048&&tf(s.alternate,s);break;case 24:oo(a,s),u&2048&&ef(s.alternate,s);break;default:oo(a,s)}n=n.sibling}}var lo=8192;function Wr(t,n,a){if(t.subtreeFlags&lo)for(t=t.child;t!==null;)Xm(t,n,a),t=t.sibling}function Xm(t,n,a){switch(t.tag){case 26:Wr(t,n,a),t.flags&lo&&t.memoizedState!==null&&HS(a,mi,t.memoizedState,t.memoizedProps);break;case 5:Wr(t,n,a);break;case 3:case 4:var s=mi;mi=Pl(t.stateNode.containerInfo),Wr(t,n,a),mi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=lo,lo=16777216,Wr(t,n,a),lo=s):Wr(t,n,a));break;default:Wr(t,n,a)}}function km(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,qm(s,t)}km(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wm(t),t=t.sibling}function Wm(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&xa(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,yl(t)):uo(t);break;default:uo(t)}}function yl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,qm(s,t)}km(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:xa(8,n,n.return),yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,yl(n));break;default:yl(n)}t=t.sibling}}function qm(t,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,pn=s;else t:for(a=t;pn!==null;){s=pn;var u=s.sibling,f=s.return;if(zm(s),s===a){pn=null;break t}if(u!==null){u.return=f,pn=u;break t}pn=f}}}var eS={getCacheForType:function(t){var n=xn(nn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return xn(nn).controller.signal}},nS=typeof WeakMap=="function"?WeakMap:Map,Re=0,Fe=null,fe=null,me=0,De=0,jn=null,Ma=!1,qr=!1,nf=!1,qi=0,Qe=0,ya=0,or=0,af=0,Zn=0,Yr=0,co=null,In=null,rf=!1,El=0,Ym=0,Tl=1/0,bl=null,Ea=null,cn=0,Ta=null,jr=null,Yi=0,sf=0,of=null,jm=null,fo=0,lf=null;function Kn(){return(Re&2)!==0&&me!==0?me&-me:O.T!==null?pf():Ls()}function Zm(){if(Zn===0)if((me&536870912)===0||Se){var t=ot;ot<<=1,(ot&3932160)===0&&(ot=262144),Zn=t}else Zn=536870912;return t=qn.current,t!==null&&(t.flags|=32),Zn}function Fn(t,n,a){(t===Fe&&(De===2||De===9)||t.cancelPendingCommit!==null)&&(Zr(t,0),ba(t,me,Zn,!1)),gn(t,a),((Re&2)===0||t!==Fe)&&(t===Fe&&((Re&2)===0&&(or|=a),Qe===4&&ba(t,me,Zn,!1)),Ri(t))}function Km(t,n,a){if((Re&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||$t(t,n),u=s?rS(t,n):cf(t,n,!0),f=s;do{if(u===0){qr&&!s&&ba(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!iS(a)){u=cf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=t;u=co;var z=E.current.memoizedState.isDehydrated;if(z&&(Zr(E,_).flags|=256),_=cf(E,_,!1),_!==2){if(nf&&!z){E.errorRecoveryDisabledLanes|=f,or|=f,u=4;break t}f=In,In=u,f!==null&&(In===null?In=f:In.push.apply(In,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){Zr(t,0),ba(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ba(s,n,Zn,!Ma);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=El+300-ft(),10<u)){if(ba(s,n,Zn,!Ma),wt(s,0,!0)!==0)break t;Yi=n,s.timeoutHandle=Rg(Qm.bind(null,s,a,In,bl,rf,n,Zn,or,Yr,Ma,f,"Throttled",-0,0),u);break t}Qm(s,a,In,bl,rf,n,Zn,or,Yr,Ma,f,null,-0,0)}}break}while(!0);Ri(t)}function Qm(t,n,a,s,u,f,_,E,z,J,ut,mt,$,at){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Li},Xm(n,f,mt);var Bt=(f&62914560)===f?El-ft():(f&4194048)===f?Ym-ft():0;if(Bt=GS(mt,Bt),Bt!==null){Yi=f,t.cancelPendingCommit=Bt(rg.bind(null,t,n,f,a,s,u,_,E,z,ut,mt,null,$,at)),ba(t,f,_,!J);return}}rg(t,n,f,a,s,u,_,E,z)}function iS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!kn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ba(t,n,a,s){n&=~af,n&=~or,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Jt(u),_=1<<f;s[f]=-1,u&=~_}a!==0&&Ds(t,a,n)}function Al(){return(Re&6)===0?(ho(0),!1):!0}function uf(){if(fe!==null){if(De===0)var t=fe.return;else t=fe,zi=Ja=null,Tc(t),Fr=null,js=0,t=fe;for(;t!==null;)Cm(t.alternate,t),t=t.return;fe=null}}function Zr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ES(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Yi=0,uf(),Fe=t,fe=a=Oi(t.current,null),me=n,De=0,jn=null,Ma=!1,qr=$t(t,n),nf=!1,Yr=Zn=af=or=ya=Qe=0,In=co=null,rf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Jt(s),f=1<<u;n|=t[u],s&=~f}return qi=n,Yo(),a}function Jm(t,n){re=null,O.H=no,n===Ir||n===el?(n=pp(),De=3):n===hc?(n=pp(),De=4):De=n===Hc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,fe===null&&(Qe=1,ml(t,ti(n,t.current)))}function $m(){var t=qn.current;return t===null?!0:(me&4194048)===me?ai===null:(me&62914560)===me||(me&536870912)!==0?t===ai:!1}function tg(){var t=O.H;return O.H=no,t===null?no:t}function eg(){var t=O.A;return O.A=eS,t}function Rl(){Qe=4,Ma||(me&4194048)!==me&&qn.current!==null||(qr=!0),(ya&134217727)===0&&(or&134217727)===0||Fe===null||ba(Fe,me,Zn,!1)}function cf(t,n,a){var s=Re;Re|=2;var u=tg(),f=eg();(Fe!==t||me!==n)&&(bl=null,Zr(t,n)),n=!1;var _=Qe;t:do try{if(De!==0&&fe!==null){var E=fe,z=jn;switch(De){case 8:uf(),_=6;break t;case 3:case 2:case 9:case 6:qn.current===null&&(n=!0);var J=De;if(De=0,jn=null,Kr(t,E,z,J),a&&qr){_=0;break t}break;default:J=De,De=0,jn=null,Kr(t,E,z,J)}}aS(),_=Qe;break}catch(ut){Jm(t,ut)}while(!0);return n&&t.shellSuspendCounter++,zi=Ja=null,Re=s,O.H=u,O.A=f,fe===null&&(Fe=null,me=0,Yo()),_}function aS(){for(;fe!==null;)ng(fe)}function rS(t,n){var a=Re;Re|=2;var s=tg(),u=eg();Fe!==t||me!==n?(bl=null,Tl=ft()+500,Zr(t,n)):qr=$t(t,n);t:do try{if(De!==0&&fe!==null){n=fe;var f=jn;e:switch(De){case 1:De=0,jn=null,Kr(t,n,f,1);break;case 2:case 9:if(hp(f)){De=0,jn=null,ig(n);break}n=function(){De!==2&&De!==9||Fe!==t||(De=7),Ri(t)},f.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:hp(f)?(De=0,jn=null,ig(n)):(De=0,jn=null,Kr(t,n,f,7));break;case 5:var _=null;switch(fe.tag){case 26:_=fe.memoizedState;case 5:case 27:var E=fe;if(_?Vg(_):E.stateNode.complete){De=0,jn=null;var z=E.sibling;if(z!==null)fe=z;else{var J=E.return;J!==null?(fe=J,Cl(J)):fe=null}break e}}De=0,jn=null,Kr(t,n,f,5);break;case 6:De=0,jn=null,Kr(t,n,f,6);break;case 8:uf(),Qe=6;break t;default:throw Error(r(462))}}sS();break}catch(ut){Jm(t,ut)}while(!0);return zi=Ja=null,O.H=s,O.A=u,Re=a,fe!==null?0:(Fe=null,me=0,Yo(),Qe)}function sS(){for(;fe!==null&&!T();)ng(fe)}function ng(t){var n=Am(t.alternate,t,qi);t.memoizedProps=t.pendingProps,n===null?Cl(t):fe=n}function ig(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=xm(a,n,n.pendingProps,n.type,void 0,me);break;case 11:n=xm(a,n,n.pendingProps,n.type.render,n.ref,me);break;case 5:Tc(n);default:Cm(a,n),n=fe=ep(n,qi),n=Am(a,n,qi)}t.memoizedProps=t.pendingProps,n===null?Cl(t):fe=n}function Kr(t,n,a,s){zi=Ja=null,Tc(n),Fr=null,js=0;var u=n.return;try{if(j0(t,u,n,a,me)){Qe=1,ml(t,ti(a,t.current)),fe=null;return}}catch(f){if(u!==null)throw fe=u,f;Qe=1,ml(t,ti(a,t.current)),fe=null;return}n.flags&32768?(Se||s===1?t=!0:qr||(me&536870912)!==0?t=!1:(Ma=t=!0,(s===2||s===9||s===3||s===6)&&(s=qn.current,s!==null&&s.tag===13&&(s.flags|=16384))),ag(n,t)):Cl(n)}function Cl(t){var n=t;do{if((n.flags&32768)!==0){ag(n,Ma);return}t=n.return;var a=Q0(n.alternate,n,qi);if(a!==null){fe=a;return}if(n=n.sibling,n!==null){fe=n;return}fe=n=t}while(n!==null);Qe===0&&(Qe=5)}function ag(t,n){do{var a=J0(t.alternate,t);if(a!==null){a.flags&=32767,fe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){fe=t;return}fe=t=a}while(t!==null);Qe=6,fe=null}function rg(t,n,a,s,u,f,_,E,z){t.cancelPendingCommit=null;do wl();while(cn!==0);if((Re&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Qu,fi(t,a,f,_,E,z),t===Fe&&(fe=Fe=null,me=0),jr=n,Ta=t,Yi=a,sf=f,of=u,jm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,cS(Ct,function(){return cg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,u=Z.p,Z.p=2,_=Re,Re|=4;try{$0(t,n,a)}finally{Re=_,Z.p=u,O.T=s}}cn=1,sg(),og(),lg()}}function sg(){if(cn===1){cn=0;var t=Ta,n=jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=Z.p;Z.p=2;var u=Re;Re|=4;try{Hm(n,t);var f=yf,_=qd(t.containerInfo),E=f.focusedElem,z=f.selectionRange;if(_!==E&&E&&E.ownerDocument&&Wd(E.ownerDocument.documentElement,E)){if(z!==null&&qu(E)){var J=z.start,ut=z.end;if(ut===void 0&&(ut=J),"selectionStart"in E)E.selectionStart=J,E.selectionEnd=Math.min(ut,E.value.length);else{var mt=E.ownerDocument||document,$=mt&&mt.defaultView||window;if($.getSelection){var at=$.getSelection(),Bt=E.textContent.length,Kt=Math.min(z.start,Bt),ze=z.end===void 0?Kt:Math.min(z.end,Bt);!at.extend&&Kt>ze&&(_=ze,ze=Kt,Kt=_);var Y=kd(E,Kt),F=kd(E,ze);if(Y&&F&&(at.rangeCount!==1||at.anchorNode!==Y.node||at.anchorOffset!==Y.offset||at.focusNode!==F.node||at.focusOffset!==F.offset)){var Q=mt.createRange();Q.setStart(Y.node,Y.offset),at.removeAllRanges(),Kt>ze?(at.addRange(Q),at.extend(F.node,F.offset)):(Q.setEnd(F.node,F.offset),at.addRange(Q))}}}}for(mt=[],at=E;at=at.parentNode;)at.nodeType===1&&mt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<mt.length;E++){var ht=mt[E];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Gl=!!Mf,yf=Mf=null}finally{Re=u,Z.p=s,O.T=a}}t.current=n,cn=2}}function og(){if(cn===2){cn=0;var t=Ta,n=jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=Z.p;Z.p=2;var u=Re;Re|=4;try{Pm(t,n.alternate,n)}finally{Re=u,Z.p=s,O.T=a}}cn=3}}function lg(){if(cn===4||cn===3){cn=0,tt();var t=Ta,n=jr,a=Yi,s=jm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?cn=5:(cn=0,jr=Ta=null,ug(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ea=null),Er(a),n=n.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(kt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,u=Z.p,Z.p=2,O.T=null;try{for(var f=t.onRecoverableError,_=0;_<s.length;_++){var E=s[_];f(E.value,{componentStack:E.stack})}}finally{O.T=n,Z.p=u}}(Yi&3)!==0&&wl(),Ri(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===lf?fo++:(fo=0,lf=t):fo=0,ho(0)}}function ug(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,qs(n)))}function wl(){return sg(),og(),lg(),cg()}function cg(){if(cn!==5)return!1;var t=Ta,n=sf;sf=0;var a=Er(Yi),s=O.T,u=Z.p;try{Z.p=32>a?32:a,O.T=null,a=of,of=null;var f=Ta,_=Yi;if(cn=0,jr=Ta=null,Yi=0,(Re&6)!==0)throw Error(r(331));var E=Re;if(Re|=4,Wm(f.current),Vm(f,f.current,_,a),Re=E,ho(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(kt,f)}catch{}return!0}finally{Z.p=u,O.T=s,ug(t,n)}}function fg(t,n,a){n=ti(a,n),n=Fc(t.stateNode,n,2),t=_a(t,n,2),t!==null&&(gn(t,2),Ri(t))}function Ue(t,n,a){if(t.tag===3)fg(t,t,a);else for(;n!==null;){if(n.tag===3){fg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ea===null||!Ea.has(s))){t=ti(a,t),a=hm(2),s=_a(n,a,2),s!==null&&(dm(a,s,n,t),gn(s,2),Ri(s));break}}n=n.return}}function ff(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new nS;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(nf=!0,u.add(a),t=oS.bind(null,t,n,a),n.then(t,t))}function oS(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Fe===t&&(me&a)===a&&(Qe===4||Qe===3&&(me&62914560)===me&&300>ft()-El?(Re&2)===0&&Zr(t,0):af|=a,Yr===me&&(Yr=0)),Ri(t)}function hg(t,n){n===0&&(n=ln()),t=Za(t,n),t!==null&&(gn(t,n),Ri(t))}function lS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),hg(t,a)}function uS(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),hg(t,a)}function cS(t,n){return Vt(t,n)}var Dl=null,Qr=null,hf=!1,Ul=!1,df=!1,Aa=0;function Ri(t){t!==Qr&&t.next===null&&(Qr===null?Dl=Qr=t:Qr=Qr.next=t),Ul=!0,hf||(hf=!0,hS())}function ho(t,n){if(!df&&Ul){df=!0;do for(var a=!1,s=Dl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var _=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Jt(42|t)+1)-1,f&=u&~(_&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,gg(s,f))}else f=me,f=wt(s,s===Fe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||$t(s,f)||(a=!0,gg(s,f));s=s.next}while(a);df=!1}}function fS(){dg()}function dg(){Ul=hf=!1;var t=0;Aa!==0&&yS()&&(t=Aa);for(var n=ft(),a=null,s=Dl;s!==null;){var u=s.next,f=pg(s,n);f===0?(s.next=null,a===null?Dl=u:a.next=u,u===null&&(Qr=a)):(a=s,(t!==0||(f&3)!==0)&&(Ul=!0)),s=u}cn!==0&&cn!==5||ho(t),Aa!==0&&(Aa=0)}function pg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Jt(f),E=1<<_,z=u[_];z===-1?((E&a)===0||(E&s)!==0)&&(u[_]=qe(E,n)):z<=n&&(t.expiredLanes|=E),f&=~E}if(n=Fe,a=me,a=wt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(De===2||De===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&U(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||$t(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&U(s),Er(a)){case 2:case 8:a=Ht;break;case 32:a=Ct;break;case 268435456:a=pe;break;default:a=Ct}return s=mg.bind(null,t),a=Vt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&U(s),t.callbackPriority=2,t.callbackNode=null,2}function mg(t,n){if(cn!==0&&cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(wl()&&t.callbackNode!==a)return null;var s=me;return s=wt(t,t===Fe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Km(t,s,n),pg(t,ft()),t.callbackNode!=null&&t.callbackNode===a?mg.bind(null,t):null)}function gg(t,n){if(wl())return null;Km(t,n,!0)}function hS(){TS(function(){(Re&6)!==0?Vt(pt,fS):dg()})}function pf(){if(Aa===0){var t=zr;t===0&&(t=At,At<<=1,(At&261888)===0&&(At=256)),Aa=t}return Aa}function _g(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Fo(""+t)}function vg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function dS(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=_g((u[_n]||null).action),_=s.submitter;_&&(n=(n=_[_n]||null)?_g(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var E=new Xo("action","action",null,s,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Aa!==0){var z=_?vg(u,_):new FormData(u);Nc(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(E.preventDefault(),z=_?vg(u,_):new FormData(u),Nc(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var mf=0;mf<Ku.length;mf++){var gf=Ku[mf],pS=gf.toLowerCase(),mS=gf[0].toUpperCase()+gf.slice(1);pi(pS,"on"+mS)}pi(Zd,"onAnimationEnd"),pi(Kd,"onAnimationIteration"),pi(Qd,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(U0,"onTransitionRun"),pi(L0,"onTransitionStart"),pi(N0,"onTransitionCancel"),pi(Jd,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function Sg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var E=s[_],z=E.instance,J=E.currentTarget;if(E=E.listener,z!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=J;try{f(u)}catch(ut){qo(ut)}u.currentTarget=null,f=z}else for(_=0;_<s.length;_++){if(E=s[_],z=E.instance,J=E.currentTarget,E=E.listener,z!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=J;try{f(u)}catch(ut){qo(ut)}u.currentTarget=null,f=z}}}}function he(t,n){var a=n[Ns];a===void 0&&(a=n[Ns]=new Set);var s=t+"__bubble";a.has(s)||(xg(n,t,2,!1),a.add(s))}function _f(t,n,a){var s=0;n&&(s|=4),xg(a,t,s,n)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function vf(t){if(!t[Ll]){t[Ll]=!0,Tt.forEach(function(a){a!=="selectionchange"&&(gS.has(a)||_f(a,!1,t),_f(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ll]||(n[Ll]=!0,_f("selectionchange",!1,n))}}function xg(t,n,a,s){switch(Zg(n)){case 2:var u=kS;break;case 8:u=WS;break;default:u=Nf}a=u.bind(null,n,a,t),u=void 0,!Bu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Sf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var E=s.stateNode.containerInfo;if(E===u)break;if(_===4)for(_=s.return;_!==null;){var z=_.tag;if((z===3||z===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;E!==null;){if(_=R(E),_===null)return;if(z=_.tag,z===5||z===6||z===26||z===27){s=f=_;continue t}E=E.parentNode}}s=s.return}bd(function(){var J=f,ut=Pu(a),mt=[];t:{var $=$d.get(t);if($!==void 0){var at=Xo,Bt=t;switch(t){case"keypress":if(Go(a)===0)break t;case"keydown":case"keyup":at=u0;break;case"focusin":Bt="focus",at=Gu;break;case"focusout":Bt="blur",at=Gu;break;case"beforeblur":case"afterblur":at=Gu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=Cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=Qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=h0;break;case Zd:case Kd:case Qd:at=t0;break;case Jd:at=p0;break;case"scroll":case"scrollend":at=Zv;break;case"wheel":at=g0;break;case"copy":case"cut":case"paste":at=n0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Dd;break;case"toggle":case"beforetoggle":at=v0}var Kt=(n&4)!==0,ze=!Kt&&(t==="scroll"||t==="scrollend"),Y=Kt?$!==null?$+"Capture":null:$;Kt=[];for(var F=J,Q;F!==null;){var ht=F;if(Q=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||Q===null||Y===null||(ht=Ps(F,Y),ht!=null&&Kt.push(mo(F,ht,Q))),ze)break;F=F.return}0<Kt.length&&($=new at($,Bt,null,a,ut),mt.push({event:$,listeners:Kt}))}}if((n&7)===0){t:{if($=t==="mouseover"||t==="pointerover",at=t==="mouseout"||t==="pointerout",$&&a!==Ou&&(Bt=a.relatedTarget||a.fromElement)&&(R(Bt)||Bt[Ui]))break t;if((at||$)&&($=ut.window===ut?ut:($=ut.ownerDocument)?$.defaultView||$.parentWindow:window,at?(Bt=a.relatedTarget||a.toElement,at=J,Bt=Bt?R(Bt):null,Bt!==null&&(ze=c(Bt),Kt=Bt.tag,Bt!==ze||Kt!==5&&Kt!==27&&Kt!==6)&&(Bt=null)):(at=null,Bt=J),at!==Bt)){if(Kt=Cd,ht="onMouseLeave",Y="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=Dd,ht="onPointerLeave",Y="onPointerEnter",F="pointer"),ze=at==null?$:et(at),Q=Bt==null?$:et(Bt),$=new Kt(ht,F+"leave",at,a,ut),$.target=ze,$.relatedTarget=Q,ht=null,R(ut)===J&&(Kt=new Kt(Y,F+"enter",Bt,a,ut),Kt.target=Q,Kt.relatedTarget=ze,ht=Kt),ze=ht,at&&Bt)e:{for(Kt=_S,Y=at,F=Bt,Q=0,ht=Y;ht;ht=Kt(ht))Q++;ht=0;for(var qt=F;qt;qt=Kt(qt))ht++;for(;0<Q-ht;)Y=Kt(Y),Q--;for(;0<ht-Q;)F=Kt(F),ht--;for(;Q--;){if(Y===F||F!==null&&Y===F.alternate){Kt=Y;break e}Y=Kt(Y),F=Kt(F)}Kt=null}else Kt=null;at!==null&&Mg(mt,$,at,Kt,!1),Bt!==null&&ze!==null&&Mg(mt,ze,Bt,Kt,!0)}}t:{if($=J?et(J):window,at=$.nodeName&&$.nodeName.toLowerCase(),at==="select"||at==="input"&&$.type==="file")var Te=Id;else if(zd($))if(Fd)Te=C0;else{Te=A0;var Ft=b0}else at=$.nodeName,!at||at.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?J&&Nu(J.elementType)&&(Te=Id):Te=R0;if(Te&&(Te=Te(t,J))){Bd(mt,Te,a,ut);break t}Ft&&Ft(t,$,J),t==="focusout"&&J&&$.type==="number"&&J.memoizedProps.value!=null&&Tn($,"number",$.value)}switch(Ft=J?et(J):window,t){case"focusin":(zd(Ft)||Ft.contentEditable==="true")&&(Cr=Ft,Yu=J,Xs=null);break;case"focusout":Xs=Yu=Cr=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,Yd(mt,a,ut);break;case"selectionchange":if(D0)break;case"keydown":case"keyup":Yd(mt,a,ut)}var se;if(Xu)t:{switch(t){case"compositionstart":var ge="onCompositionStart";break t;case"compositionend":ge="onCompositionEnd";break t;case"compositionupdate":ge="onCompositionUpdate";break t}ge=void 0}else Rr?Od(t,a)&&(ge="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(Ud&&a.locale!=="ko"&&(Rr||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Rr&&(se=Ad()):(ca=ut,Iu="value"in ca?ca.value:ca.textContent,Rr=!0)),Ft=Nl(J,ge),0<Ft.length&&(ge=new wd(ge,t,null,a,ut),mt.push({event:ge,listeners:Ft}),se?ge.data=se:(se=Pd(a),se!==null&&(ge.data=se)))),(se=x0?M0(t,a):y0(t,a))&&(ge=Nl(J,"onBeforeInput"),0<ge.length&&(Ft=new wd("onBeforeInput","beforeinput",null,a,ut),mt.push({event:Ft,listeners:ge}),Ft.data=se)),dS(mt,t,J,a,ut)}Sg(mt,n)})}function mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Nl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ps(t,a),u!=null&&s.unshift(mo(t,u,f)),u=Ps(t,n),u!=null&&s.push(mo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function _S(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Mg(t,n,a,s,u){for(var f=n._reactName,_=[];a!==null&&a!==s;){var E=a,z=E.alternate,J=E.stateNode;if(E=E.tag,z!==null&&z===s)break;E!==5&&E!==26&&E!==27||J===null||(z=J,u?(J=Ps(a,f),J!=null&&_.unshift(mo(a,J,z))):u||(J=Ps(a,f),J!=null&&_.push(mo(a,J,z)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var vS=/\r\n?/g,SS=/\u0000|\uFFFD/g;function yg(t){return(typeof t=="string"?t:""+t).replace(vS,`
`).replace(SS,"")}function Eg(t,n){return n=yg(n),yg(t)===n}function Pe(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Nn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Nn(t,""+s);break;case"className":Xe(t,"class",s);break;case"tabIndex":Xe(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,a,s);break;case"style":Ed(t,s,f);break;case"data":if(n!=="object"){Xe(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Fo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(t,n,"name",u.name,u,null),Pe(t,n,"formEncType",u.formEncType,u,null),Pe(t,n,"formMethod",u.formMethod,u,null),Pe(t,n,"formTarget",u.formTarget,u,null)):(Pe(t,n,"encType",u.encType,u,null),Pe(t,n,"method",u.method,u,null),Pe(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Fo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Li);break;case"onScroll":s!=null&&he("scroll",t);break;case"onScrollEnd":s!=null&&he("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Fo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":he("beforetoggle",t),he("toggle",t),ve(t,"popover",s);break;case"xlinkActuate":Ee(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ee(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ee(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ee(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ee(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ee(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ve(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Yv.get(a)||a,ve(t,a,s))}}function xf(t,n,a,s,u,f){switch(a){case"style":Ed(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Nn(t,s):(typeof s=="number"||typeof s=="bigint")&&Nn(t,""+s);break;case"onScroll":s!=null&&he("scroll",t);break;case"onScrollEnd":s!=null&&he("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Li);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):ve(t,a,s)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",t),he("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(t,n,f,_,a,null)}}u&&Pe(t,n,"srcSet",a.srcSet,a,null),s&&Pe(t,n,"src",a.src,a,null);return;case"input":he("invalid",t);var E=f=_=u=null,z=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":u=ut;break;case"type":_=ut;break;case"checked":z=ut;break;case"defaultChecked":J=ut;break;case"value":f=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Pe(t,n,s,ut,a,null)}}wn(t,f,E,z,J,_,u,!1);return;case"select":he("invalid",t),s=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":f=E;break;case"defaultValue":_=E;break;case"multiple":s=E;default:Pe(t,n,u,E,a,null)}n=f,a=_,t.multiple=!!s,n!=null?Ze(t,!!s,n,!1):a!=null&&Ze(t,!!s,a,!0);return;case"textarea":he("invalid",t),f=u=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":s=E;break;case"defaultValue":u=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Pe(t,n,_,E,a,null)}Tr(t,s,u,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Pe(t,n,z,s,a,null)}return;case"dialog":he("beforetoggle",t),he("toggle",t),he("cancel",t),he("close",t);break;case"iframe":case"object":he("load",t);break;case"video":case"audio":for(s=0;s<po.length;s++)he(po[s],t);break;case"image":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"embed":case"source":case"link":he("error",t),he("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(t,n,J,s,a,null)}return;default:if(Nu(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&xf(t,n,ut,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Pe(t,n,E,s,a,null))}function xS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,E=null,z=null,J=null,ut=null;for(at in a){var mt=a[at];if(a.hasOwnProperty(at)&&mt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":z=mt;default:s.hasOwnProperty(at)||Pe(t,n,at,null,s,mt)}}for(var $ in s){var at=s[$];if(mt=a[$],s.hasOwnProperty($)&&(at!=null||mt!=null))switch($){case"type":f=at;break;case"name":u=at;break;case"checked":J=at;break;case"defaultChecked":ut=at;break;case"value":_=at;break;case"defaultValue":E=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:at!==mt&&Pe(t,n,$,at,s,mt)}}Ne(t,_,E,z,J,ut,f,u);return;case"select":at=_=E=$=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":at=z;default:s.hasOwnProperty(f)||Pe(t,n,f,null,s,z)}for(u in s)if(f=s[u],z=a[u],s.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":$=f;break;case"defaultValue":E=f;break;case"multiple":_=f;default:f!==z&&Pe(t,n,u,f,s,z)}n=E,a=_,s=at,$!=null?Ze(t,!!a,$,!1):!!s!=!!a&&(n!=null?Ze(t,!!a,n,!0):Ze(t,!!a,a?[]:"",!1));return;case"textarea":at=$=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Pe(t,n,E,null,s,u)}for(_ in s)if(u=s[_],f=a[_],s.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":$=u;break;case"defaultValue":at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Pe(t,n,_,u,s,f)}vn(t,$,at);return;case"option":for(var Bt in a)if($=a[Bt],a.hasOwnProperty(Bt)&&$!=null&&!s.hasOwnProperty(Bt))switch(Bt){case"selected":t.selected=!1;break;default:Pe(t,n,Bt,null,s,$)}for(z in s)if($=s[z],at=a[z],s.hasOwnProperty(z)&&$!==at&&($!=null||at!=null))switch(z){case"selected":t.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Pe(t,n,z,$,s,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)$=a[Kt],a.hasOwnProperty(Kt)&&$!=null&&!s.hasOwnProperty(Kt)&&Pe(t,n,Kt,null,s,$);for(J in s)if($=s[J],at=a[J],s.hasOwnProperty(J)&&$!==at&&($!=null||at!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:Pe(t,n,J,$,s,at)}return;default:if(Nu(n)){for(var ze in a)$=a[ze],a.hasOwnProperty(ze)&&$!==void 0&&!s.hasOwnProperty(ze)&&xf(t,n,ze,void 0,s,$);for(ut in s)$=s[ut],at=a[ut],!s.hasOwnProperty(ut)||$===at||$===void 0&&at===void 0||xf(t,n,ut,$,s,at);return}}for(var Y in a)$=a[Y],a.hasOwnProperty(Y)&&$!=null&&!s.hasOwnProperty(Y)&&Pe(t,n,Y,null,s,$);for(mt in s)$=s[mt],at=a[mt],!s.hasOwnProperty(mt)||$===at||$==null&&at==null||Pe(t,n,mt,$,s,at)}function Tg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function MS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,_=u.initiatorType,E=u.duration;if(f&&E&&Tg(_)){for(_=0,E=u.responseEnd,s+=1;s<a.length;s++){var z=a[s],J=z.startTime;if(J>E)break;var ut=z.transferSize,mt=z.initiatorType;ut&&Tg(mt)&&(z=z.responseEnd,_+=ut*(z<E?1:(E-J)/(z-J)))}if(--s,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Mf=null,yf=null;function Ol(t){return t.nodeType===9?t:t.ownerDocument}function bg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ag(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Ef(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Tf=null;function yS(){var t=window.event;return t&&t.type==="popstate"?t===Tf?!1:(Tf=t,!0):(Tf=null,!1)}var Rg=typeof setTimeout=="function"?setTimeout:void 0,ES=typeof clearTimeout=="function"?clearTimeout:void 0,Cg=typeof Promise=="function"?Promise:void 0,TS=typeof queueMicrotask=="function"?queueMicrotask:typeof Cg<"u"?function(t){return Cg.resolve(null).then(t).catch(bS)}:Rg;function bS(t){setTimeout(function(){throw t})}function Ra(t){return t==="head"}function wg(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),es(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")go(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,go(a);for(var f=a.firstChild;f;){var _=f.nextSibling,E=f.nodeName;f[Wa]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&go(t.ownerDocument.body);a=u}while(a);es(n)}function Dg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function bf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":bf(a),Os(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function AS(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Wa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ri(t.nextSibling),t===null)break}return null}function RS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ri(t.nextSibling),t===null))return null;return t}function Ug(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ri(t.nextSibling),t===null))return null;return t}function Af(t){return t.data==="$?"||t.data==="$~"}function Rf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function CS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ri(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Cf=null;function Lg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ri(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Ng(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Og(t,n,a){switch(n=Ol(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function go(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Os(t)}var si=new Map,Pg=new Set;function Pl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ji=Z.d;Z.d={f:wS,r:DS,D:US,C:LS,L:NS,m:OS,X:zS,S:PS,M:BS};function wS(){var t=ji.f(),n=Al();return t||n}function DS(t){var n=W(t);n!==null&&n.tag===5&&n.type==="form"?Jp(n):ji.r(t)}var Jr=typeof document>"u"?null:document;function zg(t,n,a){var s=Jr;if(s&&typeof n=="string"&&n){var u=dn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Pg.has(u)||(Pg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),yn(n,"link",t),X(n),s.head.appendChild(n)))}}function US(t){ji.D(t),zg("dns-prefetch",t,null)}function LS(t,n){ji.C(t,n),zg("preconnect",t,n)}function NS(t,n,a){ji.L(t,n,a);var s=Jr;if(s&&t&&n){var u='link[rel="preload"][as="'+dn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+dn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+dn(a.imageSizes)+'"]')):u+='[href="'+dn(t)+'"]';var f=u;switch(n){case"style":f=$r(t);break;case"script":f=ts(t)}si.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),si.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(_o(f))||n==="script"&&s.querySelector(vo(f))||(n=s.createElement("link"),yn(n,"link",t),X(n),s.head.appendChild(n)))}}function OS(t,n){ji.m(t,n);var a=Jr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+dn(s)+'"][href="'+dn(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(t)}if(!si.has(f)&&(t=S({rel:"modulepreload",href:t},n),si.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}s=a.createElement("link"),yn(s,"link",t),X(s),a.head.appendChild(s)}}}function PS(t,n,a){ji.S(t,n,a);var s=Jr;if(s&&t){var u=it(s).hoistableStyles,f=$r(t);n=n||"default";var _=u.get(f);if(!_){var E={loading:0,preload:null};if(_=s.querySelector(_o(f)))E.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=si.get(f))&&wf(t,a);var z=_=s.createElement("link");X(z),yn(z,"link",t),z._p=new Promise(function(J,ut){z.onload=J,z.onerror=ut}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,zl(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:E},u.set(f,_)}}}function zS(t,n){ji.X(t,n);var a=Jr;if(a&&t){var s=it(a).hoistableScripts,u=ts(t),f=s.get(u);f||(f=a.querySelector(vo(u)),f||(t=S({src:t,async:!0},n),(n=si.get(u))&&Df(t,n),f=a.createElement("script"),X(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function BS(t,n){ji.M(t,n);var a=Jr;if(a&&t){var s=it(a).hoistableScripts,u=ts(t),f=s.get(u);f||(f=a.querySelector(vo(u)),f||(t=S({src:t,async:!0,type:"module"},n),(n=si.get(u))&&Df(t,n),f=a.createElement("script"),X(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Bg(t,n,a,s){var u=(u=yt.current)?Pl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$r(a.href),a=it(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$r(a.href);var f=it(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(_o(t)))&&!f._p&&(_.instance=f,_.state.loading=5),si.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},si.set(t,a),f||IS(u,t,a,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=it(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function $r(t){return'href="'+dn(t)+'"'}function _o(t){return'link[rel="stylesheet"]['+t+"]"}function Ig(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function IS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),yn(n,"link",a),X(n),t.head.appendChild(n))}function ts(t){return'[src="'+dn(t)+'"]'}function vo(t){return"script[async]"+t}function Fg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+dn(a.href)+'"]');if(s)return n.instance=s,X(s),s;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),X(s),yn(s,"style",u),zl(s,a.precedence,t),n.instance=s;case"stylesheet":u=$r(a.href);var f=t.querySelector(_o(u));if(f)return n.state.loading|=4,n.instance=f,X(f),f;s=Ig(a),(u=si.get(u))&&wf(s,u),f=(t.ownerDocument||t).createElement("link"),X(f);var _=f;return _._p=new Promise(function(E,z){_.onload=E,_.onerror=z}),yn(f,"link",s),n.state.loading|=4,zl(f,a.precedence,t),n.instance=f;case"script":return f=ts(a.src),(u=t.querySelector(vo(f)))?(n.instance=u,X(u),u):(s=a,(u=si.get(f))&&(s=S({},a),Df(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),X(u),yn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,zl(s,a.precedence,t));return n.instance}function zl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,_=0;_<s.length;_++){var E=s[_];if(E.dataset.precedence===n)f=E;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function wf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Df(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Bl=null;function Hg(t,n,a){if(Bl===null){var s=new Map,u=Bl=new Map;u.set(a,s)}else u=Bl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Wa]||f[je]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var E=s.get(_);E?E.push(f):s.set(_,[f])}}return s}function Gg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function FS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Vg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function HS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=$r(s.href),f=n.querySelector(_o(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Il.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,X(f);return}f=n.ownerDocument||n,s=Ig(s),(u=si.get(u))&&wf(s,u),f=f.createElement("link"),X(f);var _=f;_._p=new Promise(function(E,z){_.onload=E,_.onerror=z}),yn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Il.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Uf=0;function GS(t,n){return t.stylesheets&&t.count===0&&Hl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Hl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Uf===0&&(Uf=62500*MS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Uf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Il(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fl=null;function Hl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fl=new Map,n.forEach(VS,t),Fl=null,Il.call(t))}function VS(t,n){if(!(n.state.loading&4)){var a=Fl.get(t);if(a)var s=a.get(null);else{a=new Map,Fl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,u),a.set(_,u),this.count++,s=Il.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var So={$$typeof:L,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function XS(t,n,a,s,u,f,_,E,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ye(0),this.hiddenUpdates=ye(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function Xg(t,n,a,s,u,f,_,E,z,J,ut,mt){return t=new XS(t,n,a,_,z,J,ut,mt,E),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),t.current=f,f.stateNode=t,n=uc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},dc(f),t}function kg(t){return t?(t=Ur,t):Ur}function Wg(t,n,a,s,u,f){u=kg(u),s.context===null?s.context=u:s.pendingContext=u,s=ga(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=_a(t,s,n),a!==null&&(Fn(a,t,n),Ks(a,t,n))}function qg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Lf(t,n){qg(t,n),(t=t.alternate)&&qg(t,n)}function Yg(t){if(t.tag===13||t.tag===31){var n=Za(t,67108864);n!==null&&Fn(n,t,67108864),Lf(t,67108864)}}function jg(t){if(t.tag===13||t.tag===31){var n=Kn();n=Xa(n);var a=Za(t,n);a!==null&&Fn(a,t,n),Lf(t,n)}}var Gl=!0;function kS(t,n,a,s){var u=O.T;O.T=null;var f=Z.p;try{Z.p=2,Nf(t,n,a,s)}finally{Z.p=f,O.T=u}}function WS(t,n,a,s){var u=O.T;O.T=null;var f=Z.p;try{Z.p=8,Nf(t,n,a,s)}finally{Z.p=f,O.T=u}}function Nf(t,n,a,s){if(Gl){var u=Of(s);if(u===null)Sf(t,n,s,Vl,a),Kg(t,s);else if(YS(u,t,n,a,s))s.stopPropagation();else if(Kg(t,s),n&4&&-1<qS.indexOf(t)){for(;u!==null;){var f=W(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Rt(f.pendingLanes);if(_!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var z=1<<31-Jt(_);E.entanglements[1]|=z,_&=~z}Ri(f),(Re&6)===0&&(Tl=ft()+500,ho(0))}}break;case 31:case 13:E=Za(f,2),E!==null&&Fn(E,f,2),Al(),Lf(f,2)}if(f=Of(s),f===null&&Sf(t,n,s,Vl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Sf(t,n,s,null,a)}}function Of(t){return t=Pu(t),Pf(t)}var Vl=null;function Pf(t){if(Vl=null,t=R(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Vl=t,null}function Zg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case pt:return 2;case Ht:return 8;case Ct:case Pt:return 32;case pe:return 268435456;default:return 32}default:return 32}}var zf=!1,Ca=null,wa=null,Da=null,xo=new Map,Mo=new Map,Ua=[],qS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kg(t,n){switch(t){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function yo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=W(n),n!==null&&Yg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function YS(t,n,a,s,u){switch(n){case"focusin":return Ca=yo(Ca,t,n,a,s,u),!0;case"dragenter":return wa=yo(wa,t,n,a,s,u),!0;case"mouseover":return Da=yo(Da,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return xo.set(f,yo(xo.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Mo.set(f,yo(Mo.get(f)||null,t,n,a,s,u)),!0}return!1}function Qg(t){var n=R(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,ka(t.priority,function(){jg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,ka(t.priority,function(){jg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Of(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Ou=s,a.target.dispatchEvent(s),Ou=null}else return n=W(a),n!==null&&Yg(n),t.blockedOn=a,!1;n.shift()}return!0}function Jg(t,n,a){Xl(t)&&a.delete(n)}function jS(){zf=!1,Ca!==null&&Xl(Ca)&&(Ca=null),wa!==null&&Xl(wa)&&(wa=null),Da!==null&&Xl(Da)&&(Da=null),xo.forEach(Jg),Mo.forEach(Jg)}function kl(t,n){t.blockedOn===n&&(t.blockedOn=null,zf||(zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,jS)))}var Wl=null;function $g(t){Wl!==t&&(Wl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Wl===t&&(Wl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Pf(s||a)===null)continue;break}var f=W(a);f!==null&&(t.splice(n,3),n-=3,Nc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function es(t){function n(z){return kl(z,t)}Ca!==null&&kl(Ca,t),wa!==null&&kl(wa,t),Da!==null&&kl(Da,t),xo.forEach(n),Mo.forEach(n);for(var a=0;a<Ua.length;a++){var s=Ua[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)Qg(a),a.blockedOn===null&&Ua.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],_=u[_n]||null;if(typeof f=="function")_||$g(a);else if(_){var E=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[_n]||null)E=_.formAction;else if(Pf(u)!==null)continue}else E=_.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),$g(a)}}}function t_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Bf(t){this._internalRoot=t}ql.prototype.render=Bf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Kn();Wg(a,s,t,n,null,null)},ql.prototype.unmount=Bf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Wg(t.current,2,null,t,null,null),Al(),n[Ui]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ls();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ua.length&&n!==0&&n<Ua[a].priority;a++);Ua.splice(a,0,t),a===0&&Qg(t)}};var e_=e.version;if(e_!=="19.2.6")throw Error(r(527,e_,"19.2.6"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var ZS={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{kt=Yl.inject(ZS),Gt=Yl}catch{}}return To.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=lm,f=um,_=cm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Xg(t,1,!1,null,null,a,s,null,u,f,_,t_),t[Ui]=n.current,vf(t),new Bf(n)},To.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=lm,_=um,E=cm,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=Xg(t,1,!0,n,a??null,s,u,z,f,_,E,t_),n.context=kg(null),a=n.current,s=Kn(),s=Xa(s),u=ga(s),u.callback=null,_a(a,u,s),a=s,n.current.lanes=a,gn(n,a),Ri(n),t[Ui]=n.current,vf(t),new ql(n)},To.version="19.2.6",To}var f_;function sx(){if(f_)return Hf.exports;f_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Hf.exports=rx(),Hf.exports}var ox=sx();const lx=fv(ox);function ux({site:o,theme:e}){const[i,r]=He.useState(null);if(He.useEffect(()=>{o.svg&&fetch(`./svg/${o.svg}`).then(l=>{if(l.ok)return l.text();throw new Error}).then(l=>{const c=l.replace(/<\?xml[^?]*\?>/g,"").replace(/<!DOCTYPE[^>]*>/g,"").trim();r(c)}).catch(()=>r(null))},[o.svg]),i){const l=i.replace(/fill="#000000"/g,'fill="currentColor"').replace(/fill="black"/g,'fill="currentColor"').replace(/fill="#000"/g,'fill="currentColor"').replace(/stroke="#000000"/g,'stroke="currentColor"').replace(/stroke:"#000000"/g,'stroke:"currentColor"').replace(/stroke:#000000/g,"stroke:currentColor");return Qt.jsx("span",{className:"menu-item-icon",dangerouslySetInnerHTML:{__html:l}})}return Qt.jsx("span",{className:"menu-item-icon menu-item-emoji",children:o.emoji})}function cx({sites:o,selectedId:e,onSelect:i,theme:r}){const[l,c]=He.useState(null),[h,d]=He.useState(0),[m,p]=He.useState("");He.useEffect(()=>{const M="CYANOIDE";let y=0;p("");const A=setInterval(()=>{y++,p(M.slice(0,y)),y>=M.length&&clearInterval(A)},80);return()=>clearInterval(A)},[]),He.useEffect(()=>{d(0);const M=setInterval(()=>{d(y=>y>=o.length?(clearInterval(M),y):y+1)},60);return()=>clearInterval(M)},[o.length]);const v=M=>{i(M.id)},S=M=>{M.url!=="#"&&window.open(M.url,"_blank","noopener,noreferrer")};return Qt.jsxs("nav",{className:"menu",children:[Qt.jsxs("div",{className:"menu-header",children:[Qt.jsx("div",{className:"menu-title-line"}),Qt.jsxs("h1",{className:"menu-title",children:[m,Qt.jsx("span",{className:"cursor-blink",children:"_"})]}),Qt.jsx("div",{className:"menu-subtitle",children:"GATEWAY // PORTAL"}),Qt.jsx("div",{className:"menu-title-line"})]}),Qt.jsxs("div",{className:"menu-decorator",children:[Qt.jsx("span",{className:"decorator-bracket",children:"["}),Qt.jsxs("span",{className:"decorator-dots",children:["● ".repeat(3),"○ ".repeat(3)]}),Qt.jsx("span",{className:"decorator-bracket",children:"]"})]}),Qt.jsx("ul",{className:"menu-list",children:o.map((M,y)=>{const A=e===M.id,b=l===M.id,x=y<h;return Qt.jsxs("li",{className:`menu-item ${A?"selected":""} ${b?"hovered":""} ${x?"visible":""}`,onMouseEnter:()=>c(M.id),onMouseLeave:()=>c(null),onClick:()=>v(M),onDoubleClick:()=>S(M),children:[Qt.jsx("span",{className:"menu-item-indicator",children:A?"▸":"·"}),Qt.jsx(ux,{site:M,theme:r}),Qt.jsx("span",{className:"menu-item-label",children:M.label}),A&&Qt.jsx("span",{className:"menu-item-arrow",children:"→"})]},M.id)})}),Qt.jsxs("div",{className:"menu-footer",children:[Qt.jsx("div",{className:"menu-title-line"}),Qt.jsx("div",{className:"menu-footer-text",children:"CLICK SELECT // DOUBLE-CLICK OPEN"}),Qt.jsxs("div",{className:"menu-footer-text",children:["SYS.VER 2.0.26 — ",o.length," NODES"]})]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pd="173",fx=0,h_=1,hx=2,hv=1,dx=2,ta=3,Va=0,Gn=1,ea=2,Ha=0,vs=1,Th=2,d_=3,p_=4,px=5,gr=100,mx=101,gx=102,_x=103,vx=104,Sx=200,xx=201,Mx=202,yx=203,bh=204,Ah=205,Ex=206,Tx=207,bx=208,Ax=209,Rx=210,Cx=211,wx=212,Dx=213,Ux=214,Rh=0,Ch=1,wh=2,Ms=3,Dh=4,Uh=5,Lh=6,Nh=7,dv=0,Lx=1,Nx=2,Ga=0,Ox=1,Px=2,zx=3,Bx=4,Ix=5,Fx=6,Hx=7,pv=300,ys=301,Es=302,Oh=303,Ph=304,Ru=306,zh=1e3,vr=1001,Bh=1002,yi=1003,Gx=1004,jl=1005,Di=1006,kf=1007,Sr=1008,sa=1009,mv=1010,gv=1011,Uo=1012,md=1013,Mr=1014,na=1015,Lo=1016,gd=1017,_d=1018,Ts=1020,_v=35902,vv=1021,Sv=1022,Mi=1023,xv=1024,Mv=1025,Ss=1026,bs=1027,yv=1028,vd=1029,Ev=1030,Sd=1031,xd=1033,vu=33776,Su=33777,xu=33778,Mu=33779,Ih=35840,Fh=35841,Hh=35842,Gh=35843,Vh=36196,Xh=37492,kh=37496,Wh=37808,qh=37809,Yh=37810,jh=37811,Zh=37812,Kh=37813,Qh=37814,Jh=37815,$h=37816,td=37817,ed=37818,nd=37819,id=37820,ad=37821,yu=36492,rd=36494,sd=36495,Tv=36283,od=36284,ld=36285,ud=36286,Vx=3200,Xx=3201,kx=0,Wx=1,Fa="",li="srgb",As="srgb-linear",Tu="linear",Be="srgb",ns=7680,m_=519,qx=512,Yx=513,jx=514,bv=515,Zx=516,Kx=517,Qx=518,Jx=519,g_=35044,__="300 es",ia=2e3,bu=2001;class Cs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wf=Math.PI/180,cd=180/Math.PI;function No(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function xe(o,e,i){return Math.max(e,Math.min(i,o))}function $x(o,e){return(o%e+e)%e}function qf(o,e,i){return(1-i)*o+i*e}function bo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,i=0){Ge.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(e,i,r,l,c,h,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],v=r[4],S=r[7],M=r[2],y=r[5],A=r[8],b=l[0],x=l[3],g=l[6],B=l[1],L=l[4],w=l[7],q=l[2],H=l[5],P=l[8];return c[0]=h*b+d*B+m*q,c[3]=h*x+d*L+m*H,c[6]=h*g+d*w+m*P,c[1]=p*b+v*B+S*q,c[4]=p*x+v*L+S*H,c[7]=p*g+v*w+S*P,c[2]=M*b+y*B+A*q,c[5]=M*x+y*L+A*H,c[8]=M*g+y*w+A*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*h*v-i*d*p-r*c*v+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],S=v*h-d*p,M=d*m-v*c,y=p*c-h*m,A=i*S+r*M+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=S*b,e[1]=(l*p-v*r)*b,e[2]=(d*r-l*h)*b,e[3]=M*b,e[4]=(v*i-l*m)*b,e[5]=(l*c-d*i)*b,e[6]=y*b,e[7]=(r*m-p*i)*b,e[8]=(h*i-r*c)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Yf.makeScale(e,i)),this}rotate(e){return this.premultiply(Yf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Yf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yf=new oe;function Av(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Au(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function tM(){const o=Au("canvas");return o.style.display="block",o}const v_={};function gs(o){o in v_||(v_[o]=!0,console.warn(o))}function eM(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function nM(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function iM(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const S_=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),x_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aM(){const o={enabled:!0,workingColorSpace:As,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Be&&(l.r=ra(l.r),l.g=ra(l.g),l.b=ra(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=xs(l.r),l.g=xs(l.g),l.b=xs(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Fa?Tu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[As]:{primaries:e,whitePoint:r,transfer:Tu,toXYZ:S_,fromXYZ:x_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:r,transfer:Be,toXYZ:S_,fromXYZ:x_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),o}const Ae=aM();function ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function xs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let is;class rM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{is===void 0&&(is=Au("canvas")),is.width=e.width,is.height=e.height;const r=is.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=is}return i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Au("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ra(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ra(i[r]/255)*255):i[r]=ra(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sM=0;class Rv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=No(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(jf(l[h].image)):c.push(jf(l[h]))}else c=jf(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function jf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?rM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oM=0;class Vn extends Cs{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=vr,l=vr,c=Di,h=Sr,d=Mi,m=sa,p=Vn.DEFAULT_ANISOTROPY,v=Fa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=No(),this.name="",this.source=new Rv(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zh:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case Bh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zh:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case Bh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=pv;Vn.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,i=0,r=0,l=1){tn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],v=m[4],S=m[8],M=m[1],y=m[5],A=m[9],b=m[2],x=m[6],g=m[10];if(Math.abs(v-M)<.01&&Math.abs(S-b)<.01&&Math.abs(A-x)<.01){if(Math.abs(v+M)<.1&&Math.abs(S+b)<.1&&Math.abs(A+x)<.1&&Math.abs(p+y+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,w=(y+1)/2,q=(g+1)/2,H=(v+M)/4,P=(S+b)/4,V=(A+x)/4;return L>w&&L>q?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=H/r,c=P/r):w>q?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=H/l,c=V/l):q<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(q),r=P/c,l=V/c),this.set(r,l,c,i),this}let B=Math.sqrt((x-A)*(x-A)+(S-b)*(S-b)+(M-v)*(M-v));return Math.abs(B)<.001&&(B=1),this.x=(x-A)/B,this.y=(S-b)/B,this.z=(M-v)/B,this.w=Math.acos((p+y+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this.w=xe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this.w=xe(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lM extends Cs{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new tn(0,0,e,i),this.scissorTest=!1,this.viewport=new tn(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Vn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const i=Object.assign({},e.texture.image);return this.texture.source=new Rv(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends lM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Cv extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uM extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],v=r[l+2],S=r[l+3];const M=c[h+0],y=c[h+1],A=c[h+2],b=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=S;return}if(d===1){e[i+0]=M,e[i+1]=y,e[i+2]=A,e[i+3]=b;return}if(S!==b||m!==M||p!==y||v!==A){let x=1-d;const g=m*M+p*y+v*A+S*b,B=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const q=Math.sqrt(L),H=Math.atan2(q,g*B);x=Math.sin(x*H)/q,d=Math.sin(d*H)/q}const w=d*B;if(m=m*x+M*w,p=p*x+y*w,v=v*x+A*w,S=S*x+b*w,x===1-d){const q=1/Math.sqrt(m*m+p*p+v*v+S*S);m*=q,p*=q,v*=q,S*=q}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=S}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],v=r[l+3],S=c[h],M=c[h+1],y=c[h+2],A=c[h+3];return e[i]=d*A+v*S+m*y-p*M,e[i+1]=m*A+v*M+p*S-d*y,e[i+2]=p*A+v*y+d*M-m*S,e[i+3]=v*A-d*S-m*M-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),v=d(l/2),S=d(c/2),M=m(r/2),y=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=M*v*S+p*y*A,this._y=p*y*S-M*v*A,this._z=p*v*A+M*y*S,this._w=p*v*S-M*y*A;break;case"YXZ":this._x=M*v*S+p*y*A,this._y=p*y*S-M*v*A,this._z=p*v*A-M*y*S,this._w=p*v*S+M*y*A;break;case"ZXY":this._x=M*v*S-p*y*A,this._y=p*y*S+M*v*A,this._z=p*v*A+M*y*S,this._w=p*v*S-M*y*A;break;case"ZYX":this._x=M*v*S-p*y*A,this._y=p*y*S+M*v*A,this._z=p*v*A-M*y*S,this._w=p*v*S+M*y*A;break;case"YZX":this._x=M*v*S+p*y*A,this._y=p*y*S+M*v*A,this._z=p*v*A-M*y*S,this._w=p*v*S-M*y*A;break;case"XZY":this._x=M*v*S-p*y*A,this._y=p*y*S-M*v*A,this._z=p*v*A+M*y*S,this._w=p*v*S+M*y*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],S=i[10],M=r+d+S;if(M>0){const y=.5/Math.sqrt(M+1);this._w=.25/y,this._x=(v-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(r>d&&r>S){const y=2*Math.sqrt(1+r-d-S);this._w=(v-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>S){const y=2*Math.sqrt(1+d-r-S);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+S-r-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xe(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-r*p,this._z=c*v+h*p+r*m-l*d,this._w=h*v-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),S=Math.sin((1-i)*v)/p,M=Math.sin(i*v)/p;return this._w=h*S+this._w*M,this._x=r*S+this._x*M,this._y=l*S+this._y*M,this._z=c*S+this._z*M,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(M_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(M_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),v=2*(d*i-c*l),S=2*(c*r-h*i);return this.x=i+m*p+h*S-d*v,this.y=r+m*v+d*p-c*S,this.z=l+m*S+c*v-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Zf.copy(this).projectOnVector(e),this.sub(Zf)}reflect(e){return this.sub(Zf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zf=new rt,M_=new Oo;class Po{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(_i.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(_i.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=_i.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,_i):_i.fromBufferAttribute(c,h),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Zl.copy(r.boundingBox)),Zl.applyMatrix4(e.matrixWorld),this.union(Zl)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),Kl.subVectors(this.max,Ao),as.subVectors(e.a,Ao),rs.subVectors(e.b,Ao),ss.subVectors(e.c,Ao),Na.subVectors(rs,as),Oa.subVectors(ss,rs),lr.subVectors(as,ss);let i=[0,-Na.z,Na.y,0,-Oa.z,Oa.y,0,-lr.z,lr.y,Na.z,0,-Na.x,Oa.z,0,-Oa.x,lr.z,0,-lr.x,-Na.y,Na.x,0,-Oa.y,Oa.x,0,-lr.y,lr.x,0];return!Kf(i,as,rs,ss,Kl)||(i=[1,0,0,0,1,0,0,0,1],!Kf(i,as,rs,ss,Kl))?!1:(Ql.crossVectors(Na,Oa),i=[Ql.x,Ql.y,Ql.z],Kf(i,as,rs,ss,Kl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zi=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],_i=new rt,Zl=new Po,as=new rt,rs=new rt,ss=new rt,Na=new rt,Oa=new rt,lr=new rt,Ao=new rt,Kl=new rt,Ql=new rt,ur=new rt;function Kf(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){ur.fromArray(o,c);const d=l.x*Math.abs(ur.x)+l.y*Math.abs(ur.y)+l.z*Math.abs(ur.z),m=e.dot(ur),p=i.dot(ur),v=r.dot(ur);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const cM=new Po,Ro=new rt,Qf=new rt;class Cu{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):cM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ro,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Qf)),this.expandByPoint(Ro.copy(e.center).sub(Qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new rt,Jf=new rt,Jl=new rt,Pa=new rt,$f=new rt,$l=new rt,th=new rt;class wv{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ki.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Jf.copy(e).add(i).multiplyScalar(.5),Jl.copy(i).sub(e).normalize(),Pa.copy(this.origin).sub(Jf);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Jl),d=Pa.dot(this.direction),m=-Pa.dot(Jl),p=Pa.lengthSq(),v=Math.abs(1-h*h);let S,M,y,A;if(v>0)if(S=h*m-d,M=h*d-m,A=c*v,S>=0)if(M>=-A)if(M<=A){const b=1/v;S*=b,M*=b,y=S*(S+h*M+2*d)+M*(h*S+M+2*m)+p}else M=c,S=Math.max(0,-(h*M+d)),y=-S*S+M*(M+2*m)+p;else M=-c,S=Math.max(0,-(h*M+d)),y=-S*S+M*(M+2*m)+p;else M<=-A?(S=Math.max(0,-(-h*c+d)),M=S>0?-c:Math.min(Math.max(-c,-m),c),y=-S*S+M*(M+2*m)+p):M<=A?(S=0,M=Math.min(Math.max(-c,-m),c),y=M*(M+2*m)+p):(S=Math.max(0,-(h*c+d)),M=S>0?c:Math.min(Math.max(-c,-m),c),y=-S*S+M*(M+2*m)+p);else M=h>0?-c:c,S=Math.max(0,-(h*M+d)),y=-S*S+M*(M+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Jf).addScaledVector(Jl,M),y}intersectSphere(e,i){Ki.subVectors(e.center,this.origin);const r=Ki.dot(this.direction),l=Ki.dot(Ki)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,M=this.origin;return p>=0?(r=(e.min.x-M.x)*p,l=(e.max.x-M.x)*p):(r=(e.max.x-M.x)*p,l=(e.min.x-M.x)*p),v>=0?(c=(e.min.y-M.y)*v,h=(e.max.y-M.y)*v):(c=(e.max.y-M.y)*v,h=(e.min.y-M.y)*v),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),S>=0?(d=(e.min.z-M.z)*S,m=(e.max.z-M.z)*S):(d=(e.max.z-M.z)*S,m=(e.min.z-M.z)*S),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,i,r,l,c){$f.subVectors(i,e),$l.subVectors(r,e),th.crossVectors($f,$l);let h=this.direction.dot(th),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Pa.subVectors(this.origin,e);const m=d*this.direction.dot($l.crossVectors(Pa,$l));if(m<0)return null;const p=d*this.direction.dot($f.cross(Pa));if(p<0||m+p>h)return null;const v=-d*Pa.dot(th);return v<0?null:this.at(v/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,i,r,l,c,h,d,m,p,v,S,M,y,A,b,x){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,v,S,M,y,A,b,x)}set(e,i,r,l,c,h,d,m,p,v,S,M,y,A,b,x){const g=this.elements;return g[0]=e,g[4]=i,g[8]=r,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=v,g[10]=S,g[14]=M,g[3]=y,g[7]=A,g[11]=b,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/os.setFromMatrixColumn(e,0).length(),c=1/os.setFromMatrixColumn(e,1).length(),h=1/os.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const M=h*v,y=h*S,A=d*v,b=d*S;i[0]=m*v,i[4]=-m*S,i[8]=p,i[1]=y+A*p,i[5]=M-b*p,i[9]=-d*m,i[2]=b-M*p,i[6]=A+y*p,i[10]=h*m}else if(e.order==="YXZ"){const M=m*v,y=m*S,A=p*v,b=p*S;i[0]=M+b*d,i[4]=A*d-y,i[8]=h*p,i[1]=h*S,i[5]=h*v,i[9]=-d,i[2]=y*d-A,i[6]=b+M*d,i[10]=h*m}else if(e.order==="ZXY"){const M=m*v,y=m*S,A=p*v,b=p*S;i[0]=M-b*d,i[4]=-h*S,i[8]=A+y*d,i[1]=y+A*d,i[5]=h*v,i[9]=b-M*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const M=h*v,y=h*S,A=d*v,b=d*S;i[0]=m*v,i[4]=A*p-y,i[8]=M*p+b,i[1]=m*S,i[5]=b*p+M,i[9]=y*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const M=h*m,y=h*p,A=d*m,b=d*p;i[0]=m*v,i[4]=b-M*S,i[8]=A*S+y,i[1]=S,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=y*S+A,i[10]=M-b*S}else if(e.order==="XZY"){const M=h*m,y=h*p,A=d*m,b=d*p;i[0]=m*v,i[4]=-S,i[8]=p*v,i[1]=M*S+b,i[5]=h*v,i[9]=y*S-A,i[2]=A*S-y,i[6]=d*v,i[10]=b*S+M}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fM,e,hM)}lookAt(e,i,r){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),za.crossVectors(r,Qn),za.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),za.crossVectors(r,Qn)),za.normalize(),tu.crossVectors(Qn,za),l[0]=za.x,l[4]=tu.x,l[8]=Qn.x,l[1]=za.y,l[5]=tu.y,l[9]=Qn.y,l[2]=za.z,l[6]=tu.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],v=r[1],S=r[5],M=r[9],y=r[13],A=r[2],b=r[6],x=r[10],g=r[14],B=r[3],L=r[7],w=r[11],q=r[15],H=l[0],P=l[4],V=l[8],D=l[12],C=l[1],G=l[5],lt=l[9],st=l[13],gt=l[2],dt=l[6],O=l[10],Z=l[14],j=l[3],vt=l[7],Et=l[11],N=l[15];return c[0]=h*H+d*C+m*gt+p*j,c[4]=h*P+d*G+m*dt+p*vt,c[8]=h*V+d*lt+m*O+p*Et,c[12]=h*D+d*st+m*Z+p*N,c[1]=v*H+S*C+M*gt+y*j,c[5]=v*P+S*G+M*dt+y*vt,c[9]=v*V+S*lt+M*O+y*Et,c[13]=v*D+S*st+M*Z+y*N,c[2]=A*H+b*C+x*gt+g*j,c[6]=A*P+b*G+x*dt+g*vt,c[10]=A*V+b*lt+x*O+g*Et,c[14]=A*D+b*st+x*Z+g*N,c[3]=B*H+L*C+w*gt+q*j,c[7]=B*P+L*G+w*dt+q*vt,c[11]=B*V+L*lt+w*O+q*Et,c[15]=B*D+L*st+w*Z+q*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],v=e[2],S=e[6],M=e[10],y=e[14],A=e[3],b=e[7],x=e[11],g=e[15];return A*(+c*m*S-l*p*S-c*d*M+r*p*M+l*d*y-r*m*y)+b*(+i*m*y-i*p*M+c*h*M-l*h*y+l*p*v-c*m*v)+x*(+i*p*S-i*d*y-c*h*S+r*h*y+c*d*v-r*p*v)+g*(-l*d*v-i*m*S+i*d*M+l*h*S-r*h*M+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],S=e[9],M=e[10],y=e[11],A=e[12],b=e[13],x=e[14],g=e[15],B=S*x*p-b*M*p+b*m*y-d*x*y-S*m*g+d*M*g,L=A*M*p-v*x*p-A*m*y+h*x*y+v*m*g-h*M*g,w=v*b*p-A*S*p+A*d*y-h*b*y-v*d*g+h*S*g,q=A*S*m-v*b*m-A*d*M+h*b*M+v*d*x-h*S*x,H=i*B+r*L+l*w+c*q;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/H;return e[0]=B*P,e[1]=(b*M*c-S*x*c-b*l*y+r*x*y+S*l*g-r*M*g)*P,e[2]=(d*x*c-b*m*c+b*l*p-r*x*p-d*l*g+r*m*g)*P,e[3]=(S*m*c-d*M*c-S*l*p+r*M*p+d*l*y-r*m*y)*P,e[4]=L*P,e[5]=(v*x*c-A*M*c+A*l*y-i*x*y-v*l*g+i*M*g)*P,e[6]=(A*m*c-h*x*c-A*l*p+i*x*p+h*l*g-i*m*g)*P,e[7]=(h*M*c-v*m*c+v*l*p-i*M*p-h*l*y+i*m*y)*P,e[8]=w*P,e[9]=(A*S*c-v*b*c-A*r*y+i*b*y+v*r*g-i*S*g)*P,e[10]=(h*b*c-A*d*c+A*r*p-i*b*p-h*r*g+i*d*g)*P,e[11]=(v*d*c-h*S*c-v*r*p+i*S*p+h*r*y-i*d*y)*P,e[12]=q*P,e[13]=(v*b*l-A*S*l+A*r*M-i*b*M-v*r*x+i*S*x)*P,e[14]=(A*d*l-h*b*l-A*r*m+i*b*m+h*r*x-i*d*x)*P,e[15]=(h*S*l-v*d*l+v*r*m-i*S*m-h*r*M+i*d*M)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,v=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+r,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,S=d+d,M=c*p,y=c*v,A=c*S,b=h*v,x=h*S,g=d*S,B=m*p,L=m*v,w=m*S,q=r.x,H=r.y,P=r.z;return l[0]=(1-(b+g))*q,l[1]=(y+w)*q,l[2]=(A-L)*q,l[3]=0,l[4]=(y-w)*H,l[5]=(1-(M+g))*H,l[6]=(x+B)*H,l[7]=0,l[8]=(A+L)*P,l[9]=(x-B)*P,l[10]=(1-(M+b))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=os.set(l[0],l[1],l[2]).length();const h=os.set(l[4],l[5],l[6]).length(),d=os.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],vi.copy(this);const p=1/c,v=1/h,S=1/d;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=v,vi.elements[5]*=v,vi.elements[6]*=v,vi.elements[8]*=S,vi.elements[9]*=S,vi.elements[10]*=S,i.setFromRotationMatrix(vi),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=ia){const m=this.elements,p=2*c/(i-e),v=2*c/(r-l),S=(i+e)/(i-e),M=(r+l)/(r-l);let y,A;if(d===ia)y=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===bu)y=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=v,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=ia){const m=this.elements,p=1/(i-e),v=1/(r-l),S=1/(h-c),M=(i+e)*p,y=(r+l)*v;let A,b;if(d===ia)A=(h+c)*S,b=-2*S;else if(d===bu)A=c*S,b=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-M,m[1]=0,m[5]=2*v,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=b,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const os=new rt,vi=new en,fM=new rt(0,0,0),hM=new rt(1,1,1),za=new rt,tu=new rt,Qn=new rt,y_=new en,E_=new Oo;class oa{constructor(e=0,i=0,r=0,l=oa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],S=l[2],M=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(M,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(M,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(M,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return y_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(y_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return E_.setFromEuler(this),this.setFromQuaternion(E_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oa.DEFAULT_ORDER="XYZ";class Dv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dM=0;const T_=new rt,ls=new Oo,Qi=new en,eu=new rt,Co=new rt,pM=new rt,mM=new Oo,b_=new rt(1,0,0),A_=new rt(0,1,0),R_=new rt(0,0,1),C_={type:"added"},gM={type:"removed"},us={type:"childadded",child:null},eh={type:"childremoved",child:null};class Xn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new rt,i=new oa,r=new Oo,l=new rt(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new oe}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ls.setFromAxisAngle(e,i),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,i){return ls.setFromAxisAngle(e,i),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(b_,e)}rotateY(e){return this.rotateOnAxis(A_,e)}rotateZ(e){return this.rotateOnAxis(R_,e)}translateOnAxis(e,i){return T_.copy(e).applyQuaternion(this.quaternion),this.position.add(T_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(b_,e)}translateY(e){return this.translateOnAxis(A_,e)}translateZ(e){return this.translateOnAxis(R_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?eu.copy(e):eu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Co,eu,this.up):Qi.lookAt(eu,Co,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),ls.setFromRotationMatrix(Qi),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(C_),us.child=e,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(gM),eh.child=e,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(C_),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,pM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,mM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const S=m[p];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),v=h(e.images),S=h(e.shapes),M=h(e.skeletons),y=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),M.length>0&&(r.skeletons=M),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new rt(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new rt,Ji=new rt,nh=new rt,$i=new rt,cs=new rt,fs=new rt,w_=new rt,ih=new rt,ah=new rt,rh=new rt,sh=new tn,oh=new tn,lh=new tn;class xi{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Si.subVectors(e,i),l.cross(Si);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Si.subVectors(l,i),Ji.subVectors(r,i),nh.subVectors(e,i);const h=Si.dot(Si),d=Si.dot(Ji),m=Si.dot(nh),p=Ji.dot(Ji),v=Ji.dot(nh),S=h*p-d*d;if(S===0)return c.set(0,0,0),null;const M=1/S,y=(p*m-d*v)*M,A=(h*v-d*m)*M;return c.set(1-y-A,A,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,$i)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,$i.x),m.addScaledVector(h,$i.y),m.addScaledVector(d,$i.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return sh.setScalar(0),oh.setScalar(0),lh.setScalar(0),sh.fromBufferAttribute(e,i),oh.fromBufferAttribute(e,r),lh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(sh,c.x),h.addScaledVector(oh,c.y),h.addScaledVector(lh,c.z),h}static isFrontFacing(e,i,r,l){return Si.subVectors(r,i),Ji.subVectors(e,i),Si.cross(Ji).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Si.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return xi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return xi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;cs.subVectors(l,r),fs.subVectors(c,r),ih.subVectors(e,r);const m=cs.dot(ih),p=fs.dot(ih);if(m<=0&&p<=0)return i.copy(r);ah.subVectors(e,l);const v=cs.dot(ah),S=fs.dot(ah);if(v>=0&&S<=v)return i.copy(l);const M=m*S-v*p;if(M<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(r).addScaledVector(cs,h);rh.subVectors(e,c);const y=cs.dot(rh),A=fs.dot(rh);if(A>=0&&y<=A)return i.copy(c);const b=y*p-m*A;if(b<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(fs,d);const x=v*A-y*S;if(x<=0&&S-v>=0&&y-A>=0)return w_.subVectors(c,l),d=(S-v)/(S-v+(y-A)),i.copy(l).addScaledVector(w_,d);const g=1/(x+b+M);return h=b*g,d=M*g,i.copy(r).addScaledVector(cs,h).addScaledVector(fs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},nu={h:0,s:0,l:0};function uh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ce{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ae.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ae.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ae.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ae.workingColorSpace){if(e=$x(e,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=uh(h,c,e+1/3),this.g=uh(h,c,e),this.b=uh(h,c,e-1/3)}return Ae.toWorkingColorSpace(this,l),this}setStyle(e,i=li){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=li){const r=Uv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Ae.fromWorkingColorSpace(Rn.copy(this),e),Math.round(xe(Rn.r*255,0,255))*65536+Math.round(xe(Rn.g*255,0,255))*256+Math.round(xe(Rn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ae.workingColorSpace){Ae.fromWorkingColorSpace(Rn.copy(this),i);const r=Rn.r,l=Rn.g,c=Rn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const S=h-d;switch(p=v<=.5?S/(h+d):S/(2-h-d),h){case r:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-r)/S+2;break;case c:m=(r-l)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(Rn.copy(this),i),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=li){Ae.fromWorkingColorSpace(Rn.copy(this),e);const i=Rn.r,r=Rn.g,l=Rn.b;return e!==li?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ba),this.setHSL(Ba.h+e,Ba.s+i,Ba.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ba),e.getHSL(nu);const r=qf(Ba.h,nu.h,i),l=qf(Ba.s,nu.s,i),c=qf(Ba.l,nu.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Ce;Ce.NAMES=Uv;let _M=0;class zo extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=No(),this.name="",this.type="Material",this.blending=vs,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Ah,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=m_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(r.blending=this.blending),this.side!==Va&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==bh&&(r.blendSrc=this.blendSrc),this.blendDst!==Ah&&(r.blendDst=this.blendDst),this.blendEquation!==gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==m_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Lv extends zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new rt,iu=new Ge;let vM=0;class ci{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=g_,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)iu.fromBufferAttribute(this,i),iu.applyMatrix3(e),this.setXY(i,iu.x,iu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(e),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.transformDirection(e),this.setXYZ(i,on.x,on.y,on.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=bo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==g_&&(e.usage=this.usage),e}}class Nv extends ci{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Ov extends ci{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class xr extends ci{constructor(e,i,r){super(new Float32Array(e),i,r)}}let SM=0;const oi=new en,ch=new Xn,hs=new rt,Jn=new Po,wo=new Po,mn=new rt;class ua extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Av(e)?Ov:Nv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new oe().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,i,r){return oi.makeTranslation(e,i,r),this.applyMatrix4(oi),this}scale(e,i,r){return oi.makeScale(e,i,r),this.applyMatrix4(oi),this}lookAt(e){return ch.lookAt(e),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new xr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Jn.setFromBufferAttribute(c),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];wo.setFromBufferAttribute(d),this.morphTargetsRelative?(mn.addVectors(Jn.min,wo.min),Jn.expandByPoint(mn),mn.addVectors(Jn.max,wo.max),Jn.expandByPoint(mn)):(Jn.expandByPoint(wo.min),Jn.expandByPoint(wo.max))}Jn.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)mn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(mn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)mn.fromBufferAttribute(d,p),m&&(hs.fromBufferAttribute(e,p),mn.add(hs)),l=Math.max(l,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let V=0;V<r.count;V++)d[V]=new rt,m[V]=new rt;const p=new rt,v=new rt,S=new rt,M=new Ge,y=new Ge,A=new Ge,b=new rt,x=new rt;function g(V,D,C){p.fromBufferAttribute(r,V),v.fromBufferAttribute(r,D),S.fromBufferAttribute(r,C),M.fromBufferAttribute(c,V),y.fromBufferAttribute(c,D),A.fromBufferAttribute(c,C),v.sub(p),S.sub(p),y.sub(M),A.sub(M);const G=1/(y.x*A.y-A.x*y.y);isFinite(G)&&(b.copy(v).multiplyScalar(A.y).addScaledVector(S,-y.y).multiplyScalar(G),x.copy(S).multiplyScalar(y.x).addScaledVector(v,-A.x).multiplyScalar(G),d[V].add(b),d[D].add(b),d[C].add(b),m[V].add(x),m[D].add(x),m[C].add(x))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let V=0,D=B.length;V<D;++V){const C=B[V],G=C.start,lt=C.count;for(let st=G,gt=G+lt;st<gt;st+=3)g(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const L=new rt,w=new rt,q=new rt,H=new rt;function P(V){q.fromBufferAttribute(l,V),H.copy(q);const D=d[V];L.copy(D),L.sub(q.multiplyScalar(q.dot(D))).normalize(),w.crossVectors(H,D);const G=w.dot(m[V])<0?-1:1;h.setXYZW(V,L.x,L.y,L.z,G)}for(let V=0,D=B.length;V<D;++V){const C=B[V],G=C.start,lt=C.count;for(let st=G,gt=G+lt;st<gt;st+=3)P(e.getX(st+0)),P(e.getX(st+1)),P(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ci(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let M=0,y=r.count;M<y;M++)r.setXYZ(M,0,0,0);const l=new rt,c=new rt,h=new rt,d=new rt,m=new rt,p=new rt,v=new rt,S=new rt;if(e)for(let M=0,y=e.count;M<y;M+=3){const A=e.getX(M+0),b=e.getX(M+1),x=e.getX(M+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,x),v.subVectors(h,c),S.subVectors(l,c),v.cross(S),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,x),d.add(v),m.add(v),p.add(v),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let M=0,y=i.count;M<y;M+=3)l.fromBufferAttribute(i,M+0),c.fromBufferAttribute(i,M+1),h.fromBufferAttribute(i,M+2),v.subVectors(h,c),S.subVectors(l,c),v.cross(S),r.setXYZ(M+0,v.x,v.y,v.z),r.setXYZ(M+1,v.x,v.y,v.z),r.setXYZ(M+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)mn.fromBufferAttribute(e,i),mn.normalize(),e.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,S=d.normalized,M=new p.constructor(m.length*v);let y=0,A=0;for(let b=0,x=m.length;b<x;b++){d.isInterleavedBufferAttribute?y=m[b]*d.data.stride+d.offset:y=m[b]*v;for(let g=0;g<v;g++)M[A++]=p[y++]}return new ci(M,v,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ua,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,S=p.length;v<S;v++){const M=p[v],y=e(M,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let S=0,M=p.length;S<M;S++){const y=p[S];v.push(y.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],S=c[p];for(let M=0,y=S.length;M<y;M++)v.push(S[M].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,v=h.length;p<v;p++){const S=h[p];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const D_=new en,cr=new wv,au=new Cu,U_=new rt,ru=new rt,su=new rt,ou=new rt,fh=new rt,lu=new rt,L_=new rt,uu=new rt;class aa extends Xn{constructor(e=new ua,i=new Lv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){lu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],S=c[m];v!==0&&(fh.fromBufferAttribute(S,e),h?lu.addScaledVector(fh,v):lu.addScaledVector(fh.sub(i),v))}i.add(lu)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),au.copy(r.boundingSphere),au.applyMatrix4(c),cr.copy(e.ray).recast(e.near),!(au.containsPoint(cr.origin)===!1&&(cr.intersectSphere(au,U_)===null||cr.origin.distanceToSquared(U_)>(e.far-e.near)**2))&&(D_.copy(c).invert(),cr.copy(e.ray).applyMatrix4(D_),!(r.boundingBox!==null&&cr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,cr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,S=c.attributes.normal,M=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,b=M.length;A<b;A++){const x=M[A],g=h[x.materialIndex],B=Math.max(x.start,y.start),L=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let w=B,q=L;w<q;w+=3){const H=d.getX(w),P=d.getX(w+1),V=d.getX(w+2);l=cu(this,g,e,r,p,v,S,H,P,V),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),b=Math.min(d.count,y.start+y.count);for(let x=A,g=b;x<g;x+=3){const B=d.getX(x),L=d.getX(x+1),w=d.getX(x+2);l=cu(this,h,e,r,p,v,S,B,L,w),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,b=M.length;A<b;A++){const x=M[A],g=h[x.materialIndex],B=Math.max(x.start,y.start),L=Math.min(m.count,Math.min(x.start+x.count,y.start+y.count));for(let w=B,q=L;w<q;w+=3){const H=w,P=w+1,V=w+2;l=cu(this,g,e,r,p,v,S,H,P,V),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),b=Math.min(m.count,y.start+y.count);for(let x=A,g=b;x<g;x+=3){const B=x,L=x+1,w=x+2;l=cu(this,h,e,r,p,v,S,B,L,w),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function xM(o,e,i,r,l,c,h,d){let m;if(e.side===Gn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===Va,d),m===null)return null;uu.copy(d),uu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(uu);return p<i.near||p>i.far?null:{distance:p,point:uu.clone(),object:o}}function cu(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,ru),o.getVertexPosition(m,su),o.getVertexPosition(p,ou);const v=xM(o,e,i,r,ru,su,ou,L_);if(v){const S=new rt;xi.getBarycoord(L_,ru,su,ou,S),l&&(v.uv=xi.getInterpolatedAttribute(l,d,m,p,S,new Ge)),c&&(v.uv1=xi.getInterpolatedAttribute(c,d,m,p,S,new Ge)),h&&(v.normal=xi.getInterpolatedAttribute(h,d,m,p,S,new rt),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const M={a:d,b:m,c:p,normal:new rt,materialIndex:0};xi.getNormal(ru,su,ou,M.normal),v.face=M,v.barycoord=S}return v}class Bo extends ua{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],S=[];let M=0,y=0;A("z","y","x",-1,-1,r,i,e,h,c,0),A("z","y","x",1,-1,r,i,-e,h,c,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,c,4),A("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new xr(p,3)),this.setAttribute("normal",new xr(v,3)),this.setAttribute("uv",new xr(S,2));function A(b,x,g,B,L,w,q,H,P,V,D){const C=w/P,G=q/V,lt=w/2,st=q/2,gt=H/2,dt=P+1,O=V+1;let Z=0,j=0;const vt=new rt;for(let Et=0;Et<O;Et++){const N=Et*G-st;for(let nt=0;nt<dt;nt++){const xt=nt*C-lt;vt[b]=xt*B,vt[x]=N*L,vt[g]=gt,p.push(vt.x,vt.y,vt.z),vt[b]=0,vt[x]=0,vt[g]=H>0?1:-1,v.push(vt.x,vt.y,vt.z),S.push(nt/P),S.push(1-Et/V),Z+=1}}for(let Et=0;Et<V;Et++)for(let N=0;N<P;N++){const nt=M+N+dt*Et,xt=M+N+dt*(Et+1),K=M+(N+1)+dt*(Et+1),ct=M+(N+1)+dt*Et;m.push(nt,xt,ct),m.push(xt,K,ct),j+=6}d.addGroup(y,j,D),y+=j,M+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Un(o){const e={};for(let i=0;i<o.length;i++){const r=Rs(o[i]);for(const l in r)e[l]=r[l]}return e}function MM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Pv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ae.workingColorSpace}const yM={clone:Rs,merge:Un};var EM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class la extends zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EM,this.fragmentShader=TM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=MM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class zv extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=ia}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ia=new rt,N_=new Ge,O_=new Ge;class ui extends zv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=cd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cd*2*Math.atan(Math.tan(Wf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z)}getViewSize(e,i){return this.getViewBounds(e,N_,O_),i.subVectors(O_,N_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Wf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ds=-90,ps=1;class bM extends Xn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(ds,ps,e,i);l.layers=this.layers,this.add(l);const c=new ui(ds,ps,e,i);c.layers=this.layers,this.add(c);const h=new ui(ds,ps,e,i);h.layers=this.layers,this.add(h);const d=new ui(ds,ps,e,i);d.layers=this.layers,this.add(d);const m=new ui(ds,ps,e,i);m.layers=this.layers,this.add(m);const p=new ui(ds,ps,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===ia)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===bu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,S=e.getRenderTarget(),M=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(S,M,y),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Bv extends Vn{constructor(e,i,r,l,c,h,d,m,p,v){e=e!==void 0?e:[],i=i!==void 0?i:ys,super(e,i,r,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AM extends yr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Bv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Di}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Bo(5,5,5),c=new la({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Ha});c.uniforms.tEquirect.value=i;const h=new aa(l,c),d=i.minFilter;return i.minFilter===Sr&&(i.minFilter=Di),new bM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class fu extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RM={type:"move"};class hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const b of e.hand.values()){const x=i.getJointPose(b,r),g=this._getHandJoint(p,b);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],M=v.position.distanceTo(S.position),y=.02,A=.005;p.inputState.pinching&&M>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&M<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(RM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new fu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class CM extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const dh=new rt,wM=new rt,DM=new oe;class pr{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=dh.subVectors(r,i).cross(wM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(dh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||DM.getNormalMatrix(e),l=this.coplanarPoint(dh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Cu,hu=new rt;class Iv{constructor(e=new pr,i=new pr,r=new pr,l=new pr,c=new pr,h=new pr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ia){const r=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],v=l[5],S=l[6],M=l[7],y=l[8],A=l[9],b=l[10],x=l[11],g=l[12],B=l[13],L=l[14],w=l[15];if(r[0].setComponents(m-c,M-p,x-y,w-g).normalize(),r[1].setComponents(m+c,M+p,x+y,w+g).normalize(),r[2].setComponents(m+h,M+v,x+A,w+B).normalize(),r[3].setComponents(m-h,M-v,x-A,w-B).normalize(),r[4].setComponents(m-d,M-S,x-b,w-L).normalize(),i===ia)r[5].setComponents(m+d,M+S,x+b,w+L).normalize();else if(i===bu)r[5].setComponents(d,S,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(hu.x=l.normal.x>0?e.max.x:e.min.x,hu.y=l.normal.y>0?e.max.y:e.min.y,hu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(hu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class UM extends zo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const P_=new en,fd=new wv,du=new Cu,pu=new rt;class LM extends Xn{constructor(e=new ua,i=new UM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),du.copy(r.boundingSphere),du.applyMatrix4(l),du.radius+=c,e.ray.intersectsSphere(du)===!1)return;P_.copy(l).invert(),fd.copy(e.ray).applyMatrix4(P_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,S=r.attributes.position;if(p!==null){const M=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let A=M,b=y;A<b;A++){const x=p.getX(A);pu.fromBufferAttribute(S,x),z_(pu,x,m,l,e,i,this)}}else{const M=Math.max(0,h.start),y=Math.min(S.count,h.start+h.count);for(let A=M,b=y;A<b;A++)pu.fromBufferAttribute(S,A),z_(pu,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function z_(o,e,i,r,l,c,h){const d=fd.distanceSqToPoint(o);if(d<i){const m=new rt;fd.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class Fv extends Vn{constructor(e,i,r,l,c,h,d,m,p,v=Ss){if(v!==Ss&&v!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Ss&&(r=Mr),r===void 0&&v===bs&&(r=Ts),super(null,l,c,h,d,m,v,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:yi,this.minFilter=m!==void 0?m:yi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class wu extends ua{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,v=m+1,S=e/d,M=i/m,y=[],A=[],b=[],x=[];for(let g=0;g<v;g++){const B=g*M-h;for(let L=0;L<p;L++){const w=L*S-c;A.push(w,-B,0),b.push(0,0,1),x.push(L/d),x.push(1-g/m)}}for(let g=0;g<m;g++)for(let B=0;B<d;B++){const L=B+p*g,w=B+p*(g+1),q=B+1+p*(g+1),H=B+1+p*g;y.push(L,w,H),y.push(w,q,H)}this.setIndex(y),this.setAttribute("position",new xr(A,3)),this.setAttribute("normal",new xr(b,3)),this.setAttribute("uv",new xr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.width,e.height,e.widthSegments,e.heightSegments)}}class NM extends zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OM extends zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class PM extends zv{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class zM extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function B_(o,e,i,r){const l=BM(r);switch(i){case vv:return o*e;case xv:return o*e;case Mv:return o*e*2;case yv:return o*e/l.components*l.byteLength;case vd:return o*e/l.components*l.byteLength;case Ev:return o*e*2/l.components*l.byteLength;case Sd:return o*e*2/l.components*l.byteLength;case Sv:return o*e*3/l.components*l.byteLength;case Mi:return o*e*4/l.components*l.byteLength;case xd:return o*e*4/l.components*l.byteLength;case vu:case Su:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case xu:case Mu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Fh:case Gh:return Math.max(o,16)*Math.max(e,8)/4;case Ih:case Hh:return Math.max(o,8)*Math.max(e,8)/2;case Vh:case Xh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case kh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case jh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case $h:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case td:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case ed:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case nd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case id:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case ad:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case yu:case rd:case sd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Tv:case od:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ld:case ud:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function BM(o){switch(o){case sa:case mv:return{byteLength:1,components:1};case Uo:case gv:case Lo:return{byteLength:2,components:1};case gd:case _d:return{byteLength:2,components:4};case Mr:case md:case na:return{byteLength:4,components:1};case _v:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function IM(o){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,S=p.byteLength,M=o.createBuffer();o.bindBuffer(m,M),o.bufferData(m,p,v),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:M,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,m,p){const v=m.array,S=m.updateRanges;if(o.bindBuffer(p,d),S.length===0)o.bufferSubData(p,0,v);else{S.sort((y,A)=>y.start-A.start);let M=0;for(let y=1;y<S.length;y++){const A=S[M],b=S[y];b.start<=A.start+A.count+1?A.count=Math.max(A.count,b.start+b.count-A.start):(++M,S[M]=b)}S.length=M+1;for(let y=0,A=S.length;y<A;y++){const b=S[y];o.bufferSubData(p,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var FM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$M=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ay=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ly=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,py=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,my="gl_FragColor = linearToOutputTexel( gl_FragColor );",gy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_y=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,My=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ey=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ty=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,by=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ay=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ry=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Uy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ly=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ny=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Py=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,By=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Iy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ky=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ky=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$y=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,EE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,CE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,LE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,YE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_T=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:FM,alphahash_pars_fragment:HM,alphamap_fragment:GM,alphamap_pars_fragment:VM,alphatest_fragment:XM,alphatest_pars_fragment:kM,aomap_fragment:WM,aomap_pars_fragment:qM,batching_pars_vertex:YM,batching_vertex:jM,begin_vertex:ZM,beginnormal_vertex:KM,bsdfs:QM,iridescence_fragment:JM,bumpmap_pars_fragment:$M,clipping_planes_fragment:ty,clipping_planes_pars_fragment:ey,clipping_planes_pars_vertex:ny,clipping_planes_vertex:iy,color_fragment:ay,color_pars_fragment:ry,color_pars_vertex:sy,color_vertex:oy,common:ly,cube_uv_reflection_fragment:uy,defaultnormal_vertex:cy,displacementmap_pars_vertex:fy,displacementmap_vertex:hy,emissivemap_fragment:dy,emissivemap_pars_fragment:py,colorspace_fragment:my,colorspace_pars_fragment:gy,envmap_fragment:_y,envmap_common_pars_fragment:vy,envmap_pars_fragment:Sy,envmap_pars_vertex:xy,envmap_physical_pars_fragment:Uy,envmap_vertex:My,fog_vertex:yy,fog_pars_vertex:Ey,fog_fragment:Ty,fog_pars_fragment:by,gradientmap_pars_fragment:Ay,lightmap_pars_fragment:Ry,lights_lambert_fragment:Cy,lights_lambert_pars_fragment:wy,lights_pars_begin:Dy,lights_toon_fragment:Ly,lights_toon_pars_fragment:Ny,lights_phong_fragment:Oy,lights_phong_pars_fragment:Py,lights_physical_fragment:zy,lights_physical_pars_fragment:By,lights_fragment_begin:Iy,lights_fragment_maps:Fy,lights_fragment_end:Hy,logdepthbuf_fragment:Gy,logdepthbuf_pars_fragment:Vy,logdepthbuf_pars_vertex:Xy,logdepthbuf_vertex:ky,map_fragment:Wy,map_pars_fragment:qy,map_particle_fragment:Yy,map_particle_pars_fragment:jy,metalnessmap_fragment:Zy,metalnessmap_pars_fragment:Ky,morphinstance_vertex:Qy,morphcolor_vertex:Jy,morphnormal_vertex:$y,morphtarget_pars_vertex:tE,morphtarget_vertex:eE,normal_fragment_begin:nE,normal_fragment_maps:iE,normal_pars_fragment:aE,normal_pars_vertex:rE,normal_vertex:sE,normalmap_pars_fragment:oE,clearcoat_normal_fragment_begin:lE,clearcoat_normal_fragment_maps:uE,clearcoat_pars_fragment:cE,iridescence_pars_fragment:fE,opaque_fragment:hE,packing:dE,premultiplied_alpha_fragment:pE,project_vertex:mE,dithering_fragment:gE,dithering_pars_fragment:_E,roughnessmap_fragment:vE,roughnessmap_pars_fragment:SE,shadowmap_pars_fragment:xE,shadowmap_pars_vertex:ME,shadowmap_vertex:yE,shadowmask_pars_fragment:EE,skinbase_vertex:TE,skinning_pars_vertex:bE,skinning_vertex:AE,skinnormal_vertex:RE,specularmap_fragment:CE,specularmap_pars_fragment:wE,tonemapping_fragment:DE,tonemapping_pars_fragment:UE,transmission_fragment:LE,transmission_pars_fragment:NE,uv_pars_fragment:OE,uv_pars_vertex:PE,uv_vertex:zE,worldpos_vertex:BE,background_vert:IE,background_frag:FE,backgroundCube_vert:HE,backgroundCube_frag:GE,cube_vert:VE,cube_frag:XE,depth_vert:kE,depth_frag:WE,distanceRGBA_vert:qE,distanceRGBA_frag:YE,equirect_vert:jE,equirect_frag:ZE,linedashed_vert:KE,linedashed_frag:QE,meshbasic_vert:JE,meshbasic_frag:$E,meshlambert_vert:tT,meshlambert_frag:eT,meshmatcap_vert:nT,meshmatcap_frag:iT,meshnormal_vert:aT,meshnormal_frag:rT,meshphong_vert:sT,meshphong_frag:oT,meshphysical_vert:lT,meshphysical_frag:uT,meshtoon_vert:cT,meshtoon_frag:fT,points_vert:hT,points_frag:dT,shadow_vert:pT,shadow_frag:mT,sprite_vert:gT,sprite_frag:_T},Ut={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},wi={basic:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Un([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Un([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Un([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Un([Ut.points,Ut.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Un([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Un([Ut.common,Ut.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Un([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Un([Ut.sprite,Ut.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Un([Ut.common,Ut.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Un([Ut.lights,Ut.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};wi.physical={uniforms:Un([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const mu={r:0,b:0,g:0},hr=new oa,vT=new en;function ST(o,e,i,r,l,c,h){const d=new Ce(0);let m=c===!0?0:1,p,v,S=null,M=0,y=null;function A(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?i:e).get(w)),w}function b(L){let w=!1;const q=A(L);q===null?g(d,m):q&&q.isColor&&(g(q,1),w=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(L,w){const q=A(w);q&&(q.isCubeTexture||q.mapping===Ru)?(v===void 0&&(v=new aa(new Bo(1,1,1),new la({name:"BackgroundCubeMaterial",uniforms:Rs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,P,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),hr.copy(w.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,q.isCubeTexture&&q.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),v.material.uniforms.envMap.value=q,v.material.uniforms.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(vT.makeRotationFromEuler(hr)),v.material.toneMapped=Ae.getTransfer(q.colorSpace)!==Be,(S!==q||M!==q.version||y!==o.toneMapping)&&(v.material.needsUpdate=!0,S=q,M=q.version,y=o.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):q&&q.isTexture&&(p===void 0&&(p=new aa(new wu(2,2),new la({name:"BackgroundMaterial",uniforms:Rs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=q,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(q.colorSpace)!==Be,q.matrixAutoUpdate===!0&&q.updateMatrix(),p.material.uniforms.uvTransform.value.copy(q.matrix),(S!==q||M!==q.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,S=q,M=q.version,y=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function g(L,w){L.getRGB(mu,Pv(o)),r.buffers.color.setClear(mu.r,mu.g,mu.b,w,h)}function B(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,w=1){d.set(L),m=w,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,g(d,m)},render:b,addToRenderList:x,dispose:B}}function xT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=M(null);let c=l,h=!1;function d(C,G,lt,st,gt){let dt=!1;const O=S(st,lt,G);c!==O&&(c=O,p(c.object)),dt=y(C,st,lt,gt),dt&&A(C,st,lt,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,w(C,G,lt,st),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function S(C,G,lt){const st=lt.wireframe===!0;let gt=r[C.id];gt===void 0&&(gt={},r[C.id]=gt);let dt=gt[G.id];dt===void 0&&(dt={},gt[G.id]=dt);let O=dt[st];return O===void 0&&(O=M(m()),dt[st]=O),O}function M(C){const G=[],lt=[],st=[];for(let gt=0;gt<i;gt++)G[gt]=0,lt[gt]=0,st[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:lt,attributeDivisors:st,object:C,attributes:{},index:null}}function y(C,G,lt,st){const gt=c.attributes,dt=G.attributes;let O=0;const Z=lt.getAttributes();for(const j in Z)if(Z[j].location>=0){const Et=gt[j];let N=dt[j];if(N===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),Et===void 0||Et.attribute!==N||N&&Et.data!==N.data)return!0;O++}return c.attributesNum!==O||c.index!==st}function A(C,G,lt,st){const gt={},dt=G.attributes;let O=0;const Z=lt.getAttributes();for(const j in Z)if(Z[j].location>=0){let Et=dt[j];Et===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor));const N={};N.attribute=Et,Et&&Et.data&&(N.data=Et.data),gt[j]=N,O++}c.attributes=gt,c.attributesNum=O,c.index=st}function b(){const C=c.newAttributes;for(let G=0,lt=C.length;G<lt;G++)C[G]=0}function x(C){g(C,0)}function g(C,G){const lt=c.newAttributes,st=c.enabledAttributes,gt=c.attributeDivisors;lt[C]=1,st[C]===0&&(o.enableVertexAttribArray(C),st[C]=1),gt[C]!==G&&(o.vertexAttribDivisor(C,G),gt[C]=G)}function B(){const C=c.newAttributes,G=c.enabledAttributes;for(let lt=0,st=G.length;lt<st;lt++)G[lt]!==C[lt]&&(o.disableVertexAttribArray(lt),G[lt]=0)}function L(C,G,lt,st,gt,dt,O){O===!0?o.vertexAttribIPointer(C,G,lt,gt,dt):o.vertexAttribPointer(C,G,lt,st,gt,dt)}function w(C,G,lt,st){b();const gt=st.attributes,dt=lt.getAttributes(),O=G.defaultAttributeValues;for(const Z in dt){const j=dt[Z];if(j.location>=0){let vt=gt[Z];if(vt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(vt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(vt=C.instanceColor)),vt!==void 0){const Et=vt.normalized,N=vt.itemSize,nt=e.get(vt);if(nt===void 0)continue;const xt=nt.buffer,K=nt.type,ct=nt.bytesPerElement,yt=K===o.INT||K===o.UNSIGNED_INT||vt.gpuType===md;if(vt.isInterleavedBufferAttribute){const St=vt.data,It=St.stride,jt=vt.offset;if(St.isInstancedInterleavedBuffer){for(let Zt=0;Zt<j.locationSize;Zt++)g(j.location+Zt,St.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Zt=0;Zt<j.locationSize;Zt++)x(j.location+Zt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let Zt=0;Zt<j.locationSize;Zt++)L(j.location+Zt,N/j.locationSize,K,Et,It*ct,(jt+N/j.locationSize*Zt)*ct,yt)}else{if(vt.isInstancedBufferAttribute){for(let St=0;St<j.locationSize;St++)g(j.location+St,vt.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let St=0;St<j.locationSize;St++)x(j.location+St);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let St=0;St<j.locationSize;St++)L(j.location+St,N/j.locationSize,K,Et,N*ct,N/j.locationSize*St*ct,yt)}}else if(O!==void 0){const Et=O[Z];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(j.location,Et);break;case 3:o.vertexAttrib3fv(j.location,Et);break;case 4:o.vertexAttrib4fv(j.location,Et);break;default:o.vertexAttrib1fv(j.location,Et)}}}}B()}function q(){V();for(const C in r){const G=r[C];for(const lt in G){const st=G[lt];for(const gt in st)v(st[gt].object),delete st[gt];delete G[lt]}delete r[C]}}function H(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const lt in G){const st=G[lt];for(const gt in st)v(st[gt].object),delete st[gt];delete G[lt]}delete r[C.id]}function P(C){for(const G in r){const lt=r[G];if(lt[C.id]===void 0)continue;const st=lt[C.id];for(const gt in st)v(st[gt].object),delete st[gt];delete lt[C.id]}}function V(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:D,dispose:q,releaseStatesOfGeometry:H,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:x,disableUnusedAttributes:B}}function MT(o,e,i){let r;function l(p){r=p}function c(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function h(p,v,S){S!==0&&(o.drawArraysInstanced(r,p,v,S),i.update(v,r,S))}function d(p,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,S);let y=0;for(let A=0;A<S;A++)y+=v[A];i.update(y,r,1)}function m(p,v,S,M){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<p.length;A++)h(p[A],v[A],M[A]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,v,0,M,0,S);let A=0;for(let b=0;b<S;b++)A+=v[b]*M[b];i.update(A,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function yT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Mi&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const V=P===Lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==sa&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==na&&!V)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=i.logarithmicDepthBuffer===!0,M=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),q=A>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:S,reverseDepthBuffer:M,maxTextures:y,maxVertexTextures:A,maxTextureSize:b,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:B,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:q,maxSamples:H}}function ET(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new pr,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,M){const y=S.length!==0||M||r!==0||l;return l=M,r=S.length,y},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,M){i=v(S,M,0)},this.setState=function(S,M,y){const A=S.clippingPlanes,b=S.clipIntersection,x=S.clipShadows,g=o.get(S);if(!l||A===null||A.length===0||c&&!x)c?v(null):p();else{const B=c?0:r,L=B*4;let w=g.clippingState||null;m.value=w,w=v(A,M,L,y);for(let q=0;q!==L;++q)w[q]=i[q];g.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,M,y,A){const b=S!==null?S.length:0;let x=null;if(b!==0){if(x=m.value,A!==!0||x===null){const g=y+b*4,B=M.matrixWorldInverse;d.getNormalMatrix(B),(x===null||x.length<g)&&(x=new Float32Array(g));for(let L=0,w=y;L!==b;++L,w+=4)h.copy(S[L]).applyMatrix4(B,d),h.normal.toArray(x,w),x[w+3]=h.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}function TT(o){let e=new WeakMap;function i(h,d){return d===Oh?h.mapping=ys:d===Ph&&(h.mapping=Es),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Oh||d===Ph)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new AM(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const _s=4,I_=[.125,.215,.35,.446,.526,.582],_r=20,ph=new PM,F_=new Ce;let mh=null,gh=0,_h=0,vh=!1;const mr=(1+Math.sqrt(5))/2,ms=1/mr,H_=[new rt(-mr,ms,0),new rt(mr,ms,0),new rt(-ms,0,mr),new rt(ms,0,mr),new rt(0,mr,-ms),new rt(0,mr,ms),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)];class G_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=k_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=X_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mh,gh,_h),this._renderer.xr.enabled=vh,e.scissorTest=!1,gu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ys||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:Lo,format:Mi,colorSpace:As,depthBuffer:!1},l=V_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=V_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bT(c)),this._blurMaterial=AT(c,e,i)}return l}_compileMaterial(e){const i=new aa(this._lodPlanes[0],e);this._renderer.compile(i,ph)}_sceneToCubeUV(e,i,r,l){const d=new ui(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,M=v.toneMapping;v.getClearColor(F_),v.toneMapping=Ga,v.autoClear=!1;const y=new Lv({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),A=new aa(new Bo,y);let b=!1;const x=e.background;x?x.isColor&&(y.color.copy(x),e.background=null,b=!0):(y.color.copy(F_),b=!0);for(let g=0;g<6;g++){const B=g%3;B===0?(d.up.set(0,m[g],0),d.lookAt(p[g],0,0)):B===1?(d.up.set(0,0,m[g]),d.lookAt(0,p[g],0)):(d.up.set(0,m[g],0),d.lookAt(0,0,p[g]));const L=this._cubeSize;gu(l,B*L,g>2?L:0,L,L),v.setRenderTarget(l),b&&v.render(A,d),v.render(e,d)}A.geometry.dispose(),A.material.dispose(),v.toneMapping=M,v.autoClear=S,e.background=x}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ys||e.mapping===Es;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=k_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=X_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new aa(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;gu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,ph)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=H_[(l-c-1)%H_.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,S=new aa(this._lodPlanes[l],p),M=p.uniforms,y=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*_r-1),b=c/A,x=isFinite(c)?1+Math.floor(v*b):_r;x>_r&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${_r}`);const g=[];let B=0;for(let P=0;P<_r;++P){const V=P/b,D=Math.exp(-V*V/2);g.push(D),P===0?B+=D:P<x&&(B+=2*D)}for(let P=0;P<g.length;P++)g[P]=g[P]/B;M.envMap.value=e.texture,M.samples.value=x,M.weights.value=g,M.latitudinal.value=h==="latitudinal",d&&(M.poleAxis.value=d);const{_lodMax:L}=this;M.dTheta.value=A,M.mipInt.value=L-r;const w=this._sizeLods[l],q=3*w*(l>L-_s?l-L+_s:0),H=4*(this._cubeSize-w);gu(i,q,H,3*w,2*w),m.setRenderTarget(i),m.render(S,ph)}}function bT(o){const e=[],i=[],r=[];let l=o;const c=o-_s+1+I_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-_s?m=I_[h-o+_s-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),v=-p,S=1+p,M=[v,v,S,v,S,S,v,v,S,S,v,S],y=6,A=6,b=3,x=2,g=1,B=new Float32Array(b*A*y),L=new Float32Array(x*A*y),w=new Float32Array(g*A*y);for(let H=0;H<y;H++){const P=H%3*2/3-1,V=H>2?0:-1,D=[P,V,0,P+2/3,V,0,P+2/3,V+1,0,P,V,0,P+2/3,V+1,0,P,V+1,0];B.set(D,b*A*H),L.set(M,x*A*H);const C=[H,H,H,H,H,H];w.set(C,g*A*H)}const q=new ua;q.setAttribute("position",new ci(B,b)),q.setAttribute("uv",new ci(L,x)),q.setAttribute("faceIndex",new ci(w,g)),e.push(q),l>_s&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function V_(o,e,i){const r=new yr(o,e,i);return r.texture.mapping=Ru,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function AT(o,e,i){const r=new Float32Array(_r),l=new rt(0,1,0);return new la({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function X_(){return new la({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function k_(){return new la({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Md(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function RT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Oh||m===Ph,v=m===ys||m===Es;if(p||v){let S=e.get(d);const M=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==M)return i===null&&(i=new G_(o)),S=p?i.fromEquirectangular(d,S):i.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),S.texture;if(S!==void 0)return S.texture;{const y=d.image;return p&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new G_(o)),S=p?i.fromEquirectangular(d):i.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),d.addEventListener("dispose",c),S.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function CT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&gs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function wT(o,e,i,r){const l={},c=new WeakMap;function h(S){const M=S.target;M.index!==null&&e.remove(M.index);for(const A in M.attributes)e.remove(M.attributes[A]);M.removeEventListener("dispose",h),delete l[M.id];const y=c.get(M);y&&(e.remove(y),c.delete(M)),r.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,i.memory.geometries--}function d(S,M){return l[M.id]===!0||(M.addEventListener("dispose",h),l[M.id]=!0,i.memory.geometries++),M}function m(S){const M=S.attributes;for(const y in M)e.update(M[y],o.ARRAY_BUFFER)}function p(S){const M=[],y=S.index,A=S.attributes.position;let b=0;if(y!==null){const B=y.array;b=y.version;for(let L=0,w=B.length;L<w;L+=3){const q=B[L+0],H=B[L+1],P=B[L+2];M.push(q,H,H,P,P,q)}}else if(A!==void 0){const B=A.array;b=A.version;for(let L=0,w=B.length/3-1;L<w;L+=3){const q=L+0,H=L+1,P=L+2;M.push(q,H,H,P,P,q)}}else return;const x=new(Av(M)?Ov:Nv)(M,1);x.version=b;const g=c.get(S);g&&e.remove(g),c.set(S,x)}function v(S){const M=c.get(S);if(M){const y=S.index;y!==null&&M.version<y.version&&p(S)}else p(S);return c.get(S)}return{get:d,update:m,getWireframeAttribute:v}}function DT(o,e,i){let r;function l(M){r=M}let c,h;function d(M){c=M.type,h=M.bytesPerElement}function m(M,y){o.drawElements(r,y,c,M*h),i.update(y,r,1)}function p(M,y,A){A!==0&&(o.drawElementsInstanced(r,y,c,M*h,A),i.update(y,r,A))}function v(M,y,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,M,0,A);let x=0;for(let g=0;g<A;g++)x+=y[g];i.update(x,r,1)}function S(M,y,A,b){if(A===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<M.length;g++)p(M[g]/h,y[g],b[g]);else{x.multiDrawElementsInstancedWEBGL(r,y,0,c,M,0,b,0,A);let g=0;for(let B=0;B<A;B++)g+=y[B]*b[B];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function UT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function LT(o,e,i){const r=new WeakMap,l=new tn;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=v!==void 0?v.length:0;let M=r.get(d);if(M===void 0||M.count!==S){let C=function(){V.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var y=C;M!==void 0&&M.texture.dispose();const A=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let w=0;A===!0&&(w=1),b===!0&&(w=2),x===!0&&(w=3);let q=d.attributes.position.count*w,H=1;q>e.maxTextureSize&&(H=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const P=new Float32Array(q*H*4*S),V=new Cv(P,q,H,S);V.type=na,V.needsUpdate=!0;const D=w*4;for(let G=0;G<S;G++){const lt=g[G],st=B[G],gt=L[G],dt=q*H*4*G;for(let O=0;O<lt.count;O++){const Z=O*D;A===!0&&(l.fromBufferAttribute(lt,O),P[dt+Z+0]=l.x,P[dt+Z+1]=l.y,P[dt+Z+2]=l.z,P[dt+Z+3]=0),b===!0&&(l.fromBufferAttribute(st,O),P[dt+Z+4]=l.x,P[dt+Z+5]=l.y,P[dt+Z+6]=l.z,P[dt+Z+7]=0),x===!0&&(l.fromBufferAttribute(gt,O),P[dt+Z+8]=l.x,P[dt+Z+9]=l.y,P[dt+Z+10]=l.z,P[dt+Z+11]=gt.itemSize===4?l.w:1)}}M={count:S,texture:V,size:new Ge(q,H)},r.set(d,M),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let x=0;x<p.length;x++)A+=p[x];const b=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",b),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",M.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",M.size)}return{update:c}}function NT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,S=e.get(m,v);if(l.get(S)!==p&&(e.update(S),l.set(S,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const M=m.skeleton;l.get(M)!==p&&(M.update(),l.set(M,p))}return S}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Gv=new Vn,W_=new Fv(1,1),Vv=new Cv,Xv=new uM,kv=new Bv,q_=[],Y_=[],j_=new Float32Array(16),Z_=new Float32Array(9),K_=new Float32Array(4);function ws(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=q_[l];if(c===void 0&&(c=new Float32Array(l),q_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function fn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function hn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Du(o,e){let i=Y_[e];i===void 0&&(i=new Int32Array(e),Y_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function OT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function PT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2fv(this.addr,e),hn(i,e)}}function zT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;o.uniform3fv(this.addr,e),hn(i,e)}}function BT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4fv(this.addr,e),hn(i,e)}}function IT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;K_.set(r),o.uniformMatrix2fv(this.addr,!1,K_),hn(i,r)}}function FT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;Z_.set(r),o.uniformMatrix3fv(this.addr,!1,Z_),hn(i,r)}}function HT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;j_.set(r),o.uniformMatrix4fv(this.addr,!1,j_),hn(i,r)}}function GT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function VT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2iv(this.addr,e),hn(i,e)}}function XT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3iv(this.addr,e),hn(i,e)}}function kT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4iv(this.addr,e),hn(i,e)}}function WT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function qT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2uiv(this.addr,e),hn(i,e)}}function YT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3uiv(this.addr,e),hn(i,e)}}function jT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4uiv(this.addr,e),hn(i,e)}}function ZT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(W_.compareFunction=bv,c=W_):c=Gv,i.setTexture2D(e||c,l)}function KT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Xv,l)}function QT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||kv,l)}function JT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Vv,l)}function $T(o){switch(o){case 5126:return OT;case 35664:return PT;case 35665:return zT;case 35666:return BT;case 35674:return IT;case 35675:return FT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return VT;case 35668:case 35672:return XT;case 35669:case 35673:return kT;case 5125:return WT;case 36294:return qT;case 36295:return YT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return JT}}function tb(o,e){o.uniform1fv(this.addr,e)}function eb(o,e){const i=ws(e,this.size,2);o.uniform2fv(this.addr,i)}function nb(o,e){const i=ws(e,this.size,3);o.uniform3fv(this.addr,i)}function ib(o,e){const i=ws(e,this.size,4);o.uniform4fv(this.addr,i)}function ab(o,e){const i=ws(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function rb(o,e){const i=ws(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function sb(o,e){const i=ws(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function ob(o,e){o.uniform1iv(this.addr,e)}function lb(o,e){o.uniform2iv(this.addr,e)}function ub(o,e){o.uniform3iv(this.addr,e)}function cb(o,e){o.uniform4iv(this.addr,e)}function fb(o,e){o.uniform1uiv(this.addr,e)}function hb(o,e){o.uniform2uiv(this.addr,e)}function db(o,e){o.uniform3uiv(this.addr,e)}function pb(o,e){o.uniform4uiv(this.addr,e)}function mb(o,e,i){const r=this.cache,l=e.length,c=Du(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Gv,c[h])}function gb(o,e,i){const r=this.cache,l=e.length,c=Du(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Xv,c[h])}function _b(o,e,i){const r=this.cache,l=e.length,c=Du(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||kv,c[h])}function vb(o,e,i){const r=this.cache,l=e.length,c=Du(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Vv,c[h])}function Sb(o){switch(o){case 5126:return tb;case 35664:return eb;case 35665:return nb;case 35666:return ib;case 35674:return ab;case 35675:return rb;case 35676:return sb;case 5124:case 35670:return ob;case 35667:case 35671:return lb;case 35668:case 35672:return ub;case 35669:case 35673:return cb;case 5125:return fb;case 36294:return hb;case 36295:return db;case 36296:return pb;case 35678:case 36198:case 36298:case 36306:case 35682:return mb;case 35679:case 36299:case 36307:return gb;case 35680:case 36300:case 36308:case 36293:return _b;case 36289:case 36303:case 36311:case 36292:return vb}}class xb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=$T(i.type)}}class Mb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Sb(i.type)}}class yb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const Sh=/(\w+)(\])?(\[|\.)?/g;function Q_(o,e){o.seq.push(e),o.map[e.id]=e}function Eb(o,e,i){const r=o.name,l=r.length;for(Sh.lastIndex=0;;){const c=Sh.exec(r),h=Sh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Q_(i,p===void 0?new xb(d,o,e):new Mb(d,o,e));break}else{let S=i.map[d];S===void 0&&(S=new yb(d),Q_(i,S)),i=S}}}class Eu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);Eb(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function J_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Tb=37297;let bb=0;function Ab(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const $_=new oe;function Rb(o){Ae._getMatrix($_,Ae.workingColorSpace,o);const e=`mat3( ${$_.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case Tu:return[e,"LinearTransferOETF"];case Be:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function tv(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+Ab(o.getShaderSource(e),h)}else return l}function Cb(o,e){const i=Rb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function wb(o,e){let i;switch(e){case Ox:i="Linear";break;case Px:i="Reinhard";break;case zx:i="Cineon";break;case Bx:i="ACESFilmic";break;case Fx:i="AgX";break;case Hx:i="Neutral";break;case Ix:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const _u=new rt;function Db(){Ae.getLuminanceCoefficients(_u);const o=_u.x.toFixed(4),e=_u.y.toFixed(4),i=_u.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ub(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function Lb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Nb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Do(o){return o!==""}function ev(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function hd(o){return o.replace(Ob,zb)}const Pb=new Map;function zb(o,e){let i=le[e];if(i===void 0){const r=Pb.get(e);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return hd(i)}const Bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iv(o){return o.replace(Bb,Ib)}function Ib(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function av(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===hv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===dx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ta&&(e="SHADOWMAP_TYPE_VSM"),e}function Hb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ys:case Es:e="ENVMAP_TYPE_CUBE";break;case Ru:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function Vb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case dv:e="ENVMAP_BLENDING_MULTIPLY";break;case Lx:e="ENVMAP_BLENDING_MIX";break;case Nx:e="ENVMAP_BLENDING_ADD";break}return e}function Xb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function kb(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Fb(i),p=Hb(i),v=Gb(i),S=Vb(i),M=Xb(i),y=Ub(i),A=Lb(c),b=l.createProgram();let x,g,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Do).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Do).join(`
`),g.length>0&&(g+=`
`)):(x=[av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),g=[av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",M?"#define CUBEUV_TEXEL_WIDTH "+M.texelWidth:"",M?"#define CUBEUV_TEXEL_HEIGHT "+M.texelHeight:"",M?"#define CUBEUV_MAX_MIP "+M.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?le.tonemapping_pars_fragment:"",i.toneMapping!==Ga?wb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,Cb("linearToOutputTexel",i.outputColorSpace),Db(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Do).join(`
`)),h=hd(h),h=ev(h,i),h=nv(h,i),d=hd(d),d=ev(d,i),d=nv(d,i),h=iv(h),d=iv(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",i.glslVersion===__?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===__?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=B+x+h,w=B+g+d,q=J_(l,l.VERTEX_SHADER,L),H=J_(l,l.FRAGMENT_SHADER,w);l.attachShader(b,q),l.attachShader(b,H),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function P(G){if(o.debug.checkShaderErrors){const lt=l.getProgramInfoLog(b).trim(),st=l.getShaderInfoLog(q).trim(),gt=l.getShaderInfoLog(H).trim();let dt=!0,O=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(dt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,b,q,H);else{const Z=tv(l,q,"vertex"),j=tv(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+lt+`
`+Z+`
`+j)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(st===""||gt==="")&&(O=!1);O&&(G.diagnostics={runnable:dt,programLog:lt,vertexShader:{log:st,prefix:x},fragmentShader:{log:gt,prefix:g}})}l.deleteShader(q),l.deleteShader(H),V=new Eu(l,b),D=Nb(l,b)}let V;this.getUniforms=function(){return V===void 0&&P(this),V};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(b,Tb)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=bb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=q,this.fragmentShader=H,this}let Wb=0;class qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Yb(e),i.set(e,r)),r}}class Yb{constructor(e){this.id=Wb++,this.code=e,this.usedTimes=0}}function jb(o,e,i,r,l,c,h){const d=new Dv,m=new qb,p=new Set,v=[],S=l.logarithmicDepthBuffer,M=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return p.add(D),D===0?"uv":`uv${D}`}function x(D,C,G,lt,st){const gt=lt.fog,dt=st.geometry,O=D.isMeshStandardMaterial?lt.environment:null,Z=(D.isMeshStandardMaterial?i:e).get(D.envMap||O),j=Z&&Z.mapping===Ru?Z.image.height:null,vt=A[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const Et=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,N=Et!==void 0?Et.length:0;let nt=0;dt.morphAttributes.position!==void 0&&(nt=1),dt.morphAttributes.normal!==void 0&&(nt=2),dt.morphAttributes.color!==void 0&&(nt=3);let xt,K,ct,yt;if(vt){const ye=wi[vt];xt=ye.vertexShader,K=ye.fragmentShader}else xt=D.vertexShader,K=D.fragmentShader,m.update(D),ct=m.getVertexShaderID(D),yt=m.getFragmentShaderID(D);const St=o.getRenderTarget(),It=o.state.buffers.depth.getReversed(),jt=st.isInstancedMesh===!0,Zt=st.isBatchedMesh===!0,Ve=!!D.map,Ie=!!D.matcap,ce=!!Z,I=!!D.aoMap,En=!!D.lightMap,ue=!!D.bumpMap,de=!!D.normalMap,Xt=!!D.displacementMap,we=!!D.emissiveMap,Vt=!!D.metalnessMap,U=!!D.roughnessMap,T=D.anisotropy>0,tt=D.clearcoat>0,ft=D.dispersion>0,Mt=D.iridescence>0,pt=D.sheen>0,Ht=D.transmission>0,Ct=T&&!!D.anisotropyMap,Pt=tt&&!!D.clearcoatMap,pe=tt&&!!D.clearcoatNormalMap,bt=tt&&!!D.clearcoatRoughnessMap,zt=Mt&&!!D.iridescenceMap,kt=Mt&&!!D.iridescenceThicknessMap,Gt=pt&&!!D.sheenColorMap,Nt=pt&&!!D.sheenRoughnessMap,Jt=!!D.specularMap,ae=!!D.specularColorMap,Le=!!D.specularIntensityMap,k=Ht&&!!D.transmissionMap,At=Ht&&!!D.thicknessMap,ot=!!D.gradientMap,_t=!!D.alphaMap,Rt=D.alphaTest>0,wt=!!D.alphaHash,$t=!!D.extensions;let qe=Ga;D.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(qe=o.toneMapping);const ln={shaderID:vt,shaderType:D.type,shaderName:D.name,vertexShader:xt,fragmentShader:K,defines:D.defines,customVertexShaderID:ct,customFragmentShaderID:yt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:Zt,batchingColor:Zt&&st._colorsTexture!==null,instancing:jt,instancingColor:jt&&st.instanceColor!==null,instancingMorph:jt&&st.morphTexture!==null,supportsVertexTextures:M,outputColorSpace:St===null?o.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:As,alphaToCoverage:!!D.alphaToCoverage,map:Ve,matcap:Ie,envMap:ce,envMapMode:ce&&Z.mapping,envMapCubeUVHeight:j,aoMap:I,lightMap:En,bumpMap:ue,normalMap:de,displacementMap:M&&Xt,emissiveMap:we,normalMapObjectSpace:de&&D.normalMapType===Wx,normalMapTangentSpace:de&&D.normalMapType===kx,metalnessMap:Vt,roughnessMap:U,anisotropy:T,anisotropyMap:Ct,clearcoat:tt,clearcoatMap:Pt,clearcoatNormalMap:pe,clearcoatRoughnessMap:bt,dispersion:ft,iridescence:Mt,iridescenceMap:zt,iridescenceThicknessMap:kt,sheen:pt,sheenColorMap:Gt,sheenRoughnessMap:Nt,specularMap:Jt,specularColorMap:ae,specularIntensityMap:Le,transmission:Ht,transmissionMap:k,thicknessMap:At,gradientMap:ot,opaque:D.transparent===!1&&D.blending===vs&&D.alphaToCoverage===!1,alphaMap:_t,alphaTest:Rt,alphaHash:wt,combine:D.combine,mapUv:Ve&&b(D.map.channel),aoMapUv:I&&b(D.aoMap.channel),lightMapUv:En&&b(D.lightMap.channel),bumpMapUv:ue&&b(D.bumpMap.channel),normalMapUv:de&&b(D.normalMap.channel),displacementMapUv:Xt&&b(D.displacementMap.channel),emissiveMapUv:we&&b(D.emissiveMap.channel),metalnessMapUv:Vt&&b(D.metalnessMap.channel),roughnessMapUv:U&&b(D.roughnessMap.channel),anisotropyMapUv:Ct&&b(D.anisotropyMap.channel),clearcoatMapUv:Pt&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:pe&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&b(D.sheenRoughnessMap.channel),specularMapUv:Jt&&b(D.specularMap.channel),specularColorMapUv:ae&&b(D.specularColorMap.channel),specularIntensityMapUv:Le&&b(D.specularIntensityMap.channel),transmissionMapUv:k&&b(D.transmissionMap.channel),thicknessMapUv:At&&b(D.thicknessMap.channel),alphaMapUv:_t&&b(D.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(de||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!dt.attributes.uv&&(Ve||_t),fog:!!gt,useFog:D.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:S,reverseDepthBuffer:It,skinning:st.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:nt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:qe,decodeVideoTexture:Ve&&D.map.isVideoTexture===!0&&Ae.getTransfer(D.map.colorSpace)===Be,decodeVideoTextureEmissive:we&&D.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(D.emissiveMap.colorSpace)===Be,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ea,flipSided:D.side===Gn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:$t&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&D.extensions.multiDraw===!0||Zt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return ln.vertexUv1s=p.has(1),ln.vertexUv2s=p.has(2),ln.vertexUv3s=p.has(3),p.clear(),ln}function g(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)C.push(G),C.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(B(C,D),L(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function B(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function L(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=A[D.type];let G;if(C){const lt=wi[C];G=yM.clone(lt.uniforms)}else G=D.uniforms;return G}function q(D,C){let G;for(let lt=0,st=v.length;lt<st;lt++){const gt=v[lt];if(gt.cacheKey===C){G=gt,++G.usedTimes;break}}return G===void 0&&(G=new kb(o,C,D,c),v.push(G)),G}function H(D){if(--D.usedTimes===0){const C=v.indexOf(D);v[C]=v[v.length-1],v.pop(),D.destroy()}}function P(D){m.remove(D)}function V(){m.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:w,acquireProgram:q,releaseProgram:H,releaseShaderCache:P,programs:v,dispose:V}}function Zb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function Kb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function rv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function sv(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(S,M,y,A,b,x){let g=o[e];return g===void 0?(g={id:S.id,object:S,geometry:M,material:y,groupOrder:A,renderOrder:S.renderOrder,z:b,group:x},o[e]=g):(g.id=S.id,g.object=S,g.geometry=M,g.material=y,g.groupOrder=A,g.renderOrder=S.renderOrder,g.z=b,g.group=x),e++,g}function d(S,M,y,A,b,x){const g=h(S,M,y,A,b,x);y.transmission>0?r.push(g):y.transparent===!0?l.push(g):i.push(g)}function m(S,M,y,A,b,x){const g=h(S,M,y,A,b,x);y.transmission>0?r.unshift(g):y.transparent===!0?l.unshift(g):i.unshift(g)}function p(S,M){i.length>1&&i.sort(S||Kb),r.length>1&&r.sort(M||rv),l.length>1&&l.sort(M||rv)}function v(){for(let S=e,M=o.length;S<M;S++){const y=o[S];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function Qb(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new sv,o.set(r,[h])):l>=c.length?(h=new sv,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function Jb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new Ce};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=i,i}}}function $b(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let tA=0;function eA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function nA(o){const e=new Jb,i=$b(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new rt);const l=new rt,c=new en,h=new en;function d(p){let v=0,S=0,M=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,A=0,b=0,x=0,g=0,B=0,L=0,w=0,q=0,H=0,P=0;p.sort(eA);for(let D=0,C=p.length;D<C;D++){const G=p[D],lt=G.color,st=G.intensity,gt=G.distance,dt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=lt.r*st,S+=lt.g*st,M+=lt.b*st;else if(G.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(G.sh.coefficients[O],st);P++}else if(G.isDirectionalLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,j=i.get(G);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,r.directionalShadow[y]=j,r.directionalShadowMap[y]=dt,r.directionalShadowMatrix[y]=G.shadow.matrix,B++}r.directional[y]=O,y++}else if(G.isSpotLight){const O=e.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(lt).multiplyScalar(st),O.distance=gt,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,r.spot[b]=O;const Z=G.shadow;if(G.map&&(r.spotLightMap[q]=G.map,q++,Z.updateMatrices(G),G.castShadow&&H++),r.spotLightMatrix[b]=Z.matrix,G.castShadow){const j=i.get(G);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,r.spotShadow[b]=j,r.spotShadowMap[b]=dt,w++}b++}else if(G.isRectAreaLight){const O=e.get(G);O.color.copy(lt).multiplyScalar(st),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),r.rectArea[x]=O,x++}else if(G.isPointLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const Z=G.shadow,j=i.get(G);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,r.pointShadow[A]=j,r.pointShadowMap[A]=dt,r.pointShadowMatrix[A]=G.shadow.matrix,L++}r.point[A]=O,A++}else if(G.isHemisphereLight){const O=e.get(G);O.skyColor.copy(G.color).multiplyScalar(st),O.groundColor.copy(G.groundColor).multiplyScalar(st),r.hemi[g]=O,g++}}x>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=M;const V=r.hash;(V.directionalLength!==y||V.pointLength!==A||V.spotLength!==b||V.rectAreaLength!==x||V.hemiLength!==g||V.numDirectionalShadows!==B||V.numPointShadows!==L||V.numSpotShadows!==w||V.numSpotMaps!==q||V.numLightProbes!==P)&&(r.directional.length=y,r.spot.length=b,r.rectArea.length=x,r.point.length=A,r.hemi.length=g,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=w+q-H,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=P,V.directionalLength=y,V.pointLength=A,V.spotLength=b,V.rectAreaLength=x,V.hemiLength=g,V.numDirectionalShadows=B,V.numPointShadows=L,V.numSpotShadows=w,V.numSpotMaps=q,V.numLightProbes=P,r.version=tA++)}function m(p,v){let S=0,M=0,y=0,A=0,b=0;const x=v.matrixWorldInverse;for(let g=0,B=p.length;g<B;g++){const L=p[g];if(L.isDirectionalLight){const w=r.directional[S];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(x),S++}else if(L.isSpotLight){const w=r.spot[y];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(x),y++}else if(L.isRectAreaLight){const w=r.rectArea[A];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(x),h.identity(),c.copy(L.matrixWorld),c.premultiply(x),h.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),A++}else if(L.isPointLight){const w=r.point[M];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(x),M++}else if(L.isHemisphereLight){const w=r.hemi[b];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(x),b++}}}return{setup:d,setupView:m,state:r}}function ov(o){const e=new nA(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function h(v){r.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function iA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new ov(o),e.set(l,[d])):c>=h.length?(d=new ov(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const aA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sA(o,e,i){let r=new Iv;const l=new Ge,c=new Ge,h=new tn,d=new NM({depthPacking:Xx}),m=new OM,p={},v=i.maxTextureSize,S={[Va]:Gn,[Gn]:Va,[ea]:ea},M=new la({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:aA,fragmentShader:rA}),y=M.clone();y.defines.HORIZONTAL_PASS=1;const A=new ua;A.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new aa(A,M),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hv;let g=this.type;this.render=function(H,P,V){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||H.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(Ha),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const st=g!==ta&&this.type===ta,gt=g===ta&&this.type!==ta;for(let dt=0,O=H.length;dt<O;dt++){const Z=H[dt],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const vt=j.getFrameExtents();if(l.multiply(vt),c.copy(j.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/vt.x),l.x=c.x*vt.x,j.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/vt.y),l.y=c.y*vt.y,j.mapSize.y=c.y)),j.map===null||st===!0||gt===!0){const N=this.type!==ta?{minFilter:yi,magFilter:yi}:{};j.map!==null&&j.map.dispose(),j.map=new yr(l.x,l.y,N),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const Et=j.getViewportCount();for(let N=0;N<Et;N++){const nt=j.getViewport(N);h.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),lt.viewport(h),j.updateMatrices(Z,N),r=j.getFrustum(),w(P,V,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===ta&&B(j,V),j.needsUpdate=!1}g=this.type,x.needsUpdate=!1,o.setRenderTarget(D,C,G)};function B(H,P){const V=e.update(b);M.defines.VSM_SAMPLES!==H.blurSamples&&(M.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,M.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new yr(l.x,l.y)),M.uniforms.shadow_pass.value=H.map.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(P,null,V,M,b,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(P,null,V,y,b,null)}function L(H,P,V,D){let C=null;const G=V.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)C=G;else if(C=V.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const lt=C.uuid,st=P.uuid;let gt=p[lt];gt===void 0&&(gt={},p[lt]=gt);let dt=gt[st];dt===void 0&&(dt=C.clone(),gt[st]=dt,P.addEventListener("dispose",q)),C=dt}if(C.visible=P.visible,C.wireframe=P.wireframe,D===ta?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:S[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,V.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=o.properties.get(C);lt.light=V}return C}function w(H,P,V,D,C){if(H.visible===!1)return;if(H.layers.test(P.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===ta)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,H.matrixWorld);const st=e.update(H),gt=H.material;if(Array.isArray(gt)){const dt=st.groups;for(let O=0,Z=dt.length;O<Z;O++){const j=dt[O],vt=gt[j.materialIndex];if(vt&&vt.visible){const Et=L(H,vt,D,C);H.onBeforeShadow(o,H,P,V,st,Et,j),o.renderBufferDirect(V,null,st,Et,H,j),H.onAfterShadow(o,H,P,V,st,Et,j)}}}else if(gt.visible){const dt=L(H,gt,D,C);H.onBeforeShadow(o,H,P,V,st,dt,null),o.renderBufferDirect(V,null,st,dt,H,null),H.onAfterShadow(o,H,P,V,st,dt,null)}}const lt=H.children;for(let st=0,gt=lt.length;st<gt;st++)w(lt[st],P,V,D,C)}function q(H){H.target.removeEventListener("dispose",q);for(const V in p){const D=p[V],C=H.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const oA={[Rh]:Ch,[wh]:Lh,[Dh]:Nh,[Ms]:Uh,[Ch]:Rh,[Lh]:wh,[Nh]:Dh,[Uh]:Ms};function lA(o,e){function i(){let k=!1;const At=new tn;let ot=null;const _t=new tn(0,0,0,0);return{setMask:function(Rt){ot!==Rt&&!k&&(o.colorMask(Rt,Rt,Rt,Rt),ot=Rt)},setLocked:function(Rt){k=Rt},setClear:function(Rt,wt,$t,qe,ln){ln===!0&&(Rt*=qe,wt*=qe,$t*=qe),At.set(Rt,wt,$t,qe),_t.equals(At)===!1&&(o.clearColor(Rt,wt,$t,qe),_t.copy(At))},reset:function(){k=!1,ot=null,_t.set(-1,0,0,0)}}}function r(){let k=!1,At=!1,ot=null,_t=null,Rt=null;return{setReversed:function(wt){if(At!==wt){const $t=e.get("EXT_clip_control");At?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const qe=Rt;Rt=null,this.setClear(qe)}At=wt},getReversed:function(){return At},setTest:function(wt){wt?St(o.DEPTH_TEST):It(o.DEPTH_TEST)},setMask:function(wt){ot!==wt&&!k&&(o.depthMask(wt),ot=wt)},setFunc:function(wt){if(At&&(wt=oA[wt]),_t!==wt){switch(wt){case Rh:o.depthFunc(o.NEVER);break;case Ch:o.depthFunc(o.ALWAYS);break;case wh:o.depthFunc(o.LESS);break;case Ms:o.depthFunc(o.LEQUAL);break;case Dh:o.depthFunc(o.EQUAL);break;case Uh:o.depthFunc(o.GEQUAL);break;case Lh:o.depthFunc(o.GREATER);break;case Nh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=wt}},setLocked:function(wt){k=wt},setClear:function(wt){Rt!==wt&&(At&&(wt=1-wt),o.clearDepth(wt),Rt=wt)},reset:function(){k=!1,ot=null,_t=null,Rt=null,At=!1}}}function l(){let k=!1,At=null,ot=null,_t=null,Rt=null,wt=null,$t=null,qe=null,ln=null;return{setTest:function(ye){k||(ye?St(o.STENCIL_TEST):It(o.STENCIL_TEST))},setMask:function(ye){At!==ye&&!k&&(o.stencilMask(ye),At=ye)},setFunc:function(ye,gn,fi){(ot!==ye||_t!==gn||Rt!==fi)&&(o.stencilFunc(ye,gn,fi),ot=ye,_t=gn,Rt=fi)},setOp:function(ye,gn,fi){(wt!==ye||$t!==gn||qe!==fi)&&(o.stencilOp(ye,gn,fi),wt=ye,$t=gn,qe=fi)},setLocked:function(ye){k=ye},setClear:function(ye){ln!==ye&&(o.clearStencil(ye),ln=ye)},reset:function(){k=!1,At=null,ot=null,_t=null,Rt=null,wt=null,$t=null,qe=null,ln=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let v={},S={},M=new WeakMap,y=[],A=null,b=!1,x=null,g=null,B=null,L=null,w=null,q=null,H=null,P=new Ce(0,0,0),V=0,D=!1,C=null,G=null,lt=null,st=null,gt=null;const dt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Z=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),O=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),O=Z>=2);let vt=null,Et={};const N=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),xt=new tn().fromArray(N),K=new tn().fromArray(nt);function ct(k,At,ot,_t){const Rt=new Uint8Array(4),wt=o.createTexture();o.bindTexture(k,wt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<ot;$t++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Rt):o.texImage2D(At+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Rt);return wt}const yt={};yt[o.TEXTURE_2D]=ct(o.TEXTURE_2D,o.TEXTURE_2D,1),yt[o.TEXTURE_CUBE_MAP]=ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[o.TEXTURE_2D_ARRAY]=ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),yt[o.TEXTURE_3D]=ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),St(o.DEPTH_TEST),h.setFunc(Ms),ue(!1),de(h_),St(o.CULL_FACE),I(Ha);function St(k){v[k]!==!0&&(o.enable(k),v[k]=!0)}function It(k){v[k]!==!1&&(o.disable(k),v[k]=!1)}function jt(k,At){return S[k]!==At?(o.bindFramebuffer(k,At),S[k]=At,k===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=At),k===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=At),!0):!1}function Zt(k,At){let ot=y,_t=!1;if(k){ot=M.get(At),ot===void 0&&(ot=[],M.set(At,ot));const Rt=k.textures;if(ot.length!==Rt.length||ot[0]!==o.COLOR_ATTACHMENT0){for(let wt=0,$t=Rt.length;wt<$t;wt++)ot[wt]=o.COLOR_ATTACHMENT0+wt;ot.length=Rt.length,_t=!0}}else ot[0]!==o.BACK&&(ot[0]=o.BACK,_t=!0);_t&&o.drawBuffers(ot)}function Ve(k){return A!==k?(o.useProgram(k),A=k,!0):!1}const Ie={[gr]:o.FUNC_ADD,[mx]:o.FUNC_SUBTRACT,[gx]:o.FUNC_REVERSE_SUBTRACT};Ie[_x]=o.MIN,Ie[vx]=o.MAX;const ce={[Sx]:o.ZERO,[xx]:o.ONE,[Mx]:o.SRC_COLOR,[bh]:o.SRC_ALPHA,[Rx]:o.SRC_ALPHA_SATURATE,[bx]:o.DST_COLOR,[Ex]:o.DST_ALPHA,[yx]:o.ONE_MINUS_SRC_COLOR,[Ah]:o.ONE_MINUS_SRC_ALPHA,[Ax]:o.ONE_MINUS_DST_COLOR,[Tx]:o.ONE_MINUS_DST_ALPHA,[Cx]:o.CONSTANT_COLOR,[wx]:o.ONE_MINUS_CONSTANT_COLOR,[Dx]:o.CONSTANT_ALPHA,[Ux]:o.ONE_MINUS_CONSTANT_ALPHA};function I(k,At,ot,_t,Rt,wt,$t,qe,ln,ye){if(k===Ha){b===!0&&(It(o.BLEND),b=!1);return}if(b===!1&&(St(o.BLEND),b=!0),k!==px){if(k!==x||ye!==D){if((g!==gr||w!==gr)&&(o.blendEquation(o.FUNC_ADD),g=gr,w=gr),ye)switch(k){case vs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Th:o.blendFunc(o.ONE,o.ONE);break;case d_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case p_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case vs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Th:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case d_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case p_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}B=null,L=null,q=null,H=null,P.set(0,0,0),V=0,x=k,D=ye}return}Rt=Rt||At,wt=wt||ot,$t=$t||_t,(At!==g||Rt!==w)&&(o.blendEquationSeparate(Ie[At],Ie[Rt]),g=At,w=Rt),(ot!==B||_t!==L||wt!==q||$t!==H)&&(o.blendFuncSeparate(ce[ot],ce[_t],ce[wt],ce[$t]),B=ot,L=_t,q=wt,H=$t),(qe.equals(P)===!1||ln!==V)&&(o.blendColor(qe.r,qe.g,qe.b,ln),P.copy(qe),V=ln),x=k,D=!1}function En(k,At){k.side===ea?It(o.CULL_FACE):St(o.CULL_FACE);let ot=k.side===Gn;At&&(ot=!ot),ue(ot),k.blending===vs&&k.transparent===!1?I(Ha):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const _t=k.stencilWrite;d.setTest(_t),_t&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),we(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?St(o.SAMPLE_ALPHA_TO_COVERAGE):It(o.SAMPLE_ALPHA_TO_COVERAGE)}function ue(k){C!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),C=k)}function de(k){k!==fx?(St(o.CULL_FACE),k!==G&&(k===h_?o.cullFace(o.BACK):k===hx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):It(o.CULL_FACE),G=k}function Xt(k){k!==lt&&(O&&o.lineWidth(k),lt=k)}function we(k,At,ot){k?(St(o.POLYGON_OFFSET_FILL),(st!==At||gt!==ot)&&(o.polygonOffset(At,ot),st=At,gt=ot)):It(o.POLYGON_OFFSET_FILL)}function Vt(k){k?St(o.SCISSOR_TEST):It(o.SCISSOR_TEST)}function U(k){k===void 0&&(k=o.TEXTURE0+dt-1),vt!==k&&(o.activeTexture(k),vt=k)}function T(k,At,ot){ot===void 0&&(vt===null?ot=o.TEXTURE0+dt-1:ot=vt);let _t=Et[ot];_t===void 0&&(_t={type:void 0,texture:void 0},Et[ot]=_t),(_t.type!==k||_t.texture!==At)&&(vt!==ot&&(o.activeTexture(ot),vt=ot),o.bindTexture(k,At||yt[k]),_t.type=k,_t.texture=At)}function tt(){const k=Et[vt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ft(){try{o.compressedTexImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{o.texSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{o.texSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{o.texStorage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{o.texStorage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{o.texImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{o.texImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(k){xt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),xt.copy(k))}function Nt(k){K.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),K.copy(k))}function Jt(k,At){let ot=p.get(At);ot===void 0&&(ot=new WeakMap,p.set(At,ot));let _t=ot.get(k);_t===void 0&&(_t=o.getUniformBlockIndex(At,k.name),ot.set(k,_t))}function ae(k,At){const _t=p.get(At).get(k);m.get(At)!==_t&&(o.uniformBlockBinding(At,_t,k.__bindingPointIndex),m.set(At,_t))}function Le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},vt=null,Et={},S={},M=new WeakMap,y=[],A=null,b=!1,x=null,g=null,B=null,L=null,w=null,q=null,H=null,P=new Ce(0,0,0),V=0,D=!1,C=null,G=null,lt=null,st=null,gt=null,xt.set(0,0,o.canvas.width,o.canvas.height),K.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:St,disable:It,bindFramebuffer:jt,drawBuffers:Zt,useProgram:Ve,setBlending:I,setMaterial:En,setFlipSided:ue,setCullFace:de,setLineWidth:Xt,setPolygonOffset:we,setScissorTest:Vt,activeTexture:U,bindTexture:T,unbindTexture:tt,compressedTexImage2D:ft,compressedTexImage3D:Mt,texImage2D:zt,texImage3D:kt,updateUBOMapping:Jt,uniformBlockBinding:ae,texStorage2D:pe,texStorage3D:bt,texSubImage2D:pt,texSubImage3D:Ht,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Pt,scissor:Gt,viewport:Nt,reset:Le}}function uA(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ge,v=new WeakMap;let S;const M=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,T){return y?new OffscreenCanvas(U,T):Au("canvas")}function b(U,T,tt){let ft=1;const Mt=Vt(U);if((Mt.width>tt||Mt.height>tt)&&(ft=tt/Math.max(Mt.width,Mt.height)),ft<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const pt=Math.floor(ft*Mt.width),Ht=Math.floor(ft*Mt.height);S===void 0&&(S=A(pt,Ht));const Ct=T?A(pt,Ht):S;return Ct.width=pt,Ct.height=Ht,Ct.getContext("2d").drawImage(U,0,0,pt,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+pt+"x"+Ht+")."),Ct}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),U;return U}function x(U){return U.generateMipmaps}function g(U){o.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(U,T,tt,ft,Mt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let pt=T;if(T===o.RED&&(tt===o.FLOAT&&(pt=o.R32F),tt===o.HALF_FLOAT&&(pt=o.R16F),tt===o.UNSIGNED_BYTE&&(pt=o.R8)),T===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(pt=o.R8UI),tt===o.UNSIGNED_SHORT&&(pt=o.R16UI),tt===o.UNSIGNED_INT&&(pt=o.R32UI),tt===o.BYTE&&(pt=o.R8I),tt===o.SHORT&&(pt=o.R16I),tt===o.INT&&(pt=o.R32I)),T===o.RG&&(tt===o.FLOAT&&(pt=o.RG32F),tt===o.HALF_FLOAT&&(pt=o.RG16F),tt===o.UNSIGNED_BYTE&&(pt=o.RG8)),T===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(pt=o.RG8UI),tt===o.UNSIGNED_SHORT&&(pt=o.RG16UI),tt===o.UNSIGNED_INT&&(pt=o.RG32UI),tt===o.BYTE&&(pt=o.RG8I),tt===o.SHORT&&(pt=o.RG16I),tt===o.INT&&(pt=o.RG32I)),T===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),tt===o.UNSIGNED_INT&&(pt=o.RGB32UI),tt===o.BYTE&&(pt=o.RGB8I),tt===o.SHORT&&(pt=o.RGB16I),tt===o.INT&&(pt=o.RGB32I)),T===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),tt===o.UNSIGNED_INT&&(pt=o.RGBA32UI),tt===o.BYTE&&(pt=o.RGBA8I),tt===o.SHORT&&(pt=o.RGBA16I),tt===o.INT&&(pt=o.RGBA32I)),T===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),T===o.RGBA){const Ht=Mt?Tu:Ae.getTransfer(ft);tt===o.FLOAT&&(pt=o.RGBA32F),tt===o.HALF_FLOAT&&(pt=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(pt=Ht===Be?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function w(U,T){let tt;return U?T===null||T===Mr||T===Ts?tt=o.DEPTH24_STENCIL8:T===na?tt=o.DEPTH32F_STENCIL8:T===Uo&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Mr||T===Ts?tt=o.DEPTH_COMPONENT24:T===na?tt=o.DEPTH_COMPONENT32F:T===Uo&&(tt=o.DEPTH_COMPONENT16),tt}function q(U,T){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==yi&&U.minFilter!==Di?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function H(U){const T=U.target;T.removeEventListener("dispose",H),V(T),T.isVideoTexture&&v.delete(T)}function P(U){const T=U.target;T.removeEventListener("dispose",P),C(T)}function V(U){const T=r.get(U);if(T.__webglInit===void 0)return;const tt=U.source,ft=M.get(tt);if(ft){const Mt=ft[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&D(U),Object.keys(ft).length===0&&M.delete(tt)}r.remove(U)}function D(U){const T=r.get(U);o.deleteTexture(T.__webglTexture);const tt=U.source,ft=M.get(tt);delete ft[T.__cacheKey],h.memory.textures--}function C(U){const T=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(T.__webglFramebuffer[ft]))for(let Mt=0;Mt<T.__webglFramebuffer[ft].length;Mt++)o.deleteFramebuffer(T.__webglFramebuffer[ft][Mt]);else o.deleteFramebuffer(T.__webglFramebuffer[ft]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ft])}else{if(Array.isArray(T.__webglFramebuffer))for(let ft=0;ft<T.__webglFramebuffer.length;ft++)o.deleteFramebuffer(T.__webglFramebuffer[ft]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ft=0;ft<T.__webglColorRenderbuffer.length;ft++)T.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ft]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=U.textures;for(let ft=0,Mt=tt.length;ft<Mt;ft++){const pt=r.get(tt[ft]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),h.memory.textures--),r.remove(tt[ft])}r.remove(U)}let G=0;function lt(){G=0}function st(){const U=G;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),G+=1,U}function gt(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function dt(U,T){const tt=r.get(U);if(U.isVideoTexture&&Xt(U),U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){const ft=U.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(tt,U,T);return}}i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+T)}function O(U,T){const tt=r.get(U);if(U.version>0&&tt.__version!==U.version){K(tt,U,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+T)}function Z(U,T){const tt=r.get(U);if(U.version>0&&tt.__version!==U.version){K(tt,U,T);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+T)}function j(U,T){const tt=r.get(U);if(U.version>0&&tt.__version!==U.version){ct(tt,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+T)}const vt={[zh]:o.REPEAT,[vr]:o.CLAMP_TO_EDGE,[Bh]:o.MIRRORED_REPEAT},Et={[yi]:o.NEAREST,[Gx]:o.NEAREST_MIPMAP_NEAREST,[jl]:o.NEAREST_MIPMAP_LINEAR,[Di]:o.LINEAR,[kf]:o.LINEAR_MIPMAP_NEAREST,[Sr]:o.LINEAR_MIPMAP_LINEAR},N={[qx]:o.NEVER,[Jx]:o.ALWAYS,[Yx]:o.LESS,[bv]:o.LEQUAL,[jx]:o.EQUAL,[Qx]:o.GEQUAL,[Zx]:o.GREATER,[Kx]:o.NOTEQUAL};function nt(U,T){if(T.type===na&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Di||T.magFilter===kf||T.magFilter===jl||T.magFilter===Sr||T.minFilter===Di||T.minFilter===kf||T.minFilter===jl||T.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,vt[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,vt[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,vt[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Et[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Et[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===yi||T.minFilter!==jl&&T.minFilter!==Sr||T.type===na&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function xt(U,T){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",H));const ft=T.source;let Mt=M.get(ft);Mt===void 0&&(Mt={},M.set(ft,Mt));const pt=gt(T);if(pt!==U.__cacheKey){Mt[pt]===void 0&&(Mt[pt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),Mt[pt].usedTimes++;const Ht=Mt[U.__cacheKey];Ht!==void 0&&(Mt[U.__cacheKey].usedTimes--,Ht.usedTimes===0&&D(T)),U.__cacheKey=pt,U.__webglTexture=Mt[pt].texture}return tt}function K(U,T,tt){let ft=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=o.TEXTURE_3D);const Mt=xt(U,T),pt=T.source;i.bindTexture(ft,U.__webglTexture,o.TEXTURE0+tt);const Ht=r.get(pt);if(pt.version!==Ht.__version||Mt===!0){i.activeTexture(o.TEXTURE0+tt);const Ct=Ae.getPrimaries(Ae.workingColorSpace),Pt=T.colorSpace===Fa?null:Ae.getPrimaries(T.colorSpace),pe=T.colorSpace===Fa||Ct===Pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let bt=b(T.image,!1,l.maxTextureSize);bt=we(T,bt);const zt=c.convert(T.format,T.colorSpace),kt=c.convert(T.type);let Gt=L(T.internalFormat,zt,kt,T.colorSpace,T.isVideoTexture);nt(ft,T);let Nt;const Jt=T.mipmaps,ae=T.isVideoTexture!==!0,Le=Ht.__version===void 0||Mt===!0,k=pt.dataReady,At=q(T,bt);if(T.isDepthTexture)Gt=w(T.format===bs,T.type),Le&&(ae?i.texStorage2D(o.TEXTURE_2D,1,Gt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Gt,bt.width,bt.height,0,zt,kt,null));else if(T.isDataTexture)if(Jt.length>0){ae&&Le&&i.texStorage2D(o.TEXTURE_2D,At,Gt,Jt[0].width,Jt[0].height);for(let ot=0,_t=Jt.length;ot<_t;ot++)Nt=Jt[ot],ae?k&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Nt.width,Nt.height,zt,kt,Nt.data):i.texImage2D(o.TEXTURE_2D,ot,Gt,Nt.width,Nt.height,0,zt,kt,Nt.data);T.generateMipmaps=!1}else ae?(Le&&i.texStorage2D(o.TEXTURE_2D,At,Gt,bt.width,bt.height),k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt.width,bt.height,zt,kt,bt.data)):i.texImage2D(o.TEXTURE_2D,0,Gt,bt.width,bt.height,0,zt,kt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ae&&Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,At,Gt,Jt[0].width,Jt[0].height,bt.depth);for(let ot=0,_t=Jt.length;ot<_t;ot++)if(Nt=Jt[ot],T.format!==Mi)if(zt!==null)if(ae){if(k)if(T.layerUpdates.size>0){const Rt=B_(Nt.width,Nt.height,T.format,T.type);for(const wt of T.layerUpdates){const $t=Nt.data.subarray(wt*Rt/Nt.data.BYTES_PER_ELEMENT,(wt+1)*Rt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,wt,Nt.width,Nt.height,1,zt,$t)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Nt.width,Nt.height,bt.depth,zt,Nt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ot,Gt,Nt.width,Nt.height,bt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Nt.width,Nt.height,bt.depth,zt,kt,Nt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ot,Gt,Nt.width,Nt.height,bt.depth,0,zt,kt,Nt.data)}else{ae&&Le&&i.texStorage2D(o.TEXTURE_2D,At,Gt,Jt[0].width,Jt[0].height);for(let ot=0,_t=Jt.length;ot<_t;ot++)Nt=Jt[ot],T.format!==Mi?zt!==null?ae?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,ot,0,0,Nt.width,Nt.height,zt,Nt.data):i.compressedTexImage2D(o.TEXTURE_2D,ot,Gt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?k&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Nt.width,Nt.height,zt,kt,Nt.data):i.texImage2D(o.TEXTURE_2D,ot,Gt,Nt.width,Nt.height,0,zt,kt,Nt.data)}else if(T.isDataArrayTexture)if(ae){if(Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,At,Gt,bt.width,bt.height,bt.depth),k)if(T.layerUpdates.size>0){const ot=B_(bt.width,bt.height,T.format,T.type);for(const _t of T.layerUpdates){const Rt=bt.data.subarray(_t*ot/bt.data.BYTES_PER_ELEMENT,(_t+1)*ot/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,bt.width,bt.height,1,zt,kt,Rt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,zt,kt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,bt.width,bt.height,bt.depth,0,zt,kt,bt.data);else if(T.isData3DTexture)ae?(Le&&i.texStorage3D(o.TEXTURE_3D,At,Gt,bt.width,bt.height,bt.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,zt,kt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,bt.width,bt.height,bt.depth,0,zt,kt,bt.data);else if(T.isFramebufferTexture){if(Le)if(ae)i.texStorage2D(o.TEXTURE_2D,At,Gt,bt.width,bt.height);else{let ot=bt.width,_t=bt.height;for(let Rt=0;Rt<At;Rt++)i.texImage2D(o.TEXTURE_2D,Rt,Gt,ot,_t,0,zt,kt,null),ot>>=1,_t>>=1}}else if(Jt.length>0){if(ae&&Le){const ot=Vt(Jt[0]);i.texStorage2D(o.TEXTURE_2D,At,Gt,ot.width,ot.height)}for(let ot=0,_t=Jt.length;ot<_t;ot++)Nt=Jt[ot],ae?k&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,zt,kt,Nt):i.texImage2D(o.TEXTURE_2D,ot,Gt,zt,kt,Nt);T.generateMipmaps=!1}else if(ae){if(Le){const ot=Vt(bt);i.texStorage2D(o.TEXTURE_2D,At,Gt,ot.width,ot.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,kt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Gt,zt,kt,bt);x(T)&&g(ft),Ht.__version=pt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ct(U,T,tt){if(T.image.length!==6)return;const ft=xt(U,T),Mt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+tt);const pt=r.get(Mt);if(Mt.version!==pt.__version||ft===!0){i.activeTexture(o.TEXTURE0+tt);const Ht=Ae.getPrimaries(Ae.workingColorSpace),Ct=T.colorSpace===Fa?null:Ae.getPrimaries(T.colorSpace),Pt=T.colorSpace===Fa||Ht===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const pe=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,zt=[];for(let _t=0;_t<6;_t++)!pe&&!bt?zt[_t]=b(T.image[_t],!0,l.maxCubemapSize):zt[_t]=bt?T.image[_t].image:T.image[_t],zt[_t]=we(T,zt[_t]);const kt=zt[0],Gt=c.convert(T.format,T.colorSpace),Nt=c.convert(T.type),Jt=L(T.internalFormat,Gt,Nt,T.colorSpace),ae=T.isVideoTexture!==!0,Le=pt.__version===void 0||ft===!0,k=Mt.dataReady;let At=q(T,kt);nt(o.TEXTURE_CUBE_MAP,T);let ot;if(pe){ae&&Le&&i.texStorage2D(o.TEXTURE_CUBE_MAP,At,Jt,kt.width,kt.height);for(let _t=0;_t<6;_t++){ot=zt[_t].mipmaps;for(let Rt=0;Rt<ot.length;Rt++){const wt=ot[Rt];T.format!==Mi?Gt!==null?ae?k&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,0,0,wt.width,wt.height,Gt,wt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,Jt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,0,0,wt.width,wt.height,Gt,Nt,wt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,Jt,wt.width,wt.height,0,Gt,Nt,wt.data)}}}else{if(ot=T.mipmaps,ae&&Le){ot.length>0&&At++;const _t=Vt(zt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,At,Jt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(bt){ae?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,zt[_t].width,zt[_t].height,Gt,Nt,zt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Jt,zt[_t].width,zt[_t].height,0,Gt,Nt,zt[_t].data);for(let Rt=0;Rt<ot.length;Rt++){const $t=ot[Rt].image[_t].image;ae?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,0,0,$t.width,$t.height,Gt,Nt,$t.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,Jt,$t.width,$t.height,0,Gt,Nt,$t.data)}}else{ae?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Gt,Nt,zt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Jt,Gt,Nt,zt[_t]);for(let Rt=0;Rt<ot.length;Rt++){const wt=ot[Rt];ae?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,0,0,Gt,Nt,wt.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,Jt,Gt,Nt,wt.image[_t])}}}x(T)&&g(o.TEXTURE_CUBE_MAP),pt.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function yt(U,T,tt,ft,Mt,pt){const Ht=c.convert(tt.format,tt.colorSpace),Ct=c.convert(tt.type),Pt=L(tt.internalFormat,Ht,Ct,tt.colorSpace),pe=r.get(T),bt=r.get(tt);if(bt.__renderTarget=T,!pe.__hasExternalTextures){const zt=Math.max(1,T.width>>pt),kt=Math.max(1,T.height>>pt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,pt,Pt,zt,kt,T.depth,0,Ht,Ct,null):i.texImage2D(Mt,pt,Pt,zt,kt,0,Ht,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),de(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,Mt,bt.__webglTexture,0,ue(T)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,Mt,bt.__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function St(U,T,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const ft=T.depthTexture,Mt=ft&&ft.isDepthTexture?ft.type:null,pt=w(T.stencilBuffer,Mt),Ht=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=ue(T);de(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,pt,T.width,T.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,pt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,pt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ht,o.RENDERBUFFER,U)}else{const ft=T.textures;for(let Mt=0;Mt<ft.length;Mt++){const pt=ft[Mt],Ht=c.convert(pt.format,pt.colorSpace),Ct=c.convert(pt.type),Pt=L(pt.internalFormat,Ht,Ct,pt.colorSpace),pe=ue(T);tt&&de(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,Pt,T.width,T.height):de(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pe,Pt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Pt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function It(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(T.depthTexture);ft.__renderTarget=T,(!ft.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),dt(T.depthTexture,0);const Mt=ft.__webglTexture,pt=ue(T);if(T.depthTexture.format===Ss)de(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===bs)de(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function jt(U){const T=r.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const ft=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",Mt)};ft.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=ft}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");It(T.__webglFramebuffer,U)}else if(tt){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=o.createRenderbuffer(),St(T.__webglDepthbuffer[ft],U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,pt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),St(T.__webglDepthbuffer,U,!1);else{const ft=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ft,o.RENDERBUFFER,Mt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(U,T,tt){const ft=r.get(U);T!==void 0&&yt(ft.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&jt(U)}function Ve(U){const T=U.texture,tt=r.get(U),ft=r.get(T);U.addEventListener("dispose",P);const Mt=U.textures,pt=U.isWebGLCubeRenderTarget===!0,Ht=Mt.length>1;if(Ht||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=T.version,h.memory.textures++),pt){tt.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Ct]=[];for(let Pt=0;Pt<T.mipmaps.length;Pt++)tt.__webglFramebuffer[Ct][Pt]=o.createFramebuffer()}else tt.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)tt.__webglFramebuffer[Ct]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Ht)for(let Ct=0,Pt=Mt.length;Ct<Pt;Ct++){const pe=r.get(Mt[Ct]);pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&de(U)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Ct=0;Ct<Mt.length;Ct++){const Pt=Mt[Ct];tt.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ct]);const pe=c.convert(Pt.format,Pt.colorSpace),bt=c.convert(Pt.type),zt=L(Pt.internalFormat,pe,bt,Pt.colorSpace,U.isXRRenderTarget===!0),kt=ue(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,kt,zt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),St(tt.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),nt(o.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)yt(tt.__webglFramebuffer[Ct][Pt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Pt);else yt(tt.__webglFramebuffer[Ct],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);x(T)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let Ct=0,Pt=Mt.length;Ct<Pt;Ct++){const pe=Mt[Ct],bt=r.get(pe);i.bindTexture(o.TEXTURE_2D,bt.__webglTexture),nt(o.TEXTURE_2D,pe),yt(tt.__webglFramebuffer,U,pe,o.COLOR_ATTACHMENT0+Ct,o.TEXTURE_2D,0),x(pe)&&g(o.TEXTURE_2D)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,ft.__webglTexture),nt(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)yt(tt.__webglFramebuffer[Pt],U,T,o.COLOR_ATTACHMENT0,Ct,Pt);else yt(tt.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,Ct,0);x(T)&&g(Ct),i.unbindTexture()}U.depthBuffer&&jt(U)}function Ie(U){const T=U.textures;for(let tt=0,ft=T.length;tt<ft;tt++){const Mt=T[tt];if(x(Mt)){const pt=B(U),Ht=r.get(Mt).__webglTexture;i.bindTexture(pt,Ht),g(pt),i.unbindTexture()}}}const ce=[],I=[];function En(U){if(U.samples>0){if(de(U)===!1){const T=U.textures,tt=U.width,ft=U.height;let Mt=o.COLOR_BUFFER_BIT;const pt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=r.get(U),Ct=T.length>1;if(Ct)for(let Pt=0;Pt<T.length;Pt++)i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Pt=0;Pt<T.length;Pt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[Pt]);const pe=r.get(T[Pt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pe,0)}o.blitFramebuffer(0,0,tt,ft,0,0,tt,ft,Mt,o.NEAREST),m===!0&&(ce.length=0,I.length=0,ce.push(o.COLOR_ATTACHMENT0+Pt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ce.push(pt),I.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,I)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ce))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let Pt=0;Pt<T.length;Pt++){i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[Pt]);const pe=r.get(T[Pt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,pe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ue(U){return Math.min(l.maxSamples,U.samples)}function de(U){const T=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xt(U){const T=h.render.frame;v.get(U)!==T&&(v.set(U,T),U.update())}function we(U,T){const tt=U.colorSpace,ft=U.format,Mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==As&&tt!==Fa&&(Ae.getTransfer(tt)===Be?(ft!==Mi||Mt!==sa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function Vt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=lt,this.setTexture2D=dt,this.setTexture2DArray=O,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=Zt,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=En,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=de}function cA(o,e){function i(r,l=Fa){let c;const h=Ae.getTransfer(l);if(r===sa)return o.UNSIGNED_BYTE;if(r===gd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===_d)return o.UNSIGNED_SHORT_5_5_5_1;if(r===_v)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===mv)return o.BYTE;if(r===gv)return o.SHORT;if(r===Uo)return o.UNSIGNED_SHORT;if(r===md)return o.INT;if(r===Mr)return o.UNSIGNED_INT;if(r===na)return o.FLOAT;if(r===Lo)return o.HALF_FLOAT;if(r===vv)return o.ALPHA;if(r===Sv)return o.RGB;if(r===Mi)return o.RGBA;if(r===xv)return o.LUMINANCE;if(r===Mv)return o.LUMINANCE_ALPHA;if(r===Ss)return o.DEPTH_COMPONENT;if(r===bs)return o.DEPTH_STENCIL;if(r===yv)return o.RED;if(r===vd)return o.RED_INTEGER;if(r===Ev)return o.RG;if(r===Sd)return o.RG_INTEGER;if(r===xd)return o.RGBA_INTEGER;if(r===vu||r===Su||r===xu||r===Mu)if(h===Be)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===vu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===vu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Su)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ih||r===Fh||r===Hh||r===Gh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ih)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Fh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vh||r===Xh||r===kh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Vh||r===Xh)return h===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===kh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wh||r===qh||r===Yh||r===jh||r===Zh||r===Kh||r===Qh||r===Jh||r===$h||r===td||r===ed||r===nd||r===id||r===ad)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Wh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$h)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===td)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ed)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===id)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ad)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yu||r===rd||r===sd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===yu)return h===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Tv||r===od||r===ld||r===ud)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===yu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===od)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ld)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ud)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ts?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const fA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Vn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new la({vertexShader:fA,fragmentShader:hA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new aa(new wu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pA extends Cs{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,S=null,M=null,y=null,A=null;const b=new dA,x=i.getContextAttributes();let g=null,B=null;const L=[],w=[],q=new Ge;let H=null;const P=new ui;P.viewport=new tn;const V=new ui;V.viewport=new tn;const D=[P,V],C=new zM;let G=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ct=L[K];return ct===void 0&&(ct=new hh,L[K]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(K){let ct=L[K];return ct===void 0&&(ct=new hh,L[K]=ct),ct.getGripSpace()},this.getHand=function(K){let ct=L[K];return ct===void 0&&(ct=new hh,L[K]=ct),ct.getHandSpace()};function st(K){const ct=w.indexOf(K.inputSource);if(ct===-1)return;const yt=L[ct];yt!==void 0&&(yt.update(K.inputSource,K.frame,p||h),yt.dispatchEvent({type:K.type,data:K.inputSource}))}function gt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",dt);for(let K=0;K<L.length;K++){const ct=w[K];ct!==null&&(w[K]=null,L[K].disconnect(ct))}G=null,lt=null,b.reset(),e.setRenderTarget(g),y=null,M=null,S=null,l=null,B=null,xt.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return M!==null?M:y},this.getBinding=function(){return S},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(g=e.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",dt),x.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(q),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,St=null,It=null;x.depth&&(It=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=x.stencil?bs:Ss,St=x.stencil?Ts:Mr);const jt={colorFormat:i.RGBA8,depthFormat:It,scaleFactor:c};S=new XRWebGLBinding(l,i),M=S.createProjectionLayer(jt),l.updateRenderState({layers:[M]}),e.setPixelRatio(1),e.setSize(M.textureWidth,M.textureHeight,!1),B=new yr(M.textureWidth,M.textureHeight,{format:Mi,type:sa,depthTexture:new Fv(M.textureWidth,M.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:M.ignoreDepthValues===!1})}else{const yt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),B=new yr(y.framebufferWidth,y.framebufferHeight,{format:Mi,type:sa,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),xt.setContext(l),xt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function dt(K){for(let ct=0;ct<K.removed.length;ct++){const yt=K.removed[ct],St=w.indexOf(yt);St>=0&&(w[St]=null,L[St].disconnect(yt))}for(let ct=0;ct<K.added.length;ct++){const yt=K.added[ct];let St=w.indexOf(yt);if(St===-1){for(let jt=0;jt<L.length;jt++)if(jt>=w.length){w.push(yt),St=jt;break}else if(w[jt]===null){w[jt]=yt,St=jt;break}if(St===-1)break}const It=L[St];It&&It.connect(yt)}}const O=new rt,Z=new rt;function j(K,ct,yt){O.setFromMatrixPosition(ct.matrixWorld),Z.setFromMatrixPosition(yt.matrixWorld);const St=O.distanceTo(Z),It=ct.projectionMatrix.elements,jt=yt.projectionMatrix.elements,Zt=It[14]/(It[10]-1),Ve=It[14]/(It[10]+1),Ie=(It[9]+1)/It[5],ce=(It[9]-1)/It[5],I=(It[8]-1)/It[0],En=(jt[8]+1)/jt[0],ue=Zt*I,de=Zt*En,Xt=St/(-I+En),we=Xt*-I;if(ct.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(we),K.translateZ(Xt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),It[10]===-1)K.projectionMatrix.copy(ct.projectionMatrix),K.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Vt=Zt+Xt,U=Ve+Xt,T=ue-we,tt=de+(St-we),ft=Ie*Ve/U*Vt,Mt=ce*Ve/U*Vt;K.projectionMatrix.makePerspective(T,tt,ft,Mt,Vt,U),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function vt(K,ct){ct===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ct.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let ct=K.near,yt=K.far;b.texture!==null&&(b.depthNear>0&&(ct=b.depthNear),b.depthFar>0&&(yt=b.depthFar)),C.near=V.near=P.near=ct,C.far=V.far=P.far=yt,(G!==C.near||lt!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,lt=C.far),P.layers.mask=K.layers.mask|2,V.layers.mask=K.layers.mask|4,C.layers.mask=P.layers.mask|V.layers.mask;const St=K.parent,It=C.cameras;vt(C,St);for(let jt=0;jt<It.length;jt++)vt(It[jt],St);It.length===2?j(C,P,V):C.projectionMatrix.copy(P.projectionMatrix),Et(K,C,St)};function Et(K,ct,yt){yt===null?K.matrix.copy(ct.matrixWorld):(K.matrix.copy(yt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ct.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ct.projectionMatrix),K.projectionMatrixInverse.copy(ct.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=cd*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(M===null&&y===null))return m},this.setFoveation=function(K){m=K,M!==null&&(M.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(C)};let N=null;function nt(K,ct){if(v=ct.getViewerPose(p||h),A=ct,v!==null){const yt=v.views;y!==null&&(e.setRenderTargetFramebuffer(B,y.framebuffer),e.setRenderTarget(B));let St=!1;yt.length!==C.cameras.length&&(C.cameras.length=0,St=!0);for(let Zt=0;Zt<yt.length;Zt++){const Ve=yt[Zt];let Ie=null;if(y!==null)Ie=y.getViewport(Ve);else{const I=S.getViewSubImage(M,Ve);Ie=I.viewport,Zt===0&&(e.setRenderTargetTextures(B,I.colorTexture,M.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(B))}let ce=D[Zt];ce===void 0&&(ce=new ui,ce.layers.enable(Zt),ce.viewport=new tn,D[Zt]=ce),ce.matrix.fromArray(Ve.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Ve.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Zt===0&&(C.matrix.copy(ce.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),St===!0&&C.cameras.push(ce)}const It=l.enabledFeatures;if(It&&It.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&S){const Zt=S.getDepthInformation(yt[0]);Zt&&Zt.isValid&&Zt.texture&&b.init(e,Zt,l.renderState)}}for(let yt=0;yt<L.length;yt++){const St=w[yt],It=L[yt];St!==null&&It!==void 0&&It.update(St,ct,p||h)}N&&N(K,ct),ct.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ct}),A=null}const xt=new Hv;xt.setAnimationLoop(nt),this.setAnimationLoop=function(K){N=K},this.dispose=function(){}}}const dr=new oa,mA=new en;function gA(o,e){function i(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function r(x,g){g.color.getRGB(x.fogColor.value,Pv(o)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function l(x,g,B,L,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(x,g):g.isMeshToonMaterial?(c(x,g),S(x,g)):g.isMeshPhongMaterial?(c(x,g),v(x,g)):g.isMeshStandardMaterial?(c(x,g),M(x,g),g.isMeshPhysicalMaterial&&y(x,g,w)):g.isMeshMatcapMaterial?(c(x,g),A(x,g)):g.isMeshDepthMaterial?c(x,g):g.isMeshDistanceMaterial?(c(x,g),b(x,g)):g.isMeshNormalMaterial?c(x,g):g.isLineBasicMaterial?(h(x,g),g.isLineDashedMaterial&&d(x,g)):g.isPointsMaterial?m(x,g,B,L):g.isSpriteMaterial?p(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,i(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,i(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Gn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,i(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Gn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,i(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,i(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const B=e.get(g),L=B.envMap,w=B.envMapRotation;L&&(x.envMap.value=L,dr.copy(w),dr.x*=-1,dr.y*=-1,dr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),x.envMapRotation.value.setFromMatrix4(mA.makeRotationFromEuler(dr)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,x.aoMapTransform))}function h(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,i(g.map,x.mapTransform))}function d(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function m(x,g,B,L){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*B,x.scale.value=L*.5,g.map&&(x.map.value=g.map,i(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function p(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,i(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function v(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function S(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function M(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function y(x,g,B){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Gn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=B.texture,x.transmissionSamplerSize.value.set(B.width,B.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,x.specularIntensityMapTransform))}function A(x,g){g.matcap&&(x.matcap.value=g.matcap)}function b(x,g){const B=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(B.matrixWorld),x.nearDistance.value=B.shadow.camera.near,x.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function _A(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,L){const w=L.program;r.uniformBlockBinding(B,w)}function p(B,L){let w=l[B.id];w===void 0&&(A(B),w=v(B),l[B.id]=w,B.addEventListener("dispose",x));const q=L.program;r.updateUBOMapping(B,q);const H=e.render.frame;c[B.id]!==H&&(M(B),c[B.id]=H)}function v(B){const L=S();B.__bindingPointIndex=L;const w=o.createBuffer(),q=B.__size,H=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,q,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,w),w}function S(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function M(B){const L=l[B.id],w=B.uniforms,q=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let H=0,P=w.length;H<P;H++){const V=Array.isArray(w[H])?w[H]:[w[H]];for(let D=0,C=V.length;D<C;D++){const G=V[D];if(y(G,H,D,q)===!0){const lt=G.__offset,st=Array.isArray(G.value)?G.value:[G.value];let gt=0;for(let dt=0;dt<st.length;dt++){const O=st[dt],Z=b(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,lt+gt,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,gt),gt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(B,L,w,q){const H=B.value,P=L+"_"+w;if(q[P]===void 0)return typeof H=="number"||typeof H=="boolean"?q[P]=H:q[P]=H.clone(),!0;{const V=q[P];if(typeof H=="number"||typeof H=="boolean"){if(V!==H)return q[P]=H,!0}else if(V.equals(H)===!1)return V.copy(H),!0}return!1}function A(B){const L=B.uniforms;let w=0;const q=16;for(let P=0,V=L.length;P<V;P++){const D=Array.isArray(L[P])?L[P]:[L[P]];for(let C=0,G=D.length;C<G;C++){const lt=D[C],st=Array.isArray(lt.value)?lt.value:[lt.value];for(let gt=0,dt=st.length;gt<dt;gt++){const O=st[gt],Z=b(O),j=w%q,vt=j%Z.boundary,Et=j+vt;w+=vt,Et!==0&&q-Et<Z.storage&&(w+=q-Et),lt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=w,w+=Z.storage}}}const H=w%q;return H>0&&(w+=q-H),B.__size=w,B.__cache={},this}function b(B){const L={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(L.boundary=4,L.storage=4):B.isVector2?(L.boundary=8,L.storage=8):B.isVector3||B.isColor?(L.boundary=16,L.storage=12):B.isVector4?(L.boundary=16,L.storage=16):B.isMatrix3?(L.boundary=48,L.storage=48):B.isMatrix4?(L.boundary=64,L.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),L}function x(B){const L=B.target;L.removeEventListener("dispose",x);const w=h.indexOf(L.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function g(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},c={}}return{bind:m,update:p,dispose:g}}class vA{constructor(e={}){const{canvas:i=tM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reverseDepthBuffer:M=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const A=new Uint32Array(4),b=new Int32Array(4);let x=null,g=null;const B=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=li,this.toneMapping=Ga,this.toneMappingExposure=1;const w=this;let q=!1,H=0,P=0,V=null,D=-1,C=null;const G=new tn,lt=new tn;let st=null;const gt=new Ce(0);let dt=0,O=i.width,Z=i.height,j=1,vt=null,Et=null;const N=new tn(0,0,O,Z),nt=new tn(0,0,O,Z);let xt=!1;const K=new Iv;let ct=!1,yt=!1;this.transmissionResolutionScale=1;const St=new en,It=new en,jt=new rt,Zt=new tn,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function ce(){return V===null?j:1}let I=r;function En(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${pd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Rt,!1),i.addEventListener("webglcontextcreationerror",wt,!1),I===null){const W="webgl2";if(I=En(W,R),I===null)throw En(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ue,de,Xt,we,Vt,U,T,tt,ft,Mt,pt,Ht,Ct,Pt,pe,bt,zt,kt,Gt,Nt,Jt,ae,Le,k;function At(){ue=new CT(I),ue.init(),ae=new cA(I,ue),de=new yT(I,ue,e,ae),Xt=new lA(I,ue),de.reverseDepthBuffer&&M&&Xt.buffers.depth.setReversed(!0),we=new UT(I),Vt=new Zb,U=new uA(I,ue,Xt,Vt,de,ae,we),T=new TT(w),tt=new RT(w),ft=new IM(I),Le=new xT(I,ft),Mt=new wT(I,ft,we,Le),pt=new NT(I,Mt,ft,we),Gt=new LT(I,de,U),bt=new ET(Vt),Ht=new jb(w,T,tt,ue,de,Le,bt),Ct=new gA(w,Vt),Pt=new Qb,pe=new iA(ue),kt=new ST(w,T,tt,Xt,pt,y,m),zt=new sA(w,pt,de),k=new _A(I,we,de,Xt),Nt=new MT(I,ue,we),Jt=new DT(I,ue,we),we.programs=Ht.programs,w.capabilities=de,w.extensions=ue,w.properties=Vt,w.renderLists=Pt,w.shadowMap=zt,w.state=Xt,w.info=we}At();const ot=new pA(w,I);this.xr=ot,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(O,Z,!1))},this.getSize=function(R){return R.set(O,Z)},this.setSize=function(R,W,et=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,Z=W,i.width=Math.floor(R*j),i.height=Math.floor(W*j),et===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(O*j,Z*j).floor()},this.setDrawingBufferSize=function(R,W,et){O=R,Z=W,j=et,i.width=Math.floor(R*et),i.height=Math.floor(W*et),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,W,et,it){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,W,et,it),Xt.viewport(G.copy(N).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(nt)},this.setScissor=function(R,W,et,it){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,W,et,it),Xt.scissor(lt.copy(nt).multiplyScalar(j).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(R){Xt.setScissorTest(xt=R)},this.setOpaqueSort=function(R){vt=R},this.setTransparentSort=function(R){Et=R},this.getClearColor=function(R){return R.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(R=!0,W=!0,et=!0){let it=0;if(R){let X=!1;if(V!==null){const Tt=V.texture.format;X=Tt===xd||Tt===Sd||Tt===vd}if(X){const Tt=V.texture.type,Dt=Tt===sa||Tt===Mr||Tt===Uo||Tt===Ts||Tt===gd||Tt===_d,Lt=kt.getClearColor(),Ot=kt.getClearAlpha(),te=Lt.r,ee=Lt.g,Wt=Lt.b;Dt?(A[0]=te,A[1]=ee,A[2]=Wt,A[3]=Ot,I.clearBufferuiv(I.COLOR,0,A)):(b[0]=te,b[1]=ee,b[2]=Wt,b[3]=Ot,I.clearBufferiv(I.COLOR,0,b))}else it|=I.COLOR_BUFFER_BIT}W&&(it|=I.DEPTH_BUFFER_BIT),et&&(it|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Rt,!1),i.removeEventListener("webglcontextcreationerror",wt,!1),kt.dispose(),Pt.dispose(),pe.dispose(),Vt.dispose(),T.dispose(),tt.dispose(),pt.dispose(),Le.dispose(),k.dispose(),Ht.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Ds),ot.removeEventListener("sessionend",Us),Ei.stop()};function _t(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const R=we.autoReset,W=zt.enabled,et=zt.autoUpdate,it=zt.needsUpdate,X=zt.type;At(),we.autoReset=R,zt.enabled=W,zt.autoUpdate=et,zt.needsUpdate=it,zt.type=X}function wt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function $t(R){const W=R.target;W.removeEventListener("dispose",$t),qe(W)}function qe(R){ln(R),Vt.remove(R)}function ln(R){const W=Vt.get(R).programs;W!==void 0&&(W.forEach(function(et){Ht.releaseProgram(et)}),R.isShaderMaterial&&Ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,et,it,X,Tt){W===null&&(W=Ve);const Dt=X.isMesh&&X.matrixWorld.determinant()<0,Lt=Ns(R,W,et,it,X);Xt.setMaterial(it,Dt);let Ot=et.index,te=1;if(it.wireframe===!0){if(Ot=Mt.getWireframeAttribute(et),Ot===void 0)return;te=2}const ee=et.drawRange,Wt=et.attributes.position;let _e=ee.start*te,ve=(ee.start+ee.count)*te;Tt!==null&&(_e=Math.max(_e,Tt.start*te),ve=Math.min(ve,(Tt.start+Tt.count)*te)),Ot!==null?(_e=Math.max(_e,0),ve=Math.min(ve,Ot.count)):Wt!=null&&(_e=Math.max(_e,0),ve=Math.min(ve,Wt.count));const Xe=ve-_e;if(Xe<0||Xe===1/0)return;Le.setup(X,it,Lt,et,Ot);let Ee,ne=Nt;if(Ot!==null&&(Ee=ft.get(Ot),ne=Jt,ne.setIndex(Ee)),X.isMesh)it.wireframe===!0?(Xt.setLineWidth(it.wireframeLinewidth*ce()),ne.setMode(I.LINES)):ne.setMode(I.TRIANGLES);else if(X.isLine){let Yt=it.linewidth;Yt===void 0&&(Yt=1),Xt.setLineWidth(Yt*ce()),X.isLineSegments?ne.setMode(I.LINES):X.isLineLoop?ne.setMode(I.LINE_LOOP):ne.setMode(I.LINE_STRIP)}else X.isPoints?ne.setMode(I.POINTS):X.isSprite&&ne.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ne.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))ne.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Yt=X._multiDrawStarts,un=X._multiDrawCounts,Me=X._multiDrawCount,Ln=Ot?ft.get(Ot).bytesPerElement:1,di=Vt.get(it).currentProgram.getUniforms();for(let Cn=0;Cn<Me;Cn++)di.setValue(I,"_gl_DrawID",Cn),ne.render(Yt[Cn]/Ln,un[Cn])}else if(X.isInstancedMesh)ne.renderInstances(_e,Xe,X.count);else if(et.isInstancedBufferGeometry){const Yt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,un=Math.min(et.instanceCount,Yt);ne.renderInstances(_e,Xe,un)}else ne.render(_e,Xe)};function ye(R,W,et){R.transparent===!0&&R.side===ea&&R.forceSinglePass===!1?(R.side=Gn,R.needsUpdate=!0,je(R,W,et),R.side=Va,R.needsUpdate=!0,je(R,W,et),R.side=ea):je(R,W,et)}this.compile=function(R,W,et=null){et===null&&(et=R),g=pe.get(et),g.init(W),L.push(g),et.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),R!==et&&R.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights();const it=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Tt=X.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const Lt=Tt[Dt];ye(Lt,et,X),it.add(Lt)}else ye(Tt,et,X),it.add(Tt)}),L.pop(),g=null,it},this.compileAsync=function(R,W,et=null){const it=this.compile(R,W,et);return new Promise(X=>{function Tt(){if(it.forEach(function(Dt){Vt.get(Dt).currentProgram.isReady()&&it.delete(Dt)}),it.size===0){X(R);return}setTimeout(Tt,10)}ue.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let gn=null;function fi(R){gn&&gn(R)}function Ds(){Ei.stop()}function Us(){Ei.start()}const Ei=new Hv;Ei.setAnimationLoop(fi),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(R){gn=R,ot.setAnimationLoop(R),R===null?Ei.stop():Ei.start()},ot.addEventListener("sessionstart",Ds),ot.addEventListener("sessionend",Us),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(W),W=ot.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,W,V),g=pe.get(R,L.length),g.init(W),L.push(g),It.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),K.setFromProjectionMatrix(It),yt=this.localClippingEnabled,ct=bt.init(this.clippingPlanes,yt),x=Pt.get(R,B.length),x.init(),B.push(x),ot.enabled===!0&&ot.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&Xa(Tt,W,-1/0,w.sortObjects)}Xa(R,W,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(vt,Et),Ie=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ie&&kt.addToRenderList(x,R),this.info.render.frame++,ct===!0&&bt.beginShadows();const et=g.state.shadowsArray;zt.render(et,R,W),ct===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=x.opaque,X=x.transmissive;if(g.setupLights(),W.isArrayCamera){const Tt=W.cameras;if(X.length>0)for(let Dt=0,Lt=Tt.length;Dt<Lt;Dt++){const Ot=Tt[Dt];Ls(it,X,R,Ot)}Ie&&kt.render(R);for(let Dt=0,Lt=Tt.length;Dt<Lt;Dt++){const Ot=Tt[Dt];Er(x,R,Ot,Ot.viewport)}}else X.length>0&&Ls(it,X,R,W),Ie&&kt.render(R),Er(x,R,W);V!==null&&P===0&&(U.updateMultisampleRenderTarget(V),U.updateRenderTargetMipmap(V)),R.isScene===!0&&R.onAfterRender(w,R,W),Le.resetDefaultState(),D=-1,C=null,L.pop(),L.length>0?(g=L[L.length-1],ct===!0&&bt.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,B.pop(),B.length>0?x=B[B.length-1]:x=null};function Xa(R,W,et,it){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){it&&Zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(It);const Dt=pt.update(R),Lt=R.material;Lt.visible&&x.push(R,Dt,Lt,et,Zt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){const Dt=pt.update(R),Lt=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Zt.copy(R.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Zt.copy(Dt.boundingSphere.center)),Zt.applyMatrix4(R.matrixWorld).applyMatrix4(It)),Array.isArray(Lt)){const Ot=Dt.groups;for(let te=0,ee=Ot.length;te<ee;te++){const Wt=Ot[te],_e=Lt[Wt.materialIndex];_e&&_e.visible&&x.push(R,Dt,_e,et,Zt.z,Wt)}}else Lt.visible&&x.push(R,Dt,Lt,et,Zt.z,null)}}const Tt=R.children;for(let Dt=0,Lt=Tt.length;Dt<Lt;Dt++)Xa(Tt[Dt],W,et,it)}function Er(R,W,et,it){const X=R.opaque,Tt=R.transmissive,Dt=R.transparent;g.setupLightsView(et),ct===!0&&bt.setGlobalState(w.clippingPlanes,et),it&&Xt.viewport(G.copy(it)),X.length>0&&ka(X,W,et),Tt.length>0&&ka(Tt,W,et),Dt.length>0&&ka(Dt,W,et),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Ls(R,W,et,it){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[it.id]===void 0&&(g.state.transmissionRenderTarget[it.id]=new yr(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?Lo:sa,minFilter:Sr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const Tt=g.state.transmissionRenderTarget[it.id],Dt=it.viewport||G;Tt.setSize(Dt.z*w.transmissionResolutionScale,Dt.w*w.transmissionResolutionScale);const Lt=w.getRenderTarget();w.setRenderTarget(Tt),w.getClearColor(gt),dt=w.getClearAlpha(),dt<1&&w.setClearColor(16777215,.5),w.clear(),Ie&&kt.render(et);const Ot=w.toneMapping;w.toneMapping=Ga;const te=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),g.setupLightsView(it),ct===!0&&bt.setGlobalState(w.clippingPlanes,it),ka(R,et,it),U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Wt=0,_e=W.length;Wt<_e;Wt++){const ve=W[Wt],Xe=ve.object,Ee=ve.geometry,ne=ve.material,Yt=ve.group;if(ne.side===ea&&Xe.layers.test(it.layers)){const un=ne.side;ne.side=Gn,ne.needsUpdate=!0,hi(Xe,et,it,Ee,ne,Yt),ne.side=un,ne.needsUpdate=!0,ee=!0}}ee===!0&&(U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt))}w.setRenderTarget(Lt),w.setClearColor(gt,dt),te!==void 0&&(it.viewport=te),w.toneMapping=Ot}function ka(R,W,et){const it=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Tt=R.length;X<Tt;X++){const Dt=R[X],Lt=Dt.object,Ot=Dt.geometry,te=it===null?Dt.material:it,ee=Dt.group;Lt.layers.test(et.layers)&&hi(Lt,W,et,Ot,te,ee)}}function hi(R,W,et,it,X,Tt){R.onBeforeRender(w,W,et,it,X,Tt),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(w,W,et,it,R,Tt),X.transparent===!0&&X.side===ea&&X.forceSinglePass===!1?(X.side=Gn,X.needsUpdate=!0,w.renderBufferDirect(et,W,it,X,R,Tt),X.side=Va,X.needsUpdate=!0,w.renderBufferDirect(et,W,it,X,R,Tt),X.side=ea):w.renderBufferDirect(et,W,it,X,R,Tt),R.onAfterRender(w,W,et,it,X,Tt)}function je(R,W,et){W.isScene!==!0&&(W=Ve);const it=Vt.get(R),X=g.state.lights,Tt=g.state.shadowsArray,Dt=X.state.version,Lt=Ht.getParameters(R,X.state,Tt,W,et),Ot=Ht.getProgramCacheKey(Lt);let te=it.programs;it.environment=R.isMeshStandardMaterial?W.environment:null,it.fog=W.fog,it.envMap=(R.isMeshStandardMaterial?tt:T).get(R.envMap||it.environment),it.envMapRotation=it.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",$t),te=new Map,it.programs=te);let ee=te.get(Ot);if(ee!==void 0){if(it.currentProgram===ee&&it.lightsStateVersion===Dt)return Ui(R,Lt),ee}else Lt.uniforms=Ht.getUniforms(R),R.onBeforeCompile(Lt,w),ee=Ht.acquireProgram(Lt,Ot),te.set(Ot,ee),it.uniforms=Lt.uniforms;const Wt=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=bt.uniform),Ui(R,Lt),it.needsLights=Lu(R),it.lightsStateVersion=Dt,it.needsLights&&(Wt.ambientLightColor.value=X.state.ambient,Wt.lightProbe.value=X.state.probe,Wt.directionalLights.value=X.state.directional,Wt.directionalLightShadows.value=X.state.directionalShadow,Wt.spotLights.value=X.state.spot,Wt.spotLightShadows.value=X.state.spotShadow,Wt.rectAreaLights.value=X.state.rectArea,Wt.ltc_1.value=X.state.rectAreaLTC1,Wt.ltc_2.value=X.state.rectAreaLTC2,Wt.pointLights.value=X.state.point,Wt.pointLightShadows.value=X.state.pointShadow,Wt.hemisphereLights.value=X.state.hemi,Wt.directionalShadowMap.value=X.state.directionalShadowMap,Wt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Wt.spotShadowMap.value=X.state.spotShadowMap,Wt.spotLightMatrix.value=X.state.spotLightMatrix,Wt.spotLightMap.value=X.state.spotLightMap,Wt.pointShadowMap.value=X.state.pointShadowMap,Wt.pointShadowMatrix.value=X.state.pointShadowMatrix),it.currentProgram=ee,it.uniformsList=null,ee}function _n(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Eu.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Ui(R,W){const et=Vt.get(R);et.outputColorSpace=W.outputColorSpace,et.batching=W.batching,et.batchingColor=W.batchingColor,et.instancing=W.instancing,et.instancingColor=W.instancingColor,et.instancingMorph=W.instancingMorph,et.skinning=W.skinning,et.morphTargets=W.morphTargets,et.morphNormals=W.morphNormals,et.morphColors=W.morphColors,et.morphTargetsCount=W.morphTargetsCount,et.numClippingPlanes=W.numClippingPlanes,et.numIntersection=W.numClipIntersection,et.vertexAlphas=W.vertexAlphas,et.vertexTangents=W.vertexTangents,et.toneMapping=W.toneMapping}function Ns(R,W,et,it,X){W.isScene!==!0&&(W=Ve),U.resetTextureUnits();const Tt=W.fog,Dt=it.isMeshStandardMaterial?W.environment:null,Lt=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:As,Ot=(it.isMeshStandardMaterial?tt:T).get(it.envMap||Dt),te=it.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ee=!!et.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Wt=!!et.morphAttributes.position,_e=!!et.morphAttributes.normal,ve=!!et.morphAttributes.color;let Xe=Ga;it.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Xe=w.toneMapping);const Ee=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ne=Ee!==void 0?Ee.length:0,Yt=Vt.get(it),un=g.state.lights;if(ct===!0&&(yt===!0||R!==C)){const Ze=R===C&&it.id===D;bt.setState(it,R,Ze)}let Me=!1;it.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==un.state.version||Yt.outputColorSpace!==Lt||X.isBatchedMesh&&Yt.batching===!1||!X.isBatchedMesh&&Yt.batching===!0||X.isBatchedMesh&&Yt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Yt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Yt.instancing===!1||!X.isInstancedMesh&&Yt.instancing===!0||X.isSkinnedMesh&&Yt.skinning===!1||!X.isSkinnedMesh&&Yt.skinning===!0||X.isInstancedMesh&&Yt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Yt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Yt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Yt.instancingMorph===!1&&X.morphTexture!==null||Yt.envMap!==Ot||it.fog===!0&&Yt.fog!==Tt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==bt.numPlanes||Yt.numIntersection!==bt.numIntersection)||Yt.vertexAlphas!==te||Yt.vertexTangents!==ee||Yt.morphTargets!==Wt||Yt.morphNormals!==_e||Yt.morphColors!==ve||Yt.toneMapping!==Xe||Yt.morphTargetsCount!==ne)&&(Me=!0):(Me=!0,Yt.__version=it.version);let Ln=Yt.currentProgram;Me===!0&&(Ln=je(it,W,X));let di=!1,Cn=!1,dn=!1;const Ne=Ln.getUniforms(),wn=Yt.uniforms;if(Xt.useProgram(Ln.program)&&(di=!0,Cn=!0,dn=!0),it.id!==D&&(D=it.id,Cn=!0),di||C!==R){Xt.buffers.depth.getReversed()?(St.copy(R.projectionMatrix),nM(St),iM(St),Ne.setValue(I,"projectionMatrix",St)):Ne.setValue(I,"projectionMatrix",R.projectionMatrix),Ne.setValue(I,"viewMatrix",R.matrixWorldInverse);const vn=Ne.map.cameraPosition;vn!==void 0&&vn.setValue(I,jt.setFromMatrixPosition(R.matrixWorld)),de.logarithmicDepthBuffer&&Ne.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ne.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Cn=!0,dn=!0)}if(X.isSkinnedMesh){Ne.setOptional(I,X,"bindMatrix"),Ne.setOptional(I,X,"bindMatrixInverse");const Ze=X.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Ne.setValue(I,"boneTexture",Ze.boneTexture,U))}X.isBatchedMesh&&(Ne.setOptional(I,X,"batchingTexture"),Ne.setValue(I,"batchingTexture",X._matricesTexture,U),Ne.setOptional(I,X,"batchingIdTexture"),Ne.setValue(I,"batchingIdTexture",X._indirectTexture,U),Ne.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&Ne.setValue(I,"batchingColorTexture",X._colorsTexture,U));const Tn=et.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Gt.update(X,et,Ln),(Cn||Yt.receiveShadow!==X.receiveShadow)&&(Yt.receiveShadow=X.receiveShadow,Ne.setValue(I,"receiveShadow",X.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(wn.envMap.value=Ot,wn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&W.environment!==null&&(wn.envMapIntensity.value=W.environmentIntensity),Cn&&(Ne.setValue(I,"toneMappingExposure",w.toneMappingExposure),Yt.needsLights&&Uu(wn,dn),Tt&&it.fog===!0&&Ct.refreshFogUniforms(wn,Tt),Ct.refreshMaterialUniforms(wn,it,j,Z,g.state.transmissionRenderTarget[R.id]),Eu.upload(I,_n(Yt),wn,U)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Eu.upload(I,_n(Yt),wn,U),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ne.setValue(I,"center",X.center),Ne.setValue(I,"modelViewMatrix",X.modelViewMatrix),Ne.setValue(I,"normalMatrix",X.normalMatrix),Ne.setValue(I,"modelMatrix",X.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Ze=it.uniformsGroups;for(let vn=0,Tr=Ze.length;vn<Tr;vn++){const Nn=Ze[vn];k.update(Nn,Ln),k.bind(Nn,Ln)}}return Ln}function Uu(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Lu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,W,et){Vt.get(R.texture).__webglTexture=W,Vt.get(R.depthTexture).__webglTexture=et;const it=Vt.get(R);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=et===void 0,it.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const et=Vt.get(R);et.__webglFramebuffer=W,et.__useDefaultFramebuffer=W===void 0};const Io=I.createFramebuffer();this.setRenderTarget=function(R,W=0,et=0){V=R,H=W,P=et;let it=!0,X=null,Tt=!1,Dt=!1;if(R){const Ot=Vt.get(R);if(Ot.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(I.FRAMEBUFFER,null),it=!1;else if(Ot.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(Ot.__hasExternalTextures)U.rebindTextures(R,Vt.get(R.texture).__webglTexture,Vt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Wt=R.depthTexture;if(Ot.__boundDepthTexture!==Wt){if(Wt!==null&&Vt.has(Wt)&&(R.width!==Wt.image.width||R.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Dt=!0);const ee=Vt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[W])?X=ee[W][et]:X=ee[W],Tt=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?X=Vt.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?X=ee[et]:X=ee,G.copy(R.viewport),lt.copy(R.scissor),st=R.scissorTest}else G.copy(N).multiplyScalar(j).floor(),lt.copy(nt).multiplyScalar(j).floor(),st=xt;if(et!==0&&(X=Io),Xt.bindFramebuffer(I.FRAMEBUFFER,X)&&it&&Xt.drawBuffers(R,X),Xt.viewport(G),Xt.scissor(lt),Xt.setScissorTest(st),Tt){const Ot=Vt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ot.__webglTexture,et)}else if(Dt){const Ot=Vt.get(R.texture),te=W;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ot.__webglTexture,et,te)}else if(R!==null&&et!==0){const Ot=Vt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ot.__webglTexture,et)}D=-1},this.readRenderTargetPixels=function(R,W,et,it,X,Tt,Dt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Lt=Lt[Dt]),Lt){Xt.bindFramebuffer(I.FRAMEBUFFER,Lt);try{const Ot=R.texture,te=Ot.format,ee=Ot.type;if(!de.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-it&&et>=0&&et<=R.height-X&&I.readPixels(W,et,it,X,ae.convert(te),ae.convert(ee),Tt)}finally{const Ot=V!==null?Vt.get(V).__webglFramebuffer:null;Xt.bindFramebuffer(I.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(R,W,et,it,X,Tt,Dt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Lt=Lt[Dt]),Lt){const Ot=R.texture,te=Ot.format,ee=Ot.type;if(!de.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-it&&et>=0&&et<=R.height-X){Xt.bindFramebuffer(I.FRAMEBUFFER,Lt);const Wt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Wt),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),I.readPixels(W,et,it,X,ae.convert(te),ae.convert(ee),0);const _e=V!==null?Vt.get(V).__webglFramebuffer:null;Xt.bindFramebuffer(I.FRAMEBUFFER,_e);const ve=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await eM(I,ve,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Wt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.deleteBuffer(Wt),I.deleteSync(ve),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,et=0){R.isTexture!==!0&&(gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const it=Math.pow(2,-et),X=Math.floor(R.image.width*it),Tt=Math.floor(R.image.height*it),Dt=W!==null?W.x:0,Lt=W!==null?W.y:0;U.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,et,0,0,Dt,Lt,X,Tt),Xt.unbindTexture()};const Wa=I.createFramebuffer(),Os=I.createFramebuffer();this.copyTextureToTexture=function(R,W,et=null,it=null,X=0,Tt=null){R.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,R=arguments[1],W=arguments[2],Tt=arguments[3]||0,et=null),Tt===null&&(X!==0?(gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=X,X=0):Tt=0);let Dt,Lt,Ot,te,ee,Wt,_e,ve,Xe;const Ee=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(et!==null)Dt=et.max.x-et.min.x,Lt=et.max.y-et.min.y,Ot=et.isBox3?et.max.z-et.min.z:1,te=et.min.x,ee=et.min.y,Wt=et.isBox3?et.min.z:0;else{const Tn=Math.pow(2,-X);Dt=Math.floor(Ee.width*Tn),Lt=Math.floor(Ee.height*Tn),R.isDataArrayTexture?Ot=Ee.depth:R.isData3DTexture?Ot=Math.floor(Ee.depth*Tn):Ot=1,te=0,ee=0,Wt=0}it!==null?(_e=it.x,ve=it.y,Xe=it.z):(_e=0,ve=0,Xe=0);const ne=ae.convert(W.format),Yt=ae.convert(W.type);let un;W.isData3DTexture?(U.setTexture3D(W,0),un=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),un=I.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),un=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const Me=I.getParameter(I.UNPACK_ROW_LENGTH),Ln=I.getParameter(I.UNPACK_IMAGE_HEIGHT),di=I.getParameter(I.UNPACK_SKIP_PIXELS),Cn=I.getParameter(I.UNPACK_SKIP_ROWS),dn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ee.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ee.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,te),I.pixelStorei(I.UNPACK_SKIP_ROWS,ee),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wt);const Ne=R.isDataArrayTexture||R.isData3DTexture,wn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Tn=Vt.get(R),Ze=Vt.get(W),vn=Vt.get(Tn.__renderTarget),Tr=Vt.get(Ze.__renderTarget);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,vn.__webglFramebuffer),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Tr.__webglFramebuffer);for(let Nn=0;Nn<Ot;Nn++)Ne&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.get(R).__webglTexture,X,Wt+Nn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.get(W).__webglTexture,Tt,Xe+Nn)),I.blitFramebuffer(te,ee,Dt,Lt,_e,ve,Dt,Lt,I.DEPTH_BUFFER_BIT,I.NEAREST);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||R.isRenderTargetTexture||Vt.has(R)){const Tn=Vt.get(R),Ze=Vt.get(W);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,Wa),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Os);for(let vn=0;vn<Ot;vn++)Ne?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tn.__webglTexture,X,Wt+vn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Tn.__webglTexture,X),wn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ze.__webglTexture,Tt,Xe+vn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ze.__webglTexture,Tt),X!==0?I.blitFramebuffer(te,ee,Dt,Lt,_e,ve,Dt,Lt,I.COLOR_BUFFER_BIT,I.NEAREST):wn?I.copyTexSubImage3D(un,Tt,_e,ve,Xe+vn,te,ee,Dt,Lt):I.copyTexSubImage2D(un,Tt,_e,ve,te,ee,Dt,Lt);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else wn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(un,Tt,_e,ve,Xe,Dt,Lt,Ot,ne,Yt,Ee.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(un,Tt,_e,ve,Xe,Dt,Lt,Ot,ne,Ee.data):I.texSubImage3D(un,Tt,_e,ve,Xe,Dt,Lt,Ot,ne,Yt,Ee):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Tt,_e,ve,Dt,Lt,ne,Yt,Ee.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Tt,_e,ve,Ee.width,Ee.height,ne,Ee.data):I.texSubImage2D(I.TEXTURE_2D,Tt,_e,ve,Dt,Lt,ne,Yt,Ee);I.pixelStorei(I.UNPACK_ROW_LENGTH,Me),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ln),I.pixelStorei(I.UNPACK_SKIP_PIXELS,di),I.pixelStorei(I.UNPACK_SKIP_ROWS,Cn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,dn),Tt===0&&W.generateMipmaps&&I.generateMipmap(un),Xt.unbindTexture()},this.copyTextureToTexture3D=function(R,W,et=null,it=null,X=0){return R.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,it=arguments[1]||null,R=arguments[2],W=arguments[3],X=arguments[4]||0),gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,et,it,X)},this.initRenderTarget=function(R){Vt.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),Xt.unbindTexture()},this.resetState=function(){H=0,P=0,V=null,Xt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ae._getUnpackColorSpace()}}function Wv(o,e,i){const l=o.getImageData(0,0,e,e).data,c=[];for(let d=0;d<e;d++)for(let m=0;m<e;m++){const p=(d*e+m)*4;l[p+3]>50&&c.push({x:m/e*2-1,y:-(d/e*2-1)})}if(c.length===0){const d=[];for(let m=0;m<i;m++){const p=Math.random()*Math.PI*2,v=Math.sqrt(Math.random())*.8;d.push({x:Math.cos(p)*v,y:Math.sin(p)*v})}return d}const h=[];for(let d=0;d<i;d++){const m=c[Math.floor(Math.random()*c.length)];h.push({x:m.x+(Math.random()-.5)*.0015,y:m.y+(Math.random()-.5)*.0015})}return h}function SA(o,e=7e3,i=256){const r=document.createElement("canvas");r.width=i,r.height=i;const l=r.getContext("2d",{willReadFrequently:!0});l.clearRect(0,0,i,i);const c=i*.8;return l.font=`${c}px serif`,l.textAlign="center",l.textBaseline="middle",l.fillText(o,i/2,i/2),Wv(l,i,e)}function xA(o,e=7e3,i=384){return new Promise(r=>{const l=new Image;l.crossOrigin="anonymous",l.onload=()=>{const c=document.createElement("canvas");c.width=i,c.height=i;const h=c.getContext("2d",{willReadFrequently:!0});h.clearRect(0,0,i,i);const d=i*.1,m=i-d*2,p=Math.min(m/l.naturalWidth,m/l.naturalHeight),v=l.naturalWidth*p,S=l.naturalHeight*p,M=(i-v)/2,y=(i-S)/2;h.drawImage(l,M,y,v,S),r(Wv(h,i,e))},l.onerror=()=>{r(null)},l.src=o})}const Ci=7e3,xh=.012,Mh=.94,yh=.4,MA=.06,lv=.06,uv=25e-5,cv=.4,yA=`
  attribute float aAlpha;
  uniform float uPixelRatio;
  varying float vAlpha;

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = 4.0 * uPixelRatio * (1.0 / -mvPosition.z);
    gl_PointSize = clamp(gl_PointSize, 1.0, 4.0);
    gl_Position = projectionMatrix * mvPosition;
    vAlpha = aAlpha;
  }
`,EA=`
  uniform vec3 uColor;
  varying float vAlpha;

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    gl_FragColor = vec4(uColor, vAlpha * 0.9);
  }
`;function TA({siteId:o,emoji:e,svgFile:i,theme:r,onReady:l}){const c=He.useRef(null),h=He.useRef({scene:null,camera:null,renderer:null,points:null,material:null,positions:null,targets:null,velocities:null,alphas:null,wanderPhase:null,mouse:{x:99,y:99},animFrame:null,initialized:!1}),d=He.useRef(null),m=He.useCallback(()=>{const b=c.current;if(!b)return;const x=h.current,g=b.clientWidth,B=b.clientHeight;x.scene=new CM,x.camera=new ui(50,g/B,.1,100),x.camera.position.z=2.5,x.renderer=new vA({antialias:!1,alpha:!0}),x.renderer.setSize(g,B),x.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.renderer.setClearColor(0,0),b.appendChild(x.renderer.domElement);const L=new ua;x.positions=new Float32Array(Ci*3),x.alphas=new Float32Array(Ci),x.targets=new Float32Array(Ci*3),x.velocities=new Float32Array(Ci*3),x.wanderPhase=new Float32Array(Ci*2);for(let w=0;w<Ci;w++){const q=Math.random()*Math.PI*2,H=.5+Math.random()*2;x.positions[w*3]=Math.cos(q)*H,x.positions[w*3+1]=Math.sin(q)*H,x.positions[w*3+2]=(Math.random()-.5)*lv,x.alphas[w]=.35+Math.random()*.65,x.wanderPhase[w*2]=Math.random()*Math.PI*2,x.wanderPhase[w*2+1]=Math.random()*Math.PI*2}L.setAttribute("position",new ci(x.positions,3)),L.setAttribute("aAlpha",new ci(x.alphas,1)),x.material=new la({vertexShader:yA,fragmentShader:EA,uniforms:{uColor:{value:new Ce("#0000FF")},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},transparent:!0,depthWrite:!1,blending:Th}),x.points=new LM(L,x.material),x.scene.add(x.points),x.initialized=!0,l&&l()},[l]),p=He.useCallback((b,x)=>{const g=h.current;for(let B=0;B<Ci;B++){const L=b[B]||b[B%b.length],w=B*3;if(g.targets[w]=L.x*.9,g.targets[w+1]=L.y*.9,g.targets[w+2]=(Math.random()-.5)*lv,x){const q=Math.random()*Math.PI*2,H=.015+Math.random()*.04;g.velocities[w]+=Math.cos(q)*H,g.velocities[w+1]+=Math.sin(q)*H,g.velocities[w+2]+=(Math.random()-.5)*.015}}},[]),v=He.useCallback(async(b,x,g=!1)=>{if(h.current.initialized){if(b){const L=await xA(`./svg/${b}`,Ci);if(L){p(L,g);return}}p(SA(x,Ci),g)}},[p]),S=He.useCallback(()=>{const b=h.current;if(!b.initialized)return;b.animFrame=requestAnimationFrame(S);const x=performance.now()*.001,g=b.positions,B=b.targets,L=b.velocities,w=b.wanderPhase,q=b.mouse.x,H=b.mouse.y;for(let P=0;P<Ci;P++){const V=P*3,D=P*2,C=g[V],G=g[V+1],lt=g[V+2],st=Math.sin(x*cv+w[D])*uv,gt=Math.cos(x*cv*.8+w[D+1])*uv;L[V]+=(B[V]-C)*xh+st,L[V+1]+=(B[V+1]-G)*xh+gt,L[V+2]+=(B[V+2]-lt)*xh*.3;const dt=C-q,O=G-H,Z=dt*dt+O*O;if(Z<yh*yh&&Z>1e-4){const j=Math.sqrt(Z),vt=(1-j/yh)*MA,Et=1/j;L[V]+=dt*Et*vt,L[V+1]+=O*Et*vt}L[V]*=Mh,L[V+1]*=Mh,L[V+2]*=Mh,g[V]+=L[V],g[V+1]+=L[V+1],g[V+2]+=L[V+2]}b.points.geometry.attributes.position.needsUpdate=!0,b.renderer.render(b.scene,b.camera)},[]),M=He.useCallback(b=>{const x=h.current,g=c.current;if(!g||!x.camera)return;const B=g.getBoundingClientRect(),L=(b.clientX-B.left)/B.width*2-1,w=-((b.clientY-B.top)/B.height)*2+1,q=new rt(L,w,.5);q.unproject(x.camera);const H=q.sub(x.camera.position).normalize(),P=-x.camera.position.z/H.z,V=x.camera.position.clone().add(H.multiplyScalar(P));x.mouse.x=V.x,x.mouse.y=V.y},[]),y=He.useCallback(()=>{h.current.mouse.x=99,h.current.mouse.y=99},[]),A=He.useCallback(()=>{const b=c.current,x=h.current;if(!b||!x.renderer)return;const g=b.clientWidth,B=b.clientHeight;x.camera.aspect=g/B,x.camera.updateProjectionMatrix(),x.renderer.setSize(g,B)},[]);return He.useEffect(()=>{m(),S(),window.addEventListener("resize",A);const b=c.current;return b&&(b.addEventListener("mousemove",M),b.addEventListener("mouseleave",y)),()=>{var g;window.removeEventListener("resize",A),b&&(b.removeEventListener("mousemove",M),b.removeEventListener("mouseleave",y));const x=h.current;x.animFrame&&cancelAnimationFrame(x.animFrame),x.renderer&&(x.renderer.dispose(),(g=x.renderer.domElement)!=null&&g.parentNode&&x.renderer.domElement.parentNode.removeChild(x.renderer.domElement))}},[]),He.useEffect(()=>{if(!h.current.initialized||!o)return;const b=d.current===null;d.current=o,v(i,e,!b)},[o,i,e,v]),He.useEffect(()=>{const b=h.current.material;b&&(r==="dark"?b.uniforms.uColor.value.set("#FFFF00"):b.uniforms.uColor.value.set("#0000FF"))},[r]),Qt.jsx("div",{ref:c,className:"particle-container"})}function bA({theme:o,onToggle:e}){return Qt.jsxs("button",{className:"theme-toggle",onClick:e,"aria-label":"Toggle theme",title:o==="light"?"Switch to night mode":"Switch to day mode",children:[Qt.jsx("span",{className:"theme-toggle-track",children:Qt.jsx("span",{className:`theme-toggle-thumb ${o}`,children:o==="light"?"☀":"☾"})}),Qt.jsx("span",{className:"theme-toggle-label",children:o==="light"?"DAY":"NIGHT"})]})}function AA({theme:o}){const e=He.useRef(null);return He.useEffect(()=>{const i=e.current;if(!i)return;const r=i.getContext("2d"),l=256,c=256;i.width=l,i.height=c;const h=r.createImageData(l,c),d=h.data;for(let p=0;p<d.length;p+=4){const v=Math.random()*255;d[p]=v,d[p+1]=v,d[p+2]=v,d[p+3]=15}r.putImageData(h,0,0);const m=setInterval(()=>{for(let p=0;p<d.length;p+=4){const v=Math.random()*255;d[p]=v,d[p+1]=v,d[p+2]=v,d[p+3]=12}r.putImageData(h,0,0)},100);return()=>clearInterval(m)},[]),Qt.jsxs(Qt.Fragment,{children:[Qt.jsx("div",{className:"overlay-scanlines"}),Qt.jsx("canvas",{ref:e,className:"overlay-noise"}),Qt.jsx("div",{className:"overlay-vignette"}),Qt.jsx("div",{className:"overlay-glitch-line"})]})}const Eh=[{id:"cyanoide",label:"Cyanoide",url:"#",emoji:"◆",svg:"CYANOIDE.svg",description:"Espace d'expression de mes différentes créations, et autres projets lancés à mes heures perdues."},{id:"github",label:"Github",url:"https://github.com/cyanoide",emoji:"🐙",svg:"github.svg"},{id:"youtube",label:"Youtube",url:"https://www.youtube.com/@oxytyramine",emoji:"▶",svg:"youtube.svg"},{id:"instagram",label:"Instagram",url:"https://www.instagram.com/constantin.mrr/",emoji:"📷",svg:"instagram.svg"},{id:"x",label:"X",url:"https://x.com/cyanoide",emoji:"✖",svg:"X.svg"},{id:"five",label:"FIVE",url:"https://cyanoide.github.io/FiveCRF/",emoji:"🎮",svg:"FIVE.svg"},{id:"ratp",label:"Ratp RER",url:"https://cyanoide.github.io/ratprer/",emoji:"🚇",svg:"ratp.svg"},{id:"looper",label:"Looper Music",url:"https://loopermusic.streamlit.app/",emoji:"🎵",svg:"looper.svg"},{id:"musicsplitter",label:"Music Splitter",url:"https://cyanoide.github.io/Music-Splitter/",emoji:"🎚",svg:"musicsplitter.svg"},{id:"soundcloud",label:"SoundCloud",url:"https://soundcloud.com/cyanoide",emoji:"♪",svg:"Soundcloud.svg"},{id:"life",label:"Life Tracker",url:"https://cyanoide.github.io/Life-Tracker/",emoji:"❤",svg:"life.svg"},{id:"camera",label:"Camera Map",url:"https://cyanoide.github.io/CameraMap/",emoji:"📌",svg:"cameramap.svg"},{id:"mail",label:"Contact Me",url:"mailto:constantin.moreira@gmail.com",emoji:"✉",svg:"contact.svg"},{id:"pattern",label:"Pattern Maker",url:"https://cyanoide.github.io/PatternMaker/",emoji:"🔒",svg:"pattern.svg"}];function RA(){const[o,e]=He.useState("light"),[i,r]=He.useState("cyanoide"),l=Eh.find(d=>d.id===i)||Eh[0],c=He.useCallback(()=>{e(d=>d==="light"?"dark":"light")},[]),h=He.useCallback(d=>{r(d)},[]);return Qt.jsxs("div",{className:`app ${o}`,"data-theme":o,children:[Qt.jsx("div",{className:"bg-grid"}),Qt.jsx(bA,{theme:o,onToggle:c}),Qt.jsxs("div",{className:"layout",children:[Qt.jsx("aside",{className:"panel-left",children:Qt.jsx(cx,{sites:Eh,selectedId:i,onSelect:h,theme:o})}),Qt.jsxs("main",{className:"panel-right",children:[Qt.jsx(TA,{siteId:l.id,emoji:l.emoji,svgFile:l.svg,theme:o}),Qt.jsxs("div",{className:"site-info",children:[Qt.jsx("div",{className:"site-info-label",children:l.label}),l.description&&Qt.jsx("div",{className:"site-info-description",children:l.description}),l.url!=="#"&&Qt.jsx("div",{className:"site-info-url",children:l.url})]})]})]}),Qt.jsx(AA,{theme:o})]})}lx.createRoot(document.getElementById("root")).render(Qt.jsx(tx.StrictMode,{children:Qt.jsx(RA,{})}));
