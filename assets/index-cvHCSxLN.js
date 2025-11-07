(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ua(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const vt={},sr=[],De=()=>{},ku=()=>!1,Ci=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ha=e=>e.startsWith("onUpdate:"),se=Object.assign,fa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},zd=Object.prototype.hasOwnProperty,mt=(e,t)=>zd.call(e,t),st=Array.isArray,ir=e=>Pi(e)==="[object Map]",Lu=e=>Pi(e)==="[object Set]",ot=e=>typeof e=="function",xt=e=>typeof e=="string",wn=e=>typeof e=="symbol",bt=e=>e!==null&&typeof e=="object",Fu=e=>(bt(e)||ot(e))&&ot(e.then)&&ot(e.catch),Uu=Object.prototype.toString,Pi=e=>Uu.call(e),Kd=e=>Pi(e).slice(8,-1),Bu=e=>Pi(e)==="[object Object]",da=e=>xt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Qr=ua(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vi=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Wd=/-\w/g,mn=Vi(e=>e.replace(Wd,t=>t.slice(1).toUpperCase())),Gd=/\B([A-Z])/g,jn=Vi(e=>e.replace(Gd,"-$1").toLowerCase()),ju=Vi(e=>e.charAt(0).toUpperCase()+e.slice(1)),co=Vi(e=>e?`on${ju(e)}`:""),un=(e,t)=>!Object.is(e,t),uo=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},$u=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Qd=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Zl;const Di=()=>Zl||(Zl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pa(e){if(st(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=xt(r)?Zd(r):pa(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(xt(e)||bt(e))return e}const Xd=/;(?![^(]*\))/g,Yd=/:([^]+)/,Jd=/\/\*[^]*?\*\//g;function Zd(e){const t={};return e.replace(Jd,"").split(Xd).forEach(n=>{if(n){const r=n.split(Yd);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ma(e){let t="";if(xt(e))t=e;else if(st(e))for(let n=0;n<e.length;n++){const r=ma(e[n]);r&&(t+=r+" ")}else if(bt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const tp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ep=ua(tp);function qu(e){return!!e||e===""}const Hu=e=>!!(e&&e.__v_isRef===!0),Do=e=>xt(e)?e:e==null?"":st(e)||bt(e)&&(e.toString===Uu||!ot(e.toString))?Hu(e)?Do(e.value):JSON.stringify(e,zu,2):String(e),zu=(e,t)=>Hu(t)?zu(e,t.value):ir(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[ho(r,i)+" =>"]=s,n),{})}:Lu(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ho(n))}:wn(t)?ho(t):bt(t)&&!st(t)&&!Bu(t)?String(t):t,ho=(e,t="")=>{var n;return wn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ie;class np{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ie,!t&&ie&&(this.index=(ie.scopes||(ie.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ie;try{return ie=this,t()}finally{ie=n}}}on(){++this._on===1&&(this.prevScope=ie,ie=this)}off(){this._on>0&&--this._on===0&&(ie=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function rp(){return ie}let Tt;const fo=new WeakSet;class Ku{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ie&&ie.active&&ie.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fo.has(this)&&(fo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,tc(this),Qu(this);const t=Tt,n=ve;Tt=this,ve=!0;try{return this.fn()}finally{Xu(this),Tt=t,ve=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ya(t);this.deps=this.depsTail=void 0,tc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xo(this)&&this.run()}get dirty(){return xo(this)}}let Wu=0,Xr,Yr;function Gu(e,t=!1){if(e.flags|=8,t){e.next=Yr,Yr=e;return}e.next=Xr,Xr=e}function ga(){Wu++}function _a(){if(--Wu>0)return;if(Yr){let t=Yr;for(Yr=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Xr;){let t=Xr;for(Xr=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Qu(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Xu(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ya(r),sp(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function xo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Yu(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Yu(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ls)||(e.globalVersion=ls,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!xo(e))))return;e.flags|=2;const t=e.dep,n=Tt,r=ve;Tt=e,ve=!0;try{Qu(e);const s=e.fn(e._value);(t.version===0||un(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Tt=n,ve=r,Xu(e),e.flags&=-3}}function ya(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ya(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function sp(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ve=!0;const Ju=[];function He(){Ju.push(ve),ve=!1}function ze(){const e=Ju.pop();ve=e===void 0?!0:e}function tc(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Tt;Tt=void 0;try{t()}finally{Tt=n}}}let ls=0;class ip{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ea{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Tt||!ve||Tt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Tt)n=this.activeLink=new ip(Tt,this),Tt.deps?(n.prevDep=Tt.depsTail,Tt.depsTail.nextDep=n,Tt.depsTail=n):Tt.deps=Tt.depsTail=n,Zu(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Tt.depsTail,n.nextDep=void 0,Tt.depsTail.nextDep=n,Tt.depsTail=n,Tt.deps===n&&(Tt.deps=r)}return n}trigger(t){this.version++,ls++,this.notify(t)}notify(t){ga();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{_a()}}}function Zu(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Zu(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const No=new WeakMap,kn=Symbol(""),Oo=Symbol(""),cs=Symbol("");function Yt(e,t,n){if(ve&&Tt){let r=No.get(e);r||No.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ea),s.map=r,s.key=n),s.track()}}function $e(e,t,n,r,s,i){const a=No.get(e);if(!a){ls++;return}const l=u=>{u&&u.trigger()};if(ga(),t==="clear")a.forEach(l);else{const u=st(e),f=u&&da(n);if(u&&n==="length"){const d=Number(r);a.forEach((m,T)=>{(T==="length"||T===cs||!wn(T)&&T>=d)&&l(m)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),f&&l(a.get(cs)),t){case"add":u?f&&l(a.get("length")):(l(a.get(kn)),ir(e)&&l(a.get(Oo)));break;case"delete":u||(l(a.get(kn)),ir(e)&&l(a.get(Oo)));break;case"set":ir(e)&&l(a.get(kn));break}}_a()}function Jn(e){const t=pt(e);return t===e?t:(Yt(t,"iterate",cs),_e(e)?t:t.map(Ht))}function xi(e){return Yt(e=pt(e),"iterate",cs),e}const op={__proto__:null,[Symbol.iterator](){return po(this,Symbol.iterator,Ht)},concat(...e){return Jn(this).concat(...e.map(t=>st(t)?Jn(t):t))},entries(){return po(this,"entries",e=>(e[1]=Ht(e[1]),e))},every(e,t){return Be(this,"every",e,t,void 0,arguments)},filter(e,t){return Be(this,"filter",e,t,n=>n.map(Ht),arguments)},find(e,t){return Be(this,"find",e,t,Ht,arguments)},findIndex(e,t){return Be(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Be(this,"findLast",e,t,Ht,arguments)},findLastIndex(e,t){return Be(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Be(this,"forEach",e,t,void 0,arguments)},includes(...e){return mo(this,"includes",e)},indexOf(...e){return mo(this,"indexOf",e)},join(e){return Jn(this).join(e)},lastIndexOf(...e){return mo(this,"lastIndexOf",e)},map(e,t){return Be(this,"map",e,t,void 0,arguments)},pop(){return $r(this,"pop")},push(...e){return $r(this,"push",e)},reduce(e,...t){return ec(this,"reduce",e,t)},reduceRight(e,...t){return ec(this,"reduceRight",e,t)},shift(){return $r(this,"shift")},some(e,t){return Be(this,"some",e,t,void 0,arguments)},splice(...e){return $r(this,"splice",e)},toReversed(){return Jn(this).toReversed()},toSorted(e){return Jn(this).toSorted(e)},toSpliced(...e){return Jn(this).toSpliced(...e)},unshift(...e){return $r(this,"unshift",e)},values(){return po(this,"values",Ht)}};function po(e,t,n){const r=xi(e),s=r[t]();return r!==e&&!_e(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const ap=Array.prototype;function Be(e,t,n,r,s,i){const a=xi(e),l=a!==e&&!_e(e),u=a[t];if(u!==ap[t]){const m=u.apply(e,i);return l?Ht(m):m}let f=n;a!==e&&(l?f=function(m,T){return n.call(this,Ht(m),T,e)}:n.length>2&&(f=function(m,T){return n.call(this,m,T,e)}));const d=u.call(a,f,r);return l&&s?s(d):d}function ec(e,t,n,r){const s=xi(e);let i=n;return s!==e&&(_e(e)?n.length>3&&(i=function(a,l,u){return n.call(this,a,l,u,e)}):i=function(a,l,u){return n.call(this,a,Ht(l),u,e)}),s[t](i,...r)}function mo(e,t,n){const r=pt(e);Yt(r,"iterate",cs);const s=r[t](...n);return(s===-1||s===!1)&&wa(n[0])?(n[0]=pt(n[0]),r[t](...n)):s}function $r(e,t,n=[]){He(),ga();const r=pt(e)[t].apply(e,n);return _a(),ze(),r}const lp=ua("__proto__,__v_isRef,__isVue"),th=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wn));function cp(e){wn(e)||(e=String(e));const t=pt(this);return Yt(t,"has",e),t.hasOwnProperty(e)}class eh{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ep:ih:i?sh:rh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=st(t);if(!s){let u;if(a&&(u=op[n]))return u;if(n==="hasOwnProperty")return cp}const l=Reflect.get(t,n,Zt(t)?t:r);if((wn(n)?th.has(n):lp(n))||(s||Yt(t,"get",n),i))return l;if(Zt(l)){const u=a&&da(n)?l:l.value;return s&&bt(u)?ko(u):u}return bt(l)?s?ko(l):va(l):l}}class nh extends eh{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const u=gn(i);if(!_e(r)&&!gn(r)&&(i=pt(i),r=pt(r)),!st(t)&&Zt(i)&&!Zt(r))return u||(i.value=r),!0}const a=st(t)&&da(n)?Number(n)<t.length:mt(t,n),l=Reflect.set(t,n,r,Zt(t)?t:s);return t===pt(s)&&(a?un(r,i)&&$e(t,"set",n,r):$e(t,"add",n,r)),l}deleteProperty(t,n){const r=mt(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&$e(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!wn(n)||!th.has(n))&&Yt(t,"has",n),r}ownKeys(t){return Yt(t,"iterate",st(t)?"length":kn),Reflect.ownKeys(t)}}class up extends eh{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const hp=new nh,fp=new up,dp=new nh(!0);const Mo=e=>e,Bs=e=>Reflect.getPrototypeOf(e);function pp(e,t,n){return function(...r){const s=this.__v_raw,i=pt(s),a=ir(i),l=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,f=s[e](...r),d=n?Mo:t?si:Ht;return!t&&Yt(i,"iterate",u?Oo:kn),{next(){const{value:m,done:T}=f.next();return T?{value:m,done:T}:{value:l?[d(m[0]),d(m[1])]:d(m),done:T}},[Symbol.iterator](){return this}}}}function js(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function mp(e,t){const n={get(s){const i=this.__v_raw,a=pt(i),l=pt(s);e||(un(s,l)&&Yt(a,"get",s),Yt(a,"get",l));const{has:u}=Bs(a),f=t?Mo:e?si:Ht;if(u.call(a,s))return f(i.get(s));if(u.call(a,l))return f(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&Yt(pt(s),"iterate",kn),s.size},has(s){const i=this.__v_raw,a=pt(i),l=pt(s);return e||(un(s,l)&&Yt(a,"has",s),Yt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,u=pt(l),f=t?Mo:e?si:Ht;return!e&&Yt(u,"iterate",kn),l.forEach((d,m)=>s.call(i,f(d),f(m),a))}};return se(n,e?{add:js("add"),set:js("set"),delete:js("delete"),clear:js("clear")}:{add(s){!t&&!_e(s)&&!gn(s)&&(s=pt(s));const i=pt(this);return Bs(i).has.call(i,s)||(i.add(s),$e(i,"add",s,s)),this},set(s,i){!t&&!_e(i)&&!gn(i)&&(i=pt(i));const a=pt(this),{has:l,get:u}=Bs(a);let f=l.call(a,s);f||(s=pt(s),f=l.call(a,s));const d=u.call(a,s);return a.set(s,i),f?un(i,d)&&$e(a,"set",s,i):$e(a,"add",s,i),this},delete(s){const i=pt(this),{has:a,get:l}=Bs(i);let u=a.call(i,s);u||(s=pt(s),u=a.call(i,s)),l&&l.call(i,s);const f=i.delete(s);return u&&$e(i,"delete",s,void 0),f},clear(){const s=pt(this),i=s.size!==0,a=s.clear();return i&&$e(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=pp(s,e,t)}),n}function Ta(e,t){const n=mp(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(mt(n,s)&&s in r?n:r,s,i)}const gp={get:Ta(!1,!1)},_p={get:Ta(!1,!0)},yp={get:Ta(!0,!1)};const rh=new WeakMap,sh=new WeakMap,ih=new WeakMap,Ep=new WeakMap;function Tp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vp(e){return e.__v_skip||!Object.isExtensible(e)?0:Tp(Kd(e))}function va(e){return gn(e)?e:Ia(e,!1,hp,gp,rh)}function Ip(e){return Ia(e,!1,dp,_p,sh)}function ko(e){return Ia(e,!0,fp,yp,ih)}function Ia(e,t,n,r,s){if(!bt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=vp(e);if(i===0)return e;const a=s.get(e);if(a)return a;const l=new Proxy(e,i===2?r:n);return s.set(e,l),l}function or(e){return gn(e)?or(e.__v_raw):!!(e&&e.__v_isReactive)}function gn(e){return!!(e&&e.__v_isReadonly)}function _e(e){return!!(e&&e.__v_isShallow)}function wa(e){return e?!!e.__v_raw:!1}function pt(e){const t=e&&e.__v_raw;return t?pt(t):e}function wp(e){return!mt(e,"__v_skip")&&Object.isExtensible(e)&&$u(e,"__v_skip",!0),e}const Ht=e=>bt(e)?va(e):e,si=e=>bt(e)?ko(e):e;function Zt(e){return e?e.__v_isRef===!0:!1}function $s(e){return Ap(e,!1)}function Ap(e,t){return Zt(e)?e:new bp(e,t)}class bp{constructor(t,n){this.dep=new Ea,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:pt(t),this._value=n?t:Ht(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||_e(t)||gn(t);t=r?t:pt(t),un(t,n)&&(this._rawValue=t,this._value=r?t:Ht(t),this.dep.trigger())}}function Rp(e){return Zt(e)?e.value:e}const Sp={get:(e,t,n)=>t==="__v_raw"?e:Rp(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Zt(s)&&!Zt(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function oh(e){return or(e)?e:new Proxy(e,Sp)}class Cp{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ea(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ls-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Tt!==this)return Gu(this,!0),!0}get value(){const t=this.dep.track();return Yu(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Pp(e,t,n=!1){let r,s;return ot(e)?r=e:(r=e.get,s=e.set),new Cp(r,s,n)}const qs={},ii=new WeakMap;let Nn;function Vp(e,t=!1,n=Nn){if(n){let r=ii.get(n);r||ii.set(n,r=[]),r.push(e)}}function Dp(e,t,n=vt){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:u}=n,f=H=>s?H:_e(H)||s===!1||s===0?ln(H,1):ln(H);let d,m,T,S,F=!1,U=!1;if(Zt(e)?(m=()=>e.value,F=_e(e)):or(e)?(m=()=>f(e),F=!0):st(e)?(U=!0,F=e.some(H=>or(H)||_e(H)),m=()=>e.map(H=>{if(Zt(H))return H.value;if(or(H))return f(H);if(ot(H))return u?u(H,2):H()})):ot(e)?t?m=u?()=>u(e,2):e:m=()=>{if(T){He();try{T()}finally{ze()}}const H=Nn;Nn=d;try{return u?u(e,3,[S]):e(S)}finally{Nn=H}}:m=De,t&&s){const H=m,rt=s===!0?1/0:s;m=()=>ln(H(),rt)}const B=rp(),W=()=>{d.stop(),B&&B.active&&fa(B.effects,d)};if(i&&t){const H=t;t=(...rt)=>{H(...rt),W()}}let G=U?new Array(e.length).fill(qs):qs;const $=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(t){const rt=d.run();if(s||F||(U?rt.some((_t,v)=>un(_t,G[v])):un(rt,G))){T&&T();const _t=Nn;Nn=d;try{const v=[rt,G===qs?void 0:U&&G[0]===qs?[]:G,S];G=rt,u?u(t,3,v):t(...v)}finally{Nn=_t}}}else d.run()};return l&&l($),d=new Ku(m),d.scheduler=a?()=>a($,!1):$,S=H=>Vp(H,!1,d),T=d.onStop=()=>{const H=ii.get(d);if(H){if(u)u(H,4);else for(const rt of H)rt();ii.delete(d)}},t?r?$(!0):G=d.run():a?a($.bind(null,!0),!0):d.run(),W.pause=d.pause.bind(d),W.resume=d.resume.bind(d),W.stop=W,W}function ln(e,t=1/0,n){if(t<=0||!bt(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Zt(e))ln(e.value,t,n);else if(st(e))for(let r=0;r<e.length;r++)ln(e[r],t,n);else if(Lu(e)||ir(e))e.forEach(r=>{ln(r,t,n)});else if(Bu(e)){for(const r in e)ln(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&ln(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ws(e,t,n,r){try{return r?e(...r):e()}catch(s){Ni(s,t,n)}}function ke(e,t,n,r){if(ot(e)){const s=ws(e,t,n,r);return s&&Fu(s)&&s.catch(i=>{Ni(i,t,n)}),s}if(st(e)){const s=[];for(let i=0;i<e.length;i++)s.push(ke(e[i],t,n,r));return s}}function Ni(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||vt;if(t){let l=t.parent;const u=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let m=0;m<d.length;m++)if(d[m](e,u,f)===!1)return}l=l.parent}if(i){He(),ws(i,null,10,[e,u,f]),ze();return}}xp(e,n,s,r,a)}function xp(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const ne=[];let Se=-1;const ar=[];let on=null,Zn=0;const ah=Promise.resolve();let oi=null;function Np(e){const t=oi||ah;return e?t.then(this?e.bind(this):e):t}function Op(e){let t=Se+1,n=ne.length;for(;t<n;){const r=t+n>>>1,s=ne[r],i=us(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Aa(e){if(!(e.flags&1)){const t=us(e),n=ne[ne.length-1];!n||!(e.flags&2)&&t>=us(n)?ne.push(e):ne.splice(Op(t),0,e),e.flags|=1,lh()}}function lh(){oi||(oi=ah.then(uh))}function Mp(e){st(e)?ar.push(...e):on&&e.id===-1?on.splice(Zn+1,0,e):e.flags&1||(ar.push(e),e.flags|=1),lh()}function nc(e,t,n=Se+1){for(;n<ne.length;n++){const r=ne[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;ne.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ch(e){if(ar.length){const t=[...new Set(ar)].sort((n,r)=>us(n)-us(r));if(ar.length=0,on){on.push(...t);return}for(on=t,Zn=0;Zn<on.length;Zn++){const n=on[Zn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}on=null,Zn=0}}const us=e=>e.id==null?e.flags&2?-1:1/0:e.id;function uh(e){try{for(Se=0;Se<ne.length;Se++){const t=ne[Se];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ws(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Se<ne.length;Se++){const t=ne[Se];t&&(t.flags&=-2)}Se=-1,ne.length=0,ch(),oi=null,(ne.length||ar.length)&&uh()}}let Ve=null,hh=null;function ai(e){const t=Ve;return Ve=e,hh=e&&e.type.__scopeId||null,t}function kp(e,t=Ve,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&dc(-1);const i=ai(t);let a;try{a=e(...s)}finally{ai(i),r._d&&dc(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Dn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let u=l.dir[r];u&&(He(),ke(u,n,8,[e.el,l,e,t]),ze())}}const Lp=Symbol("_vte"),Fp=e=>e.__isTeleport,Up=Symbol("_leaveCb");function ba(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ba(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function fh(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const li=new WeakMap;function Jr(e,t,n,r,s=!1){if(st(e)){e.forEach((F,U)=>Jr(F,t&&(st(t)?t[U]:t),n,r,s));return}if(Zr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Jr(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Pa(r.component):r.el,a=s?null:i,{i:l,r:u}=e,f=t&&t.r,d=l.refs===vt?l.refs={}:l.refs,m=l.setupState,T=pt(m),S=m===vt?ku:F=>mt(T,F);if(f!=null&&f!==u){if(rc(t),xt(f))d[f]=null,S(f)&&(m[f]=null);else if(Zt(f)){f.value=null;const F=t;F.k&&(d[F.k]=null)}}if(ot(u))ws(u,l,12,[a,d]);else{const F=xt(u),U=Zt(u);if(F||U){const B=()=>{if(e.f){const W=F?S(u)?m[u]:d[u]:u.value;if(s)st(W)&&fa(W,i);else if(st(W))W.includes(i)||W.push(i);else if(F)d[u]=[i],S(u)&&(m[u]=d[u]);else{const G=[i];u.value=G,e.k&&(d[e.k]=G)}}else F?(d[u]=a,S(u)&&(m[u]=a)):U&&(u.value=a,e.k&&(d[e.k]=a))};if(a){const W=()=>{B(),li.delete(e)};W.id=-1,li.set(e,W),he(W,n)}else rc(e),B()}}}function rc(e){const t=li.get(e);t&&(t.flags|=8,li.delete(e))}Di().requestIdleCallback;Di().cancelIdleCallback;const Zr=e=>!!e.type.__asyncLoader,dh=e=>e.type.__isKeepAlive;function Bp(e,t){ph(e,"a",t)}function jp(e,t){ph(e,"da",t)}function ph(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Oi(t,r,n),n){let s=n.parent;for(;s&&s.parent;)dh(s.parent.vnode)&&$p(r,t,n,s),s=s.parent}}function $p(e,t,n,r){const s=Oi(t,e,r,!0);gh(()=>{fa(r[t],s)},n)}function Oi(e,t,n=re,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{He();const l=As(n),u=ke(t,n,e,a);return l(),ze(),u});return r?s.unshift(i):s.push(i),i}}const Qe=e=>(t,n=re)=>{(!fs||e==="sp")&&Oi(e,(...r)=>t(...r),n)},qp=Qe("bm"),mh=Qe("m"),Hp=Qe("bu"),zp=Qe("u"),Kp=Qe("bum"),gh=Qe("um"),Wp=Qe("sp"),Gp=Qe("rtg"),Qp=Qe("rtc");function Xp(e,t=re){Oi("ec",e,t)}const Yp=Symbol.for("v-ndc");function sc(e,t,n,r){let s;const i=n,a=st(e);if(a||xt(e)){const l=a&&or(e);let u=!1,f=!1;l&&(u=!_e(e),f=gn(e),e=xi(e)),s=new Array(e.length);for(let d=0,m=e.length;d<m;d++)s[d]=t(u?f?si(Ht(e[d])):Ht(e[d]):e[d],d,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(bt(e))if(e[Symbol.iterator])s=Array.from(e,(l,u)=>t(l,u,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let u=0,f=l.length;u<f;u++){const d=l[u];s[u]=t(e[d],d,u,i)}}else s=[];return s}const Lo=e=>e?kh(e)?Pa(e):Lo(e.parent):null,ts=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Lo(e.parent),$root:e=>Lo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>yh(e),$forceUpdate:e=>e.f||(e.f=()=>{Aa(e.update)}),$nextTick:e=>e.n||(e.n=Np.bind(e.proxy)),$watch:e=>Em.bind(e)}),go=(e,t)=>e!==vt&&!e.__isScriptSetup&&mt(e,t),Jp={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:u}=e;let f;if(t[0]!=="$"){const S=a[t];if(S!==void 0)switch(S){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(go(r,t))return a[t]=1,r[t];if(s!==vt&&mt(s,t))return a[t]=2,s[t];if((f=e.propsOptions[0])&&mt(f,t))return a[t]=3,i[t];if(n!==vt&&mt(n,t))return a[t]=4,n[t];Fo&&(a[t]=0)}}const d=ts[t];let m,T;if(d)return t==="$attrs"&&Yt(e.attrs,"get",""),d(e);if((m=l.__cssModules)&&(m=m[t]))return m;if(n!==vt&&mt(n,t))return a[t]=4,n[t];if(T=u.config.globalProperties,mt(T,t))return T[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return go(s,t)?(s[t]=n,!0):r!==vt&&mt(r,t)?(r[t]=n,!0):mt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:a}},l){let u,f;return!!(n[l]||e!==vt&&l[0]!=="$"&&mt(e,l)||go(t,l)||(u=i[0])&&mt(u,l)||mt(r,l)||mt(ts,l)||mt(s.config.globalProperties,l)||(f=a.__cssModules)&&f[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:mt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ic(e){return st(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Fo=!0;function Zp(e){const t=yh(e),n=e.proxy,r=e.ctx;Fo=!1,t.beforeCreate&&oc(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:u,inject:f,created:d,beforeMount:m,mounted:T,beforeUpdate:S,updated:F,activated:U,deactivated:B,beforeDestroy:W,beforeUnmount:G,destroyed:$,unmounted:H,render:rt,renderTracked:_t,renderTriggered:v,errorCaptured:g,serverPrefetch:E,expose:A,inheritAttrs:I,components:b,directives:_,filters:kt}=t;if(f&&tm(f,r,null),a)for(const It in a){const dt=a[It];ot(dt)&&(r[It]=dt.bind(n))}if(s){const It=s.call(n,n);bt(It)&&(e.data=va(It))}if(Fo=!0,i)for(const It in i){const dt=i[It],pe=ot(dt)?dt.bind(n,n):ot(dt.get)?dt.get.bind(n,n):De,Kn=!ot(dt)&&ot(dt.set)?dt.set.bind(n):De,we=qm({get:pe,set:Kn});Object.defineProperty(r,It,{enumerable:!0,configurable:!0,get:()=>we.value,set:ae=>we.value=ae})}if(l)for(const It in l)_h(l[It],r,n,It);if(u){const It=ot(u)?u.call(n):u;Reflect.ownKeys(It).forEach(dt=>{om(dt,It[dt])})}d&&oc(d,e,"c");function jt(It,dt){st(dt)?dt.forEach(pe=>It(pe.bind(n))):dt&&It(dt.bind(n))}if(jt(qp,m),jt(mh,T),jt(Hp,S),jt(zp,F),jt(Bp,U),jt(jp,B),jt(Xp,g),jt(Qp,_t),jt(Gp,v),jt(Kp,G),jt(gh,H),jt(Wp,E),st(A))if(A.length){const It=e.exposed||(e.exposed={});A.forEach(dt=>{Object.defineProperty(It,dt,{get:()=>n[dt],set:pe=>n[dt]=pe,enumerable:!0})})}else e.exposed||(e.exposed={});rt&&e.render===De&&(e.render=rt),I!=null&&(e.inheritAttrs=I),b&&(e.components=b),_&&(e.directives=_),E&&fh(e)}function tm(e,t,n=De){st(e)&&(e=Uo(e));for(const r in e){const s=e[r];let i;bt(s)?"default"in s?i=Qs(s.from||r,s.default,!0):i=Qs(s.from||r):i=Qs(s),Zt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function oc(e,t,n){ke(st(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function _h(e,t,n,r){let s=r.includes(".")?Dh(n,r):()=>n[r];if(xt(e)){const i=t[e];ot(i)&&yo(s,i)}else if(ot(e))yo(s,e.bind(n));else if(bt(e))if(st(e))e.forEach(i=>_h(i,t,n,r));else{const i=ot(e.handler)?e.handler.bind(n):t[e.handler];ot(i)&&yo(s,i,e)}}function yh(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let u;return l?u=l:!s.length&&!n&&!r?u=t:(u={},s.length&&s.forEach(f=>ci(u,f,a,!0)),ci(u,t,a)),bt(t)&&i.set(t,u),u}function ci(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&ci(e,i,n,!0),s&&s.forEach(a=>ci(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=em[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const em={data:ac,props:lc,emits:lc,methods:Hr,computed:Hr,beforeCreate:ee,created:ee,beforeMount:ee,mounted:ee,beforeUpdate:ee,updated:ee,beforeDestroy:ee,beforeUnmount:ee,destroyed:ee,unmounted:ee,activated:ee,deactivated:ee,errorCaptured:ee,serverPrefetch:ee,components:Hr,directives:Hr,watch:rm,provide:ac,inject:nm};function ac(e,t){return t?e?function(){return se(ot(e)?e.call(this,this):e,ot(t)?t.call(this,this):t)}:t:e}function nm(e,t){return Hr(Uo(e),Uo(t))}function Uo(e){if(st(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ee(e,t){return e?[...new Set([].concat(e,t))]:t}function Hr(e,t){return e?se(Object.create(null),e,t):t}function lc(e,t){return e?st(e)&&st(t)?[...new Set([...e,...t])]:se(Object.create(null),ic(e),ic(t??{})):t}function rm(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const r in t)n[r]=ee(e[r],t[r]);return n}function Eh(){return{app:null,config:{isNativeTag:ku,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sm=0;function im(e,t){return function(r,s=null){ot(r)||(r=se({},r)),s!=null&&!bt(s)&&(s=null);const i=Eh(),a=new WeakSet,l=[];let u=!1;const f=i.app={_uid:sm++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Hm,get config(){return i.config},set config(d){},use(d,...m){return a.has(d)||(d&&ot(d.install)?(a.add(d),d.install(f,...m)):ot(d)&&(a.add(d),d(f,...m))),f},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),f},component(d,m){return m?(i.components[d]=m,f):i.components[d]},directive(d,m){return m?(i.directives[d]=m,f):i.directives[d]},mount(d,m,T){if(!u){const S=f._ceVNode||Ln(r,s);return S.appContext=i,T===!0?T="svg":T===!1&&(T=void 0),e(S,d,T),u=!0,f._container=d,d.__vue_app__=f,Pa(S.component)}},onUnmount(d){l.push(d)},unmount(){u&&(ke(l,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(d,m){return i.provides[d]=m,f},runWithContext(d){const m=lr;lr=f;try{return d()}finally{lr=m}}};return f}}let lr=null;function om(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function Qs(e,t,n=!1){const r=Lm();if(r||lr){let s=lr?lr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ot(t)?t.call(r&&r.proxy):t}}const Th={},vh=()=>Object.create(Th),Ih=e=>Object.getPrototypeOf(e)===Th;function am(e,t,n,r=!1){const s={},i=vh();e.propsDefaults=Object.create(null),wh(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:Ip(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function lm(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=pt(s),[u]=e.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let T=d[m];if(Mi(e.emitsOptions,T))continue;const S=t[T];if(u)if(mt(i,T))S!==i[T]&&(i[T]=S,f=!0);else{const F=mn(T);s[F]=Bo(u,l,F,S,e,!1)}else S!==i[T]&&(i[T]=S,f=!0)}}}else{wh(e,t,s,i)&&(f=!0);let d;for(const m in l)(!t||!mt(t,m)&&((d=jn(m))===m||!mt(t,d)))&&(u?n&&(n[m]!==void 0||n[d]!==void 0)&&(s[m]=Bo(u,l,m,void 0,e,!0)):delete s[m]);if(i!==l)for(const m in i)(!t||!mt(t,m))&&(delete i[m],f=!0)}f&&$e(e.attrs,"set","")}function wh(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let u in t){if(Qr(u))continue;const f=t[u];let d;s&&mt(s,d=mn(u))?!i||!i.includes(d)?n[d]=f:(l||(l={}))[d]=f:Mi(e.emitsOptions,u)||(!(u in r)||f!==r[u])&&(r[u]=f,a=!0)}if(i){const u=pt(n),f=l||vt;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Bo(s,u,m,f[m],e,!mt(f,m))}}return a}function Bo(e,t,n,r,s,i){const a=e[n];if(a!=null){const l=mt(a,"default");if(l&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&ot(u)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const d=As(s);r=f[n]=u.call(null,t),d()}}else r=u;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===jn(n))&&(r=!0))}return r}const cm=new WeakMap;function Ah(e,t,n=!1){const r=n?cm:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},l=[];let u=!1;if(!ot(e)){const d=m=>{u=!0;const[T,S]=Ah(m,t,!0);se(a,T),S&&l.push(...S)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!u)return bt(e)&&r.set(e,sr),sr;if(st(i))for(let d=0;d<i.length;d++){const m=mn(i[d]);cc(m)&&(a[m]=vt)}else if(i)for(const d in i){const m=mn(d);if(cc(m)){const T=i[d],S=a[m]=st(T)||ot(T)?{type:T}:se({},T),F=S.type;let U=!1,B=!0;if(st(F))for(let W=0;W<F.length;++W){const G=F[W],$=ot(G)&&G.name;if($==="Boolean"){U=!0;break}else $==="String"&&(B=!1)}else U=ot(F)&&F.name==="Boolean";S[0]=U,S[1]=B,(U||mt(S,"default"))&&l.push(m)}}const f=[a,l];return bt(e)&&r.set(e,f),f}function cc(e){return e[0]!=="$"&&!Qr(e)}const Ra=e=>e==="_"||e==="_ctx"||e==="$stable",Sa=e=>st(e)?e.map(Pe):[Pe(e)],um=(e,t,n)=>{if(t._n)return t;const r=kp((...s)=>Sa(t(...s)),n);return r._c=!1,r},bh=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ra(s))continue;const i=e[s];if(ot(i))t[s]=um(s,i,r);else if(i!=null){const a=Sa(i);t[s]=()=>a}}},Rh=(e,t)=>{const n=Sa(t);e.slots.default=()=>n},Sh=(e,t,n)=>{for(const r in t)(n||!Ra(r))&&(e[r]=t[r])},hm=(e,t,n)=>{const r=e.slots=vh();if(e.vnode.shapeFlag&32){const s=t._;s?(Sh(r,t,n),n&&$u(r,"_",s,!0)):bh(t,r)}else t&&Rh(e,t)},fm=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=vt;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Sh(s,t,n):(i=!t.$stable,bh(t,s)),a=t}else t&&(Rh(e,t),a={default:1});if(i)for(const l in s)!Ra(l)&&a[l]==null&&delete s[l]},he=Sm;function dm(e){return pm(e)}function pm(e,t){const n=Di();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:u,setText:f,setElementText:d,parentNode:m,nextSibling:T,setScopeId:S=De,insertStaticContent:F}=e,U=(y,w,P,L=null,D=null,x=null,q=void 0,k=null,O=!!w.dynamicChildren)=>{if(y===w)return;y&&!qr(y,w)&&(L=Xe(y),ae(y,D,x,!0),y=null),w.patchFlag===-2&&(O=!1,w.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:z}=w;switch(M){case ki:B(y,w,P,L);break;case hr:W(y,w,P,L);break;case Eo:y==null&&G(w,P,L,q);break;case Ee:b(y,w,P,L,D,x,q,k,O);break;default:z&1?rt(y,w,P,L,D,x,q,k,O):z&6?_(y,w,P,L,D,x,q,k,O):(z&64||z&128)&&M.process(y,w,P,L,D,x,q,k,O,bn)}Y!=null&&D?Jr(Y,y&&y.ref,x,w||y,!w):Y==null&&y&&y.ref!=null&&Jr(y.ref,null,x,y,!0)},B=(y,w,P,L)=>{if(y==null)r(w.el=l(w.children),P,L);else{const D=w.el=y.el;w.children!==y.children&&f(D,w.children)}},W=(y,w,P,L)=>{y==null?r(w.el=u(w.children||""),P,L):w.el=y.el},G=(y,w,P,L)=>{[y.el,y.anchor]=F(y.children,w,P,L,y.el,y.anchor)},$=({el:y,anchor:w},P,L)=>{let D;for(;y&&y!==w;)D=T(y),r(y,P,L),y=D;r(w,P,L)},H=({el:y,anchor:w})=>{let P;for(;y&&y!==w;)P=T(y),s(y),y=P;s(w)},rt=(y,w,P,L,D,x,q,k,O)=>{w.type==="svg"?q="svg":w.type==="math"&&(q="mathml"),y==null?_t(w,P,L,D,x,q,k,O):E(y,w,D,x,q,k,O)},_t=(y,w,P,L,D,x,q,k)=>{let O,M;const{props:Y,shapeFlag:z,transition:X,dirs:Z}=y;if(O=y.el=a(y.type,x,Y&&Y.is,Y),z&8?d(O,y.children):z&16&&g(y.children,O,null,L,D,_o(y,x),q,k),Z&&Dn(y,null,L,"created"),v(O,y,y.scopeId,q,L),Y){for(const yt in Y)yt!=="value"&&!Qr(yt)&&i(O,yt,null,Y[yt],x,L);"value"in Y&&i(O,"value",null,Y.value,x),(M=Y.onVnodeBeforeMount)&&Re(M,L,y)}Z&&Dn(y,null,L,"beforeMount");const at=mm(D,X);at&&X.beforeEnter(O),r(O,w,P),((M=Y&&Y.onVnodeMounted)||at||Z)&&he(()=>{M&&Re(M,L,y),at&&X.enter(O),Z&&Dn(y,null,L,"mounted")},D)},v=(y,w,P,L,D)=>{if(P&&S(y,P),L)for(let x=0;x<L.length;x++)S(y,L[x]);if(D){let x=D.subTree;if(w===x||Nh(x.type)&&(x.ssContent===w||x.ssFallback===w)){const q=D.vnode;v(y,q,q.scopeId,q.slotScopeIds,D.parent)}}},g=(y,w,P,L,D,x,q,k,O=0)=>{for(let M=O;M<y.length;M++){const Y=y[M]=k?an(y[M]):Pe(y[M]);U(null,Y,w,P,L,D,x,q,k)}},E=(y,w,P,L,D,x,q)=>{const k=w.el=y.el;let{patchFlag:O,dynamicChildren:M,dirs:Y}=w;O|=y.patchFlag&16;const z=y.props||vt,X=w.props||vt;let Z;if(P&&xn(P,!1),(Z=X.onVnodeBeforeUpdate)&&Re(Z,P,w,y),Y&&Dn(w,y,P,"beforeUpdate"),P&&xn(P,!0),(z.innerHTML&&X.innerHTML==null||z.textContent&&X.textContent==null)&&d(k,""),M?A(y.dynamicChildren,M,k,P,L,_o(w,D),x):q||dt(y,w,k,null,P,L,_o(w,D),x,!1),O>0){if(O&16)I(k,z,X,P,D);else if(O&2&&z.class!==X.class&&i(k,"class",null,X.class,D),O&4&&i(k,"style",z.style,X.style,D),O&8){const at=w.dynamicProps;for(let yt=0;yt<at.length;yt++){const ft=at[yt],Wt=z[ft],Gt=X[ft];(Gt!==Wt||ft==="value")&&i(k,ft,Wt,Gt,D,P)}}O&1&&y.children!==w.children&&d(k,w.children)}else!q&&M==null&&I(k,z,X,P,D);((Z=X.onVnodeUpdated)||Y)&&he(()=>{Z&&Re(Z,P,w,y),Y&&Dn(w,y,P,"updated")},L)},A=(y,w,P,L,D,x,q)=>{for(let k=0;k<w.length;k++){const O=y[k],M=w[k],Y=O.el&&(O.type===Ee||!qr(O,M)||O.shapeFlag&198)?m(O.el):P;U(O,M,Y,null,L,D,x,q,!0)}},I=(y,w,P,L,D)=>{if(w!==P){if(w!==vt)for(const x in w)!Qr(x)&&!(x in P)&&i(y,x,w[x],null,D,L);for(const x in P){if(Qr(x))continue;const q=P[x],k=w[x];q!==k&&x!=="value"&&i(y,x,k,q,D,L)}"value"in P&&i(y,"value",w.value,P.value,D)}},b=(y,w,P,L,D,x,q,k,O)=>{const M=w.el=y?y.el:l(""),Y=w.anchor=y?y.anchor:l("");let{patchFlag:z,dynamicChildren:X,slotScopeIds:Z}=w;Z&&(k=k?k.concat(Z):Z),y==null?(r(M,P,L),r(Y,P,L),g(w.children||[],P,Y,D,x,q,k,O)):z>0&&z&64&&X&&y.dynamicChildren?(A(y.dynamicChildren,X,P,D,x,q,k),(w.key!=null||D&&w===D.subTree)&&Ch(y,w,!0)):dt(y,w,P,Y,D,x,q,k,O)},_=(y,w,P,L,D,x,q,k,O)=>{w.slotScopeIds=k,y==null?w.shapeFlag&512?D.ctx.activate(w,P,L,q,O):kt(w,P,L,D,x,q,O):Ie(y,w,O)},kt=(y,w,P,L,D,x,q)=>{const k=y.component=km(y,L,D);if(dh(y)&&(k.ctx.renderer=bn),Fm(k,!1,q),k.asyncDep){if(D&&D.registerDep(k,jt,q),!y.el){const O=k.subTree=Ln(hr);W(null,O,w,P),y.placeholder=O.el}}else jt(k,y,w,P,D,x,q)},Ie=(y,w,P)=>{const L=w.component=y.component;if(bm(y,w,P))if(L.asyncDep&&!L.asyncResolved){It(L,w,P);return}else L.next=w,L.update();else w.el=y.el,L.vnode=w},jt=(y,w,P,L,D,x,q)=>{const k=()=>{if(y.isMounted){let{next:z,bu:X,u:Z,parent:at,vnode:yt}=y;{const ce=Ph(y);if(ce){z&&(z.el=yt.el,It(y,z,q)),ce.asyncDep.then(()=>{y.isUnmounted||k()});return}}let ft=z,Wt;xn(y,!1),z?(z.el=yt.el,It(y,z,q)):z=yt,X&&uo(X),(Wt=z.props&&z.props.onVnodeBeforeUpdate)&&Re(Wt,at,z,yt),xn(y,!0);const Gt=hc(y),le=y.subTree;y.subTree=Gt,U(le,Gt,m(le.el),Xe(le),y,D,x),z.el=Gt.el,ft===null&&Rm(y,Gt.el),Z&&he(Z,D),(Wt=z.props&&z.props.onVnodeUpdated)&&he(()=>Re(Wt,at,z,yt),D)}else{let z;const{el:X,props:Z}=w,{bm:at,m:yt,parent:ft,root:Wt,type:Gt}=y,le=Zr(w);xn(y,!1),at&&uo(at),!le&&(z=Z&&Z.onVnodeBeforeMount)&&Re(z,ft,w),xn(y,!0);{Wt.ce&&Wt.ce._def.shadowRoot!==!1&&Wt.ce._injectChildStyle(Gt);const ce=y.subTree=hc(y);U(null,ce,P,L,y,D,x),w.el=ce.el}if(yt&&he(yt,D),!le&&(z=Z&&Z.onVnodeMounted)){const ce=w;he(()=>Re(z,ft,ce),D)}(w.shapeFlag&256||ft&&Zr(ft.vnode)&&ft.vnode.shapeFlag&256)&&y.a&&he(y.a,D),y.isMounted=!0,w=P=L=null}};y.scope.on();const O=y.effect=new Ku(k);y.scope.off();const M=y.update=O.run.bind(O),Y=y.job=O.runIfDirty.bind(O);Y.i=y,Y.id=y.uid,O.scheduler=()=>Aa(Y),xn(y,!0),M()},It=(y,w,P)=>{w.component=y;const L=y.vnode.props;y.vnode=w,y.next=null,lm(y,w.props,L,P),fm(y,w.children,P),He(),nc(y),ze()},dt=(y,w,P,L,D,x,q,k,O=!1)=>{const M=y&&y.children,Y=y?y.shapeFlag:0,z=w.children,{patchFlag:X,shapeFlag:Z}=w;if(X>0){if(X&128){Kn(M,z,P,L,D,x,q,k,O);return}else if(X&256){pe(M,z,P,L,D,x,q,k,O);return}}Z&8?(Y&16&&Ue(M,D,x),z!==M&&d(P,z)):Y&16?Z&16?Kn(M,z,P,L,D,x,q,k,O):Ue(M,D,x,!0):(Y&8&&d(P,""),Z&16&&g(z,P,L,D,x,q,k,O))},pe=(y,w,P,L,D,x,q,k,O)=>{y=y||sr,w=w||sr;const M=y.length,Y=w.length,z=Math.min(M,Y);let X;for(X=0;X<z;X++){const Z=w[X]=O?an(w[X]):Pe(w[X]);U(y[X],Z,P,null,D,x,q,k,O)}M>Y?Ue(y,D,x,!0,!1,z):g(w,P,L,D,x,q,k,O,z)},Kn=(y,w,P,L,D,x,q,k,O)=>{let M=0;const Y=w.length;let z=y.length-1,X=Y-1;for(;M<=z&&M<=X;){const Z=y[M],at=w[M]=O?an(w[M]):Pe(w[M]);if(qr(Z,at))U(Z,at,P,null,D,x,q,k,O);else break;M++}for(;M<=z&&M<=X;){const Z=y[z],at=w[X]=O?an(w[X]):Pe(w[X]);if(qr(Z,at))U(Z,at,P,null,D,x,q,k,O);else break;z--,X--}if(M>z){if(M<=X){const Z=X+1,at=Z<Y?w[Z].el:L;for(;M<=X;)U(null,w[M]=O?an(w[M]):Pe(w[M]),P,at,D,x,q,k,O),M++}}else if(M>X)for(;M<=z;)ae(y[M],D,x,!0),M++;else{const Z=M,at=M,yt=new Map;for(M=at;M<=X;M++){const $t=w[M]=O?an(w[M]):Pe(w[M]);$t.key!=null&&yt.set($t.key,M)}let ft,Wt=0;const Gt=X-at+1;let le=!1,ce=0;const ye=new Array(Gt);for(M=0;M<Gt;M++)ye[M]=0;for(M=Z;M<=z;M++){const $t=y[M];if(Wt>=Gt){ae($t,D,x,!0);continue}let Lt;if($t.key!=null)Lt=yt.get($t.key);else for(ft=at;ft<=X;ft++)if(ye[ft-at]===0&&qr($t,w[ft])){Lt=ft;break}Lt===void 0?ae($t,D,x,!0):(ye[Lt-at]=M+1,Lt>=ce?ce=Lt:le=!0,U($t,w[Lt],P,null,D,x,q,k,O),Wt++)}const Gn=le?gm(ye):sr;for(ft=Gn.length-1,M=Gt-1;M>=0;M--){const $t=at+M,Lt=w[$t],Sr=w[$t+1],Rn=$t+1<Y?Sr.el||Sr.placeholder:L;ye[M]===0?U(null,Lt,P,Rn,D,x,q,k,O):le&&(ft<0||M!==Gn[ft]?we(Lt,P,Rn,2):ft--)}}},we=(y,w,P,L,D=null)=>{const{el:x,type:q,transition:k,children:O,shapeFlag:M}=y;if(M&6){we(y.component.subTree,w,P,L);return}if(M&128){y.suspense.move(w,P,L);return}if(M&64){q.move(y,w,P,bn);return}if(q===Ee){r(x,w,P);for(let z=0;z<O.length;z++)we(O[z],w,P,L);r(y.anchor,w,P);return}if(q===Eo){$(y,w,P);return}if(L!==2&&M&1&&k)if(L===0)k.beforeEnter(x),r(x,w,P),he(()=>k.enter(x),D);else{const{leave:z,delayLeave:X,afterLeave:Z}=k,at=()=>{y.ctx.isUnmounted?s(x):r(x,w,P)},yt=()=>{x._isLeaving&&x[Up](!0),z(x,()=>{at(),Z&&Z()})};X?X(x,at,yt):yt()}else r(x,w,P)},ae=(y,w,P,L=!1,D=!1)=>{const{type:x,props:q,ref:k,children:O,dynamicChildren:M,shapeFlag:Y,patchFlag:z,dirs:X,cacheIndex:Z}=y;if(z===-2&&(D=!1),k!=null&&(He(),Jr(k,null,P,y,!0),ze()),Z!=null&&(w.renderCache[Z]=void 0),Y&256){w.ctx.deactivate(y);return}const at=Y&1&&X,yt=!Zr(y);let ft;if(yt&&(ft=q&&q.onVnodeBeforeUnmount)&&Re(ft,w,y),Y&6)br(y.component,P,L);else{if(Y&128){y.suspense.unmount(P,L);return}at&&Dn(y,null,w,"beforeUnmount"),Y&64?y.type.remove(y,w,P,bn,L):M&&!M.hasOnce&&(x!==Ee||z>0&&z&64)?Ue(M,w,P,!1,!0):(x===Ee&&z&384||!D&&Y&16)&&Ue(O,w,P),L&&Ar(y)}(yt&&(ft=q&&q.onVnodeUnmounted)||at)&&he(()=>{ft&&Re(ft,w,y),at&&Dn(y,null,w,"unmounted")},P)},Ar=y=>{const{type:w,el:P,anchor:L,transition:D}=y;if(w===Ee){Wn(P,L);return}if(w===Eo){H(y);return}const x=()=>{s(P),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(y.shapeFlag&1&&D&&!D.persisted){const{leave:q,delayLeave:k}=D,O=()=>q(P,x);k?k(y.el,x,O):O()}else x()},Wn=(y,w)=>{let P;for(;y!==w;)P=T(y),s(y),y=P;s(w)},br=(y,w,P)=>{const{bum:L,scope:D,job:x,subTree:q,um:k,m:O,a:M}=y;uc(O),uc(M),L&&uo(L),D.stop(),x&&(x.flags|=8,ae(q,y,w,P)),k&&he(k,w),he(()=>{y.isUnmounted=!0},w)},Ue=(y,w,P,L=!1,D=!1,x=0)=>{for(let q=x;q<y.length;q++)ae(y[q],w,P,L,D)},Xe=y=>{if(y.shapeFlag&6)return Xe(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const w=T(y.anchor||y.el),P=w&&w[Lp];return P?T(P):w};let An=!1;const Rr=(y,w,P)=>{y==null?w._vnode&&ae(w._vnode,null,null,!0):U(w._vnode||null,y,w,null,null,null,P),w._vnode=y,An||(An=!0,nc(),ch(),An=!1)},bn={p:U,um:ae,m:we,r:Ar,mt:kt,mc:g,pc:dt,pbc:A,n:Xe,o:e};return{render:Rr,hydrate:void 0,createApp:im(Rr)}}function _o({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function xn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function mm(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ch(e,t,n=!1){const r=e.children,s=t.children;if(st(r)&&st(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=an(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Ch(a,l)),l.type===ki&&l.patchFlag!==-1&&(l.el=a.el),l.type===hr&&!l.el&&(l.el=a.el)}}function gm(e){const t=e.slice(),n=[0];let r,s,i,a,l;const u=e.length;for(r=0;r<u;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<f?i=l+1:a=l;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function Ph(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ph(t)}function uc(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const _m=Symbol.for("v-scx"),ym=()=>Qs(_m);function yo(e,t,n){return Vh(e,t,n)}function Vh(e,t,n=vt){const{immediate:r,deep:s,flush:i,once:a}=n,l=se({},n),u=t&&r||!t&&i!=="post";let f;if(fs){if(i==="sync"){const S=ym();f=S.__watcherHandles||(S.__watcherHandles=[])}else if(!u){const S=()=>{};return S.stop=De,S.resume=De,S.pause=De,S}}const d=re;l.call=(S,F,U)=>ke(S,d,F,U);let m=!1;i==="post"?l.scheduler=S=>{he(S,d&&d.suspense)}:i!=="sync"&&(m=!0,l.scheduler=(S,F)=>{F?S():Aa(S)}),l.augmentJob=S=>{t&&(S.flags|=4),m&&(S.flags|=2,d&&(S.id=d.uid,S.i=d))};const T=Dp(e,t,l);return fs&&(f?f.push(T):u&&T()),T}function Em(e,t,n){const r=this.proxy,s=xt(e)?e.includes(".")?Dh(r,e):()=>r[e]:e.bind(r,r);let i;ot(t)?i=t:(i=t.handler,n=t);const a=As(this),l=Vh(s,i.bind(r),n);return a(),l}function Dh(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Tm=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${mn(t)}Modifiers`]||e[`${jn(t)}Modifiers`];function vm(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||vt;let s=n;const i=t.startsWith("update:"),a=i&&Tm(r,t.slice(7));a&&(a.trim&&(s=n.map(d=>xt(d)?d.trim():d)),a.number&&(s=n.map(Qd)));let l,u=r[l=co(t)]||r[l=co(mn(t))];!u&&i&&(u=r[l=co(jn(t))]),u&&ke(u,e,6,s);const f=r[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,ke(f,e,6,s)}}const Im=new WeakMap;function xh(e,t,n=!1){const r=n?Im:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!ot(e)){const u=f=>{const d=xh(f,t,!0);d&&(l=!0,se(a,d))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!l?(bt(e)&&r.set(e,null),null):(st(i)?i.forEach(u=>a[u]=null):se(a,i),bt(e)&&r.set(e,a),a)}function Mi(e,t){return!e||!Ci(t)?!1:(t=t.slice(2).replace(/Once$/,""),mt(e,t[0].toLowerCase()+t.slice(1))||mt(e,jn(t))||mt(e,t))}function hc(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:u,render:f,renderCache:d,props:m,data:T,setupState:S,ctx:F,inheritAttrs:U}=e,B=ai(e);let W,G;try{if(n.shapeFlag&4){const H=s||r,rt=H;W=Pe(f.call(rt,H,d,m,S,T,F)),G=l}else{const H=t;W=Pe(H.length>1?H(m,{attrs:l,slots:a,emit:u}):H(m,null)),G=t.props?l:wm(l)}}catch(H){es.length=0,Ni(H,e,1),W=Ln(hr)}let $=W;if(G&&U!==!1){const H=Object.keys(G),{shapeFlag:rt}=$;H.length&&rt&7&&(i&&H.some(ha)&&(G=Am(G,i)),$=fr($,G,!1,!0))}return n.dirs&&($=fr($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&ba($,n.transition),W=$,ai(B),W}const wm=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ci(n))&&((t||(t={}))[n]=e[n]);return t},Am=(e,t)=>{const n={};for(const r in e)(!ha(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function bm(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:l,patchFlag:u}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?fc(r,a,f):!!a;if(u&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const T=d[m];if(a[T]!==r[T]&&!Mi(f,T))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?fc(r,a,f):!0:!!a;return!1}function fc(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Mi(n,i))return!0}return!1}function Rm({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Nh=e=>e.__isSuspense;function Sm(e,t){t&&t.pendingBranch?st(e)?t.effects.push(...e):t.effects.push(e):Mp(e)}const Ee=Symbol.for("v-fgt"),ki=Symbol.for("v-txt"),hr=Symbol.for("v-cmt"),Eo=Symbol.for("v-stc"),es=[];let de=null;function rn(e=!1){es.push(de=e?null:[])}function Cm(){es.pop(),de=es[es.length-1]||null}let hs=1;function dc(e,t=!1){hs+=e,e<0&&de&&t&&(de.hasOnce=!0)}function Pm(e){return e.dynamicChildren=hs>0?de||sr:null,Cm(),hs>0&&de&&de.push(e),e}function sn(e,t,n,r,s,i){return Pm(fe(e,t,n,r,s,i,!0))}function Oh(e){return e?e.__v_isVNode===!0:!1}function qr(e,t){return e.type===t.type&&e.key===t.key}const Mh=({key:e})=>e??null,Xs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?xt(e)||Zt(e)||ot(e)?{i:Ve,r:e,k:t,f:!!n}:e:null);function fe(e,t=null,n=null,r=0,s=null,i=e===Ee?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Mh(t),ref:t&&Xs(t),scopeId:hh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ve};return l?(Ca(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=xt(n)?8:16),hs>0&&!a&&de&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&de.push(u),u}const Ln=Vm;function Vm(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Yp)&&(e=hr),Oh(e)){const l=fr(e,t,!0);return n&&Ca(l,n),hs>0&&!i&&de&&(l.shapeFlag&6?de[de.indexOf(e)]=l:de.push(l)),l.patchFlag=-2,l}if($m(e)&&(e=e.__vccOpts),t){t=Dm(t);let{class:l,style:u}=t;l&&!xt(l)&&(t.class=ma(l)),bt(u)&&(wa(u)&&!st(u)&&(u=se({},u)),t.style=pa(u))}const a=xt(e)?1:Nh(e)?128:Fp(e)?64:bt(e)?4:ot(e)?2:0;return fe(e,t,n,r,s,a,i,!0)}function Dm(e){return e?wa(e)||Ih(e)?se({},e):e:null}function fr(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:u}=e,f=t?Nm(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Mh(f),ref:t&&t.ref?n&&i?st(i)?i.concat(Xs(t)):[i,Xs(t)]:Xs(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&fr(e.ssContent),ssFallback:e.ssFallback&&fr(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&ba(d,u.clone(d)),d}function xm(e=" ",t=0){return Ln(ki,null,e,t)}function Pe(e){return e==null||typeof e=="boolean"?Ln(hr):st(e)?Ln(Ee,null,e.slice()):Oh(e)?an(e):Ln(ki,null,String(e))}function an(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:fr(e)}function Ca(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(st(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Ca(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Ih(t)?t._ctx=Ve:s===3&&Ve&&(Ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ot(t)?(t={default:t,_ctx:Ve},n=32):(t=String(t),r&64?(n=16,t=[xm(t)]):n=8);e.children=t,e.shapeFlag|=n}function Nm(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ma([t.class,r.class]));else if(s==="style")t.style=pa([t.style,r.style]);else if(Ci(s)){const i=t[s],a=r[s];a&&i!==a&&!(st(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=r[s])}return t}function Re(e,t,n,r=null){ke(e,t,7,[n,r])}const Om=Eh();let Mm=0;function km(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Om,i={uid:Mm++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new np(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ah(r,s),emitsOptions:xh(r,s),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:r.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=vm.bind(null,i),e.ce&&e.ce(i),i}let re=null;const Lm=()=>re||Ve;let ui,jo;{const e=Di(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};ui=t("__VUE_INSTANCE_SETTERS__",n=>re=n),jo=t("__VUE_SSR_SETTERS__",n=>fs=n)}const As=e=>{const t=re;return ui(e),e.scope.on(),()=>{e.scope.off(),ui(t)}},pc=()=>{re&&re.scope.off(),ui(null)};function kh(e){return e.vnode.shapeFlag&4}let fs=!1;function Fm(e,t=!1,n=!1){t&&jo(t);const{props:r,children:s}=e.vnode,i=kh(e);am(e,r,i,t),hm(e,s,n||t);const a=i?Um(e,t):void 0;return t&&jo(!1),a}function Um(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Jp);const{setup:r}=n;if(r){He();const s=e.setupContext=r.length>1?jm(e):null,i=As(e),a=ws(r,e,0,[e.props,s]),l=Fu(a);if(ze(),i(),(l||e.sp)&&!Zr(e)&&fh(e),l){if(a.then(pc,pc),t)return a.then(u=>{mc(e,u)}).catch(u=>{Ni(u,e,0)});e.asyncDep=a}else mc(e,a)}else Lh(e)}function mc(e,t,n){ot(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:bt(t)&&(e.setupState=oh(t)),Lh(e)}function Lh(e,t,n){const r=e.type;e.render||(e.render=r.render||De);{const s=As(e);He();try{Zp(e)}finally{ze(),s()}}}const Bm={get(e,t){return Yt(e,"get",""),e[t]}};function jm(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Bm),slots:e.slots,emit:e.emit,expose:t}}function Pa(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(oh(wp(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ts)return ts[n](e)},has(t,n){return n in t||n in ts}})):e.proxy}function $m(e){return ot(e)&&"__vccOpts"in e}const qm=(e,t)=>Pp(e,t,fs),Hm="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $o;const gc=typeof window<"u"&&window.trustedTypes;if(gc)try{$o=gc.createPolicy("vue",{createHTML:e=>e})}catch{}const Fh=$o?e=>$o.createHTML(e):e=>e,zm="http://www.w3.org/2000/svg",Km="http://www.w3.org/1998/Math/MathML",je=typeof document<"u"?document:null,_c=je&&je.createElement("template"),Wm={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?je.createElementNS(zm,e):t==="mathml"?je.createElementNS(Km,e):n?je.createElement(e,{is:n}):je.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>je.createTextNode(e),createComment:e=>je.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>je.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{_c.innerHTML=Fh(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=_c.content;if(r==="svg"||r==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Gm=Symbol("_vtc");function Qm(e,t,n){const r=e[Gm];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const yc=Symbol("_vod"),Xm=Symbol("_vsh"),Ym=Symbol(""),Jm=/(?:^|;)\s*display\s*:/;function Zm(e,t,n){const r=e.style,s=xt(n);let i=!1;if(n&&!s){if(t)if(xt(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Ys(r,l,"")}else for(const a in t)n[a]==null&&Ys(r,a,"");for(const a in n)a==="display"&&(i=!0),Ys(r,a,n[a])}else if(s){if(t!==n){const a=r[Ym];a&&(n+=";"+a),r.cssText=n,i=Jm.test(n)}}else t&&e.removeAttribute("style");yc in e&&(e[yc]=i?r.display:"",e[Xm]&&(r.display="none"))}const Ec=/\s*!important$/;function Ys(e,t,n){if(st(n))n.forEach(r=>Ys(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=tg(e,t);Ec.test(n)?e.setProperty(jn(r),n.replace(Ec,""),"important"):e[r]=n}}const Tc=["Webkit","Moz","ms"],To={};function tg(e,t){const n=To[t];if(n)return n;let r=mn(t);if(r!=="filter"&&r in e)return To[t]=r;r=ju(r);for(let s=0;s<Tc.length;s++){const i=Tc[s]+r;if(i in e)return To[t]=i}return t}const vc="http://www.w3.org/1999/xlink";function Ic(e,t,n,r,s,i=ep(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(vc,t.slice(6,t.length)):e.setAttributeNS(vc,t,n):n==null||i&&!qu(n)?e.removeAttribute(t):e.setAttribute(t,i?"":wn(n)?String(n):n)}function wc(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Fh(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=qu(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function eg(e,t,n,r){e.addEventListener(t,n,r)}function ng(e,t,n,r){e.removeEventListener(t,n,r)}const Ac=Symbol("_vei");function rg(e,t,n,r,s=null){const i=e[Ac]||(e[Ac]={}),a=i[t];if(r&&a)a.value=r;else{const[l,u]=sg(t);if(r){const f=i[t]=ag(r,s);eg(e,l,f,u)}else a&&(ng(e,l,a,u),i[t]=void 0)}}const bc=/(?:Once|Passive|Capture)$/;function sg(e){let t;if(bc.test(e)){t={};let r;for(;r=e.match(bc);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):jn(e.slice(2)),t]}let vo=0;const ig=Promise.resolve(),og=()=>vo||(ig.then(()=>vo=0),vo=Date.now());function ag(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ke(lg(r,n.value),t,5,[r])};return n.value=e,n.attached=og(),n}function lg(e,t){if(st(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Rc=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,cg=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?Qm(e,r,a):t==="style"?Zm(e,n,r):Ci(t)?ha(t)||rg(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ug(e,t,r,a))?(wc(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ic(e,t,r,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!xt(r))?wc(e,mn(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ic(e,t,r,a))};function ug(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Rc(t)&&ot(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Rc(t)&&xt(n)?!1:t in e}const hg=se({patchProp:cg},Wm);let Sc;function fg(){return Sc||(Sc=dm(hg))}const dg=((...e)=>{const t=fg().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=mg(r);if(!s)return;const i=t._component;!ot(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,pg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t});function pg(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function mg(e){return xt(e)?document.querySelector(e):e}const Cc=[{name:"Palmyre",exclusions:["Nicole"]},{name:"Nicole",exclusions:["Palmyre"]},{name:"Laurent",exclusions:["Florence","Clara","James"]},{name:"Florence",exclusions:["Laurent","Clara","James"]},{name:"Olivier",exclusions:["Hélène","Arnaud","Andréanne"]},{name:"Hélène",exclusions:["Olivier","Arnaud","Andréanne"]},{name:"Stephan",exclusions:["Émilie","Aurélien","Colyne","Hélène","Florence"]},{name:"Émilie",exclusions:["Stephan","Aurélien","Colyne","Hélène","Florence"]},{name:"Audrey",exclusions:["Sylvain"]},{name:"Sylvain",exclusions:["Audrey"]},{name:"Clara",exclusions:["James","Laurent","Florence"]},{name:"James",exclusions:["Clara","Laurent","Florence"]},{name:"Arnaud",exclusions:["Andréanne","Olivier","Hélène"]},{name:"Andréanne",exclusions:["Arnaud","Olivier","Hélène"]},{name:"Colyne",exclusions:["Aurélien","Stephan","Émilie","Hélène","Florence"]},{name:"Aurélien",exclusions:["Colyne","Stephan","Émilie","Hélène","Florence"]}],Pc=[{name:"Eva",exclusions:[""]},{name:"Clémence",exclusions:[""]},{name:"Mylan",exclusions:["Maïko","Maddy"]},{name:"Maïko",exclusions:["Mylan","Maddy"]},{name:"Maddy",exclusions:["Mylan","Maïko"]},{name:"Mathieu",exclusions:[""]}],gg=()=>{};var Vc={};/**
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
 */const Uh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},_g=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],l=e[n++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Bh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,l=a?e[s+1]:0,u=s+2<e.length,f=u?e[s+2]:0,d=i>>2,m=(i&3)<<4|l>>4;let T=(l&15)<<2|f>>6,S=f&63;u||(S=64,a||(T=64)),r.push(n[d],n[m],n[T],n[S])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Uh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):_g(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const f=s<e.length?n[e.charAt(s)]:64;++s;const m=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||l==null||f==null||m==null)throw new yg;const T=i<<2|l>>4;if(r.push(T),f!==64){const S=l<<4&240|f>>2;if(r.push(S),m!==64){const F=f<<6&192|m;r.push(F)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class yg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Eg=function(e){const t=Uh(e);return Bh.encodeByteArray(t,!0)},hi=function(e){return Eg(e).replace(/\./g,"")},Tg=function(e){try{return Bh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function vg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ig=()=>vg().__FIREBASE_DEFAULTS__,wg=()=>{if(typeof process>"u"||typeof Vc>"u")return;const e=Vc.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ag=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Tg(e[1]);return t&&JSON.parse(t)},Va=()=>{try{return gg()||Ig()||wg()||Ag()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},bg=e=>Va()?.emulatorHosts?.[e],Rg=e=>{const t=bg(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},jh=()=>Va()?.config;/**
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
 */class Sg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Da(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cg(e){return(await fetch(e,{credentials:"include"})).ok}/**
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
 */function Pg(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[hi(JSON.stringify(n)),hi(JSON.stringify(a)),""].join(".")}const ns={};function Vg(){const e={prod:[],emulator:[]};for(const t of Object.keys(ns))ns[t]?e.emulator.push(t):e.prod.push(t);return e}function Dg(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let Dc=!1;function xg(e,t){if(typeof window>"u"||typeof document>"u"||!Da(window.location.host)||ns[e]===t||ns[e]||Dc)return;ns[e]=t;function n(T){return`__firebase__banner__${T}`}const r="__firebase__banner",i=Vg().prod.length>0;function a(){const T=document.getElementById(r);T&&T.remove()}function l(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function u(T,S){T.setAttribute("width","24"),T.setAttribute("id",S),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function f(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{Dc=!0,a()},T}function d(T,S){T.setAttribute("id",S),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function m(){const T=Dg(r),S=n("text"),F=document.getElementById(S)||document.createElement("span"),U=n("learnmore"),B=document.getElementById(U)||document.createElement("a"),W=n("preprendIcon"),G=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const $=T.element;l($),d(B,U);const H=f();u(G,W),$.append(G,F,B,H),document.body.appendChild($)}i?(F.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,F.innerText="Preview backend running in this workspace."),F.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function Ng(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Og(){const e=Va()?.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Mg(){return!Og()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kg(){try{return typeof indexedDB=="object"}catch{return!1}}function Lg(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(n){t(n)}})}/**
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
 */const Fg="FirebaseError";class Er extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Fg,Object.setPrototypeOf(this,Er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$h.prototype.create)}}class $h{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Ug(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Er(s,l,r)}}function Ug(e,t){return e.replace(Bg,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Bg=/\{\$([^}]+)}/g;function fi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(xc(i)&&xc(a)){if(!fi(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function xc(e){return e!==null&&typeof e=="object"}/**
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
 */function di(e){return e&&e._delegate?e._delegate:e}class ds{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const On="[DEFAULT]";/**
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
 */class jg{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Sg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(qg(t))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=On){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=On){return this.instances.has(t)}getOptions(t=On){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$g(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=On){return this.component?this.component.multipleInstances?t:On:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $g(e){return e===On?void 0:e}function qg(e){return e.instantiationMode==="EAGER"}/**
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
 */class Hg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new jg(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ht;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ht||(ht={}));const zg={debug:ht.DEBUG,verbose:ht.VERBOSE,info:ht.INFO,warn:ht.WARN,error:ht.ERROR,silent:ht.SILENT},Kg=ht.INFO,Wg={[ht.DEBUG]:"log",[ht.VERBOSE]:"log",[ht.INFO]:"info",[ht.WARN]:"warn",[ht.ERROR]:"error"},Gg=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Wg[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class qh{constructor(t){this.name=t,this._logLevel=Kg,this._logHandler=Gg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ht))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?zg[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ht.DEBUG,...t),this._logHandler(this,ht.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ht.VERBOSE,...t),this._logHandler(this,ht.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ht.INFO,...t),this._logHandler(this,ht.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ht.WARN,...t),this._logHandler(this,ht.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ht.ERROR,...t),this._logHandler(this,ht.ERROR,...t)}}const Qg=(e,t)=>t.some(n=>e instanceof n);let Nc,Oc;function Xg(){return Nc||(Nc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yg(){return Oc||(Oc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hh=new WeakMap,qo=new WeakMap,zh=new WeakMap,Io=new WeakMap,xa=new WeakMap;function Jg(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(hn(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Hh.set(n,e)}).catch(()=>{}),xa.set(t,e),t}function Zg(e){if(qo.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});qo.set(e,t)}let Ho={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return qo.get(e);if(t==="objectStoreNames")return e.objectStoreNames||zh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function t_(e){Ho=e(Ho)}function e_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(wo(this),t,...n);return zh.set(r,t.sort?t.sort():[t]),hn(r)}:Yg().includes(e)?function(...t){return e.apply(wo(this),t),hn(Hh.get(this))}:function(...t){return hn(e.apply(wo(this),t))}}function n_(e){return typeof e=="function"?e_(e):(e instanceof IDBTransaction&&Zg(e),Qg(e,Xg())?new Proxy(e,Ho):e)}function hn(e){if(e instanceof IDBRequest)return Jg(e);if(Io.has(e))return Io.get(e);const t=n_(e);return t!==e&&(Io.set(e,t),xa.set(t,e)),t}const wo=e=>xa.get(e);function r_(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),l=hn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(hn(a.result),u.oldVersion,u.newVersion,hn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const s_=["get","getKey","getAll","getAllKeys","count"],i_=["put","add","delete","clear"],Ao=new Map;function Mc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ao.get(t))return Ao.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=i_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||s_.includes(n)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),s&&u.done]))[0]};return Ao.set(t,i),i}t_(e=>({...e,get:(t,n,r)=>Mc(t,n)||e.get(t,n,r),has:(t,n)=>!!Mc(t,n)||e.has(t,n)}));/**
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
 */class o_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(a_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function a_(e){return e.getComponent()?.type==="VERSION"}const zo="@firebase/app",kc="0.14.5";/**
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
 */const Ke=new qh("@firebase/app"),l_="@firebase/app-compat",c_="@firebase/analytics-compat",u_="@firebase/analytics",h_="@firebase/app-check-compat",f_="@firebase/app-check",d_="@firebase/auth",p_="@firebase/auth-compat",m_="@firebase/database",g_="@firebase/data-connect",__="@firebase/database-compat",y_="@firebase/functions",E_="@firebase/functions-compat",T_="@firebase/installations",v_="@firebase/installations-compat",I_="@firebase/messaging",w_="@firebase/messaging-compat",A_="@firebase/performance",b_="@firebase/performance-compat",R_="@firebase/remote-config",S_="@firebase/remote-config-compat",C_="@firebase/storage",P_="@firebase/storage-compat",V_="@firebase/firestore",D_="@firebase/ai",x_="@firebase/firestore-compat",N_="firebase",O_="12.5.0";/**
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
 */const Ko="[DEFAULT]",M_={[zo]:"fire-core",[l_]:"fire-core-compat",[u_]:"fire-analytics",[c_]:"fire-analytics-compat",[f_]:"fire-app-check",[h_]:"fire-app-check-compat",[d_]:"fire-auth",[p_]:"fire-auth-compat",[m_]:"fire-rtdb",[g_]:"fire-data-connect",[__]:"fire-rtdb-compat",[y_]:"fire-fn",[E_]:"fire-fn-compat",[T_]:"fire-iid",[v_]:"fire-iid-compat",[I_]:"fire-fcm",[w_]:"fire-fcm-compat",[A_]:"fire-perf",[b_]:"fire-perf-compat",[R_]:"fire-rc",[S_]:"fire-rc-compat",[C_]:"fire-gcs",[P_]:"fire-gcs-compat",[V_]:"fire-fst",[x_]:"fire-fst-compat",[D_]:"fire-vertex","fire-js":"fire-js",[N_]:"fire-js-all"};/**
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
 */const pi=new Map,k_=new Map,Wo=new Map;function Lc(e,t){try{e.container.addComponent(t)}catch(n){Ke.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function mi(e){const t=e.name;if(Wo.has(t))return Ke.debug(`There were multiple attempts to register component ${t}.`),!1;Wo.set(t,e);for(const n of pi.values())Lc(n,e);for(const n of k_.values())Lc(n,e);return!0}function L_(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function F_(e){return e==null?!1:e.settings!==void 0}/**
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
 */const U_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fn=new $h("app","Firebase",U_);/**
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
 */class B_{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ds("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw fn.create("app-deleted",{appName:this._name})}}/**
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
 */const j_=O_;function Kh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:Ko,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw fn.create("bad-app-name",{appName:String(s)});if(n||(n=jh()),!n)throw fn.create("no-options");const i=pi.get(s);if(i){if(fi(n,i.options)&&fi(r,i.config))return i;throw fn.create("duplicate-app",{appName:s})}const a=new Hg(s);for(const u of Wo.values())a.addComponent(u);const l=new B_(n,r,a);return pi.set(s,l),l}function $_(e=Ko){const t=pi.get(e);if(!t&&e===Ko&&jh())return Kh();if(!t)throw fn.create("no-app",{appName:e});return t}function cr(e,t,n){let r=M_[e]??e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ke.warn(a.join(" "));return}mi(new ds(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const q_="firebase-heartbeat-database",H_=1,ps="firebase-heartbeat-store";let bo=null;function Wh(){return bo||(bo=r_(q_,H_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ps)}catch(n){console.warn(n)}}}}).catch(e=>{throw fn.create("idb-open",{originalErrorMessage:e.message})})),bo}async function z_(e){try{const n=(await Wh()).transaction(ps),r=await n.objectStore(ps).get(Gh(e));return await n.done,r}catch(t){if(t instanceof Er)Ke.warn(t.message);else{const n=fn.create("idb-get",{originalErrorMessage:t?.message});Ke.warn(n.message)}}}async function Fc(e,t){try{const r=(await Wh()).transaction(ps,"readwrite");await r.objectStore(ps).put(t,Gh(e)),await r.done}catch(n){if(n instanceof Er)Ke.warn(n.message);else{const r=fn.create("idb-set",{originalErrorMessage:n?.message});Ke.warn(r.message)}}}function Gh(e){return`${e.name}!${e.options.appId}`}/**
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
 */const K_=1024,W_=30;class G_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new X_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Uc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>W_){const s=Y_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){Ke.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Uc(),{heartbeatsToSend:n,unsentEntries:r}=Q_(this._heartbeatsCache.heartbeats),s=hi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ke.warn(t),""}}}function Uc(){return new Date().toISOString().substring(0,10)}function Q_(e,t=K_){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Bc(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class X_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kg()?Lg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await z_(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fc(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fc(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Bc(e){return hi(JSON.stringify({version:2,heartbeats:e})).length}function Y_(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function J_(e){mi(new ds("platform-logger",t=>new o_(t),"PRIVATE")),mi(new ds("heartbeat",t=>new G_(t),"PRIVATE")),cr(zo,kc,e),cr(zo,kc,"esm2020"),cr("fire-js","")}J_("");var Z_="firebase",ty="12.5.0";/**
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
 */cr(Z_,ty,"app");var jc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dn,Qh;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,g){function E(){}E.prototype=g.prototype,v.F=g.prototype,v.prototype=new E,v.prototype.constructor=v,v.D=function(A,I,b){for(var _=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)_[kt-2]=arguments[kt];return g.prototype[I].apply(A,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,g,E){E||(E=0);const A=Array(16);if(typeof g=="string")for(var I=0;I<16;++I)A[I]=g.charCodeAt(E++)|g.charCodeAt(E++)<<8|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<24;else for(I=0;I<16;++I)A[I]=g[E++]|g[E++]<<8|g[E++]<<16|g[E++]<<24;g=v.g[0],E=v.g[1],I=v.g[2];let b=v.g[3],_;_=g+(b^E&(I^b))+A[0]+3614090360&4294967295,g=E+(_<<7&4294967295|_>>>25),_=b+(I^g&(E^I))+A[1]+3905402710&4294967295,b=g+(_<<12&4294967295|_>>>20),_=I+(E^b&(g^E))+A[2]+606105819&4294967295,I=b+(_<<17&4294967295|_>>>15),_=E+(g^I&(b^g))+A[3]+3250441966&4294967295,E=I+(_<<22&4294967295|_>>>10),_=g+(b^E&(I^b))+A[4]+4118548399&4294967295,g=E+(_<<7&4294967295|_>>>25),_=b+(I^g&(E^I))+A[5]+1200080426&4294967295,b=g+(_<<12&4294967295|_>>>20),_=I+(E^b&(g^E))+A[6]+2821735955&4294967295,I=b+(_<<17&4294967295|_>>>15),_=E+(g^I&(b^g))+A[7]+4249261313&4294967295,E=I+(_<<22&4294967295|_>>>10),_=g+(b^E&(I^b))+A[8]+1770035416&4294967295,g=E+(_<<7&4294967295|_>>>25),_=b+(I^g&(E^I))+A[9]+2336552879&4294967295,b=g+(_<<12&4294967295|_>>>20),_=I+(E^b&(g^E))+A[10]+4294925233&4294967295,I=b+(_<<17&4294967295|_>>>15),_=E+(g^I&(b^g))+A[11]+2304563134&4294967295,E=I+(_<<22&4294967295|_>>>10),_=g+(b^E&(I^b))+A[12]+1804603682&4294967295,g=E+(_<<7&4294967295|_>>>25),_=b+(I^g&(E^I))+A[13]+4254626195&4294967295,b=g+(_<<12&4294967295|_>>>20),_=I+(E^b&(g^E))+A[14]+2792965006&4294967295,I=b+(_<<17&4294967295|_>>>15),_=E+(g^I&(b^g))+A[15]+1236535329&4294967295,E=I+(_<<22&4294967295|_>>>10),_=g+(I^b&(E^I))+A[1]+4129170786&4294967295,g=E+(_<<5&4294967295|_>>>27),_=b+(E^I&(g^E))+A[6]+3225465664&4294967295,b=g+(_<<9&4294967295|_>>>23),_=I+(g^E&(b^g))+A[11]+643717713&4294967295,I=b+(_<<14&4294967295|_>>>18),_=E+(b^g&(I^b))+A[0]+3921069994&4294967295,E=I+(_<<20&4294967295|_>>>12),_=g+(I^b&(E^I))+A[5]+3593408605&4294967295,g=E+(_<<5&4294967295|_>>>27),_=b+(E^I&(g^E))+A[10]+38016083&4294967295,b=g+(_<<9&4294967295|_>>>23),_=I+(g^E&(b^g))+A[15]+3634488961&4294967295,I=b+(_<<14&4294967295|_>>>18),_=E+(b^g&(I^b))+A[4]+3889429448&4294967295,E=I+(_<<20&4294967295|_>>>12),_=g+(I^b&(E^I))+A[9]+568446438&4294967295,g=E+(_<<5&4294967295|_>>>27),_=b+(E^I&(g^E))+A[14]+3275163606&4294967295,b=g+(_<<9&4294967295|_>>>23),_=I+(g^E&(b^g))+A[3]+4107603335&4294967295,I=b+(_<<14&4294967295|_>>>18),_=E+(b^g&(I^b))+A[8]+1163531501&4294967295,E=I+(_<<20&4294967295|_>>>12),_=g+(I^b&(E^I))+A[13]+2850285829&4294967295,g=E+(_<<5&4294967295|_>>>27),_=b+(E^I&(g^E))+A[2]+4243563512&4294967295,b=g+(_<<9&4294967295|_>>>23),_=I+(g^E&(b^g))+A[7]+1735328473&4294967295,I=b+(_<<14&4294967295|_>>>18),_=E+(b^g&(I^b))+A[12]+2368359562&4294967295,E=I+(_<<20&4294967295|_>>>12),_=g+(E^I^b)+A[5]+4294588738&4294967295,g=E+(_<<4&4294967295|_>>>28),_=b+(g^E^I)+A[8]+2272392833&4294967295,b=g+(_<<11&4294967295|_>>>21),_=I+(b^g^E)+A[11]+1839030562&4294967295,I=b+(_<<16&4294967295|_>>>16),_=E+(I^b^g)+A[14]+4259657740&4294967295,E=I+(_<<23&4294967295|_>>>9),_=g+(E^I^b)+A[1]+2763975236&4294967295,g=E+(_<<4&4294967295|_>>>28),_=b+(g^E^I)+A[4]+1272893353&4294967295,b=g+(_<<11&4294967295|_>>>21),_=I+(b^g^E)+A[7]+4139469664&4294967295,I=b+(_<<16&4294967295|_>>>16),_=E+(I^b^g)+A[10]+3200236656&4294967295,E=I+(_<<23&4294967295|_>>>9),_=g+(E^I^b)+A[13]+681279174&4294967295,g=E+(_<<4&4294967295|_>>>28),_=b+(g^E^I)+A[0]+3936430074&4294967295,b=g+(_<<11&4294967295|_>>>21),_=I+(b^g^E)+A[3]+3572445317&4294967295,I=b+(_<<16&4294967295|_>>>16),_=E+(I^b^g)+A[6]+76029189&4294967295,E=I+(_<<23&4294967295|_>>>9),_=g+(E^I^b)+A[9]+3654602809&4294967295,g=E+(_<<4&4294967295|_>>>28),_=b+(g^E^I)+A[12]+3873151461&4294967295,b=g+(_<<11&4294967295|_>>>21),_=I+(b^g^E)+A[15]+530742520&4294967295,I=b+(_<<16&4294967295|_>>>16),_=E+(I^b^g)+A[2]+3299628645&4294967295,E=I+(_<<23&4294967295|_>>>9),_=g+(I^(E|~b))+A[0]+4096336452&4294967295,g=E+(_<<6&4294967295|_>>>26),_=b+(E^(g|~I))+A[7]+1126891415&4294967295,b=g+(_<<10&4294967295|_>>>22),_=I+(g^(b|~E))+A[14]+2878612391&4294967295,I=b+(_<<15&4294967295|_>>>17),_=E+(b^(I|~g))+A[5]+4237533241&4294967295,E=I+(_<<21&4294967295|_>>>11),_=g+(I^(E|~b))+A[12]+1700485571&4294967295,g=E+(_<<6&4294967295|_>>>26),_=b+(E^(g|~I))+A[3]+2399980690&4294967295,b=g+(_<<10&4294967295|_>>>22),_=I+(g^(b|~E))+A[10]+4293915773&4294967295,I=b+(_<<15&4294967295|_>>>17),_=E+(b^(I|~g))+A[1]+2240044497&4294967295,E=I+(_<<21&4294967295|_>>>11),_=g+(I^(E|~b))+A[8]+1873313359&4294967295,g=E+(_<<6&4294967295|_>>>26),_=b+(E^(g|~I))+A[15]+4264355552&4294967295,b=g+(_<<10&4294967295|_>>>22),_=I+(g^(b|~E))+A[6]+2734768916&4294967295,I=b+(_<<15&4294967295|_>>>17),_=E+(b^(I|~g))+A[13]+1309151649&4294967295,E=I+(_<<21&4294967295|_>>>11),_=g+(I^(E|~b))+A[4]+4149444226&4294967295,g=E+(_<<6&4294967295|_>>>26),_=b+(E^(g|~I))+A[11]+3174756917&4294967295,b=g+(_<<10&4294967295|_>>>22),_=I+(g^(b|~E))+A[2]+718787259&4294967295,I=b+(_<<15&4294967295|_>>>17),_=E+(b^(I|~g))+A[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,v.g[2]=v.g[2]+I&4294967295,v.g[3]=v.g[3]+b&4294967295}r.prototype.v=function(v,g){g===void 0&&(g=v.length);const E=g-this.blockSize,A=this.C;let I=this.h,b=0;for(;b<g;){if(I==0)for(;b<=E;)s(this,v,b),b+=this.blockSize;if(typeof v=="string"){for(;b<g;)if(A[I++]=v.charCodeAt(b++),I==this.blockSize){s(this,A),I=0;break}}else for(;b<g;)if(A[I++]=v[b++],I==this.blockSize){s(this,A),I=0;break}}this.h=I,this.o+=g},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;g=this.o*8;for(var E=v.length-8;E<v.length;++E)v[E]=g&255,g/=256;for(this.v(v),v=Array(16),g=0,E=0;E<4;++E)for(let A=0;A<32;A+=8)v[g++]=this.g[E]>>>A&255;return v};function i(v,g){var E=l;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=g(v)}function a(v,g){this.h=g;const E=[];let A=!0;for(let I=v.length-1;I>=0;I--){const b=v[I]|0;A&&b==g||(E[I]=b,A=!1)}this.g=E}var l={};function u(v){return-128<=v&&v<128?i(v,function(g){return new a([g|0],g<0?-1:0)}):new a([v|0],v<0?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return m;if(v<0)return B(f(-v));const g=[];let E=1;for(let A=0;v>=E;A++)g[A]=v/E|0,E*=4294967296;return new a(g,0)}function d(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return B(d(v.substring(1),g));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=f(Math.pow(g,8));let A=m;for(let b=0;b<v.length;b+=8){var I=Math.min(8,v.length-b);const _=parseInt(v.substring(b,b+I),g);I<8?(I=f(Math.pow(g,I)),A=A.j(I).add(f(_))):(A=A.j(E),A=A.add(f(_)))}return A}var m=u(0),T=u(1),S=u(16777216);e=a.prototype,e.m=function(){if(U(this))return-B(this).m();let v=0,g=1;for(let E=0;E<this.g.length;E++){const A=this.i(E);v+=(A>=0?A:4294967296+A)*g,g*=4294967296}return v},e.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(F(this))return"0";if(U(this))return"-"+B(this).toString(v);const g=f(Math.pow(v,6));var E=this;let A="";for(;;){const I=H(E,g).g;E=W(E,I.j(g));let b=((E.g.length>0?E.g[0]:E.h)>>>0).toString(v);if(E=I,F(E))return b+A;for(;b.length<6;)b="0"+b;A=b+A}},e.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function F(v){if(v.h!=0)return!1;for(let g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function U(v){return v.h==-1}e.l=function(v){return v=W(this,v),U(v)?-1:F(v)?0:1};function B(v){const g=v.g.length,E=[];for(let A=0;A<g;A++)E[A]=~v.g[A];return new a(E,~v.h).add(T)}e.abs=function(){return U(this)?B(this):this},e.add=function(v){const g=Math.max(this.g.length,v.g.length),E=[];let A=0;for(let I=0;I<=g;I++){let b=A+(this.i(I)&65535)+(v.i(I)&65535),_=(b>>>16)+(this.i(I)>>>16)+(v.i(I)>>>16);A=_>>>16,b&=65535,_&=65535,E[I]=_<<16|b}return new a(E,E[E.length-1]&-2147483648?-1:0)};function W(v,g){return v.add(B(g))}e.j=function(v){if(F(this)||F(v))return m;if(U(this))return U(v)?B(this).j(B(v)):B(B(this).j(v));if(U(v))return B(this.j(B(v)));if(this.l(S)<0&&v.l(S)<0)return f(this.m()*v.m());const g=this.g.length+v.g.length,E=[];for(var A=0;A<2*g;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(let I=0;I<v.g.length;I++){const b=this.i(A)>>>16,_=this.i(A)&65535,kt=v.i(I)>>>16,Ie=v.i(I)&65535;E[2*A+2*I]+=_*Ie,G(E,2*A+2*I),E[2*A+2*I+1]+=b*Ie,G(E,2*A+2*I+1),E[2*A+2*I+1]+=_*kt,G(E,2*A+2*I+1),E[2*A+2*I+2]+=b*kt,G(E,2*A+2*I+2)}for(v=0;v<g;v++)E[v]=E[2*v+1]<<16|E[2*v];for(v=g;v<2*g;v++)E[v]=0;return new a(E,0)};function G(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function $(v,g){this.g=v,this.h=g}function H(v,g){if(F(g))throw Error("division by zero");if(F(v))return new $(m,m);if(U(v))return g=H(B(v),g),new $(B(g.g),B(g.h));if(U(g))return g=H(v,B(g)),new $(B(g.g),g.h);if(v.g.length>30){if(U(v)||U(g))throw Error("slowDivide_ only works with positive integers.");for(var E=T,A=g;A.l(v)<=0;)E=rt(E),A=rt(A);var I=_t(E,1),b=_t(A,1);for(A=_t(A,2),E=_t(E,2);!F(A);){var _=b.add(A);_.l(v)<=0&&(I=I.add(E),b=_),A=_t(A,1),E=_t(E,1)}return g=W(v,I.j(g)),new $(I,g)}for(I=m;v.l(g)>=0;){for(E=Math.max(1,Math.floor(v.m()/g.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),b=f(E),_=b.j(g);U(_)||_.l(v)>0;)E-=A,b=f(E),_=b.j(g);F(b)&&(b=T),I=I.add(b),v=W(v,_)}return new $(I,v)}e.B=function(v){return H(this,v).h},e.and=function(v){const g=Math.max(this.g.length,v.g.length),E=[];for(let A=0;A<g;A++)E[A]=this.i(A)&v.i(A);return new a(E,this.h&v.h)},e.or=function(v){const g=Math.max(this.g.length,v.g.length),E=[];for(let A=0;A<g;A++)E[A]=this.i(A)|v.i(A);return new a(E,this.h|v.h)},e.xor=function(v){const g=Math.max(this.g.length,v.g.length),E=[];for(let A=0;A<g;A++)E[A]=this.i(A)^v.i(A);return new a(E,this.h^v.h)};function rt(v){const g=v.g.length+1,E=[];for(let A=0;A<g;A++)E[A]=v.i(A)<<1|v.i(A-1)>>>31;return new a(E,v.h)}function _t(v,g){const E=g>>5;g%=32;const A=v.g.length-E,I=[];for(let b=0;b<A;b++)I[b]=g>0?v.i(b+E)>>>g|v.i(b+E+1)<<32-g:v.i(b+E);return new a(I,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Qh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,dn=a}).apply(typeof jc<"u"?jc:typeof self<"u"?self:typeof window<"u"?window:{});var Hs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xh,zr,Yh,Js,Go,Jh,Zh,tf;(function(){var e,t=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hs=="object"&&Hs];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(o,c){if(c)t:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in h))break t;h=h[R]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var h=[],p;for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&h.push([p,c[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,h){return o.call.apply(o.bind,arguments)}function f(o,c,h){return f=u,f.apply(null,arguments)}function d(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function m(o,c){function h(){}h.prototype=c.prototype,o.Z=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(p,R,C){for(var j=Array(arguments.length-2),it=2;it<arguments.length;it++)j[it-2]=arguments[it];return c.prototype[R].apply(p,j)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const c=o.length;if(c>0){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function F(o,c){for(let p=1;p<arguments.length;p++){const R=arguments[p];var h=typeof R;if(h=h!="object"?h:R?Array.isArray(R)?"array":h:"null",h=="array"||h=="object"&&typeof R.length=="number"){h=o.length||0;const C=R.length||0;o.length=h+C;for(let j=0;j<C;j++)o[h+j]=R[j]}else o.push(R)}}class U{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function B(o){a.setTimeout(()=>{throw o},0)}function W(){var o=v;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class G{constructor(){this.h=this.g=null}add(c,h){const p=$.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var $=new U(()=>new H,o=>o.reset());class H{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let rt,_t=!1,v=new G,g=()=>{const o=Promise.resolve(void 0);rt=()=>{o.then(E)}};function E(){for(var o;o=W();){try{o.h.call(o.g)}catch(h){B(h)}var c=$;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}_t=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return o})();function _(o){return/^[\s\xa0]*$/.test(o)}function kt(o,c){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}m(kt,I),kt.prototype.init=function(o,c){const h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&kt.Z.h.call(this)},kt.prototype.h=function(){kt.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ie="closure_listenable_"+(Math.random()*1e6|0),jt=0;function It(o,c,h,p,R){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=R,this.key=++jt,this.da=this.fa=!1}function dt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function pe(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function Kn(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function we(o){const c={};for(const h in o)c[h]=o[h];return c}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ar(o,c){let h,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(h in p)o[h]=p[h];for(let C=0;C<ae.length;C++)h=ae[C],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function Wn(o){this.src=o,this.g={},this.h=0}Wn.prototype.add=function(o,c,h,p,R){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const j=Ue(o,c,p,R);return j>-1?(c=o[j],h||(c.fa=!1)):(c=new It(c,this.src,C,!!p,R),c.fa=h,o.push(c)),c};function br(o,c){const h=c.type;if(h in o.g){var p=o.g[h],R=Array.prototype.indexOf.call(p,c,void 0),C;(C=R>=0)&&Array.prototype.splice.call(p,R,1),C&&(dt(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ue(o,c,h,p){for(let R=0;R<o.length;++R){const C=o[R];if(!C.da&&C.listener==c&&C.capture==!!h&&C.ha==p)return R}return-1}var Xe="closure_lm_"+(Math.random()*1e6|0),An={};function Rr(o,c,h,p,R){if(Array.isArray(c)){for(let C=0;C<c.length;C++)Rr(o,c[C],h,p,R);return null}return h=q(h),o&&o[Ie]?o.J(c,h,l(p)?!!p.capture:!1,R):bn(o,c,h,!1,p,R)}function bn(o,c,h,p,R,C){if(!c)throw Error("Invalid event type");const j=l(R)?!!R.capture:!!R;let it=D(o);if(it||(o[Xe]=it=new Wn(o)),h=it.add(c,h,p,j,C),h.proxy)return h;if(p=ul(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)b||(R=j),R===void 0&&(R=!1),o.addEventListener(c.toString(),p,R);else if(o.attachEvent)o.attachEvent(P(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ul(){function o(h){return c.call(o.src,o.listener,h)}const c=L;return o}function y(o,c,h,p,R){if(Array.isArray(c))for(var C=0;C<c.length;C++)y(o,c[C],h,p,R);else p=l(p)?!!p.capture:!!p,h=q(h),o&&o[Ie]?(o=o.i,C=String(c).toString(),C in o.g&&(c=o.g[C],h=Ue(c,h,p,R),h>-1&&(dt(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete o.g[C],o.h--)))):o&&(o=D(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ue(c,h,p,R)),(h=o>-1?c[o]:null)&&w(h))}function w(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Ie])br(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(P(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=D(c))?(br(h,o),h.h==0&&(h.src=null,c[Xe]=null)):dt(o)}}}function P(o){return o in An?An[o]:An[o]="on"+o}function L(o,c){if(o.da)o=!0;else{c=new kt(c,this);const h=o.listener,p=o.ha||o.src;o.fa&&w(o),o=h.call(p,c)}return o}function D(o){return o=o[Xe],o instanceof Wn?o:null}var x="__closure_events_fn_"+(Math.random()*1e9>>>0);function q(o){return typeof o=="function"?o:(o[x]||(o[x]=function(c){return o.handleEvent(c)}),o[x])}function k(){A.call(this),this.i=new Wn(this),this.M=this,this.G=null}m(k,A),k.prototype[Ie]=!0,k.prototype.removeEventListener=function(o,c,h,p){y(this,o,c,h,p)};function O(o,c){var h,p=o.G;if(p)for(h=[];p;p=p.G)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new I(c,o);else if(c instanceof I)c.target=c.target||o;else{var R=c;c=new I(p,o),Ar(c,R)}R=!0;let C,j;if(h)for(j=h.length-1;j>=0;j--)C=c.g=h[j],R=M(C,p,!0,c)&&R;if(C=c.g=o,R=M(C,p,!0,c)&&R,R=M(C,p,!1,c)&&R,h)for(j=0;j<h.length;j++)C=c.g=h[j],R=M(C,p,!1,c)&&R}k.prototype.N=function(){if(k.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const h=o.g[c];for(let p=0;p<h.length;p++)dt(h[p]);delete o.g[c],o.h--}}this.G=null},k.prototype.J=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},k.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function M(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let R=!0;for(let C=0;C<c.length;++C){const j=c[C];if(j&&!j.da&&j.capture==h){const it=j.listener,Nt=j.ha||j.src;j.fa&&br(o.i,j),R=it.call(Nt,p)!==!1&&R}}return R&&!p.defaultPrevented}function Y(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=f(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function z(o){o.g=Y(()=>{o.g=null,o.i&&(o.i=!1,z(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class X extends A{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:z(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Z(o){A.call(this),this.h=o,this.g={}}m(Z,A);var at=[];function yt(o){pe(o.g,function(c,h){this.g.hasOwnProperty(h)&&w(c)},o),o.g={}}Z.prototype.N=function(){Z.Z.N.call(this),yt(this)},Z.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ft=a.JSON.stringify,Wt=a.JSON.parse,Gt=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function le(){}function ce(){}var ye={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Gn(){I.call(this,"d")}m(Gn,I);function $t(){I.call(this,"c")}m($t,I);var Lt={},Sr=null;function Rn(){return Sr=Sr||new k}Lt.Ia="serverreachability";function hl(o){I.call(this,Lt.Ia,o)}m(hl,I);function Cr(o){const c=Rn();O(c,new hl(c))}Lt.STAT_EVENT="statevent";function fl(o,c){I.call(this,Lt.STAT_EVENT,o),this.stat=c}m(fl,I);function te(o){const c=Rn();O(c,new fl(c,o))}Lt.Ja="timingevent";function dl(o,c){I.call(this,Lt.Ja,o),this.size=c}m(dl,I);function Pr(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function Vr(){this.g=!0}Vr.prototype.ua=function(){this.g=!1};function wd(o,c,h,p,R,C){o.info(function(){if(o.g)if(C){var j="",it=C.split("&");for(let Et=0;Et<it.length;Et++){var Nt=it[Et].split("=");if(Nt.length>1){const Ft=Nt[0];Nt=Nt[1];const be=Ft.split("_");j=be.length>=2&&be[1]=="type"?j+(Ft+"="+Nt+"&"):j+(Ft+"=redacted&")}}}else j=null;else j=C;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+h+`
`+j})}function Ad(o,c,h,p,R,C,j){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+h+`
`+C+" "+j})}function Qn(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Rd(o,h)+(p?" "+p:"")})}function bd(o,c){o.info(function(){return"TIMEOUT: "+c})}Vr.prototype.info=function(){};function Rd(o,c){if(!o.g)return c;if(!c)return null;try{const C=JSON.parse(c);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var h=C[o];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var R=p[0];if(R!="noop"&&R!="stop"&&R!="close")for(let j=1;j<p.length;j++)p[j]=""}}}}return ft(C)}catch{return c}}var Vs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},pl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ml;function Qi(){}m(Qi,le),Qi.prototype.g=function(){return new XMLHttpRequest},ml=new Qi;function Dr(o){return encodeURIComponent(String(o))}function Sd(o){var c=1;o=o.split(":");const h=[];for(;c>0&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function Ye(o,c,h,p){this.j=o,this.i=c,this.l=h,this.S=p||1,this.V=new Z(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new gl}function gl(){this.i=null,this.g="",this.h=!1}var _l={},Xi={};function Yi(o,c,h){o.M=1,o.A=xs(Ae(c)),o.u=h,o.R=!0,yl(o,null)}function yl(o,c){o.F=Date.now(),Ds(o),o.B=Ae(o.A);var h=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Dl(h.i,"t",p),o.C=0,h=o.j.L,o.h=new gl,o.g=Ql(o.j,h?c:null,!o.u),o.P>0&&(o.O=new X(f(o.Y,o,o.g),o.P)),c=o.V,h=o.g,p=o.ba;var R="readystatechange";Array.isArray(R)||(R&&(at[0]=R.toString()),R=at);for(let C=0;C<R.length;C++){const j=Rr(h,R[C],p||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=o.J?we(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Cr(),wd(o.i,o.v,o.B,o.l,o.S,o.u)}Ye.prototype.ba=function(o){o=o.target;const c=this.O;c&&tn(o)==3?c.j():this.Y(o)},Ye.prototype.Y=function(o){try{if(o==this.g)t:{const it=tn(this.g),Nt=this.g.ya(),Et=this.g.ca();if(!(it<3)&&(it!=3||this.g&&(this.h.h||this.g.la()||Fl(this.g)))){this.K||it!=4||Nt==7||(Nt==8||Et<=0?Cr(3):Cr(2)),Ji(this);var c=this.g.ca();this.X=c;var h=Cd(this);if(this.o=c==200,Ad(this.i,this.v,this.B,this.l,this.S,it,c),this.o){if(this.U&&!this.L){e:{if(this.g){var p,R=this.g;if((p=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(p)){var C=p;break e}}C=null}if(o=C)Qn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Zi(this,o);else{this.o=!1,this.m=3,te(12),Sn(this),xr(this);break t}}if(this.R){o=!0;let Ft;for(;!this.K&&this.C<h.length;)if(Ft=Pd(this,h),Ft==Xi){it==4&&(this.m=4,te(14),o=!1),Qn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==_l){this.m=4,te(15),Qn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else Qn(this.i,this.l,Ft,null),Zi(this,Ft);if(El(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||h.length!=0||this.h.h||(this.m=1,te(16),o=!1),this.o=this.o&&o,!o)Qn(this.i,this.l,h,"[Invalid Chunked Response]"),Sn(this),xr(this);else if(h.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),ao(j),j.P=!0,te(11))}}else Qn(this.i,this.l,h,null),Zi(this,h);it==4&&Sn(this),this.o&&!this.K&&(it==4?zl(this.j,this):(this.o=!1,Ds(this)))}else qd(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,te(12)):(this.m=0,te(13)),Sn(this),xr(this)}}}catch{}finally{}};function Cd(o){if(!El(o))return o.g.la();const c=Fl(o.g);if(c==="")return"";let h="";const p=c.length,R=tn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Sn(o),xr(o),"";o.h.i=new a.TextDecoder}for(let C=0;C<p;C++)o.h.h=!0,h+=o.h.i.decode(c[C],{stream:!(R&&C==p-1)});return c.length=0,o.h.g+=h,o.C=0,o.h.g}function El(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Pd(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?Xi:(h=Number(c.substring(h,p)),isNaN(h)?_l:(p+=1,p+h>c.length?Xi:(c=c.slice(p,p+h),o.C=p+h,c)))}Ye.prototype.cancel=function(){this.K=!0,Sn(this)};function Ds(o){o.T=Date.now()+o.H,Tl(o,o.H)}function Tl(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Pr(f(o.aa,o),c)}function Ji(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Ye.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(bd(this.i,this.B),this.M!=2&&(Cr(),te(17)),Sn(this),this.m=2,xr(this)):Tl(this,this.T-o)};function xr(o){o.j.I==0||o.K||zl(o.j,o)}function Sn(o){Ji(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,yt(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function Zi(o,c){try{var h=o.j;if(h.I!=0&&(h.g==o||to(h.h,o))){if(!o.L&&to(h.h,o)&&h.I==3){try{var p=h.Ba.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){t:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Ls(h),Ms(h);else break t;oo(h),te(18)}}else h.xa=R[1],0<h.xa-h.K&&R[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Pr(f(h.Va,h),6e3));wl(h.h)<=1&&h.ta&&(h.ta=void 0)}else Pn(h,11)}else if((o.L||h.g==o)&&Ls(h),!_(c))for(R=h.Ba.g.parse(c),c=0;c<R.length;c++){let Et=R[c];const Ft=Et[0];if(!(Ft<=h.K))if(h.K=Ft,Et=Et[1],h.I==2)if(Et[0]=="c"){h.M=Et[1],h.ba=Et[2];const be=Et[3];be!=null&&(h.ka=be,h.j.info("VER="+h.ka));const Vn=Et[4];Vn!=null&&(h.za=Vn,h.j.info("SVER="+h.za));const en=Et[5];en!=null&&typeof en=="number"&&en>0&&(p=1.5*en,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const nn=o.g;if(nn){const Us=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Us){var C=p.h;C.g||Us.indexOf("spdy")==-1&&Us.indexOf("quic")==-1&&Us.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(eo(C,C.h),C.h=null))}if(p.G){const lo=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;lo&&(p.wa=lo,wt(p.J,p.G,lo))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var j=o;if(p.na=Gl(p,p.L?p.ba:null,p.W),j.L){Al(p.h,j);var it=j,Nt=p.O;Nt&&(it.H=Nt),it.D&&(Ji(it),Ds(it)),p.g=j}else ql(p);h.i.length>0&&ks(h)}else Et[0]!="stop"&&Et[0]!="close"||Pn(h,7);else h.I==3&&(Et[0]=="stop"||Et[0]=="close"?Et[0]=="stop"?Pn(h,7):io(h):Et[0]!="noop"&&h.l&&h.l.qa(Et),h.A=0)}}Cr(4)}catch{}}var Vd=class{constructor(o,c){this.g=o,this.map=c}};function vl(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Il(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function wl(o){return o.h?1:o.g?o.g.size:0}function to(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function eo(o,c){o.g?o.g.add(c):o.h=c}function Al(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}vl.prototype.cancel=function(){if(this.i=bl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function bl(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.G);return c}return S(o.i)}var Rl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dd(o,c){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const p=o[h].indexOf("=");let R,C=null;p>=0?(R=o[h].substring(0,p),C=o[h].substring(p+1)):R=o[h],c(R,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Je(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof Je?(this.l=o.l,Nr(this,o.j),this.o=o.o,this.g=o.g,Or(this,o.u),this.h=o.h,no(this,xl(o.i)),this.m=o.m):o&&(c=String(o).match(Rl))?(this.l=!1,Nr(this,c[1]||"",!0),this.o=Mr(c[2]||""),this.g=Mr(c[3]||"",!0),Or(this,c[4]),this.h=Mr(c[5]||"",!0),no(this,c[6]||"",!0),this.m=Mr(c[7]||"")):(this.l=!1,this.i=new Lr(null,this.l))}Je.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(kr(c,Sl,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(kr(c,Sl,!0),"@"),o.push(Dr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(kr(h,h.charAt(0)=="/"?Od:Nd,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",kr(h,kd)),o.join("")},Je.prototype.resolve=function(o){const c=Ae(this);let h=!!o.j;h?Nr(c,o.j):h=!!o.o,h?c.o=o.o:h=!!o.g,h?c.g=o.g:h=o.u!=null;var p=o.h;if(h)Or(c,o.u);else if(h=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var R=c.h.lastIndexOf("/");R!=-1&&(p=c.h.slice(0,R+1)+p)}if(R=p,R==".."||R==".")p="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){p=R.lastIndexOf("/",0)==0,R=R.split("/");const C=[];for(let j=0;j<R.length;){const it=R[j++];it=="."?p&&j==R.length&&C.push(""):it==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),p&&j==R.length&&C.push("")):(C.push(it),p=!0)}p=C.join("/")}else p=R}return h?c.h=p:h=o.i.toString()!=="",h?no(c,xl(o.i)):h=!!o.m,h&&(c.m=o.m),c};function Ae(o){return new Je(o)}function Nr(o,c,h){o.j=h?Mr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Or(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function no(o,c,h){c instanceof Lr?(o.i=c,Ld(o.i,o.l)):(h||(c=kr(c,Md)),o.i=new Lr(c,o.l))}function wt(o,c,h){o.i.set(c,h)}function xs(o){return wt(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Mr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function kr(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,xd),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function xd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Sl=/[#\/\?@]/g,Nd=/[#\?:]/g,Od=/[#\?]/g,Md=/[#\?@]/g,kd=/#/g;function Lr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Cn(o){o.g||(o.g=new Map,o.h=0,o.i&&Dd(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}e=Lr.prototype,e.add=function(o,c){Cn(this),this.i=null,o=Xn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Cl(o,c){Cn(o),c=Xn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Pl(o,c){return Cn(o),c=Xn(o,c),o.g.has(c)}e.forEach=function(o,c){Cn(this),this.g.forEach(function(h,p){h.forEach(function(R){o.call(c,R,p,this)},this)},this)};function Vl(o,c){Cn(o);let h=[];if(typeof c=="string")Pl(o,c)&&(h=h.concat(o.g.get(Xn(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)h=h.concat(o[c]);return h}e.set=function(o,c){return Cn(this),this.i=null,o=Xn(this,o),Pl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},e.get=function(o,c){return o?(o=Vl(this,o),o.length>0?String(o[0]):c):c};function Dl(o,c,h){Cl(o,c),h.length>0&&(o.i=null,o.g.set(Xn(o,c),S(h)),o.h+=h.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let p=0;p<c.length;p++){var h=c[p];const R=Dr(h);h=Vl(this,h);for(let C=0;C<h.length;C++){let j=R;h[C]!==""&&(j+="="+Dr(h[C])),o.push(j)}}return this.i=o.join("&")};function xl(o){const c=new Lr;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function Xn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Ld(o,c){c&&!o.j&&(Cn(o),o.i=null,o.g.forEach(function(h,p){const R=p.toLowerCase();p!=R&&(Cl(this,p),Dl(this,R,h))},o)),o.j=c}function Fd(o,c){const h=new Vr;if(a.Image){const p=new Image;p.onload=d(Ze,h,"TestLoadImage: loaded",!0,c,p),p.onerror=d(Ze,h,"TestLoadImage: error",!1,c,p),p.onabort=d(Ze,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=d(Ze,h,"TestLoadImage: timeout",!1,c,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Ud(o,c){const h=new Vr,p=new AbortController,R=setTimeout(()=>{p.abort(),Ze(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(R),C.ok?Ze(h,"TestPingServer: ok",!0,c):Ze(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Ze(h,"TestPingServer: error",!1,c)})}function Ze(o,c,h,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(h)}catch{}}function Bd(){this.g=new Gt}function ro(o){this.i=o.Sb||null,this.h=o.ab||!1}m(ro,le),ro.prototype.g=function(){return new Ns(this.i,this.h)};function Ns(o,c){k.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Ns,k),e=Ns.prototype,e.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,Ur(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Fr(this)),this.readyState=0},e.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ur(this)),this.g&&(this.readyState=3,Ur(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Nl(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Nl(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}e.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Fr(this):Ur(this),this.readyState==3&&Nl(this)}},e.Oa=function(o){this.g&&(this.response=this.responseText=o,Fr(this))},e.Na=function(o){this.g&&(this.response=o,Fr(this))},e.ga=function(){this.g&&Fr(this)};function Fr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Ur(o)}e.setRequestHeader=function(o,c){this.A.append(o,c)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Ur(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ns.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ol(o){let c="";return pe(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function so(o,c,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=Ol(h),typeof o=="string"?h!=null&&Dr(h):wt(o,c,h))}function Ct(o){k.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Ct,k);var jd=/^https?$/i,$d=["POST","PUT"];e=Ct.prototype,e.Fa=function(o){this.H=o},e.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ml.g(),this.g.onreadystatechange=T(f(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){Ml(this,C);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)h.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),R=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call($d,c,void 0)>=0)||p||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,j]of h)this.g.setRequestHeader(C,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){Ml(this,C)}};function Ml(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,kl(o),Os(o)}function kl(o){o.A||(o.A=!0,O(o,"complete"),O(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,O(this,"complete"),O(this,"abort"),Os(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Os(this,!0)),Ct.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Ll(this):this.Xa())},e.Xa=function(){Ll(this)};function Ll(o){if(o.h&&typeof i<"u"){if(o.v&&tn(o)==4)setTimeout(o.Ca.bind(o),0);else if(O(o,"readystatechange"),tn(o)==4){o.h=!1;try{const C=o.ca();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var p;if(p=C===0){let j=String(o.D).match(Rl)[1]||null;!j&&a.self&&a.self.location&&(j=a.self.location.protocol.slice(0,-1)),p=!jd.test(j?j.toLowerCase():"")}h=p}if(h)O(o,"complete"),O(o,"success");else{o.o=6;try{var R=tn(o)>2?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.ca()+"]",kl(o)}}finally{Os(o)}}}}function Os(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,c||O(o,"ready");try{h.onreadystatechange=null}catch{}}}e.isActive=function(){return!!this.g};function tn(o){return o.g?o.g.readyState:0}e.ca=function(){try{return tn(this)>2?this.g.status:-1}catch{return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Wt(c)}};function Fl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function qd(o){const c={};o=(o.g&&tn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(_(o[p]))continue;var h=Sd(o[p]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=c[R]||[];c[R]=C,C.push(h)}Kn(c,function(p){return p.join(", ")})}e.ya=function(){return this.o},e.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Br(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Ul(o){this.za=0,this.i=[],this.j=new Vr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Br("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Br("baseRetryDelayMs",5e3,o),this.Za=Br("retryDelaySeedMs",1e4,o),this.Ta=Br("forwardChannelMaxRetries",2,o),this.va=Br("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new vl(o&&o.concurrentRequestLimit),this.Ba=new Bd,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}e=Ul.prototype,e.ka=8,e.I=1,e.connect=function(o,c,h,p){te(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=Gl(this,null,this.W),ks(this)};function io(o){if(Bl(o),o.I==3){var c=o.V++,h=Ae(o.J);if(wt(h,"SID",o.M),wt(h,"RID",c),wt(h,"TYPE","terminate"),jr(o,h),c=new Ye(o,o.j,c),c.M=2,c.A=xs(Ae(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=Ql(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Ds(c)}Wl(o)}function Ms(o){o.g&&(ao(o),o.g.cancel(),o.g=null)}function Bl(o){Ms(o),o.v&&(a.clearTimeout(o.v),o.v=null),Ls(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function ks(o){if(!Il(o.h)&&!o.m){o.m=!0;var c=o.Ea;rt||g(),_t||(rt(),_t=!0),v.add(c,o),o.D=0}}function Hd(o,c){return wl(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Pr(f(o.Ea,o,c),Kl(o,o.D)),o.D++,!0)}e.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const R=new Ye(this,this.j,o);let C=this.o;if(this.U&&(C?(C=we(C),Ar(C,this.U)):C=this.U),this.u!==null||this.R||(R.J=C,C=null),this.S)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(c+=p,c>4096){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=$l(this,R,c),h=Ae(this.J),wt(h,"RID",o),wt(h,"CVER",22),this.G&&wt(h,"X-HTTP-Session-Id",this.G),jr(this,h),C&&(this.R?c="headers="+Dr(Ol(C))+"&"+c:this.u&&so(h,this.u,C)),eo(this.h,R),this.Ra&&wt(h,"TYPE","init"),this.S?(wt(h,"$req",c),wt(h,"SID","null"),R.U=!0,Yi(R,h,null)):Yi(R,h,c),this.I=2}}else this.I==3&&(o?jl(this,o):this.i.length==0||Il(this.h)||jl(this))};function jl(o,c){var h;c?h=c.l:h=o.V++;const p=Ae(o.J);wt(p,"SID",o.M),wt(p,"RID",h),wt(p,"AID",o.K),jr(o,p),o.u&&o.o&&so(p,o.u,o.o),h=new Ye(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),c&&(o.i=c.G.concat(o.i)),c=$l(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),eo(o.h,h),Yi(h,p,c)}function jr(o,c){o.H&&pe(o.H,function(h,p){wt(c,p,h)}),o.l&&pe({},function(h,p){wt(c,p,h)})}function $l(o,c,h){h=Math.min(o.i.length,h);const p=o.l?f(o.l.Ka,o.l,o):null;t:{var R=o.i;let it=-1;for(;;){const Nt=["count="+h];it==-1?h>0?(it=R[0].g,Nt.push("ofs="+it)):it=0:Nt.push("ofs="+it);let Et=!0;for(let Ft=0;Ft<h;Ft++){var C=R[Ft].g;const be=R[Ft].map;if(C-=it,C<0)it=Math.max(0,R[Ft].g-100),Et=!1;else try{C="req"+C+"_"||"";try{var j=be instanceof Map?be:Object.entries(be);for(const[Vn,en]of j){let nn=en;l(en)&&(nn=ft(en)),Nt.push(C+Vn+"="+encodeURIComponent(nn))}}catch(Vn){throw Nt.push(C+"type="+encodeURIComponent("_badmap")),Vn}}catch{p&&p(be)}}if(Et){j=Nt.join("&");break t}}j=void 0}return o=o.i.splice(0,h),c.G=o,j}function ql(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;rt||g(),_t||(rt(),_t=!0),v.add(c,o),o.A=0}}function oo(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Pr(f(o.Da,o),Kl(o,o.A)),o.A++,!0)}e.Da=function(){if(this.v=null,Hl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Pr(f(this.Wa,this),o)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,te(10),Ms(this),Hl(this))};function ao(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Hl(o){o.g=new Ye(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=Ae(o.na);wt(c,"RID","rpc"),wt(c,"SID",o.M),wt(c,"AID",o.K),wt(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&wt(c,"TO",o.ia),wt(c,"TYPE","xmlhttp"),jr(o,c),o.u&&o.o&&so(c,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=xs(Ae(c)),h.u=null,h.R=!0,yl(h,o)}e.Va=function(){this.C!=null&&(this.C=null,Ms(this),oo(this),te(19))};function Ls(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function zl(o,c){var h=null;if(o.g==c){Ls(o),ao(o),o.g=null;var p=2}else if(to(o.h,c))h=c.G,Al(o.h,c),p=1;else return;if(o.I!=0){if(c.o)if(p==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var R=o.D;p=Rn(),O(p,new dl(p,h)),ks(o)}else ql(o);else if(R=c.m,R==3||R==0&&c.X>0||!(p==1&&Hd(o,c)||p==2&&oo(o)))switch(h&&h.length>0&&(c=o.h,c.i=c.i.concat(h)),R){case 1:Pn(o,5);break;case 4:Pn(o,10);break;case 3:Pn(o,6);break;default:Pn(o,2)}}}function Kl(o,c){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*c}function Pn(o,c){if(o.j.info("Error code "+c),c==2){var h=f(o.bb,o),p=o.Ua;const R=!p;p=new Je(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Nr(p,"https"),xs(p),R?Fd(p.toString(),h):Ud(p.toString(),h)}else te(2);o.I=0,o.l&&o.l.pa(c),Wl(o),Bl(o)}e.bb=function(o){o?(this.j.info("Successfully pinged google.com"),te(2)):(this.j.info("Failed to ping google.com"),te(1))};function Wl(o){if(o.I=0,o.ja=[],o.l){const c=bl(o.h);(c.length!=0||o.i.length!=0)&&(F(o.ja,c),F(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function Gl(o,c,h){var p=h instanceof Je?Ae(h):new Je(h);if(p.g!="")c&&(p.g=c+"."+p.g),Or(p,p.u);else{var R=a.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;const C=new Je(null);p&&Nr(C,p),c&&(C.g=c),R&&Or(C,R),h&&(C.h=h),p=C}return h=o.G,c=o.wa,h&&c&&wt(p,h,c),wt(p,"VER",o.ka),jr(o,p),p}function Ql(o,c,h){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new Ct(new ro({ab:h})):new Ct(o.ma),c.Fa(o.L),c}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xl(){}e=Xl.prototype,e.ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){};function Fs(){}Fs.prototype.g=function(o,c){return new ue(o,c)};function ue(o,c){k.call(this),this.g=new Ul(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!_(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Yn(this)}m(ue,k),ue.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ue.prototype.close=function(){io(this.g)},ue.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=ft(o),o=h);c.i.push(new Vd(c.Ya++,o)),c.I==3&&ks(c)},ue.prototype.N=function(){this.g.l=null,delete this.j,io(this.g),delete this.g,ue.Z.N.call(this)};function Yl(o){Gn.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}m(Yl,Gn);function Jl(){$t.call(this),this.status=1}m(Jl,$t);function Yn(o){this.g=o}m(Yn,Xl),Yn.prototype.ra=function(){O(this.g,"a")},Yn.prototype.qa=function(o){O(this.g,new Yl(o))},Yn.prototype.pa=function(o){O(this.g,new Jl)},Yn.prototype.oa=function(){O(this.g,"b")},Fs.prototype.createWebChannel=Fs.prototype.g,ue.prototype.send=ue.prototype.o,ue.prototype.open=ue.prototype.m,ue.prototype.close=ue.prototype.close,tf=function(){return new Fs},Zh=function(){return Rn()},Jh=Lt,Go={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Vs.NO_ERROR=0,Vs.TIMEOUT=8,Vs.HTTP_ERROR=6,Js=Vs,pl.COMPLETE="complete",Yh=pl,ce.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",k.prototype.listen=k.prototype.J,zr=ce,Ct.prototype.listenOnce=Ct.prototype.K,Ct.prototype.getLastError=Ct.prototype.Ha,Ct.prototype.getLastErrorCode=Ct.prototype.ya,Ct.prototype.getStatus=Ct.prototype.ca,Ct.prototype.getResponseJson=Ct.prototype.La,Ct.prototype.getResponseText=Ct.prototype.la,Ct.prototype.send=Ct.prototype.ea,Ct.prototype.setWithCredentials=Ct.prototype.Fa,Xh=Ct}).apply(typeof Hs<"u"?Hs:typeof self<"u"?self:typeof window<"u"?window:{});const $c="@firebase/firestore",qc="4.9.2";/**
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
 */class Xt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
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
 */let Tr="12.3.0";/**
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
 */const Un=new qh("@firebase/firestore");function tr(){return Un.logLevel}function K(e,...t){if(Un.logLevel<=ht.DEBUG){const n=t.map(Na);Un.debug(`Firestore (${Tr}): ${e}`,...n)}}function We(e,...t){if(Un.logLevel<=ht.ERROR){const n=t.map(Na);Un.error(`Firestore (${Tr}): ${e}`,...n)}}function dr(e,...t){if(Un.logLevel<=ht.WARN){const n=t.map(Na);Un.warn(`Firestore (${Tr}): ${e}`,...n)}}function Na(e){if(typeof e=="string")return e;try{/**
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
*/return(function(n){return JSON.stringify(n)})(e)}catch{return e}}/**
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
 */function tt(e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,ef(e,r,n)}function ef(e,t,n){let r=`FIRESTORE (${Tr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw We(r),new Error(r)}function gt(e,t,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,e||ef(t,s,r)}function nt(e,t){return e}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Er{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pn{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}/**
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
 */class nf{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ey{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n(Xt.UNAUTHENTICATED)))}shutdown(){}}class ny{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class ry{constructor(t){this.t=t,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){gt(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new pn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pn,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;t.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},l=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pn)}}),0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==t?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(gt(typeof r.accessToken=="string",31837,{l:r}),new nf(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return gt(t===null||typeof t=="string",2055,{h:t}),new Xt(t)}}class sy{constructor(t,n,r){this.P=t,this.T=n,this.I=r,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class iy{constructor(t,n,r){this.P=t,this.T=n,this.I=r}getToken(){return Promise.resolve(new sy(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable((()=>n(Xt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Hc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oy{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,F_(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){gt(this.o===void 0,3512);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,K("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable((()=>r(i)))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Hc(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((n=>n?(gt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Hc(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ay(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Oa{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ay(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%62))}return r}}function lt(e,t){return e<t?-1:e>t?1:0}function Qo(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const s=e.charAt(r),i=t.charAt(r);if(s!==i)return Ro(s)===Ro(i)?lt(s,i):Ro(s)?1:-1}return lt(e.length,t.length)}const ly=55296,cy=57343;function Ro(e){const t=e.charCodeAt(0);return t>=ly&&t<=cy}function pr(e,t,n){return e.length===t.length&&e.every(((r,s)=>n(r,t[s])))}/**
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
 */const zc="__name__";class Ce{constructor(t,n,r){n===void 0?n=0:n>t.length&&tt(637,{offset:n,range:t.length}),r===void 0?r=t.length-n:r>t.length-n&&tt(1746,{length:r,range:t.length-n}),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ce.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ce?t.forEach((r=>{n.push(r)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=Ce.compareSegments(t.get(s),n.get(s));if(i!==0)return i}return lt(t.length,n.length)}static compareSegments(t,n){const r=Ce.isNumericId(t),s=Ce.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Ce.extractNumericId(t).compare(Ce.extractNumericId(n)):Qo(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return dn.fromString(t.substring(4,t.length-2))}}class Rt extends Ce{construct(t,n,r){return new Rt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new Q(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Rt(n)}static emptyPath(){return new Rt([])}}const uy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class zt extends Ce{construct(t,n,r){return new zt(t,n,r)}static isValidIdentifier(t){return uy.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),zt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zc}static keyField(){return new zt([zc])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(N.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new Q(N.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Q(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new Q(N.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new zt(n)}static emptyPath(){return new zt([])}}/**
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
 */class J{constructor(t){this.path=t}static fromPath(t){return new J(Rt.fromString(t))}static fromName(t){return new J(Rt.fromString(t).popFirst(5))}static empty(){return new J(Rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Rt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Rt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new J(new Rt(t.slice()))}}/**
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
 */function hy(e,t,n){if(!n)throw new Q(N.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function fy(e,t,n,r){if(t===!0&&r===!0)throw new Q(N.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Kc(e){if(!J.isDocumentKey(e))throw new Q(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function rf(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function Ma(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":tt(12329,{type:typeof e})}function ms(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Q(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ma(e);throw new Q(N.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */function Dt(e,t){const n={typeString:e};return t&&(n.value=t),n}function bs(e,t){if(!rf(e))throw new Q(N.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const a=e[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Q(N.INVALID_ARGUMENT,n);return!0}/**
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
 */const Wc=-62135596800,Gc=1e6;class At{static now(){return At.fromMillis(Date.now())}static fromDate(t){return At.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*Gc);return new At(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new Q(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Wc)throw new Q(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Q(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gc}_compareTo(t){return this.seconds===t.seconds?lt(this.nanoseconds,t.nanoseconds):lt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:At._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(bs(t,At._jsonSchema))return new At(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Wc;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}At._jsonSchemaVersion="firestore/timestamp/1.0",At._jsonSchema={type:Dt("string",At._jsonSchemaVersion),seconds:Dt("number"),nanoseconds:Dt("number")};/**
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
 */class et{static fromTimestamp(t){return new et(t)}static min(){return new et(new At(0,0))}static max(){return new et(new At(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const gs=-1;function dy(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=et.fromTimestamp(r===1e9?new At(n+1,0):new At(n,r));return new _n(s,J.empty(),t)}function py(e){return new _n(e.readTime,e.key,gs)}class _n{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new _n(et.min(),J.empty(),gs)}static max(){return new _n(et.max(),J.empty(),gs)}}function my(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=J.comparator(e.documentKey,t.documentKey),n!==0?n:lt(e.largestBatchId,t.largestBatchId))}/**
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
 */const gy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _y{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function vr(e){if(e.code!==N.FAILED_PRECONDITION||e.message!==gy)throw e;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&tt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new V(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):V.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):V.reject(n)}static resolve(t){return new V(((n,r)=>{n(t)}))}static reject(t){return new V(((n,r)=>{r(t)}))}static waitFor(t){return new V(((n,r)=>{let s=0,i=0,a=!1;t.forEach((l=>{++s,l.next((()=>{++i,a&&i===s&&n()}),(u=>r(u)))})),a=!0,i===s&&n()}))}static or(t){let n=V.resolve(!1);for(const r of t)n=n.next((s=>s?V.resolve(s):r()));return n}static forEach(t,n){const r=[];return t.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(t,n){return new V(((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const f=u;n(t[f]).next((d=>{a[f]=d,++l,l===i&&r(a)}),(d=>s(d)))}}))}static doWhile(t,n){return new V(((r,s)=>{const i=()=>{t()===!0?n().next((()=>{i()}),s):r()};i()}))}}function yy(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ir(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Li{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Li.ce=-1;/**
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
 */const ka=-1;function Fi(e){return e==null}function gi(e){return e===0&&1/e==-1/0}function Ey(e){return typeof e=="number"&&Number.isInteger(e)&&!gi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const sf="";function Ty(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Qc(t)),t=vy(e.get(n),t);return Qc(t)}function vy(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const i=e.charAt(s);switch(i){case"\0":n+="";break;case sf:n+="";break;default:n+=i}}return n}function Qc(e){return e+sf+""}/**
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
 */function Xc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function $n(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function of(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class St{constructor(t,n){this.comparator=t,this.root=n||qt.EMPTY}insert(t,n){return new St(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,qt.BLACK,null,null))}remove(t){return new St(this.comparator,this.root.remove(t,this.comparator).copy(null,null,qt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,r)=>(t(n,r),!1)))}toString(){const t=[];return this.inorderTraversal(((n,r)=>(t.push(`${n}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new zs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new zs(this.root,t,this.comparator,!1)}getReverseIterator(){return new zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new zs(this.root,t,this.comparator,!0)}}class zs{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class qt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??qt.RED,this.left=s??qt.EMPTY,this.right=i??qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new qt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return qt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return qt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw tt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw tt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw tt(27949);return t+(this.isRed()?0:1)}}qt.EMPTY=null,qt.RED=!0,qt.BLACK=!1;qt.EMPTY=new class{constructor(){this.size=0}get key(){throw tt(57766)}get value(){throw tt(16141)}get color(){throw tt(16727)}get left(){throw tt(29726)}get right(){throw tt(36894)}copy(t,n,r,s,i){return this}insert(t,n,r){return new qt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Mt{constructor(t){this.comparator=t,this.data=new St(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((n,r)=>(t(n),!1)))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yc(this.data.getIterator())}getIteratorFrom(t){return new Yc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((r=>{n=n.add(r)})),n}isEqual(t){if(!(t instanceof Mt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new Mt(this.comparator);return n.data=t,n}}class Yc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Te{constructor(t){this.fields=t,t.sort(zt.comparator)}static empty(){return new Te([])}unionWith(t){let n=new Mt(zt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Te(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return pr(this.fields,t.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class af extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Kt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new af("Invalid base64 string: "+i):i}})(t);return new Kt(n)}static fromUint8Array(t){const n=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(t);return new Kt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return lt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const Iy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yn(e){if(gt(!!e,39018),typeof e=="string"){let t=0;const n=Iy.exec(e);if(gt(!!n,46558,{timestamp:e}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Pt(e.seconds),nanos:Pt(e.nanos)}}function Pt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function En(e){return typeof e=="string"?Kt.fromBase64String(e):Kt.fromUint8Array(e)}/**
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
 */const lf="server_timestamp",cf="__type__",uf="__previous_value__",hf="__local_write_time__";function La(e){return(e?.mapValue?.fields||{})[cf]?.stringValue===lf}function Ui(e){const t=e.mapValue.fields[uf];return La(t)?Ui(t):t}function _s(e){const t=yn(e.mapValue.fields[hf].timestampValue);return new At(t.seconds,t.nanos)}/**
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
 */class wy{constructor(t,n,r,s,i,a,l,u,f,d){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=f,this.isUsingEmulator=d}}const _i="(default)";class ys{constructor(t,n){this.projectId=t,this.database=n||_i}static empty(){return new ys("","")}get isDefaultDatabase(){return this.database===_i}isEqual(t){return t instanceof ys&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ff="__type__",Ay="__max__",Ks={mapValue:{}},df="__vector__",yi="value";function Tn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?La(e)?4:Ry(e)?9007199254740991:by(e)?10:11:tt(28295,{value:e})}function Le(e,t){if(e===t)return!0;const n=Tn(e);if(n!==Tn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return _s(e).isEqual(_s(t));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=yn(s.timestampValue),l=yn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(e,t);case 5:return e.stringValue===t.stringValue;case 6:return(function(s,i){return En(s.bytesValue).isEqual(En(i.bytesValue))})(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return(function(s,i){return Pt(s.geoPointValue.latitude)===Pt(i.geoPointValue.latitude)&&Pt(s.geoPointValue.longitude)===Pt(i.geoPointValue.longitude)})(e,t);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Pt(s.integerValue)===Pt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Pt(s.doubleValue),l=Pt(i.doubleValue);return a===l?gi(a)===gi(l):isNaN(a)&&isNaN(l)}return!1})(e,t);case 9:return pr(e.arrayValue.values||[],t.arrayValue.values||[],Le);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Xc(a)!==Xc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Le(a[u],l[u])))return!1;return!0})(e,t);default:return tt(52216,{left:e})}}function Es(e,t){return(e.values||[]).find((n=>Le(n,t)))!==void 0}function mr(e,t){if(e===t)return 0;const n=Tn(e),r=Tn(t);if(n!==r)return lt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return lt(e.booleanValue,t.booleanValue);case 2:return(function(i,a){const l=Pt(i.integerValue||i.doubleValue),u=Pt(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1})(e,t);case 3:return Jc(e.timestampValue,t.timestampValue);case 4:return Jc(_s(e),_s(t));case 5:return Qo(e.stringValue,t.stringValue);case 6:return(function(i,a){const l=En(i),u=En(a);return l.compareTo(u)})(e.bytesValue,t.bytesValue);case 7:return(function(i,a){const l=i.split("/"),u=a.split("/");for(let f=0;f<l.length&&f<u.length;f++){const d=lt(l[f],u[f]);if(d!==0)return d}return lt(l.length,u.length)})(e.referenceValue,t.referenceValue);case 8:return(function(i,a){const l=lt(Pt(i.latitude),Pt(a.latitude));return l!==0?l:lt(Pt(i.longitude),Pt(a.longitude))})(e.geoPointValue,t.geoPointValue);case 9:return Zc(e.arrayValue,t.arrayValue);case 10:return(function(i,a){const l=i.fields||{},u=a.fields||{},f=l[yi]?.arrayValue,d=u[yi]?.arrayValue,m=lt(f?.values?.length||0,d?.values?.length||0);return m!==0?m:Zc(f,d)})(e.mapValue,t.mapValue);case 11:return(function(i,a){if(i===Ks.mapValue&&a===Ks.mapValue)return 0;if(i===Ks.mapValue)return 1;if(a===Ks.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),f=a.fields||{},d=Object.keys(f);u.sort(),d.sort();for(let m=0;m<u.length&&m<d.length;++m){const T=Qo(u[m],d[m]);if(T!==0)return T;const S=mr(l[u[m]],f[d[m]]);if(S!==0)return S}return lt(u.length,d.length)})(e.mapValue,t.mapValue);default:throw tt(23264,{he:n})}}function Jc(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return lt(e,t);const n=yn(e),r=yn(t),s=lt(n.seconds,r.seconds);return s!==0?s:lt(n.nanos,r.nanos)}function Zc(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=mr(n[s],r[s]);if(i)return i}return lt(n.length,r.length)}function gr(e){return Xo(e)}function Xo(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?(function(n){const r=yn(n);return`time(${r.seconds},${r.nanos})`})(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?(function(n){return En(n).toBase64()})(e.bytesValue):"referenceValue"in e?(function(n){return J.fromName(n).toString()})(e.referenceValue):"geoPointValue"in e?(function(n){return`geo(${n.latitude},${n.longitude})`})(e.geoPointValue):"arrayValue"in e?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Xo(i);return r+"]"})(e.arrayValue):"mapValue"in e?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Xo(n.fields[a])}`;return s+"}"})(e.mapValue):tt(61005,{value:e})}function Zs(e){switch(Tn(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ui(e);return t?16+Zs(t):16;case 5:return 2*e.stringValue.length;case 6:return En(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Zs(i)),0)})(e.arrayValue);case 10:case 11:return(function(r){let s=0;return $n(r.fields,((i,a)=>{s+=i.length+Zs(a)})),s})(e.mapValue);default:throw tt(13486,{value:e})}}function Yo(e){return!!e&&"integerValue"in e}function Fa(e){return!!e&&"arrayValue"in e}function tu(e){return!!e&&"nullValue"in e}function eu(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ti(e){return!!e&&"mapValue"in e}function by(e){return(e?.mapValue?.fields||{})[ff]?.stringValue===df}function rs(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return $n(e.mapValue.fields,((n,r)=>t.mapValue.fields[n]=rs(r))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=rs(e.arrayValue.values[n]);return t}return{...e}}function Ry(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Ay}/**
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
 */class me{constructor(t){this.value=t}static empty(){return new me({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!ti(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=rs(n)}setAll(t){let n=zt.emptyPath(),r={},s=[];t.forEach(((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=rs(a):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());ti(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Le(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];ti(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){$n(n,((s,i)=>t[s]=i));for(const s of r)delete t[s]}clone(){return new me(rs(this.value))}}function pf(e){const t=[];return $n(e.fields,((n,r)=>{const s=new zt([n]);if(ti(r)){const i=pf(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)})),new Te(t)}/**
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
 */class Jt{constructor(t,n,r,s,i,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Jt(t,0,et.min(),et.min(),et.min(),me.empty(),0)}static newFoundDocument(t,n,r,s){return new Jt(t,1,n,et.min(),r,s,0)}static newNoDocument(t,n){return new Jt(t,2,n,et.min(),et.min(),me.empty(),0)}static newUnknownDocument(t,n){return new Jt(t,3,n,et.min(),et.min(),me.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(et.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=me.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=et.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Jt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ei{constructor(t,n){this.position=t,this.inclusive=n}}function nu(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(a.referenceValue),n.key):r=mr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ru(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Le(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Ti{constructor(t,n="asc"){this.field=t,this.dir=n}}function Sy(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class mf{}class Ot extends mf{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Py(t,n,r):n==="array-contains"?new xy(t,r):n==="in"?new Ny(t,r):n==="not-in"?new Oy(t,r):n==="array-contains-any"?new My(t,r):new Ot(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Vy(t,r):new Dy(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(mr(n,this.value)):n!==null&&Tn(this.value)===Tn(n)&&this.matchesComparison(mr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return tt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fe extends mf{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new Fe(t,n)}matches(t){return gf(this)?this.filters.find((n=>!n.matches(t)))===void 0:this.filters.find((n=>n.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,n)=>t.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function gf(e){return e.op==="and"}function _f(e){return Cy(e)&&gf(e)}function Cy(e){for(const t of e.filters)if(t instanceof Fe)return!1;return!0}function Jo(e){if(e instanceof Ot)return e.field.canonicalString()+e.op.toString()+gr(e.value);if(_f(e))return e.filters.map((t=>Jo(t))).join(",");{const t=e.filters.map((n=>Jo(n))).join(",");return`${e.op}(${t})`}}function yf(e,t){return e instanceof Ot?(function(r,s){return s instanceof Ot&&r.op===s.op&&r.field.isEqual(s.field)&&Le(r.value,s.value)})(e,t):e instanceof Fe?(function(r,s){return s instanceof Fe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,l)=>i&&yf(a,s.filters[l])),!0):!1})(e,t):void tt(19439)}function Ef(e){return e instanceof Ot?(function(n){return`${n.field.canonicalString()} ${n.op} ${gr(n.value)}`})(e):e instanceof Fe?(function(n){return n.op.toString()+" {"+n.getFilters().map(Ef).join(" ,")+"}"})(e):"Filter"}class Py extends Ot{constructor(t,n,r){super(t,n,r),this.key=J.fromName(r.referenceValue)}matches(t){const n=J.comparator(t.key,this.key);return this.matchesComparison(n)}}class Vy extends Ot{constructor(t,n){super(t,"in",n),this.keys=Tf("in",n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class Dy extends Ot{constructor(t,n){super(t,"not-in",n),this.keys=Tf("not-in",n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function Tf(e,t){return(t.arrayValue?.values||[]).map((n=>J.fromName(n.referenceValue)))}class xy extends Ot{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Fa(n)&&Es(n.arrayValue,this.value)}}class Ny extends Ot{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Es(this.value.arrayValue,n)}}class Oy extends Ot{constructor(t,n){super(t,"not-in",n)}matches(t){if(Es(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Es(this.value.arrayValue,n)}}class My extends Ot{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Fa(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Es(this.value.arrayValue,r)))}}/**
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
 */class ky{constructor(t,n=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function su(e,t=null,n=[],r=[],s=null,i=null,a=null){return new ky(e,t,n,r,s,i,a)}function Ua(e){const t=nt(e);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((r=>Jo(r))).join(","),n+="|ob:",n+=t.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Fi(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((r=>gr(r))).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((r=>gr(r))).join(",")),t.Te=n}return t.Te}function Ba(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Sy(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!yf(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ru(e.startAt,t.startAt)&&ru(e.endAt,t.endAt)}function Zo(e){return J.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Bi{constructor(t,n=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Ly(e,t,n,r,s,i,a,l){return new Bi(e,t,n,r,s,i,a,l)}function ja(e){return new Bi(e)}function iu(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Fy(e){return e.collectionGroup!==null}function ss(e){const t=nt(e);if(t.Ie===null){t.Ie=[];const n=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Mt(zt.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((f=>{f.isInequality()&&(l=l.add(f.field))}))})),l})(t).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new Ti(i,r))})),n.has(zt.keyField().canonicalString())||t.Ie.push(new Ti(zt.keyField(),r))}return t.Ie}function xe(e){const t=nt(e);return t.Ee||(t.Ee=Uy(t,ss(e))),t.Ee}function Uy(e,t){if(e.limitType==="F")return su(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ti(s.field,i)}));const n=e.endAt?new Ei(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ei(e.startAt.position,e.startAt.inclusive):null;return su(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function ta(e,t,n){return new Bi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ji(e,t){return Ba(xe(e),xe(t))&&e.limitType===t.limitType}function vf(e){return`${Ua(xe(e))}|lt:${e.limitType}`}function er(e){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Ef(s))).join(", ")}]`),Fi(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>gr(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>gr(s))).join(",")),`Target(${r})`})(xe(e))}; limitType=${e.limitType})`}function $i(e,t){return t.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(e,t)&&(function(r,s){for(const i of ss(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(e,t)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(e,t)&&(function(r,s){return!(r.startAt&&!(function(a,l,u){const f=nu(a,l,u);return a.inclusive?f<=0:f<0})(r.startAt,ss(r),s)||r.endAt&&!(function(a,l,u){const f=nu(a,l,u);return a.inclusive?f>=0:f>0})(r.endAt,ss(r),s))})(e,t)}function By(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function If(e){return(t,n)=>{let r=!1;for(const s of ss(e)){const i=jy(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function jy(e,t,n){const r=e.field.isKeyField()?J.comparator(t.key,n.key):(function(i,a,l){const u=a.data.field(i),f=l.data.field(i);return u!==null&&f!==null?mr(u,f):tt(42886)})(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return tt(19790,{direction:e.dir})}}/**
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
 */class qn{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){$n(this.inner,((n,r)=>{for(const[s,i]of r)t(s,i)}))}isEmpty(){return of(this.inner)}size(){return this.innerSize}}/**
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
 */const $y=new St(J.comparator);function Ge(){return $y}const wf=new St(J.comparator);function Kr(...e){let t=wf;for(const n of e)t=t.insert(n.key,n);return t}function Af(e){let t=wf;return e.forEach(((n,r)=>t=t.insert(n,r.overlayedDocument))),t}function Mn(){return is()}function bf(){return is()}function is(){return new qn((e=>e.toString()),((e,t)=>e.isEqual(t)))}const qy=new St(J.comparator),Hy=new Mt(J.comparator);function ct(...e){let t=Hy;for(const n of e)t=t.add(n);return t}const zy=new Mt(lt);function Ky(){return zy}/**
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
 */function $a(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gi(t)?"-0":t}}function Rf(e){return{integerValue:""+e}}function Wy(e,t){return Ey(t)?Rf(t):$a(e,t)}/**
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
 */class qi{constructor(){this._=void 0}}function Gy(e,t,n){return e instanceof vi?(function(s,i){const a={fields:{[cf]:{stringValue:lf},[hf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&La(i)&&(i=Ui(i)),i&&(a.fields[uf]=i),{mapValue:a}})(n,t):e instanceof Ts?Cf(e,t):e instanceof vs?Pf(e,t):(function(s,i){const a=Sf(s,i),l=ou(a)+ou(s.Ae);return Yo(a)&&Yo(s.Ae)?Rf(l):$a(s.serializer,l)})(e,t)}function Qy(e,t,n){return e instanceof Ts?Cf(e,t):e instanceof vs?Pf(e,t):n}function Sf(e,t){return e instanceof Ii?(function(r){return Yo(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(t)?t:{integerValue:0}:null}class vi extends qi{}class Ts extends qi{constructor(t){super(),this.elements=t}}function Cf(e,t){const n=Vf(t);for(const r of e.elements)n.some((s=>Le(s,r)))||n.push(r);return{arrayValue:{values:n}}}class vs extends qi{constructor(t){super(),this.elements=t}}function Pf(e,t){let n=Vf(t);for(const r of e.elements)n=n.filter((s=>!Le(s,r)));return{arrayValue:{values:n}}}class Ii extends qi{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function ou(e){return Pt(e.integerValue||e.doubleValue)}function Vf(e){return Fa(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Xy(e,t){return e.field.isEqual(t.field)&&(function(r,s){return r instanceof Ts&&s instanceof Ts||r instanceof vs&&s instanceof vs?pr(r.elements,s.elements,Le):r instanceof Ii&&s instanceof Ii?Le(r.Ae,s.Ae):r instanceof vi&&s instanceof vi})(e.transform,t.transform)}class Yy{constructor(t,n){this.version=t,this.transformResults=n}}class qe{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new qe}static exists(t){return new qe(void 0,t)}static updateTime(t){return new qe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ei(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Hi{}function Df(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Nf(e.key,qe.none()):new Rs(e.key,e.data,qe.none());{const n=e.data,r=me.empty();let s=new Mt(zt.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Hn(e.key,r,new Te(s.toArray()),qe.none())}}function Jy(e,t,n){e instanceof Rs?(function(s,i,a){const l=s.value.clone(),u=lu(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(e,t,n):e instanceof Hn?(function(s,i,a){if(!ei(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=lu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(xf(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(e,t,n):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,n)}function os(e,t,n,r){return e instanceof Rs?(function(i,a,l,u){if(!ei(i.precondition,a))return l;const f=i.value.clone(),d=cu(i.fieldTransforms,u,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(e,t,n,r):e instanceof Hn?(function(i,a,l,u){if(!ei(i.precondition,a))return l;const f=cu(i.fieldTransforms,u,a),d=a.data;return d.setAll(xf(i)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((m=>m.field)))})(e,t,n,r):(function(i,a,l){return ei(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(e,t,n)}function Zy(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Sf(r.transform,s||null);i!=null&&(n===null&&(n=me.empty()),n.set(r.field,i))}return n||null}function au(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&pr(r,s,((i,a)=>Xy(i,a)))})(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Rs extends Hi{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Hn extends Hi{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function xf(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function lu(e,t,n){const r=new Map;gt(e.length===n.length,32656,{Re:n.length,Ve:e.length});for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,Qy(a,l,n[s]))}return r}function cu(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,Gy(i,a,t))}return r}class Nf extends Hi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tE extends Hi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class eE{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Jy(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=os(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=os(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=bf();return this.mutations.forEach((s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const u=Df(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(et.min())})),r}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),ct())}isEqual(t){return this.batchId===t.batchId&&pr(this.mutations,t.mutations,((n,r)=>au(n,r)))&&pr(this.baseMutations,t.baseMutations,((n,r)=>au(n,r)))}}class qa{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){gt(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=(function(){return qy})();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new qa(t,n,r,s)}}/**
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
 */class nE{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class rE{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Vt,ut;function sE(e){switch(e){case N.OK:return tt(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return tt(15467,{code:e})}}function Of(e){if(e===void 0)return We("GRPC error has no .code"),N.UNKNOWN;switch(e){case Vt.OK:return N.OK;case Vt.CANCELLED:return N.CANCELLED;case Vt.UNKNOWN:return N.UNKNOWN;case Vt.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Vt.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Vt.INTERNAL:return N.INTERNAL;case Vt.UNAVAILABLE:return N.UNAVAILABLE;case Vt.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Vt.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Vt.NOT_FOUND:return N.NOT_FOUND;case Vt.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Vt.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Vt.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Vt.ABORTED:return N.ABORTED;case Vt.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Vt.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Vt.DATA_LOSS:return N.DATA_LOSS;default:return tt(39323,{code:e})}}(ut=Vt||(Vt={}))[ut.OK=0]="OK",ut[ut.CANCELLED=1]="CANCELLED",ut[ut.UNKNOWN=2]="UNKNOWN",ut[ut.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ut[ut.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ut[ut.NOT_FOUND=5]="NOT_FOUND",ut[ut.ALREADY_EXISTS=6]="ALREADY_EXISTS",ut[ut.PERMISSION_DENIED=7]="PERMISSION_DENIED",ut[ut.UNAUTHENTICATED=16]="UNAUTHENTICATED",ut[ut.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ut[ut.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ut[ut.ABORTED=10]="ABORTED",ut[ut.OUT_OF_RANGE=11]="OUT_OF_RANGE",ut[ut.UNIMPLEMENTED=12]="UNIMPLEMENTED",ut[ut.INTERNAL=13]="INTERNAL",ut[ut.UNAVAILABLE=14]="UNAVAILABLE",ut[ut.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function iE(){return new TextEncoder}/**
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
 */const oE=new dn([4294967295,4294967295],0);function uu(e){const t=iE().encode(e),n=new Qh;return n.update(t),new Uint8Array(n.digest())}function hu(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new dn([n,r],0),new dn([s,i],0)]}class Ha{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Wr(`Invalid padding: ${n}`);if(r<0)throw new Wr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Wr(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Wr(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=dn.fromNumber(this.ge)}ye(t,n,r){let s=t.add(n.multiply(dn.fromNumber(r)));return s.compare(oE)===1&&(s=new dn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=uu(t),[r,s]=hu(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Ha(i,s,n);return r.forEach((l=>a.insert(l))),a}insert(t){if(this.ge===0)return;const n=uu(t),[r,s]=hu(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Wr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class zi{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Ss.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new zi(et.min(),s,new St(lt),Ge(),ct())}}class Ss{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Ss(r,n,ct(),ct(),ct())}}/**
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
 */class ni{constructor(t,n,r,s){this.be=t,this.removedTargetIds=n,this.key=r,this.De=s}}class Mf{constructor(t,n){this.targetId=t,this.Ce=n}}class kf{constructor(t,n,r=Kt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class fu{constructor(){this.ve=0,this.Fe=du(),this.Me=Kt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=ct(),n=ct(),r=ct();return this.Fe.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:tt(38017,{changeType:i})}})),new Ss(this.Me,this.xe,t,n,r)}qe(){this.Oe=!1,this.Fe=du()}Qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,gt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class aE{constructor(t){this.Ge=t,this.ze=new Map,this.je=Ge(),this.Je=Ws(),this.He=Ws(),this.Ye=new St(lt)}Ze(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Xe(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,(n=>{const r=this.nt(n);switch(t.state){case 0:this.rt(n)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(t.resumeToken));break;default:tt(56790,{state:t.state})}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(t){const n=t.targetId,r=t.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Zo(i))if(r===0){const a=new J(i.path);this.et(n,a,Jt.newNoDocument(a,et.min()))}else gt(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const l=this.ut(t),u=l?this.ct(l,t,a):1;if(u!==0){this.it(n);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,f)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=En(r).toUint8Array()}catch(u){if(u instanceof af)return dr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ha(a,s,i)}catch(u){return dr(u instanceof Wr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(t,n,r){return n.Ce.count===r-this.Pt(t,n.targetId)?0:2}Pt(t,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.et(n,i,null),s++)})),s}Tt(t){const n=new Map;this.ze.forEach(((i,a)=>{const l=this.ot(a);if(l){if(i.current&&Zo(l.target)){const u=new J(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Jt.newNoDocument(u,t))}i.Be&&(n.set(a,i.ke()),i.qe())}}));let r=ct();this.He.forEach(((i,a)=>{let l=!0;a.forEachWhile((u=>{const f=this.ot(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(t)));const s=new zi(t,n,this.Ye,this.je,r);return this.je=Ge(),this.Je=Ws(),this.He=Ws(),this.Ye=new St(lt),s}Xe(t,n){if(!this.rt(t))return;const r=this.Et(t,n.key)?2:0;this.nt(t).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.dt(n.key).add(t))}et(t,n,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(t)),this.He=this.He.insert(n,this.dt(n).add(t)),r&&(this.je=this.je.insert(n,r))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let n=this.ze.get(t);return n||(n=new fu,this.ze.set(t,n)),n}dt(t){let n=this.He.get(t);return n||(n=new Mt(lt),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new Mt(lt),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||K("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new fu),this.Ge.getRemoteKeysForTarget(t).forEach((n=>{this.et(t,n,null)}))}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Ws(){return new St(J.comparator)}function du(){return new St(J.comparator)}const lE={asc:"ASCENDING",desc:"DESCENDING"},cE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uE={and:"AND",or:"OR"};class hE{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ea(e,t){return e.useProto3Json||Fi(t)?t:{value:t}}function wi(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Lf(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function fE(e,t){return wi(e,t.toTimestamp())}function Ne(e){return gt(!!e,49232),et.fromTimestamp((function(n){const r=yn(n);return new At(r.seconds,r.nanos)})(e))}function za(e,t){return na(e,t).canonicalString()}function na(e,t){const n=(function(s){return new Rt(["projects",s.projectId,"databases",s.database])})(e).child("documents");return t===void 0?n:n.child(t)}function Ff(e){const t=Rt.fromString(e);return gt(qf(t),10190,{key:t.toString()}),t}function ra(e,t){return za(e.databaseId,t.path)}function So(e,t){const n=Ff(t);if(n.get(1)!==e.databaseId.projectId)throw new Q(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Q(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new J(Bf(n))}function Uf(e,t){return za(e.databaseId,t)}function dE(e){const t=Ff(e);return t.length===4?Rt.emptyPath():Bf(t)}function sa(e){return new Rt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Bf(e){return gt(e.length>4&&e.get(4)==="documents",29091,{key:e.toString()}),e.popFirst(5)}function pu(e,t,n){return{name:ra(e,t),fields:n.value.mapValue.fields}}function pE(e,t){let n;if("targetChange"in t){t.targetChange;const r=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:tt(39313,{state:f})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(f,d){return f.useProto3Json?(gt(d===void 0||typeof d=="string",58123),Kt.fromBase64String(d||"")):(gt(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Kt.fromUint8Array(d||new Uint8Array))})(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&(function(f){const d=f.code===void 0?N.UNKNOWN:Of(f.code);return new Q(d,f.message||"")})(a);n=new kf(r,s,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=So(e,r.document.name),i=Ne(r.document.updateTime),a=r.document.createTime?Ne(r.document.createTime):et.min(),l=new me({mapValue:{fields:r.document.fields}}),u=Jt.newFoundDocument(s,i,a,l),f=r.targetIds||[],d=r.removedTargetIds||[];n=new ni(f,d,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=So(e,r.document),i=r.readTime?Ne(r.readTime):et.min(),a=Jt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ni([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=So(e,r.document),i=r.removedTargetIds||[];n=new ni([],i,s,null)}else{if(!("filter"in t))return tt(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new rE(s,i),l=r.targetId;n=new Mf(l,a)}}return n}function mE(e,t){let n;if(t instanceof Rs)n={update:pu(e,t.key,t.value)};else if(t instanceof Nf)n={delete:ra(e,t.key)};else if(t instanceof Hn)n={update:pu(e,t.key,t.data),updateMask:AE(t.fieldMask)};else{if(!(t instanceof tE))return tt(16599,{Vt:t.type});n={verify:ra(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((r=>(function(i,a){const l=a.transform;if(l instanceof vi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ts)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof vs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ii)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw tt(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:fE(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:tt(27497)})(e,t.precondition)),n}function gE(e,t){return e&&e.length>0?(gt(t!==void 0,14353),e.map((n=>(function(s,i){let a=s.updateTime?Ne(s.updateTime):Ne(i);return a.isEqual(et.min())&&(a=Ne(i)),new Yy(a,s.transformResults||[])})(n,t)))):[]}function _E(e,t){return{documents:[Uf(e,t.path)]}}function yE(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Uf(e,s);const i=(function(f){if(f.length!==0)return $f(Fe.create(f,"and"))})(t.filters);i&&(n.structuredQuery.where=i);const a=(function(f){if(f.length!==0)return f.map((d=>(function(T){return{field:nr(T.field),direction:vE(T.dir)}})(d)))})(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=ea(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(t.startAt)),t.endAt&&(n.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(t.endAt)),{ft:n,parent:s}}function EE(e){let t=dE(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){gt(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=(function(m){const T=jf(m);return T instanceof Fe&&_f(T)?T.getFilters():[T]})(n.where));let a=[];n.orderBy&&(a=(function(m){return m.map((T=>(function(F){return new Ti(rr(F.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(F.direction))})(T)))})(n.orderBy));let l=null;n.limit&&(l=(function(m){let T;return T=typeof m=="object"?m.value:m,Fi(T)?null:T})(n.limit));let u=null;n.startAt&&(u=(function(m){const T=!!m.before,S=m.values||[];return new Ei(S,T)})(n.startAt));let f=null;return n.endAt&&(f=(function(m){const T=!m.before,S=m.values||[];return new Ei(S,T)})(n.endAt)),Ly(t,s,a,i,l,"F",u,f)}function TE(e,t){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return tt(28987,{purpose:s})}})(t.purpose);return n==null?null:{"goog-listen-tags":n}}function jf(e){return e.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=rr(n.unaryFilter.field);return Ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=rr(n.unaryFilter.field);return Ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=rr(n.unaryFilter.field);return Ot.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=rr(n.unaryFilter.field);return Ot.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return tt(61313);default:return tt(60726)}})(e):e.fieldFilter!==void 0?(function(n){return Ot.create(rr(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return tt(58110);default:return tt(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(e):e.compositeFilter!==void 0?(function(n){return Fe.create(n.compositeFilter.filters.map((r=>jf(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return tt(1026)}})(n.compositeFilter.op))})(e):tt(30097,{filter:e})}function vE(e){return lE[e]}function IE(e){return cE[e]}function wE(e){return uE[e]}function nr(e){return{fieldPath:e.canonicalString()}}function rr(e){return zt.fromServerFormat(e.fieldPath)}function $f(e){return e instanceof Ot?(function(n){if(n.op==="=="){if(eu(n.value))return{unaryFilter:{field:nr(n.field),op:"IS_NAN"}};if(tu(n.value))return{unaryFilter:{field:nr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(eu(n.value))return{unaryFilter:{field:nr(n.field),op:"IS_NOT_NAN"}};if(tu(n.value))return{unaryFilter:{field:nr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nr(n.field),op:IE(n.op),value:n.value}}})(e):e instanceof Fe?(function(n){const r=n.getFilters().map((s=>$f(s)));return r.length===1?r[0]:{compositeFilter:{op:wE(n.op),filters:r}}})(e):tt(54877,{filter:e})}function AE(e){const t=[];return e.fields.forEach((n=>t.push(n.canonicalString()))),{fieldPaths:t}}function qf(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class cn{constructor(t,n,r,s,i=et.min(),a=et.min(),l=Kt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new cn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class bE{constructor(t){this.yt=t}}function RE(e){const t=EE({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ta(t,t.limit,"L"):t}/**
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
 */class SE{constructor(){this.Cn=new CE}addToCollectionParentIndex(t,n){return this.Cn.add(n),V.resolve()}getCollectionParents(t,n){return V.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return V.resolve()}deleteFieldIndex(t,n){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,n){return V.resolve()}getDocumentsMatchingTarget(t,n){return V.resolve(null)}getIndexType(t,n){return V.resolve(0)}getFieldIndexes(t,n){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,n){return V.resolve(_n.min())}getMinOffsetFromCollectionGroup(t,n){return V.resolve(_n.min())}updateCollectionGroup(t,n,r){return V.resolve()}updateIndexEntries(t,n){return V.resolve()}}class CE{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Mt(Rt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Mt(Rt.comparator)).toArray()}}/**
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
 */const mu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hf=41943040;class oe{static withCacheSize(t){return new oe(t,oe.DEFAULT_COLLECTION_PERCENTILE,oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */oe.DEFAULT_COLLECTION_PERCENTILE=10,oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,oe.DEFAULT=new oe(Hf,oe.DEFAULT_COLLECTION_PERCENTILE,oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),oe.DISABLED=new oe(-1,0,0);/**
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
 */class _r{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new _r(0)}static cr(){return new _r(-1)}}/**
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
 */const gu="LruGarbageCollector",PE=1048576;function _u([e,t],[n,r]){const s=lt(e,n);return s===0?lt(t,r):s}class VE{constructor(t){this.Ir=t,this.buffer=new Mt(_u),this.Er=0}dr(){return++this.Er}Ar(t){const n=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();_u(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class DE{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){K(gu,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ir(n)?K(gu,"Ignoring IndexedDB error during garbage collection: ",n):await vr(n)}await this.Vr(3e5)}))}}class xE{constructor(t,n){this.mr=t,this.params=n}calculateTargetCount(t,n){return this.mr.gr(t).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(t,n){if(n===0)return V.resolve(Li.ce);const r=new VE(n);return this.mr.forEachTarget(t,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(t,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(t,n,r){return this.mr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.mr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(mu)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mu):this.yr(t,n)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,n){let r,s,i,a,l,u,f;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(t,s)))).next((m=>(r=m,l=Date.now(),this.removeTargets(t,r,n)))).next((m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(t,r)))).next((m=>(f=Date.now(),tr()<=ht.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(f-u)+`ms
Total Duration: ${f-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m}))))}}function NE(e,t){return new xE(e,t)}/**
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
 */class OE{constructor(){this.changes=new qn((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Jt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class ME{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class kE{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,n)))).next((s=>(r!==null&&os(r.mutation,s,Te.empty(),At.now()),s)))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next((r=>this.getLocalViewOfDocuments(t,r,ct()).next((()=>r))))}getLocalViewOfDocuments(t,n,r=ct()){const s=Mn();return this.populateOverlays(t,s,n).next((()=>this.computeViews(t,n,s,r).next((i=>{let a=Kr();return i.forEach(((l,u)=>{a=a.insert(l,u.overlayedDocument)})),a}))))}getOverlayedDocuments(t,n){const r=Mn();return this.populateOverlays(t,r,n).next((()=>this.computeViews(t,n,r,ct())))}populateOverlays(t,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(t,s).next((i=>{i.forEach(((a,l)=>{n.set(a,l)}))}))}computeViews(t,n,r,s){let i=Ge();const a=is(),l=(function(){return is()})();return n.forEach(((u,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof Hn)?i=i.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),os(d.mutation,f,d.mutation.getFieldMask(),At.now())):a.set(f.key,Te.empty())})),this.recalculateAndSaveOverlays(t,i).next((u=>(u.forEach(((f,d)=>a.set(f,d))),n.forEach(((f,d)=>l.set(f,new ME(d,a.get(f)??null)))),l)))}recalculateAndSaveOverlays(t,n){const r=is();let s=new St(((a,l)=>a-l)),i=ct();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next((a=>{for(const l of a)l.keys().forEach((u=>{const f=n.get(u);if(f===null)return;let d=r.get(u)||Te.empty();d=l.applyToLocalView(f,d),r.set(u,d);const m=(s.get(l.batchId)||ct()).add(u);s=s.insert(l.batchId,m)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),f=u.key,d=u.value,m=bf();d.forEach((T=>{if(!i.has(T)){const S=Df(n.get(T),r.get(T));S!==null&&m.set(T,S),i=i.add(T)}})),a.push(this.documentOverlayCache.saveOverlays(t,f,m))}return V.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,n,r,s){return(function(a){return J.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Fy(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):V.resolve(Mn());let l=gs,u=i;return a.next((f=>V.forEach(f,((d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(d)?V.resolve():this.remoteDocumentCache.getEntry(t,d).next((T=>{u=u.insert(d,T)}))))).next((()=>this.populateOverlays(t,f,i))).next((()=>this.computeViews(t,u,f,ct()))).next((d=>({batchId:l,changes:Af(d)})))))}))}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new J(n)).next((r=>{let s=Kr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=Kr();return this.indexManager.getCollectionParents(t,i).next((l=>V.forEach(l,(u=>{const f=(function(m,T){return new Bi(T,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next((d=>{d.forEach(((m,T)=>{a=a.insert(m,T)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s)))).next((a=>{i.forEach(((u,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,Jt.newInvalidDocument(d)))}));let l=Kr();return a.forEach(((u,f)=>{const d=i.get(u);d!==void 0&&os(d.mutation,f,Te.empty(),At.now()),$i(n,f)&&(l=l.insert(u,f))})),l}))}}/**
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
 */class LE{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,n){return V.resolve(this.Lr.get(n))}saveBundleMetadata(t,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Ne(s.createTime)}})(n)),V.resolve()}getNamedQuery(t,n){return V.resolve(this.kr.get(n))}saveNamedQuery(t,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:RE(s.bundledQuery),readTime:Ne(s.readTime)}})(n)),V.resolve()}}/**
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
 */class FE{constructor(){this.overlays=new St(J.comparator),this.qr=new Map}getOverlay(t,n){return V.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Mn();return V.forEach(n,(s=>this.getOverlay(t,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(t,n,r){return r.forEach(((s,i)=>{this.St(t,n,i)})),V.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),V.resolve()}getOverlaysForCollection(t,n,r){const s=Mn(),i=n.length+1,a=new J(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,f=u.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new St(((f,d)=>f-d));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let d=i.get(f.largestBatchId);d===null&&(d=Mn(),i=i.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const l=Mn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((f,d)=>l.set(f,d))),!(l.size()>=s)););return V.resolve(l)}St(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new nE(n,r));let i=this.qr.get(n);i===void 0&&(i=ct(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class UE{constructor(){this.sessionToken=Kt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class Ka{constructor(){this.Qr=new Mt(Ut.$r),this.Ur=new Mt(Ut.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,n){const r=new Ut(t,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,n){t.forEach((r=>this.addReference(r,n)))}removeReference(t,n){this.Gr(new Ut(t,n))}zr(t,n){t.forEach((r=>this.removeReference(r,n)))}jr(t){const n=new J(new Rt([])),r=new Ut(n,t),s=new Ut(n,t+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const n=new J(new Rt([])),r=new Ut(n,t),s=new Ut(n,t+1);let i=ct();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(t){const n=new Ut(t,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Ut{constructor(t,n){this.key=t,this.Yr=n}static $r(t,n){return J.comparator(t.key,n.key)||lt(t.Yr,n.Yr)}static Kr(t,n){return lt(t.Yr,n.Yr)||J.comparator(t.key,n.key)}}/**
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
 */class BE{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Mt(Ut.$r)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new eE(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new Ut(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(t,n){return V.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?ka:this.tr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Ut(n,0),s=new Ut(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const l=this.Xr(a.Yr);i.push(l)})),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Mt(lt);return n.forEach((s=>{const i=new Ut(s,0),a=new Ut(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(l=>{r=r.add(l.Yr)}))})),V.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const a=new Ut(new J(i),0);let l=new Mt(lt);return this.Zr.forEachWhile((u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(u.Yr)),!0)}),a),V.resolve(this.ti(l))}ti(t){const n=[];return t.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(t,n){gt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return V.forEach(n.mutations,(s=>{const i=new Ut(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,n){const r=new Ut(n,0),s=this.Zr.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}ni(t,n){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const n=this.ei(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class jE{constructor(t){this.ri=t,this.docs=(function(){return new St(J.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Jt.newInvalidDocument(n))}getEntries(t,n){let r=Ge();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Jt.newInvalidDocument(s))})),V.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Ge();const a=n.path,l=new J(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:f,value:{document:d}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||my(py(d),r)<=0||(s.has(d.key)||$i(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(t,n,r,s){tt(9500)}ii(t,n){return V.forEach(this.docs,(r=>n(r)))}newChangeBuffer(t){return new $E(this)}getSize(t){return V.resolve(this.size)}}class $E extends OE{constructor(t){super(),this.Nr=t}applyChanges(t){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)})),V.waitFor(n)}getFromCache(t,n){return this.Nr.getEntry(t,n)}getAllFromCache(t,n){return this.Nr.getEntries(t,n)}}/**
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
 */class qE{constructor(t){this.persistence=t,this.si=new qn((n=>Ua(n)),Ba),this.lastRemoteSnapshotVersion=et.min(),this.highestTargetId=0,this.oi=0,this._i=new Ka,this.targetCount=0,this.ai=_r.ur()}forEachTarget(t,n){return this.si.forEach(((r,s)=>n(s))),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),V.resolve()}Pr(t){this.si.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ai=new _r(n),this.highestTargetId=n),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,n){return this.Pr(n),this.targetCount+=1,V.resolve()}updateTargetData(t,n){return this.Pr(n),V.resolve()}removeTargetData(t,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)})),V.waitFor(i).next((()=>s))}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,n){const r=this.si.get(n)||null;return V.resolve(r)}addMatchingKeys(t,n,r){return this._i.Wr(n,r),V.resolve()}removeMatchingKeys(t,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((a=>{i.push(s.markPotentiallyOrphaned(t,a))})),V.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this._i.jr(n),V.resolve()}getMatchingKeysForTargetId(t,n){const r=this._i.Hr(n);return V.resolve(r)}containsKey(t,n){return V.resolve(this._i.containsKey(n))}}/**
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
 */class zf{constructor(t,n){this.ui={},this.overlays={},this.ci=new Li(0),this.li=!1,this.li=!0,this.hi=new UE,this.referenceDelegate=t(this),this.Pi=new qE(this),this.indexManager=new SE,this.remoteDocumentCache=(function(s){return new jE(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new bE(n),this.Ii=new LE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new FE,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.ui[t.toKey()];return r||(r=new BE(n,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,n,r){K("MemoryPersistence","Starting transaction:",t);const s=new HE(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(t,n){return V.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,n))))}}class HE extends _y{constructor(t){super(),this.currentSequenceNumber=t}}class Wa{constructor(t){this.persistence=t,this.Ri=new Ka,this.Vi=null}static mi(t){return new Wa(t)}get fi(){if(this.Vi)return this.Vi;throw tt(60996)}addReference(t,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),V.resolve()}removeReference(t,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(t,n){return this.fi.add(n.toString()),V.resolve()}removeTarget(t,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(t,n)))}Ei(){this.Vi=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.fi,(r=>{const s=J.fromPath(r);return this.gi(t,s).next((i=>{i||n.removeEntry(s,et.min())}))})).next((()=>(this.Vi=null,n.apply(t))))}updateLimboDocument(t,n){return this.gi(t,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(t){return 0}gi(t,n){return V.or([()=>V.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class Ai{constructor(t,n){this.persistence=t,this.pi=new qn((r=>Ty(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=NE(this,n)}static mi(t,n){return new Ai(t,n)}Ei(){}di(t){return V.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}gr(t){const n=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>n.next((s=>r+s))))}wr(t){let n=0;return this.pr(t,(r=>{n++})).next((()=>n))}pr(t,n){return V.forEach(this.pi,((r,s)=>this.br(t,r,s).next((i=>i?V.resolve():n(s)))))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(t,(a=>this.br(t,a,n).next((l=>{l||(r++,i.removeEntry(a,et.min()))})))).next((()=>i.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,n){return this.pi.set(n,t.currentSequenceNumber),V.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.pi.set(r,t.currentSequenceNumber),V.resolve()}removeReference(t,n,r){return this.pi.set(r,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,n){return this.pi.set(n,t.currentSequenceNumber),V.resolve()}Ti(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Zs(t.data.value)),n}br(t,n,r){return V.or([()=>this.persistence.Ai(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.pi.get(n);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Ga{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Es=r,this.ds=s}static As(t,n){let r=ct(),s=ct();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ga(t,n.fromCache,r,s)}}/**
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
 */class zE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class KE{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Mg()?8:yy(Ng())>0?6:4})()}initialize(t,n){this.ps=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ys(t,n).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(t,n,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new zE;return this.Ss(t,n,a).next((l=>{if(i.result=l,this.Vs)return this.bs(t,n,a,l.size)}))})).next((()=>i.result))}bs(t,n,r,s){return r.documentReadCount<this.fs?(tr()<=ht.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",er(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),V.resolve()):(tr()<=ht.DEBUG&&K("QueryEngine","Query:",er(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(tr()<=ht.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",er(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,xe(n))):V.resolve())}ys(t,n){if(iu(n))return V.resolve(null);let r=xe(n);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=ta(n,null,"F"),r=xe(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next((i=>{const a=ct(...i);return this.ps.getDocuments(t,a).next((l=>this.indexManager.getMinOffset(t,r).next((u=>{const f=this.Ds(n,l);return this.Cs(n,f,a,u.readTime)?this.ys(t,ta(n,null,"F")):this.vs(t,f,n,u)}))))})))))}ws(t,n,r,s){return iu(n)||s.isEqual(et.min())?V.resolve(null):this.ps.getDocuments(t,r).next((i=>{const a=this.Ds(n,i);return this.Cs(n,a,r,s)?V.resolve(null):(tr()<=ht.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),er(n)),this.vs(t,a,n,dy(s,gs)).next((l=>l)))}))}Ds(t,n){let r=new Mt(If(t));return n.forEach(((s,i)=>{$i(t,i)&&(r=r.add(i))})),r}Cs(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,n,r){return tr()<=ht.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",er(n)),this.ps.getDocumentsMatchingQuery(t,n,_n.min(),r)}vs(t,n,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next((i=>(n.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const Qa="LocalStore",WE=3e8;class GE{constructor(t,n,r,s){this.persistence=t,this.Fs=n,this.serializer=s,this.Ms=new St(lt),this.xs=new qn((i=>Ua(i)),Ba),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new kE(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.Ms)))}}function QE(e,t,n,r){return new GE(e,t,n,r)}async function Kf(e,t){const n=nt(e);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(t),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],l=[];let u=ct();for(const f of s){a.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}for(const f of i){l.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next((f=>({Ls:f,removedBatchIds:a,addedBatchIds:l})))}))}))}function XE(e,t){const n=nt(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,u,f,d){const m=f.batch,T=m.keys();let S=V.resolve();return T.forEach((F=>{S=S.next((()=>d.getEntry(u,F))).next((U=>{const B=f.docVersions.get(F);gt(B!==null,48541),U.version.compareTo(B)<0&&(m.applyToRemoteDocument(U,f),U.isValidDocument()&&(U.setReadTime(f.commitVersion),d.addEntry(U)))}))})),S.next((()=>l.mutationQueue.removeMutationBatch(u,m)))})(n,r,t,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let u=ct();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(u=u.add(l.batch.mutations[f].key));return u})(t)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Wf(e){const t=nt(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>t.Pi.getLastRemoteSnapshotVersion(n)))}function YE(e,t){const n=nt(e),r=t.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];t.targetChanges.forEach(((d,m)=>{const T=s.get(m);if(!T)return;l.push(n.Pi.removeMatchingKeys(i,d.removedDocuments,m).next((()=>n.Pi.addMatchingKeys(i,d.addedDocuments,m))));let S=T.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(m)!==null?S=S.withResumeToken(Kt.EMPTY_BYTE_STRING,et.min()).withLastLimboFreeSnapshotVersion(et.min()):d.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(d.resumeToken,r)),s=s.insert(m,S),(function(U,B,W){return U.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=WE?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0})(T,S,d)&&l.push(n.Pi.updateTargetData(i,S))}));let u=Ge(),f=ct();if(t.documentUpdates.forEach((d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))})),l.push(JE(i,a,t.documentUpdates).next((d=>{u=d.ks,f=d.qs}))),!r.isEqual(et.min())){const d=n.Pi.getLastRemoteSnapshotVersion(i).next((m=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(d)}return V.waitFor(l).next((()=>a.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,u,f))).next((()=>u))})).then((i=>(n.Ms=s,i)))}function JE(e,t,n){let r=ct(),s=ct();return n.forEach((i=>r=r.add(i))),t.getEntries(e,r).next((i=>{let a=Ge();return n.forEach(((l,u)=>{const f=i.get(l);u.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(et.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):K(Qa,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",u.version)})),{ks:a,qs:s}}))}function ZE(e,t){const n=nt(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=ka),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function tT(e,t){const n=nt(e);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,t).next((i=>i?(s=i,V.resolve(s)):n.Pi.allocateTargetId(r).next((a=>(s=new cn(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(t,r.targetId)),r}))}async function ia(e,t,n){const r=nt(e),s=r.Ms.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Ir(a))throw a;K(Qa,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function yu(e,t,n){const r=nt(e);let s=et.min(),i=ct();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,f,d){const m=nt(u),T=m.xs.get(d);return T!==void 0?V.resolve(m.Ms.get(T)):m.Pi.getTargetData(f,d)})(r,a,xe(t)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next((u=>{i=u}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,t,n?s:et.min(),n?i:ct()))).next((l=>(eT(r,By(t),l),{documents:l,Qs:i})))))}function eT(e,t,n){let r=e.Os.get(t)||et.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),e.Os.set(t,r)}class Eu{constructor(){this.activeTargetIds=Ky()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class nT{constructor(){this.Mo=new Eu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,n,r){this.xo[t]=n}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Eu,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class rT{Oo(t){}shutdown(){}}/**
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
 */const Tu="ConnectivityMonitor";class vu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){K(Tu,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){K(Tu,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gs=null;function oa(){return Gs===null?Gs=(function(){return 268435456+Math.round(2147483648*Math.random())})():Gs++,"0x"+Gs.toString(16)}/**
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
 */const Co="RestConnection",sT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class iT{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===_i?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,n,r,s,i){const a=oa(),l=this.zo(t,n.toUriEncodedString());K(Co,`Sending RPC '${t}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:f}=new URL(l),d=Da(f);return this.Jo(t,l,u,r,d).then((m=>(K(Co,`Received RPC '${t}' ${a}: `,m),m)),(m=>{throw dr(Co,`RPC '${t}' ${a} failed with error: `,m,"url: ",l,"request:",r),m}))}Ho(t,n,r,s,i,a){return this.Go(t,n,r,s,i)}jo(t,n,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Tr})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>t[i]=s)),r&&r.headers.forEach(((s,i)=>t[i]=s))}zo(t,n){const r=sT[t];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class oT{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const Qt="WebChannelConnection";class aT extends iT{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,r,s,i){const a=oa();return new Promise(((l,u)=>{const f=new Xh;f.setWithCredentials(!0),f.listenOnce(Yh.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case Js.NO_ERROR:const m=f.getResponseJson();K(Qt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(m)),l(m);break;case Js.TIMEOUT:K(Qt,`RPC '${t}' ${a} timed out`),u(new Q(N.DEADLINE_EXCEEDED,"Request time out"));break;case Js.HTTP_ERROR:const T=f.getStatus();if(K(Qt,`RPC '${t}' ${a} failed with status:`,T,"response text:",f.getResponseText()),T>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const F=S?.error;if(F&&F.status&&F.message){const U=(function(W){const G=W.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(G)>=0?G:N.UNKNOWN})(F.status);u(new Q(U,F.message))}else u(new Q(N.UNKNOWN,"Server responded with status "+f.getStatus()))}else u(new Q(N.UNAVAILABLE,"Connection failed."));break;default:tt(9055,{l_:t,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{K(Qt,`RPC '${t}' ${a} completed.`)}}));const d=JSON.stringify(s);K(Qt,`RPC '${t}' ${a} sending request:`,s),f.send(n,"POST",d,r,15)}))}T_(t,n,r){const s=oa(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=tf(),l=Zh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=i.join("");K(Qt,`Creating RPC '${t}' stream ${s}: ${d}`,u);const m=a.createWebChannel(d,u);this.I_(m);let T=!1,S=!1;const F=new oT({Yo:B=>{S?K(Qt,`Not sending because RPC '${t}' stream ${s} is closed:`,B):(T||(K(Qt,`Opening RPC '${t}' stream ${s} transport.`),m.open(),T=!0),K(Qt,`RPC '${t}' stream ${s} sending:`,B),m.send(B))},Zo:()=>m.close()}),U=(B,W,G)=>{B.listen(W,($=>{try{G($)}catch(H){setTimeout((()=>{throw H}),0)}}))};return U(m,zr.EventType.OPEN,(()=>{S||(K(Qt,`RPC '${t}' stream ${s} transport opened.`),F.o_())})),U(m,zr.EventType.CLOSE,(()=>{S||(S=!0,K(Qt,`RPC '${t}' stream ${s} transport closed`),F.a_(),this.E_(m))})),U(m,zr.EventType.ERROR,(B=>{S||(S=!0,dr(Qt,`RPC '${t}' stream ${s} transport errored. Name:`,B.name,"Message:",B.message),F.a_(new Q(N.UNAVAILABLE,"The operation could not be completed")))})),U(m,zr.EventType.MESSAGE,(B=>{if(!S){const W=B.data[0];gt(!!W,16349);const G=W,$=G?.error||G[0]?.error;if($){K(Qt,`RPC '${t}' stream ${s} received error:`,$);const H=$.status;let rt=(function(g){const E=Vt[g];if(E!==void 0)return Of(E)})(H),_t=$.message;rt===void 0&&(rt=N.INTERNAL,_t="Unknown error status: "+H+" with message "+$.message),S=!0,F.a_(new Q(rt,_t)),m.close()}else K(Qt,`RPC '${t}' stream ${s} received:`,W),F.u_(W)}})),U(l,Jh.STAT_EVENT,(B=>{B.stat===Go.PROXY?K(Qt,`RPC '${t}' stream ${s} detected buffering proxy`):B.stat===Go.NOPROXY&&K(Qt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{F.__()}),0),F}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((n=>n===t))}}function Po(){return typeof document<"u"?document:null}/**
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
 */function Ki(e){return new hE(e,!0)}/**
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
 */class Gf{constructor(t,n,r=1e3,s=1.5,i=6e4){this.Mi=t,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Iu="PersistentStream";class Qf{constructor(t,n,r,s,i,a,l,u){this.Mi=t,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Gf(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(We(n.toString()),We("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(n)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{t((()=>{const s=new Q(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,n){const r=this.W_(this.D_);this.stream=this.j_(t,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return K(Iu,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return n=>{this.Mi.enqueueAndForget((()=>this.D_===t?n():(K(Iu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class lT extends Qf{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=pE(this.serializer,t),r=(function(i){if(!("targetChange"in i))return et.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?et.min():a.readTime?Ne(a.readTime):et.min()})(t);return this.listener.H_(n,r)}Y_(t){const n={};n.database=sa(this.serializer),n.addTarget=(function(i,a){let l;const u=a.target;if(l=Zo(u)?{documents:_E(i,u)}:{query:yE(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Lf(i,a.resumeToken);const f=ea(i,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(et.min())>0){l.readTime=wi(i,a.snapshotVersion.toTimestamp());const f=ea(i,a.expectedCount);f!==null&&(l.expectedCount=f)}return l})(this.serializer,t);const r=TE(this.serializer,t);r&&(n.labels=r),this.q_(n)}Z_(t){const n={};n.database=sa(this.serializer),n.removeTarget=t,this.q_(n)}}class cT extends Qf{constructor(t,n,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return gt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,gt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){gt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=gE(t.writeResults,t.commitTime),r=Ne(t.commitTime);return this.listener.na(r,n)}ra(){const t={};t.database=sa(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map((r=>mE(this.serializer,r)))};this.q_(n)}}/**
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
 */class uT{}class hT extends uT{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Q(N.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(t,na(n,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(N.UNKNOWN,i.toString())}))}Ho(t,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(t,na(n,r),s,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Q(N.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class fT{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(We(n),this.aa=!1):K("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Bn="RemoteStore";class dT{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{zn(this)&&(K(Bn,"Restarting streams for network reachability change."),await(async function(u){const f=nt(u);f.Ea.add(4),await Cs(f),f.Ra.set("Unknown"),f.Ea.delete(4),await Wi(f)})(this))}))})),this.Ra=new fT(r,s)}}async function Wi(e){if(zn(e))for(const t of e.da)await t(!0)}async function Cs(e){for(const t of e.da)await t(!1)}function Xf(e,t){const n=nt(e);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),Za(n)?Ja(n):wr(n).O_()&&Ya(n,t))}function Xa(e,t){const n=nt(e),r=wr(n);n.Ia.delete(t),r.O_()&&Yf(n,t),n.Ia.size===0&&(r.O_()?r.L_():zn(n)&&n.Ra.set("Unknown"))}function Ya(e,t){if(e.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(et.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}wr(e).Y_(t)}function Yf(e,t){e.Va.Ue(t),wr(e).Z_(t)}function Ja(e){e.Va=new aE({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ia.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),wr(e).start(),e.Ra.ua()}function Za(e){return zn(e)&&!wr(e).x_()&&e.Ia.size>0}function zn(e){return nt(e).Ea.size===0}function Jf(e){e.Va=void 0}async function pT(e){e.Ra.set("Online")}async function mT(e){e.Ia.forEach(((t,n)=>{Ya(e,t)}))}async function gT(e,t){Jf(e),Za(e)?(e.Ra.ha(t),Ja(e)):e.Ra.set("Unknown")}async function _T(e,t,n){if(e.Ra.set("Online"),t instanceof kf&&t.state===2&&t.cause)try{await(async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))})(e,t)}catch(r){K(Bn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await bi(e,r)}else if(t instanceof ni?e.Va.Ze(t):t instanceof Mf?e.Va.st(t):e.Va.tt(t),!n.isEqual(et.min()))try{const r=await Wf(e.localStore);n.compareTo(r)>=0&&await(function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach(((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.Ia.get(f);d&&i.Ia.set(f,d.withResumeToken(u.resumeToken,a))}})),l.targetMismatches.forEach(((u,f)=>{const d=i.Ia.get(u);if(!d)return;i.Ia.set(u,d.withResumeToken(Kt.EMPTY_BYTE_STRING,d.snapshotVersion)),Yf(i,u);const m=new cn(d.target,u,f,d.sequenceNumber);Ya(i,m)})),i.remoteSyncer.applyRemoteEvent(l)})(e,n)}catch(r){K(Bn,"Failed to raise snapshot:",r),await bi(e,r)}}async function bi(e,t,n){if(!Ir(t))throw t;e.Ea.add(1),await Cs(e),e.Ra.set("Offline"),n||(n=()=>Wf(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{K(Bn,"Retrying IndexedDB access"),await n(),e.Ea.delete(1),await Wi(e)}))}function Zf(e,t){return t().catch((n=>bi(e,n,t)))}async function Gi(e){const t=nt(e),n=vn(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:ka;for(;yT(t);)try{const s=await ZE(t.localStore,r);if(s===null){t.Ta.length===0&&n.L_();break}r=s.batchId,ET(t,s)}catch(s){await bi(t,s)}td(t)&&ed(t)}function yT(e){return zn(e)&&e.Ta.length<10}function ET(e,t){e.Ta.push(t);const n=vn(e);n.O_()&&n.X_&&n.ea(t.mutations)}function td(e){return zn(e)&&!vn(e).x_()&&e.Ta.length>0}function ed(e){vn(e).start()}async function TT(e){vn(e).ra()}async function vT(e){const t=vn(e);for(const n of e.Ta)t.ea(n.mutations)}async function IT(e,t,n){const r=e.Ta.shift(),s=qa.from(r,t,n);await Zf(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await Gi(e)}async function wT(e,t){t&&vn(e).X_&&await(async function(r,s){if((function(a){return sE(a)&&a!==N.ABORTED})(s.code)){const i=r.Ta.shift();vn(r).B_(),await Zf(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Gi(r)}})(e,t),td(e)&&ed(e)}async function wu(e,t){const n=nt(e);n.asyncQueue.verifyOperationInProgress(),K(Bn,"RemoteStore received new credentials");const r=zn(n);n.Ea.add(3),await Cs(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await Wi(n)}async function AT(e,t){const n=nt(e);t?(n.Ea.delete(2),await Wi(n)):t||(n.Ea.add(2),await Cs(n),n.Ra.set("Unknown"))}function wr(e){return e.ma||(e.ma=(function(n,r,s){const i=nt(n);return i.sa(),new lT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(e.datastore,e.asyncQueue,{Xo:pT.bind(null,e),t_:mT.bind(null,e),r_:gT.bind(null,e),H_:_T.bind(null,e)}),e.da.push((async t=>{t?(e.ma.B_(),Za(e)?Ja(e):e.Ra.set("Unknown")):(await e.ma.stop(),Jf(e))}))),e.ma}function vn(e){return e.fa||(e.fa=(function(n,r,s){const i=nt(n);return i.sa(),new cT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(e.datastore,e.asyncQueue,{Xo:()=>Promise.resolve(),t_:TT.bind(null,e),r_:wT.bind(null,e),ta:vT.bind(null,e),na:IT.bind(null,e)}),e.da.push((async t=>{t?(e.fa.B_(),await Gi(e)):(await e.fa.stop(),e.Ta.length>0&&(K(Bn,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))}))),e.fa}/**
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
 */class tl{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,l=new tl(t,n,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(N.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function el(e,t){if(We("AsyncQueue",`${t}: ${e}`),Ir(e))return new Q(N.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class ur{static emptySet(t){return new ur(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=Kr(),this.sortedSet=new St(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((n,r)=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ur)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new ur;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Au{constructor(){this.ga=new St(J.comparator)}track(t){const n=t.doc.key,r=this.ga.get(n);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(n,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(n):t.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):tt(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal(((n,r)=>{t.push(r)})),t}}class yr{constructor(t,n,r,s,i,a,l,u,f){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach((l=>{a.push({type:0,doc:l})})),new yr(t,n,ur.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ji(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class bT{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class RT{constructor(){this.queries=bu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=nt(n),i=s.queries;s.queries=bu(),i.forEach(((a,l)=>{for(const u of l.Sa)u.onError(r)}))})(this,new Q(N.ABORTED,"Firestore shutting down"))}}function bu(){return new qn((e=>vf(e)),ji)}async function ST(e,t){const n=nt(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.ba()&&t.Da()&&(r=2):(i=new bT,r=t.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=el(a,`Initialization of query '${er(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,i),i.Sa.push(t),t.va(n.onlineState),i.wa&&t.Fa(i.wa)&&nl(n)}async function CT(e,t){const n=nt(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function PT(e,t){const n=nt(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&nl(n)}function VT(e,t,n){const r=nt(e),s=r.queries.get(t);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(t)}function nl(e){e.Ca.forEach((t=>{t.next()}))}var aa,Ru;(Ru=aa||(aa={})).Ma="default",Ru.Cache="cache";class DT{constructor(t,n,r){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new yr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=yr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==aa.Cache}}/**
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
 */class nd{constructor(t){this.key=t}}class rd{constructor(t){this.key=t}}class xT{constructor(t,n){this.query=t,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ct(),this.mutatedKeys=ct(),this.eu=If(t),this.tu=new ur(this.eu)}get nu(){return this.Ya}ru(t,n){const r=n?n.iu:new Au,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((d,m)=>{const T=s.get(d),S=$i(this.query,m)?m:null,F=!!T&&this.mutatedKeys.has(T.key),U=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let B=!1;T&&S?T.data.isEqual(S.data)?F!==U&&(r.track({type:3,doc:S}),B=!0):this.su(T,S)||(r.track({type:2,doc:S}),B=!0,(u&&this.eu(S,u)>0||f&&this.eu(S,f)<0)&&(l=!0)):!T&&S?(r.track({type:0,doc:S}),B=!0):T&&!S&&(r.track({type:1,doc:T}),B=!0,(u||f)&&(l=!0)),B&&(S?(a=a.add(S),i=U?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((d,m)=>(function(S,F){const U=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return tt(20277,{Rt:B})}};return U(S)-U(F)})(d.type,m.type)||this.eu(d.doc,m.doc))),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,f=u!==this.Za;return this.Za=u,a.length!==0||f?{snapshot:new yr(this.query,t.tu,i,a,t.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Au,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),t.modifiedDocuments.forEach((n=>{})),t.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=ct(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return t.forEach((r=>{this.Xa.has(r)||n.push(new rd(r))})),this.Xa.forEach((r=>{t.has(r)||n.push(new nd(r))})),n}cu(t){this.Ya=t.Qs,this.Xa=ct();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return yr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const rl="SyncEngine";class NT{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class OT{constructor(t){this.key=t,this.hu=!1}}class MT{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new qn((l=>vf(l)),ji),this.Iu=new Map,this.Eu=new Set,this.du=new St(J.comparator),this.Au=new Map,this.Ru=new Ka,this.Vu={},this.mu=new Map,this.fu=_r.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function kT(e,t,n=!0){const r=cd(e);let s;const i=r.Tu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await sd(r,t,n,!0),s}async function LT(e,t){const n=cd(e);await sd(n,t,!0,!1)}async function sd(e,t,n,r){const s=await tT(e.localStore,xe(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await FT(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&Xf(e.remoteStore,s),l}async function FT(e,t,n,r,s){e.pu=(m,T,S)=>(async function(U,B,W,G){let $=B.view.ru(W);$.Cs&&($=await yu(U.localStore,B.query,!1).then((({documents:v})=>B.view.ru(v,$))));const H=G&&G.targetChanges.get(B.targetId),rt=G&&G.targetMismatches.get(B.targetId)!=null,_t=B.view.applyChanges($,U.isPrimaryClient,H,rt);return Cu(U,B.targetId,_t.au),_t.snapshot})(e,m,T,S);const i=await yu(e.localStore,t,!0),a=new xT(t,i.Qs),l=a.ru(i.documents),u=Ss.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),f=a.applyChanges(l,e.isPrimaryClient,u);Cu(e,n,f.au);const d=new NT(t,n,a);return e.Tu.set(t,d),e.Iu.has(n)?e.Iu.get(n).push(t):e.Iu.set(n,[t]),f.snapshot}async function UT(e,t,n){const r=nt(e),s=r.Tu.get(t),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!ji(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ia(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Xa(r.remoteStore,s.targetId),la(r,s.targetId)})).catch(vr)):(la(r,s.targetId),await ia(r.localStore,s.targetId,!0))}async function BT(e,t){const n=nt(e),r=n.Tu.get(t),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Xa(n.remoteStore,r.targetId))}async function jT(e,t,n){const r=GT(e);try{const s=await(function(a,l){const u=nt(a),f=At.now(),d=l.reduce(((S,F)=>S.add(F.key)),ct());let m,T;return u.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let F=Ge(),U=ct();return u.Ns.getEntries(S,d).next((B=>{F=B,F.forEach(((W,G)=>{G.isValidDocument()||(U=U.add(W))}))})).next((()=>u.localDocuments.getOverlayedDocuments(S,F))).next((B=>{m=B;const W=[];for(const G of l){const $=Zy(G,m.get(G.key).overlayedDocument);$!=null&&W.push(new Hn(G.key,$,pf($.value.mapValue),qe.exists(!0)))}return u.mutationQueue.addMutationBatch(S,f,W,l)})).next((B=>{T=B;const W=B.applyToLocalDocumentSet(m,U);return u.documentOverlayCache.saveOverlays(S,B.batchId,W)}))})).then((()=>({batchId:T.batchId,changes:Af(m)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,u){let f=a.Vu[a.currentUser.toKey()];f||(f=new St(lt)),f=f.insert(l,u),a.Vu[a.currentUser.toKey()]=f})(r,s.batchId,n),await Ps(r,s.changes),await Gi(r.remoteStore)}catch(s){const i=el(s,"Failed to persist write");n.reject(i)}}async function id(e,t){const n=nt(e);try{const r=await YE(n.localStore,t);t.targetChanges.forEach(((s,i)=>{const a=n.Au.get(i);a&&(gt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?gt(a.hu,14607):s.removedDocuments.size>0&&(gt(a.hu,42227),a.hu=!1))})),await Ps(n,r,t)}catch(r){await vr(r)}}function Su(e,t,n){const r=nt(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const u=nt(a);u.onlineState=l;let f=!1;u.queries.forEach(((d,m)=>{for(const T of m.Sa)T.va(l)&&(f=!0)})),f&&nl(u)})(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function $T(e,t,n){const r=nt(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Au.get(t),i=s&&s.key;if(i){let a=new St(J.comparator);a=a.insert(i,Jt.newNoDocument(i,et.min()));const l=ct().add(i),u=new zi(et.min(),new Map,new St(lt),a,l);await id(r,u),r.du=r.du.remove(i),r.Au.delete(t),sl(r)}else await ia(r.localStore,t,!1).then((()=>la(r,t,n))).catch(vr)}async function qT(e,t){const n=nt(e),r=t.batch.batchId;try{const s=await XE(n.localStore,t);ad(n,r,null),od(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ps(n,s)}catch(s){await vr(s)}}async function HT(e,t,n){const r=nt(e);try{const s=await(function(a,l){const u=nt(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let d;return u.mutationQueue.lookupMutationBatch(f,l).next((m=>(gt(m!==null,37113),d=m.keys(),u.mutationQueue.removeMutationBatch(f,m)))).next((()=>u.mutationQueue.performConsistencyCheck(f))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(f,d,l))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,d))).next((()=>u.localDocuments.getDocuments(f,d)))}))})(r.localStore,t);ad(r,t,n),od(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ps(r,s)}catch(s){await vr(s)}}function od(e,t){(e.mu.get(t)||[]).forEach((n=>{n.resolve()})),e.mu.delete(t)}function ad(e,t,n){const r=nt(e);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function la(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Iu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n);e.Iu.delete(t),e.isPrimaryClient&&e.Ru.jr(t).forEach((r=>{e.Ru.containsKey(r)||ld(e,r)}))}function ld(e,t){e.Eu.delete(t.path.canonicalString());const n=e.du.get(t);n!==null&&(Xa(e.remoteStore,n),e.du=e.du.remove(t),e.Au.delete(n),sl(e))}function Cu(e,t,n){for(const r of n)r instanceof nd?(e.Ru.addReference(r.key,t),zT(e,r)):r instanceof rd?(K(rl,"Document no longer in limbo: "+r.key),e.Ru.removeReference(r.key,t),e.Ru.containsKey(r.key)||ld(e,r.key)):tt(19791,{wu:r})}function zT(e,t){const n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Eu.has(r)||(K(rl,"New document in limbo: "+n),e.Eu.add(r),sl(e))}function sl(e){for(;e.Eu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){const t=e.Eu.values().next().value;e.Eu.delete(t);const n=new J(Rt.fromString(t)),r=e.fu.next();e.Au.set(r,new OT(n)),e.du=e.du.insert(n,r),Xf(e.remoteStore,new cn(xe(ja(n.path)),r,"TargetPurposeLimboResolution",Li.ce))}}async function Ps(e,t,n){const r=nt(e),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,u)=>{a.push(r.pu(u,t,n).then((f=>{if((f||n)&&r.isPrimaryClient){const d=f?!f.fromCache:n?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(f){s.push(f);const d=Ga.As(u.targetId,f);i.push(d)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(u,f){const d=nt(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>V.forEach(f,(T=>V.forEach(T.Es,(S=>d.persistence.referenceDelegate.addReference(m,T.targetId,S))).next((()=>V.forEach(T.ds,(S=>d.persistence.referenceDelegate.removeReference(m,T.targetId,S)))))))))}catch(m){if(!Ir(m))throw m;K(Qa,"Failed to update sequence numbers: "+m)}for(const m of f){const T=m.targetId;if(!m.fromCache){const S=d.Ms.get(T),F=S.snapshotVersion,U=S.withLastLimboFreeSnapshotVersion(F);d.Ms=d.Ms.insert(T,U)}}})(r.localStore,i))}async function KT(e,t){const n=nt(e);if(!n.currentUser.isEqual(t)){K(rl,"User change. New user:",t.toKey());const r=await Kf(n.localStore,t);n.currentUser=t,(function(i,a){i.mu.forEach((l=>{l.forEach((u=>{u.reject(new Q(N.CANCELLED,a))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ps(n,r.Ls)}}function WT(e,t){const n=nt(e),r=n.Au.get(t);if(r&&r.hu)return ct().add(r.key);{let s=ct();const i=n.Iu.get(t);if(!i)return s;for(const a of i){const l=n.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function cd(e){const t=nt(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=id.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=WT.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=$T.bind(null,t),t.Pu.H_=PT.bind(null,t.eventManager),t.Pu.yu=VT.bind(null,t.eventManager),t}function GT(e){const t=nt(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=qT.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=HT.bind(null,t),t}class Ri{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ki(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return QE(this.persistence,new KE,t.initialUser,this.serializer)}Cu(t){return new zf(Wa.mi,this.serializer)}Du(t){return new nT}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ri.provider={build:()=>new Ri};class QT extends Ri{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){gt(this.persistence.referenceDelegate instanceof Ai,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new DE(r,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?oe.withCacheSize(this.cacheSizeBytes):oe.DEFAULT;return new zf((r=>Ai.mi(r,n)),this.serializer)}}class ca{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Su(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KT.bind(null,this.syncEngine),await AT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new RT})()}createDatastore(t){const n=Ki(t.databaseInfo.databaseId),r=(function(i){return new aT(i)})(t.databaseInfo);return(function(i,a,l,u){return new hT(i,a,l,u)})(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return(function(r,s,i,a,l){return new dT(r,s,i,a,l)})(this.localStore,this.datastore,t.asyncQueue,(n=>Su(this.syncEngine,n,0)),(function(){return vu.v()?new vu:new rT})())}createSyncEngine(t,n){return(function(s,i,a,l,u,f,d){const m=new MT(s,i,a,l,u,f);return d&&(m.gu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=nt(n);K(Bn,"RemoteStore shutting down."),r.Ea.add(5),await Cs(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ca.provider={build:()=>new ca};/**
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
 */class XT{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):We("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout((()=>{this.muted||t(n)}),0)}}/**
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
 */const In="FirestoreClient";class YT{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Xt.UNAUTHENTICATED,this.clientId=Oa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{K(In,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(K(In,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=el(n,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Vo(e,t){e.asyncQueue.verifyOperationInProgress(),K(In,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Kf(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Pu(e,t){e.asyncQueue.verifyOperationInProgress();const n=await JT(e);K(In,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((r=>wu(t.remoteStore,r))),e.setAppCheckTokenChangeListener(((r,s)=>wu(t.remoteStore,s))),e._onlineComponents=t}async function JT(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){K(In,"Using user provided OfflineComponentProvider");try{await Vo(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!(function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;dr("Error using user provided cache. Falling back to memory cache: "+n),await Vo(e,new Ri)}}else K(In,"Using default OfflineComponentProvider"),await Vo(e,new QT(void 0));return e._offlineComponents}async function ud(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(K(In,"Using user provided OnlineComponentProvider"),await Pu(e,e._uninitializedComponentsProvider._online)):(K(In,"Using default OnlineComponentProvider"),await Pu(e,new ca))),e._onlineComponents}function ZT(e){return ud(e).then((t=>t.syncEngine))}async function tv(e){const t=await ud(e),n=t.eventManager;return n.onListen=kT.bind(null,t.syncEngine),n.onUnlisten=UT.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=LT.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=BT.bind(null,t.syncEngine),n}function ev(e,t,n={}){const r=new pn;return e.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,u,f){const d=new XT({next:T=>{d.Nu(),a.enqueueAndForget((()=>CT(i,m)));const S=T.docs.has(l);!S&&T.fromCache?f.reject(new Q(N.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&T.fromCache&&u&&u.source==="server"?f.reject(new Q(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(T)},error:T=>f.reject(T)}),m=new DT(ja(l.path),d,{includeMetadataChanges:!0,qa:!0});return ST(i,m)})(await tv(e),e.asyncQueue,t,n,r))),r.promise}/**
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
 */function hd(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Vu=new Map;/**
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
 */const fd="firestore.googleapis.com",Du=!0;class xu{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new Q(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fd,this.ssl=Du}else this.host=t.host,this.ssl=t.ssl??Du;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Hf;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<PE)throw new Q(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}fy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hd(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class il{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Q(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xu(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new ey;switch(r.type){case"firstParty":return new iy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Vu.get(n);r&&(K("ComponentProvider","Removing Datastore"),Vu.delete(n),r.terminate())})(this),Promise.resolve()}}function nv(e,t,n,r={}){e=ms(e,il);const s=Da(t),i=e._getSettings(),a={...i,emulatorOptions:e._getEmulatorOptions()},l=`${t}:${n}`;s&&(Cg(`https://${l}`),xg("Firestore",!0)),i.host!==fd&&i.host!==l&&dr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!fi(u,a)&&(e._setSettings(u),r.mockUserToken)){let f,d;if(typeof r.mockUserToken=="string")f=r.mockUserToken,d=Xt.MOCK_USER;else{f=Pg(r.mockUserToken,e._app?.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new Q(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Xt(m)}e._authCredentials=new ny(new nf(f,d))}}/**
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
 */class ol{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ol(this.firestore,t,this._query)}}class Bt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Is(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Bt(this.firestore,t,this._key)}toJSON(){return{type:Bt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,r){if(bs(n,Bt._jsonSchema))return new Bt(t,r||null,new J(Rt.fromString(n.referencePath)))}}Bt._jsonSchemaVersion="firestore/documentReference/1.0",Bt._jsonSchema={type:Dt("string",Bt._jsonSchemaVersion),referencePath:Dt("string")};class Is extends ol{constructor(t,n,r){super(t,n,ja(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Bt(this.firestore,null,new J(t))}withConverter(t){return new Is(this.firestore,t,this._path)}}function rv(e,t,...n){if(e=di(e),arguments.length===1&&(t=Oa.newId()),hy("doc","path",t),e instanceof il){const r=Rt.fromString(t,...n);return Kc(r),new Bt(e,null,new J(r))}{if(!(e instanceof Bt||e instanceof Is))throw new Q(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Rt.fromString(t,...n));return Kc(r),new Bt(e.firestore,e instanceof Is?e.converter:null,new J(r))}}/**
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
 */const Nu="AsyncQueue";class Ou{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Gf(this,"async_queue_retry"),this._c=()=>{const r=Po();r&&K(Nu,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const n=Po();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=Po();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new pn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Ir(t))throw t;K(Nu,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const n=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,We("INTERNAL UNHANDLED ERROR: ",Mu(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(t,n,r){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const s=tl.createAndSchedule(this,t,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&tt(47125,{Pc:Mu(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function Mu(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}class al extends il{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new Ou,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ou(t),this._firestoreClient=void 0,await t}}}function sv(e,t){const n=typeof e=="object"?e:$_(),r=typeof e=="string"?e:_i,s=L_(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Rg("firestore");i&&nv(s,...i)}return s}function dd(e){if(e._terminated)throw new Q(N.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||iv(e),e._firestoreClient}function iv(e){const t=e._freezeSettings(),n=(function(s,i,a,l){return new wy(s,i,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,hd(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(e._databaseId,e._app?.options.appId||"",e._persistenceKey,t);e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new YT(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(e._componentsProvider))}/**
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
 */class ge{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ge(Kt.fromBase64String(t))}catch(n){throw new Q(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ge(Kt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:ge._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(bs(t,ge._jsonSchema))return ge.fromBase64String(t.bytes)}}ge._jsonSchemaVersion="firestore/bytes/1.0",ge._jsonSchema={type:Dt("string",ge._jsonSchemaVersion),bytes:Dt("string")};/**
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
 */class ll{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new Q(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new zt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class pd{constructor(t){this._methodName=t}}/**
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
 */class Oe{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new Q(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new Q(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return lt(this._lat,t._lat)||lt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Oe._jsonSchemaVersion}}static fromJSON(t){if(bs(t,Oe._jsonSchema))return new Oe(t.latitude,t.longitude)}}Oe._jsonSchemaVersion="firestore/geoPoint/1.0",Oe._jsonSchema={type:Dt("string",Oe._jsonSchemaVersion),latitude:Dt("number"),longitude:Dt("number")};/**
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
 */class Me{constructor(t){this._values=(t||[]).map((n=>n))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Me._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(bs(t,Me._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((n=>typeof n=="number")))return new Me(t.vectorValues);throw new Q(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Me._jsonSchemaVersion="firestore/vectorValue/1.0",Me._jsonSchema={type:Dt("string",Me._jsonSchemaVersion),vectorValues:Dt("object")};/**
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
 */const ov=/^__.*__$/;class av{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Hn(t,this.data,this.fieldMask,n,this.fieldTransforms):new Rs(t,this.data,n,this.fieldTransforms)}}function md(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw tt(40011,{Ac:e})}}class cl{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new cl({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const n=this.path?.child(t),r=this.Vc({path:n,fc:!1});return r.gc(t),r}yc(t){const n=this.path?.child(t),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Si(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((n=>t.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(md(this.Ac)&&ov.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class lv{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Ki(t)}Cc(t,n,r,s=!1){return new cl({Ac:t,methodName:n,Dc:r,path:zt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cv(e){const t=e._freezeSettings(),n=Ki(e._databaseId);return new lv(e._databaseId,!!t.ignoreUndefinedProperties,n)}function uv(e,t,n,r,s,i={}){const a=e.Cc(i.merge||i.mergeFields?2:0,t,n,s);Ed("Data must be an object, but it was:",a,r);const l=_d(r,a);let u,f;if(i.merge)u=new Te(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const m of i.mergeFields){const T=hv(t,m,n);if(!a.contains(T))throw new Q(N.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);dv(d,T)||d.push(T)}u=new Te(d),f=a.fieldTransforms.filter((m=>u.covers(m.field)))}else u=null,f=a.fieldTransforms;return new av(new me(l),u,f)}function gd(e,t){if(yd(e=di(e)))return Ed("Unsupported field value:",t,e),_d(e,t);if(e instanceof pd)return(function(r,s){if(!md(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const l of r){let u=gd(l,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(e,t)}return(function(r,s){if((r=di(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Wy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=At.fromDate(r);return{timestampValue:wi(s.serializer,i)}}if(r instanceof At){const i=new At(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wi(s.serializer,i)}}if(r instanceof Oe)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ge)return{bytesValue:Lf(s.serializer,r._byteString)};if(r instanceof Bt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:za(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Me)return(function(a,l){return{mapValue:{fields:{[ff]:{stringValue:df},[yi]:{arrayValue:{values:a.toArray().map((f=>{if(typeof f!="number")throw l.Sc("VectorValues must only contain numeric values.");return $a(l.serializer,f)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Ma(r)}`)})(e,t)}function _d(e,t){const n={};return of(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$n(e,((r,s)=>{const i=gd(s,t.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function yd(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof At||e instanceof Oe||e instanceof ge||e instanceof Bt||e instanceof pd||e instanceof Me)}function Ed(e,t,n){if(!yd(n)||!rf(n)){const r=Ma(n);throw r==="an object"?t.Sc(e+" a custom object"):t.Sc(e+" "+r)}}function hv(e,t,n){if((t=di(t))instanceof ll)return t._internalPath;if(typeof t=="string")return Td(e,t);throw Si("Field path arguments must be of type string or ",e,!1,void 0,n)}const fv=new RegExp("[~\\*/\\[\\]]");function Td(e,t,n){if(t.search(fv)>=0)throw Si(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ll(...t.split("."))._internalPath}catch{throw Si(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Si(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new Q(N.INVALID_ARGUMENT,l+e+u)}function dv(e,t){return e.some((n=>n.isEqual(t)))}/**
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
 */class vd{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new pv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Id("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pv extends vd{data(){return super.data()}}function Id(e,t){return typeof t=="string"?Td(e,t):t instanceof ll?t._internalPath:t._delegate._internalPath}class mv{convertValue(t,n="none"){switch(Tn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Pt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(En(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw tt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return $n(t,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(t){const n=t.fields?.[yi].arrayValue?.values?.map((r=>Pt(r.doubleValue)));return new Me(n)}convertGeoPoint(t){return new Oe(Pt(t.latitude),Pt(t.longitude))}convertArray(t,n){return(t.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Ui(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_s(t));default:return null}}convertTimestamp(t){const n=yn(t);return new At(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Rt.fromString(t);gt(qf(r),9688,{name:t});const s=new ys(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(n)||We(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function gv(e,t,n){let r;return r=e?e.toFirestore(t):t,r}class Gr{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Fn extends vd{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new ri(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Id("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Fn._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Fn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Fn._jsonSchema={type:Dt("string",Fn._jsonSchemaVersion),bundleSource:Dt("string","DocumentSnapshot"),bundleName:Dt("string"),bundle:Dt("string")};class ri extends Fn{data(t={}){return super.data(t)}}class as{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Gr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach((r=>{t.call(n,new ri(this._firestore,this._userDataWriter,r.key,r,new Gr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const u=new ri(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Gr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const u=new ri(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Gr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:_v(l.type),doc:u,oldIndex:f,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=as._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Oa.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function _v(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return tt(61501,{type:e})}}/**
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
 */function yv(e){e=ms(e,Bt);const t=ms(e.firestore,al);return ev(dd(t),e._key).then((n=>Iv(t,e,n)))}as._jsonSchemaVersion="firestore/querySnapshot/1.0",as._jsonSchema={type:Dt("string",as._jsonSchemaVersion),bundleSource:Dt("string","QuerySnapshot"),bundleName:Dt("string"),bundle:Dt("string")};class Ev extends mv{constructor(t){super(),this.firestore=t}convertBytes(t){return new ge(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function Tv(e,t,n){e=ms(e,Bt);const r=ms(e.firestore,al),s=gv(e.converter,t);return vv(r,[uv(cv(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,qe.none())])}function vv(e,t){return(function(r,s){const i=new pn;return r.asyncQueue.enqueueAndForget((async()=>jT(await ZT(r),s,i))),i.promise})(dd(e),t)}function Iv(e,t,n){const r=n.docs.get(t._key),s=new Ev(e);return new Fn(e,s,t._key,r,new Gr(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){Tr=s})(j_),mi(new ds("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new al(new ry(r.getProvider("auth-internal")),new oy(a,r.getProvider("app-check-internal")),(function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new Q(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ys(f.options.projectId,d)})(a,s),a);return i={useFetchStreams:n,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),cr($c,qc,t),cr($c,qc,"esm2020")})();const wv={apiKey:"AIzaSyA8B3cCIG1-5MnShEbw89WooX0kj7oe6FA",authDomain:"tiragenoel-c25b8.firebaseapp.com",projectId:"tiragenoel-c25b8",storageBucket:"tiragenoel-c25b8.firebasestorage.app",messagingSenderId:"225331032723",appId:"1:225331032723:web:c6e4eb4fade48cf26a1366"},Av=Kh(wv),bv=sv(Av),Rv={class:"page"},Sv={class:"card"},Cv={key:0,class:"center"},Pv={key:1,class:"center"},Vv={key:2,class:"results-container"},Dv={class:"list-section"},xv={class:"list-section"},Nv={__name:"App",setup(e){const t=$s([]),n=$s([]),r=$s(!1),s=$s(!0),i=rv(bv,"results","draw_results");async function a(){try{const u=await yv(i);if(u.exists()){const f=u.data();t.value=f.maj,n.value=f.min,r.value=!0,console.log("Résultats chargés depuis Firestore.")}else r.value=!1,console.log("Pas de résultats trouvés. Le tirage n'a pas été fait.")}catch(u){console.error("Erreur lors du chargement des résultats:",u),r.value=!1}finally{s.value=!1}}async function l(){if(r.value){console.log("Le tirage est déjà fait et bloqué.");return}const u=Cc.map($=>$.name),f=Pc.map($=>$.name);let d=[...u],m=[...f];function T($){for(let H=$.length-1;H>0;H--){const rt=Math.floor(Math.random()*(H+1));[$[H],$[rt]]=[$[rt],$[H]]}}let S=!1,F=0;for(;!S&&F<1e3;)F++,T(d),S=u.every(($,H)=>{const rt=d[H];return!($===rt||Cc.find(v=>v.name===$).exclusions.includes(rt))});if(!S){console.log("Tirage Majeur impossible."),t.value=["Réessayer"];return}let U=!1,B=0;for(;!U&&B<1e3;)B++,T(m),U=f.every(($,H)=>{const rt=m[H];return!($===rt||Pc.find(v=>v.name===$).exclusions.includes(rt))});if(!U){console.log("Tirage Mineur impossible."),n.value=["Réessayer"];return}const W=u.map(($,H)=>`${$} offre à ${d[H]}`),G=f.map(($,H)=>`${$} offre à ${m[H]}`);try{const $={maj:W,min:G,timestamp:new Date().toISOString()};await Tv(i,$),t.value=W,n.value=G,r.value=!0,console.log("Tirage enregistré et bloqué sur Firestore.")}catch($){console.error("Erreur lors de l'enregistrement du tirage:",$)}}return mh(()=>{a()}),(u,f)=>(rn(),sn("div",Rv,[fe("div",Sv,[f[4]||(f[4]=fe("h1",null,"Tirage au sort Noël",-1)),s.value?(rn(),sn("div",Cv,[...f[0]||(f[0]=[fe("p",null,"Vérification du tirage en cours...",-1)])])):r.value?(rn(),sn("div",Vv,[fe("div",Dv,[f[1]||(f[1]=fe("h2",null,"Liste 1",-1)),fe("ul",null,[(rn(!0),sn(Ee,null,sc(t.value,d=>(rn(),sn("li",{key:d,class:"result"},Do(d),1))),128))])]),f[3]||(f[3]=fe("div",{class:"divider"},null,-1)),fe("div",xv,[f[2]||(f[2]=fe("h2",null,"Liste 2",-1)),fe("ul",null,[(rn(!0),sn(Ee,null,sc(n.value,d=>(rn(),sn("li",{key:d,class:"result"},Do(d),1))),128))])])])):(rn(),sn("div",Pv,[fe("button",{onClick:l},"Lancer le tirage")]))])]))}};dg(Nv).mount("#app");
