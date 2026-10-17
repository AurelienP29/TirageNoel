(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ql(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},Xr=[],Yt=()=>{},td=()=>!1,Ko=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Jl=t=>t.startsWith("onUpdate:"),nt=Object.assign,Xl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},s_=Object.prototype.hasOwnProperty,Ae=(t,e)=>s_.call(t,e),ee=Array.isArray,Yr=t=>Ii(t)==="[object Map]",Go=t=>Ii(t)==="[object Set]",Hu=t=>Ii(t)==="[object Date]",he=t=>typeof t=="function",Ue=t=>typeof t=="string",an=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",nd=t=>(Ce(t)||he(t))&&he(t.then)&&he(t.catch),rd=Object.prototype.toString,Ii=t=>rd.call(t),i_=t=>Ii(t).slice(8,-1),sd=t=>Ii(t)==="[object Object]",Yl=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zs=Ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},o_=/-\w/g,tr=Qo(t=>t.replace(o_,e=>e.slice(1).toUpperCase())),a_=/\B([A-Z])/g,Vr=Qo(t=>t.replace(a_,"-$1").toLowerCase()),id=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ua=Qo(t=>t?`on${id(t)}`:""),Gn=(t,e)=>!Object.is(t,e),to=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},od=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},fl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},l_=t=>{const e=Ue(t)?Number(t):NaN;return isNaN(e)?t:e};let zu;const Jo=()=>zu||(zu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zl(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ue(r)?f_(r):Zl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ue(t)||Ce(t))return t}const c_=/;(?![^(]*\))/g,u_=/:([^]+)/,h_=/\/\*[^]*?\*\//g;function f_(t){const e={};return t.replace(h_,"").split(c_).forEach(n=>{if(n){const r=n.split(u_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function gt(t){let e="";if(Ue(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const r=gt(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const d_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",p_=Ql(d_);function ad(t){return!!t||t===""}function m_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Xo(t[r],e[r]);return n}function Xo(t,e){if(t===e)return!0;let n=Hu(t),r=Hu(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=an(t),r=an(e),n||r)return t===e;if(n=ee(t),r=ee(e),n||r)return n&&r?m_(t,e):!1;if(n=Ce(t),r=Ce(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const l=t.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!Xo(t[a],e[a]))return!1}}return String(t)===String(e)}function ld(t,e){return t.findIndex(n=>Xo(n,e))}const cd=t=>!!(t&&t.__v_isRef===!0),de=t=>Ue(t)?t:t==null?"":ee(t)||Ce(t)&&(t.toString===rd||!he(t.toString))?cd(t)?de(t.value):JSON.stringify(t,ud,2):String(t),ud=(t,e)=>cd(e)?ud(t,e.value):Yr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ja(r,i)+" =>"]=s,n),{})}:Go(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ja(n))}:an(e)?ja(e):Ce(e)&&!ee(e)&&!sd(e)?String(e):e,ja=(t,e="")=>{var n;return an(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tt;class g_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Tt,!e&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Tt;try{return Tt=this,e()}finally{Tt=n}}}on(){++this._on===1&&(this.prevScope=Tt,Tt=this)}off(){this._on>0&&--this._on===0&&(Tt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function __(){return Tt}let ke;const Ba=new WeakSet;class hd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tt&&Tt.active&&Tt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ba.has(this)&&(Ba.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wu(this),pd(this);const e=ke,n=Bt;ke=this,Bt=!0;try{return this.fn()}finally{md(this),ke=e,Bt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)nc(e);this.deps=this.depsTail=void 0,Wu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ba.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dl(this)&&this.run()}get dirty(){return dl(this)}}let fd=0,Ws,Ks;function dd(t,e=!1){if(t.flags|=8,e){t.next=Ks,Ks=t;return}t.next=Ws,Ws=t}function ec(){fd++}function tc(){if(--fd>0)return;if(Ks){let e=Ks;for(Ks=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ws;){let e=Ws;for(Ws=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function pd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function md(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),nc(r),y_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function dl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(gd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function gd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ii)||(t.globalVersion=ii,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!dl(t))))return;t.flags|=2;const e=t.dep,n=ke,r=Bt;ke=t,Bt=!0;try{pd(t);const s=t.fn(t._value);(e.version===0||Gn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ke=n,Bt=r,md(t),t.flags&=-3}}function nc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)nc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function y_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Bt=!0;const _d=[];function In(){_d.push(Bt),Bt=!1}function wn(){const t=_d.pop();Bt=t===void 0?!0:t}function Wu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ke;ke=void 0;try{e()}finally{ke=n}}}let ii=0;class v_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ke||!Bt||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new v_(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,yd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=r)}return n}trigger(e){this.version++,ii++,this.notify(e)}notify(e){ec();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{tc()}}}function yd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)yd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const pl=new WeakMap,br=Symbol(""),ml=Symbol(""),oi=Symbol("");function ct(t,e,n){if(Bt&&ke){let r=pl.get(t);r||pl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new rc),s.map=r,s.key=n),s.track()}}function yn(t,e,n,r,s,i){const a=pl.get(t);if(!a){ii++;return}const l=c=>{c&&c.trigger()};if(ec(),e==="clear")a.forEach(l);else{const c=ee(t),h=c&&Yl(n);if(c&&n==="length"){const d=Number(r);a.forEach((m,v)=>{(v==="length"||v===oi||!an(v)&&v>=d)&&l(m)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(oi)),e){case"add":c?h&&l(a.get("length")):(l(a.get(br)),Yr(t)&&l(a.get(ml)));break;case"delete":c||(l(a.get(br)),Yr(t)&&l(a.get(ml)));break;case"set":Yr(t)&&l(a.get(br));break}}tc()}function Br(t){const e=we(t);return e===t?e:(ct(e,"iterate",oi),xt(t)?e:e.map(et))}function Yo(t){return ct(t=we(t),"iterate",oi),t}const E_={__proto__:null,[Symbol.iterator](){return $a(this,Symbol.iterator,et)},concat(...t){return Br(this).concat(...t.map(e=>ee(e)?Br(e):e))},entries(){return $a(this,"entries",t=>(t[1]=et(t[1]),t))},every(t,e){return dn(this,"every",t,e,void 0,arguments)},filter(t,e){return dn(this,"filter",t,e,n=>n.map(et),arguments)},find(t,e){return dn(this,"find",t,e,et,arguments)},findIndex(t,e){return dn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return dn(this,"findLast",t,e,et,arguments)},findLastIndex(t,e){return dn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return dn(this,"forEach",t,e,void 0,arguments)},includes(...t){return qa(this,"includes",t)},indexOf(...t){return qa(this,"indexOf",t)},join(t){return Br(this).join(t)},lastIndexOf(...t){return qa(this,"lastIndexOf",t)},map(t,e){return dn(this,"map",t,e,void 0,arguments)},pop(){return Ls(this,"pop")},push(...t){return Ls(this,"push",t)},reduce(t,...e){return Ku(this,"reduce",t,e)},reduceRight(t,...e){return Ku(this,"reduceRight",t,e)},shift(){return Ls(this,"shift")},some(t,e){return dn(this,"some",t,e,void 0,arguments)},splice(...t){return Ls(this,"splice",t)},toReversed(){return Br(this).toReversed()},toSorted(t){return Br(this).toSorted(t)},toSpliced(...t){return Br(this).toSpliced(...t)},unshift(...t){return Ls(this,"unshift",t)},values(){return $a(this,"values",et)}};function $a(t,e,n){const r=Yo(t),s=r[e]();return r!==t&&!xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const T_=Array.prototype;function dn(t,e,n,r,s,i){const a=Yo(t),l=a!==t&&!xt(t),c=a[e];if(c!==T_[e]){const m=c.apply(t,i);return l?et(m):m}let h=n;a!==t&&(l?h=function(m,v){return n.call(this,et(m),v,t)}:n.length>2&&(h=function(m,v){return n.call(this,m,v,t)}));const d=c.call(a,h,r);return l&&s?s(d):d}function Ku(t,e,n,r){const s=Yo(t);let i=n;return s!==t&&(xt(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,et(l),c,t)}),s[e](i,...r)}function qa(t,e,n){const r=we(t);ct(r,"iterate",oi);const s=r[e](...n);return(s===-1||s===!1)&&ac(n[0])?(n[0]=we(n[0]),r[e](...n)):s}function Ls(t,e,n=[]){In(),ec();const r=we(t)[e].apply(t,n);return tc(),wn(),r}const I_=Ql("__proto__,__v_isRef,__isVue"),vd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(an));function w_(t){an(t)||(t=String(t));const e=we(this);return ct(e,"has",t),e.hasOwnProperty(t)}class Ed{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?N_:Ad:i?wd:Id).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ee(e);if(!s){let c;if(a&&(c=E_[n]))return c;if(n==="hasOwnProperty")return w_}const l=Reflect.get(e,n,ht(e)?e:r);if((an(n)?vd.has(n):I_(n))||(s||ct(e,"get",n),i))return l;if(ht(l)){const c=a&&Yl(n)?l:l.value;return s&&Ce(c)?_l(c):c}return Ce(l)?s?_l(l):ic(l):l}}class Td extends Ed{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=nr(i);if(!xt(r)&&!nr(r)&&(i=we(i),r=we(r)),!ee(e)&&ht(i)&&!ht(r))return c||(i.value=r),!0}const a=ee(e)&&Yl(n)?Number(n)<e.length:Ae(e,n),l=Reflect.set(e,n,r,ht(e)?e:s);return e===we(s)&&(a?Gn(r,i)&&yn(e,"set",n,r):yn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ae(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&yn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!an(n)||!vd.has(n))&&ct(e,"has",n),r}ownKeys(e){return ct(e,"iterate",ee(e)?"length":br),Reflect.ownKeys(e)}}class A_ extends Ed{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const b_=new Td,S_=new A_,R_=new Td(!0);const gl=t=>t,zi=t=>Reflect.getPrototypeOf(t);function C_(t,e,n){return function(...r){const s=this.__v_raw,i=we(s),a=Yr(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),d=n?gl:e?go:et;return!e&&ct(i,"iterate",c?ml:br),{next(){const{value:m,done:v}=h.next();return v?{value:m,done:v}:{value:l?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Wi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function P_(t,e){const n={get(s){const i=this.__v_raw,a=we(i),l=we(s);t||(Gn(s,l)&&ct(a,"get",s),ct(a,"get",l));const{has:c}=zi(a),h=e?gl:t?go:et;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ct(we(s),"iterate",br),s.size},has(s){const i=this.__v_raw,a=we(i),l=we(s);return t||(Gn(s,l)&&ct(a,"has",s),ct(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=we(l),h=e?gl:t?go:et;return!t&&ct(c,"iterate",br),l.forEach((d,m)=>s.call(i,h(d),h(m),a))}};return nt(n,t?{add:Wi("add"),set:Wi("set"),delete:Wi("delete"),clear:Wi("clear")}:{add(s){!e&&!xt(s)&&!nr(s)&&(s=we(s));const i=we(this);return zi(i).has.call(i,s)||(i.add(s),yn(i,"add",s,s)),this},set(s,i){!e&&!xt(i)&&!nr(i)&&(i=we(i));const a=we(this),{has:l,get:c}=zi(a);let h=l.call(a,s);h||(s=we(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?Gn(i,d)&&yn(a,"set",s,i):yn(a,"add",s,i),this},delete(s){const i=we(this),{has:a,get:l}=zi(i);let c=a.call(i,s);c||(s=we(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&yn(i,"delete",s,void 0),h},clear(){const s=we(this),i=s.size!==0,a=s.clear();return i&&yn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=C_(s,t,e)}),n}function sc(t,e){const n=P_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ae(n,s)&&s in r?n:r,s,i)}const D_={get:sc(!1,!1)},k_={get:sc(!1,!0)},V_={get:sc(!0,!1)};const Id=new WeakMap,wd=new WeakMap,Ad=new WeakMap,N_=new WeakMap;function x_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function O_(t){return t.__v_skip||!Object.isExtensible(t)?0:x_(i_(t))}function ic(t){return nr(t)?t:oc(t,!1,b_,D_,Id)}function M_(t){return oc(t,!1,R_,k_,wd)}function _l(t){return oc(t,!0,S_,V_,Ad)}function oc(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=O_(t);if(i===0)return t;const a=s.get(t);if(a)return a;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Zr(t){return nr(t)?Zr(t.__v_raw):!!(t&&t.__v_isReactive)}function nr(t){return!!(t&&t.__v_isReadonly)}function xt(t){return!!(t&&t.__v_isShallow)}function ac(t){return t?!!t.__v_raw:!1}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function L_(t){return!Ae(t,"__v_skip")&&Object.isExtensible(t)&&od(t,"__v_skip",!0),t}const et=t=>Ce(t)?ic(t):t,go=t=>Ce(t)?_l(t):t;function ht(t){return t?t.__v_isRef===!0:!1}function Re(t){return F_(t,!1)}function F_(t,e){return ht(t)?t:new U_(t,e)}class U_{constructor(e,n){this.dep=new rc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:we(e),this._value=n?e:et(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||xt(e)||nr(e);e=r?e:we(e),Gn(e,n)&&(this._rawValue=e,this._value=r?e:et(e),this.dep.trigger())}}function j_(t){return ht(t)?t.value:t}const B_={get:(t,e,n)=>e==="__v_raw"?t:j_(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ht(s)&&!ht(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function bd(t){return Zr(t)?t:new Proxy(t,B_)}class $_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new rc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ii-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return dd(this,!0),!0}get value(){const e=this.dep.track();return gd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function q_(t,e,n=!1){let r,s;return he(t)?r=t:(r=t.get,s=t.set),new $_(r,s,n)}const Ki={},_o=new WeakMap;let Er;function H_(t,e=!1,n=Er){if(n){let r=_o.get(n);r||_o.set(n,r=[]),r.push(t)}}function z_(t,e,n=De){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=K=>s?K:xt(K)||s===!1||s===0?vn(K,1):vn(K);let d,m,v,S,N=!1,L=!1;if(ht(t)?(m=()=>t.value,N=xt(t)):Zr(t)?(m=()=>h(t),N=!0):ee(t)?(L=!0,N=t.some(K=>Zr(K)||xt(K)),m=()=>t.map(K=>{if(ht(K))return K.value;if(Zr(K))return h(K);if(he(K))return c?c(K,2):K()})):he(t)?e?m=c?()=>c(t,2):t:m=()=>{if(v){In();try{v()}finally{wn()}}const K=Er;Er=d;try{return c?c(t,3,[S]):t(S)}finally{Er=K}}:m=Yt,e&&s){const K=m,oe=s===!0?1/0:s;m=()=>vn(K(),oe)}const x=__(),$=()=>{d.stop(),x&&x.active&&Xl(x.effects,d)};if(i&&e){const K=e;e=(...oe)=>{K(...oe),$()}}let W=L?new Array(t.length).fill(Ki):Ki;const J=K=>{if(!(!(d.flags&1)||!d.dirty&&!K))if(e){const oe=d.run();if(s||N||(L?oe.some((re,b)=>Gn(re,W[b])):Gn(oe,W))){v&&v();const re=Er;Er=d;try{const b=[oe,W===Ki?void 0:L&&W[0]===Ki?[]:W,S];W=oe,c?c(e,3,b):e(...b)}finally{Er=re}}}else d.run()};return l&&l(J),d=new hd(m),d.scheduler=a?()=>a(J,!1):J,S=K=>H_(K,!1,d),v=d.onStop=()=>{const K=_o.get(d);if(K){if(c)c(K,4);else for(const oe of K)oe();_o.delete(d)}},e?r?J(!0):W=d.run():a?a(J.bind(null,!0),!0):d.run(),$.pause=d.pause.bind(d),$.resume=d.resume.bind(d),$.stop=$,$}function vn(t,e=1/0,n){if(e<=0||!Ce(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ht(t))vn(t.value,e,n);else if(ee(t))for(let r=0;r<t.length;r++)vn(t[r],e,n);else if(Go(t)||Yr(t))t.forEach(r=>{vn(r,e,n)});else if(sd(t)){for(const r in t)vn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&vn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wi(t,e,n,r){try{return r?t(...r):t()}catch(s){Zo(s,e,n)}}function $t(t,e,n,r){if(he(t)){const s=wi(t,e,n,r);return s&&nd(s)&&s.catch(i=>{Zo(i,e,n)}),s}if(ee(t)){const s=[];for(let i=0;i<t.length;i++)s.push($t(t[i],e,n,r));return s}}function Zo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||De;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let m=0;m<d.length;m++)if(d[m](t,c,h)===!1)return}l=l.parent}if(i){In(),wi(i,null,10,[t,c,h]),wn();return}}W_(t,n,s,r,a)}function W_(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const _t=[];let Qt=-1;const es=[];let Bn=null,qr=0;const Sd=Promise.resolve();let yo=null;function K_(t){const e=yo||Sd;return t?e.then(this?t.bind(this):t):e}function G_(t){let e=Qt+1,n=_t.length;for(;e<n;){const r=e+n>>>1,s=_t[r],i=ai(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function lc(t){if(!(t.flags&1)){const e=ai(t),n=_t[_t.length-1];!n||!(t.flags&2)&&e>=ai(n)?_t.push(t):_t.splice(G_(e),0,t),t.flags|=1,Rd()}}function Rd(){yo||(yo=Sd.then(Pd))}function Q_(t){ee(t)?es.push(...t):Bn&&t.id===-1?Bn.splice(qr+1,0,t):t.flags&1||(es.push(t),t.flags|=1),Rd()}function Gu(t,e,n=Qt+1){for(;n<_t.length;n++){const r=_t[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;_t.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Cd(t){if(es.length){const e=[...new Set(es)].sort((n,r)=>ai(n)-ai(r));if(es.length=0,Bn){Bn.push(...e);return}for(Bn=e,qr=0;qr<Bn.length;qr++){const n=Bn[qr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Bn=null,qr=0}}const ai=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Pd(t){try{for(Qt=0;Qt<_t.length;Qt++){const e=_t[Qt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qt<_t.length;Qt++){const e=_t[Qt];e&&(e.flags&=-2)}Qt=-1,_t.length=0,Cd(),yo=null,(_t.length||es.length)&&Pd()}}let Nt=null,Dd=null;function vo(t){const e=Nt;return Nt=t,Dd=t&&t.type.__scopeId||null,e}function kd(t,e=Nt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Io(-1);const i=vo(e);let a;try{a=t(...s)}finally{vo(i),r._d&&Io(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ha(t,e){if(Nt===null)return t;const n=ia(Nt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=De]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&vn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function gr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(In(),$t(c,n,8,[t.el,l,t,e]),wn())}}const J_=Symbol("_vte"),Vd=t=>t.__isTeleport,_n=Symbol("_leaveCb"),Gi=Symbol("_enterCb");function X_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return na(()=>{t.isMounted=!0}),jd(()=>{t.isUnmounting=!0}),t}const Dt=[Function,Array],Nd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Dt,onEnter:Dt,onAfterEnter:Dt,onEnterCancelled:Dt,onBeforeLeave:Dt,onLeave:Dt,onAfterLeave:Dt,onLeaveCancelled:Dt,onBeforeAppear:Dt,onAppear:Dt,onAfterAppear:Dt,onAppearCancelled:Dt},xd=t=>{const e=t.subTree;return e.component?xd(e.component):e},Y_={name:"BaseTransition",props:Nd,setup(t,{slots:e}){const n=ap(),r=X_();return()=>{const s=e.default&&Ld(e.default(),!0);if(!s||!s.length)return;const i=Od(s),a=we(t),{mode:l}=a;if(r.isLeaving)return za(i);const c=Qu(i);if(!c)return za(i);let h=yl(c,a,r,n,m=>h=m);c.type!==yt&&li(c,h);let d=n.subTree&&Qu(n.subTree);if(d&&d.type!==yt&&!Ir(d,c)&&xd(n).type!==yt){let m=yl(d,a,r,n);if(li(d,m),l==="out-in"&&c.type!==yt)return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete m.afterLeave,d=void 0},za(i);l==="in-out"&&c.type!==yt?m.delayLeave=(v,S,N)=>{const L=Md(r,d);L[String(d.key)]=d,v[_n]=()=>{S(),v[_n]=void 0,delete h.delayedLeave,d=void 0},h.delayedLeave=()=>{N(),delete h.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function Od(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==yt){e=n;break}}return e}const Z_=Y_;function Md(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function yl(t,e,n,r,s){const{appear:i,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:d,onEnterCancelled:m,onBeforeLeave:v,onLeave:S,onAfterLeave:N,onLeaveCancelled:L,onBeforeAppear:x,onAppear:$,onAfterAppear:W,onAppearCancelled:J}=e,K=String(t.key),oe=Md(n,t),re=(y,w)=>{y&&$t(y,r,9,w)},b=(y,w)=>{const A=w[1];re(y,w),ee(y)?y.every(I=>I.length<=1)&&A():y.length<=1&&A()},E={mode:a,persisted:l,beforeEnter(y){let w=c;if(!n.isMounted)if(i)w=x||c;else return;y[_n]&&y[_n](!0);const A=oe[K];A&&Ir(t,A)&&A.el[_n]&&A.el[_n](),re(w,[y])},enter(y){let w=h,A=d,I=m;if(!n.isMounted)if(i)w=$||h,A=W||d,I=J||m;else return;let T=!1;const ve=y[Gi]=qe=>{T||(T=!0,qe?re(I,[y]):re(A,[y]),E.delayedLeave&&E.delayedLeave(),y[Gi]=void 0)};w?b(w,[y,ve]):ve()},leave(y,w){const A=String(t.key);if(y[Gi]&&y[Gi](!0),n.isUnmounting)return w();re(v,[y]);let I=!1;const T=y[_n]=ve=>{I||(I=!0,w(),ve?re(L,[y]):re(N,[y]),y[_n]=void 0,oe[A]===t&&delete oe[A])};oe[A]=t,S?b(S,[y,T]):T()},clone(y){const w=yl(y,e,n,r,s);return s&&s(w),w}};return E}function za(t){if(ea(t))return t=rr(t),t.children=null,t}function Qu(t){if(!ea(t))return Vd(t.type)&&t.children?Od(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&he(n.default))return n.default()}}function li(t,e){t.shapeFlag&6&&t.component?(t.transition=e,li(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ld(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let a=t[i];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===Be?(a.patchFlag&128&&s++,r=r.concat(Ld(a.children,e,l))):(e||a.type!==yt)&&r.push(l!=null?rr(a,{key:l}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Fd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Eo=new WeakMap;function Gs(t,e,n,r,s=!1){if(ee(t)){t.forEach((N,L)=>Gs(N,e&&(ee(e)?e[L]:e),n,r,s));return}if(Qs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Gs(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ia(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===De?l.refs={}:l.refs,m=l.setupState,v=we(m),S=m===De?td:N=>Ae(v,N);if(h!=null&&h!==c){if(Ju(e),Ue(h))d[h]=null,S(h)&&(m[h]=null);else if(ht(h)){h.value=null;const N=e;N.k&&(d[N.k]=null)}}if(he(c))wi(c,l,12,[a,d]);else{const N=Ue(c),L=ht(c);if(N||L){const x=()=>{if(t.f){const $=N?S(c)?m[c]:d[c]:c.value;if(s)ee($)&&Xl($,i);else if(ee($))$.includes(i)||$.push(i);else if(N)d[c]=[i],S(c)&&(m[c]=d[c]);else{const W=[i];c.value=W,t.k&&(d[t.k]=W)}}else N?(d[c]=a,S(c)&&(m[c]=a)):L&&(c.value=a,t.k&&(d[t.k]=a))};if(a){const $=()=>{x(),Eo.delete(t)};$.id=-1,Eo.set(t,$),Rt($,n)}else Ju(t),x()}}}function Ju(t){const e=Eo.get(t);e&&(e.flags|=8,Eo.delete(t))}Jo().requestIdleCallback;Jo().cancelIdleCallback;const Qs=t=>!!t.type.__asyncLoader,ea=t=>t.type.__isKeepAlive;function ey(t,e){Ud(t,"a",e)}function ty(t,e){Ud(t,"da",e)}function Ud(t,e,n=vt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ta(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ea(s.parent.vnode)&&ny(r,e,n,s),s=s.parent}}function ny(t,e,n,r){const s=ta(e,t,r,!0);cc(()=>{Xl(r[e],s)},n)}function ta(t,e,n=vt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{In();const l=Ai(n),c=$t(e,n,t,a);return l(),wn(),c});return r?s.unshift(i):s.push(i),i}}const Pn=t=>(e,n=vt)=>{(!ui||t==="sp")&&ta(t,(...r)=>e(...r),n)},ry=Pn("bm"),na=Pn("m"),sy=Pn("bu"),iy=Pn("u"),jd=Pn("bum"),cc=Pn("um"),oy=Pn("sp"),ay=Pn("rtg"),ly=Pn("rtc");function cy(t,e=vt){ta("ec",t,e)}const uy=Symbol.for("v-ndc");function mn(t,e,n,r){let s;const i=n,a=ee(t);if(a||Ue(t)){const l=a&&Zr(t);let c=!1,h=!1;l&&(c=!xt(t),h=nr(t),t=Yo(t)),s=new Array(t.length);for(let d=0,m=t.length;d<m;d++)s[d]=e(c?h?go(et(t[d])):et(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const vl=t=>t?lp(t)?ia(t):vl(t.parent):null,Js=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vl(t.parent),$root:t=>vl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>$d(t),$forceUpdate:t=>t.f||(t.f=()=>{lc(t.update)}),$nextTick:t=>t.n||(t.n=K_.bind(t.proxy)),$watch:t=>Vy.bind(t)}),Wa=(t,e)=>t!==De&&!t.__isScriptSetup&&Ae(t,e),hy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const S=a[e];if(S!==void 0)switch(S){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Wa(r,e))return a[e]=1,r[e];if(s!==De&&Ae(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Ae(h,e))return a[e]=3,i[e];if(n!==De&&Ae(n,e))return a[e]=4,n[e];El&&(a[e]=0)}}const d=Js[e];let m,v;if(d)return e==="$attrs"&&ct(t.attrs,"get",""),d(t);if((m=l.__cssModules)&&(m=m[e]))return m;if(n!==De&&Ae(n,e))return a[e]=4,n[e];if(v=c.config.globalProperties,Ae(v,e))return v[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Wa(s,e)?(s[e]=n,!0):r!==De&&Ae(r,e)?(r[e]=n,!0):Ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:a}},l){let c,h;return!!(n[l]||t!==De&&l[0]!=="$"&&Ae(t,l)||Wa(e,l)||(c=i[0])&&Ae(c,l)||Ae(r,l)||Ae(Js,l)||Ae(s.config.globalProperties,l)||(h=a.__cssModules)&&h[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Xu(t){return ee(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let El=!0;function fy(t){const e=$d(t),n=t.proxy,r=t.ctx;El=!1,e.beforeCreate&&Yu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:m,mounted:v,beforeUpdate:S,updated:N,activated:L,deactivated:x,beforeDestroy:$,beforeUnmount:W,destroyed:J,unmounted:K,render:oe,renderTracked:re,renderTriggered:b,errorCaptured:E,serverPrefetch:y,expose:w,inheritAttrs:A,components:I,directives:T,filters:ve}=e;if(h&&dy(h,r,null),a)for(const Ie in a){const Ee=a[Ie];he(Ee)&&(r[Ie]=Ee.bind(n))}if(s){const Ie=s.call(n,n);Ce(Ie)&&(t.data=ic(Ie))}if(El=!0,i)for(const Ie in i){const Ee=i[Ie],dt=he(Ee)?Ee.bind(n,n):he(Ee.get)?Ee.get.bind(n,n):Yt,hn=!he(Ee)&&he(Ee.set)?Ee.set.bind(n):Yt,Et=js({get:dt,set:hn});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>Et.value,set:st=>Et.value=st})}if(l)for(const Ie in l)Bd(l[Ie],r,n,Ie);if(c){const Ie=he(c)?c.call(n):c;Reflect.ownKeys(Ie).forEach(Ee=>{vy(Ee,Ie[Ee])})}d&&Yu(d,t,"c");function Me(Ie,Ee){ee(Ee)?Ee.forEach(dt=>Ie(dt.bind(n))):Ee&&Ie(Ee.bind(n))}if(Me(ry,m),Me(na,v),Me(sy,S),Me(iy,N),Me(ey,L),Me(ty,x),Me(cy,E),Me(ly,re),Me(ay,b),Me(jd,W),Me(cc,K),Me(oy,y),ee(w))if(w.length){const Ie=t.exposed||(t.exposed={});w.forEach(Ee=>{Object.defineProperty(Ie,Ee,{get:()=>n[Ee],set:dt=>n[Ee]=dt,enumerable:!0})})}else t.exposed||(t.exposed={});oe&&t.render===Yt&&(t.render=oe),A!=null&&(t.inheritAttrs=A),I&&(t.components=I),T&&(t.directives=T),y&&Fd(t)}function dy(t,e,n=Yt){ee(t)&&(t=Tl(t));for(const r in t){const s=t[r];let i;Ce(s)?"default"in s?i=no(s.from||r,s.default,!0):i=no(s.from||r):i=no(s),ht(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Yu(t,e,n){$t(ee(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Bd(t,e,n,r){let s=r.includes(".")?tp(n,r):()=>n[r];if(Ue(t)){const i=e[t];he(i)&&Ga(s,i)}else if(he(t))Ga(s,t.bind(n));else if(Ce(t))if(ee(t))t.forEach(i=>Bd(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&Ga(s,i,t)}}function $d(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>To(c,h,a,!0)),To(c,e,a)),Ce(e)&&i.set(e,c),c}function To(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&To(t,i,n,!0),s&&s.forEach(a=>To(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=py[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const py={data:Zu,props:eh,emits:eh,methods:Us,computed:Us,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Us,directives:Us,watch:gy,provide:Zu,inject:my};function Zu(t,e){return e?t?function(){return nt(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function my(t,e){return Us(Tl(t),Tl(e))}function Tl(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Us(t,e){return t?nt(Object.create(null),t,e):e}function eh(t,e){return t?ee(t)&&ee(e)?[...new Set([...t,...e])]:nt(Object.create(null),Xu(t),Xu(e??{})):e}function gy(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function qd(){return{app:null,config:{isNativeTag:td,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _y=0;function yy(t,e){return function(r,s=null){he(r)||(r=nt({},r)),s!=null&&!Ce(s)&&(s=null);const i=qd(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:_y++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ev,get config(){return i.config},set config(d){},use(d,...m){return a.has(d)||(d&&he(d.install)?(a.add(d),d.install(h,...m)):he(d)&&(a.add(d),d(h,...m))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,m){return m?(i.components[d]=m,h):i.components[d]},directive(d,m){return m?(i.directives[d]=m,h):i.directives[d]},mount(d,m,v){if(!c){const S=h._ceVNode||wt(r,s);return S.appContext=i,v===!0?v="svg":v===!1&&(v=void 0),t(S,d,v),c=!0,h._container=d,d.__vue_app__=h,ia(S.component)}},onUnmount(d){l.push(d)},unmount(){c&&($t(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,m){return i.provides[d]=m,h},runWithContext(d){const m=ts;ts=h;try{return d()}finally{ts=m}}};return h}}let ts=null;function vy(t,e){if(vt){let n=vt.provides;const r=vt.parent&&vt.parent.provides;r===n&&(n=vt.provides=Object.create(r)),n[t]=e}}function no(t,e,n=!1){const r=ap();if(r||ts){let s=ts?ts._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}const Hd={},zd=()=>Object.create(Hd),Wd=t=>Object.getPrototypeOf(t)===Hd;function Ey(t,e,n,r=!1){const s={},i=zd();t.propsDefaults=Object.create(null),Kd(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:M_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ty(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=we(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(ra(t.emitsOptions,v))continue;const S=e[v];if(c)if(Ae(i,v))S!==i[v]&&(i[v]=S,h=!0);else{const N=tr(v);s[N]=Il(c,l,N,S,t,!1)}else S!==i[v]&&(i[v]=S,h=!0)}}}else{Kd(t,e,s,i)&&(h=!0);let d;for(const m in l)(!e||!Ae(e,m)&&((d=Vr(m))===m||!Ae(e,d)))&&(c?n&&(n[m]!==void 0||n[d]!==void 0)&&(s[m]=Il(c,l,m,void 0,t,!0)):delete s[m]);if(i!==l)for(const m in i)(!e||!Ae(e,m))&&(delete i[m],h=!0)}h&&yn(t.attrs,"set","")}function Kd(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(zs(c))continue;const h=e[c];let d;s&&Ae(s,d=tr(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:ra(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=we(n),h=l||De;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Il(s,c,m,h[m],t,!Ae(h,m))}}return a}function Il(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Ae(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&he(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Ai(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Vr(n))&&(r=!0))}return r}const Iy=new WeakMap;function Gd(t,e,n=!1){const r=n?Iy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!he(t)){const d=m=>{c=!0;const[v,S]=Gd(m,e,!0);nt(a,v),S&&l.push(...S)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Ce(t)&&r.set(t,Xr),Xr;if(ee(i))for(let d=0;d<i.length;d++){const m=tr(i[d]);th(m)&&(a[m]=De)}else if(i)for(const d in i){const m=tr(d);if(th(m)){const v=i[d],S=a[m]=ee(v)||he(v)?{type:v}:nt({},v),N=S.type;let L=!1,x=!0;if(ee(N))for(let $=0;$<N.length;++$){const W=N[$],J=he(W)&&W.name;if(J==="Boolean"){L=!0;break}else J==="String"&&(x=!1)}else L=he(N)&&N.name==="Boolean";S[0]=L,S[1]=x,(L||Ae(S,"default"))&&l.push(m)}}const h=[a,l];return Ce(t)&&r.set(t,h),h}function th(t){return t[0]!=="$"&&!zs(t)}const uc=t=>t==="_"||t==="_ctx"||t==="$stable",hc=t=>ee(t)?t.map(Xt):[Xt(t)],wy=(t,e,n)=>{if(e._n)return e;const r=kd((...s)=>hc(e(...s)),n);return r._c=!1,r},Qd=(t,e,n)=>{const r=t._ctx;for(const s in t){if(uc(s))continue;const i=t[s];if(he(i))e[s]=wy(s,i,r);else if(i!=null){const a=hc(i);e[s]=()=>a}}},Jd=(t,e)=>{const n=hc(e);t.slots.default=()=>n},Xd=(t,e,n)=>{for(const r in e)(n||!uc(r))&&(t[r]=e[r])},Ay=(t,e,n)=>{const r=t.slots=zd();if(t.vnode.shapeFlag&32){const s=e._;s?(Xd(r,e,n),n&&od(r,"_",s,!0)):Qd(e,r)}else e&&Jd(t,e)},by=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=De;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Xd(s,e,n):(i=!e.$stable,Qd(e,s)),a=e}else e&&(Jd(t,e),a={default:1});if(i)for(const l in s)!uc(l)&&a[l]==null&&delete s[l]},Rt=jy;function Sy(t){return Ry(t)}function Ry(t,e){const n=Jo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:m,nextSibling:v,setScopeId:S=Yt,insertStaticContent:N}=t,L=(p,_,C,D=null,k=null,V=null,H=void 0,U=null,j=!!_.dynamicChildren)=>{if(p===_)return;p&&!Ir(p,_)&&(D=Ot(p),st(p,k,V,!0),p=null),_.patchFlag===-2&&(j=!1,_.dynamicChildren=null);const{type:B,ref:Z,shapeFlag:z}=_;switch(B){case sa:x(p,_,C,D);break;case yt:$(p,_,C,D);break;case Qa:p==null&&W(_,C,D,H);break;case Be:I(p,_,C,D,k,V,H,U,j);break;default:z&1?oe(p,_,C,D,k,V,H,U,j):z&6?T(p,_,C,D,k,V,H,U,j):(z&64||z&128)&&B.process(p,_,C,D,k,V,H,U,j,zt)}Z!=null&&k?Gs(Z,p&&p.ref,V,_||p,!_):Z==null&&p&&p.ref!=null&&Gs(p.ref,null,V,p,!0)},x=(p,_,C,D)=>{if(p==null)r(_.el=l(_.children),C,D);else{const k=_.el=p.el;_.children!==p.children&&h(k,_.children)}},$=(p,_,C,D)=>{p==null?r(_.el=c(_.children||""),C,D):_.el=p.el},W=(p,_,C,D)=>{[p.el,p.anchor]=N(p.children,_,C,D,p.el,p.anchor)},J=({el:p,anchor:_},C,D)=>{let k;for(;p&&p!==_;)k=v(p),r(p,C,D),p=k;r(_,C,D)},K=({el:p,anchor:_})=>{let C;for(;p&&p!==_;)C=v(p),s(p),p=C;s(_)},oe=(p,_,C,D,k,V,H,U,j)=>{_.type==="svg"?H="svg":_.type==="math"&&(H="mathml"),p==null?re(_,C,D,k,V,H,U,j):y(p,_,k,V,H,U,j)},re=(p,_,C,D,k,V,H,U)=>{let j,B;const{props:Z,shapeFlag:z,transition:Y,dirs:ne}=p;if(j=p.el=a(p.type,V,Z&&Z.is,Z),z&8?d(j,p.children):z&16&&E(p.children,j,null,D,k,Ka(p,V),H,U),ne&&gr(p,null,D,"created"),b(j,p,p.scopeId,H,D),Z){for(const Se in Z)Se!=="value"&&!zs(Se)&&i(j,Se,null,Z[Se],V,D);"value"in Z&&i(j,"value",null,Z.value,V),(B=Z.onVnodeBeforeMount)&&Gt(B,D,p)}ne&&gr(p,null,D,"beforeMount");const pe=Cy(k,Y);pe&&Y.beforeEnter(j),r(j,_,C),((B=Z&&Z.onVnodeMounted)||pe||ne)&&Rt(()=>{B&&Gt(B,D,p),pe&&Y.enter(j),ne&&gr(p,null,D,"mounted")},k)},b=(p,_,C,D,k)=>{if(C&&S(p,C),D)for(let V=0;V<D.length;V++)S(p,D[V]);if(k){let V=k.subTree;if(_===V||rp(V.type)&&(V.ssContent===_||V.ssFallback===_)){const H=k.vnode;b(p,H,H.scopeId,H.slotScopeIds,k.parent)}}},E=(p,_,C,D,k,V,H,U,j=0)=>{for(let B=j;B<p.length;B++){const Z=p[B]=U?$n(p[B]):Xt(p[B]);L(null,Z,_,C,D,k,V,H,U)}},y=(p,_,C,D,k,V,H)=>{const U=_.el=p.el;let{patchFlag:j,dynamicChildren:B,dirs:Z}=_;j|=p.patchFlag&16;const z=p.props||De,Y=_.props||De;let ne;if(C&&_r(C,!1),(ne=Y.onVnodeBeforeUpdate)&&Gt(ne,C,_,p),Z&&gr(_,p,C,"beforeUpdate"),C&&_r(C,!0),(z.innerHTML&&Y.innerHTML==null||z.textContent&&Y.textContent==null)&&d(U,""),B?w(p.dynamicChildren,B,U,C,D,Ka(_,k),V):H||Ee(p,_,U,null,C,D,Ka(_,k),V,!1),j>0){if(j&16)A(U,z,Y,C,k);else if(j&2&&z.class!==Y.class&&i(U,"class",null,Y.class,k),j&4&&i(U,"style",z.style,Y.style,k),j&8){const pe=_.dynamicProps;for(let Se=0;Se<pe.length;Se++){const Te=pe[Se],it=z[Te],ot=Y[Te];(ot!==it||Te==="value")&&i(U,Te,it,ot,k,C)}}j&1&&p.children!==_.children&&d(U,_.children)}else!H&&B==null&&A(U,z,Y,C,k);((ne=Y.onVnodeUpdated)||Z)&&Rt(()=>{ne&&Gt(ne,C,_,p),Z&&gr(_,p,C,"updated")},D)},w=(p,_,C,D,k,V,H)=>{for(let U=0;U<_.length;U++){const j=p[U],B=_[U],Z=j.el&&(j.type===Be||!Ir(j,B)||j.shapeFlag&198)?m(j.el):C;L(j,B,Z,null,D,k,V,H,!0)}},A=(p,_,C,D,k)=>{if(_!==C){if(_!==De)for(const V in _)!zs(V)&&!(V in C)&&i(p,V,_[V],null,k,D);for(const V in C){if(zs(V))continue;const H=C[V],U=_[V];H!==U&&V!=="value"&&i(p,V,U,H,k,D)}"value"in C&&i(p,"value",_.value,C.value,k)}},I=(p,_,C,D,k,V,H,U,j)=>{const B=_.el=p?p.el:l(""),Z=_.anchor=p?p.anchor:l("");let{patchFlag:z,dynamicChildren:Y,slotScopeIds:ne}=_;ne&&(U=U?U.concat(ne):ne),p==null?(r(B,C,D),r(Z,C,D),E(_.children||[],C,Z,k,V,H,U,j)):z>0&&z&64&&Y&&p.dynamicChildren?(w(p.dynamicChildren,Y,C,k,V,H,U),(_.key!=null||k&&_===k.subTree)&&Yd(p,_,!0)):Ee(p,_,C,Z,k,V,H,U,j)},T=(p,_,C,D,k,V,H,U,j)=>{_.slotScopeIds=U,p==null?_.shapeFlag&512?k.ctx.activate(_,C,D,H,j):ve(_,C,D,k,V,H,j):qe(p,_,j)},ve=(p,_,C,D,k,V,H)=>{const U=p.component=Ky(p,D,k);if(ea(p)&&(U.ctx.renderer=zt),Gy(U,!1,H),U.asyncDep){if(k&&k.registerDep(U,Me,H),!p.el){const j=U.subTree=wt(yt);$(null,j,_,C),p.placeholder=j.el}}else Me(U,p,_,C,k,V,H)},qe=(p,_,C)=>{const D=_.component=p.component;if(Fy(p,_,C))if(D.asyncDep&&!D.asyncResolved){Ie(D,_,C);return}else D.next=_,D.update();else _.el=p.el,D.vnode=_},Me=(p,_,C,D,k,V,H)=>{const U=()=>{if(p.isMounted){let{next:z,bu:Y,u:ne,parent:pe,vnode:Se}=p;{const bt=Zd(p);if(bt){z&&(z.el=Se.el,Ie(p,z,H)),bt.asyncDep.then(()=>{p.isUnmounted||U()});return}}let Te=z,it;_r(p,!1),z?(z.el=Se.el,Ie(p,z,H)):z=Se,Y&&to(Y),(it=z.props&&z.props.onVnodeBeforeUpdate)&&Gt(it,pe,z,Se),_r(p,!0);const ot=rh(p),At=p.subTree;p.subTree=ot,L(At,ot,m(At.el),Ot(At),p,k,V),z.el=ot.el,Te===null&&Uy(p,ot.el),ne&&Rt(ne,k),(it=z.props&&z.props.onVnodeUpdated)&&Rt(()=>Gt(it,pe,z,Se),k)}else{let z;const{el:Y,props:ne}=_,{bm:pe,m:Se,parent:Te,root:it,type:ot}=p,At=Qs(_);_r(p,!1),pe&&to(pe),!At&&(z=ne&&ne.onVnodeBeforeMount)&&Gt(z,Te,_),_r(p,!0);{it.ce&&it.ce._def.shadowRoot!==!1&&it.ce._injectChildStyle(ot);const bt=p.subTree=rh(p);L(null,bt,C,D,p,k,V),_.el=bt.el}if(Se&&Rt(Se,k),!At&&(z=ne&&ne.onVnodeMounted)){const bt=_;Rt(()=>Gt(z,Te,bt),k)}(_.shapeFlag&256||Te&&Qs(Te.vnode)&&Te.vnode.shapeFlag&256)&&p.a&&Rt(p.a,k),p.isMounted=!0,_=C=D=null}};p.scope.on();const j=p.effect=new hd(U);p.scope.off();const B=p.update=j.run.bind(j),Z=p.job=j.runIfDirty.bind(j);Z.i=p,Z.id=p.uid,j.scheduler=()=>lc(Z),_r(p,!0),B()},Ie=(p,_,C)=>{_.component=p;const D=p.vnode.props;p.vnode=_,p.next=null,Ty(p,_.props,D,C),by(p,_.children,C),In(),Gu(p),wn()},Ee=(p,_,C,D,k,V,H,U,j=!1)=>{const B=p&&p.children,Z=p?p.shapeFlag:0,z=_.children,{patchFlag:Y,shapeFlag:ne}=_;if(Y>0){if(Y&128){hn(B,z,C,D,k,V,H,U,j);return}else if(Y&256){dt(B,z,C,D,k,V,H,U,j);return}}ne&8?(Z&16&&Pt(B,k,V),z!==B&&d(C,z)):Z&16?ne&16?hn(B,z,C,D,k,V,H,U,j):Pt(B,k,V,!0):(Z&8&&d(C,""),ne&16&&E(z,C,D,k,V,H,U,j))},dt=(p,_,C,D,k,V,H,U,j)=>{p=p||Xr,_=_||Xr;const B=p.length,Z=_.length,z=Math.min(B,Z);let Y;for(Y=0;Y<z;Y++){const ne=_[Y]=j?$n(_[Y]):Xt(_[Y]);L(p[Y],ne,C,null,k,V,H,U,j)}B>Z?Pt(p,k,V,!0,!1,z):E(_,C,D,k,V,H,U,j,z)},hn=(p,_,C,D,k,V,H,U,j)=>{let B=0;const Z=_.length;let z=p.length-1,Y=Z-1;for(;B<=z&&B<=Y;){const ne=p[B],pe=_[B]=j?$n(_[B]):Xt(_[B]);if(Ir(ne,pe))L(ne,pe,C,null,k,V,H,U,j);else break;B++}for(;B<=z&&B<=Y;){const ne=p[z],pe=_[Y]=j?$n(_[Y]):Xt(_[Y]);if(Ir(ne,pe))L(ne,pe,C,null,k,V,H,U,j);else break;z--,Y--}if(B>z){if(B<=Y){const ne=Y+1,pe=ne<Z?_[ne].el:D;for(;B<=Y;)L(null,_[B]=j?$n(_[B]):Xt(_[B]),C,pe,k,V,H,U,j),B++}}else if(B>Y)for(;B<=z;)st(p[B],k,V,!0),B++;else{const ne=B,pe=B,Se=new Map;for(B=pe;B<=Y;B++){const Xe=_[B]=j?$n(_[B]):Xt(_[B]);Xe.key!=null&&Se.set(Xe.key,B)}let Te,it=0;const ot=Y-pe+1;let At=!1,bt=0;const Mt=new Array(ot);for(B=0;B<ot;B++)Mt[B]=0;for(B=ne;B<=z;B++){const Xe=p[B];if(it>=ot){st(Xe,k,V,!0);continue}let Ke;if(Xe.key!=null)Ke=Se.get(Xe.key);else for(Te=pe;Te<=Y;Te++)if(Mt[Te-pe]===0&&Ir(Xe,_[Te])){Ke=Te;break}Ke===void 0?st(Xe,k,V,!0):(Mt[Ke-pe]=B+1,Ke>=bt?bt=Ke:At=!0,L(Xe,_[Ke],C,null,k,V,H,U,j),it++)}const Lr=At?Py(Mt):Xr;for(Te=Lr.length-1,B=ot-1;B>=0;B--){const Xe=pe+B,Ke=_[Xe],Is=_[Xe+1],hr=Xe+1<Z?Is.el||Is.placeholder:D;Mt[B]===0?L(null,Ke,C,hr,k,V,H,U,j):At&&(Te<0||B!==Lr[Te]?Et(Ke,C,hr,2):Te--)}}},Et=(p,_,C,D,k=null)=>{const{el:V,type:H,transition:U,children:j,shapeFlag:B}=p;if(B&6){Et(p.component.subTree,_,C,D);return}if(B&128){p.suspense.move(_,C,D);return}if(B&64){H.move(p,_,C,zt);return}if(H===Be){r(V,_,C);for(let z=0;z<j.length;z++)Et(j[z],_,C,D);r(p.anchor,_,C);return}if(H===Qa){J(p,_,C);return}if(D!==2&&B&1&&U)if(D===0)U.beforeEnter(V),r(V,_,C),Rt(()=>U.enter(V),k);else{const{leave:z,delayLeave:Y,afterLeave:ne}=U,pe=()=>{p.ctx.isUnmounted?s(V):r(V,_,C)},Se=()=>{V._isLeaving&&V[_n](!0),z(V,()=>{pe(),ne&&ne()})};Y?Y(V,pe,Se):Se()}else r(V,_,C)},st=(p,_,C,D=!1,k=!1)=>{const{type:V,props:H,ref:U,children:j,dynamicChildren:B,shapeFlag:Z,patchFlag:z,dirs:Y,cacheIndex:ne}=p;if(z===-2&&(k=!1),U!=null&&(In(),Gs(U,null,C,p,!0),wn()),ne!=null&&(_.renderCache[ne]=void 0),Z&256){_.ctx.deactivate(p);return}const pe=Z&1&&Y,Se=!Qs(p);let Te;if(Se&&(Te=H&&H.onVnodeBeforeUnmount)&&Gt(Te,_,p),Z&6)qt(p.component,C,D);else{if(Z&128){p.suspense.unmount(C,D);return}pe&&gr(p,null,_,"beforeUnmount"),Z&64?p.type.remove(p,_,C,zt,D):B&&!B.hasOnce&&(V!==Be||z>0&&z&64)?Pt(B,_,C,!1,!0):(V===Be&&z&384||!k&&Z&16)&&Pt(j,_,C),D&&kn(p)}(Se&&(Te=H&&H.onVnodeUnmounted)||pe)&&Rt(()=>{Te&&Gt(Te,_,p),pe&&gr(p,null,_,"unmounted")},C)},kn=p=>{const{type:_,el:C,anchor:D,transition:k}=p;if(_===Be){fn(C,D);return}if(_===Qa){K(p);return}const V=()=>{s(C),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(p.shapeFlag&1&&k&&!k.persisted){const{leave:H,delayLeave:U}=k,j=()=>H(C,V);U?U(p.el,V,j):j()}else V()},fn=(p,_)=>{let C;for(;p!==_;)C=v(p),s(p),p=C;s(_)},qt=(p,_,C)=>{const{bum:D,scope:k,job:V,subTree:H,um:U,m:j,a:B}=p;nh(j),nh(B),D&&to(D),k.stop(),V&&(V.flags|=8,st(H,p,_,C)),U&&Rt(U,_),Rt(()=>{p.isUnmounted=!0},_)},Pt=(p,_,C,D=!1,k=!1,V=0)=>{for(let H=V;H<p.length;H++)st(p[H],_,C,D,k)},Ot=p=>{if(p.shapeFlag&6)return Ot(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const _=v(p.anchor||p.el),C=_&&_[J_];return C?v(C):_};let Ht=!1;const Vn=(p,_,C)=>{p==null?_._vnode&&st(_._vnode,null,null,!0):L(_._vnode||null,p,_,null,null,null,C),_._vnode=p,Ht||(Ht=!0,Gu(),Cd(),Ht=!1)},zt={p:L,um:st,m:Et,r:kn,mt:ve,mc:E,pc:Ee,pbc:w,n:Ot,o:t};return{render:Vn,hydrate:void 0,createApp:yy(Vn)}}function Ka({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function _r({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Cy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Yd(t,e,n=!1){const r=t.children,s=e.children;if(ee(r)&&ee(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=$n(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Yd(a,l)),l.type===sa&&l.patchFlag!==-1&&(l.el=a.el),l.type===yt&&!l.el&&(l.el=a.el)}}function Py(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Zd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Zd(e)}function nh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Dy=Symbol.for("v-scx"),ky=()=>no(Dy);function Ga(t,e,n){return ep(t,e,n)}function ep(t,e,n=De){const{immediate:r,deep:s,flush:i,once:a}=n,l=nt({},n),c=e&&r||!e&&i!=="post";let h;if(ui){if(i==="sync"){const S=ky();h=S.__watcherHandles||(S.__watcherHandles=[])}else if(!c){const S=()=>{};return S.stop=Yt,S.resume=Yt,S.pause=Yt,S}}const d=vt;l.call=(S,N,L)=>$t(S,d,N,L);let m=!1;i==="post"?l.scheduler=S=>{Rt(S,d&&d.suspense)}:i!=="sync"&&(m=!0,l.scheduler=(S,N)=>{N?S():lc(S)}),l.augmentJob=S=>{e&&(S.flags|=4),m&&(S.flags|=2,d&&(S.id=d.uid,S.i=d))};const v=z_(t,e,l);return ui&&(h?h.push(v):c&&v()),v}function Vy(t,e,n){const r=this.proxy,s=Ue(t)?t.includes(".")?tp(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const a=Ai(this),l=ep(s,i.bind(r),n);return a(),l}function tp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ny=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${tr(e)}Modifiers`]||t[`${Vr(e)}Modifiers`];function xy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),a=i&&Ny(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>Ue(d)?d.trim():d)),a.number&&(s=n.map(fl)));let l,c=r[l=Ua(e)]||r[l=Ua(tr(e))];!c&&i&&(c=r[l=Ua(Vr(e))]),c&&$t(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,$t(h,t,6,s)}}const Oy=new WeakMap;function np(t,e,n=!1){const r=n?Oy:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!he(t)){const c=h=>{const d=np(h,e,!0);d&&(l=!0,nt(a,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ce(t)&&r.set(t,null),null):(ee(i)?i.forEach(c=>a[c]=null):nt(a,i),Ce(t)&&r.set(t,a),a)}function ra(t,e){return!t||!Ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(t,e[0].toLowerCase()+e.slice(1))||Ae(t,Vr(e))||Ae(t,e))}function rh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:m,data:v,setupState:S,ctx:N,inheritAttrs:L}=t,x=vo(t);let $,W;try{if(n.shapeFlag&4){const K=s||r,oe=K;$=Xt(h.call(oe,K,d,m,S,v,N)),W=l}else{const K=e;$=Xt(K.length>1?K(m,{attrs:l,slots:a,emit:c}):K(m,null)),W=e.props?l:My(l)}}catch(K){Xs.length=0,Zo(K,t,1),$=wt(yt)}let J=$;if(W&&L!==!1){const K=Object.keys(W),{shapeFlag:oe}=J;K.length&&oe&7&&(i&&K.some(Jl)&&(W=Ly(W,i)),J=rr(J,W,!1,!0))}return n.dirs&&(J=rr(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&li(J,n.transition),$=J,vo(x),$}const My=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ko(n))&&((e||(e={}))[n]=t[n]);return e},Ly=(t,e)=>{const n={};for(const r in t)(!Jl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Fy(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?sh(r,a,h):!!a;if(c&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(a[v]!==r[v]&&!ra(h,v))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?sh(r,a,h):!0:!!a;return!1}function sh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ra(n,i))return!0}return!1}function Uy({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const rp=t=>t.__isSuspense;function jy(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):Q_(t)}const Be=Symbol.for("v-fgt"),sa=Symbol.for("v-txt"),yt=Symbol.for("v-cmt"),Qa=Symbol.for("v-stc"),Xs=[];let Ct=null;function ae(t=!1){Xs.push(Ct=t?null:[])}function By(){Xs.pop(),Ct=Xs[Xs.length-1]||null}let ci=1;function Io(t,e=!1){ci+=t,t<0&&Ct&&e&&(Ct.hasOnce=!0)}function sp(t){return t.dynamicChildren=ci>0?Ct||Xr:null,By(),ci>0&&Ct&&Ct.push(t),t}function ue(t,e,n,r,s,i){return sp(M(t,e,n,r,s,i,!0))}function ip(t,e,n,r,s){return sp(wt(t,e,n,r,s,!0))}function wo(t){return t?t.__v_isVNode===!0:!1}function Ir(t,e){return t.type===e.type&&t.key===e.key}const op=({key:t})=>t??null,ro=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||ht(t)||he(t)?{i:Nt,r:t,k:e,f:!!n}:t:null);function M(t,e=null,n=null,r=0,s=null,i=t===Be?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&op(e),ref:e&&ro(e),scopeId:Dd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Nt};return l?(fc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ue(n)?8:16),ci>0&&!a&&Ct&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ct.push(c),c}const wt=$y;function $y(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===uy)&&(t=yt),wo(t)){const l=rr(t,e,!0);return n&&fc(l,n),ci>0&&!i&&Ct&&(l.shapeFlag&6?Ct[Ct.indexOf(t)]=l:Ct.push(l)),l.patchFlag=-2,l}if(Yy(t)&&(t=t.__vccOpts),e){e=qy(e);let{class:l,style:c}=e;l&&!Ue(l)&&(e.class=gt(l)),Ce(c)&&(ac(c)&&!ee(c)&&(c=nt({},c)),e.style=Zl(c))}const a=Ue(t)?1:rp(t)?128:Vd(t)?64:Ce(t)?4:he(t)?2:0;return M(t,e,n,r,s,a,i,!0)}function qy(t){return t?ac(t)||Wd(t)?nt({},t):t:null}function rr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?Hy(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&op(h),ref:e&&e.ref?n&&i?ee(i)?i.concat(ro(e)):[i,ro(e)]:ro(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Be?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rr(t.ssContent),ssFallback:t.ssFallback&&rr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&li(d,c.clone(d)),d}function Ye(t=" ",e=0){return wt(sa,null,t,e)}function Lt(t="",e=!1){return e?(ae(),ip(yt,null,t)):wt(yt,null,t)}function Xt(t){return t==null||typeof t=="boolean"?wt(yt):ee(t)?wt(Be,null,t.slice()):wo(t)?$n(t):wt(sa,null,String(t))}function $n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:rr(t)}function fc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),fc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Wd(e)?e._ctx=Nt:s===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:Nt},n=32):(e=String(e),r&64?(n=16,e=[Ye(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=gt([e.class,r.class]));else if(s==="style")e.style=Zl([e.style,r.style]);else if(Ko(s)){const i=e[s],a=r[s];a&&i!==a&&!(ee(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Gt(t,e,n,r=null){$t(t,e,7,[n,r])}const zy=qd();let Wy=0;function Ky(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||zy,i={uid:Wy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new g_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gd(r,s),emitsOptions:np(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=xy.bind(null,i),t.ce&&t.ce(i),i}let vt=null;const ap=()=>vt||Nt;let Ao,wl;{const t=Jo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Ao=e("__VUE_INSTANCE_SETTERS__",n=>vt=n),wl=e("__VUE_SSR_SETTERS__",n=>ui=n)}const Ai=t=>{const e=vt;return Ao(t),t.scope.on(),()=>{t.scope.off(),Ao(e)}},ih=()=>{vt&&vt.scope.off(),Ao(null)};function lp(t){return t.vnode.shapeFlag&4}let ui=!1;function Gy(t,e=!1,n=!1){e&&wl(e);const{props:r,children:s}=t.vnode,i=lp(t);Ey(t,r,i,e),Ay(t,s,n||e);const a=i?Qy(t,e):void 0;return e&&wl(!1),a}function Qy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,hy);const{setup:r}=n;if(r){In();const s=t.setupContext=r.length>1?Xy(t):null,i=Ai(t),a=wi(r,t,0,[t.props,s]),l=nd(a);if(wn(),i(),(l||t.sp)&&!Qs(t)&&Fd(t),l){if(a.then(ih,ih),e)return a.then(c=>{oh(t,c)}).catch(c=>{Zo(c,t,0)});t.asyncDep=a}else oh(t,a)}else cp(t)}function oh(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=bd(e)),cp(t)}function cp(t,e,n){const r=t.type;t.render||(t.render=r.render||Yt);{const s=Ai(t);In();try{fy(t)}finally{wn(),s()}}}const Jy={get(t,e){return ct(t,"get",""),t[e]}};function Xy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Jy),slots:t.slots,emit:t.emit,expose:e}}function ia(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(bd(L_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Js)return Js[n](t)},has(e,n){return n in e||n in Js}})):t.proxy}function Yy(t){return he(t)&&"__vccOpts"in t}const js=(t,e)=>q_(t,e,ui);function Zy(t,e,n){try{Io(-1);const r=arguments.length;return r===2?Ce(e)&&!ee(e)?wo(e)?wt(t,null,[e]):wt(t,e):wt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&wo(n)&&(n=[n]),wt(t,e,n))}finally{Io(1)}}const ev="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Al;const ah=typeof window<"u"&&window.trustedTypes;if(ah)try{Al=ah.createPolicy("vue",{createHTML:t=>t})}catch{}const up=Al?t=>Al.createHTML(t):t=>t,tv="http://www.w3.org/2000/svg",nv="http://www.w3.org/1998/Math/MathML",gn=typeof document<"u"?document:null,lh=gn&&gn.createElement("template"),rv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?gn.createElementNS(tv,t):e==="mathml"?gn.createElementNS(nv,t):n?gn.createElement(t,{is:n}):gn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>gn.createTextNode(t),createComment:t=>gn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{lh.innerHTML=up(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=lh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Un="transition",Fs="animation",hi=Symbol("_vtc"),hp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sv=nt({},Nd,hp),iv=t=>(t.displayName="Transition",t.props=sv,t),ov=iv((t,{slots:e})=>Zy(Z_,av(t),e)),yr=(t,e=[])=>{ee(t)?t.forEach(n=>n(...e)):t&&t(...e)},ch=t=>t?ee(t)?t.some(e=>e.length>1):t.length>1:!1;function av(t){const e={};for(const I in t)I in hp||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=a,appearToClass:d=l,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:v=`${n}-leave-active`,leaveToClass:S=`${n}-leave-to`}=t,N=lv(s),L=N&&N[0],x=N&&N[1],{onBeforeEnter:$,onEnter:W,onEnterCancelled:J,onLeave:K,onLeaveCancelled:oe,onBeforeAppear:re=$,onAppear:b=W,onAppearCancelled:E=J}=e,y=(I,T,ve,qe)=>{I._enterCancelled=qe,vr(I,T?d:l),vr(I,T?h:a),ve&&ve()},w=(I,T)=>{I._isLeaving=!1,vr(I,m),vr(I,S),vr(I,v),T&&T()},A=I=>(T,ve)=>{const qe=I?b:W,Me=()=>y(T,I,ve);yr(qe,[T,Me]),uh(()=>{vr(T,I?c:i),pn(T,I?d:l),ch(qe)||hh(T,r,L,Me)})};return nt(e,{onBeforeEnter(I){yr($,[I]),pn(I,i),pn(I,a)},onBeforeAppear(I){yr(re,[I]),pn(I,c),pn(I,h)},onEnter:A(!1),onAppear:A(!0),onLeave(I,T){I._isLeaving=!0;const ve=()=>w(I,T);pn(I,m),I._enterCancelled?(pn(I,v),ph(I)):(ph(I),pn(I,v)),uh(()=>{I._isLeaving&&(vr(I,m),pn(I,S),ch(K)||hh(I,r,x,ve))}),yr(K,[I,ve])},onEnterCancelled(I){y(I,!1,void 0,!0),yr(J,[I])},onAppearCancelled(I){y(I,!0,void 0,!0),yr(E,[I])},onLeaveCancelled(I){w(I),yr(oe,[I])}})}function lv(t){if(t==null)return null;if(Ce(t))return[Ja(t.enter),Ja(t.leave)];{const e=Ja(t);return[e,e]}}function Ja(t){return l_(t)}function pn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[hi]||(t[hi]=new Set)).add(e)}function vr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[hi];n&&(n.delete(e),n.size||(t[hi]=void 0))}function uh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let cv=0;function hh(t,e,n,r){const s=t._endId=++cv,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:l,propCount:c}=uv(t,e);if(!a)return r();const h=a+"end";let d=0;const m=()=>{t.removeEventListener(h,v),i()},v=S=>{S.target===t&&++d>=c&&m()};setTimeout(()=>{d<c&&m()},l+1),t.addEventListener(h,v)}function uv(t,e){const n=window.getComputedStyle(t),r=N=>(n[N]||"").split(", "),s=r(`${Un}Delay`),i=r(`${Un}Duration`),a=fh(s,i),l=r(`${Fs}Delay`),c=r(`${Fs}Duration`),h=fh(l,c);let d=null,m=0,v=0;e===Un?a>0&&(d=Un,m=a,v=i.length):e===Fs?h>0&&(d=Fs,m=h,v=c.length):(m=Math.max(a,h),d=m>0?a>h?Un:Fs:null,v=d?d===Un?i.length:c.length:0);const S=d===Un&&/\b(?:transform|all)(?:,|$)/.test(r(`${Un}Property`).toString());return{type:d,timeout:m,propCount:v,hasTransform:S}}function fh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>dh(n)+dh(t[r])))}function dh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function ph(t){return(t?t.ownerDocument:document).body.offsetHeight}function hv(t,e,n){const r=t[hi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const mh=Symbol("_vod"),fv=Symbol("_vsh"),dv=Symbol(""),pv=/(?:^|;)\s*display\s*:/;function mv(t,e,n){const r=t.style,s=Ue(n);let i=!1;if(n&&!s){if(e)if(Ue(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&so(r,l,"")}else for(const a in e)n[a]==null&&so(r,a,"");for(const a in n)a==="display"&&(i=!0),so(r,a,n[a])}else if(s){if(e!==n){const a=r[dv];a&&(n+=";"+a),r.cssText=n,i=pv.test(n)}}else e&&t.removeAttribute("style");mh in t&&(t[mh]=i?r.display:"",t[fv]&&(r.display="none"))}const gh=/\s*!important$/;function so(t,e,n){if(ee(n))n.forEach(r=>so(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=gv(t,e);gh.test(n)?t.setProperty(Vr(r),n.replace(gh,""),"important"):t[r]=n}}const _h=["Webkit","Moz","ms"],Xa={};function gv(t,e){const n=Xa[e];if(n)return n;let r=tr(e);if(r!=="filter"&&r in t)return Xa[e]=r;r=id(r);for(let s=0;s<_h.length;s++){const i=_h[s]+r;if(i in t)return Xa[e]=i}return e}const yh="http://www.w3.org/1999/xlink";function vh(t,e,n,r,s,i=p_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(yh,e.slice(6,e.length)):t.setAttributeNS(yh,e,n):n==null||i&&!ad(n)?t.removeAttribute(e):t.setAttribute(e,i?"":an(n)?String(n):n)}function Eh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?up(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ad(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function wr(t,e,n,r){t.addEventListener(e,n,r)}function _v(t,e,n,r){t.removeEventListener(e,n,r)}const Th=Symbol("_vei");function yv(t,e,n,r,s=null){const i=t[Th]||(t[Th]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=vv(e);if(r){const h=i[e]=Iv(r,s);wr(t,l,h,c)}else a&&(_v(t,l,a,c),i[e]=void 0)}}const Ih=/(?:Once|Passive|Capture)$/;function vv(t){let e;if(Ih.test(t)){e={};let r;for(;r=t.match(Ih);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Vr(t.slice(2)),e]}let Ya=0;const Ev=Promise.resolve(),Tv=()=>Ya||(Ev.then(()=>Ya=0),Ya=Date.now());function Iv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$t(wv(r,n.value),e,5,[r])};return n.value=t,n.attached=Tv(),n}function wv(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const wh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Av=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?hv(t,r,a):e==="style"?mv(t,n,r):Ko(e)?Jl(e)||yv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bv(t,e,r,a))?(Eh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&vh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ue(r))?Eh(t,tr(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),vh(t,e,r,a))};function bv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&wh(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return wh(e)&&Ue(n)?!1:e in t}const bo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ee(e)?n=>to(e,n):e};function Sv(t){t.target.composing=!0}function Ah(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ns=Symbol("_assign"),bh={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ns]=bo(s);const i=r||s.props&&s.props.type==="number";wr(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=fl(l)),t[ns](l)}),n&&wr(t,"change",()=>{t.value=t.value.trim()}),e||(wr(t,"compositionstart",Sv),wr(t,"compositionend",Ah),wr(t,"change",Ah))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[ns]=bo(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?fl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Rv={deep:!0,created(t,e,n){t[ns]=bo(n),wr(t,"change",()=>{const r=t._modelValue,s=Cv(t),i=t.checked,a=t[ns];if(ee(r)){const l=ld(r,s),c=l!==-1;if(i&&!c)a(r.concat(s));else if(!i&&c){const h=[...r];h.splice(l,1),a(h)}}else if(Go(r)){const l=new Set(r);i?l.add(s):l.delete(s),a(l)}else a(fp(t,i))})},mounted:Sh,beforeUpdate(t,e,n){t[ns]=bo(n),Sh(t,e,n)}};function Sh(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ee(e))s=ld(e,r.props.value)>-1;else if(Go(e))s=e.has(r.props.value);else{if(e===n)return;s=Xo(e,fp(t,!0))}t.checked!==s&&(t.checked=s)}function Cv(t){return"_value"in t?t._value:t.value}function fp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Pv=["ctrl","shift","alt","meta"],Dv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Pv.some(n=>t[`${n}Key`]&&!e.includes(n))},$r=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let a=0;a<e.length;a++){const l=Dv[e[a]];if(l&&l(s,e))return}return t(s,...i)}))},kv=nt({patchProp:Av},rv);let Rh;function Vv(){return Rh||(Rh=Sy(kv))}const Nv=((...t)=>{const e=Vv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ov(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,xv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function xv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ov(t){return Ue(t)?document.querySelector(t):t}const Mv=[{name:"Palmyre",exclusions:["Nicole"]},{name:"Nicole",exclusions:["Palmyre"]},{name:"Laurent",exclusions:["Florence","Clara","James"]},{name:"Florence",exclusions:["Laurent","Clara","James"]},{name:"Olivier",exclusions:["Hélène","Arnaud","Andréanne"]},{name:"Hélène",exclusions:["Olivier","Arnaud","Andréanne"]},{name:"Stephan",exclusions:["Émilie","Aurélien","Colyne","Hélène","Florence"]},{name:"Émilie",exclusions:["Stephan","Aurélien","Colyne","Hélène","Florence"]},{name:"Audrey",exclusions:["Sylvain"]},{name:"Sylvain",exclusions:["Audrey"]},{name:"Clara",exclusions:["James","Laurent","Florence"]},{name:"James",exclusions:["Clara","Laurent","Florence"]},{name:"Arnaud",exclusions:["Andréanne","Olivier","Hélène"]},{name:"Andréanne",exclusions:["Arnaud","Olivier","Hélène"]},{name:"Colyne",exclusions:["Aurélien","Stephan","Émilie","Hélène","Florence","Laurent"]},{name:"Aurélien",exclusions:["Colyne","Stephan","Émilie","Hélène","Florence","Laurent"]}],Lv=[{name:"Eva",exclusions:["Clémence"]},{name:"Clémence",exclusions:["Eva"]},{name:"Mylan",exclusions:[]},{name:"Maïko",exclusions:[]},{name:"Maddy",exclusions:[]}],Fv=()=>{};var Ch={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Uv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},pp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,m=(i&3)<<4|l>>4;let v=(l&15)<<2|h>>6,S=h&63;c||(S=64,a||(v=64)),r.push(n[d],n[m],n[v],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Uv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new jv;const v=i<<2|l>>4;if(r.push(v),h!==64){const S=l<<4&240|h>>2;if(r.push(S),m!==64){const N=h<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bv=function(t){const e=dp(t);return pp.encodeByteArray(e,!0)},So=function(t){return Bv(t).replace(/\./g,"")},mp=function(t){try{return pp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=()=>$v().__FIREBASE_DEFAULTS__,Hv=()=>{if(typeof process>"u"||typeof Ch>"u")return;const t=Ch.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mp(t[1]);return e&&JSON.parse(e)},oa=()=>{try{return Fv()||qv()||Hv()||zv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gp=t=>oa()?.emulatorHosts?.[t],Wv=t=>{const e=gp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_p=()=>oa()?.config,yp=t=>oa()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vp(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[So(JSON.stringify(n)),So(JSON.stringify(a)),""].join(".")}const Ys={};function Qv(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ys))Ys[e]?t.emulator.push(e):t.prod.push(e);return t}function Jv(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ph=!1;function Ep(t,e){if(typeof window>"u"||typeof document>"u"||!ms(window.location.host)||Ys[t]===e||Ys[t]||Ph)return;Ys[t]=e;function n(v){return`__firebase__banner__${v}`}const r="__firebase__banner",i=Qv().prod.length>0;function a(){const v=document.getElementById(r);v&&v.remove()}function l(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function c(v,S){v.setAttribute("width","24"),v.setAttribute("id",S),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function h(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Ph=!0,a()},v}function d(v,S){v.setAttribute("id",S),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function m(){const v=Jv(r),S=n("text"),N=document.getElementById(S)||document.createElement("span"),L=n("learnmore"),x=document.getElementById(L)||document.createElement("a"),$=n("preprendIcon"),W=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const J=v.element;l(J),d(x,L);const K=h();c(W,$),J.append(W,N,x,K),document.body.appendChild(J)}i?(N.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(W.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function Yv(){const t=oa()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nE(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rE(){return!Yv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sE(){try{return typeof indexedDB=="object"}catch{return!1}}function iE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oE,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bi.prototype.create)}}class bi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?aE(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Dn(s,l,r)}}function aE(t,e){return t.replace(lE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const lE=/\{\$([^}]+)}/g;function cE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Dh(i)&&Dh(a)){if(!Rr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Dh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function uE(t,e){const n=new hE(t,e);return n.subscribe.bind(n)}class hE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Za),s.error===void 0&&(s.error=Za),s.complete===void 0&&(s.complete=Za);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Za(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t){return t&&t._delegate?t._delegate:t}class Cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Kv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mE(e))try{this.getOrInitializeService({instanceIdentifier:Tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tr){return this.instances.has(e)}getOptions(e=Tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tr){return this.component?this.component.multipleInstances?e:Tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pE(t){return t===Tr?void 0:t}function mE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const _E={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},yE=me.INFO,vE={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},EE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dc{constructor(e){this.name=e,this._logLevel=yE,this._logHandler=EE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_E[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const TE=(t,e)=>e.some(n=>t instanceof n);let kh,Vh;function IE(){return kh||(kh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wE(){return Vh||(Vh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tp=new WeakMap,bl=new WeakMap,Ip=new WeakMap,el=new WeakMap,pc=new WeakMap;function AE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Qn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Tp.set(n,t)}).catch(()=>{}),pc.set(e,t),e}function bE(t){if(bl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});bl.set(t,e)}let Sl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ip.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function SE(t){Sl=t(Sl)}function RE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tl(this),e,...n);return Ip.set(r,e.sort?e.sort():[e]),Qn(r)}:wE().includes(t)?function(...e){return t.apply(tl(this),e),Qn(Tp.get(this))}:function(...e){return Qn(t.apply(tl(this),e))}}function CE(t){return typeof t=="function"?RE(t):(t instanceof IDBTransaction&&bE(t),TE(t,IE())?new Proxy(t,Sl):t)}function Qn(t){if(t instanceof IDBRequest)return AE(t);if(el.has(t))return el.get(t);const e=CE(t);return e!==t&&(el.set(t,e),pc.set(e,t)),e}const tl=t=>pc.get(t);function PE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=Qn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Qn(a.result),c.oldVersion,c.newVersion,Qn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const DE=["get","getKey","getAll","getAllKeys","count"],kE=["put","add","delete","clear"],nl=new Map;function Nh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nl.get(e))return nl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=kE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||DE.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return nl.set(e,i),i}SE(t=>({...t,get:(e,n,r)=>Nh(e,n)||t.get(e,n,r),has:(e,n)=>!!Nh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function NE(t){return t.getComponent()?.type==="VERSION"}const Rl="@firebase/app",xh="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new dc("@firebase/app"),xE="@firebase/app-compat",OE="@firebase/analytics-compat",ME="@firebase/analytics",LE="@firebase/app-check-compat",FE="@firebase/app-check",UE="@firebase/auth",jE="@firebase/auth-compat",BE="@firebase/database",$E="@firebase/data-connect",qE="@firebase/database-compat",HE="@firebase/functions",zE="@firebase/functions-compat",WE="@firebase/installations",KE="@firebase/installations-compat",GE="@firebase/messaging",QE="@firebase/messaging-compat",JE="@firebase/performance",XE="@firebase/performance-compat",YE="@firebase/remote-config",ZE="@firebase/remote-config-compat",eT="@firebase/storage",tT="@firebase/storage-compat",nT="@firebase/firestore",rT="@firebase/ai",sT="@firebase/firestore-compat",iT="firebase",oT="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="[DEFAULT]",aT={[Rl]:"fire-core",[xE]:"fire-core-compat",[ME]:"fire-analytics",[OE]:"fire-analytics-compat",[FE]:"fire-app-check",[LE]:"fire-app-check-compat",[UE]:"fire-auth",[jE]:"fire-auth-compat",[BE]:"fire-rtdb",[$E]:"fire-data-connect",[qE]:"fire-rtdb-compat",[HE]:"fire-fn",[zE]:"fire-fn-compat",[WE]:"fire-iid",[KE]:"fire-iid-compat",[GE]:"fire-fcm",[QE]:"fire-fcm-compat",[JE]:"fire-perf",[XE]:"fire-perf-compat",[YE]:"fire-rc",[ZE]:"fire-rc-compat",[eT]:"fire-gcs",[tT]:"fire-gcs-compat",[nT]:"fire-fst",[sT]:"fire-fst-compat",[rT]:"fire-vertex","fire-js":"fire-js",[iT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new Map,lT=new Map,Pl=new Map;function Oh(t,e){try{t.container.addComponent(e)}catch(n){An.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function as(t){const e=t.name;if(Pl.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;Pl.set(e,t);for(const n of Ro.values())Oh(n,t);for(const n of lT.values())Oh(n,t);return!0}function mc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new bi("app","Firebase",cT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=oT;function wp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Cl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Jn.create("bad-app-name",{appName:String(s)});if(n||(n=_p()),!n)throw Jn.create("no-options");const i=Ro.get(s);if(i){if(Rr(n,i.options)&&Rr(r,i.config))return i;throw Jn.create("duplicate-app",{appName:s})}const a=new gE(s);for(const c of Pl.values())a.addComponent(c);const l=new uT(n,r,a);return Ro.set(s,l),l}function Ap(t=Cl){const e=Ro.get(t);if(!e&&t===Cl&&_p())return wp();if(!e)throw Jn.create("no-app",{appName:t});return e}function Xn(t,e,n){let r=aT[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(a.join(" "));return}as(new Cr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="firebase-heartbeat-database",fT=1,fi="firebase-heartbeat-store";let rl=null;function bp(){return rl||(rl=PE(hT,fT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Jn.create("idb-open",{originalErrorMessage:t.message})})),rl}async function dT(t){try{const n=(await bp()).transaction(fi),r=await n.objectStore(fi).get(Sp(t));return await n.done,r}catch(e){if(e instanceof Dn)An.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e?.message});An.warn(n.message)}}}async function Mh(t,e){try{const r=(await bp()).transaction(fi,"readwrite");await r.objectStore(fi).put(e,Sp(t)),await r.done}catch(n){if(n instanceof Dn)An.warn(n.message);else{const r=Jn.create("idb-set",{originalErrorMessage:n?.message});An.warn(r.message)}}}function Sp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=1024,mT=30;class gT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Lh();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>mT){const s=vT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){An.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lh(),{heartbeatsToSend:n,unsentEntries:r}=_T(this._heartbeatsCache.heartbeats),s=So(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return An.warn(e),""}}}function Lh(){return new Date().toISOString().substring(0,10)}function _T(t,e=pT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Fh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Fh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sE()?iE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dT(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Fh(t){return So(JSON.stringify({version:2,heartbeats:t})).length}function vT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(t){as(new Cr("platform-logger",e=>new VE(e),"PRIVATE")),as(new Cr("heartbeat",e=>new gT(e),"PRIVATE")),Xn(Rl,xh,t),Xn(Rl,xh,"esm2020"),Xn("fire-js","")}ET("");var TT="firebase",IT="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn(TT,IT,"app");var Uh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yn,Rp;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,E){function y(){}y.prototype=E.prototype,b.F=E.prototype,b.prototype=new y,b.prototype.constructor=b,b.D=function(w,A,I){for(var T=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)T[ve-2]=arguments[ve];return E.prototype[A].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,E,y){y||(y=0);const w=Array(16);if(typeof E=="string")for(var A=0;A<16;++A)w[A]=E.charCodeAt(y++)|E.charCodeAt(y++)<<8|E.charCodeAt(y++)<<16|E.charCodeAt(y++)<<24;else for(A=0;A<16;++A)w[A]=E[y++]|E[y++]<<8|E[y++]<<16|E[y++]<<24;E=b.g[0],y=b.g[1],A=b.g[2];let I=b.g[3],T;T=E+(I^y&(A^I))+w[0]+3614090360&4294967295,E=y+(T<<7&4294967295|T>>>25),T=I+(A^E&(y^A))+w[1]+3905402710&4294967295,I=E+(T<<12&4294967295|T>>>20),T=A+(y^I&(E^y))+w[2]+606105819&4294967295,A=I+(T<<17&4294967295|T>>>15),T=y+(E^A&(I^E))+w[3]+3250441966&4294967295,y=A+(T<<22&4294967295|T>>>10),T=E+(I^y&(A^I))+w[4]+4118548399&4294967295,E=y+(T<<7&4294967295|T>>>25),T=I+(A^E&(y^A))+w[5]+1200080426&4294967295,I=E+(T<<12&4294967295|T>>>20),T=A+(y^I&(E^y))+w[6]+2821735955&4294967295,A=I+(T<<17&4294967295|T>>>15),T=y+(E^A&(I^E))+w[7]+4249261313&4294967295,y=A+(T<<22&4294967295|T>>>10),T=E+(I^y&(A^I))+w[8]+1770035416&4294967295,E=y+(T<<7&4294967295|T>>>25),T=I+(A^E&(y^A))+w[9]+2336552879&4294967295,I=E+(T<<12&4294967295|T>>>20),T=A+(y^I&(E^y))+w[10]+4294925233&4294967295,A=I+(T<<17&4294967295|T>>>15),T=y+(E^A&(I^E))+w[11]+2304563134&4294967295,y=A+(T<<22&4294967295|T>>>10),T=E+(I^y&(A^I))+w[12]+1804603682&4294967295,E=y+(T<<7&4294967295|T>>>25),T=I+(A^E&(y^A))+w[13]+4254626195&4294967295,I=E+(T<<12&4294967295|T>>>20),T=A+(y^I&(E^y))+w[14]+2792965006&4294967295,A=I+(T<<17&4294967295|T>>>15),T=y+(E^A&(I^E))+w[15]+1236535329&4294967295,y=A+(T<<22&4294967295|T>>>10),T=E+(A^I&(y^A))+w[1]+4129170786&4294967295,E=y+(T<<5&4294967295|T>>>27),T=I+(y^A&(E^y))+w[6]+3225465664&4294967295,I=E+(T<<9&4294967295|T>>>23),T=A+(E^y&(I^E))+w[11]+643717713&4294967295,A=I+(T<<14&4294967295|T>>>18),T=y+(I^E&(A^I))+w[0]+3921069994&4294967295,y=A+(T<<20&4294967295|T>>>12),T=E+(A^I&(y^A))+w[5]+3593408605&4294967295,E=y+(T<<5&4294967295|T>>>27),T=I+(y^A&(E^y))+w[10]+38016083&4294967295,I=E+(T<<9&4294967295|T>>>23),T=A+(E^y&(I^E))+w[15]+3634488961&4294967295,A=I+(T<<14&4294967295|T>>>18),T=y+(I^E&(A^I))+w[4]+3889429448&4294967295,y=A+(T<<20&4294967295|T>>>12),T=E+(A^I&(y^A))+w[9]+568446438&4294967295,E=y+(T<<5&4294967295|T>>>27),T=I+(y^A&(E^y))+w[14]+3275163606&4294967295,I=E+(T<<9&4294967295|T>>>23),T=A+(E^y&(I^E))+w[3]+4107603335&4294967295,A=I+(T<<14&4294967295|T>>>18),T=y+(I^E&(A^I))+w[8]+1163531501&4294967295,y=A+(T<<20&4294967295|T>>>12),T=E+(A^I&(y^A))+w[13]+2850285829&4294967295,E=y+(T<<5&4294967295|T>>>27),T=I+(y^A&(E^y))+w[2]+4243563512&4294967295,I=E+(T<<9&4294967295|T>>>23),T=A+(E^y&(I^E))+w[7]+1735328473&4294967295,A=I+(T<<14&4294967295|T>>>18),T=y+(I^E&(A^I))+w[12]+2368359562&4294967295,y=A+(T<<20&4294967295|T>>>12),T=E+(y^A^I)+w[5]+4294588738&4294967295,E=y+(T<<4&4294967295|T>>>28),T=I+(E^y^A)+w[8]+2272392833&4294967295,I=E+(T<<11&4294967295|T>>>21),T=A+(I^E^y)+w[11]+1839030562&4294967295,A=I+(T<<16&4294967295|T>>>16),T=y+(A^I^E)+w[14]+4259657740&4294967295,y=A+(T<<23&4294967295|T>>>9),T=E+(y^A^I)+w[1]+2763975236&4294967295,E=y+(T<<4&4294967295|T>>>28),T=I+(E^y^A)+w[4]+1272893353&4294967295,I=E+(T<<11&4294967295|T>>>21),T=A+(I^E^y)+w[7]+4139469664&4294967295,A=I+(T<<16&4294967295|T>>>16),T=y+(A^I^E)+w[10]+3200236656&4294967295,y=A+(T<<23&4294967295|T>>>9),T=E+(y^A^I)+w[13]+681279174&4294967295,E=y+(T<<4&4294967295|T>>>28),T=I+(E^y^A)+w[0]+3936430074&4294967295,I=E+(T<<11&4294967295|T>>>21),T=A+(I^E^y)+w[3]+3572445317&4294967295,A=I+(T<<16&4294967295|T>>>16),T=y+(A^I^E)+w[6]+76029189&4294967295,y=A+(T<<23&4294967295|T>>>9),T=E+(y^A^I)+w[9]+3654602809&4294967295,E=y+(T<<4&4294967295|T>>>28),T=I+(E^y^A)+w[12]+3873151461&4294967295,I=E+(T<<11&4294967295|T>>>21),T=A+(I^E^y)+w[15]+530742520&4294967295,A=I+(T<<16&4294967295|T>>>16),T=y+(A^I^E)+w[2]+3299628645&4294967295,y=A+(T<<23&4294967295|T>>>9),T=E+(A^(y|~I))+w[0]+4096336452&4294967295,E=y+(T<<6&4294967295|T>>>26),T=I+(y^(E|~A))+w[7]+1126891415&4294967295,I=E+(T<<10&4294967295|T>>>22),T=A+(E^(I|~y))+w[14]+2878612391&4294967295,A=I+(T<<15&4294967295|T>>>17),T=y+(I^(A|~E))+w[5]+4237533241&4294967295,y=A+(T<<21&4294967295|T>>>11),T=E+(A^(y|~I))+w[12]+1700485571&4294967295,E=y+(T<<6&4294967295|T>>>26),T=I+(y^(E|~A))+w[3]+2399980690&4294967295,I=E+(T<<10&4294967295|T>>>22),T=A+(E^(I|~y))+w[10]+4293915773&4294967295,A=I+(T<<15&4294967295|T>>>17),T=y+(I^(A|~E))+w[1]+2240044497&4294967295,y=A+(T<<21&4294967295|T>>>11),T=E+(A^(y|~I))+w[8]+1873313359&4294967295,E=y+(T<<6&4294967295|T>>>26),T=I+(y^(E|~A))+w[15]+4264355552&4294967295,I=E+(T<<10&4294967295|T>>>22),T=A+(E^(I|~y))+w[6]+2734768916&4294967295,A=I+(T<<15&4294967295|T>>>17),T=y+(I^(A|~E))+w[13]+1309151649&4294967295,y=A+(T<<21&4294967295|T>>>11),T=E+(A^(y|~I))+w[4]+4149444226&4294967295,E=y+(T<<6&4294967295|T>>>26),T=I+(y^(E|~A))+w[11]+3174756917&4294967295,I=E+(T<<10&4294967295|T>>>22),T=A+(E^(I|~y))+w[2]+718787259&4294967295,A=I+(T<<15&4294967295|T>>>17),T=y+(I^(A|~E))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+E&4294967295,b.g[1]=b.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+I&4294967295}r.prototype.v=function(b,E){E===void 0&&(E=b.length);const y=E-this.blockSize,w=this.C;let A=this.h,I=0;for(;I<E;){if(A==0)for(;I<=y;)s(this,b,I),I+=this.blockSize;if(typeof b=="string"){for(;I<E;)if(w[A++]=b.charCodeAt(I++),A==this.blockSize){s(this,w),A=0;break}}else for(;I<E;)if(w[A++]=b[I++],A==this.blockSize){s(this,w),A=0;break}}this.h=A,this.o+=E},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var E=1;E<b.length-8;++E)b[E]=0;E=this.o*8;for(var y=b.length-8;y<b.length;++y)b[y]=E&255,E/=256;for(this.v(b),b=Array(16),E=0,y=0;y<4;++y)for(let w=0;w<32;w+=8)b[E++]=this.g[y]>>>w&255;return b};function i(b,E){var y=l;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=E(b)}function a(b,E){this.h=E;const y=[];let w=!0;for(let A=b.length-1;A>=0;A--){const I=b[A]|0;w&&I==E||(y[A]=I,w=!1)}this.g=y}var l={};function c(b){return-128<=b&&b<128?i(b,function(E){return new a([E|0],E<0?-1:0)}):new a([b|0],b<0?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return m;if(b<0)return x(h(-b));const E=[];let y=1;for(let w=0;b>=y;w++)E[w]=b/y|0,y*=4294967296;return new a(E,0)}function d(b,E){if(b.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(b.charAt(0)=="-")return x(d(b.substring(1),E));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=h(Math.pow(E,8));let w=m;for(let I=0;I<b.length;I+=8){var A=Math.min(8,b.length-I);const T=parseInt(b.substring(I,I+A),E);A<8?(A=h(Math.pow(E,A)),w=w.j(A).add(h(T))):(w=w.j(y),w=w.add(h(T)))}return w}var m=c(0),v=c(1),S=c(16777216);t=a.prototype,t.m=function(){if(L(this))return-x(this).m();let b=0,E=1;for(let y=0;y<this.g.length;y++){const w=this.i(y);b+=(w>=0?w:4294967296+w)*E,E*=4294967296}return b},t.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(N(this))return"0";if(L(this))return"-"+x(this).toString(b);const E=h(Math.pow(b,6));var y=this;let w="";for(;;){const A=K(y,E).g;y=$(y,A.j(E));let I=((y.g.length>0?y.g[0]:y.h)>>>0).toString(b);if(y=A,N(y))return I+w;for(;I.length<6;)I="0"+I;w=I+w}},t.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function N(b){if(b.h!=0)return!1;for(let E=0;E<b.g.length;E++)if(b.g[E]!=0)return!1;return!0}function L(b){return b.h==-1}t.l=function(b){return b=$(this,b),L(b)?-1:N(b)?0:1};function x(b){const E=b.g.length,y=[];for(let w=0;w<E;w++)y[w]=~b.g[w];return new a(y,~b.h).add(v)}t.abs=function(){return L(this)?x(this):this},t.add=function(b){const E=Math.max(this.g.length,b.g.length),y=[];let w=0;for(let A=0;A<=E;A++){let I=w+(this.i(A)&65535)+(b.i(A)&65535),T=(I>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);w=T>>>16,I&=65535,T&=65535,y[A]=T<<16|I}return new a(y,y[y.length-1]&-2147483648?-1:0)};function $(b,E){return b.add(x(E))}t.j=function(b){if(N(this)||N(b))return m;if(L(this))return L(b)?x(this).j(x(b)):x(x(this).j(b));if(L(b))return x(this.j(x(b)));if(this.l(S)<0&&b.l(S)<0)return h(this.m()*b.m());const E=this.g.length+b.g.length,y=[];for(var w=0;w<2*E;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(let A=0;A<b.g.length;A++){const I=this.i(w)>>>16,T=this.i(w)&65535,ve=b.i(A)>>>16,qe=b.i(A)&65535;y[2*w+2*A]+=T*qe,W(y,2*w+2*A),y[2*w+2*A+1]+=I*qe,W(y,2*w+2*A+1),y[2*w+2*A+1]+=T*ve,W(y,2*w+2*A+1),y[2*w+2*A+2]+=I*ve,W(y,2*w+2*A+2)}for(b=0;b<E;b++)y[b]=y[2*b+1]<<16|y[2*b];for(b=E;b<2*E;b++)y[b]=0;return new a(y,0)};function W(b,E){for(;(b[E]&65535)!=b[E];)b[E+1]+=b[E]>>>16,b[E]&=65535,E++}function J(b,E){this.g=b,this.h=E}function K(b,E){if(N(E))throw Error("division by zero");if(N(b))return new J(m,m);if(L(b))return E=K(x(b),E),new J(x(E.g),x(E.h));if(L(E))return E=K(b,x(E)),new J(x(E.g),E.h);if(b.g.length>30){if(L(b)||L(E))throw Error("slowDivide_ only works with positive integers.");for(var y=v,w=E;w.l(b)<=0;)y=oe(y),w=oe(w);var A=re(y,1),I=re(w,1);for(w=re(w,2),y=re(y,2);!N(w);){var T=I.add(w);T.l(b)<=0&&(A=A.add(y),I=T),w=re(w,1),y=re(y,1)}return E=$(b,A.j(E)),new J(A,E)}for(A=m;b.l(E)>=0;){for(y=Math.max(1,Math.floor(b.m()/E.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),I=h(y),T=I.j(E);L(T)||T.l(b)>0;)y-=w,I=h(y),T=I.j(E);N(I)&&(I=v),A=A.add(I),b=$(b,T)}return new J(A,b)}t.B=function(b){return K(this,b).h},t.and=function(b){const E=Math.max(this.g.length,b.g.length),y=[];for(let w=0;w<E;w++)y[w]=this.i(w)&b.i(w);return new a(y,this.h&b.h)},t.or=function(b){const E=Math.max(this.g.length,b.g.length),y=[];for(let w=0;w<E;w++)y[w]=this.i(w)|b.i(w);return new a(y,this.h|b.h)},t.xor=function(b){const E=Math.max(this.g.length,b.g.length),y=[];for(let w=0;w<E;w++)y[w]=this.i(w)^b.i(w);return new a(y,this.h^b.h)};function oe(b){const E=b.g.length+1,y=[];for(let w=0;w<E;w++)y[w]=b.i(w)<<1|b.i(w-1)>>>31;return new a(y,b.h)}function re(b,E){const y=E>>5;E%=32;const w=b.g.length-y,A=[];for(let I=0;I<w;I++)A[I]=E>0?b.i(I+y)>>>E|b.i(I+y+1)<<32-E:b.i(I+y);return new a(A,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Rp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Yn=a}).apply(typeof Uh<"u"?Uh:typeof self<"u"?self:typeof window<"u"?window:{});var Qi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cp,Bs,Pp,io,Dl,Dp,kp,Vp;(function(){var t,e=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qi=="object"&&Qi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in f))break e;f=f[R]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var f=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&f.push([g,u[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function c(o,u,f){return o.call.apply(o.bind,arguments)}function h(o,u,f){return h=c,h.apply(null,arguments)}function d(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function m(o,u){function f(){}f.prototype=u.prototype,o.Z=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(g,R,P){for(var q=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)q[fe-2]=arguments[fe];return u.prototype[R].apply(g,q)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const u=o.length;if(u>0){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function N(o,u){for(let g=1;g<arguments.length;g++){const R=arguments[g];var f=typeof R;if(f=f!="object"?f:R?Array.isArray(R)?"array":f:"null",f=="array"||f=="object"&&typeof R.length=="number"){f=o.length||0;const P=R.length||0;o.length=f+P;for(let q=0;q<P;q++)o[f+q]=R[q]}else o.push(R)}}class L{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function x(o){a.setTimeout(()=>{throw o},0)}function $(){var o=b;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class W{constructor(){this.h=this.g=null}add(u,f){const g=J.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var J=new L(()=>new K,o=>o.reset());class K{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,re=!1,b=new W,E=()=>{const o=Promise.resolve(void 0);oe=()=>{o.then(y)}};function y(){for(var o;o=$();){try{o.h.call(o.g)}catch(f){x(f)}var u=J;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}re=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,u),a.removeEventListener("test",f,u)}catch{}return o})();function T(o){return/^[\s\xa0]*$/.test(o)}function ve(o,u){A.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}m(ve,A),ve.prototype.init=function(o,u){const f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ve.Z.h.call(this)},ve.prototype.h=function(){ve.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var qe="closure_listenable_"+(Math.random()*1e6|0),Me=0;function Ie(o,u,f,g,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=R,this.key=++Me,this.da=this.fa=!1}function Ee(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function dt(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function hn(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function Et(o){const u={};for(const f in o)u[f]=o[f];return u}const st="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kn(o,u){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)o[f]=g[f];for(let P=0;P<st.length;P++)f=st[P],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function fn(o){this.src=o,this.g={},this.h=0}fn.prototype.add=function(o,u,f,g,R){const P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);const q=Pt(o,u,g,R);return q>-1?(u=o[q],f||(u.fa=!1)):(u=new Ie(u,this.src,P,!!g,R),u.fa=f,o.push(u)),u};function qt(o,u){const f=u.type;if(f in o.g){var g=o.g[f],R=Array.prototype.indexOf.call(g,u,void 0),P;(P=R>=0)&&Array.prototype.splice.call(g,R,1),P&&(Ee(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Pt(o,u,f,g){for(let R=0;R<o.length;++R){const P=o[R];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==g)return R}return-1}var Ot="closure_lm_"+(Math.random()*1e6|0),Ht={};function Vn(o,u,f,g,R){if(Array.isArray(u)){for(let P=0;P<u.length;P++)Vn(o,u[P],f,g,R);return null}return f=H(f),o&&o[qe]?o.J(u,f,l(g)?!!g.capture:!1,R):zt(o,u,f,!1,g,R)}function zt(o,u,f,g,R,P){if(!u)throw Error("Invalid event type");const q=l(R)?!!R.capture:!!R;let fe=k(o);if(fe||(o[Ot]=fe=new fn(o)),f=fe.add(u,f,g,q,P),f.proxy)return f;if(g=Q(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)I||(R=q),R===void 0&&(R=!1),o.addEventListener(u.toString(),g,R);else if(o.attachEvent)o.attachEvent(C(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Q(){function o(f){return u.call(o.src,o.listener,f)}const u=D;return o}function p(o,u,f,g,R){if(Array.isArray(u))for(var P=0;P<u.length;P++)p(o,u[P],f,g,R);else g=l(g)?!!g.capture:!!g,f=H(f),o&&o[qe]?(o=o.i,P=String(u).toString(),P in o.g&&(u=o.g[P],f=Pt(u,f,g,R),f>-1&&(Ee(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete o.g[P],o.h--)))):o&&(o=k(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Pt(u,f,g,R)),(f=o>-1?u[o]:null)&&_(f))}function _(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[qe])qt(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(C(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=k(u))?(qt(f,o),f.h==0&&(f.src=null,u[Ot]=null)):Ee(o)}}}function C(o){return o in Ht?Ht[o]:Ht[o]="on"+o}function D(o,u){if(o.da)o=!0;else{u=new ve(u,this);const f=o.listener,g=o.ha||o.src;o.fa&&_(o),o=f.call(g,u)}return o}function k(o){return o=o[Ot],o instanceof fn?o:null}var V="__closure_events_fn_"+(Math.random()*1e9>>>0);function H(o){return typeof o=="function"?o:(o[V]||(o[V]=function(u){return o.handleEvent(u)}),o[V])}function U(){w.call(this),this.i=new fn(this),this.M=this,this.G=null}m(U,w),U.prototype[qe]=!0,U.prototype.removeEventListener=function(o,u,f,g){p(this,o,u,f,g)};function j(o,u){var f,g=o.G;if(g)for(f=[];g;g=g.G)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new A(u,o);else if(u instanceof A)u.target=u.target||o;else{var R=u;u=new A(g,o),kn(u,R)}R=!0;let P,q;if(f)for(q=f.length-1;q>=0;q--)P=u.g=f[q],R=B(P,g,!0,u)&&R;if(P=u.g=o,R=B(P,g,!0,u)&&R,R=B(P,g,!1,u)&&R,f)for(q=0;q<f.length;q++)P=u.g=f[q],R=B(P,g,!1,u)&&R}U.prototype.N=function(){if(U.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const f=o.g[u];for(let g=0;g<f.length;g++)Ee(f[g]);delete o.g[u],o.h--}}this.G=null},U.prototype.J=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},U.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function B(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let R=!0;for(let P=0;P<u.length;++P){const q=u[P];if(q&&!q.da&&q.capture==f){const fe=q.listener,He=q.ha||q.src;q.fa&&qt(o.i,q),R=fe.call(He,g)!==!1&&R}}return R&&!g.defaultPrevented}function Z(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function z(o){o.g=Z(()=>{o.g=null,o.i&&(o.i=!1,z(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Y extends w{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:z(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ne(o){w.call(this),this.h=o,this.g={}}m(ne,w);var pe=[];function Se(o){dt(o.g,function(u,f){this.g.hasOwnProperty(f)&&_(u)},o),o.g={}}ne.prototype.N=function(){ne.Z.N.call(this),Se(this)},ne.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Te=a.JSON.stringify,it=a.JSON.parse,ot=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function At(){}function bt(){}var Mt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Lr(){A.call(this,"d")}m(Lr,A);function Xe(){A.call(this,"c")}m(Xe,A);var Ke={},Is=null;function hr(){return Is=Is||new U}Ke.Ia="serverreachability";function nu(o){A.call(this,Ke.Ia,o)}m(nu,A);function ws(o){const u=hr();j(u,new nu(u))}Ke.STAT_EVENT="statevent";function ru(o,u){A.call(this,Ke.STAT_EVENT,o),this.stat=u}m(ru,A);function pt(o){const u=hr();j(u,new ru(u,o))}Ke.Ja="timingevent";function su(o,u){A.call(this,Ke.Ja,o),this.size=u}m(su,A);function As(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function bs(){this.g=!0}bs.prototype.ua=function(){this.g=!1};function Mg(o,u,f,g,R,P){o.info(function(){if(o.g)if(P){var q="",fe=P.split("&");for(let Pe=0;Pe<fe.length;Pe++){var He=fe[Pe].split("=");if(He.length>1){const Ge=He[0];He=He[1];const Kt=Ge.split("_");q=Kt.length>=2&&Kt[1]=="type"?q+(Ge+"="+He+"&"):q+(Ge+"=redacted&")}}}else q=null;else q=P;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+f+`
`+q})}function Lg(o,u,f,g,R,P,q){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+f+`
`+P+" "+q})}function Fr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ug(o,f)+(g?" "+g:"")})}function Fg(o,u){o.info(function(){return"TIMEOUT: "+u})}bs.prototype.info=function(){};function Ug(o,u){if(!o.g)return u;if(!u)return null;try{const P=JSON.parse(u);if(P){for(o=0;o<P.length;o++)if(Array.isArray(P[o])){var f=P[o];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var R=g[0];if(R!="noop"&&R!="stop"&&R!="close")for(let q=1;q<g.length;q++)g[q]=""}}}}return Te(P)}catch{return u}}var Oi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},iu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ou;function ba(){}m(ba,At),ba.prototype.g=function(){return new XMLHttpRequest},ou=new ba;function Ss(o){return encodeURIComponent(String(o))}function jg(o){var u=1;o=o.split(":");const f=[];for(;u>0&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function Nn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.S=g||1,this.V=new ne(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new au}function au(){this.i=null,this.g="",this.h=!1}var lu={},Sa={};function Ra(o,u,f){o.M=1,o.A=Li(Wt(u)),o.u=f,o.R=!0,cu(o,null)}function cu(o,u){o.F=Date.now(),Mi(o),o.B=Wt(o.A);var f=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),Iu(f.i,"t",g),o.C=0,f=o.j.L,o.h=new au,o.g=ju(o.j,f?u:null,!o.u),o.P>0&&(o.O=new Y(h(o.Y,o,o.g),o.P)),u=o.V,f=o.g,g=o.ba;var R="readystatechange";Array.isArray(R)||(R&&(pe[0]=R.toString()),R=pe);for(let P=0;P<R.length;P++){const q=Vn(f,R[P],g||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=o.J?Et(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),ws(),Mg(o.i,o.v,o.B,o.l,o.S,o.u)}Nn.prototype.ba=function(o){o=o.target;const u=this.O;u&&Mn(o)==3?u.j():this.Y(o)},Nn.prototype.Y=function(o){try{if(o==this.g)e:{const fe=Mn(this.g),He=this.g.ya(),Pe=this.g.ca();if(!(fe<3)&&(fe!=3||this.g&&(this.h.h||this.g.la()||Pu(this.g)))){this.K||fe!=4||He==7||(He==8||Pe<=0?ws(3):ws(2)),Ca(this);var u=this.g.ca();this.X=u;var f=Bg(this);if(this.o=u==200,Lg(this.i,this.v,this.B,this.l,this.S,fe,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,R=this.g;if((g=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var P=g;break t}}P=null}if(o=P)Fr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Pa(this,o);else{this.o=!1,this.m=3,pt(12),fr(this),Rs(this);break e}}if(this.R){o=!0;let Ge;for(;!this.K&&this.C<f.length;)if(Ge=$g(this,f),Ge==Sa){fe==4&&(this.m=4,pt(14),o=!1),Fr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==lu){this.m=4,pt(15),Fr(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else Fr(this.i,this.l,Ge,null),Pa(this,Ge);if(uu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),fe!=4||f.length!=0||this.h.h||(this.m=1,pt(16),o=!1),this.o=this.o&&o,!o)Fr(this.i,this.l,f,"[Invalid Chunked Response]"),fr(this),Rs(this);else if(f.length>0&&!this.W){this.W=!0;var q=this.j;q.g==this&&q.aa&&!q.P&&(q.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),La(q),q.P=!0,pt(11))}}else Fr(this.i,this.l,f,null),Pa(this,f);fe==4&&fr(this),this.o&&!this.K&&(fe==4?Mu(this.j,this):(this.o=!1,Mi(this)))}else n_(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,pt(12)):(this.m=0,pt(13)),fr(this),Rs(this)}}}catch{}finally{}};function Bg(o){if(!uu(o))return o.g.la();const u=Pu(o.g);if(u==="")return"";let f="";const g=u.length,R=Mn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return fr(o),Rs(o),"";o.h.i=new a.TextDecoder}for(let P=0;P<g;P++)o.h.h=!0,f+=o.h.i.decode(u[P],{stream:!(R&&P==g-1)});return u.length=0,o.h.g+=f,o.C=0,o.h.g}function uu(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function $g(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Sa:(f=Number(u.substring(f,g)),isNaN(f)?lu:(g+=1,g+f>u.length?Sa:(u=u.slice(g,g+f),o.C=g+f,u)))}Nn.prototype.cancel=function(){this.K=!0,fr(this)};function Mi(o){o.T=Date.now()+o.H,hu(o,o.H)}function hu(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=As(h(o.aa,o),u)}function Ca(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Nn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Fg(this.i,this.B),this.M!=2&&(ws(),pt(17)),fr(this),this.m=2,Rs(this)):hu(this,this.T-o)};function Rs(o){o.j.I==0||o.K||Mu(o.j,o)}function fr(o){Ca(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,Se(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Pa(o,u){try{var f=o.j;if(f.I!=0&&(f.g==o||Da(f.h,o))){if(!o.L&&Da(f.h,o)&&f.I==3){try{var g=f.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)$i(f),ji(f);else break e;Ma(f),pt(18)}}else f.xa=R[1],0<f.xa-f.K&&R[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=As(h(f.Va,f),6e3));pu(f.h)<=1&&f.ta&&(f.ta=void 0)}else pr(f,11)}else if((o.L||f.g==o)&&$i(f),!T(u))for(R=f.Ba.g.parse(u),u=0;u<R.length;u++){let Pe=R[u];const Ge=Pe[0];if(!(Ge<=f.K))if(f.K=Ge,Pe=Pe[1],f.I==2)if(Pe[0]=="c"){f.M=Pe[1],f.ba=Pe[2];const Kt=Pe[3];Kt!=null&&(f.ka=Kt,f.j.info("VER="+f.ka));const mr=Pe[4];mr!=null&&(f.za=mr,f.j.info("SVER="+f.za));const Ln=Pe[5];Ln!=null&&typeof Ln=="number"&&Ln>0&&(g=1.5*Ln,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Fn=o.g;if(Fn){const Hi=Fn.g?Fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hi){var P=g.h;P.g||Hi.indexOf("spdy")==-1&&Hi.indexOf("quic")==-1&&Hi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ka(P,P.h),P.h=null))}if(g.G){const Fa=Fn.g?Fn.g.getResponseHeader("X-HTTP-Session-Id"):null;Fa&&(g.wa=Fa,Ve(g.J,g.G,Fa))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var q=o;if(g.na=Uu(g,g.L?g.ba:null,g.W),q.L){mu(g.h,q);var fe=q,He=g.O;He&&(fe.H=He),fe.D&&(Ca(fe),Mi(fe)),g.g=q}else xu(g);f.i.length>0&&Bi(f)}else Pe[0]!="stop"&&Pe[0]!="close"||pr(f,7);else f.I==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?pr(f,7):Oa(f):Pe[0]!="noop"&&f.l&&f.l.qa(Pe),f.A=0)}}ws(4)}catch{}}var qg=class{constructor(o,u){this.g=o,this.map=u}};function fu(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function du(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function pu(o){return o.h?1:o.g?o.g.size:0}function Da(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ka(o,u){o.g?o.g.add(u):o.h=u}function mu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}fu.prototype.cancel=function(){if(this.i=gu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function gu(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.G);return u}return S(o.i)}var _u=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hg(o,u){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const g=o[f].indexOf("=");let R,P=null;g>=0?(R=o[f].substring(0,g),P=o[f].substring(g+1)):R=o[f],u(R,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function xn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof xn?(this.l=o.l,Cs(this,o.j),this.o=o.o,this.g=o.g,Ps(this,o.u),this.h=o.h,Va(this,wu(o.i)),this.m=o.m):o&&(u=String(o).match(_u))?(this.l=!1,Cs(this,u[1]||"",!0),this.o=Ds(u[2]||""),this.g=Ds(u[3]||"",!0),Ps(this,u[4]),this.h=Ds(u[5]||"",!0),Va(this,u[6]||"",!0),this.m=Ds(u[7]||"")):(this.l=!1,this.i=new Vs(null,this.l))}xn.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(ks(u,yu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ks(u,yu,!0),"@"),o.push(Ss(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(ks(f,f.charAt(0)=="/"?Kg:Wg,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",ks(f,Qg)),o.join("")},xn.prototype.resolve=function(o){const u=Wt(this);let f=!!o.j;f?Cs(u,o.j):f=!!o.o,f?u.o=o.o:f=!!o.g,f?u.g=o.g:f=o.u!=null;var g=o.h;if(f)Ps(u,o.u);else if(f=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var R=u.h.lastIndexOf("/");R!=-1&&(g=u.h.slice(0,R+1)+g)}if(R=g,R==".."||R==".")g="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){g=R.lastIndexOf("/",0)==0,R=R.split("/");const P=[];for(let q=0;q<R.length;){const fe=R[q++];fe=="."?g&&q==R.length&&P.push(""):fe==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),g&&q==R.length&&P.push("")):(P.push(fe),g=!0)}g=P.join("/")}else g=R}return f?u.h=g:f=o.i.toString()!=="",f?Va(u,wu(o.i)):f=!!o.m,f&&(u.m=o.m),u};function Wt(o){return new xn(o)}function Cs(o,u,f){o.j=f?Ds(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ps(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function Va(o,u,f){u instanceof Vs?(o.i=u,Jg(o.i,o.l)):(f||(u=ks(u,Gg)),o.i=new Vs(u,o.l))}function Ve(o,u,f){o.i.set(u,f)}function Li(o){return Ve(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Ds(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ks(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,zg),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function zg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var yu=/[#\/\?@]/g,Wg=/[#\?:]/g,Kg=/[#\?]/g,Gg=/[#\?@]/g,Qg=/#/g;function Vs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function dr(o){o.g||(o.g=new Map,o.h=0,o.i&&Hg(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Vs.prototype,t.add=function(o,u){dr(this),this.i=null,o=Ur(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function vu(o,u){dr(o),u=Ur(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Eu(o,u){return dr(o),u=Ur(o,u),o.g.has(u)}t.forEach=function(o,u){dr(this),this.g.forEach(function(f,g){f.forEach(function(R){o.call(u,R,g,this)},this)},this)};function Tu(o,u){dr(o);let f=[];if(typeof u=="string")Eu(o,u)&&(f=f.concat(o.g.get(Ur(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)f=f.concat(o[u]);return f}t.set=function(o,u){return dr(this),this.i=null,o=Ur(this,o),Eu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=Tu(this,o),o.length>0?String(o[0]):u):u};function Iu(o,u,f){vu(o,u),f.length>0&&(o.i=null,o.g.set(Ur(o,u),S(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var f=u[g];const R=Ss(f);f=Tu(this,f);for(let P=0;P<f.length;P++){let q=R;f[P]!==""&&(q+="="+Ss(f[P])),o.push(q)}}return this.i=o.join("&")};function wu(o){const u=new Vs;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Ur(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Jg(o,u){u&&!o.j&&(dr(o),o.i=null,o.g.forEach(function(f,g){const R=g.toLowerCase();g!=R&&(vu(this,g),Iu(this,R,f))},o)),o.j=u}function Xg(o,u){const f=new bs;if(a.Image){const g=new Image;g.onload=d(On,f,"TestLoadImage: loaded",!0,u,g),g.onerror=d(On,f,"TestLoadImage: error",!1,u,g),g.onabort=d(On,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=d(On,f,"TestLoadImage: timeout",!1,u,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Yg(o,u){const f=new bs,g=new AbortController,R=setTimeout(()=>{g.abort(),On(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(R),P.ok?On(f,"TestPingServer: ok",!0,u):On(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),On(f,"TestPingServer: error",!1,u)})}function On(o,u,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function Zg(){this.g=new ot}function Na(o){this.i=o.Sb||null,this.h=o.ab||!1}m(Na,At),Na.prototype.g=function(){return new Fi(this.i,this.h)};function Fi(o,u){U.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Fi,U),t=Fi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,xs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ns(this)),this.readyState=0},t.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,xs(this)),this.g&&(this.readyState=3,xs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Au(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Au(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}t.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ns(this):xs(this),this.readyState==3&&Au(this)}},t.Oa=function(o){this.g&&(this.response=this.responseText=o,Ns(this))},t.Na=function(o){this.g&&(this.response=o,Ns(this))},t.ga=function(){this.g&&Ns(this)};function Ns(o){o.readyState=4,o.l=null,o.j=null,o.B=null,xs(o)}t.setRequestHeader=function(o,u){this.A.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function xs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Fi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function bu(o){let u="";return dt(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function xa(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=bu(f),typeof o=="string"?f!=null&&Ss(f):Ve(o,u,f))}function Le(o){U.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Le,U);var e_=/^https?$/i,t_=["POST","PUT"];t=Le.prototype,t.Fa=function(o){this.H=o},t.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ou.g(),this.g.onreadystatechange=v(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){Su(this,P);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),R=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(t_,u,void 0)>=0)||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,q]of f)this.g.setRequestHeader(P,q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(P){Su(this,P)}};function Su(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Ru(o),Ui(o)}function Ru(o){o.A||(o.A=!0,j(o,"complete"),j(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,j(this,"complete"),j(this,"abort"),Ui(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ui(this,!0)),Le.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Cu(this):this.Xa())},t.Xa=function(){Cu(this)};function Cu(o){if(o.h&&typeof i<"u"){if(o.v&&Mn(o)==4)setTimeout(o.Ca.bind(o),0);else if(j(o,"readystatechange"),Mn(o)==4){o.h=!1;try{const P=o.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=P===0){let q=String(o.D).match(_u)[1]||null;!q&&a.self&&a.self.location&&(q=a.self.location.protocol.slice(0,-1)),g=!e_.test(q?q.toLowerCase():"")}f=g}if(f)j(o,"complete"),j(o,"success");else{o.o=6;try{var R=Mn(o)>2?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.ca()+"]",Ru(o)}}finally{Ui(o)}}}}function Ui(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,u||j(o,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Mn(o){return o.g?o.g.readyState:0}t.ca=function(){try{return Mn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),it(u)}};function Pu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function n_(o){const u={};o=(o.g&&Mn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(T(o[g]))continue;var f=jg(o[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[R]||[];u[R]=P,P.push(f)}hn(u,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Os(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Du(o){this.za=0,this.i=[],this.j=new bs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Os("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Os("baseRetryDelayMs",5e3,o),this.Za=Os("retryDelaySeedMs",1e4,o),this.Ta=Os("forwardChannelMaxRetries",2,o),this.va=Os("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new fu(o&&o.concurrentRequestLimit),this.Ba=new Zg,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Du.prototype,t.ka=8,t.I=1,t.connect=function(o,u,f,g){pt(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Uu(this,null,this.W),Bi(this)};function Oa(o){if(ku(o),o.I==3){var u=o.V++,f=Wt(o.J);if(Ve(f,"SID",o.M),Ve(f,"RID",u),Ve(f,"TYPE","terminate"),Ms(o,f),u=new Nn(o,o.j,u),u.M=2,u.A=Li(Wt(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=u.A,f=!0),f||(u.g=ju(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Mi(u)}Fu(o)}function ji(o){o.g&&(La(o),o.g.cancel(),o.g=null)}function ku(o){ji(o),o.v&&(a.clearTimeout(o.v),o.v=null),$i(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Bi(o){if(!du(o.h)&&!o.m){o.m=!0;var u=o.Ea;oe||E(),re||(oe(),re=!0),b.add(u,o),o.D=0}}function r_(o,u){return pu(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=As(h(o.Ea,o,u),Lu(o,o.D)),o.D++,!0)}t.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const R=new Nn(this,this.j,o);let P=this.o;if(this.U&&(P?(P=Et(P),kn(P,this.U)):P=this.U),this.u!==null||this.R||(R.J=P,P=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Nu(this,R,u),f=Wt(this.J),Ve(f,"RID",o),Ve(f,"CVER",22),this.G&&Ve(f,"X-HTTP-Session-Id",this.G),Ms(this,f),P&&(this.R?u="headers="+Ss(bu(P))+"&"+u:this.u&&xa(f,this.u,P)),ka(this.h,R),this.Ra&&Ve(f,"TYPE","init"),this.S?(Ve(f,"$req",u),Ve(f,"SID","null"),R.U=!0,Ra(R,f,null)):Ra(R,f,u),this.I=2}}else this.I==3&&(o?Vu(this,o):this.i.length==0||du(this.h)||Vu(this))};function Vu(o,u){var f;u?f=u.l:f=o.V++;const g=Wt(o.J);Ve(g,"SID",o.M),Ve(g,"RID",f),Ve(g,"AID",o.K),Ms(o,g),o.u&&o.o&&xa(g,o.u,o.o),f=new Nn(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Nu(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),ka(o.h,f),Ra(f,g,u)}function Ms(o,u){o.H&&dt(o.H,function(f,g){Ve(u,g,f)}),o.l&&dt({},function(f,g){Ve(u,g,f)})}function Nu(o,u,f){f=Math.min(o.i.length,f);const g=o.l?h(o.l.Ka,o.l,o):null;e:{var R=o.i;let fe=-1;for(;;){const He=["count="+f];fe==-1?f>0?(fe=R[0].g,He.push("ofs="+fe)):fe=0:He.push("ofs="+fe);let Pe=!0;for(let Ge=0;Ge<f;Ge++){var P=R[Ge].g;const Kt=R[Ge].map;if(P-=fe,P<0)fe=Math.max(0,R[Ge].g-100),Pe=!1;else try{P="req"+P+"_"||"";try{var q=Kt instanceof Map?Kt:Object.entries(Kt);for(const[mr,Ln]of q){let Fn=Ln;l(Ln)&&(Fn=Te(Ln)),He.push(P+mr+"="+encodeURIComponent(Fn))}}catch(mr){throw He.push(P+"type="+encodeURIComponent("_badmap")),mr}}catch{g&&g(Kt)}}if(Pe){q=He.join("&");break e}}q=void 0}return o=o.i.splice(0,f),u.G=o,q}function xu(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;oe||E(),re||(oe(),re=!0),b.add(u,o),o.A=0}}function Ma(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=As(h(o.Da,o),Lu(o,o.A)),o.A++,!0)}t.Da=function(){if(this.v=null,Ou(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=As(h(this.Wa,this),o)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,pt(10),ji(this),Ou(this))};function La(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Ou(o){o.g=new Nn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=Wt(o.na);Ve(u,"RID","rpc"),Ve(u,"SID",o.M),Ve(u,"AID",o.K),Ve(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&Ve(u,"TO",o.ia),Ve(u,"TYPE","xmlhttp"),Ms(o,u),o.u&&o.o&&xa(u,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=Li(Wt(u)),f.u=null,f.R=!0,cu(f,o)}t.Va=function(){this.C!=null&&(this.C=null,ji(this),Ma(this),pt(19))};function $i(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Mu(o,u){var f=null;if(o.g==u){$i(o),La(o),o.g=null;var g=2}else if(Da(o.h,u))f=u.G,mu(o.h,u),g=1;else return;if(o.I!=0){if(u.o)if(g==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var R=o.D;g=hr(),j(g,new su(g,f)),Bi(o)}else xu(o);else if(R=u.m,R==3||R==0&&u.X>0||!(g==1&&r_(o,u)||g==2&&Ma(o)))switch(f&&f.length>0&&(u=o.h,u.i=u.i.concat(f)),R){case 1:pr(o,5);break;case 4:pr(o,10);break;case 3:pr(o,6);break;default:pr(o,2)}}}function Lu(o,u){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*u}function pr(o,u){if(o.j.info("Error code "+u),u==2){var f=h(o.bb,o),g=o.Ua;const R=!g;g=new xn(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Cs(g,"https"),Li(g),R?Xg(g.toString(),f):Yg(g.toString(),f)}else pt(2);o.I=0,o.l&&o.l.pa(u),Fu(o),ku(o)}t.bb=function(o){o?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Fu(o){if(o.I=0,o.ja=[],o.l){const u=gu(o.h);(u.length!=0||o.i.length!=0)&&(N(o.ja,u),N(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function Uu(o,u,f){var g=f instanceof xn?Wt(f):new xn(f);if(g.g!="")u&&(g.g=u+"."+g.g),Ps(g,g.u);else{var R=a.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;const P=new xn(null);g&&Cs(P,g),u&&(P.g=u),R&&Ps(P,R),f&&(P.h=f),g=P}return f=o.G,u=o.wa,f&&u&&Ve(g,f,u),Ve(g,"VER",o.ka),Ms(o,g),g}function ju(o,u,f){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new Le(new Na({ab:f})):new Le(o.ma),u.Fa(o.L),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bu(){}t=Bu.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function qi(){}qi.prototype.g=function(o,u){return new St(o,u)};function St(o,u){U.call(this),this.g=new Du(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!T(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!T(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new jr(this)}m(St,U),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Oa(this.g)},St.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=Te(o),o=f);u.i.push(new qg(u.Ya++,o)),u.I==3&&Bi(u)},St.prototype.N=function(){this.g.l=null,delete this.j,Oa(this.g),delete this.g,St.Z.N.call(this)};function $u(o){Lr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}m($u,Lr);function qu(){Xe.call(this),this.status=1}m(qu,Xe);function jr(o){this.g=o}m(jr,Bu),jr.prototype.ra=function(){j(this.g,"a")},jr.prototype.qa=function(o){j(this.g,new $u(o))},jr.prototype.pa=function(o){j(this.g,new qu)},jr.prototype.oa=function(){j(this.g,"b")},qi.prototype.createWebChannel=qi.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,Vp=function(){return new qi},kp=function(){return hr()},Dp=Ke,Dl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Oi.NO_ERROR=0,Oi.TIMEOUT=8,Oi.HTTP_ERROR=6,io=Oi,iu.COMPLETE="complete",Pp=iu,bt.EventType=Mt,Mt.OPEN="a",Mt.CLOSE="b",Mt.ERROR="c",Mt.MESSAGE="d",U.prototype.listen=U.prototype.J,Bs=bt,Le.prototype.listenOnce=Le.prototype.K,Le.prototype.getLastError=Le.prototype.Ha,Le.prototype.getLastErrorCode=Le.prototype.ya,Le.prototype.getStatus=Le.prototype.ca,Le.prototype.getResponseJson=Le.prototype.La,Le.prototype.getResponseText=Le.prototype.la,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Fa,Cp=Le}).apply(typeof Qi<"u"?Qi:typeof self<"u"?self:typeof window<"u"?window:{});const jh="@firebase/firestore",Bh="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new dc("@firebase/firestore");function Hr(){return Pr.logLevel}function G(t,...e){if(Pr.logLevel<=me.DEBUG){const n=e.map(gc);Pr.debug(`Firestore (${_s}): ${t}`,...n)}}function bn(t,...e){if(Pr.logLevel<=me.ERROR){const n=e.map(gc);Pr.error(`Firestore (${_s}): ${t}`,...n)}}function ls(t,...e){if(Pr.logLevel<=me.WARN){const n=e.map(gc);Pr.warn(`Firestore (${_s}): ${t}`,...n)}}function gc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Np(t,r,n)}function Np(t,e,n){let r=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw bn(r),new Error(r)}function be(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Np(e,s,r)}function ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(lt.UNAUTHENTICATED)))}shutdown(){}}class AT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class bT{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zn,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zn)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string",31837,{l:r}),new xp(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string",2055,{h:e}),new lt(e)}}class ST{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class RT{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new ST(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(lt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class $h{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CT{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){be(this.o===void 0,3512);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new $h(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(be(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new $h(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=PT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function kl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return sl(s)===sl(i)?ge(s,i):sl(s)?1:-1}return ge(t.length,e.length)}const DT=55296,kT=57343;function sl(t){const e=t.charCodeAt(0);return e>=DT&&e<=kT}function cs(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="__name__";class Jt{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Jt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jt?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Jt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=Jt.isNumericId(e),s=Jt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Jt.extractNumericId(e).compare(Jt.extractNumericId(n)):kl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yn.fromString(e.substring(4,e.length-2))}}class xe extends Jt{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new xe(n)}static emptyPath(){return new xe([])}}const VT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Jt{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return VT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qh}static keyField(){return new tt([qh])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new X(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new X(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new X(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(xe.fromString(e))}static fromName(e){return new te(xe.fromString(e).popFirst(5))}static empty(){return new te(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new xe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t,e,n){if(!n)throw new X(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xT(t,e,n,r){if(e===!0&&r===!0)throw new X(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hh(t){if(!te.isDocumentKey(t))throw new X(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Op(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function yc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se(12329,{type:typeof t})}function us(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yc(t);throw new X(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ri(t,e){if(!Op(t))throw new X(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new X(F.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=-62135596800,Wh=1e6;class Ne{static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Wh);return new Ne(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<zh)throw new X(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Wh}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ri(e,Ne._jsonSchema))return new Ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-zh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ne._jsonSchemaVersion="firestore/timestamp/1.0",Ne._jsonSchema={type:$e("string",Ne._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new Ne(0,0))}static max(){return new le(new Ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=-1;function OT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new sr(s,te.empty(),e)}function MT(t){return new sr(t.readTime,t.key,di)}class sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new sr(le.min(),te.empty(),di)}static max(){return new sr(le.max(),te.empty(),di)}}function LT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==FT)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):O.reject(n)}static resolve(e){return new O(((n,r)=>{n(e)}))}static reject(e){return new O(((n,r)=>{r(e)}))}static waitFor(e){return new O(((n,r)=>{let s=0,i=0,a=!1;e.forEach((l=>{++s,l.next((()=>{++i,a&&i===s&&n()}),(c=>r(c)))})),a=!0,i===s&&n()}))}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next((s=>s?O.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new O(((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next((d=>{a[h]=d,++l,l===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,n){return new O(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function jT(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function vs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}aa.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=-1;function la(t){return t==null}function Co(t){return t===0&&1/t==-1/0}function BT(t){return typeof t=="number"&&Number.isInteger(t)&&!Co(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="";function $T(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Kh(e)),e=qT(t.get(n),e);return Kh(e)}function qT(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Mp:n+="";break;default:n+=i}}return n}function Kh(t){return t+Mp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Nr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Lp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ji(this.root,e,this.comparator,!0)}}class Ji{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw se(27949);return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw se(57766)}get value(){throw se(16141)}get color(){throw se(16727)}get left(){throw se(29726)}get right(){throw se(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qh(this.data.getIterator())}getIteratorFrom(e){return new Qh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class Qh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new We(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return cs(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Fp("Invalid base64 string: "+i):i}})(e);return new rt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const HT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ir(t){if(be(!!t,39018),typeof t=="string"){let e=0;const n=HT.exec(t);if(be(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function or(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="server_timestamp",jp="__type__",Bp="__previous_value__",$p="__local_write_time__";function Ec(t){return(t?.mapValue?.fields||{})[jp]?.stringValue===Up}function ca(t){const e=t.mapValue.fields[Bp];return Ec(e)?ca(e):e}function pi(t){const e=ir(t.mapValue.fields[$p].timestampValue);return new Ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,n,r,s,i,a,l,c,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=d}}const Po="(default)";class mi{constructor(e,n){this.projectId=e,this.database=n||Po}static empty(){return new mi("","")}get isDefaultDatabase(){return this.database===Po}isEqual(e){return e instanceof mi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="__type__",WT="__max__",Xi={mapValue:{}},Hp="__vector__",Do="value";function ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ec(t)?4:GT(t)?9007199254740991:KT(t)?10:11:se(28295,{value:t})}function cn(t,e){if(t===e)return!0;const n=ar(t);if(n!==ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pi(t).isEqual(pi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=ir(s.timestampValue),l=ir(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return or(s.bytesValue).isEqual(or(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Fe(s.doubleValue),l=Fe(i.doubleValue);return a===l?Co(a)===Co(l):isNaN(a)&&isNaN(l)}return!1})(t,e);case 9:return cs(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Gh(a)!==Gh(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!cn(a[c],l[c])))return!1;return!0})(t,e);default:return se(52216,{left:t})}}function gi(t,e){return(t.values||[]).find((n=>cn(n,e)))!==void 0}function hs(t,e){if(t===e)return 0;const n=ar(t),r=ar(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=Fe(i.integerValue||i.doubleValue),c=Fe(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return Jh(t.timestampValue,e.timestampValue);case 4:return Jh(pi(t),pi(e));case 5:return kl(t.stringValue,e.stringValue);case 6:return(function(i,a){const l=or(i),c=or(a);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=ge(l[h],c[h]);if(d!==0)return d}return ge(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=ge(Fe(i.latitude),Fe(a.latitude));return l!==0?l:ge(Fe(i.longitude),Fe(a.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Xh(t.arrayValue,e.arrayValue);case 10:return(function(i,a){const l=i.fields||{},c=a.fields||{},h=l[Do]?.arrayValue,d=c[Do]?.arrayValue,m=ge(h?.values?.length||0,d?.values?.length||0);return m!==0?m:Xh(h,d)})(t.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Xi.mapValue&&a===Xi.mapValue)return 0;if(i===Xi.mapValue)return 1;if(a===Xi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let m=0;m<c.length&&m<d.length;++m){const v=kl(c[m],d[m]);if(v!==0)return v;const S=hs(l[c[m]],h[d[m]]);if(S!==0)return S}return ge(c.length,d.length)})(t.mapValue,e.mapValue);default:throw se(23264,{he:n})}}function Jh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=ir(t),r=ir(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function Xh(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=hs(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function fs(t){return Vl(t)}function Vl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=ir(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return or(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return te.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Vl(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Vl(n.fields[a])}`;return s+"}"})(t.mapValue):se(61005,{value:t})}function oo(t){switch(ar(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ca(t);return e?16+oo(e):16;case 5:return 2*t.stringValue.length;case 6:return or(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+oo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Nr(r.fields,((i,a)=>{s+=i.length+oo(a)})),s})(t.mapValue);default:throw se(13486,{value:t})}}function Nl(t){return!!t&&"integerValue"in t}function Tc(t){return!!t&&"arrayValue"in t}function Yh(t){return!!t&&"nullValue"in t}function Zh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ao(t){return!!t&&"mapValue"in t}function KT(t){return(t?.mapValue?.fields||{})[qp]?.stringValue===Hp}function Zs(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Nr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Zs(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zs(t.arrayValue.values[n]);return e}return{...t}}function GT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===WT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ao(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zs(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach(((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Zs(a):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ao(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ao(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Nr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new kt(Zs(this.value))}}function zp(t){const e=[];return Nr(t.fields,((n,r)=>{const s=new tt([n]);if(ao(r)){const i=zp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new ut(e,0,le.min(),le.min(),le.min(),kt.empty(),0)}static newFoundDocument(e,n,r,s){return new ut(e,1,n,le.min(),r,s,0)}static newNoDocument(e,n){return new ut(e,2,n,le.min(),le.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,le.min(),le.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.position=e,this.inclusive=n}}function ef(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(a.referenceValue),n.key):r=hs(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function tf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n="asc"){this.field=e,this.dir=n}}function QT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{}class ze extends Wp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new XT(e,n,r):n==="array-contains"?new eI(e,r):n==="in"?new tI(e,r):n==="not-in"?new nI(e,r):n==="array-contains-any"?new rI(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new YT(e,r):new ZT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(hs(n,this.value)):n!==null&&ar(this.value)===ar(n)&&this.matchesComparison(hs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends Wp{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new un(e,n)}matches(e){return Kp(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Kp(t){return t.op==="and"}function Gp(t){return JT(t)&&Kp(t)}function JT(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function xl(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+fs(t.value);if(Gp(t))return t.filters.map((e=>xl(e))).join(",");{const e=t.filters.map((n=>xl(n))).join(",");return`${t.op}(${e})`}}function Qp(t,e){return t instanceof ze?(function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&cn(r.value,s.value)})(t,e):t instanceof un?(function(r,s){return s instanceof un&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,l)=>i&&Qp(a,s.filters[l])),!0):!1})(t,e):void se(19439)}function Jp(t){return t instanceof ze?(function(n){return`${n.field.canonicalString()} ${n.op} ${fs(n.value)}`})(t):t instanceof un?(function(n){return n.op.toString()+" {"+n.getFilters().map(Jp).join(" ,")+"}"})(t):"Filter"}class XT extends ze{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class YT extends ze{constructor(e,n){super(e,"in",n),this.keys=Xp("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class ZT extends ze{constructor(e,n){super(e,"not-in",n),this.keys=Xp("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Xp(t,e){return(e.arrayValue?.values||[]).map((n=>te.fromName(n.referenceValue)))}class eI extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tc(n)&&gi(n.arrayValue,this.value)}}class tI extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gi(this.value.arrayValue,n)}}class nI extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!gi(this.value.arrayValue,n)}}class rI extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tc(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>gi(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function nf(t,e=null,n=[],r=[],s=null,i=null,a=null){return new sI(t,e,n,r,s,i,a)}function Ic(t){const e=ce(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>xl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),la(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>fs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>fs(r))).join(",")),e.Te=n}return e.Te}function wc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!QT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Qp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tf(t.startAt,e.startAt)&&tf(t.endAt,e.endAt)}function Ol(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function iI(t,e,n,r,s,i,a,l){return new ua(t,e,n,r,s,i,a,l)}function Ac(t){return new ua(t)}function rf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function oI(t){return t.collectionGroup!==null}function ei(t){const e=ce(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new We(tt.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Vo(i,r))})),n.has(tt.keyField().canonicalString())||e.Ie.push(new Vo(tt.keyField(),r))}return e.Ie}function Zt(t){const e=ce(t);return e.Ee||(e.Ee=aI(e,ei(t))),e.Ee}function aI(t,e){if(t.limitType==="F")return nf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Vo(s.field,i)}));const n=t.endAt?new ko(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ko(t.startAt.position,t.startAt.inclusive):null;return nf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ml(t,e,n){return new ua(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ha(t,e){return wc(Zt(t),Zt(e))&&t.limitType===e.limitType}function Yp(t){return`${Ic(Zt(t))}|lt:${t.limitType}`}function zr(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Jp(s))).join(", ")}]`),la(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>fs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>fs(s))).join(",")),`Target(${r})`})(Zt(t))}; limitType=${t.limitType})`}function fa(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of ei(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(a,l,c){const h=ef(a,l,c);return a.inclusive?h<=0:h<0})(r.startAt,ei(r),s)||r.endAt&&!(function(a,l,c){const h=ef(a,l,c);return a.inclusive?h>=0:h>0})(r.endAt,ei(r),s))})(t,e)}function lI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Zp(t){return(e,n)=>{let r=!1;for(const s of ei(t)){const i=cI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function cI(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):(function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?hs(c,h):se(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Nr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Lp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=new Oe(te.comparator);function Sn(){return uI}const em=new Oe(te.comparator);function $s(...t){let e=em;for(const n of t)e=e.insert(n.key,n);return e}function tm(t){let e=em;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Ar(){return ti()}function nm(){return ti()}function ti(){return new xr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const hI=new Oe(te.comparator),fI=new We(te.comparator);function _e(...t){let e=fI;for(const n of t)e=e.add(n);return e}const dI=new We(ge);function pI(){return dI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Co(e)?"-0":e}}function rm(t){return{integerValue:""+t}}function mI(t,e){return BT(e)?rm(e):bc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(){this._=void 0}}function gI(t,e,n){return t instanceof No?(function(s,i){const a={fields:{[jp]:{stringValue:Up},[$p]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ec(i)&&(i=ca(i)),i&&(a.fields[Bp]=i),{mapValue:a}})(n,e):t instanceof _i?im(t,e):t instanceof yi?om(t,e):(function(s,i){const a=sm(s,i),l=sf(a)+sf(s.Ae);return Nl(a)&&Nl(s.Ae)?rm(l):bc(s.serializer,l)})(t,e)}function _I(t,e,n){return t instanceof _i?im(t,e):t instanceof yi?om(t,e):n}function sm(t,e){return t instanceof xo?(function(r){return Nl(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class No extends da{}class _i extends da{constructor(e){super(),this.elements=e}}function im(t,e){const n=am(e);for(const r of t.elements)n.some((s=>cn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class yi extends da{constructor(e){super(),this.elements=e}}function om(t,e){let n=am(e);for(const r of t.elements)n=n.filter((s=>!cn(s,r)));return{arrayValue:{values:n}}}class xo extends da{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function sf(t){return Fe(t.integerValue||t.doubleValue)}function am(t){return Tc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function yI(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof _i&&s instanceof _i||r instanceof yi&&s instanceof yi?cs(r.elements,s.elements,cn):r instanceof xo&&s instanceof xo?cn(r.Ae,s.Ae):r instanceof No&&s instanceof No})(t.transform,e.transform)}class vI{constructor(e,n){this.version=e,this.transformResults=n}}class en{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pa{}function lm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Sc(t.key,en.none()):new Ci(t.key,t.data,en.none());{const n=t.data,r=kt.empty();let s=new We(tt.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Or(t.key,r,new Ut(s.toArray()),en.none())}}function EI(t,e,n){t instanceof Ci?(function(s,i,a){const l=s.value.clone(),c=af(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(t,e,n):t instanceof Or?(function(s,i,a){if(!lo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=af(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(cm(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,n)}function ni(t,e,n,r){return t instanceof Ci?(function(i,a,l,c){if(!lo(i.precondition,a))return l;const h=i.value.clone(),d=lf(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(t,e,n,r):t instanceof Or?(function(i,a,l,c){if(!lo(i.precondition,a))return l;const h=lf(i.fieldTransforms,c,a),d=a.data;return d.setAll(cm(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((m=>m.field)))})(t,e,n,r):(function(i,a,l){return lo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(t,e,n)}function TI(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=sm(r.transform,s||null);i!=null&&(n===null&&(n=kt.empty()),n.set(r.field,i))}return n||null}function of(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&cs(r,s,((i,a)=>yI(i,a)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ci extends pa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Or extends pa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cm(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function af(t,e,n){const r=new Map;be(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,_I(a,l,n[s]))}return r}function lf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,gI(i,a,e))}return r}class Sc extends pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class II extends pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&EI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ni(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ni(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=nm();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=lm(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(le.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),_e())}isEqual(e){return this.batchId===e.batchId&&cs(this.mutations,e.mutations,((n,r)=>of(n,r)))&&cs(this.baseMutations,e.baseMutations,((n,r)=>of(n,r)))}}class Rc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return hI})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Rc(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,ye;function SI(t){switch(t){case F.OK:return se(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return se(15467,{code:t})}}function um(t){if(t===void 0)return bn("GRPC error has no .code"),F.UNKNOWN;switch(t){case je.OK:return F.OK;case je.CANCELLED:return F.CANCELLED;case je.UNKNOWN:return F.UNKNOWN;case je.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case je.INTERNAL:return F.INTERNAL;case je.UNAVAILABLE:return F.UNAVAILABLE;case je.UNAUTHENTICATED:return F.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case je.NOT_FOUND:return F.NOT_FOUND;case je.ALREADY_EXISTS:return F.ALREADY_EXISTS;case je.PERMISSION_DENIED:return F.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case je.ABORTED:return F.ABORTED;case je.OUT_OF_RANGE:return F.OUT_OF_RANGE;case je.UNIMPLEMENTED:return F.UNIMPLEMENTED;case je.DATA_LOSS:return F.DATA_LOSS;default:return se(39323,{code:t})}}(ye=je||(je={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=new Yn([4294967295,4294967295],0);function cf(t){const e=RI().encode(t),n=new Rp;return n.update(e),new Uint8Array(n.digest())}function uf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Yn([n,r],0),new Yn([s,i],0)]}class Cc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qs(`Invalid padding: ${n}`);if(r<0)throw new qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Yn.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Yn.fromNumber(r)));return s.compare(CI)===1&&(s=new Yn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=cf(e),[r,s]=uf(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Cc(i,s,n);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.ge===0)return;const n=cf(e),[r,s]=uf(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Pi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ma(le.min(),s,new Oe(ge),Sn(),_e())}}class Pi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Pi(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class hm{constructor(e,n){this.targetId=e,this.Ce=n}}class fm{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class hf{constructor(){this.ve=0,this.Fe=ff(),this.Me=rt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=_e(),n=_e(),r=_e();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:se(38017,{changeType:i})}})),new Pi(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=ff()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,be(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class PI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Sn(),this.Je=Yi(),this.He=Yi(),this.Ye=new Oe(ge)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:se(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Ol(i))if(r===0){const a=new te(i.path);this.et(n,a,ut.newNoDocument(a,le.min()))}else be(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const l=this.ut(e),c=l?this.ct(l,e,a):1;if(c!==0){this.it(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=or(r).toUint8Array()}catch(c){if(c instanceof Fp)return ls("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Cc(a,s,i)}catch(c){return ls(c instanceof qs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,a)=>{const l=this.ot(a);if(l){if(i.current&&Ol(l.target)){const c=new te(l.target.path);this.It(c).has(a)||this.Et(a,c)||this.et(a,c,ut.newNoDocument(c,e))}i.Be&&(n.set(a,i.ke()),i.qe())}}));let r=_e();this.He.forEach(((i,a)=>{let l=!0;a.forEachWhile((c=>{const h=this.ot(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const s=new ma(e,n,this.Ye,this.je,r);return this.je=Sn(),this.Je=Yi(),this.He=Yi(),this.Ye=new Oe(ge),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new hf,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new We(ge),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new We(ge),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new hf),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Yi(){return new Oe(te.comparator)}function ff(){return new Oe(te.comparator)}const DI={asc:"ASCENDING",desc:"DESCENDING"},kI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VI={and:"AND",or:"OR"};class NI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ll(t,e){return t.useProto3Json||la(e)?e:{value:e}}function Oo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xI(t,e){return Oo(t,e.toTimestamp())}function tn(t){return be(!!t,49232),le.fromTimestamp((function(n){const r=ir(n);return new Ne(r.seconds,r.nanos)})(t))}function Pc(t,e){return Fl(t,e).canonicalString()}function Fl(t,e){const n=(function(s){return new xe(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function pm(t){const e=xe.fromString(t);return be(vm(e),10190,{key:e.toString()}),e}function Ul(t,e){return Pc(t.databaseId,e.path)}function il(t,e){const n=pm(e);if(n.get(1)!==t.databaseId.projectId)throw new X(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(gm(n))}function mm(t,e){return Pc(t.databaseId,e)}function OI(t){const e=pm(t);return e.length===4?xe.emptyPath():gm(e)}function jl(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gm(t){return be(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function df(t,e,n){return{name:Ul(t,e),fields:n.value.mapValue.fields}}function MI(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:se(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(be(d===void 0||typeof d=="string",58123),rt.fromBase64String(d||"")):(be(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),rt.fromUint8Array(d||new Uint8Array))})(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(h){const d=h.code===void 0?F.UNKNOWN:um(h.code);return new X(d,h.message||"")})(a);n=new fm(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=il(t,r.document.name),i=tn(r.document.updateTime),a=r.document.createTime?tn(r.document.createTime):le.min(),l=new kt({mapValue:{fields:r.document.fields}}),c=ut.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new co(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=il(t,r.document),i=r.readTime?tn(r.readTime):le.min(),a=ut.newNoDocument(s,i),l=r.removedTargetIds||[];n=new co([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=il(t,r.document),i=r.removedTargetIds||[];n=new co([],i,s,null)}else{if(!("filter"in e))return se(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new bI(s,i),l=r.targetId;n=new hm(l,a)}}return n}function LI(t,e){let n;if(e instanceof Ci)n={update:df(t,e.key,e.value)};else if(e instanceof Sc)n={delete:Ul(t,e.key)};else if(e instanceof Or)n={update:df(t,e.key,e.data),updateMask:WI(e.fieldMask)};else{if(!(e instanceof II))return se(16599,{Vt:e.type});n={verify:Ul(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const l=a.transform;if(l instanceof No)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof _i)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof yi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xo)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw se(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:xI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se(27497)})(t,e.precondition)),n}function FI(t,e){return t&&t.length>0?(be(e!==void 0,14353),t.map((n=>(function(s,i){let a=s.updateTime?tn(s.updateTime):tn(i);return a.isEqual(le.min())&&(a=tn(i)),new vI(a,s.transformResults||[])})(n,e)))):[]}function UI(t,e){return{documents:[mm(t,e.path)]}}function jI(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=mm(t,s);const i=(function(h){if(h.length!==0)return ym(un.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(v){return{field:Wr(v.field),direction:qI(v.dir)}})(d)))})(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Ll(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:n,parent:s}}function BI(t){let e=OI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=(function(m){const v=_m(m);return v instanceof un&&Gp(v)?v.getFilters():[v]})(n.where));let a=[];n.orderBy&&(a=(function(m){return m.map((v=>(function(N){return new Vo(Kr(N.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(v)))})(n.orderBy));let l=null;n.limit&&(l=(function(m){let v;return v=typeof m=="object"?m.value:m,la(v)?null:v})(n.limit));let c=null;n.startAt&&(c=(function(m){const v=!!m.before,S=m.values||[];return new ko(S,v)})(n.startAt));let h=null;return n.endAt&&(h=(function(m){const v=!m.before,S=m.values||[];return new ko(S,v)})(n.endAt)),iI(e,s,a,i,l,"F",c,h)}function $I(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function _m(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Kr(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Kr(n.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Kr(n.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Kr(n.unaryFilter.field);return ze.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return se(61313);default:return se(60726)}})(t):t.fieldFilter!==void 0?(function(n){return ze.create(Kr(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return se(58110);default:return se(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return un.create(n.compositeFilter.filters.map((r=>_m(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return se(1026)}})(n.compositeFilter.op))})(t):se(30097,{filter:t})}function qI(t){return DI[t]}function HI(t){return kI[t]}function zI(t){return VI[t]}function Wr(t){return{fieldPath:t.canonicalString()}}function Kr(t){return tt.fromServerFormat(t.fieldPath)}function ym(t){return t instanceof ze?(function(n){if(n.op==="=="){if(Zh(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NAN"}};if(Yh(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Zh(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NAN"}};if(Yh(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wr(n.field),op:HI(n.op),value:n.value}}})(t):t instanceof un?(function(n){const r=n.getFilters().map((s=>ym(s)));return r.length===1?r[0]:{compositeFilter:{op:zI(n.op),filters:r}}})(t):se(54877,{filter:t})}function WI(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function vm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,r,s,i=le.min(),a=le.min(),l=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.yt=e}}function GI(t){const e=BI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ml(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(){this.Cn=new JI}addToCollectionParentIndex(e,n){return this.Cn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(sr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(sr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class JI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new We(xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new We(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Em=41943040;class It{static withCacheSize(e){return new It(e,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(Em,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ds(0)}static cr(){return new ds(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="LruGarbageCollector",XI=1048576;function gf([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class YI{constructor(e){this.Ir=e,this.buffer=new We(gf),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();gf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ZI{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){G(mf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){vs(n)?G(mf,"Ignoring IndexedDB error during garbage collection: ",n):await ys(n)}await this.Vr(3e5)}))}}class ew{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return O.resolve(aa.ce);const r=new YI(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(pf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pf):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s)))).next((m=>(r=m,l=Date.now(),this.removeTargets(e,r,n)))).next((m=>(i=m,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((m=>(h=Date.now(),Hr()<=me.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m}))))}}function tw(t,e){return new ew(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(){this.changes=new xr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&ni(r.mutation,s,Ut.empty(),Ne.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,_e()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=_e()){const s=Ar();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let a=$s();return i.forEach(((l,c)=>{a=a.insert(l,c.overlayedDocument)})),a}))))}getOverlayedDocuments(e,n){const r=Ar();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,_e())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,l)=>{n.set(a,l)}))}))}computeViews(e,n,r,s){let i=Sn();const a=ti(),l=(function(){return ti()})();return n.forEach(((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Or)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ni(d.mutation,h,d.mutation.getFieldMask(),Ne.now())):a.set(h.key,Ut.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((h,d)=>a.set(h,d))),n.forEach(((h,d)=>l.set(h,new rw(d,a.get(h)??null)))),l)))}recalculateAndSaveOverlays(e,n){const r=ti();let s=new Oe(((a,l)=>a-l)),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((a=>{for(const l of a)l.keys().forEach((c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Ut.empty();d=l.applyToLocalView(h,d),r.set(c,d);const m=(s.get(l.batchId)||_e()).add(c);s=s.insert(l.batchId,m)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,m=nm();d.forEach((v=>{if(!i.has(v)){const S=lm(n.get(v),r.get(v));S!==null&&m.set(v,S),i=i.add(v)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return O.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(a){return te.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):oI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):O.resolve(Ar());let l=di,c=i;return a.next((h=>O.forEach(h,((d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(d)?O.resolve():this.remoteDocumentCache.getEntry(e,d).next((v=>{c=c.insert(d,v)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,c,h,_e()))).next((d=>({batchId:l,changes:tm(d)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next((r=>{let s=$s();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=$s();return this.indexManager.getCollectionParents(e,i).next((l=>O.forEach(l,(c=>{const h=(function(m,v){return new ua(v,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((m,v)=>{a=a.insert(m,v)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((a=>{i.forEach(((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ut.newInvalidDocument(d)))}));let l=$s();return a.forEach(((c,h)=>{const d=i.get(c);d!==void 0&&ni(d.mutation,h,Ut.empty(),Ne.now()),fa(n,h)&&(l=l.insert(c,h))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return O.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:tn(s.createTime)}})(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:GI(s.bundledQuery),readTime:tn(s.readTime)}})(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(){this.overlays=new Oe(te.comparator),this.qr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ar();return O.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),O.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const s=Ar(),i=n.length+1,a=new te(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Oe(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Ar(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Ar(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((h,d)=>l.set(h,d))),!(l.size()>=s)););return O.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new AI(n,r));let i=this.qr.get(n);i===void 0&&(i=_e(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.Qr=new We(Qe.$r),this.Ur=new We(Qe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new Qe(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new te(new xe([])),r=new Qe(n,e),s=new Qe(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new te(new xe([])),r=new Qe(n,e),s=new Qe(n,e+1);let i=_e();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const n=new Qe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return te.comparator(e.key,n.key)||ge(e.Yr,n.Yr)}static Kr(e,n){return ge(e.Yr,n.Yr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new We(Qe.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new wI(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new Qe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,n){return O.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?vc:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),s=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const l=this.Xr(a.Yr);i.push(l)})),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(ge);return n.forEach((s=>{const i=new Qe(s,0),a=new Qe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(l=>{r=r.add(l.Yr)}))})),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const a=new Qe(new te(i),0);let l=new We(ge);return this.Zr.forEachWhile((c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Yr)),!0)}),a),O.resolve(this.ti(l))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){be(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(n.mutations,(s=>{const i=new Qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new Qe(n,0),s=this.Zr.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this.ri=e,this.docs=(function(){return new Oe(te.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=Sn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))})),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Sn();const a=n.path,l=new te(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||LT(MT(d),r)<=0||(s.has(d.key)||fa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,n,r,s){se(9500)}ii(e,n){return O.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new uw(this)}getSize(e){return O.resolve(this.size)}}class uw extends nw{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),O.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.persistence=e,this.si=new xr((n=>Ic(n)),wc),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.oi=0,this._i=new Dc,this.targetCount=0,this.ai=ds.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),O.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ds(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Pr(n),O.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),O.waitFor(i).next((()=>s))}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n){this.ui={},this.overlays={},this.ci=new aa(0),this.li=!1,this.li=!0,this.hi=new aw,this.referenceDelegate=e(this),this.Pi=new hw(this),this.indexManager=new QI,this.remoteDocumentCache=(function(s){return new cw(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new KI(n),this.Ii=new iw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ow,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new lw(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const s=new fw(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return O.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class fw extends UT{constructor(e){super(),this.currentSequenceNumber=e}}class kc{constructor(e){this.persistence=e,this.Ri=new Dc,this.Vi=null}static mi(e){return new kc(e)}get fi(){if(this.Vi)return this.Vi;throw se(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,(r=>{const s=te.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,le.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Mo{constructor(e,n){this.persistence=e,this.pi=new xr((r=>$T(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=tw(this,n)}static mi(e,n){return new Mo(e,n)}Ei(){}di(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return O.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?O.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(a=>this.br(e,a,n).next((l=>{l||(r++,i.removeEntry(a,le.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=oo(e.data.value)),n}br(e,n,r){return O.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Vc(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return rE()?8:jT(ft())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new dw;return this.Ss(e,n,a).next((l=>{if(i.result=l,this.Vs)return this.bs(e,n,a,l.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(Hr()<=me.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",zr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(Hr()<=me.DEBUG&&G("QueryEngine","Query:",zr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Hr()<=me.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",zr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(n))):O.resolve())}ys(e,n){if(rf(n))return O.resolve(null);let r=Zt(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Ml(n,null,"F"),r=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=_e(...i);return this.ps.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const h=this.Ds(n,l);return this.Cs(n,h,a,c.readTime)?this.ys(e,Ml(n,null,"F")):this.vs(e,h,n,c)}))))})))))}ws(e,n,r,s){return rf(n)||s.isEqual(le.min())?O.resolve(null):this.ps.getDocuments(e,r).next((i=>{const a=this.Ds(n,i);return this.Cs(n,a,r,s)?O.resolve(null):(Hr()<=me.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),zr(n)),this.vs(e,a,n,OT(s,di)).next((l=>l)))}))}Ds(e,n){let r=new We(Zp(e));return n.forEach(((s,i)=>{fa(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Hr()<=me.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",zr(n)),this.ps.getDocumentsMatchingQuery(e,n,sr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="LocalStore",mw=3e8;class gw{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Oe(ge),this.xs=new xr((i=>Ic(i)),wc),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sw(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function _w(t,e,n,r){return new gw(t,e,n,r)}async function Im(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],l=[];let c=_e();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next((h=>({Ls:h,removedBatchIds:a,addedBatchIds:l})))}))}))}function yw(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,h,d){const m=h.batch,v=m.keys();let S=O.resolve();return v.forEach((N=>{S=S.next((()=>d.getEntry(c,N))).next((L=>{const x=h.docVersions.get(N);be(x!==null,48541),L.version.compareTo(x)<0&&(m.applyToRemoteDocument(L,h),L.isValidDocument()&&(L.setReadTime(h.commitVersion),d.addEntry(L)))}))})),S.next((()=>l.mutationQueue.removeMutationBatch(c,m)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=_e();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function wm(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function vw(t,e){const n=ce(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach(((d,m)=>{const v=s.get(m);if(!v)return;l.push(n.Pi.removeMatchingKeys(i,d.removedDocuments,m).next((()=>n.Pi.addMatchingKeys(i,d.addedDocuments,m))));let S=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(rt.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):d.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(d.resumeToken,r)),s=s.insert(m,S),(function(L,x,$){return L.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=mw?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(v,S,d)&&l.push(n.Pi.updateTargetData(i,S))}));let c=Sn(),h=_e();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))})),l.push(Ew(i,a,e.documentUpdates).next((d=>{c=d.ks,h=d.qs}))),!r.isEqual(le.min())){const d=n.Pi.getLastRemoteSnapshotVersion(i).next((m=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(d)}return O.waitFor(l).next((()=>a.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,h))).next((()=>c))})).then((i=>(n.Ms=s,i)))}function Ew(t,e,n){let r=_e(),s=_e();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let a=Sn();return n.forEach(((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(le.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):G(Nc,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)})),{ks:a,qs:s}}))}function Tw(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=vc),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Iw(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,O.resolve(s)):n.Pi.allocateTargetId(r).next((a=>(s=new Kn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function Bl(t,e,n){const r=ce(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!vs(a))throw a;G(Nc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function _f(t,e,n){const r=ce(t);let s=le.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,h,d){const m=ce(c),v=m.xs.get(d);return v!==void 0?O.resolve(m.Ms.get(v)):m.Pi.getTargetData(h,d)})(r,a,Zt(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next((c=>{i=c}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,e,n?s:le.min(),n?i:_e()))).next((l=>(ww(r,lI(e),l),{documents:l,Qs:i})))))}function ww(t,e,n){let r=t.Os.get(e)||le.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class yf{constructor(){this.activeTargetIds=pI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Aw{constructor(){this.Mo=new yf,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new yf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="ConnectivityMonitor";class Ef{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){G(vf,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){G(vf,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi=null;function $l(){return Zi===null?Zi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Zi++,"0x"+Zi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="RestConnection",Sw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Rw{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Po?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const a=$l(),l=this.zo(e,n.toUriEncodedString());G(ol,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:h}=new URL(l),d=ms(h);return this.Jo(e,l,c,r,d).then((m=>(G(ol,`Received RPC '${e}' ${a}: `,m),m)),(m=>{throw ls(ol,`RPC '${e}' ${a} failed with error: `,m,"url: ",l,"request:",r),m}))}Ho(e,n,r,s,i,a){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+_s})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=Sw[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class Pw extends Rw{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const a=$l();return new Promise(((l,c)=>{const h=new Cp;h.setWithCredentials(!0),h.listenOnce(Pp.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case io.NO_ERROR:const m=h.getResponseJson();G(at,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),l(m);break;case io.TIMEOUT:G(at,`RPC '${e}' ${a} timed out`),c(new X(F.DEADLINE_EXCEEDED,"Request time out"));break;case io.HTTP_ERROR:const v=h.getStatus();if(G(at,`RPC '${e}' ${a} failed with status:`,v,"response text:",h.getResponseText()),v>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const N=S?.error;if(N&&N.status&&N.message){const L=(function($){const W=$.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(W)>=0?W:F.UNKNOWN})(N.status);c(new X(L,N.message))}else c(new X(F.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new X(F.UNAVAILABLE,"Connection failed."));break;default:se(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{G(at,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);G(at,`RPC '${e}' ${a} sending request:`,s),h.send(n,"POST",d,r,15)}))}T_(e,n,r){const s=$l(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Vp(),l=kp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");G(at,`Creating RPC '${e}' stream ${s}: ${d}`,c);const m=a.createWebChannel(d,c);this.I_(m);let v=!1,S=!1;const N=new Cw({Yo:x=>{S?G(at,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(v||(G(at,`Opening RPC '${e}' stream ${s} transport.`),m.open(),v=!0),G(at,`RPC '${e}' stream ${s} sending:`,x),m.send(x))},Zo:()=>m.close()}),L=(x,$,W)=>{x.listen($,(J=>{try{W(J)}catch(K){setTimeout((()=>{throw K}),0)}}))};return L(m,Bs.EventType.OPEN,(()=>{S||(G(at,`RPC '${e}' stream ${s} transport opened.`),N.o_())})),L(m,Bs.EventType.CLOSE,(()=>{S||(S=!0,G(at,`RPC '${e}' stream ${s} transport closed`),N.a_(),this.E_(m))})),L(m,Bs.EventType.ERROR,(x=>{S||(S=!0,ls(at,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),N.a_(new X(F.UNAVAILABLE,"The operation could not be completed")))})),L(m,Bs.EventType.MESSAGE,(x=>{if(!S){const $=x.data[0];be(!!$,16349);const W=$,J=W?.error||W[0]?.error;if(J){G(at,`RPC '${e}' stream ${s} received error:`,J);const K=J.status;let oe=(function(E){const y=je[E];if(y!==void 0)return um(y)})(K),re=J.message;oe===void 0&&(oe=F.INTERNAL,re="Unknown error status: "+K+" with message "+J.message),S=!0,N.a_(new X(oe,re)),m.close()}else G(at,`RPC '${e}' stream ${s} received:`,$),N.u_($)}})),L(l,Dp.STAT_EVENT,(x=>{x.stat===Dl.PROXY?G(at,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Dl.NOPROXY&&G(at,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{N.__()}),0),N}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function al(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){return new NI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="PersistentStream";class bm{constructor(e,n,r,s,i,a,l,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Am(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(bn(n.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new X(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return G(Tf,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(G(Tf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Dw extends bm{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=MI(this.serializer,e),r=(function(i){if(!("targetChange"in i))return le.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?le.min():a.readTime?tn(a.readTime):le.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=jl(this.serializer),n.addTarget=(function(i,a){let l;const c=a.target;if(l=Ol(c)?{documents:UI(i,c)}:{query:jI(i,c).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=dm(i,a.resumeToken);const h=Ll(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(le.min())>0){l.readTime=Oo(i,a.snapshotVersion.toTimestamp());const h=Ll(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const r=$I(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=jl(this.serializer),n.removeTarget=e,this.q_(n)}}class kw extends bm{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=FI(e.writeResults,e.commitTime),r=tn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=jl(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>LI(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{}class Nw extends Vw{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new X(F.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,Fl(n,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(F.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(e,Fl(n,r),s,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new X(F.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class xw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(bn(n),this.aa=!1):G("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="RemoteStore";class Ow{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{Mr(this)&&(G(Dr,"Restarting streams for network reachability change."),await(async function(c){const h=ce(c);h.Ea.add(4),await Di(h),h.Ra.set("Unknown"),h.Ea.delete(4),await _a(h)})(this))}))})),this.Ra=new xw(r,s)}}async function _a(t){if(Mr(t))for(const e of t.da)await e(!0)}async function Di(t){for(const e of t.da)await e(!1)}function Sm(t,e){const n=ce(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Lc(n)?Mc(n):Es(n).O_()&&Oc(n,e))}function xc(t,e){const n=ce(t),r=Es(n);n.Ia.delete(e),r.O_()&&Rm(n,e),n.Ia.size===0&&(r.O_()?r.L_():Mr(n)&&n.Ra.set("Unknown"))}function Oc(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Es(t).Y_(e)}function Rm(t,e){t.Va.Ue(e),Es(t).Z_(e)}function Mc(t){t.Va=new PI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Es(t).start(),t.Ra.ua()}function Lc(t){return Mr(t)&&!Es(t).x_()&&t.Ia.size>0}function Mr(t){return ce(t).Ea.size===0}function Cm(t){t.Va=void 0}async function Mw(t){t.Ra.set("Online")}async function Lw(t){t.Ia.forEach(((e,n)=>{Oc(t,e)}))}async function Fw(t,e){Cm(t),Lc(t)?(t.Ra.ha(e),Mc(t)):t.Ra.set("Unknown")}async function Uw(t,e,n){if(t.Ra.set("Online"),e instanceof fm&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))})(t,e)}catch(r){G(Dr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Lo(t,r)}else if(e instanceof co?t.Va.Ze(e):e instanceof hm?t.Va.st(e):t.Va.tt(e),!n.isEqual(le.min()))try{const r=await wm(t.localStore);n.compareTo(r)>=0&&await(function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach(((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ia.get(h);d&&i.Ia.set(h,d.withResumeToken(c.resumeToken,a))}})),l.targetMismatches.forEach(((c,h)=>{const d=i.Ia.get(c);if(!d)return;i.Ia.set(c,d.withResumeToken(rt.EMPTY_BYTE_STRING,d.snapshotVersion)),Rm(i,c);const m=new Kn(d.target,c,h,d.sequenceNumber);Oc(i,m)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){G(Dr,"Failed to raise snapshot:",r),await Lo(t,r)}}async function Lo(t,e,n){if(!vs(e))throw e;t.Ea.add(1),await Di(t),t.Ra.set("Offline"),n||(n=()=>wm(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{G(Dr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await _a(t)}))}function Pm(t,e){return e().catch((n=>Lo(t,n,e)))}async function ya(t){const e=ce(t),n=lr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:vc;for(;jw(e);)try{const s=await Tw(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,Bw(e,s)}catch(s){await Lo(e,s)}Dm(e)&&km(e)}function jw(t){return Mr(t)&&t.Ta.length<10}function Bw(t,e){t.Ta.push(e);const n=lr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Dm(t){return Mr(t)&&!lr(t).x_()&&t.Ta.length>0}function km(t){lr(t).start()}async function $w(t){lr(t).ra()}async function qw(t){const e=lr(t);for(const n of t.Ta)e.ea(n.mutations)}async function Hw(t,e,n){const r=t.Ta.shift(),s=Rc.from(r,e,n);await Pm(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await ya(t)}async function zw(t,e){e&&lr(t).X_&&await(async function(r,s){if((function(a){return SI(a)&&a!==F.ABORTED})(s.code)){const i=r.Ta.shift();lr(r).B_(),await Pm(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await ya(r)}})(t,e),Dm(t)&&km(t)}async function If(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),G(Dr,"RemoteStore received new credentials");const r=Mr(n);n.Ea.add(3),await Di(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await _a(n)}async function Ww(t,e){const n=ce(t);e?(n.Ea.delete(2),await _a(n)):e||(n.Ea.add(2),await Di(n),n.Ra.set("Unknown"))}function Es(t){return t.ma||(t.ma=(function(n,r,s){const i=ce(n);return i.sa(),new Dw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:Mw.bind(null,t),t_:Lw.bind(null,t),r_:Fw.bind(null,t),H_:Uw.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Lc(t)?Mc(t):t.Ra.set("Unknown")):(await t.ma.stop(),Cm(t))}))),t.ma}function lr(t){return t.fa||(t.fa=(function(n,r,s){const i=ce(n);return i.sa(),new kw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:$w.bind(null,t),r_:zw.bind(null,t),ta:qw.bind(null,t),na:Hw.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await ya(t)):(await t.fa.stop(),t.Ta.length>0&&(G(Dr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new Fc(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uc(t,e){if(bn("AsyncQueue",`${e}: ${t}`),vs(t))return new X(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{static emptySet(e){return new rs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=$s(),this.sortedSet=new Oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.ga=new Oe(te.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):se(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class ps{constructor(e,n,r,s,i,a,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach((l=>{a.push({type:0,doc:l})})),new ps(e,n,rs.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Gw{constructor(){this.queries=Af(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ce(n),i=s.queries;s.queries=Af(),i.forEach(((a,l)=>{for(const c of l.Sa)c.onError(r)}))})(this,new X(F.ABORTED,"Firestore shutting down"))}}function Af(){return new xr((t=>Yp(t)),ha)}async function Qw(t,e){const n=ce(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Kw,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Uc(a,`Initialization of query '${zr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&jc(n)}async function Jw(t,e){const n=ce(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Xw(t,e){const n=ce(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&jc(n)}function Yw(t,e,n){const r=ce(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function jc(t){t.Ca.forEach((e=>{e.next()}))}var ql,bf;(bf=ql||(ql={})).Ma="default",bf.Cache="cache";class Zw{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ql.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e){this.key=e}}class Nm{constructor(e){this.key=e}}class eA{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=_e(),this.mutatedKeys=_e(),this.eu=Zp(e),this.tu=new rs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new wf,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,m)=>{const v=s.get(d),S=fa(this.query,m)?m:null,N=!!v&&this.mutatedKeys.has(v.key),L=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let x=!1;v&&S?v.data.isEqual(S.data)?N!==L&&(r.track({type:3,doc:S}),x=!0):this.su(v,S)||(r.track({type:2,doc:S}),x=!0,(c&&this.eu(S,c)>0||h&&this.eu(S,h)<0)&&(l=!0)):!v&&S?(r.track({type:0,doc:S}),x=!0):v&&!S&&(r.track({type:1,doc:v}),x=!0,(c||h)&&(l=!0)),x&&(S?(a=a.add(S),i=L?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((d,m)=>(function(S,N){const L=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se(20277,{Rt:x})}};return L(S)-L(N)})(d.type,m.type)||this.eu(d.doc,m.doc))),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,h=c!==this.Za;return this.Za=c,a.length!==0||h?{snapshot:new ps(this.query,e.tu,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new wf,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=_e(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new Nm(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new Vm(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=_e();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ps.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Bc="SyncEngine";class tA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class nA{constructor(e){this.key=e,this.hu=!1}}class rA{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new xr((l=>Yp(l)),ha),this.Iu=new Map,this.Eu=new Set,this.du=new Oe(te.comparator),this.Au=new Map,this.Ru=new Dc,this.Vu={},this.mu=new Map,this.fu=ds.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function sA(t,e,n=!0){const r=Um(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await xm(r,e,n,!0),s}async function iA(t,e){const n=Um(t);await xm(n,e,!0,!1)}async function xm(t,e,n,r){const s=await Iw(t.localStore,Zt(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await oA(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&Sm(t.remoteStore,s),l}async function oA(t,e,n,r,s){t.pu=(m,v,S)=>(async function(L,x,$,W){let J=x.view.ru($);J.Cs&&(J=await _f(L.localStore,x.query,!1).then((({documents:b})=>x.view.ru(b,J))));const K=W&&W.targetChanges.get(x.targetId),oe=W&&W.targetMismatches.get(x.targetId)!=null,re=x.view.applyChanges(J,L.isPrimaryClient,K,oe);return Rf(L,x.targetId,re.au),re.snapshot})(t,m,v,S);const i=await _f(t.localStore,e,!0),a=new eA(e,i.Qs),l=a.ru(i.documents),c=Pi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(l,t.isPrimaryClient,c);Rf(t,n,h.au);const d=new tA(e,n,a);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function aA(t,e,n){const r=ce(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!ha(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Bl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&xc(r.remoteStore,s.targetId),Hl(r,s.targetId)})).catch(ys)):(Hl(r,s.targetId),await Bl(r.localStore,s.targetId,!0))}async function lA(t,e){const n=ce(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xc(n.remoteStore,r.targetId))}async function cA(t,e,n){const r=gA(t);try{const s=await(function(a,l){const c=ce(a),h=Ne.now(),d=l.reduce(((S,N)=>S.add(N.key)),_e());let m,v;return c.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let N=Sn(),L=_e();return c.Ns.getEntries(S,d).next((x=>{N=x,N.forEach((($,W)=>{W.isValidDocument()||(L=L.add($))}))})).next((()=>c.localDocuments.getOverlayedDocuments(S,N))).next((x=>{m=x;const $=[];for(const W of l){const J=TI(W,m.get(W.key).overlayedDocument);J!=null&&$.push(new Or(W.key,J,zp(J.value.mapValue),en.exists(!0)))}return c.mutationQueue.addMutationBatch(S,h,$,l)})).next((x=>{v=x;const $=x.applyToLocalDocumentSet(m,L);return c.documentOverlayCache.saveOverlays(S,x.batchId,$)}))})).then((()=>({batchId:v.batchId,changes:tm(m)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,c){let h=a.Vu[a.currentUser.toKey()];h||(h=new Oe(ge)),h=h.insert(l,c),a.Vu[a.currentUser.toKey()]=h})(r,s.batchId,n),await ki(r,s.changes),await ya(r.remoteStore)}catch(s){const i=Uc(s,"Failed to persist write");n.reject(i)}}async function Om(t,e){const n=ce(t);try{const r=await vw(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=n.Au.get(i);a&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?be(a.hu,14607):s.removedDocuments.size>0&&(be(a.hu,42227),a.hu=!1))})),await ki(n,r,e)}catch(r){await ys(r)}}function Sf(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const c=ce(a);c.onlineState=l;let h=!1;c.queries.forEach(((d,m)=>{for(const v of m.Sa)v.va(l)&&(h=!0)})),h&&jc(c)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function uA(t,e,n){const r=ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new Oe(te.comparator);a=a.insert(i,ut.newNoDocument(i,le.min()));const l=_e().add(i),c=new ma(le.min(),new Map,new Oe(ge),a,l);await Om(r,c),r.du=r.du.remove(i),r.Au.delete(e),$c(r)}else await Bl(r.localStore,e,!1).then((()=>Hl(r,e,n))).catch(ys)}async function hA(t,e){const n=ce(t),r=e.batch.batchId;try{const s=await yw(n.localStore,e);Lm(n,r,null),Mm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ki(n,s)}catch(s){await ys(s)}}async function fA(t,e,n){const r=ce(t);try{const s=await(function(a,l){const c=ce(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next((m=>(be(m!==null,37113),d=m.keys(),c.mutationQueue.removeMutationBatch(h,m)))).next((()=>c.mutationQueue.performConsistencyCheck(h))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>c.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);Lm(r,e,n),Mm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ki(r,s)}catch(s){await ys(s)}}function Mm(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function Lm(t,e,n){const r=ce(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Hl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||Fm(t,r)}))}function Fm(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(xc(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),$c(t))}function Rf(t,e,n){for(const r of n)r instanceof Vm?(t.Ru.addReference(r.key,e),dA(t,r)):r instanceof Nm?(G(Bc,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Fm(t,r.key)):se(19791,{wu:r})}function dA(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(G(Bc,"New document in limbo: "+n),t.Eu.add(r),$c(t))}function $c(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new te(xe.fromString(e)),r=t.fu.next();t.Au.set(r,new nA(n)),t.du=t.du.insert(n,r),Sm(t.remoteStore,new Kn(Zt(Ac(n.path)),r,"TargetPurposeLimboResolution",aa.ce))}}async function ki(t,e,n){const r=ce(t),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,c)=>{a.push(r.pu(c,e,n).then((h=>{if((h||n)&&r.isPrimaryClient){const d=h?!h.fromCache:n?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(h){s.push(h);const d=Vc.As(c.targetId,h);i.push(d)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(c,h){const d=ce(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>O.forEach(h,(v=>O.forEach(v.Es,(S=>d.persistence.referenceDelegate.addReference(m,v.targetId,S))).next((()=>O.forEach(v.ds,(S=>d.persistence.referenceDelegate.removeReference(m,v.targetId,S)))))))))}catch(m){if(!vs(m))throw m;G(Nc,"Failed to update sequence numbers: "+m)}for(const m of h){const v=m.targetId;if(!m.fromCache){const S=d.Ms.get(v),N=S.snapshotVersion,L=S.withLastLimboFreeSnapshotVersion(N);d.Ms=d.Ms.insert(v,L)}}})(r.localStore,i))}async function pA(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){G(Bc,"User change. New user:",e.toKey());const r=await Im(n.localStore,e);n.currentUser=e,(function(i,a){i.mu.forEach((l=>{l.forEach((c=>{c.reject(new X(F.CANCELLED,a))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ki(n,r.Ls)}}function mA(t,e){const n=ce(t),r=n.Au.get(e);if(r&&r.hu)return _e().add(r.key);{let s=_e();const i=n.Iu.get(e);if(!i)return s;for(const a of i){const l=n.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Um(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Om.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uA.bind(null,e),e.Pu.H_=Xw.bind(null,e.eventManager),e.Pu.yu=Yw.bind(null,e.eventManager),e}function gA(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fA.bind(null,e),e}class Fo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ga(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return _w(this.persistence,new pw,e.initialUser,this.serializer)}Cu(e){return new Tm(kc.mi,this.serializer)}Du(e){return new Aw}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fo.provider={build:()=>new Fo};class _A extends Fo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){be(this.persistence.referenceDelegate instanceof Mo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ZI(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Tm((r=>Mo.mi(r,n)),this.serializer)}}class zl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pA.bind(null,this.syncEngine),await Ww(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Gw})()}createDatastore(e){const n=ga(e.databaseInfo.databaseId),r=(function(i){return new Pw(i)})(e.databaseInfo);return(function(i,a,l,c){return new Nw(i,a,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,a,l){return new Ow(r,s,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>Sf(this.syncEngine,n,0)),(function(){return Ef.v()?new Ef:new bw})())}createSyncEngine(e,n){return(function(s,i,a,l,c,h,d){const m=new rA(s,i,a,l,c,h);return d&&(m.gu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=ce(n);G(Dr,"RemoteStore shutting down."),r.Ea.add(5),await Di(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}zl.provider={build:()=>new zl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):bn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="FirestoreClient";class vA{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=_c.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{G(cr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(G(cr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Uc(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ll(t,e){t.asyncQueue.verifyOperationInProgress(),G(cr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Im(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Cf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await EA(t);G(cr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>If(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>If(e.remoteStore,s))),t._onlineComponents=e}async function EA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G(cr,"Using user provided OfflineComponentProvider");try{await ll(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;ls("Error using user provided cache. Falling back to memory cache: "+n),await ll(t,new Fo)}}else G(cr,"Using default OfflineComponentProvider"),await ll(t,new _A(void 0));return t._offlineComponents}async function jm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G(cr,"Using user provided OnlineComponentProvider"),await Cf(t,t._uninitializedComponentsProvider._online)):(G(cr,"Using default OnlineComponentProvider"),await Cf(t,new zl))),t._onlineComponents}function TA(t){return jm(t).then((e=>e.syncEngine))}async function IA(t){const e=await jm(t),n=e.eventManager;return n.onListen=sA.bind(null,e.syncEngine),n.onUnlisten=aA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=iA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=lA.bind(null,e.syncEngine),n}function wA(t,e,n={}){const r=new Zn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,c,h){const d=new yA({next:v=>{d.Nu(),a.enqueueAndForget((()=>Jw(i,m)));const S=v.docs.has(l);!S&&v.fromCache?h.reject(new X(F.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&v.fromCache&&c&&c.source==="server"?h.reject(new X(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),m=new Zw(Ac(l.path),d,{includeMetadataChanges:!0,qa:!0});return Qw(i,m)})(await IA(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="firestore.googleapis.com",Df=!0;class kf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new X(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$m,this.ssl=Df}else this.host=e.host,this.ssl=e.ssl??Df;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Em;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<XI)throw new X(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bm(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new wT;switch(r.type){case"firstParty":return new RT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Pf.get(n);r&&(G("ComponentProvider","Removing Datastore"),Pf.delete(n),r.terminate())})(this),Promise.resolve()}}function AA(t,e,n,r={}){t=us(t,qc);const s=ms(e),i=t._getSettings(),a={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(vp(`https://${l}`),Ep("Firestore",!0)),i.host!==$m&&i.host!==l&&ls("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!Rr(c,a)&&(t._setSettings(c),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=lt.MOCK_USER;else{h=Gv(r.mockUserToken,t._app?.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new X(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new lt(m)}t._authCredentials=new AT(new xp(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hc(this.firestore,e,this._query)}}class Je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Je(this.firestore,e,this._key)}toJSON(){return{type:Je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ri(n,Je._jsonSchema))return new Je(e,r||null,new te(xe.fromString(n.referencePath)))}}Je._jsonSchemaVersion="firestore/documentReference/1.0",Je._jsonSchema={type:$e("string",Je._jsonSchemaVersion),referencePath:$e("string")};class vi extends Hc{constructor(e,n,r){super(e,n,Ac(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new te(e))}withConverter(e){return new vi(this.firestore,e,this._path)}}function bA(t,e,...n){if(t=ln(t),arguments.length===1&&(e=_c.newId()),NT("doc","path",e),t instanceof qc){const r=xe.fromString(e,...n);return Hh(r),new Je(t,null,new te(r))}{if(!(t instanceof Je||t instanceof vi))throw new X(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return Hh(r),new Je(t.firestore,t instanceof vi?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="AsyncQueue";class Nf{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Am(this,"async_queue_retry"),this._c=()=>{const r=al();r&&G(Vf,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=al();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=al();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Zn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!vs(e))throw e;G(Vf,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,bn("INTERNAL UNHANDLED ERROR: ",xf(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Fc.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&se(47125,{Pc:xf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function xf(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class va extends qc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Nf,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Nf(e),this._firestoreClient=void 0,await e}}}function SA(t,e){const n=typeof t=="object"?t:Ap(),r=typeof t=="string"?t:Po,s=mc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Wv("firestore");i&&AA(s,...i)}return s}function qm(t){if(t._terminated)throw new X(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||RA(t),t._firestoreClient}function RA(t){const e=t._freezeSettings(),n=(function(s,i,a,l){return new zT(s,i,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Bm(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new vA(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vt(rt.fromBase64String(e))}catch(n){throw new X(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vt(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ri(e,Vt._jsonSchema))return Vt.fromBase64String(e.bytes)}}Vt._jsonSchemaVersion="firestore/bytes/1.0",Vt._jsonSchema={type:$e("string",Vt._jsonSchemaVersion),bytes:$e("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:nn._jsonSchemaVersion}}static fromJSON(e){if(Ri(e,nn._jsonSchema))return new nn(e.latitude,e.longitude)}}nn._jsonSchemaVersion="firestore/geoPoint/1.0",nn._jsonSchema={type:$e("string",nn._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:rn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ri(e,rn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new rn(e.vectorValues);throw new X(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rn._jsonSchemaVersion="firestore/vectorValue/1.0",rn._jsonSchema={type:$e("string",rn._jsonSchemaVersion),vectorValues:$e("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=/^__.*__$/;class PA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ci(e,this.data,n,this.fieldTransforms)}}function zm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se(40011,{Ac:t})}}class Wc{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Wc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Uo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(zm(this.Ac)&&CA.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class DA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ga(e)}Cc(e,n,r,s=!1){return new Wc({Ac:e,methodName:n,Dc:r,path:tt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kA(t){const e=t._freezeSettings(),n=ga(t._databaseId);return new DA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function VA(t,e,n,r,s,i={}){const a=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Qm("Data must be an object, but it was:",a,r);const l=Km(r,a);let c,h;if(i.merge)c=new Ut(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const m of i.mergeFields){const v=NA(e,m,n);if(!a.contains(v))throw new X(F.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);OA(d,v)||d.push(v)}c=new Ut(d),h=a.fieldTransforms.filter((m=>c.covers(m.field)))}else c=null,h=a.fieldTransforms;return new PA(new kt(l),c,h)}function Wm(t,e){if(Gm(t=ln(t)))return Qm("Unsupported field value:",e,t),Km(t,e);if(t instanceof Hm)return(function(r,s){if(!zm(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const l of r){let c=Wm(l,s.wc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=ln(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ne.fromDate(r);return{timestampValue:Oo(s.serializer,i)}}if(r instanceof Ne){const i=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Oo(s.serializer,i)}}if(r instanceof nn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vt)return{bytesValue:dm(s.serializer,r._byteString)};if(r instanceof Je){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof rn)return(function(a,l){return{mapValue:{fields:{[qp]:{stringValue:Hp},[Do]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return bc(l.serializer,h)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${yc(r)}`)})(t,e)}function Km(t,e){const n={};return Lp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Nr(t,((r,s)=>{const i=Wm(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function Gm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof nn||t instanceof Vt||t instanceof Je||t instanceof Hm||t instanceof rn)}function Qm(t,e,n){if(!Gm(n)||!Op(n)){const r=yc(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function NA(t,e,n){if((e=ln(e))instanceof zc)return e._internalPath;if(typeof e=="string")return Jm(t,e);throw Uo("Field path arguments must be of type string or ",t,!1,void 0,n)}const xA=new RegExp("[~\\*/\\[\\]]");function Jm(t,e,n){if(e.search(xA)>=0)throw Uo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zc(...e.split("."))._internalPath}catch{throw Uo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Uo(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new X(F.INVALID_ARGUMENT,l+t+c)}function OA(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ym("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MA extends Xm{data(){return super.data()}}function Ym(t,e){return typeof e=="string"?Jm(t,e):e instanceof zc?e._internalPath:e._delegate._internalPath}class LA{convertValue(e,n="none"){switch(ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Nr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[Do].arrayValue?.values?.map((r=>Fe(r.doubleValue)));return new rn(n)}convertGeoPoint(e){return new nn(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ca(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(pi(e));default:return null}}convertTimestamp(e){const n=ir(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);be(vm(r),9688,{name:e});const s=new mi(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||bn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Hs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sr extends Xm{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ym("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Sr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Sr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Sr._jsonSchema={type:$e("string",Sr._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class uo extends Sr{data(e={}){return super.data(e)}}class ri{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Hs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new uo(this._firestore,this._userDataWriter,r.key,r,new Hs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const c=new uo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Hs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new uo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Hs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:UA(l.type),doc:c,oldIndex:h,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ri._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_c.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function UA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(t){t=us(t,Je);const e=us(t.firestore,va);return wA(qm(e),t._key).then((n=>$A(e,t,n)))}ri._jsonSchemaVersion="firestore/querySnapshot/1.0",ri._jsonSchema={type:$e("string",ri._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};class jA extends LA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Je(this.firestore,null,n)}}function cl(t,e,n){t=us(t,Je);const r=us(t.firestore,va),s=FA(t.converter,e);return eg(r,[VA(kA(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,en.none())])}function BA(t){return eg(us(t.firestore,va),[new Sc(t._key,en.none())])}function eg(t,e){return(function(r,s){const i=new Zn;return r.asyncQueue.enqueueAndForget((async()=>cA(await TA(r),s,i))),i.promise})(qm(t),e)}function $A(t,e,n){const r=n.docs.get(e._key),s=new jA(t);return new Sr(t,s,e._key,r,new Hs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){_s=s})(gs),as(new Cr("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new va(new bT(r.getProvider("auth-internal")),new CT(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new X(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mi(h.options.projectId,d)})(a,s),a);return i={useFetchStreams:n,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Xn(jh,Bh,e),Xn(jh,Bh,"esm2020")})();function tg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qA=tg,ng=new bi("auth","Firebase",tg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new dc("@firebase/auth");function HA(t,...e){jo.logLevel<=me.WARN&&jo.warn(`Auth (${gs}): ${t}`,...e)}function ho(t,...e){jo.logLevel<=me.ERROR&&jo.error(`Auth (${gs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,...e){throw Kc(t,...e)}function sn(t,...e){return Kc(t,...e)}function rg(t,e,n){const r={...qA(),[e]:n};return new bi("auth","Firebase",r).create(e,{appName:t.name})}function er(t){return rg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ng.create(t,...e)}function ie(t,e,...n){if(!t)throw Kc(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ho(e),new Error(e)}function Cn(t,e){t||En(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(){return typeof self<"u"&&self.location?.href||""}function zA(){return Of()==="http:"||Of()==="https:"}function Of(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zA()||eE()||"connection"in navigator)?navigator.onLine:!0}function KA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=Xv()||tE()}get(){return WA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JA=new Vi(3e4,6e4);function Ea(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ts(t,e,n,r,s={}){return ig(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Si({key:t.config.apiKey,...a}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:c,...i};return Zv()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&ms(t.emulatorConfig.host)&&(h.credentials="include"),sg.fetch()(await ag(t,t.config.apiHost,n,l),h)})}async function ig(t,e,n){t._canInitEmulator=!1;const r={...GA,...e};try{const s=new XA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw eo(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw eo(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw eo(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw eo(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw rg(t,d,h);Rn(t,d)}}catch(s){if(s instanceof Dn)throw s;Rn(t,"network-request-failed",{message:String(s)})}}async function og(t,e,n,r,s={}){const i=await Ts(t,e,n,r,s);return"mfaPendingCredential"in i&&Rn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function ag(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?Gc(t.config,s):`${t.config.apiScheme}://${s}`;return QA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class XA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),JA.get())})}}function eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=sn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(t,e){return Ts(t,"POST","/v1/accounts:delete",e)}async function Bo(t,e){return Ts(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZA(t,e=!1){const n=ln(t),r=await n.getIdToken(e),s=Qc(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:si(ul(s.auth_time)),issuedAtTime:si(ul(s.iat)),expirationTime:si(ul(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ul(t){return Number(t)*1e3}function Qc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ho("JWT malformed, contained fewer than 3 sections"),null;try{const s=mp(n);return s?JSON.parse(s):(ho("Failed to decode base64 JWT payload"),null)}catch(s){return ho("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Mf(t){const e=Qc(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&eb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function eb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(t){const e=t.auth,n=await t.getIdToken(),r=await Ei(t,Bo(e,{idToken:n}));ie(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?lg(s.providerUserInfo):[],a=rb(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!a?.length,h=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Kl(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function nb(t){const e=ln(t);await $o(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function lg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sb(t,e){const n=await ig(t,{},async()=>{const r=Si({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await ag(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&ms(t.emulatorConfig.host)&&(c.credentials="include"),sg.fetch()(a,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ib(t,e){return Ts(t,"POST","/v2/accounts:revokeToken",Ea(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=Mf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await sb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new ss;return r&&(ie(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ss,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new tb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Kl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ei(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ZA(this,e)}reload(){return nb(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $o(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await Ei(this,YA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,h=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:m,emailVerified:v,isAnonymous:S,providerData:N,stsTokenManager:L}=n;ie(m&&L,e,"internal-error");const x=ss.fromJSON(this.name,L);ie(typeof m=="string",e,"internal-error"),jn(r,e.name),jn(s,e.name),ie(typeof v=="boolean",e,"internal-error"),ie(typeof S=="boolean",e,"internal-error"),jn(i,e.name),jn(a,e.name),jn(l,e.name),jn(c,e.name),jn(h,e.name),jn(d,e.name);const $=new jt({uid:m,auth:e,email:s,emailVerified:v,displayName:r,isAnonymous:S,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:x,createdAt:h,lastLoginAt:d});return N&&Array.isArray(N)&&($.providerData=N.map(W=>({...W}))),c&&($._redirectEventId=c),$}static async _fromIdTokenResponse(e,n,r=!1){const s=new ss;s.updateFromServerResponse(n);const i=new jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $o(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?lg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,l=new ss;l.updateFromIdToken(r);const c=new jt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Kl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=new Map;function Tn(t){Cn(t instanceof Function,"Expected a class definition");let e=Lf.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cg.type="NONE";const Ff=cg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t,e,n){return`firebase:${t}:${e}:${n}`}class is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fo(this.userKey,s.apiKey,i),this.fullPersistenceKey=fo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Bo(this.auth,{idToken:e}).catch(()=>{});return n?jt._fromGetAccountInfoResponse(this.auth,n,e):null}return jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new is(Tn(Ff),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Tn(Ff);const a=fo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(a);if(d){let m;if(typeof d=="string"){const v=await Bo(e,{idToken:d}).catch(()=>{});if(!v)break;m=await jt._fromGetAccountInfoResponse(e,v,d)}else m=jt._fromJSON(e,d);h!==i&&(l=m),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new is(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new is(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ug(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mg(e))return"Blackberry";if(gg(e))return"Webos";if(hg(e))return"Safari";if((e.includes("chrome/")||fg(e))&&!e.includes("edge/"))return"Chrome";if(pg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function ug(t=ft()){return/firefox\//i.test(t)}function hg(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fg(t=ft()){return/crios\//i.test(t)}function dg(t=ft()){return/iemobile/i.test(t)}function pg(t=ft()){return/android/i.test(t)}function mg(t=ft()){return/blackberry/i.test(t)}function gg(t=ft()){return/webos/i.test(t)}function Jc(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ob(t=ft()){return Jc(t)&&!!window.navigator?.standalone}function ab(){return nE()&&document.documentMode===10}function _g(t=ft()){return Jc(t)||pg(t)||gg(t)||mg(t)||/windows phone/i.test(t)||dg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t,e=[]){let n;switch(t){case"Browser":n=Uf(ft());break;case"Worker":n=`${Uf(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cb(t,e={}){return Ts(t,"GET","/v2/passwordPolicy",Ea(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=6;class hb{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??ub,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jf(this),this.idTokenSubscription=new jf(this),this.beforeStateQueue=new lb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ng,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await is.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Bo(this,{idToken:e}),r=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ft(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $o(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(er(this));const n=e?ln(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cb(this),n=new hb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new bi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ib(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await is.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&HA(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ta(t){return ln(t)}class jf{constructor(e){this.auth=e,this.observer=null,this.addObserver=uE(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function db(t){Xc=t}function pb(t){return Xc.loadJS(t)}function mb(){return Xc.gapiScript}function gb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t,e){const n=mc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Rr(i,e??{}))return s;Rn(s,"already-initialized")}return n.initialize({options:e})}function yb(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Tn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function vb(t,e,n){const r=Ta(t);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=vg(e),{host:a,port:l}=Eb(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},d=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(Rr(h,r.config.emulator)&&Rr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ms(a)?(vp(`${i}//${a}${c}`),Ep("Auth",!0)):Tb()}function vg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Eb(t){const e=vg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Bf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Bf(a)}}}function Bf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Tb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(t,e){return og(t,"POST","/v1/accounts:signInWithIdp",Ea(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="http://localhost";class kr extends Eg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const a=new kr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return os(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,os(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,os(e,n)}buildRequest(){const e={requestUri:Ib,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Si(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Tg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Ni{constructor(){super("facebook.com")}static credential(e){return kr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Ni{constructor(){super("github.com")}static credential(e){return kr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Ni{constructor(){super("twitter.com")}static credential(e,n){return kr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.TWITTER_SIGN_IN_METHOD="twitter.com";Wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wb(t,e){return og(t,"POST","/v1/accounts:signUp",Ea(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await jt._fromIdTokenResponse(e,r,s),a=$f(r);return new ur({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=$f(r);return new ur({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function $f(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ab(t){if(Ft(t.app))return Promise.reject(er(t));const e=Ta(t);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new ur({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await wb(e,{returnSecureToken:!0}),r=await ur._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends Dn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new qo(e,n,r,s)}}function Ig(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qo._fromErrorAndOperation(t,i,e,r):i})}async function bb(t,e,n=!1){const r=await Ei(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ur._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sb(t,e,n=!1){const{auth:r}=t;if(Ft(r.app))return Promise.reject(er(r));const s="reauthenticate";try{const i=await Ei(t,Ig(r,s,e,t),n);ie(i.idToken,r,"internal-error");const a=Qc(i.idToken);ie(a,r,"internal-error");const{sub:l}=a;return ie(t.uid===l,r,"user-mismatch"),ur._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Rn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(t,e,n=!1){if(Ft(t.app))return Promise.reject(er(t));const r="signIn",s=await Ig(t,r,e),i=await ur._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Cb(t,e,n,r){return ln(t).onIdTokenChanged(e,n,r)}function Pb(t,e,n){return ln(t).beforeAuthStateChanged(e,n)}const Ho="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ho,"1"),this.storage.removeItem(Ho),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=1e3,kb=10;class Ag extends wg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_g(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);ab()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Db)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ag.type="LOCAL";const Vb=Ag;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg extends wg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bg.type="SESSION";const Sg=bg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ia(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await Nb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ia.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=Yc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const v=m;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function Ob(t){on().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function Mb(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lb(){return navigator?.serviceWorker?.controller||null}function Fb(){return Rg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="firebaseLocalStorageDb",Ub=1,zo="firebaseLocalStorage",Pg="fbase_key";class xi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wa(t,e){return t.transaction([zo],e?"readwrite":"readonly").objectStore(zo)}function jb(){const t=indexedDB.deleteDatabase(Cg);return new xi(t).toPromise()}function Gl(){const t=indexedDB.open(Cg,Ub);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zo,{keyPath:Pg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zo)?e(r):(r.close(),await jb(),e(await Gl()))})})}async function qf(t,e,n){const r=wa(t,!0).put({[Pg]:e,value:n});return new xi(r).toPromise()}async function Bb(t,e){const n=wa(t,!1).get(e),r=await new xi(n).toPromise();return r===void 0?null:r.value}function Hf(t,e){const n=wa(t,!0).delete(e);return new xi(n).toPromise()}const $b=800,qb=3;class Dg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ia._getInstance(Fb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Mb(),!this.activeServiceWorker)return;this.sender=new xb(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gl();return await qf(e,Ho,"1"),await Hf(e,Ho),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Bb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=wa(s,!1).getAll();return new xi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$b)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dg.type="LOCAL";const Hb=Dg;new Vi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t,e){return e?Tn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc extends Eg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Wb(t){return Rb(t.auth,new Zc(t),t.bypassAuthState)}function Kb(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),Sb(n,new Zc(t),t.bypassAuthState)}async function Gb(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),bb(n,new Zc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wb;case"linkViaPopup":case"linkViaRedirect":return Gb;case"reauthViaPopup":case"reauthViaRedirect":return Kb;default:Rn(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=new Vi(2e3,1e4);class Qr extends kg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Qr.currentPopupAction&&Qr.currentPopupAction.cancel(),Qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Yc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qb.get())};e()}}Qr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="pendingRedirect",po=new Map;class Xb extends kg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=po.get(this.auth._key());if(!e){try{const r=await Yb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}po.set(this.auth._key(),e)}return this.bypassAuthState||po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yb(t,e){const n=tS(e),r=eS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Zb(t,e){po.set(t._key(),e)}function eS(t){return Tn(t._redirectPersistence)}function tS(t){return fo(Jb,t.config.apiKey,t.name)}async function nS(t,e,n=!1){if(Ft(t.app))return Promise.reject(er(t));const r=Ta(t),s=zb(r,e),a=await new Xb(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=600*1e3;class sS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Vg(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(sn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rS&&this.cachedEventUids.clear(),this.cachedEventUids.has(zf(e))}saveEventToCache(e){this.cachedEventUids.add(zf(e)),this.lastProcessedEventTime=Date.now()}}function zf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vg({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function iS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(t,e={}){return Ts(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lS=/^https?/;async function cS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oS(t);for(const n of e)try{if(uS(n))return}catch{}Rn(t,"unauthorized-domain")}function uS(t){const e=Wl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!lS.test(n))return!1;if(aS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=new Vi(3e4,6e4);function Wf(){const t=on().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fS(t){return new Promise((e,n)=>{function r(){Wf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wf(),n(sn(t,"network-request-failed"))},timeout:hS.get()})}if(on().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(on().gapi?.load)r();else{const s=gb("iframefcb");return on()[s]=()=>{gapi.load?r():n(sn(t,"network-request-failed"))},pb(`${mb()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw mo=null,e})}let mo=null;function dS(t){return mo=mo||fS(t),mo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=new Vi(5e3,15e3),mS="__/auth/iframe",gS="emulator/auth/iframe",_S={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vS(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gc(e,gS):`https://${t.config.authDomain}/${mS}`,r={apiKey:e.apiKey,appName:t.name,v:gs},s=yS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Si(r).slice(1)}`}async function ES(t){const e=await dS(t),n=on().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:vS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_S,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=sn(t,"network-request-failed"),l=on().setTimeout(()=>{i(a)},pS.get());function c(){on().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IS=500,wS=600,AS="_blank",bS="http://localhost";class Kf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SS(t,e,n,r=IS,s=wS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...TS,width:r.toString(),height:s.toString(),top:i,left:a},h=ft().toLowerCase();n&&(l=fg(h)?AS:n),ug(h)&&(e=e||bS,c.scrollbars="yes");const d=Object.entries(c).reduce((v,[S,N])=>`${v}${S}=${N},`,"");if(ob(h)&&l!=="_self")return RS(e||"",l),new Kf(null);const m=window.open(e||"",l,d);ie(m,t,"popup-blocked");try{m.focus()}catch{}return new Kf(m)}function RS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="__/auth/handler",PS="emulator/auth/handler",DS=encodeURIComponent("fac");async function Gf(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gs,eventId:s};if(e instanceof Tg){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",cE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,m]of Object.entries({}))a[d]=m}if(e instanceof Ni){const d=e.getScopes().filter(m=>m!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${DS}=${encodeURIComponent(c)}`:"";return`${kS(t)}?${Si(l).slice(1)}${h}`}function kS({config:t}){return t.emulator?Gc(t,PS):`https://${t.authDomain}/${CS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="webStorageSupport";class VS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sg,this._completeRedirectFn=nS,this._overrideRedirectResult=Zb}async _openPopup(e,n,r,s){Cn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Gf(e,n,r,Wl(),s);return SS(e,i,Yc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Gf(e,n,r,Wl(),s);return Ob(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ES(e),r=new sS(e);return n.register("authEvent",s=>(ie(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hl,{type:hl},s=>{const i=s?.[0]?.[hl];i!==void 0&&n(!!i),Rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _g()||hg()||Jc()}}const NS=VS;var Qf="@firebase/auth",Jf="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MS(t){as(new Cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ie(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yg(t)},h=new fb(r,s,i,c);return yb(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),as(new Cr("auth-internal",e=>{const n=Ta(e.getProvider("auth").getImmediate());return(r=>new xS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xn(Qf,Jf,OS(t)),Xn(Qf,Jf,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=300,FS=yp("authIdTokenMaxAge")||LS;let Xf=null;const US=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>FS)return;const s=n?.token;Xf!==s&&(Xf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jS(t=Ap()){const e=mc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_b(t,{popupRedirectResolver:NS,persistence:[Hb,Vb,Sg]}),r=yp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=US(i.toString());Pb(n,a,()=>a(n.currentUser)),Cb(n,l=>a(l))}}const s=gp("auth");return s&&vb(n,`http://${s}`),n}function BS(){return document.getElementsByTagName("head")?.[0]??document}db({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",BS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MS("Browser");const $S={apiKey:"AIzaSyA8B3cCIG1-5MnShEbw89WooX0kj7oe6FA",authDomain:"tiragenoel-c25b8.firebaseapp.com",projectId:"tiragenoel-c25b8",storageBucket:"tiragenoel-c25b8.firebasestorage.app",messagingSenderId:"225331032723",appId:"1:225331032723:web:c6e4eb4fade48cf26a1366"},Ng=wp($S),qS=SA(Ng),Yf=jS(Ng),Gr=bA(qS,"results","draw_results"),Zf="tirage_noel_master_backup";function Jr(t){return(t||[]).map(e=>({name:String(e.name||"").trim(),exclusions:Array.isArray(e.exclusions)?[...e.exclusions]:[]}))}async function HS(){Yf.currentUser||await Ab(Yf)}function eu(t){return t?typeof t.drawDone=="boolean"?t.drawDone&&Array.isArray(t.maj)&&t.maj.length>0:Array.isArray(t.maj)&&t.maj.length>0:!1}function tu(t){if(!t)return{};const e={...t.pairs||{}},n=[...t.maj||[],...t.min||[]];for(const r of n)if(typeof r=="string"&&r.includes(" offre à ")){const s=r.split(" offre à ");if(s.length===2){const i=s[0].trim(),a=s[1].trim();i&&a&&(e[i]=a)}}return e}async function Ti(){const t=await Zm(Gr);return t.exists()?t.data():null}async function Aa(t){await HS();const e=await Zm(Gr),n=e.exists();let r=n?e.data():null;if(!r)try{const a=localStorage.getItem(Zf);a&&(r=JSON.parse(a))}catch{}const s={maj:Array.isArray(r?.maj)?r.maj:[],min:Array.isArray(r?.min)?r.min:[],drawDone:eu(r),timestamp:r?.timestamp||new Date().toISOString(),previousDraw:r?.previousDraw||null,participants:r?.participants||null},i=t(s);try{localStorage.setItem(Zf,JSON.stringify(i))}catch{}if(n)try{await cl(Gr,i)}catch{await BA(Gr),await cl(Gr,i)}else await cl(Gr,i);return i}async function xg(t=void 0){try{const e=t!==void 0?t:await Ti();if(e&&e.participants)return{maj:Jr(e.participants.maj||[]),min:Jr(e.participants.min||[]),fromFirestore:!0}}catch(e){console.error("Erreur lors du chargement des participants:",e)}return{maj:Jr(Mv),min:Jr(Lv),fromFirestore:!1}}async function zS(t,e){const n={maj:Jr(t),min:Jr(e),updatedAt:new Date().toISOString()};return await Aa(r=>({...r,participants:n})),n}async function Og(t=void 0){try{const e=t!==void 0?t:await Ti();if(e&&e.previousDraw){const n=e.previousDraw;return{maj:n.maj||[],min:n.min||[],pairs:tu(n),timestamp:n.timestamp||null}}}catch(e){console.error("Erreur lors du chargement du tirage N-1:",e)}return null}async function WS(t,e){const n=tu({maj:t,min:e}),r={maj:[...t||[]],min:[...e||[]],pairs:n,timestamp:new Date().toISOString()};return await Aa(s=>({...s,previousDraw:r})),r}async function KS(){await Aa(t=>({...t,maj:[],min:[],drawDone:!1,timestamp:new Date().toISOString()}))}function ed(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Wo(t,e={}){if(!t||t.length===0)return[];if(t.length<2)return null;const n=t.map(c=>c.name);function r(c,h){if(c===h)return!1;const d=t.find(m=>m.name===c);return!(d&&Array.isArray(d.exclusions)&&d.exclusions.includes(h)||e&&e[c]===h)}const s=[...n];for(let c=0;c<5e3;c++)if(ed(s),n.every((d,m)=>r(d,s[m])))return n.map((d,m)=>`${d} offre à ${s[m]}`);const i=new Set,a=new Array(n.length);function l(c){if(c===n.length)return!0;const h=n[c],d=ed(n.filter(m=>!i.has(m)&&r(h,m)));for(const m of d){if(i.add(m),a[c]=m,l(c+1))return!0;i.delete(m)}return!1}return l(0)?n.map((c,h)=>`${c} offre à ${a[h]}`):null}const GS=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},QS={class:"admin-container"},JS={class:"admin-header"},XS={key:0,class:"loading-box"},YS={class:"admin-section"},ZS={class:"draw-cards-grid"},eR={class:"info-card"},tR={class:"info-card-header"},nR={key:0,class:"info-card-body"},rR={class:"meta-text"},sR={key:0},iR={key:1},oR={class:"action-buttons-stack"},aR=["disabled"],lR=["disabled"],cR={key:0,class:"mini-results"},uR={class:"compact-list"},hR={class:"compact-list"},fR={key:1,class:"info-card-body empty-state"},dR={class:"info-card"},pR={class:"info-card-header"},mR={key:0,class:"info-card-body"},gR={class:"meta-text"},_R={key:0,class:"pairs-grid"},yR={key:1,class:"info-card-body empty-state"},vR={key:0},ER={class:"admin-section"},TR={class:"section-header-row"},IR={class:"save-indicator-box"},wR={class:"checkbox-label"},AR=["disabled"],bR={class:"lists-editor-grid"},SR={class:"list-column-header"},RR=["disabled"],CR={class:"participants-stack"},PR=["onDragstart","onDrop"],DR={class:"participant-main-row"},kR={class:"participant-left"},VR={class:"participant-info"},NR={class:"participant-name"},xR={class:"participant-badges"},OR=["title"],MR={class:"participant-actions"},LR=["onClick"],FR=["onClick"],UR=["onClick"],jR={key:0,class:"exclusions-preview"},BR={key:1,class:"exclusions-panel"},$R={class:"exclusions-panel-title"},qR={class:"exclusions-chips"},HR=["onClick"],zR={class:"list-column-header"},WR=["disabled"],KR={class:"participants-stack"},GR=["onDragstart","onDrop"],QR={class:"participant-main-row"},JR={class:"participant-left"},XR={class:"participant-info"},YR={class:"participant-name"},ZR={class:"participant-badges"},eC=["title"],tC={class:"participant-actions"},nC=["onClick"],rC=["onClick"],sC=["onClick"],iC={key:0,class:"exclusions-preview"},oC={key:1,class:"exclusions-panel"},aC={class:"exclusions-panel-title"},lC={class:"exclusions-chips"},cC=["onClick"],uC={__name:"AdminView",emits:["exit-admin"],setup(t,{emit:e}){const n=e,r=Re(!0),s=Re(!1),i=Re(!1),a=Re(!1),l=Re(""),c=Re("success"),h=Re(!1),d=Re([]),m=Re([]),v=Re(null),S=Re(null),N=Re(!1),L=Re(!1),x=Re([]),$=Re([]),W=Re(!1),J=Re(""),K=Re(""),oe=Re(!0),re=Re(null),b=Re(null),E=Re(null);function y(Q,p="success"){l.value=Q,c.value=p,setTimeout(()=>{l.value===Q&&(l.value="")},4500)}const w=js(()=>S.value?.pairs||{}),A=js(()=>{if(!h.value||!S.value)return!1;const Q=tu({maj:d.value,min:m.value}),p=w.value,_=Object.keys(Q),C=Object.keys(p);return _.length===0||_.length!==C.length?!1:_.every(D=>Q[D]===p[D])}),I=js(()=>x.value.length===0?{ok:!0,msg:"Liste vide"}:x.value.length<2?{ok:!1,msg:"Il faut au moins 2 personnes"}:Wo(x.value,w.value)?{ok:!0,msg:"Tirage valide et possible"}:{ok:!1,msg:"Tirage impossible avec ces exclusions !"}),T=js(()=>$.value.length===0?{ok:!0,msg:"Liste vide"}:$.value.length<2?{ok:!1,msg:"Il faut au moins 2 personnes"}:Wo($.value,w.value)?{ok:!0,msg:"Tirage valide et possible"}:{ok:!1,msg:"Tirage impossible avec ces exclusions !"});async function ve(){r.value=!0;try{const Q=await Ti(),[p,_]=await Promise.all([Og(Q),xg(Q)]);eu(Q)?(d.value=Q.maj||[],m.value=Q.min||[],v.value=Q.timestamp||null,h.value=!0):(d.value=[],m.value=[],v.value=null,h.value=!1),S.value=p,x.value=_.maj,$.value=_.min,W.value=_.fromFirestore}catch(Q){console.error("Erreur de chargement Admin:",Q),y("Erreur lors du chargement des données depuis Firebase.","error")}finally{r.value=!1}}async function qe(){if(!h.value){y("Aucun tirage actuel à enregistrer.","error");return}if(!(S.value&&!A.value&&!confirm("Un tirage N-1 est déjà en mémoire. Voulez-vous le remplacer par le tirage actuel ?"))){i.value=!0;try{const Q=await WS(d.value,m.value);S.value=Q,y("Le tirage actuel a bien été enregistré en mémoire (Année N-1) !")}catch(Q){console.error("Erreur sauvegarde tirage N-1:",Q),y(`Erreur lors de la sauvegarde : ${Q.message||Q.code}`,"error")}finally{i.value=!1}}}async function Me(){if(!h.value)return;let Q="Voulez-vous vraiment réinitialiser le tirage actuel ? Le bouton « Lancer le tirage » réapparaîtra sur le site.";if(A.value||(Q=`⚠️ ATTENTION : Le tirage actuel n'a PAS encore été enregistré en mémoire (Année N-1).

Si vous voulez empêcher les personnes de retomber sur le tirage affiché actuellement, cliquez d'abord sur « Enregistrer le tirage actuel en mémoire ».

Voulez-vous quand même supprimer le tirage actuel sans le mémoriser ?`),!!confirm(Q)){a.value=!0;try{await KS(),h.value=!1,d.value=[],m.value=[],v.value=null,y("Le tirage actuel a été réinitialisé ! Un nouveau tirage peut être lancé.")}catch(p){console.error("Erreur lors de la réinitialisation:",p),y(`Échec de la réinitialisation : ${p.message||p.code}`,"error")}finally{a.value=!1}}}async function Ie(Q="Modifications enregistrées !"){s.value=!0;try{await zS(x.value,$.value),W.value=!0,Q&&y(Q,"success")}catch(p){console.error("Erreur sauvegarde participants:",p),y(`Erreur lors de l'enregistrement des listes : ${p.message||p.code}`,"error")}finally{s.value=!1}}function Ee(){return[...x.value.map(Q=>Q.name.toLowerCase()),...$.value.map(Q=>Q.name.toLowerCase())]}async function dt(Q){const p=Q==="maj"?J:K,_=p.value.trim();if(!_)return;if(Ee().includes(_.toLowerCase())){y(`« ${_} » est déjà présent(e) dans une des listes.`,"error");return}(Q==="maj"?x.value:$.value).push({name:_,exclusions:[]}),p.value="",await Ie(`« ${_} » a été ajouté(e) à la ${Q==="maj"?"Liste 1":"Liste 2"}.`)}async function hn(Q,p){if(confirm(`Supprimer « ${p} » de la liste ?`)){Q==="maj"?x.value=x.value.filter(_=>_.name!==p):$.value=$.value.filter(_=>_.name!==p);for(const _ of[...x.value,...$.value])_.exclusions=_.exclusions.filter(C=>C!==p);re.value===p&&(re.value=null),await Ie(`« ${p} » a été supprimé(e).`)}}async function Et(Q,p,_=null){const C=Q==="maj"?x.value:$.value,D=Q==="maj"?$.value:x.value,k=C.findIndex(U=>U.name===p);if(k===-1)return;const[V]=C.splice(k,1);_!==null&&_>=0&&_<=D.length?D.splice(_,0,V):D.push(V),await Ie(`« ${p} » a été déplacé(e) vers la ${Q==="maj"?"Liste 2":"Liste 1"}.`)}function st(Q,p,_,C){b.value={fromKey:p,index:_,personName:C},Q.dataTransfer&&(Q.dataTransfer.effectAllowed="move",Q.dataTransfer.setData("text/plain",C))}function kn(Q,p){Q.preventDefault(),E.value=p}function fn(Q){E.value===Q&&(E.value=null)}async function qt(Q,p,_=null){if(Q.preventDefault(),E.value=null,!b.value)return;const{fromKey:C,index:D,personName:k}=b.value;if(b.value=null,C===p){if(_===null||_===D)return;const V=p==="maj"?x.value:$.value,[H]=V.splice(D,1),U=_>D?_-1:_;V.splice(U,0,H),await Ie("Ordre de la liste mis à jour.")}else await Et(C,k,_)}function Pt(){b.value=null,E.value=null}function Ot(Q,p){const C=(Q==="maj"?x.value:$.value).filter(k=>k.name!==p.name).map(k=>k.name),D=(p.exclusions||[]).filter(k=>k!==p.name&&!C.includes(k));return[...C,...D]}function Ht(Q){re.value===Q?re.value=null:re.value=Q}async function Vn(Q,p,_){const C=Q==="maj"?x.value:$.value;if(p.exclusions.includes(_)){if(p.exclusions=p.exclusions.filter(k=>k!==_),oe.value){const k=C.find(V=>V.name===_);k&&(k.exclusions=k.exclusions.filter(V=>V!==p.name))}}else if(p.exclusions.push(_),oe.value){const k=C.find(V=>V.name===_);k&&!k.exclusions.includes(p.name)&&k.exclusions.push(p.name)}await Ie("Exclusions mises à jour.")}function zt(Q){if(!Q)return"";try{return new Date(Q).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return Q}}return na(()=>{ve()}),(Q,p)=>(ae(),ue("div",QS,[M("div",JS,[p[17]||(p[17]=M("div",null,[M("h1",null,"🎄 Administration — Tirage de Noël"),M("p",{class:"subtitle"}," Gérez la mémoire de l'année dernière, réinitialisez le tirage et organisez les listes de participants. ")],-1)),M("button",{class:"btn-secondary",onClick:p[0]||(p[0]=_=>n("exit-admin"))}," ← Retour à la page du tirage ")]),wt(ov,{name:"fade"},{default:kd(()=>[l.value?(ae(),ue("div",{key:0,class:gt(["status-banner",c.value])},de(l.value),3)):Lt("",!0)]),_:1}),r.value?(ae(),ue("div",XS,[...p[18]||(p[18]=[M("p",null,"Chargement des données d'administration...",-1)])])):(ae(),ue(Be,{key:1},[M("section",YS,[p[29]||(p[29]=M("h2",{class:"section-title"},"1. Gestion du Tirage & Mémoire Année N-1",-1)),M("div",ZS,[M("div",eR,[M("div",tR,[p[19]||(p[19]=M("h3",null,"🎁 Tirage affiché sur le site",-1)),M("span",{class:gt(["badge",h.value?"badge-active":"badge-empty"])},de(h.value?"Tirage en cours":"Aucun tirage actif"),3)]),h.value?(ae(),ue("div",nR,[M("p",rR,[p[20]||(p[20]=Ye(" Effectué le : ",-1)),M("strong",null,de(zt(v.value)||"Date inconnue"),1),Ye(" ("+de(d.value.length+m.value.length)+" personnes) ",1)]),M("div",{class:gt(["memory-sync-status",A.value?"synced":"not-synced"])},[A.value?(ae(),ue("span",sR," ✅ Ce tirage est actuellement enregistré en mémoire (Année N-1). ")):(ae(),ue("span",iR," ⚠️ Ce tirage n'est pas encore enregistré comme mémoire N-1. "))],2),M("div",oR,[M("button",{class:"btn-primary",disabled:i.value||A.value,onClick:qe},de(i.value?"Enregistrement...":A.value?"✓ Déjà mémorisé en N-1":"💾 Enregistrer ce tirage en mémoire (Année N-1)"),9,aR),M("button",{class:"btn-danger",disabled:a.value,onClick:Me},de(a.value?"Réinitialisation...":"🗑️ Réinitialiser le tirage actuel"),9,lR)]),M("button",{class:"btn-link",onClick:p[1]||(p[1]=_=>L.value=!L.value)},de(L.value?"▲ Masquer le détail du tirage actuel":"▼ Voir le détail du tirage actuel"),1),L.value?(ae(),ue("div",cR,[M("div",null,[p[21]||(p[21]=M("strong",null,"Liste 1 :",-1)),M("ul",uR,[(ae(!0),ue(Be,null,mn(d.value,_=>(ae(),ue("li",{key:_},de(_),1))),128))])]),M("div",null,[p[22]||(p[22]=M("strong",null,"Liste 2 :",-1)),M("ul",hR,[(ae(!0),ue(Be,null,mn(m.value,_=>(ae(),ue("li",{key:_},de(_),1))),128))])])])):Lt("",!0)])):(ae(),ue("div",fR,[...p[23]||(p[23]=[M("p",null,[Ye(" Le tirage est actuellement réinitialisé. Les visiteurs voient le bouton "),M("strong",null,"« Lancer le tirage »"),Ye(" sur la page d'accueil. ")],-1)])]))]),M("div",dR,[M("div",pR,[p[24]||(p[24]=M("h3",null,"🧠 Tirage mémorisé (Année N-1)",-1)),M("span",{class:gt(["badge",Object.keys(w.value).length>0?"badge-memory":"badge-empty"])},de(Object.keys(w.value).length>0?`${Object.keys(w.value).length} paires mémorisées`:"Aucune mémoire"),3)]),Object.keys(w.value).length>0?(ae(),ue("div",mR,[M("p",gR,[p[25]||(p[25]=Ye(" Mémorisé le : ",-1)),M("strong",null,de(zt(S.value?.timestamp)||"—"),1)]),p[26]||(p[26]=M("p",{class:"help-text"},[Ye(" Lors du prochain tirage, "),M("strong",null,"personne ne pourra retomber"),Ye(" sur la personne qu'il ou elle a tirée dans cette mémoire N-1. ")],-1)),M("button",{class:"btn-link",onClick:p[2]||(p[2]=_=>N.value=!N.value)},de(N.value?"▲ Masquer les paires mémorisées (N-1)":"▼ Voir les paires mémorisées (N-1)"),1),N.value?(ae(),ue("div",_R,[(ae(!0),ue(Be,null,mn(w.value,(_,C)=>(ae(),ue("div",{key:C,class:"pair-chip"},[M("strong",null,de(C),1),Ye(" ➔ "+de(_),1)]))),128))])):Lt("",!0)])):(ae(),ue("div",yR,[M("p",null,[p[28]||(p[28]=Ye(" Aucun tirage N-1 n'est encore enregistré en mémoire. ",-1)),h.value?(ae(),ue("span",vR,[...p[27]||(p[27]=[Ye(" Cliquez sur ",-1),M("strong",null,"« Enregistrer ce tirage en mémoire (Année N-1) »",-1),Ye(" à gauche pour sauvegarder le tirage de l'année dernière ! ",-1)])])):Lt("",!0)])]))])])]),M("section",ER,[M("div",TR,[p[31]||(p[31]=M("div",null,[M("h2",{class:"section-title"},"2. Organisation des Listes & Participants"),M("p",{class:"section-desc"}," Glissez-déposez les personnes d'une liste à l'autre (ou utilisez les flèches ⇄), ajoutez de nouveaux participants et configurez leurs exclusions. ")],-1)),M("div",IR,[M("label",wR,[Ha(M("input",{"onUpdate:modelValue":p[3]||(p[3]=_=>oe.value=_),type:"checkbox"},null,512),[[Rv,oe.value]]),p[30]||(p[30]=Ye(" Exclusions réciproques automatiques ",-1))]),M("button",{class:"btn-primary btn-small",disabled:s.value,onClick:p[4]||(p[4]=_=>Ie("Listes enregistrées dans Firebase !"))},de(s.value?"Enregistrement...":"💾 Enregistrer les listes"),9,AR)])]),M("div",bR,[M("div",{class:gt(["list-column",{"drag-over":E.value==="maj"}]),onDragover:p[8]||(p[8]=_=>kn(_,"maj")),onDragleave:p[9]||(p[9]=_=>fn("maj")),onDrop:p[10]||(p[10]=_=>qt(_,"maj"))},[M("div",SR,[M("h3",null,"Liste 1 ("+de(x.value.length)+")",1),M("span",{class:gt(["feasibility-badge",I.value.ok?"ok":"err"])},de(I.value.ok?"✓ ":"⚠️ ")+de(I.value.msg),3)]),M("form",{class:"add-person-form",onSubmit:p[6]||(p[6]=$r(_=>dt("maj"),["prevent"]))},[Ha(M("input",{"onUpdate:modelValue":p[5]||(p[5]=_=>J.value=_),type:"text",placeholder:"Ajouter un prénom dans la Liste 1...",class:"text-input"},null,512),[[bh,J.value]]),M("button",{type:"submit",class:"btn-add",disabled:!J.value.trim()}," + Ajouter ",8,RR)],32),M("div",CR,[(ae(!0),ue(Be,null,mn(x.value,(_,C)=>(ae(),ue("div",{key:_.name,class:"participant-item",draggable:"true",onDragstart:D=>st(D,"maj",C,_.name),onDragend:Pt,onDragover:p[7]||(p[7]=$r(()=>{},["prevent"])),onDrop:$r(D=>qt(D,"maj",C),["stop"])},[M("div",DR,[M("div",kR,[p[32]||(p[32]=M("span",{class:"drag-handle",title:"Glisser pour déplacer"},"⠿",-1)),M("div",VR,[M("span",NR,de(_.name),1),M("div",xR,[w.value[_.name]?(ae(),ue("span",{key:0,class:"tag-n1",title:`Avait tiré ${w.value[_.name]} l'année dernière (exclu automatiquement)`}," 🔒 N-1 : "+de(w.value[_.name]),9,OR)):Lt("",!0)])])]),M("div",MR,[M("button",{type:"button",class:gt(["btn-chip",{active:re.value===_.name}]),onClick:D=>Ht(_.name),title:"Gérer les exclusions de cette personne"}," 🚫 Exclusions ("+de(_.exclusions.length)+") ",11,LR),M("button",{type:"button",class:"btn-move",title:"Envoyer dans la Liste 2",onClick:D=>Et("maj",_.name)}," Liste 2 ➔ ",8,FR),M("button",{type:"button",class:"btn-delete",title:"Supprimer cette personne",onClick:D=>hn("maj",_.name)}," ✕ ",8,UR)])]),_.exclusions.length>0&&re.value!==_.name?(ae(),ue("div",jR," Ne peut pas tirer : "+de(_.exclusions.join(", ")),1)):Lt("",!0),re.value===_.name?(ae(),ue("div",BR,[M("p",$R,[p[33]||(p[33]=Ye(" Qui ",-1)),M("strong",null,de(_.name),1),p[34]||(p[34]=Ye(" ne peut-il/elle PAS tirer ? ",-1)),p[35]||(p[35]=M("span",{class:"exclusions-hint"},"(Cliquez sur un prénom pour l'exclure / l'autoriser)",-1))]),M("div",qR,[(ae(!0),ue(Be,null,mn(Ot("maj",_),D=>(ae(),ue("button",{key:D,type:"button",class:gt(["excl-toggle-chip",{excluded:_.exclusions.includes(D)}]),onClick:k=>Vn("maj",_,D)},de(_.exclusions.includes(D)?"✕ ":"+ ")+de(D),11,HR))),128))])])):Lt("",!0)],40,PR))),128))])],34),M("div",{class:gt(["list-column",{"drag-over":E.value==="min"}]),onDragover:p[14]||(p[14]=_=>kn(_,"min")),onDragleave:p[15]||(p[15]=_=>fn("min")),onDrop:p[16]||(p[16]=_=>qt(_,"min"))},[M("div",zR,[M("h3",null,"Liste 2 ("+de($.value.length)+")",1),M("span",{class:gt(["feasibility-badge",T.value.ok?"ok":"err"])},de(T.value.ok?"✓ ":"⚠️ ")+de(T.value.msg),3)]),M("form",{class:"add-person-form",onSubmit:p[12]||(p[12]=$r(_=>dt("min"),["prevent"]))},[Ha(M("input",{"onUpdate:modelValue":p[11]||(p[11]=_=>K.value=_),type:"text",placeholder:"Ajouter un prénom dans la Liste 2...",class:"text-input"},null,512),[[bh,K.value]]),M("button",{type:"submit",class:"btn-add",disabled:!K.value.trim()}," + Ajouter ",8,WR)],32),M("div",KR,[(ae(!0),ue(Be,null,mn($.value,(_,C)=>(ae(),ue("div",{key:_.name,class:"participant-item",draggable:"true",onDragstart:D=>st(D,"min",C,_.name),onDragend:Pt,onDragover:p[13]||(p[13]=$r(()=>{},["prevent"])),onDrop:$r(D=>qt(D,"min",C),["stop"])},[M("div",QR,[M("div",JR,[p[36]||(p[36]=M("span",{class:"drag-handle",title:"Glisser pour déplacer"},"⠿",-1)),M("div",XR,[M("span",YR,de(_.name),1),M("div",ZR,[w.value[_.name]?(ae(),ue("span",{key:0,class:"tag-n1",title:`Avait tiré ${w.value[_.name]} l'année dernière (exclu automatiquement)`}," 🔒 N-1 : "+de(w.value[_.name]),9,eC)):Lt("",!0)])])]),M("div",tC,[M("button",{type:"button",class:"btn-move",title:"Envoyer dans la Liste 1",onClick:D=>Et("min",_.name)}," ⬅ Liste 1 ",8,nC),M("button",{type:"button",class:gt(["btn-chip",{active:re.value===_.name}]),onClick:D=>Ht(_.name),title:"Gérer les exclusions de cette personne"}," 🚫 Exclusions ("+de(_.exclusions.length)+") ",11,rC),M("button",{type:"button",class:"btn-delete",title:"Supprimer cette personne",onClick:D=>hn("min",_.name)}," ✕ ",8,sC)])]),_.exclusions.length>0&&re.value!==_.name?(ae(),ue("div",iC," Ne peut pas tirer : "+de(_.exclusions.join(", ")),1)):Lt("",!0),re.value===_.name?(ae(),ue("div",oC,[M("p",aC,[p[37]||(p[37]=Ye(" Qui ",-1)),M("strong",null,de(_.name),1),p[38]||(p[38]=Ye(" ne peut-il/elle PAS tirer ? ",-1)),p[39]||(p[39]=M("span",{class:"exclusions-hint"},"(Cliquez sur un prénom pour l'exclure / l'autoriser)",-1))]),M("div",lC,[(ae(!0),ue(Be,null,mn(Ot("min",_),D=>(ae(),ue("button",{key:D,type:"button",class:gt(["excl-toggle-chip",{excluded:_.exclusions.includes(D)}]),onClick:k=>Vn("min",_,D)},de(_.exclusions.includes(D)?"✕ ":"+ ")+de(D),11,cC))),128))])])):Lt("",!0)],40,GR))),128))])],34)])])],64))]))}},hC=GS(uC,[["__scopeId","data-v-d1542a96"]]),fC={class:"page"},dC={key:1,class:"card"},pC={key:0,class:"center"},mC={key:1,class:"center draw-action-col"},gC={key:0,class:"error-text"},_C={key:2,class:"results-container"},yC={class:"list-section"},vC={class:"list-section"},EC={__name:"App",setup(t){const e=Re([]),n=Re([]),r=Re(!1),s=Re(!0),i=Re(""),a=Re(!1);function l(){const m=window.location.pathname.replace(/\/+$/,""),v=window.location.hash,S=new URLSearchParams(window.location.search);a.value=m.endsWith("/admin")||v==="#/admin"||v==="#admin"||S.has("admin")}function c(){window.history.pushState({},document.title,"/TirageNoel/"),a.value=!1,h()}async function h(){s.value=!0,i.value="";try{const m=await Ti();eu(m)?(e.value=m.maj||[],n.value=m.min||[],r.value=!0):(e.value=[],n.value=[],r.value=!1)}catch(m){console.error("Erreur lors du chargement des résultats:",m),r.value=!1}finally{s.value=!1}}async function d(){if(!r.value){i.value="";try{const m=await Ti(),[v,S]=await Promise.all([xg(m),Og(m)]),N=v.maj,L=v.min,x=S?.pairs||{},$=Wo(N,x);if(!$){i.value="Tirage impossible pour la Liste 1 (trop d'exclusions). Vérifiez la configuration dans la page admin.";return}const W=Wo(L,x);if(!W){i.value="Tirage impossible pour la Liste 2 (trop d'exclusions). Vérifiez la configuration dans la page admin.";return}await Aa(J=>({...J,maj:$,min:W,drawDone:!0,timestamp:new Date().toISOString()})),e.value=$,n.value=W,r.value=!0}catch(m){console.error("Erreur lors de l'enregistrement du tirage:",m),i.value="Une erreur est survenue lors de l'enregistrement du tirage."}}}return na(async()=>{l(),window.addEventListener("popstate",l),window.addEventListener("hashchange",l),a.value?s.value=!1:await h()}),cc(()=>{window.removeEventListener("popstate",l),window.removeEventListener("hashchange",l)}),(m,v)=>(ae(),ue("div",fC,[a.value?(ae(),ip(hC,{key:0,onExitAdmin:c})):(ae(),ue("div",dC,[v[4]||(v[4]=M("h1",null,"Tirage au sort Noël",-1)),s.value?(ae(),ue("div",pC,[...v[0]||(v[0]=[M("p",null,"Vérification du tirage en cours...",-1)])])):r.value?(ae(),ue("div",_C,[M("div",yC,[v[1]||(v[1]=M("h2",null,"Liste 1",-1)),M("ul",null,[(ae(!0),ue(Be,null,mn(e.value,S=>(ae(),ue("li",{key:S,class:"result"},de(S),1))),128))])]),v[3]||(v[3]=M("div",{class:"divider"},null,-1)),M("div",vC,[v[2]||(v[2]=M("h2",null,"Liste 2",-1)),M("ul",null,[(ae(!0),ue(Be,null,mn(n.value,S=>(ae(),ue("li",{key:S,class:"result"},de(S),1))),128))])])])):(ae(),ue("div",mC,[M("button",{onClick:d},"Lancer le tirage"),i.value?(ae(),ue("p",gC,de(i.value),1)):Lt("",!0)]))]))]))}};Nv(EC).mount("#app");
