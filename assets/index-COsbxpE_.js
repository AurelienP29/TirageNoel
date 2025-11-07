(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ve={},Cr=[],xt=()=>{},hf=()=>!1,yo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),fc=n=>n.startsWith("onUpdate:"),ot=Object.assign,dc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},nm=Object.prototype.hasOwnProperty,_e=(n,e)=>nm.call(n,e),ie=Array.isArray,Pr=n=>Eo(n)==="[object Map]",ff=n=>Eo(n)==="[object Set]",ce=n=>typeof n=="function",Ne=n=>typeof n=="string",qn=n=>typeof n=="symbol",be=n=>n!==null&&typeof n=="object",df=n=>(be(n)||ce(n))&&ce(n.then)&&ce(n.catch),pf=Object.prototype.toString,Eo=n=>pf.call(n),rm=n=>Eo(n).slice(8,-1),gf=n=>Eo(n)==="[object Object]",pc=n=>Ne(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,bs=hc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),To=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},sm=/-\w/g,On=To(n=>n.replace(sm,e=>e.slice(1).toUpperCase())),im=/\B([A-Z])/g,ur=To(n=>n.replace(im,"-$1").toLowerCase()),mf=To(n=>n.charAt(0).toUpperCase()+n.slice(1)),ia=To(n=>n?`on${mf(n)}`:""),Rn=(n,e)=>!Object.is(n,e),oa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},_f=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},om=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let au;const Io=()=>au||(au=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gc(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Ne(r)?um(r):gc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ne(n)||be(n))return n}const am=/;(?![^(]*\))/g,cm=/:([^]+)/,lm=/\/\*[^]*?\*\//g;function um(n){const e={};return n.replace(lm,"").split(am).forEach(t=>{if(t){const r=t.split(cm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function mc(n){let e="";if(Ne(n))e=n;else if(ie(n))for(let t=0;t<n.length;t++){const r=mc(n[t]);r&&(e+=r+" ")}else if(be(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const hm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fm=hc(hm);function yf(n){return!!n||n===""}const Ef=n=>!!(n&&n.__v_isRef===!0),Pa=n=>Ne(n)?n:n==null?"":ie(n)||be(n)&&(n.toString===pf||!ce(n.toString))?Ef(n)?Pa(n.value):JSON.stringify(n,Tf,2):String(n),Tf=(n,e)=>Ef(e)?Tf(n,e.value):Pr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[aa(r,i)+" =>"]=s,t),{})}:ff(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>aa(t))}:qn(e)?aa(e):be(e)&&!ie(e)&&!gf(e)?String(e):e,aa=(n,e="")=>{var t;return qn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ct;class dm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ct,!e&&ct&&(this.index=(ct.scopes||(ct.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=ct;try{return ct=this,e()}finally{ct=t}}}on(){++this._on===1&&(this.prevScope=ct,ct=this)}off(){this._on>0&&--this._on===0&&(ct=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function pm(){return ct}let Ie;const ca=new WeakSet;class If{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ct&&ct.active&&ct.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ca.has(this)&&(ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cu(this),Af(this);const e=Ie,t=St;Ie=this,St=!0;try{return this.fn()}finally{Sf(this),Ie=e,St=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ec(e);this.deps=this.depsTail=void 0,cu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Va(this)&&this.run()}get dirty(){return Va(this)}}let vf=0,Rs,Cs;function wf(n,e=!1){if(n.flags|=8,e){n.next=Cs,Cs=n;return}n.next=Rs,Rs=n}function _c(){vf++}function yc(){if(--vf>0)return;if(Cs){let e=Cs;for(Cs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Rs;){let e=Rs;for(Rs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Af(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Sf(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Ec(r),gm(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Va(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(bf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function bf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Bs)||(n.globalVersion=Bs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Va(n))))return;n.flags|=2;const e=n.dep,t=Ie,r=St;Ie=n,St=!0;try{Af(n);const s=n.fn(n._value);(e.version===0||Rn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ie=t,St=r,Sf(n),n.flags&=-3}}function Ec(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Ec(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function gm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let St=!0;const Rf=[];function tn(){Rf.push(St),St=!1}function nn(){const n=Rf.pop();St=n===void 0?!0:n}function cu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ie;Ie=void 0;try{e()}finally{Ie=t}}}let Bs=0;class mm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ie||!St||Ie===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ie)t=this.activeLink=new mm(Ie,this),Ie.deps?(t.prevDep=Ie.depsTail,Ie.depsTail.nextDep=t,Ie.depsTail=t):Ie.deps=Ie.depsTail=t,Cf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Ie.depsTail,t.nextDep=void 0,Ie.depsTail.nextDep=t,Ie.depsTail=t,Ie.deps===t&&(Ie.deps=r)}return t}trigger(e){this.version++,Bs++,this.notify(e)}notify(e){_c();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{yc()}}}function Cf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Cf(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Da=new WeakMap,nr=Symbol(""),ka=Symbol(""),js=Symbol("");function Ye(n,e,t){if(St&&Ie){let r=Da.get(n);r||Da.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Tc),s.map=r,s.key=t),s.track()}}function Yt(n,e,t,r,s,i){const a=Da.get(n);if(!a){Bs++;return}const c=u=>{u&&u.trigger()};if(_c(),e==="clear")a.forEach(c);else{const u=ie(n),h=u&&pc(t);if(u&&t==="length"){const d=Number(r);a.forEach((p,_)=>{(_==="length"||_===js||!qn(_)&&_>=d)&&c(p)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),h&&c(a.get(js)),e){case"add":u?h&&c(a.get("length")):(c(a.get(nr)),Pr(n)&&c(a.get(ka)));break;case"delete":u||(c(a.get(nr)),Pr(n)&&c(a.get(ka)));break;case"set":Pr(n)&&c(a.get(nr));break}}yc()}function Ir(n){const e=me(n);return e===n?e:(Ye(e,"iterate",js),Et(n)?e:e.map(ze))}function vo(n){return Ye(n=me(n),"iterate",js),n}const _m={__proto__:null,[Symbol.iterator](){return la(this,Symbol.iterator,ze)},concat(...n){return Ir(this).concat(...n.map(e=>ie(e)?Ir(e):e))},entries(){return la(this,"entries",n=>(n[1]=ze(n[1]),n))},every(n,e){return Gt(this,"every",n,e,void 0,arguments)},filter(n,e){return Gt(this,"filter",n,e,t=>t.map(ze),arguments)},find(n,e){return Gt(this,"find",n,e,ze,arguments)},findIndex(n,e){return Gt(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Gt(this,"findLast",n,e,ze,arguments)},findLastIndex(n,e){return Gt(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Gt(this,"forEach",n,e,void 0,arguments)},includes(...n){return ua(this,"includes",n)},indexOf(...n){return ua(this,"indexOf",n)},join(n){return Ir(this).join(n)},lastIndexOf(...n){return ua(this,"lastIndexOf",n)},map(n,e){return Gt(this,"map",n,e,void 0,arguments)},pop(){return ys(this,"pop")},push(...n){return ys(this,"push",n)},reduce(n,...e){return lu(this,"reduce",n,e)},reduceRight(n,...e){return lu(this,"reduceRight",n,e)},shift(){return ys(this,"shift")},some(n,e){return Gt(this,"some",n,e,void 0,arguments)},splice(...n){return ys(this,"splice",n)},toReversed(){return Ir(this).toReversed()},toSorted(n){return Ir(this).toSorted(n)},toSpliced(...n){return Ir(this).toSpliced(...n)},unshift(...n){return ys(this,"unshift",n)},values(){return la(this,"values",ze)}};function la(n,e,t){const r=vo(n),s=r[e]();return r!==n&&!Et(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const ym=Array.prototype;function Gt(n,e,t,r,s,i){const a=vo(n),c=a!==n&&!Et(n),u=a[e];if(u!==ym[e]){const p=u.apply(n,i);return c?ze(p):p}let h=t;a!==n&&(c?h=function(p,_){return t.call(this,ze(p),_,n)}:t.length>2&&(h=function(p,_){return t.call(this,p,_,n)}));const d=u.call(a,h,r);return c&&s?s(d):d}function lu(n,e,t,r){const s=vo(n);let i=t;return s!==n&&(Et(n)?t.length>3&&(i=function(a,c,u){return t.call(this,a,c,u,n)}):i=function(a,c,u){return t.call(this,a,ze(c),u,n)}),s[e](i,...r)}function ua(n,e,t){const r=me(n);Ye(r,"iterate",js);const s=r[e](...t);return(s===-1||s===!1)&&Ac(t[0])?(t[0]=me(t[0]),r[e](...t)):s}function ys(n,e,t=[]){tn(),_c();const r=me(n)[e].apply(n,t);return yc(),nn(),r}const Em=hc("__proto__,__v_isRef,__isVue"),Pf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(qn));function Tm(n){qn(n)||(n=String(n));const e=me(this);return Ye(e,"has",n),e.hasOwnProperty(n)}class Vf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?Vm:Of:i?Nf:kf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ie(e);if(!s){let u;if(a&&(u=_m[t]))return u;if(t==="hasOwnProperty")return Tm}const c=Reflect.get(e,t,et(e)?e:r);if((qn(t)?Pf.has(t):Em(t))||(s||Ye(e,"get",t),i))return c;if(et(c)){const u=a&&pc(t)?c:c.value;return s&&be(u)?Oa(u):u}return be(c)?s?Oa(c):vc(c):c}}class Df extends Vf{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const u=xn(i);if(!Et(r)&&!xn(r)&&(i=me(i),r=me(r)),!ie(e)&&et(i)&&!et(r))return u||(i.value=r),!0}const a=ie(e)&&pc(t)?Number(t)<e.length:_e(e,t),c=Reflect.set(e,t,r,et(e)?e:s);return e===me(s)&&(a?Rn(r,i)&&Yt(e,"set",t,r):Yt(e,"add",t,r)),c}deleteProperty(e,t){const r=_e(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&Yt(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!qn(t)||!Pf.has(t))&&Ye(e,"has",t),r}ownKeys(e){return Ye(e,"iterate",ie(e)?"length":nr),Reflect.ownKeys(e)}}class Im extends Vf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const vm=new Df,wm=new Im,Am=new Df(!0);const Na=n=>n,vi=n=>Reflect.getPrototypeOf(n);function Sm(n,e,t){return function(...r){const s=this.__v_raw,i=me(s),a=Pr(i),c=n==="entries"||n===Symbol.iterator&&a,u=n==="keys"&&a,h=s[n](...r),d=t?Na:e?Hi:ze;return!e&&Ye(i,"iterate",u?ka:nr),{next(){const{value:p,done:_}=h.next();return _?{value:p,done:_}:{value:c?[d(p[0]),d(p[1])]:d(p),done:_}},[Symbol.iterator](){return this}}}}function wi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function bm(n,e){const t={get(s){const i=this.__v_raw,a=me(i),c=me(s);n||(Rn(s,c)&&Ye(a,"get",s),Ye(a,"get",c));const{has:u}=vi(a),h=e?Na:n?Hi:ze;if(u.call(a,s))return h(i.get(s));if(u.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&Ye(me(s),"iterate",nr),s.size},has(s){const i=this.__v_raw,a=me(i),c=me(s);return n||(Rn(s,c)&&Ye(a,"has",s),Ye(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,u=me(c),h=e?Na:n?Hi:ze;return!n&&Ye(u,"iterate",nr),c.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return ot(t,n?{add:wi("add"),set:wi("set"),delete:wi("delete"),clear:wi("clear")}:{add(s){!e&&!Et(s)&&!xn(s)&&(s=me(s));const i=me(this);return vi(i).has.call(i,s)||(i.add(s),Yt(i,"add",s,s)),this},set(s,i){!e&&!Et(i)&&!xn(i)&&(i=me(i));const a=me(this),{has:c,get:u}=vi(a);let h=c.call(a,s);h||(s=me(s),h=c.call(a,s));const d=u.call(a,s);return a.set(s,i),h?Rn(i,d)&&Yt(a,"set",s,i):Yt(a,"add",s,i),this},delete(s){const i=me(this),{has:a,get:c}=vi(i);let u=a.call(i,s);u||(s=me(s),u=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return u&&Yt(i,"delete",s,void 0),h},clear(){const s=me(this),i=s.size!==0,a=s.clear();return i&&Yt(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Sm(s,n,e)}),t}function Ic(n,e){const t=bm(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(_e(t,s)&&s in r?t:r,s,i)}const Rm={get:Ic(!1,!1)},Cm={get:Ic(!1,!0)},Pm={get:Ic(!0,!1)};const kf=new WeakMap,Nf=new WeakMap,Of=new WeakMap,Vm=new WeakMap;function Dm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function km(n){return n.__v_skip||!Object.isExtensible(n)?0:Dm(rm(n))}function vc(n){return xn(n)?n:wc(n,!1,vm,Rm,kf)}function Nm(n){return wc(n,!1,Am,Cm,Nf)}function Oa(n){return wc(n,!0,wm,Pm,Of)}function wc(n,e,t,r,s){if(!be(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=km(n);if(i===0)return n;const a=s.get(n);if(a)return a;const c=new Proxy(n,i===2?r:t);return s.set(n,c),c}function Vr(n){return xn(n)?Vr(n.__v_raw):!!(n&&n.__v_isReactive)}function xn(n){return!!(n&&n.__v_isReadonly)}function Et(n){return!!(n&&n.__v_isShallow)}function Ac(n){return n?!!n.__v_raw:!1}function me(n){const e=n&&n.__v_raw;return e?me(e):n}function Om(n){return!_e(n,"__v_skip")&&Object.isExtensible(n)&&_f(n,"__v_skip",!0),n}const ze=n=>be(n)?vc(n):n,Hi=n=>be(n)?Oa(n):n;function et(n){return n?n.__v_isRef===!0:!1}function Es(n){return xm(n,!1)}function xm(n,e){return et(n)?n:new Mm(n,e)}class Mm{constructor(e,t){this.dep=new Tc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:me(e),this._value=t?e:ze(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Et(e)||xn(e);e=r?e:me(e),Rn(e,t)&&(this._rawValue=e,this._value=r?e:ze(e),this.dep.trigger())}}function Lm(n){return et(n)?n.value:n}const Fm={get:(n,e,t)=>e==="__v_raw"?n:Lm(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return et(s)&&!et(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function xf(n){return Vr(n)?n:new Proxy(n,Fm)}class Um{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Tc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Bs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ie!==this)return wf(this,!0),!0}get value(){const e=this.dep.track();return bf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Bm(n,e,t=!1){let r,s;return ce(n)?r=n:(r=n.get,s=n.set),new Um(r,s,t)}const Ai={},zi=new WeakMap;let Zn;function jm(n,e=!1,t=Zn){if(t){let r=zi.get(t);r||zi.set(t,r=[]),r.push(n)}}function $m(n,e,t=ve){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:u}=t,h=W=>s?W:Et(W)||s===!1||s===0?In(W,1):In(W);let d,p,_,R,O=!1,U=!1;if(et(n)?(p=()=>n.value,O=Et(n)):Vr(n)?(p=()=>h(n),O=!0):ie(n)?(U=!0,O=n.some(W=>Vr(W)||Et(W)),p=()=>n.map(W=>{if(et(W))return W.value;if(Vr(W))return h(W);if(ce(W))return u?u(W,2):W()})):ce(n)?e?p=u?()=>u(n,2):n:p=()=>{if(_){tn();try{_()}finally{nn()}}const W=Zn;Zn=d;try{return u?u(n,3,[R]):n(R)}finally{Zn=W}}:p=xt,e&&s){const W=p,G=s===!0?1/0:s;p=()=>In(W(),G)}const B=pm(),H=()=>{d.stop(),B&&B.active&&dc(B.effects,d)};if(i&&e){const W=e;e=(...G)=>{W(...G),H()}}let K=U?new Array(n.length).fill(Ai):Ai;const J=W=>{if(!(!(d.flags&1)||!d.dirty&&!W))if(e){const G=d.run();if(s||O||(U?G.some((oe,I)=>Rn(oe,K[I])):Rn(G,K))){_&&_();const oe=Zn;Zn=d;try{const I=[G,K===Ai?void 0:U&&K[0]===Ai?[]:K,R];K=G,u?u(e,3,I):e(...I)}finally{Zn=oe}}}else d.run()};return c&&c(J),d=new If(p),d.scheduler=a?()=>a(J,!1):J,R=W=>jm(W,!1,d),_=d.onStop=()=>{const W=zi.get(d);if(W){if(u)u(W,4);else for(const G of W)G();zi.delete(d)}},e?r?J(!0):K=d.run():a?a(J.bind(null,!0),!0):d.run(),H.pause=d.pause.bind(d),H.resume=d.resume.bind(d),H.stop=H,H}function In(n,e=1/0,t){if(e<=0||!be(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,et(n))In(n.value,e,t);else if(ie(n))for(let r=0;r<n.length;r++)In(n[r],e,t);else if(ff(n)||Pr(n))n.forEach(r=>{In(r,e,t)});else if(gf(n)){for(const r in n)In(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&In(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ei(n,e,t,r){try{return r?n(...r):n()}catch(s){wo(s,e,t)}}function qt(n,e,t,r){if(ce(n)){const s=ei(n,e,t,r);return s&&df(s)&&s.catch(i=>{wo(i,e,t)}),s}if(ie(n)){const s=[];for(let i=0;i<n.length;i++)s.push(qt(n[i],e,t,r));return s}}function wo(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ve;if(e){let c=e.parent;const u=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,u,h)===!1)return}c=c.parent}if(i){tn(),ei(i,null,10,[n,u,h]),nn();return}}qm(n,t,s,r,a)}function qm(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const st=[];let Dt=-1;const Dr=[];let En=null,vr=0;const Mf=Promise.resolve();let Wi=null;function Hm(n){const e=Wi||Mf;return n?e.then(this?n.bind(this):n):e}function zm(n){let e=Dt+1,t=st.length;for(;e<t;){const r=e+t>>>1,s=st[r],i=$s(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function Sc(n){if(!(n.flags&1)){const e=$s(n),t=st[st.length-1];!t||!(n.flags&2)&&e>=$s(t)?st.push(n):st.splice(zm(e),0,n),n.flags|=1,Lf()}}function Lf(){Wi||(Wi=Mf.then(Uf))}function Wm(n){ie(n)?Dr.push(...n):En&&n.id===-1?En.splice(vr+1,0,n):n.flags&1||(Dr.push(n),n.flags|=1),Lf()}function uu(n,e,t=Dt+1){for(;t<st.length;t++){const r=st[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;st.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ff(n){if(Dr.length){const e=[...new Set(Dr)].sort((t,r)=>$s(t)-$s(r));if(Dr.length=0,En){En.push(...e);return}for(En=e,vr=0;vr<En.length;vr++){const t=En[vr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}En=null,vr=0}}const $s=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Uf(n){try{for(Dt=0;Dt<st.length;Dt++){const e=st[Dt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ei(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Dt<st.length;Dt++){const e=st[Dt];e&&(e.flags&=-2)}Dt=-1,st.length=0,Ff(),Wi=null,(st.length||Dr.length)&&Uf()}}let Ot=null,Bf=null;function Ki(n){const e=Ot;return Ot=n,Bf=n&&n.type.__scopeId||null,e}function Km(n,e=Ot,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Iu(-1);const i=Ki(e);let a;try{a=n(...s)}finally{Ki(i),r._d&&Iu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Xn(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let u=c.dir[r];u&&(tn(),qt(u,t,8,[n.el,c,n,e]),nn())}}const Gm=Symbol("_vte"),Qm=n=>n.__isTeleport,Jm=Symbol("_leaveCb");function bc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,bc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function jf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Gi=new WeakMap;function Ps(n,e,t,r,s=!1){if(ie(n)){n.forEach((O,U)=>Ps(O,e&&(ie(e)?e[U]:e),t,r,s));return}if(Vs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ps(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?Vc(r.component):r.el,a=s?null:i,{i:c,r:u}=n,h=e&&e.r,d=c.refs===ve?c.refs={}:c.refs,p=c.setupState,_=me(p),R=p===ve?hf:O=>_e(_,O);if(h!=null&&h!==u){if(hu(e),Ne(h))d[h]=null,R(h)&&(p[h]=null);else if(et(h)){h.value=null;const O=e;O.k&&(d[O.k]=null)}}if(ce(u))ei(u,c,12,[a,d]);else{const O=Ne(u),U=et(u);if(O||U){const B=()=>{if(n.f){const H=O?R(u)?p[u]:d[u]:u.value;if(s)ie(H)&&dc(H,i);else if(ie(H))H.includes(i)||H.push(i);else if(O)d[u]=[i],R(u)&&(p[u]=d[u]);else{const K=[i];u.value=K,n.k&&(d[n.k]=K)}}else O?(d[u]=a,R(u)&&(p[u]=a)):U&&(u.value=a,n.k&&(d[n.k]=a))};if(a){const H=()=>{B(),Gi.delete(n)};H.id=-1,Gi.set(n,H),pt(H,t)}else hu(n),B()}}}function hu(n){const e=Gi.get(n);e&&(e.flags|=8,Gi.delete(n))}Io().requestIdleCallback;Io().cancelIdleCallback;const Vs=n=>!!n.type.__asyncLoader,$f=n=>n.type.__isKeepAlive;function Xm(n,e){qf(n,"a",e)}function Ym(n,e){qf(n,"da",e)}function qf(n,e,t=it){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ao(e,r,t),t){let s=t.parent;for(;s&&s.parent;)$f(s.parent.vnode)&&Zm(r,e,t,s),s=s.parent}}function Zm(n,e,t,r){const s=Ao(e,n,r,!0);zf(()=>{dc(r[e],s)},t)}function Ao(n,e,t=it,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{tn();const c=ti(t),u=qt(e,t,n,a);return c(),nn(),u});return r?s.unshift(i):s.push(i),i}}const ln=n=>(e,t=it)=>{(!Hs||n==="sp")&&Ao(n,(...r)=>e(...r),t)},e_=ln("bm"),Hf=ln("m"),t_=ln("bu"),n_=ln("u"),r_=ln("bum"),zf=ln("um"),s_=ln("sp"),i_=ln("rtg"),o_=ln("rtc");function a_(n,e=it){Ao("ec",n,e)}const c_=Symbol.for("v-ndc");function fu(n,e,t,r){let s;const i=t,a=ie(n);if(a||Ne(n)){const c=a&&Vr(n);let u=!1,h=!1;c&&(u=!Et(n),h=xn(n),n=vo(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(u?h?Hi(ze(n[d])):ze(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=e(c+1,c,void 0,i)}else if(be(n))if(n[Symbol.iterator])s=Array.from(n,(c,u)=>e(c,u,void 0,i));else{const c=Object.keys(n);s=new Array(c.length);for(let u=0,h=c.length;u<h;u++){const d=c[u];s[u]=e(n[d],d,u,i)}}else s=[];return s}const xa=n=>n?hd(n)?Vc(n):xa(n.parent):null,Ds=ot(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>xa(n.parent),$root:n=>xa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Kf(n),$forceUpdate:n=>n.f||(n.f=()=>{Sc(n.update)}),$nextTick:n=>n.n||(n.n=Hm.bind(n.proxy)),$watch:n=>V_.bind(n)}),ha=(n,e)=>n!==ve&&!n.__isScriptSetup&&_e(n,e),l_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:u}=n;let h;if(e[0]!=="$"){const R=a[e];if(R!==void 0)switch(R){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(ha(r,e))return a[e]=1,r[e];if(s!==ve&&_e(s,e))return a[e]=2,s[e];if((h=n.propsOptions[0])&&_e(h,e))return a[e]=3,i[e];if(t!==ve&&_e(t,e))return a[e]=4,t[e];Ma&&(a[e]=0)}}const d=Ds[e];let p,_;if(d)return e==="$attrs"&&Ye(n.attrs,"get",""),d(n);if((p=c.__cssModules)&&(p=p[e]))return p;if(t!==ve&&_e(t,e))return a[e]=4,t[e];if(_=u.config.globalProperties,_e(_,e))return _[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return ha(s,e)?(s[e]=t,!0):r!==ve&&_e(r,e)?(r[e]=t,!0):_e(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i,type:a}},c){let u,h;return!!(t[c]||n!==ve&&c[0]!=="$"&&_e(n,c)||ha(e,c)||(u=i[0])&&_e(u,c)||_e(r,c)||_e(Ds,c)||_e(s.config.globalProperties,c)||(h=a.__cssModules)&&h[c])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:_e(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function du(n){return ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ma=!0;function u_(n){const e=Kf(n),t=n.proxy,r=n.ctx;Ma=!1,e.beforeCreate&&pu(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:u,inject:h,created:d,beforeMount:p,mounted:_,beforeUpdate:R,updated:O,activated:U,deactivated:B,beforeDestroy:H,beforeUnmount:K,destroyed:J,unmounted:W,render:G,renderTracked:oe,renderTriggered:I,errorCaptured:m,serverPrefetch:T,expose:A,inheritAttrs:v,components:S,directives:y,filters:Le}=e;if(h&&h_(h,r,null),a)for(const we in a){const ge=a[we];ce(ge)&&(r[we]=ge.bind(t))}if(s){const we=s.call(t,t);be(we)&&(n.data=vc(we))}if(Ma=!0,i)for(const we in i){const ge=i[we],mt=ce(ge)?ge.bind(t,t):ce(ge.get)?ge.get.bind(t,t):xt,gr=!ce(ge)&&ce(ge.set)?ge.set.bind(t):xt,Rt=ey({get:mt,set:gr});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:ut=>Rt.value=ut})}if(c)for(const we in c)Wf(c[we],r,t,we);if(u){const we=ce(u)?u.call(t):u;Reflect.ownKeys(we).forEach(ge=>{__(ge,we[ge])})}d&&pu(d,n,"c");function $e(we,ge){ie(ge)?ge.forEach(mt=>we(mt.bind(t))):ge&&we(ge.bind(t))}if($e(e_,p),$e(Hf,_),$e(t_,R),$e(n_,O),$e(Xm,U),$e(Ym,B),$e(a_,m),$e(o_,oe),$e(i_,I),$e(r_,K),$e(zf,W),$e(s_,T),ie(A))if(A.length){const we=n.exposed||(n.exposed={});A.forEach(ge=>{Object.defineProperty(we,ge,{get:()=>t[ge],set:mt=>t[ge]=mt,enumerable:!0})})}else n.exposed||(n.exposed={});G&&n.render===xt&&(n.render=G),v!=null&&(n.inheritAttrs=v),S&&(n.components=S),y&&(n.directives=y),T&&jf(n)}function h_(n,e,t=xt){ie(n)&&(n=La(n));for(const r in n){const s=n[r];let i;be(s)?"default"in s?i=Di(s.from||r,s.default,!0):i=Di(s.from||r):i=Di(s),et(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function pu(n,e,t){qt(ie(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Wf(n,e,t,r){let s=r.includes(".")?od(t,r):()=>t[r];if(Ne(n)){const i=e[n];ce(i)&&da(s,i)}else if(ce(n))da(s,n.bind(t));else if(be(n))if(ie(n))n.forEach(i=>Wf(i,e,t,r));else{const i=ce(n.handler)?n.handler.bind(t):e[n.handler];ce(i)&&da(s,i,n)}}function Kf(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let u;return c?u=c:!s.length&&!t&&!r?u=e:(u={},s.length&&s.forEach(h=>Qi(u,h,a,!0)),Qi(u,e,a)),be(e)&&i.set(e,u),u}function Qi(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Qi(n,i,t,!0),s&&s.forEach(a=>Qi(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=f_[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const f_={data:gu,props:mu,emits:mu,methods:Is,computed:Is,beforeCreate:rt,created:rt,beforeMount:rt,mounted:rt,beforeUpdate:rt,updated:rt,beforeDestroy:rt,beforeUnmount:rt,destroyed:rt,unmounted:rt,activated:rt,deactivated:rt,errorCaptured:rt,serverPrefetch:rt,components:Is,directives:Is,watch:p_,provide:gu,inject:d_};function gu(n,e){return e?n?function(){return ot(ce(n)?n.call(this,this):n,ce(e)?e.call(this,this):e)}:e:n}function d_(n,e){return Is(La(n),La(e))}function La(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function rt(n,e){return n?[...new Set([].concat(n,e))]:e}function Is(n,e){return n?ot(Object.create(null),n,e):e}function mu(n,e){return n?ie(n)&&ie(e)?[...new Set([...n,...e])]:ot(Object.create(null),du(n),du(e??{})):e}function p_(n,e){if(!n)return e;if(!e)return n;const t=ot(Object.create(null),n);for(const r in e)t[r]=rt(n[r],e[r]);return t}function Gf(){return{app:null,config:{isNativeTag:hf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let g_=0;function m_(n,e){return function(r,s=null){ce(r)||(r=ot({},r)),s!=null&&!be(s)&&(s=null);const i=Gf(),a=new WeakSet,c=[];let u=!1;const h=i.app={_uid:g_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ty,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ce(d.install)?(a.add(d),d.install(h,...p)):ce(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,_){if(!u){const R=h._ceVNode||rr(r,s);return R.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),n(R,d,_),u=!0,h._container=d,d.__vue_app__=h,Vc(R.component)}},onUnmount(d){c.push(d)},unmount(){u&&(qt(c,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=kr;kr=h;try{return d()}finally{kr=p}}};return h}}let kr=null;function __(n,e){if(it){let t=it.provides;const r=it.parent&&it.parent.provides;r===t&&(t=it.provides=Object.create(r)),t[n]=e}}function Di(n,e,t=!1){const r=G_();if(r||kr){let s=kr?kr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ce(e)?e.call(r&&r.proxy):e}}const Qf={},Jf=()=>Object.create(Qf),Xf=n=>Object.getPrototypeOf(n)===Qf;function y_(n,e,t,r=!1){const s={},i=Jf();n.propsDefaults=Object.create(null),Yf(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:Nm(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function E_(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=me(s),[u]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let _=d[p];if(So(n.emitsOptions,_))continue;const R=e[_];if(u)if(_e(i,_))R!==i[_]&&(i[_]=R,h=!0);else{const O=On(_);s[O]=Fa(u,c,O,R,n,!1)}else R!==i[_]&&(i[_]=R,h=!0)}}}else{Yf(n,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!_e(e,p)&&((d=ur(p))===p||!_e(e,d)))&&(u?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=Fa(u,c,p,void 0,n,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!_e(e,p))&&(delete i[p],h=!0)}h&&Yt(n.attrs,"set","")}function Yf(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let u in e){if(bs(u))continue;const h=e[u];let d;s&&_e(s,d=On(u))?!i||!i.includes(d)?t[d]=h:(c||(c={}))[d]=h:So(n.emitsOptions,u)||(!(u in r)||h!==r[u])&&(r[u]=h,a=!0)}if(i){const u=me(t),h=c||ve;for(let d=0;d<i.length;d++){const p=i[d];t[p]=Fa(s,u,p,h[p],n,!_e(h,p))}}return a}function Fa(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=_e(a,"default");if(c&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&ce(u)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=ti(s);r=h[t]=u.call(null,e),d()}}else r=u;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===ur(t))&&(r=!0))}return r}const T_=new WeakMap;function Zf(n,e,t=!1){const r=t?T_:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let u=!1;if(!ce(n)){const d=p=>{u=!0;const[_,R]=Zf(p,e,!0);ot(a,_),R&&c.push(...R)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!u)return be(n)&&r.set(n,Cr),Cr;if(ie(i))for(let d=0;d<i.length;d++){const p=On(i[d]);_u(p)&&(a[p]=ve)}else if(i)for(const d in i){const p=On(d);if(_u(p)){const _=i[d],R=a[p]=ie(_)||ce(_)?{type:_}:ot({},_),O=R.type;let U=!1,B=!0;if(ie(O))for(let H=0;H<O.length;++H){const K=O[H],J=ce(K)&&K.name;if(J==="Boolean"){U=!0;break}else J==="String"&&(B=!1)}else U=ce(O)&&O.name==="Boolean";R[0]=U,R[1]=B,(U||_e(R,"default"))&&c.push(p)}}const h=[a,c];return be(n)&&r.set(n,h),h}function _u(n){return n[0]!=="$"&&!bs(n)}const Rc=n=>n==="_"||n==="_ctx"||n==="$stable",Cc=n=>ie(n)?n.map(Nt):[Nt(n)],I_=(n,e,t)=>{if(e._n)return e;const r=Km((...s)=>Cc(e(...s)),t);return r._c=!1,r},ed=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Rc(s))continue;const i=n[s];if(ce(i))e[s]=I_(s,i,r);else if(i!=null){const a=Cc(i);e[s]=()=>a}}},td=(n,e)=>{const t=Cc(e);n.slots.default=()=>t},nd=(n,e,t)=>{for(const r in e)(t||!Rc(r))&&(n[r]=e[r])},v_=(n,e,t)=>{const r=n.slots=Jf();if(n.vnode.shapeFlag&32){const s=e._;s?(nd(r,e,t),t&&_f(r,"_",s,!0)):ed(e,r)}else e&&td(n,e)},w_=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=ve;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:nd(s,e,t):(i=!e.$stable,ed(e,s)),a=e}else e&&(td(n,e),a={default:1});if(i)for(const c in s)!Rc(c)&&a[c]==null&&delete s[c]},pt=F_;function A_(n){return S_(n)}function S_(n,e){const t=Io();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:u,setText:h,setElementText:d,parentNode:p,nextSibling:_,setScopeId:R=xt,insertStaticContent:O}=n,U=(E,w,P,F=null,D=null,k=null,$=void 0,L=null,x=!!w.dynamicChildren)=>{if(E===w)return;E&&!Ts(E,w)&&(F=hn(E),ut(E,D,k,!0),E=null),w.patchFlag===-2&&(x=!1,w.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:q}=w;switch(M){case bo:B(E,w,P,F);break;case Lr:H(E,w,P,F);break;case pa:E==null&&K(w,P,F,$);break;case It:S(E,w,P,F,D,k,$,L,x);break;default:q&1?G(E,w,P,F,D,k,$,L,x):q&6?y(E,w,P,F,D,k,$,L,x):(q&64||q&128)&&M.process(E,w,P,F,D,k,$,L,x,zn)}Y!=null&&D?Ps(Y,E&&E.ref,k,w||E,!w):Y==null&&E&&E.ref!=null&&Ps(E.ref,null,k,E,!0)},B=(E,w,P,F)=>{if(E==null)r(w.el=c(w.children),P,F);else{const D=w.el=E.el;w.children!==E.children&&h(D,w.children)}},H=(E,w,P,F)=>{E==null?r(w.el=u(w.children||""),P,F):w.el=E.el},K=(E,w,P,F)=>{[E.el,E.anchor]=O(E.children,w,P,F,E.el,E.anchor)},J=({el:E,anchor:w},P,F)=>{let D;for(;E&&E!==w;)D=_(E),r(E,P,F),E=D;r(w,P,F)},W=({el:E,anchor:w})=>{let P;for(;E&&E!==w;)P=_(E),s(E),E=P;s(w)},G=(E,w,P,F,D,k,$,L,x)=>{w.type==="svg"?$="svg":w.type==="math"&&($="mathml"),E==null?oe(w,P,F,D,k,$,L,x):T(E,w,D,k,$,L,x)},oe=(E,w,P,F,D,k,$,L)=>{let x,M;const{props:Y,shapeFlag:q,transition:X,dirs:ee}=E;if(x=E.el=a(E.type,k,Y&&Y.is,Y),q&8?d(x,E.children):q&16&&m(E.children,x,null,F,D,fa(E,k),$,L),ee&&Xn(E,null,F,"created"),I(x,E,E.scopeId,$,F),Y){for(const Ee in Y)Ee!=="value"&&!bs(Ee)&&i(x,Ee,null,Y[Ee],k,F);"value"in Y&&i(x,"value",null,Y.value,k),(M=Y.onVnodeBeforeMount)&&Vt(M,F,E)}ee&&Xn(E,null,F,"beforeMount");const le=b_(D,X);le&&X.beforeEnter(x),r(x,w,P),((M=Y&&Y.onVnodeMounted)||le||ee)&&pt(()=>{M&&Vt(M,F,E),le&&X.enter(x),ee&&Xn(E,null,F,"mounted")},D)},I=(E,w,P,F,D)=>{if(P&&R(E,P),F)for(let k=0;k<F.length;k++)R(E,F[k]);if(D){let k=D.subTree;if(w===k||cd(k.type)&&(k.ssContent===w||k.ssFallback===w)){const $=D.vnode;I(E,$,$.scopeId,$.slotScopeIds,D.parent)}}},m=(E,w,P,F,D,k,$,L,x=0)=>{for(let M=x;M<E.length;M++){const Y=E[M]=L?Tn(E[M]):Nt(E[M]);U(null,Y,w,P,F,D,k,$,L)}},T=(E,w,P,F,D,k,$)=>{const L=w.el=E.el;let{patchFlag:x,dynamicChildren:M,dirs:Y}=w;x|=E.patchFlag&16;const q=E.props||ve,X=w.props||ve;let ee;if(P&&Yn(P,!1),(ee=X.onVnodeBeforeUpdate)&&Vt(ee,P,w,E),Y&&Xn(w,E,P,"beforeUpdate"),P&&Yn(P,!0),(q.innerHTML&&X.innerHTML==null||q.textContent&&X.textContent==null)&&d(L,""),M?A(E.dynamicChildren,M,L,P,F,fa(w,D),k):$||ge(E,w,L,null,P,F,fa(w,D),k,!1),x>0){if(x&16)v(L,q,X,P,D);else if(x&2&&q.class!==X.class&&i(L,"class",null,X.class,D),x&4&&i(L,"style",q.style,X.style,D),x&8){const le=w.dynamicProps;for(let Ee=0;Ee<le.length;Ee++){const pe=le[Ee],Ge=q[pe],Qe=X[pe];(Qe!==Ge||pe==="value")&&i(L,pe,Ge,Qe,D,P)}}x&1&&E.children!==w.children&&d(L,w.children)}else!$&&M==null&&v(L,q,X,P,D);((ee=X.onVnodeUpdated)||Y)&&pt(()=>{ee&&Vt(ee,P,w,E),Y&&Xn(w,E,P,"updated")},F)},A=(E,w,P,F,D,k,$)=>{for(let L=0;L<w.length;L++){const x=E[L],M=w[L],Y=x.el&&(x.type===It||!Ts(x,M)||x.shapeFlag&198)?p(x.el):P;U(x,M,Y,null,F,D,k,$,!0)}},v=(E,w,P,F,D)=>{if(w!==P){if(w!==ve)for(const k in w)!bs(k)&&!(k in P)&&i(E,k,w[k],null,D,F);for(const k in P){if(bs(k))continue;const $=P[k],L=w[k];$!==L&&k!=="value"&&i(E,k,L,$,D,F)}"value"in P&&i(E,"value",w.value,P.value,D)}},S=(E,w,P,F,D,k,$,L,x)=>{const M=w.el=E?E.el:c(""),Y=w.anchor=E?E.anchor:c("");let{patchFlag:q,dynamicChildren:X,slotScopeIds:ee}=w;ee&&(L=L?L.concat(ee):ee),E==null?(r(M,P,F),r(Y,P,F),m(w.children||[],P,Y,D,k,$,L,x)):q>0&&q&64&&X&&E.dynamicChildren?(A(E.dynamicChildren,X,P,D,k,$,L),(w.key!=null||D&&w===D.subTree)&&rd(E,w,!0)):ge(E,w,P,Y,D,k,$,L,x)},y=(E,w,P,F,D,k,$,L,x)=>{w.slotScopeIds=L,E==null?w.shapeFlag&512?D.ctx.activate(w,P,F,$,x):Le(w,P,F,D,k,$,x):bt(E,w,x)},Le=(E,w,P,F,D,k,$)=>{const L=E.component=K_(E,F,D);if($f(E)&&(L.ctx.renderer=zn),Q_(L,!1,$),L.asyncDep){if(D&&D.registerDep(L,$e,$),!E.el){const x=L.subTree=rr(Lr);H(null,x,w,P),E.placeholder=x.el}}else $e(L,E,w,P,D,k,$)},bt=(E,w,P)=>{const F=w.component=E.component;if(M_(E,w,P))if(F.asyncDep&&!F.asyncResolved){we(F,w,P);return}else F.next=w,F.update();else w.el=E.el,F.vnode=w},$e=(E,w,P,F,D,k,$)=>{const L=()=>{if(E.isMounted){let{next:q,bu:X,u:ee,parent:le,vnode:Ee}=E;{const ft=sd(E);if(ft){q&&(q.el=Ee.el,we(E,q,$)),ft.asyncDep.then(()=>{E.isUnmounted||L()});return}}let pe=q,Ge;Yn(E,!1),q?(q.el=Ee.el,we(E,q,$)):q=Ee,X&&oa(X),(Ge=q.props&&q.props.onVnodeBeforeUpdate)&&Vt(Ge,le,q,Ee),Yn(E,!0);const Qe=Eu(E),ht=E.subTree;E.subTree=Qe,U(ht,Qe,p(ht.el),hn(ht),E,D,k),q.el=Qe.el,pe===null&&L_(E,Qe.el),ee&&pt(ee,D),(Ge=q.props&&q.props.onVnodeUpdated)&&pt(()=>Vt(Ge,le,q,Ee),D)}else{let q;const{el:X,props:ee}=w,{bm:le,m:Ee,parent:pe,root:Ge,type:Qe}=E,ht=Vs(w);Yn(E,!1),le&&oa(le),!ht&&(q=ee&&ee.onVnodeBeforeMount)&&Vt(q,pe,w),Yn(E,!0);{Ge.ce&&Ge.ce._def.shadowRoot!==!1&&Ge.ce._injectChildStyle(Qe);const ft=E.subTree=Eu(E);U(null,ft,P,F,E,D,k),w.el=ft.el}if(Ee&&pt(Ee,D),!ht&&(q=ee&&ee.onVnodeMounted)){const ft=w;pt(()=>Vt(q,pe,ft),D)}(w.shapeFlag&256||pe&&Vs(pe.vnode)&&pe.vnode.shapeFlag&256)&&E.a&&pt(E.a,D),E.isMounted=!0,w=P=F=null}};E.scope.on();const x=E.effect=new If(L);E.scope.off();const M=E.update=x.run.bind(x),Y=E.job=x.runIfDirty.bind(x);Y.i=E,Y.id=E.uid,x.scheduler=()=>Sc(Y),Yn(E,!0),M()},we=(E,w,P)=>{w.component=E;const F=E.vnode.props;E.vnode=w,E.next=null,E_(E,w.props,F,P),w_(E,w.children,P),tn(),uu(E),nn()},ge=(E,w,P,F,D,k,$,L,x=!1)=>{const M=E&&E.children,Y=E?E.shapeFlag:0,q=w.children,{patchFlag:X,shapeFlag:ee}=w;if(X>0){if(X&128){gr(M,q,P,F,D,k,$,L,x);return}else if(X&256){mt(M,q,P,F,D,k,$,L,x);return}}ee&8?(Y&16&&Kt(M,D,k),q!==M&&d(P,q)):Y&16?ee&16?gr(M,q,P,F,D,k,$,L,x):Kt(M,D,k,!0):(Y&8&&d(P,""),ee&16&&m(q,P,F,D,k,$,L,x))},mt=(E,w,P,F,D,k,$,L,x)=>{E=E||Cr,w=w||Cr;const M=E.length,Y=w.length,q=Math.min(M,Y);let X;for(X=0;X<q;X++){const ee=w[X]=x?Tn(w[X]):Nt(w[X]);U(E[X],ee,P,null,D,k,$,L,x)}M>Y?Kt(E,D,k,!0,!1,q):m(w,P,F,D,k,$,L,x,q)},gr=(E,w,P,F,D,k,$,L,x)=>{let M=0;const Y=w.length;let q=E.length-1,X=Y-1;for(;M<=q&&M<=X;){const ee=E[M],le=w[M]=x?Tn(w[M]):Nt(w[M]);if(Ts(ee,le))U(ee,le,P,null,D,k,$,L,x);else break;M++}for(;M<=q&&M<=X;){const ee=E[q],le=w[X]=x?Tn(w[X]):Nt(w[X]);if(Ts(ee,le))U(ee,le,P,null,D,k,$,L,x);else break;q--,X--}if(M>q){if(M<=X){const ee=X+1,le=ee<Y?w[ee].el:F;for(;M<=X;)U(null,w[M]=x?Tn(w[M]):Nt(w[M]),P,le,D,k,$,L,x),M++}}else if(M>X)for(;M<=q;)ut(E[M],D,k,!0),M++;else{const ee=M,le=M,Ee=new Map;for(M=le;M<=X;M++){const qe=w[M]=x?Tn(w[M]):Nt(w[M]);qe.key!=null&&Ee.set(qe.key,M)}let pe,Ge=0;const Qe=X-le+1;let ht=!1,ft=0;const Tt=new Array(Qe);for(M=0;M<Qe;M++)Tt[M]=0;for(M=ee;M<=q;M++){const qe=E[M];if(Ge>=Qe){ut(qe,D,k,!0);continue}let Fe;if(qe.key!=null)Fe=Ee.get(qe.key);else for(pe=le;pe<=X;pe++)if(Tt[pe-le]===0&&Ts(qe,w[pe])){Fe=pe;break}Fe===void 0?ut(qe,D,k,!0):(Tt[Fe-le]=M+1,Fe>=ft?ft=Fe:ht=!0,U(qe,w[Fe],P,null,D,k,$,L,x),Ge++)}const _r=ht?R_(Tt):Cr;for(pe=_r.length-1,M=Qe-1;M>=0;M--){const qe=le+M,Fe=w[qe],rs=w[qe+1],Wn=qe+1<Y?rs.el||rs.placeholder:F;Tt[M]===0?U(null,Fe,P,Wn,D,k,$,L,x):ht&&(pe<0||M!==_r[pe]?Rt(Fe,P,Wn,2):pe--)}}},Rt=(E,w,P,F,D=null)=>{const{el:k,type:$,transition:L,children:x,shapeFlag:M}=E;if(M&6){Rt(E.component.subTree,w,P,F);return}if(M&128){E.suspense.move(w,P,F);return}if(M&64){$.move(E,w,P,zn);return}if($===It){r(k,w,P);for(let q=0;q<x.length;q++)Rt(x[q],w,P,F);r(E.anchor,w,P);return}if($===pa){J(E,w,P);return}if(F!==2&&M&1&&L)if(F===0)L.beforeEnter(k),r(k,w,P),pt(()=>L.enter(k),D);else{const{leave:q,delayLeave:X,afterLeave:ee}=L,le=()=>{E.ctx.isUnmounted?s(k):r(k,w,P)},Ee=()=>{k._isLeaving&&k[Jm](!0),q(k,()=>{le(),ee&&ee()})};X?X(k,le,Ee):Ee()}else r(k,w,P)},ut=(E,w,P,F=!1,D=!1)=>{const{type:k,props:$,ref:L,children:x,dynamicChildren:M,shapeFlag:Y,patchFlag:q,dirs:X,cacheIndex:ee}=E;if(q===-2&&(D=!1),L!=null&&(tn(),Ps(L,null,P,E,!0),nn()),ee!=null&&(w.renderCache[ee]=void 0),Y&256){w.ctx.deactivate(E);return}const le=Y&1&&X,Ee=!Vs(E);let pe;if(Ee&&(pe=$&&$.onVnodeBeforeUnmount)&&Vt(pe,w,E),Y&6)ts(E.component,P,F);else{if(Y&128){E.suspense.unmount(P,F);return}le&&Xn(E,null,w,"beforeUnmount"),Y&64?E.type.remove(E,w,P,zn,F):M&&!M.hasOnce&&(k!==It||q>0&&q&64)?Kt(M,w,P,!1,!0):(k===It&&q&384||!D&&Y&16)&&Kt(x,w,P),F&&es(E)}(Ee&&(pe=$&&$.onVnodeUnmounted)||le)&&pt(()=>{pe&&Vt(pe,w,E),le&&Xn(E,null,w,"unmounted")},P)},es=E=>{const{type:w,el:P,anchor:F,transition:D}=E;if(w===It){mr(P,F);return}if(w===pa){W(E);return}const k=()=>{s(P),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(E.shapeFlag&1&&D&&!D.persisted){const{leave:$,delayLeave:L}=D,x=()=>$(P,k);L?L(E.el,k,x):x()}else k()},mr=(E,w)=>{let P;for(;E!==w;)P=_(E),s(E),E=P;s(w)},ts=(E,w,P)=>{const{bum:F,scope:D,job:k,subTree:$,um:L,m:x,a:M}=E;yu(x),yu(M),F&&oa(F),D.stop(),k&&(k.flags|=8,ut($,E,w,P)),L&&pt(L,w),pt(()=>{E.isUnmounted=!0},w)},Kt=(E,w,P,F=!1,D=!1,k=0)=>{for(let $=k;$<E.length;$++)ut(E[$],w,P,F,D)},hn=E=>{if(E.shapeFlag&6)return hn(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const w=_(E.anchor||E.el),P=w&&w[Gm];return P?_(P):w};let Hn=!1;const ns=(E,w,P)=>{E==null?w._vnode&&ut(w._vnode,null,null,!0):U(w._vnode||null,E,w,null,null,null,P),w._vnode=E,Hn||(Hn=!0,uu(),Ff(),Hn=!1)},zn={p:U,um:ut,m:Rt,r:es,mt:Le,mc:m,pc:ge,pbc:A,n:hn,o:n};return{render:ns,hydrate:void 0,createApp:m_(ns)}}function fa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Yn({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function b_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function rd(n,e,t=!1){const r=n.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Tn(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&rd(a,c)),c.type===bo&&c.patchFlag!==-1&&(c.el=a.el),c.type===Lr&&!c.el&&(c.el=a.el)}}function R_(n){const e=n.slice(),t=[0];let r,s,i,a,c;const u=n.length;for(r=0;r<u;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<h?i=c+1:a=c;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function sd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:sd(e)}function yu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const C_=Symbol.for("v-scx"),P_=()=>Di(C_);function da(n,e,t){return id(n,e,t)}function id(n,e,t=ve){const{immediate:r,deep:s,flush:i,once:a}=t,c=ot({},t),u=e&&r||!e&&i!=="post";let h;if(Hs){if(i==="sync"){const R=P_();h=R.__watcherHandles||(R.__watcherHandles=[])}else if(!u){const R=()=>{};return R.stop=xt,R.resume=xt,R.pause=xt,R}}const d=it;c.call=(R,O,U)=>qt(R,d,O,U);let p=!1;i==="post"?c.scheduler=R=>{pt(R,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(R,O)=>{O?R():Sc(R)}),c.augmentJob=R=>{e&&(R.flags|=4),p&&(R.flags|=2,d&&(R.id=d.uid,R.i=d))};const _=$m(n,e,c);return Hs&&(h?h.push(_):u&&_()),_}function V_(n,e,t){const r=this.proxy,s=Ne(n)?n.includes(".")?od(r,n):()=>r[n]:n.bind(r,r);let i;ce(e)?i=e:(i=e.handler,t=e);const a=ti(this),c=id(s,i.bind(r),t);return a(),c}function od(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const D_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${On(e)}Modifiers`]||n[`${ur(e)}Modifiers`];function k_(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||ve;let s=t;const i=e.startsWith("update:"),a=i&&D_(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>Ne(d)?d.trim():d)),a.number&&(s=t.map(om)));let c,u=r[c=ia(e)]||r[c=ia(On(e))];!u&&i&&(u=r[c=ia(ur(e))]),u&&qt(u,n,6,s);const h=r[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,qt(h,n,6,s)}}const N_=new WeakMap;function ad(n,e,t=!1){const r=t?N_:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!ce(n)){const u=h=>{const d=ad(h,e,!0);d&&(c=!0,ot(a,d))};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!i&&!c?(be(n)&&r.set(n,null),null):(ie(i)?i.forEach(u=>a[u]=null):ot(a,i),be(n)&&r.set(n,a),a)}function So(n,e){return!n||!yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(n,e[0].toLowerCase()+e.slice(1))||_e(n,ur(e))||_e(n,e))}function Eu(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:u,render:h,renderCache:d,props:p,data:_,setupState:R,ctx:O,inheritAttrs:U}=n,B=Ki(n);let H,K;try{if(t.shapeFlag&4){const W=s||r,G=W;H=Nt(h.call(G,W,d,p,R,_,O)),K=c}else{const W=e;H=Nt(W.length>1?W(p,{attrs:c,slots:a,emit:u}):W(p,null)),K=e.props?c:O_(c)}}catch(W){ks.length=0,wo(W,n,1),H=rr(Lr)}let J=H;if(K&&U!==!1){const W=Object.keys(K),{shapeFlag:G}=J;W.length&&G&7&&(i&&W.some(fc)&&(K=x_(K,i)),J=Fr(J,K,!1,!0))}return t.dirs&&(J=Fr(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(t.dirs):t.dirs),t.transition&&bc(J,t.transition),H=J,Ki(B),H}const O_=n=>{let e;for(const t in n)(t==="class"||t==="style"||yo(t))&&((e||(e={}))[t]=n[t]);return e},x_=(n,e)=>{const t={};for(const r in n)(!fc(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function M_(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:u}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&u>=0){if(u&1024)return!0;if(u&16)return r?Tu(r,a,h):!!a;if(u&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const _=d[p];if(a[_]!==r[_]&&!So(h,_))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?Tu(r,a,h):!0:!!a;return!1}function Tu(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!So(t,i))return!0}return!1}function L_({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const cd=n=>n.__isSuspense;function F_(n,e){e&&e.pendingBranch?ie(n)?e.effects.push(...n):e.effects.push(n):Wm(n)}const It=Symbol.for("v-fgt"),bo=Symbol.for("v-txt"),Lr=Symbol.for("v-cmt"),pa=Symbol.for("v-stc"),ks=[];let gt=null;function Qt(n=!1){ks.push(gt=n?null:[])}function U_(){ks.pop(),gt=ks[ks.length-1]||null}let qs=1;function Iu(n,e=!1){qs+=n,n<0&&gt&&e&&(gt.hasOnce=!0)}function B_(n){return n.dynamicChildren=qs>0?gt||Cr:null,U_(),qs>0&&gt&&gt.push(n),n}function Jt(n,e,t,r,s,i){return B_(at(n,e,t,r,s,i,!0))}function ld(n){return n?n.__v_isVNode===!0:!1}function Ts(n,e){return n.type===e.type&&n.key===e.key}const ud=({key:n})=>n??null,ki=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ne(n)||et(n)||ce(n)?{i:Ot,r:n,k:e,f:!!t}:n:null);function at(n,e=null,t=null,r=0,s=null,i=n===It?0:1,a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ud(e),ref:e&&ki(e),scopeId:Bf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ot};return c?(Pc(u,t),i&128&&n.normalize(u)):t&&(u.shapeFlag|=Ne(t)?8:16),qs>0&&!a&&gt&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&gt.push(u),u}const rr=j_;function j_(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===c_)&&(n=Lr),ld(n)){const c=Fr(n,e,!0);return t&&Pc(c,t),qs>0&&!i&&gt&&(c.shapeFlag&6?gt[gt.indexOf(n)]=c:gt.push(c)),c.patchFlag=-2,c}if(Z_(n)&&(n=n.__vccOpts),e){e=$_(e);let{class:c,style:u}=e;c&&!Ne(c)&&(e.class=mc(c)),be(u)&&(Ac(u)&&!ie(u)&&(u=ot({},u)),e.style=gc(u))}const a=Ne(n)?1:cd(n)?128:Qm(n)?64:be(n)?4:ce(n)?2:0;return at(n,e,t,r,s,a,i,!0)}function $_(n){return n?Ac(n)||Xf(n)?ot({},n):n:null}function Fr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:u}=n,h=e?H_(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&ud(h),ref:e&&e.ref?t&&i?ie(i)?i.concat(ki(e)):[i,ki(e)]:ki(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==It?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:u,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Fr(n.ssContent),ssFallback:n.ssFallback&&Fr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return u&&r&&bc(d,u.clone(d)),d}function q_(n=" ",e=0){return rr(bo,null,n,e)}function Nt(n){return n==null||typeof n=="boolean"?rr(Lr):ie(n)?rr(It,null,n.slice()):ld(n)?Tn(n):rr(bo,null,String(n))}function Tn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Fr(n)}function Pc(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ie(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Pc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Xf(e)?e._ctx=Ot:s===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:Ot},t=32):(e=String(e),r&64?(t=16,e=[q_(e)]):t=8);n.children=e,n.shapeFlag|=t}function H_(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=mc([e.class,r.class]));else if(s==="style")e.style=gc([e.style,r.style]);else if(yo(s)){const i=e[s],a=r[s];a&&i!==a&&!(ie(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Vt(n,e,t,r=null){qt(n,e,7,[t,r])}const z_=Gf();let W_=0;function K_(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||z_,i={uid:W_++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new dm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zf(r,s),emitsOptions:ad(r,s),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:r.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=k_.bind(null,i),n.ce&&n.ce(i),i}let it=null;const G_=()=>it||Ot;let Ji,Ua;{const n=Io(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Ji=e("__VUE_INSTANCE_SETTERS__",t=>it=t),Ua=e("__VUE_SSR_SETTERS__",t=>Hs=t)}const ti=n=>{const e=it;return Ji(n),n.scope.on(),()=>{n.scope.off(),Ji(e)}},vu=()=>{it&&it.scope.off(),Ji(null)};function hd(n){return n.vnode.shapeFlag&4}let Hs=!1;function Q_(n,e=!1,t=!1){e&&Ua(e);const{props:r,children:s}=n.vnode,i=hd(n);y_(n,r,i,e),v_(n,s,t||e);const a=i?J_(n,e):void 0;return e&&Ua(!1),a}function J_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,l_);const{setup:r}=t;if(r){tn();const s=n.setupContext=r.length>1?Y_(n):null,i=ti(n),a=ei(r,n,0,[n.props,s]),c=df(a);if(nn(),i(),(c||n.sp)&&!Vs(n)&&jf(n),c){if(a.then(vu,vu),e)return a.then(u=>{wu(n,u)}).catch(u=>{wo(u,n,0)});n.asyncDep=a}else wu(n,a)}else fd(n)}function wu(n,e,t){ce(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:be(e)&&(n.setupState=xf(e)),fd(n)}function fd(n,e,t){const r=n.type;n.render||(n.render=r.render||xt);{const s=ti(n);tn();try{u_(n)}finally{nn(),s()}}}const X_={get(n,e){return Ye(n,"get",""),n[e]}};function Y_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,X_),slots:n.slots,emit:n.emit,expose:e}}function Vc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(xf(Om(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ds)return Ds[t](n)},has(e,t){return t in e||t in Ds}})):n.proxy}function Z_(n){return ce(n)&&"__vccOpts"in n}const ey=(n,e)=>Bm(n,e,Hs),ty="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ba;const Au=typeof window<"u"&&window.trustedTypes;if(Au)try{Ba=Au.createPolicy("vue",{createHTML:n=>n})}catch{}const dd=Ba?n=>Ba.createHTML(n):n=>n,ny="http://www.w3.org/2000/svg",ry="http://www.w3.org/1998/Math/MathML",Xt=typeof document<"u"?document:null,Su=Xt&&Xt.createElement("template"),sy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?Xt.createElementNS(ny,n):e==="mathml"?Xt.createElementNS(ry,n):t?Xt.createElement(n,{is:t}):Xt.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Xt.createTextNode(n),createComment:n=>Xt.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Xt.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Su.innerHTML=dd(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=Su.content;if(r==="svg"||r==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},iy=Symbol("_vtc");function oy(n,e,t){const r=n[iy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const bu=Symbol("_vod"),ay=Symbol("_vsh"),cy=Symbol(""),ly=/(?:^|;)\s*display\s*:/;function uy(n,e,t){const r=n.style,s=Ne(t);let i=!1;if(t&&!s){if(e)if(Ne(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&Ni(r,c,"")}else for(const a in e)t[a]==null&&Ni(r,a,"");for(const a in t)a==="display"&&(i=!0),Ni(r,a,t[a])}else if(s){if(e!==t){const a=r[cy];a&&(t+=";"+a),r.cssText=t,i=ly.test(t)}}else e&&n.removeAttribute("style");bu in n&&(n[bu]=i?r.display:"",n[ay]&&(r.display="none"))}const Ru=/\s*!important$/;function Ni(n,e,t){if(ie(t))t.forEach(r=>Ni(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=hy(n,e);Ru.test(t)?n.setProperty(ur(r),t.replace(Ru,""),"important"):n[r]=t}}const Cu=["Webkit","Moz","ms"],ga={};function hy(n,e){const t=ga[e];if(t)return t;let r=On(e);if(r!=="filter"&&r in n)return ga[e]=r;r=mf(r);for(let s=0;s<Cu.length;s++){const i=Cu[s]+r;if(i in n)return ga[e]=i}return e}const Pu="http://www.w3.org/1999/xlink";function Vu(n,e,t,r,s,i=fm(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Pu,e.slice(6,e.length)):n.setAttributeNS(Pu,e,t):t==null||i&&!yf(t)?n.removeAttribute(e):n.setAttribute(e,i?"":qn(t)?String(t):t)}function Du(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?dd(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,u=t==null?n.type==="checkbox"?"on":"":String(t);(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=yf(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function fy(n,e,t,r){n.addEventListener(e,t,r)}function dy(n,e,t,r){n.removeEventListener(e,t,r)}const ku=Symbol("_vei");function py(n,e,t,r,s=null){const i=n[ku]||(n[ku]={}),a=i[e];if(r&&a)a.value=r;else{const[c,u]=gy(e);if(r){const h=i[e]=yy(r,s);fy(n,c,h,u)}else a&&(dy(n,c,a,u),i[e]=void 0)}}const Nu=/(?:Once|Passive|Capture)$/;function gy(n){let e;if(Nu.test(n)){e={};let r;for(;r=n.match(Nu);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ur(n.slice(2)),e]}let ma=0;const my=Promise.resolve(),_y=()=>ma||(my.then(()=>ma=0),ma=Date.now());function yy(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;qt(Ey(r,t.value),e,5,[r])};return t.value=n,t.attached=_y(),t}function Ey(n,e){if(ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ou=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Ty=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?oy(n,r,a):e==="style"?uy(n,t,r):yo(e)?fc(e)||py(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Iy(n,e,r,a))?(Du(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vu(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ne(r))?Du(n,On(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Vu(n,e,r,a))};function Iy(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ou(e)&&ce(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ou(e)&&Ne(t)?!1:e in n}const vy=ot({patchProp:Ty},sy);let xu;function wy(){return xu||(xu=A_(vy))}const Ay=((...n)=>{const e=wy().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=by(r);if(!s)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Sy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function Sy(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function by(n){return Ne(n)?document.querySelector(n):n}const Mu=[{name:"Palmyre",exclusions:["Nicole"]},{name:"Nicole",exclusions:["Palmyre"]},{name:"Laurent",exclusions:["Florence","Clara","James"]},{name:"Florence",exclusions:["Laurent","Clara","James"]},{name:"Olivier",exclusions:["Hélène","Arnaud","Andréanne"]},{name:"Hélène",exclusions:["Olivier","Arnaud","Andréanne"]},{name:"Stephan",exclusions:["Émilie","Aurélien","Colyne","Hélène","Florence"]},{name:"Émilie",exclusions:["Stephan","Aurélien","Colyne","Hélène","Florence"]},{name:"Audrey",exclusions:["Sylvain"]},{name:"Sylvain",exclusions:["Audrey"]},{name:"Clara",exclusions:["James","Laurent","Florence"]},{name:"James",exclusions:["Clara","Laurent","Florence"]},{name:"Arnaud",exclusions:["Andréanne","Olivier","Hélène"]},{name:"Andréanne",exclusions:["Arnaud","Olivier","Hélène"]},{name:"Colyne",exclusions:["Aurélien","Stephan","Émilie","Hélène","Florence"]},{name:"Aurélien",exclusions:["Colyne","Stephan","Émilie","Hélène","Florence"]}],Lu=[{name:"Eva",exclusions:["Clémence"]},{name:"Clémence",exclusions:["Eva"]},{name:"Mylan",exclusions:[""]},{name:"Maïko",exclusions:[""]},{name:"Maddy",exclusions:[""]}],Ry=()=>{};var Fu={};/**
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
 */const pd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Cy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},gd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let _=(c&15)<<2|h>>6,R=h&63;u||(R=64,a||(_=64)),r.push(t[d],t[p],t[_],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(pd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Cy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new Py;const _=i<<2|c>>4;if(r.push(_),h!==64){const R=c<<4&240|h>>2;if(r.push(R),p!==64){const O=h<<6&192|p;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Py extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vy=function(n){const e=pd(n);return gd.encodeByteArray(e,!0)},Xi=function(n){return Vy(n).replace(/\./g,"")},md=function(n){try{return gd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Dy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ky=()=>Dy().__FIREBASE_DEFAULTS__,Ny=()=>{if(typeof process>"u"||typeof Fu>"u")return;const n=Fu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Oy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&md(n[1]);return e&&JSON.parse(e)},Ro=()=>{try{return Ry()||ky()||Ny()||Oy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},_d=n=>Ro()?.emulatorHosts?.[n],xy=n=>{const e=_d(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},yd=()=>Ro()?.config,Ed=n=>Ro()?.[`_${n}`];/**
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
 */class My{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Kr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Td(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Ly(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Xi(JSON.stringify(t)),Xi(JSON.stringify(a)),""].join(".")}const Ns={};function Fy(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ns))Ns[e]?n.emulator.push(e):n.prod.push(e);return n}function Uy(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Uu=!1;function Id(n,e){if(typeof window>"u"||typeof document>"u"||!Kr(window.location.host)||Ns[n]===e||Ns[n]||Uu)return;Ns[n]=e;function t(_){return`__firebase__banner__${_}`}const r="__firebase__banner",i=Fy().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function u(_,R){_.setAttribute("width","24"),_.setAttribute("id",R),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Uu=!0,a()},_}function d(_,R){_.setAttribute("id",R),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function p(){const _=Uy(r),R=t("text"),O=document.getElementById(R)||document.createElement("span"),U=t("learnmore"),B=document.getElementById(U)||document.createElement("a"),H=t("preprendIcon"),K=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const J=_.element;c(J),d(B,U);const W=h();u(K,H),J.append(K,O,B,W),document.body.appendChild(J)}i?(O.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function By(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function jy(){const n=Ro()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $y(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Hy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zy(){const n=tt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Wy(){return!jy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ky(){try{return typeof indexedDB=="object"}catch{return!1}}function Gy(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Qy="FirebaseError";class un extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Qy,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ni.prototype.create)}}class ni{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Jy(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new un(s,c,r)}}function Jy(n,e){return n.replace(Xy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Xy=/\{\$([^}]+)}/g;function Yy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ir(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Bu(i)&&Bu(a)){if(!ir(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Bu(n){return n!==null&&typeof n=="object"}/**
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
 */function ri(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zy(n,e){const t=new eE(n,e);return t.subscribe.bind(t)}class eE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");tE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=_a),s.error===void 0&&(s.error=_a),s.complete===void 0&&(s.complete=_a);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function _a(){}/**
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
 */function Ht(n){return n&&n._delegate?n._delegate:n}class or{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const er="[DEFAULT]";/**
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
 */class nE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new My;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sE(e))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=er){return this.instances.has(e)}getOptions(e=er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=er){return this.component?this.component.multipleInstances?e:er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rE(n){return n===er?void 0:n}function sE(n){return n.instantiationMode==="EAGER"}/**
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
 */class iE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ue||(ue={}));const oE={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},aE=ue.INFO,cE={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},lE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=cE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dc{constructor(e){this.name=e,this._logLevel=aE,this._logHandler=lE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const uE=(n,e)=>e.some(t=>n instanceof t);let ju,$u;function hE(){return ju||(ju=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fE(){return $u||($u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vd=new WeakMap,ja=new WeakMap,wd=new WeakMap,ya=new WeakMap,kc=new WeakMap;function dE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Cn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&vd.set(t,n)}).catch(()=>{}),kc.set(e,n),e}function pE(n){if(ja.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ja.set(n,e)}let $a={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ja.get(n);if(e==="objectStoreNames")return n.objectStoreNames||wd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Cn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function gE(n){$a=n($a)}function mE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ea(this),e,...t);return wd.set(r,e.sort?e.sort():[e]),Cn(r)}:fE().includes(n)?function(...e){return n.apply(Ea(this),e),Cn(vd.get(this))}:function(...e){return Cn(n.apply(Ea(this),e))}}function _E(n){return typeof n=="function"?mE(n):(n instanceof IDBTransaction&&pE(n),uE(n,hE())?new Proxy(n,$a):n)}function Cn(n){if(n instanceof IDBRequest)return dE(n);if(ya.has(n))return ya.get(n);const e=_E(n);return e!==n&&(ya.set(n,e),kc.set(e,n)),e}const Ea=n=>kc.get(n);function yE(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Cn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Cn(a.result),u.oldVersion,u.newVersion,Cn(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const EE=["get","getKey","getAll","getAllKeys","count"],TE=["put","add","delete","clear"],Ta=new Map;function qu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ta.get(e))return Ta.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=TE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||EE.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&u.done]))[0]};return Ta.set(e,i),i}gE(n=>({...n,get:(e,t,r)=>qu(e,t)||n.get(e,t,r),has:(e,t)=>!!qu(e,t)||n.has(e,t)}));/**
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
 */class IE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function vE(n){return n.getComponent()?.type==="VERSION"}const qa="@firebase/app",Hu="0.14.5";/**
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
 */const rn=new Dc("@firebase/app"),wE="@firebase/app-compat",AE="@firebase/analytics-compat",SE="@firebase/analytics",bE="@firebase/app-check-compat",RE="@firebase/app-check",CE="@firebase/auth",PE="@firebase/auth-compat",VE="@firebase/database",DE="@firebase/data-connect",kE="@firebase/database-compat",NE="@firebase/functions",OE="@firebase/functions-compat",xE="@firebase/installations",ME="@firebase/installations-compat",LE="@firebase/messaging",FE="@firebase/messaging-compat",UE="@firebase/performance",BE="@firebase/performance-compat",jE="@firebase/remote-config",$E="@firebase/remote-config-compat",qE="@firebase/storage",HE="@firebase/storage-compat",zE="@firebase/firestore",WE="@firebase/ai",KE="@firebase/firestore-compat",GE="firebase",QE="12.5.0";/**
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
 */const Ha="[DEFAULT]",JE={[qa]:"fire-core",[wE]:"fire-core-compat",[SE]:"fire-analytics",[AE]:"fire-analytics-compat",[RE]:"fire-app-check",[bE]:"fire-app-check-compat",[CE]:"fire-auth",[PE]:"fire-auth-compat",[VE]:"fire-rtdb",[DE]:"fire-data-connect",[kE]:"fire-rtdb-compat",[NE]:"fire-fn",[OE]:"fire-fn-compat",[xE]:"fire-iid",[ME]:"fire-iid-compat",[LE]:"fire-fcm",[FE]:"fire-fcm-compat",[UE]:"fire-perf",[BE]:"fire-perf-compat",[jE]:"fire-rc",[$E]:"fire-rc-compat",[qE]:"fire-gcs",[HE]:"fire-gcs-compat",[zE]:"fire-fst",[KE]:"fire-fst-compat",[WE]:"fire-vertex","fire-js":"fire-js",[GE]:"fire-js-all"};/**
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
 */const Yi=new Map,XE=new Map,za=new Map;function zu(n,e){try{n.container.addComponent(e)}catch(t){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ur(n){const e=n.name;if(za.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;za.set(e,n);for(const t of Yi.values())zu(t,n);for(const t of XE.values())zu(t,n);return!0}function Nc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function vt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const YE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new ni("app","Firebase",YE);/**
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
 */class ZE{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
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
 */const Gr=QE;function Ad(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ha,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Pn.create("bad-app-name",{appName:String(s)});if(t||(t=yd()),!t)throw Pn.create("no-options");const i=Yi.get(s);if(i){if(ir(t,i.options)&&ir(r,i.config))return i;throw Pn.create("duplicate-app",{appName:s})}const a=new iE(s);for(const u of za.values())a.addComponent(u);const c=new ZE(t,r,a);return Yi.set(s,c),c}function Sd(n=Ha){const e=Yi.get(n);if(!e&&n===Ha&&yd())return Ad();if(!e)throw Pn.create("no-app",{appName:n});return e}function Vn(n,e,t){let r=JE[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(a.join(" "));return}Ur(new or(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const eT="firebase-heartbeat-database",tT=1,zs="firebase-heartbeat-store";let Ia=null;function bd(){return Ia||(Ia=yE(eT,tT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(zs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Pn.create("idb-open",{originalErrorMessage:n.message})})),Ia}async function nT(n){try{const t=(await bd()).transaction(zs),r=await t.objectStore(zs).get(Rd(n));return await t.done,r}catch(e){if(e instanceof un)rn.warn(e.message);else{const t=Pn.create("idb-get",{originalErrorMessage:e?.message});rn.warn(t.message)}}}async function Wu(n,e){try{const r=(await bd()).transaction(zs,"readwrite");await r.objectStore(zs).put(e,Rd(n)),await r.done}catch(t){if(t instanceof un)rn.warn(t.message);else{const r=Pn.create("idb-set",{originalErrorMessage:t?.message});rn.warn(r.message)}}}function Rd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const rT=1024,sT=30;class iT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new aT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ku();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>sT){const s=cT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){rn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ku(),{heartbeatsToSend:t,unsentEntries:r}=oT(this._heartbeatsCache.heartbeats),s=Xi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return rn.warn(e),""}}}function Ku(){return new Date().toISOString().substring(0,10)}function oT(n,e=rT){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Gu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Gu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class aT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ky()?Gy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await nT(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Wu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Wu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Gu(n){return Xi(JSON.stringify({version:2,heartbeats:n})).length}function cT(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function lT(n){Ur(new or("platform-logger",e=>new IE(e),"PRIVATE")),Ur(new or("heartbeat",e=>new iT(e),"PRIVATE")),Vn(qa,Hu,n),Vn(qa,Hu,"esm2020"),Vn("fire-js","")}lT("");var uT="firebase",hT="12.5.0";/**
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
 */Vn(uT,hT,"app");var Qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dn,Cd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function T(){}T.prototype=m.prototype,I.F=m.prototype,I.prototype=new T,I.prototype.constructor=I,I.D=function(A,v,S){for(var y=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)y[Le-2]=arguments[Le];return m.prototype[v].apply(A,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,T){T||(T=0);const A=Array(16);if(typeof m=="string")for(var v=0;v<16;++v)A[v]=m.charCodeAt(T++)|m.charCodeAt(T++)<<8|m.charCodeAt(T++)<<16|m.charCodeAt(T++)<<24;else for(v=0;v<16;++v)A[v]=m[T++]|m[T++]<<8|m[T++]<<16|m[T++]<<24;m=I.g[0],T=I.g[1],v=I.g[2];let S=I.g[3],y;y=m+(S^T&(v^S))+A[0]+3614090360&4294967295,m=T+(y<<7&4294967295|y>>>25),y=S+(v^m&(T^v))+A[1]+3905402710&4294967295,S=m+(y<<12&4294967295|y>>>20),y=v+(T^S&(m^T))+A[2]+606105819&4294967295,v=S+(y<<17&4294967295|y>>>15),y=T+(m^v&(S^m))+A[3]+3250441966&4294967295,T=v+(y<<22&4294967295|y>>>10),y=m+(S^T&(v^S))+A[4]+4118548399&4294967295,m=T+(y<<7&4294967295|y>>>25),y=S+(v^m&(T^v))+A[5]+1200080426&4294967295,S=m+(y<<12&4294967295|y>>>20),y=v+(T^S&(m^T))+A[6]+2821735955&4294967295,v=S+(y<<17&4294967295|y>>>15),y=T+(m^v&(S^m))+A[7]+4249261313&4294967295,T=v+(y<<22&4294967295|y>>>10),y=m+(S^T&(v^S))+A[8]+1770035416&4294967295,m=T+(y<<7&4294967295|y>>>25),y=S+(v^m&(T^v))+A[9]+2336552879&4294967295,S=m+(y<<12&4294967295|y>>>20),y=v+(T^S&(m^T))+A[10]+4294925233&4294967295,v=S+(y<<17&4294967295|y>>>15),y=T+(m^v&(S^m))+A[11]+2304563134&4294967295,T=v+(y<<22&4294967295|y>>>10),y=m+(S^T&(v^S))+A[12]+1804603682&4294967295,m=T+(y<<7&4294967295|y>>>25),y=S+(v^m&(T^v))+A[13]+4254626195&4294967295,S=m+(y<<12&4294967295|y>>>20),y=v+(T^S&(m^T))+A[14]+2792965006&4294967295,v=S+(y<<17&4294967295|y>>>15),y=T+(m^v&(S^m))+A[15]+1236535329&4294967295,T=v+(y<<22&4294967295|y>>>10),y=m+(v^S&(T^v))+A[1]+4129170786&4294967295,m=T+(y<<5&4294967295|y>>>27),y=S+(T^v&(m^T))+A[6]+3225465664&4294967295,S=m+(y<<9&4294967295|y>>>23),y=v+(m^T&(S^m))+A[11]+643717713&4294967295,v=S+(y<<14&4294967295|y>>>18),y=T+(S^m&(v^S))+A[0]+3921069994&4294967295,T=v+(y<<20&4294967295|y>>>12),y=m+(v^S&(T^v))+A[5]+3593408605&4294967295,m=T+(y<<5&4294967295|y>>>27),y=S+(T^v&(m^T))+A[10]+38016083&4294967295,S=m+(y<<9&4294967295|y>>>23),y=v+(m^T&(S^m))+A[15]+3634488961&4294967295,v=S+(y<<14&4294967295|y>>>18),y=T+(S^m&(v^S))+A[4]+3889429448&4294967295,T=v+(y<<20&4294967295|y>>>12),y=m+(v^S&(T^v))+A[9]+568446438&4294967295,m=T+(y<<5&4294967295|y>>>27),y=S+(T^v&(m^T))+A[14]+3275163606&4294967295,S=m+(y<<9&4294967295|y>>>23),y=v+(m^T&(S^m))+A[3]+4107603335&4294967295,v=S+(y<<14&4294967295|y>>>18),y=T+(S^m&(v^S))+A[8]+1163531501&4294967295,T=v+(y<<20&4294967295|y>>>12),y=m+(v^S&(T^v))+A[13]+2850285829&4294967295,m=T+(y<<5&4294967295|y>>>27),y=S+(T^v&(m^T))+A[2]+4243563512&4294967295,S=m+(y<<9&4294967295|y>>>23),y=v+(m^T&(S^m))+A[7]+1735328473&4294967295,v=S+(y<<14&4294967295|y>>>18),y=T+(S^m&(v^S))+A[12]+2368359562&4294967295,T=v+(y<<20&4294967295|y>>>12),y=m+(T^v^S)+A[5]+4294588738&4294967295,m=T+(y<<4&4294967295|y>>>28),y=S+(m^T^v)+A[8]+2272392833&4294967295,S=m+(y<<11&4294967295|y>>>21),y=v+(S^m^T)+A[11]+1839030562&4294967295,v=S+(y<<16&4294967295|y>>>16),y=T+(v^S^m)+A[14]+4259657740&4294967295,T=v+(y<<23&4294967295|y>>>9),y=m+(T^v^S)+A[1]+2763975236&4294967295,m=T+(y<<4&4294967295|y>>>28),y=S+(m^T^v)+A[4]+1272893353&4294967295,S=m+(y<<11&4294967295|y>>>21),y=v+(S^m^T)+A[7]+4139469664&4294967295,v=S+(y<<16&4294967295|y>>>16),y=T+(v^S^m)+A[10]+3200236656&4294967295,T=v+(y<<23&4294967295|y>>>9),y=m+(T^v^S)+A[13]+681279174&4294967295,m=T+(y<<4&4294967295|y>>>28),y=S+(m^T^v)+A[0]+3936430074&4294967295,S=m+(y<<11&4294967295|y>>>21),y=v+(S^m^T)+A[3]+3572445317&4294967295,v=S+(y<<16&4294967295|y>>>16),y=T+(v^S^m)+A[6]+76029189&4294967295,T=v+(y<<23&4294967295|y>>>9),y=m+(T^v^S)+A[9]+3654602809&4294967295,m=T+(y<<4&4294967295|y>>>28),y=S+(m^T^v)+A[12]+3873151461&4294967295,S=m+(y<<11&4294967295|y>>>21),y=v+(S^m^T)+A[15]+530742520&4294967295,v=S+(y<<16&4294967295|y>>>16),y=T+(v^S^m)+A[2]+3299628645&4294967295,T=v+(y<<23&4294967295|y>>>9),y=m+(v^(T|~S))+A[0]+4096336452&4294967295,m=T+(y<<6&4294967295|y>>>26),y=S+(T^(m|~v))+A[7]+1126891415&4294967295,S=m+(y<<10&4294967295|y>>>22),y=v+(m^(S|~T))+A[14]+2878612391&4294967295,v=S+(y<<15&4294967295|y>>>17),y=T+(S^(v|~m))+A[5]+4237533241&4294967295,T=v+(y<<21&4294967295|y>>>11),y=m+(v^(T|~S))+A[12]+1700485571&4294967295,m=T+(y<<6&4294967295|y>>>26),y=S+(T^(m|~v))+A[3]+2399980690&4294967295,S=m+(y<<10&4294967295|y>>>22),y=v+(m^(S|~T))+A[10]+4293915773&4294967295,v=S+(y<<15&4294967295|y>>>17),y=T+(S^(v|~m))+A[1]+2240044497&4294967295,T=v+(y<<21&4294967295|y>>>11),y=m+(v^(T|~S))+A[8]+1873313359&4294967295,m=T+(y<<6&4294967295|y>>>26),y=S+(T^(m|~v))+A[15]+4264355552&4294967295,S=m+(y<<10&4294967295|y>>>22),y=v+(m^(S|~T))+A[6]+2734768916&4294967295,v=S+(y<<15&4294967295|y>>>17),y=T+(S^(v|~m))+A[13]+1309151649&4294967295,T=v+(y<<21&4294967295|y>>>11),y=m+(v^(T|~S))+A[4]+4149444226&4294967295,m=T+(y<<6&4294967295|y>>>26),y=S+(T^(m|~v))+A[11]+3174756917&4294967295,S=m+(y<<10&4294967295|y>>>22),y=v+(m^(S|~T))+A[2]+718787259&4294967295,v=S+(y<<15&4294967295|y>>>17),y=T+(S^(v|~m))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+v&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.v=function(I,m){m===void 0&&(m=I.length);const T=m-this.blockSize,A=this.C;let v=this.h,S=0;for(;S<m;){if(v==0)for(;S<=T;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<m;)if(A[v++]=I.charCodeAt(S++),v==this.blockSize){s(this,A),v=0;break}}else for(;S<m;)if(A[v++]=I[S++],v==this.blockSize){s(this,A),v=0;break}}this.h=v,this.o+=m},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;m=this.o*8;for(var T=I.length-8;T<I.length;++T)I[T]=m&255,m/=256;for(this.v(I),I=Array(16),m=0,T=0;T<4;++T)for(let A=0;A<32;A+=8)I[m++]=this.g[T]>>>A&255;return I};function i(I,m){var T=c;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=m(I)}function a(I,m){this.h=m;const T=[];let A=!0;for(let v=I.length-1;v>=0;v--){const S=I[v]|0;A&&S==m||(T[v]=S,A=!1)}this.g=T}var c={};function u(I){return-128<=I&&I<128?i(I,function(m){return new a([m|0],m<0?-1:0)}):new a([I|0],I<0?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(I<0)return B(h(-I));const m=[];let T=1;for(let A=0;I>=T;A++)m[A]=I/T|0,T*=4294967296;return new a(m,0)}function d(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return B(d(I.substring(1),m));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=h(Math.pow(m,8));let A=p;for(let S=0;S<I.length;S+=8){var v=Math.min(8,I.length-S);const y=parseInt(I.substring(S,S+v),m);v<8?(v=h(Math.pow(m,v)),A=A.j(v).add(h(y))):(A=A.j(T),A=A.add(h(y)))}return A}var p=u(0),_=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(U(this))return-B(this).m();let I=0,m=1;for(let T=0;T<this.g.length;T++){const A=this.i(T);I+=(A>=0?A:4294967296+A)*m,m*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(O(this))return"0";if(U(this))return"-"+B(this).toString(I);const m=h(Math.pow(I,6));var T=this;let A="";for(;;){const v=W(T,m).g;T=H(T,v.j(m));let S=((T.g.length>0?T.g[0]:T.h)>>>0).toString(I);if(T=v,O(T))return S+A;for(;S.length<6;)S="0"+S;A=S+A}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function O(I){if(I.h!=0)return!1;for(let m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function U(I){return I.h==-1}n.l=function(I){return I=H(this,I),U(I)?-1:O(I)?0:1};function B(I){const m=I.g.length,T=[];for(let A=0;A<m;A++)T[A]=~I.g[A];return new a(T,~I.h).add(_)}n.abs=function(){return U(this)?B(this):this},n.add=function(I){const m=Math.max(this.g.length,I.g.length),T=[];let A=0;for(let v=0;v<=m;v++){let S=A+(this.i(v)&65535)+(I.i(v)&65535),y=(S>>>16)+(this.i(v)>>>16)+(I.i(v)>>>16);A=y>>>16,S&=65535,y&=65535,T[v]=y<<16|S}return new a(T,T[T.length-1]&-2147483648?-1:0)};function H(I,m){return I.add(B(m))}n.j=function(I){if(O(this)||O(I))return p;if(U(this))return U(I)?B(this).j(B(I)):B(B(this).j(I));if(U(I))return B(this.j(B(I)));if(this.l(R)<0&&I.l(R)<0)return h(this.m()*I.m());const m=this.g.length+I.g.length,T=[];for(var A=0;A<2*m;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(let v=0;v<I.g.length;v++){const S=this.i(A)>>>16,y=this.i(A)&65535,Le=I.i(v)>>>16,bt=I.i(v)&65535;T[2*A+2*v]+=y*bt,K(T,2*A+2*v),T[2*A+2*v+1]+=S*bt,K(T,2*A+2*v+1),T[2*A+2*v+1]+=y*Le,K(T,2*A+2*v+1),T[2*A+2*v+2]+=S*Le,K(T,2*A+2*v+2)}for(I=0;I<m;I++)T[I]=T[2*I+1]<<16|T[2*I];for(I=m;I<2*m;I++)T[I]=0;return new a(T,0)};function K(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function J(I,m){this.g=I,this.h=m}function W(I,m){if(O(m))throw Error("division by zero");if(O(I))return new J(p,p);if(U(I))return m=W(B(I),m),new J(B(m.g),B(m.h));if(U(m))return m=W(I,B(m)),new J(B(m.g),m.h);if(I.g.length>30){if(U(I)||U(m))throw Error("slowDivide_ only works with positive integers.");for(var T=_,A=m;A.l(I)<=0;)T=G(T),A=G(A);var v=oe(T,1),S=oe(A,1);for(A=oe(A,2),T=oe(T,2);!O(A);){var y=S.add(A);y.l(I)<=0&&(v=v.add(T),S=y),A=oe(A,1),T=oe(T,1)}return m=H(I,v.j(m)),new J(v,m)}for(v=p;I.l(m)>=0;){for(T=Math.max(1,Math.floor(I.m()/m.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),S=h(T),y=S.j(m);U(y)||y.l(I)>0;)T-=A,S=h(T),y=S.j(m);O(S)&&(S=_),v=v.add(S),I=H(I,y)}return new J(v,I)}n.B=function(I){return W(this,I).h},n.and=function(I){const m=Math.max(this.g.length,I.g.length),T=[];for(let A=0;A<m;A++)T[A]=this.i(A)&I.i(A);return new a(T,this.h&I.h)},n.or=function(I){const m=Math.max(this.g.length,I.g.length),T=[];for(let A=0;A<m;A++)T[A]=this.i(A)|I.i(A);return new a(T,this.h|I.h)},n.xor=function(I){const m=Math.max(this.g.length,I.g.length),T=[];for(let A=0;A<m;A++)T[A]=this.i(A)^I.i(A);return new a(T,this.h^I.h)};function G(I){const m=I.g.length+1,T=[];for(let A=0;A<m;A++)T[A]=I.i(A)<<1|I.i(A-1)>>>31;return new a(T,I.h)}function oe(I,m){const T=m>>5;m%=32;const A=I.g.length-T,v=[];for(let S=0;S<A;S++)v[S]=m>0?I.i(S+T)>>>m|I.i(S+T+1)<<32-m:I.i(S+T);return new a(v,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Cd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Dn=a}).apply(typeof Qu<"u"?Qu:typeof self<"u"?self:typeof window<"u"?window:{});var Si=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pd,vs,Vd,Oi,Wa,Dd,kd,Nd;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Si=="object"&&Si];for(var l=0;l<o.length;++l){var f=o[l];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var b=o[g];if(!(b in f))break e;f=f[b]}o=o[o.length-1],g=f[o],l=l(g),l!=g&&l!=null&&e(f,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var f=[],g;for(g in l)Object.prototype.hasOwnProperty.call(l,g)&&f.push([g,l[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,f){return o.call.apply(o.bind,arguments)}function h(o,l,f){return h=u,h.apply(null,arguments)}function d(o,l){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,l){function f(){}f.prototype=l.prototype,o.Z=l.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(g,b,C){for(var j=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)j[ae-2]=arguments[ae];return l.prototype[b].apply(g,j)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function R(o){const l=o.length;if(l>0){const f=Array(l);for(let g=0;g<l;g++)f[g]=o[g];return f}return[]}function O(o,l){for(let g=1;g<arguments.length;g++){const b=arguments[g];var f=typeof b;if(f=f!="object"?f:b?Array.isArray(b)?"array":f:"null",f=="array"||f=="object"&&typeof b.length=="number"){f=o.length||0;const C=b.length||0;o.length=f+C;for(let j=0;j<C;j++)o[f+j]=b[j]}else o.push(b)}}class U{constructor(l,f){this.i=l,this.j=f,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function B(o){a.setTimeout(()=>{throw o},0)}function H(){var o=I;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class K{constructor(){this.h=this.g=null}add(l,f){const g=J.get();g.set(l,f),this.h?this.h.next=g:this.g=g,this.h=g}}var J=new U(()=>new W,o=>o.reset());class W{constructor(){this.next=this.g=this.h=null}set(l,f){this.h=l,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let G,oe=!1,I=new K,m=()=>{const o=Promise.resolve(void 0);G=()=>{o.then(T)}};function T(){for(var o;o=H();){try{o.h.call(o.g)}catch(f){B(f)}var l=J;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}oe=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,l),a.removeEventListener("test",f,l)}catch{}return o})();function y(o){return/^[\s\xa0]*$/.test(o)}function Le(o,l){v.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}p(Le,v),Le.prototype.init=function(o,l){const f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(f=="mouseover"?l=o.fromElement:f=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Le.Z.h.call(this)},Le.prototype.h=function(){Le.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var bt="closure_listenable_"+(Math.random()*1e6|0),$e=0;function we(o,l,f,g,b){this.listener=o,this.proxy=null,this.src=l,this.type=f,this.capture=!!g,this.ha=b,this.key=++$e,this.da=this.fa=!1}function ge(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function mt(o,l,f){for(const g in o)l.call(f,o[g],g,o)}function gr(o,l){for(const f in o)l.call(void 0,o[f],f,o)}function Rt(o){const l={};for(const f in o)l[f]=o[f];return l}const ut="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function es(o,l){let f,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(f in g)o[f]=g[f];for(let C=0;C<ut.length;C++)f=ut[C],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function mr(o){this.src=o,this.g={},this.h=0}mr.prototype.add=function(o,l,f,g,b){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const j=Kt(o,l,g,b);return j>-1?(l=o[j],f||(l.fa=!1)):(l=new we(l,this.src,C,!!g,b),l.fa=f,o.push(l)),l};function ts(o,l){const f=l.type;if(f in o.g){var g=o.g[f],b=Array.prototype.indexOf.call(g,l,void 0),C;(C=b>=0)&&Array.prototype.splice.call(g,b,1),C&&(ge(l),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Kt(o,l,f,g){for(let b=0;b<o.length;++b){const C=o[b];if(!C.da&&C.listener==l&&C.capture==!!f&&C.ha==g)return b}return-1}var hn="closure_lm_"+(Math.random()*1e6|0),Hn={};function ns(o,l,f,g,b){if(Array.isArray(l)){for(let C=0;C<l.length;C++)ns(o,l[C],f,g,b);return null}return f=$(f),o&&o[bt]?o.J(l,f,c(g)?!!g.capture:!1,b):zn(o,l,f,!1,g,b)}function zn(o,l,f,g,b,C){if(!l)throw Error("Invalid event type");const j=c(b)?!!b.capture:!!b;let ae=D(o);if(ae||(o[hn]=ae=new mr(o)),f=ae.add(l,f,g,j,C),f.proxy)return f;if(g=yl(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)S||(b=j),b===void 0&&(b=!1),o.addEventListener(l.toString(),g,b);else if(o.attachEvent)o.attachEvent(P(l.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function yl(){function o(f){return l.call(o.src,o.listener,f)}const l=F;return o}function E(o,l,f,g,b){if(Array.isArray(l))for(var C=0;C<l.length;C++)E(o,l[C],f,g,b);else g=c(g)?!!g.capture:!!g,f=$(f),o&&o[bt]?(o=o.i,C=String(l).toString(),C in o.g&&(l=o.g[C],f=Kt(l,f,g,b),f>-1&&(ge(l[f]),Array.prototype.splice.call(l,f,1),l.length==0&&(delete o.g[C],o.h--)))):o&&(o=D(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Kt(l,f,g,b)),(f=o>-1?l[o]:null)&&w(f))}function w(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[bt])ts(l.i,o);else{var f=o.type,g=o.proxy;l.removeEventListener?l.removeEventListener(f,g,o.capture):l.detachEvent?l.detachEvent(P(f),g):l.addListener&&l.removeListener&&l.removeListener(g),(f=D(l))?(ts(f,o),f.h==0&&(f.src=null,l[hn]=null)):ge(o)}}}function P(o){return o in Hn?Hn[o]:Hn[o]="on"+o}function F(o,l){if(o.da)o=!0;else{l=new Le(l,this);const f=o.listener,g=o.ha||o.src;o.fa&&w(o),o=f.call(g,l)}return o}function D(o){return o=o[hn],o instanceof mr?o:null}var k="__closure_events_fn_"+(Math.random()*1e9>>>0);function $(o){return typeof o=="function"?o:(o[k]||(o[k]=function(l){return o.handleEvent(l)}),o[k])}function L(){A.call(this),this.i=new mr(this),this.M=this,this.G=null}p(L,A),L.prototype[bt]=!0,L.prototype.removeEventListener=function(o,l,f,g){E(this,o,l,f,g)};function x(o,l){var f,g=o.G;if(g)for(f=[];g;g=g.G)f.push(g);if(o=o.M,g=l.type||l,typeof l=="string")l=new v(l,o);else if(l instanceof v)l.target=l.target||o;else{var b=l;l=new v(g,o),es(l,b)}b=!0;let C,j;if(f)for(j=f.length-1;j>=0;j--)C=l.g=f[j],b=M(C,g,!0,l)&&b;if(C=l.g=o,b=M(C,g,!0,l)&&b,b=M(C,g,!1,l)&&b,f)for(j=0;j<f.length;j++)C=l.g=f[j],b=M(C,g,!1,l)&&b}L.prototype.N=function(){if(L.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const f=o.g[l];for(let g=0;g<f.length;g++)ge(f[g]);delete o.g[l],o.h--}}this.G=null},L.prototype.J=function(o,l,f,g){return this.i.add(String(o),l,!1,f,g)},L.prototype.K=function(o,l,f,g){return this.i.add(String(o),l,!0,f,g)};function M(o,l,f,g){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let b=!0;for(let C=0;C<l.length;++C){const j=l[C];if(j&&!j.da&&j.capture==f){const ae=j.listener,Oe=j.ha||j.src;j.fa&&ts(o.i,j),b=ae.call(Oe,g)!==!1&&b}}return b&&!g.defaultPrevented}function Y(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function q(o){o.g=Y(()=>{o.g=null,o.i&&(o.i=!1,q(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class X extends A{constructor(l,f){super(),this.m=l,this.l=f,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:q(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ee(o){A.call(this),this.h=o,this.g={}}p(ee,A);var le=[];function Ee(o){mt(o.g,function(l,f){this.g.hasOwnProperty(f)&&w(l)},o),o.g={}}ee.prototype.N=function(){ee.Z.N.call(this),Ee(this)},ee.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pe=a.JSON.stringify,Ge=a.JSON.parse,Qe=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function ht(){}function ft(){}var Tt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function _r(){v.call(this,"d")}p(_r,v);function qe(){v.call(this,"c")}p(qe,v);var Fe={},rs=null;function Wn(){return rs=rs||new L}Fe.Ia="serverreachability";function El(o){v.call(this,Fe.Ia,o)}p(El,v);function ss(o){const l=Wn();x(l,new El(l))}Fe.STAT_EVENT="statevent";function Tl(o,l){v.call(this,Fe.STAT_EVENT,o),this.stat=l}p(Tl,v);function nt(o){const l=Wn();x(l,new Tl(l,o))}Fe.Ja="timingevent";function Il(o,l){v.call(this,Fe.Ja,o),this.size=l}p(Il,v);function is(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function os(){this.g=!0}os.prototype.ua=function(){this.g=!1};function Og(o,l,f,g,b,C){o.info(function(){if(o.g)if(C){var j="",ae=C.split("&");for(let Te=0;Te<ae.length;Te++){var Oe=ae[Te].split("=");if(Oe.length>1){const Ue=Oe[0];Oe=Oe[1];const Pt=Ue.split("_");j=Pt.length>=2&&Pt[1]=="type"?j+(Ue+"="+Oe+"&"):j+(Ue+"=redacted&")}}}else j=null;else j=C;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+l+`
`+f+`
`+j})}function xg(o,l,f,g,b,C,j){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+l+`
`+f+`
`+C+" "+j})}function yr(o,l,f,g){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Lg(o,f)+(g?" "+g:"")})}function Mg(o,l){o.info(function(){return"TIMEOUT: "+l})}os.prototype.info=function(){};function Lg(o,l){if(!o.g)return l;if(!l)return null;try{const C=JSON.parse(l);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var f=C[o];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var b=g[0];if(b!="noop"&&b!="stop"&&b!="close")for(let j=1;j<g.length;j++)g[j]=""}}}}return pe(C)}catch{return l}}var fi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},vl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},wl;function zo(){}p(zo,ht),zo.prototype.g=function(){return new XMLHttpRequest},wl=new zo;function as(o){return encodeURIComponent(String(o))}function Fg(o){var l=1;o=o.split(":");const f=[];for(;l>0&&o.length;)f.push(o.shift()),l--;return o.length&&f.push(o.join(":")),f}function fn(o,l,f,g){this.j=o,this.i=l,this.l=f,this.S=g||1,this.V=new ee(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Al}function Al(){this.i=null,this.g="",this.h=!1}var Sl={},Wo={};function Ko(o,l,f){o.M=1,o.A=pi(Ct(l)),o.u=f,o.R=!0,bl(o,null)}function bl(o,l){o.F=Date.now(),di(o),o.B=Ct(o.A);var f=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),Ul(f.i,"t",g),o.C=0,f=o.j.L,o.h=new Al,o.g=ru(o.j,f?l:null,!o.u),o.P>0&&(o.O=new X(h(o.Y,o,o.g),o.P)),l=o.V,f=o.g,g=o.ba;var b="readystatechange";Array.isArray(b)||(b&&(le[0]=b.toString()),b=le);for(let C=0;C<b.length;C++){const j=ns(f,b[C],g||l.handleEvent,!1,l.h||l);if(!j)break;l.g[j.key]=j}l=o.J?Rt(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),ss(),Og(o.i,o.v,o.B,o.l,o.S,o.u)}fn.prototype.ba=function(o){o=o.target;const l=this.O;l&&gn(o)==3?l.j():this.Y(o)},fn.prototype.Y=function(o){try{if(o==this.g)e:{const ae=gn(this.g),Oe=this.g.ya(),Te=this.g.ca();if(!(ae<3)&&(ae!=3||this.g&&(this.h.h||this.g.la()||Wl(this.g)))){this.K||ae!=4||Oe==7||(Oe==8||Te<=0?ss(3):ss(2)),Go(this);var l=this.g.ca();this.X=l;var f=Ug(this);if(this.o=l==200,xg(this.i,this.v,this.B,this.l,this.S,ae,l),this.o){if(this.U&&!this.L){t:{if(this.g){var g,b=this.g;if((g=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(g)){var C=g;break t}}C=null}if(o=C)yr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qo(this,o);else{this.o=!1,this.m=3,nt(12),Kn(this),cs(this);break e}}if(this.R){o=!0;let Ue;for(;!this.K&&this.C<f.length;)if(Ue=Bg(this,f),Ue==Wo){ae==4&&(this.m=4,nt(14),o=!1),yr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==Sl){this.m=4,nt(15),yr(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else yr(this.i,this.l,Ue,null),Qo(this,Ue);if(Rl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ae!=4||f.length!=0||this.h.h||(this.m=1,nt(16),o=!1),this.o=this.o&&o,!o)yr(this.i,this.l,f,"[Invalid Chunked Response]"),Kn(this),cs(this);else if(f.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),ra(j),j.P=!0,nt(11))}}else yr(this.i,this.l,f,null),Qo(this,f);ae==4&&Kn(this),this.o&&!this.K&&(ae==4?Zl(this.j,this):(this.o=!1,di(this)))}else em(this.g),l==400&&f.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),Kn(this),cs(this)}}}catch{}finally{}};function Ug(o){if(!Rl(o))return o.g.la();const l=Wl(o.g);if(l==="")return"";let f="";const g=l.length,b=gn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Kn(o),cs(o),"";o.h.i=new a.TextDecoder}for(let C=0;C<g;C++)o.h.h=!0,f+=o.h.i.decode(l[C],{stream:!(b&&C==g-1)});return l.length=0,o.h.g+=f,o.C=0,o.h.g}function Rl(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Bg(o,l){var f=o.C,g=l.indexOf(`
`,f);return g==-1?Wo:(f=Number(l.substring(f,g)),isNaN(f)?Sl:(g+=1,g+f>l.length?Wo:(l=l.slice(g,g+f),o.C=g+f,l)))}fn.prototype.cancel=function(){this.K=!0,Kn(this)};function di(o){o.T=Date.now()+o.H,Cl(o,o.H)}function Cl(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=is(h(o.aa,o),l)}function Go(o){o.D&&(a.clearTimeout(o.D),o.D=null)}fn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Mg(this.i,this.B),this.M!=2&&(ss(),nt(17)),Kn(this),this.m=2,cs(this)):Cl(this,this.T-o)};function cs(o){o.j.I==0||o.K||Zl(o.j,o)}function Kn(o){Go(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,Ee(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function Qo(o,l){try{var f=o.j;if(f.I!=0&&(f.g==o||Jo(f.h,o))){if(!o.L&&Jo(f.h,o)&&f.I==3){try{var g=f.Ba.g.parse(l)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)Ei(f),_i(f);else break e;na(f),nt(18)}}else f.xa=b[1],0<f.xa-f.K&&b[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=is(h(f.Va,f),6e3));Dl(f.h)<=1&&f.ta&&(f.ta=void 0)}else Qn(f,11)}else if((o.L||f.g==o)&&Ei(f),!y(l))for(b=f.Ba.g.parse(l),l=0;l<b.length;l++){let Te=b[l];const Ue=Te[0];if(!(Ue<=f.K))if(f.K=Ue,Te=Te[1],f.I==2)if(Te[0]=="c"){f.M=Te[1],f.ba=Te[2];const Pt=Te[3];Pt!=null&&(f.ka=Pt,f.j.info("VER="+f.ka));const Jn=Te[4];Jn!=null&&(f.za=Jn,f.j.info("SVER="+f.za));const mn=Te[5];mn!=null&&typeof mn=="number"&&mn>0&&(g=1.5*mn,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const _n=o.g;if(_n){const Ii=_n.g?_n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ii){var C=g.h;C.g||Ii.indexOf("spdy")==-1&&Ii.indexOf("quic")==-1&&Ii.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Xo(C,C.h),C.h=null))}if(g.G){const sa=_n.g?_n.g.getResponseHeader("X-HTTP-Session-Id"):null;sa&&(g.wa=sa,Ae(g.J,g.G,sa))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var j=o;if(g.na=nu(g,g.L?g.ba:null,g.W),j.L){kl(g.h,j);var ae=j,Oe=g.O;Oe&&(ae.H=Oe),ae.D&&(Go(ae),di(ae)),g.g=j}else Xl(g);f.i.length>0&&yi(f)}else Te[0]!="stop"&&Te[0]!="close"||Qn(f,7);else f.I==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?Qn(f,7):ta(f):Te[0]!="noop"&&f.l&&f.l.qa(Te),f.A=0)}}ss(4)}catch{}}var jg=class{constructor(o,l){this.g=o,this.map=l}};function Pl(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Vl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Dl(o){return o.h?1:o.g?o.g.size:0}function Jo(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Xo(o,l){o.g?o.g.add(l):o.h=l}function kl(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Pl.prototype.cancel=function(){if(this.i=Nl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Nl(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const f of o.g.values())l=l.concat(f.G);return l}return R(o.i)}var Ol=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $g(o,l){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const g=o[f].indexOf("=");let b,C=null;g>=0?(b=o[f].substring(0,g),C=o[f].substring(g+1)):b=o[f],l(b,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function dn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof dn?(this.l=o.l,ls(this,o.j),this.o=o.o,this.g=o.g,us(this,o.u),this.h=o.h,Yo(this,Bl(o.i)),this.m=o.m):o&&(l=String(o).match(Ol))?(this.l=!1,ls(this,l[1]||"",!0),this.o=hs(l[2]||""),this.g=hs(l[3]||"",!0),us(this,l[4]),this.h=hs(l[5]||"",!0),Yo(this,l[6]||"",!0),this.m=hs(l[7]||"")):(this.l=!1,this.i=new ds(null,this.l))}dn.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(fs(l,xl,!0),":");var f=this.g;return(f||l=="file")&&(o.push("//"),(l=this.o)&&o.push(fs(l,xl,!0),"@"),o.push(as(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(fs(f,f.charAt(0)=="/"?zg:Hg,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",fs(f,Kg)),o.join("")},dn.prototype.resolve=function(o){const l=Ct(this);let f=!!o.j;f?ls(l,o.j):f=!!o.o,f?l.o=o.o:f=!!o.g,f?l.g=o.g:f=o.u!=null;var g=o.h;if(f)us(l,o.u);else if(f=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var b=l.h.lastIndexOf("/");b!=-1&&(g=l.h.slice(0,b+1)+g)}if(b=g,b==".."||b==".")g="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){g=b.lastIndexOf("/",0)==0,b=b.split("/");const C=[];for(let j=0;j<b.length;){const ae=b[j++];ae=="."?g&&j==b.length&&C.push(""):ae==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),g&&j==b.length&&C.push("")):(C.push(ae),g=!0)}g=C.join("/")}else g=b}return f?l.h=g:f=o.i.toString()!=="",f?Yo(l,Bl(o.i)):f=!!o.m,f&&(l.m=o.m),l};function Ct(o){return new dn(o)}function ls(o,l,f){o.j=f?hs(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function us(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function Yo(o,l,f){l instanceof ds?(o.i=l,Gg(o.i,o.l)):(f||(l=fs(l,Wg)),o.i=new ds(l,o.l))}function Ae(o,l,f){o.i.set(l,f)}function pi(o){return Ae(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function hs(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function fs(o,l,f){return typeof o=="string"?(o=encodeURI(o).replace(l,qg),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function qg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var xl=/[#\/\?@]/g,Hg=/[#\?:]/g,zg=/[#\?]/g,Wg=/[#\?@]/g,Kg=/#/g;function ds(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Gn(o){o.g||(o.g=new Map,o.h=0,o.i&&$g(o.i,function(l,f){o.add(decodeURIComponent(l.replace(/\+/g," ")),f)}))}n=ds.prototype,n.add=function(o,l){Gn(this),this.i=null,o=Er(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(l),this.h+=1,this};function Ml(o,l){Gn(o),l=Er(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Ll(o,l){return Gn(o),l=Er(o,l),o.g.has(l)}n.forEach=function(o,l){Gn(this),this.g.forEach(function(f,g){f.forEach(function(b){o.call(l,b,g,this)},this)},this)};function Fl(o,l){Gn(o);let f=[];if(typeof l=="string")Ll(o,l)&&(f=f.concat(o.g.get(Er(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)f=f.concat(o[l]);return f}n.set=function(o,l){return Gn(this),this.i=null,o=Er(this,o),Ll(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=Fl(this,o),o.length>0?String(o[0]):l):l};function Ul(o,l,f){Ml(o,l),f.length>0&&(o.i=null,o.g.set(Er(o,l),R(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let g=0;g<l.length;g++){var f=l[g];const b=as(f);f=Fl(this,f);for(let C=0;C<f.length;C++){let j=b;f[C]!==""&&(j+="="+as(f[C])),o.push(j)}}return this.i=o.join("&")};function Bl(o){const l=new ds;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function Er(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Gg(o,l){l&&!o.j&&(Gn(o),o.i=null,o.g.forEach(function(f,g){const b=g.toLowerCase();g!=b&&(Ml(this,g),Ul(this,b,f))},o)),o.j=l}function Qg(o,l){const f=new os;if(a.Image){const g=new Image;g.onload=d(pn,f,"TestLoadImage: loaded",!0,l,g),g.onerror=d(pn,f,"TestLoadImage: error",!1,l,g),g.onabort=d(pn,f,"TestLoadImage: abort",!1,l,g),g.ontimeout=d(pn,f,"TestLoadImage: timeout",!1,l,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else l(!1)}function Jg(o,l){const f=new os,g=new AbortController,b=setTimeout(()=>{g.abort(),pn(f,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(b),C.ok?pn(f,"TestPingServer: ok",!0,l):pn(f,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),pn(f,"TestPingServer: error",!1,l)})}function pn(o,l,f,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(f)}catch{}}function Xg(){this.g=new Qe}function Zo(o){this.i=o.Sb||null,this.h=o.ab||!1}p(Zo,ht),Zo.prototype.g=function(){return new gi(this.i,this.h)};function gi(o,l){L.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(gi,L),n=gi.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,gs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ps(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,gs(this)),this.g&&(this.readyState=3,gs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;jl(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function jl(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?ps(this):gs(this),this.readyState==3&&jl(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,ps(this))},n.Na=function(o){this.g&&(this.response=o,ps(this))},n.ga=function(){this.g&&ps(this)};function ps(o){o.readyState=4,o.l=null,o.j=null,o.B=null,gs(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var f=l.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=l.next();return o.join(`\r
`)};function gs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function $l(o){let l="";return mt(o,function(f,g){l+=g,l+=":",l+=f,l+=`\r
`}),l}function ea(o,l,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=$l(f),typeof o=="string"?f!=null&&as(f):Ae(o,l,f))}function Pe(o){L.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Pe,L);var Yg=/^https?$/i,Zg=["POST","PUT"];n=Pe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():wl.g(),this.g.onreadystatechange=_(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(C){ql(this,C);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)f.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),b=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Zg,l,void 0)>=0)||g||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,j]of f)this.g.setRequestHeader(C,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){ql(this,C)}};function ql(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,Hl(o),mi(o)}function Hl(o){o.A||(o.A=!0,x(o,"complete"),x(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,x(this,"complete"),x(this,"abort"),mi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mi(this,!0)),Pe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?zl(this):this.Xa())},n.Xa=function(){zl(this)};function zl(o){if(o.h&&typeof i<"u"){if(o.v&&gn(o)==4)setTimeout(o.Ca.bind(o),0);else if(x(o,"readystatechange"),gn(o)==4){o.h=!1;try{const C=o.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var f;if(!(f=l)){var g;if(g=C===0){let j=String(o.D).match(Ol)[1]||null;!j&&a.self&&a.self.location&&(j=a.self.location.protocol.slice(0,-1)),g=!Yg.test(j?j.toLowerCase():"")}f=g}if(f)x(o,"complete"),x(o,"success");else{o.o=6;try{var b=gn(o)>2?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.ca()+"]",Hl(o)}}finally{mi(o)}}}}function mi(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,l||x(o,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function gn(o){return o.g?o.g.readyState:0}n.ca=function(){try{return gn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Ge(l)}};function Wl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function em(o){const l={};o=(o.g&&gn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(y(o[g]))continue;var f=Fg(o[g]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=l[b]||[];l[b]=C,C.push(f)}gr(l,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ms(o,l,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||l}function Kl(o){this.za=0,this.i=[],this.j=new os,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ms("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ms("baseRetryDelayMs",5e3,o),this.Za=ms("retryDelaySeedMs",1e4,o),this.Ta=ms("forwardChannelMaxRetries",2,o),this.va=ms("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Pl(o&&o.concurrentRequestLimit),this.Ba=new Xg,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Kl.prototype,n.ka=8,n.I=1,n.connect=function(o,l,f,g){nt(0),this.W=o,this.H=l||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=nu(this,null,this.W),yi(this)};function ta(o){if(Gl(o),o.I==3){var l=o.V++,f=Ct(o.J);if(Ae(f,"SID",o.M),Ae(f,"RID",l),Ae(f,"TYPE","terminate"),_s(o,f),l=new fn(o,o.j,l),l.M=2,l.A=pi(Ct(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=l.A,f=!0),f||(l.g=ru(l.j,null),l.g.ea(l.A)),l.F=Date.now(),di(l)}tu(o)}function _i(o){o.g&&(ra(o),o.g.cancel(),o.g=null)}function Gl(o){_i(o),o.v&&(a.clearTimeout(o.v),o.v=null),Ei(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function yi(o){if(!Vl(o.h)&&!o.m){o.m=!0;var l=o.Ea;G||m(),oe||(G(),oe=!0),I.add(l,o),o.D=0}}function tm(o,l){return Dl(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=is(h(o.Ea,o,l),eu(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const b=new fn(this,this.j,o);let C=this.o;if(this.U&&(C?(C=Rt(C),es(C,this.U)):C=this.U),this.u!==null||this.R||(b.J=C,C=null),this.S)e:{for(var l=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(l+=g,l>4096){l=f;break e}if(l===4096||f===this.i.length-1){l=f+1;break e}}l=1e3}else l=1e3;l=Jl(this,b,l),f=Ct(this.J),Ae(f,"RID",o),Ae(f,"CVER",22),this.G&&Ae(f,"X-HTTP-Session-Id",this.G),_s(this,f),C&&(this.R?l="headers="+as($l(C))+"&"+l:this.u&&ea(f,this.u,C)),Xo(this.h,b),this.Ra&&Ae(f,"TYPE","init"),this.S?(Ae(f,"$req",l),Ae(f,"SID","null"),b.U=!0,Ko(b,f,null)):Ko(b,f,l),this.I=2}}else this.I==3&&(o?Ql(this,o):this.i.length==0||Vl(this.h)||Ql(this))};function Ql(o,l){var f;l?f=l.l:f=o.V++;const g=Ct(o.J);Ae(g,"SID",o.M),Ae(g,"RID",f),Ae(g,"AID",o.K),_s(o,g),o.u&&o.o&&ea(g,o.u,o.o),f=new fn(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),l&&(o.i=l.G.concat(o.i)),l=Jl(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Xo(o.h,f),Ko(f,g,l)}function _s(o,l){o.H&&mt(o.H,function(f,g){Ae(l,g,f)}),o.l&&mt({},function(f,g){Ae(l,g,f)})}function Jl(o,l,f){f=Math.min(o.i.length,f);const g=o.l?h(o.l.Ka,o.l,o):null;e:{var b=o.i;let ae=-1;for(;;){const Oe=["count="+f];ae==-1?f>0?(ae=b[0].g,Oe.push("ofs="+ae)):ae=0:Oe.push("ofs="+ae);let Te=!0;for(let Ue=0;Ue<f;Ue++){var C=b[Ue].g;const Pt=b[Ue].map;if(C-=ae,C<0)ae=Math.max(0,b[Ue].g-100),Te=!1;else try{C="req"+C+"_"||"";try{var j=Pt instanceof Map?Pt:Object.entries(Pt);for(const[Jn,mn]of j){let _n=mn;c(mn)&&(_n=pe(mn)),Oe.push(C+Jn+"="+encodeURIComponent(_n))}}catch(Jn){throw Oe.push(C+"type="+encodeURIComponent("_badmap")),Jn}}catch{g&&g(Pt)}}if(Te){j=Oe.join("&");break e}}j=void 0}return o=o.i.splice(0,f),l.G=o,j}function Xl(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;G||m(),oe||(G(),oe=!0),I.add(l,o),o.A=0}}function na(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=is(h(o.Da,o),eu(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Yl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=is(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),_i(this),Yl(this))};function ra(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Yl(o){o.g=new fn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=Ct(o.na);Ae(l,"RID","rpc"),Ae(l,"SID",o.M),Ae(l,"AID",o.K),Ae(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&Ae(l,"TO",o.ia),Ae(l,"TYPE","xmlhttp"),_s(o,l),o.u&&o.o&&ea(l,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=pi(Ct(l)),f.u=null,f.R=!0,bl(f,o)}n.Va=function(){this.C!=null&&(this.C=null,_i(this),na(this),nt(19))};function Ei(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Zl(o,l){var f=null;if(o.g==l){Ei(o),ra(o),o.g=null;var g=2}else if(Jo(o.h,l))f=l.G,kl(o.h,l),g=1;else return;if(o.I!=0){if(l.o)if(g==1){f=l.u?l.u.length:0,l=Date.now()-l.F;var b=o.D;g=Wn(),x(g,new Il(g,f)),yi(o)}else Xl(o);else if(b=l.m,b==3||b==0&&l.X>0||!(g==1&&tm(o,l)||g==2&&na(o)))switch(f&&f.length>0&&(l=o.h,l.i=l.i.concat(f)),b){case 1:Qn(o,5);break;case 4:Qn(o,10);break;case 3:Qn(o,6);break;default:Qn(o,2)}}}function eu(o,l){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*l}function Qn(o,l){if(o.j.info("Error code "+l),l==2){var f=h(o.bb,o),g=o.Ua;const b=!g;g=new dn(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ls(g,"https"),pi(g),b?Qg(g.toString(),f):Jg(g.toString(),f)}else nt(2);o.I=0,o.l&&o.l.pa(l),tu(o),Gl(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function tu(o){if(o.I=0,o.ja=[],o.l){const l=Nl(o.h);(l.length!=0||o.i.length!=0)&&(O(o.ja,l),O(o.ja,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.oa()}}function nu(o,l,f){var g=f instanceof dn?Ct(f):new dn(f);if(g.g!="")l&&(g.g=l+"."+g.g),us(g,g.u);else{var b=a.location;g=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;const C=new dn(null);g&&ls(C,g),l&&(C.g=l),b&&us(C,b),f&&(C.h=f),g=C}return f=o.G,l=o.wa,f&&l&&Ae(g,f,l),Ae(g,"VER",o.ka),_s(o,g),g}function ru(o,l,f){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new Pe(new Zo({ab:f})):new Pe(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function su(){}n=su.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ti(){}Ti.prototype.g=function(o,l){return new dt(o,l)};function dt(o,l){L.call(this),this.g=new Kl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!y(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!y(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Tr(this)}p(dt,L),dt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},dt.prototype.close=function(){ta(this.g)},dt.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=pe(o),o=f);l.i.push(new jg(l.Ya++,o)),l.I==3&&yi(l)},dt.prototype.N=function(){this.g.l=null,delete this.j,ta(this.g),delete this.g,dt.Z.N.call(this)};function iu(o){_r.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const f in l){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}p(iu,_r);function ou(){qe.call(this),this.status=1}p(ou,qe);function Tr(o){this.g=o}p(Tr,su),Tr.prototype.ra=function(){x(this.g,"a")},Tr.prototype.qa=function(o){x(this.g,new iu(o))},Tr.prototype.pa=function(o){x(this.g,new ou)},Tr.prototype.oa=function(){x(this.g,"b")},Ti.prototype.createWebChannel=Ti.prototype.g,dt.prototype.send=dt.prototype.o,dt.prototype.open=dt.prototype.m,dt.prototype.close=dt.prototype.close,Nd=function(){return new Ti},kd=function(){return Wn()},Dd=Fe,Wa={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},fi.NO_ERROR=0,fi.TIMEOUT=8,fi.HTTP_ERROR=6,Oi=fi,vl.COMPLETE="complete",Vd=vl,ft.EventType=Tt,Tt.OPEN="a",Tt.CLOSE="b",Tt.ERROR="c",Tt.MESSAGE="d",L.prototype.listen=L.prototype.J,vs=ft,Pe.prototype.listenOnce=Pe.prototype.K,Pe.prototype.getLastError=Pe.prototype.Ha,Pe.prototype.getLastErrorCode=Pe.prototype.ya,Pe.prototype.getStatus=Pe.prototype.ca,Pe.prototype.getResponseJson=Pe.prototype.La,Pe.prototype.getResponseText=Pe.prototype.la,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Fa,Pd=Pe}).apply(typeof Si<"u"?Si:typeof self<"u"?self:typeof window<"u"?window:{});const Ju="@firebase/firestore",Xu="4.9.2";/**
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
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let Qr="12.3.0";/**
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
 */const ar=new Dc("@firebase/firestore");function wr(){return ar.logLevel}function z(n,...e){if(ar.logLevel<=ue.DEBUG){const t=e.map(Oc);ar.debug(`Firestore (${Qr}): ${n}`,...t)}}function sn(n,...e){if(ar.logLevel<=ue.ERROR){const t=e.map(Oc);ar.error(`Firestore (${Qr}): ${n}`,...t)}}function Br(n,...e){if(ar.logLevel<=ue.WARN){const t=e.map(Oc);ar.warn(`Firestore (${Qr}): ${n}`,...t)}}function Oc(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function te(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Od(n,r,t)}function Od(n,e,t){let r=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw sn(r),new Error(r)}function ye(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Od(e,s,r)}function se(n,e){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends un{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class xd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Xe.UNAUTHENTICATED)))}shutdown(){}}class dT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class pT{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ye(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kn,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kn)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string",31837,{l:r}),new xd(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new Xe(e)}}class gT{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class mT{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new gT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Xe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Yu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _T{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ye(this.o===void 0,3512);const r=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Yu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Yu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function yT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class xc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=yT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function he(n,e){return n<e?-1:n>e?1:0}function Ka(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return va(s)===va(i)?he(s,i):va(s)?1:-1}return he(n.length,e.length)}const ET=55296,TT=57343;function va(n){const e=n.charCodeAt(0);return e>=ET&&e<=TT}function jr(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const Zu="__name__";class kt{constructor(e,t,r){t===void 0?t=0:t>e.length&&te(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&te(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return kt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof kt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=kt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return he(e.length,t.length)}static compareSegments(e,t){const r=kt.isNumericId(e),s=kt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?kt.extractNumericId(e).compare(kt.extractNumericId(t)):Ka(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dn.fromString(e.substring(4,e.length-2))}}class Re extends kt{construct(e,t,r){return new Re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Re(t)}static emptyPath(){return new Re([])}}const IT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends kt{construct(e,t,r){return new We(e,t,r)}static isValidIdentifier(e){return IT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zu}static keyField(){return new We([Zu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Q(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Q(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new Q(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(t)}static emptyPath(){return new We([])}}/**
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
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Re.fromString(e))}static fromName(e){return new Z(Re.fromString(e).popFirst(5))}static empty(){return new Z(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Re(e.slice()))}}/**
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
 */function vT(n,e,t){if(!t)throw new Q(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function wT(n,e,t,r){if(e===!0&&r===!0)throw new Q(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function eh(n){if(!Z.isDocumentKey(n))throw new Q(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Md(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Mc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":te(12329,{type:typeof n})}function $r(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Q(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Mc(n);throw new Q(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ke(n,e){const t={typeString:n};return e&&(t.value=e),t}function si(n,e){if(!Md(n))throw new Q(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new Q(N.INVALID_ARGUMENT,t);return!0}/**
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
 */const th=-62135596800,nh=1e6;class Se{static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*nh);return new Se(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Q(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Q(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<th)throw new Q(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/nh}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(si(e,Se._jsonSchema))return new Se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-th;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Se._jsonSchemaVersion="firestore/timestamp/1.0",Se._jsonSchema={type:ke("string",Se._jsonSchemaVersion),seconds:ke("number"),nanoseconds:ke("number")};/**
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
 */class re{static fromTimestamp(e){return new re(e)}static min(){return new re(new Se(0,0))}static max(){return new re(new Se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ws=-1;function AT(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new Se(t+1,0):new Se(t,r));return new Mn(s,Z.empty(),e)}function ST(n){return new Mn(n.readTime,n.key,Ws)}class Mn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Mn(re.min(),Z.empty(),Ws)}static max(){return new Mn(re.max(),Z.empty(),Ws)}}function bT(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:he(n.largestBatchId,e.largestBatchId))}/**
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
 */const RT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Jr(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==RT)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):V.reject(t)}static resolve(e){return new V(((t,r)=>{t(e)}))}static reject(e){return new V(((t,r)=>{r(e)}))}static waitFor(e){return new V(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(u=>r(u)))})),a=!0,i===s&&t()}))}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next((s=>s?V.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new V(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next((d=>{a[h]=d,++c,c===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,t){return new V(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function PT(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Xr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Co{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Co.ce=-1;/**
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
 */const Lc=-1;function Po(n){return n==null}function Zi(n){return n===0&&1/n==-1/0}function VT(n){return typeof n=="number"&&Number.isInteger(n)&&!Zi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ld="";function DT(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=rh(e)),e=kT(n.get(t),e);return rh(e)}function kT(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Ld:t+="";break;default:t+=i}}return t}function rh(n){return n+Ld+""}/**
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
 */function sh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function hr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Fd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ce{constructor(e,t){this.comparator=e,this.root=t||He.EMPTY}insert(e,t){return new Ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bi(this.root,e,this.comparator,!1)}getReverseIterator(){return new bi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bi(this.root,e,this.comparator,!0)}}class bi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??He.RED,this.left=s??He.EMPTY,this.right=i??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new He(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return He.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new He(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Me{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ih(this.data.getIterator())}getIteratorFrom(e){return new ih(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Me(this.comparator);return t.data=e,t}}class ih{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class wt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new wt([])}unionWith(e){let t=new Me(We.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new wt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return jr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class Ud extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ud("Invalid base64 string: "+i):i}})(e);return new Ke(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Ke(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const NT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ln(n){if(ye(!!n,39018),typeof n=="string"){let e=0;const t=NT.exec(n);if(ye(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(n.seconds),nanos:Ve(n.nanos)}}function Ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Fn(n){return typeof n=="string"?Ke.fromBase64String(n):Ke.fromUint8Array(n)}/**
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
 */const Bd="server_timestamp",jd="__type__",$d="__previous_value__",qd="__local_write_time__";function Fc(n){return(n?.mapValue?.fields||{})[jd]?.stringValue===Bd}function Vo(n){const e=n.mapValue.fields[$d];return Fc(e)?Vo(e):e}function Ks(n){const e=Ln(n.mapValue.fields[qd].timestampValue);return new Se(e.seconds,e.nanos)}/**
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
 */class OT{constructor(e,t,r,s,i,a,c,u,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=d}}const eo="(default)";class Gs{constructor(e,t){this.projectId=e,this.database=t||eo}static empty(){return new Gs("","")}get isDefaultDatabase(){return this.database===eo}isEqual(e){return e instanceof Gs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Hd="__type__",xT="__max__",Ri={mapValue:{}},zd="__vector__",to="value";function Un(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Fc(n)?4:LT(n)?9007199254740991:MT(n)?10:11:te(28295,{value:n})}function zt(n,e){if(n===e)return!0;const t=Un(n);if(t!==Un(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ks(n).isEqual(Ks(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Ln(s.timestampValue),c=Ln(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Fn(s.bytesValue).isEqual(Fn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ve(s.doubleValue),c=Ve(i.doubleValue);return a===c?Zi(a)===Zi(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return jr(n.arrayValue.values||[],e.arrayValue.values||[],zt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(sh(a)!==sh(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!zt(a[u],c[u])))return!1;return!0})(n,e);default:return te(52216,{left:n})}}function Qs(n,e){return(n.values||[]).find((t=>zt(t,e)))!==void 0}function qr(n,e){if(n===e)return 0;const t=Un(n),r=Un(e);if(t!==r)return he(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return he(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=Ve(i.integerValue||i.doubleValue),u=Ve(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return oh(n.timestampValue,e.timestampValue);case 4:return oh(Ks(n),Ks(e));case 5:return Ka(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Fn(i),u=Fn(a);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const d=he(c[h],u[h]);if(d!==0)return d}return he(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=he(Ve(i.latitude),Ve(a.latitude));return c!==0?c:he(Ve(i.longitude),Ve(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return ah(n.arrayValue,e.arrayValue);case 10:return(function(i,a){const c=i.fields||{},u=a.fields||{},h=c[to]?.arrayValue,d=u[to]?.arrayValue,p=he(h?.values?.length||0,d?.values?.length||0);return p!==0?p:ah(h,d)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Ri.mapValue&&a===Ri.mapValue)return 0;if(i===Ri.mapValue)return 1;if(a===Ri.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=a.fields||{},d=Object.keys(h);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const _=Ka(u[p],d[p]);if(_!==0)return _;const R=qr(c[u[p]],h[d[p]]);if(R!==0)return R}return he(u.length,d.length)})(n.mapValue,e.mapValue);default:throw te(23264,{he:t})}}function oh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return he(n,e);const t=Ln(n),r=Ln(e),s=he(t.seconds,r.seconds);return s!==0?s:he(t.nanos,r.nanos)}function ah(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=qr(t[s],r[s]);if(i)return i}return he(t.length,r.length)}function Hr(n){return Ga(n)}function Ga(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Ln(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Fn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Z.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ga(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ga(t.fields[a])}`;return s+"}"})(n.mapValue):te(61005,{value:n})}function xi(n){switch(Un(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vo(n);return e?16+xi(e):16;case 5:return 2*n.stringValue.length;case 6:return Fn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+xi(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return hr(r.fields,((i,a)=>{s+=i.length+xi(a)})),s})(n.mapValue);default:throw te(13486,{value:n})}}function Qa(n){return!!n&&"integerValue"in n}function Uc(n){return!!n&&"arrayValue"in n}function ch(n){return!!n&&"nullValue"in n}function lh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Mi(n){return!!n&&"mapValue"in n}function MT(n){return(n?.mapValue?.fields||{})[Hd]?.stringValue===zd}function Os(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return hr(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Os(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Os(n.arrayValue.values[t]);return e}return{...n}}function LT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===xT}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Mi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Os(t)}setAll(e){let t=We.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Os(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Mi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return zt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Mi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){hr(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new _t(Os(this.value))}}function Wd(n){const e=[];return hr(n.fields,((t,r)=>{const s=new We([t]);if(Mi(r)){const i=Wd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new wt(e)}/**
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
 */class Ze{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ze(e,0,re.min(),re.min(),re.min(),_t.empty(),0)}static newFoundDocument(e,t,r,s){return new Ze(e,1,t,re.min(),r,s,0)}static newNoDocument(e,t){return new Ze(e,2,t,re.min(),re.min(),_t.empty(),0)}static newUnknownDocument(e,t){return new Ze(e,3,t,re.min(),re.min(),_t.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class no{constructor(e,t){this.position=e,this.inclusive=t}}function uh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(a.referenceValue),t.key):r=qr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!zt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ro{constructor(e,t="asc"){this.field=e,this.dir=t}}function FT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Kd{}class xe extends Kd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new BT(e,t,r):t==="array-contains"?new qT(e,r):t==="in"?new HT(e,r):t==="not-in"?new zT(e,r):t==="array-contains-any"?new WT(e,r):new xe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new jT(e,r):new $T(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(qr(t,this.value)):t!==null&&Un(this.value)===Un(t)&&this.matchesComparison(qr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends Kd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Wt(e,t)}matches(e){return Gd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Gd(n){return n.op==="and"}function Qd(n){return UT(n)&&Gd(n)}function UT(n){for(const e of n.filters)if(e instanceof Wt)return!1;return!0}function Ja(n){if(n instanceof xe)return n.field.canonicalString()+n.op.toString()+Hr(n.value);if(Qd(n))return n.filters.map((e=>Ja(e))).join(",");{const e=n.filters.map((t=>Ja(t))).join(",");return`${n.op}(${e})`}}function Jd(n,e){return n instanceof xe?(function(r,s){return s instanceof xe&&r.op===s.op&&r.field.isEqual(s.field)&&zt(r.value,s.value)})(n,e):n instanceof Wt?(function(r,s){return s instanceof Wt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&Jd(a,s.filters[c])),!0):!1})(n,e):void te(19439)}function Xd(n){return n instanceof xe?(function(t){return`${t.field.canonicalString()} ${t.op} ${Hr(t.value)}`})(n):n instanceof Wt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Xd).join(" ,")+"}"})(n):"Filter"}class BT extends xe{constructor(e,t,r){super(e,t,r),this.key=Z.fromName(r.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class jT extends xe{constructor(e,t){super(e,"in",t),this.keys=Yd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class $T extends xe{constructor(e,t){super(e,"not-in",t),this.keys=Yd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Yd(n,e){return(e.arrayValue?.values||[]).map((t=>Z.fromName(t.referenceValue)))}class qT extends xe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Uc(t)&&Qs(t.arrayValue,this.value)}}class HT extends xe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qs(this.value.arrayValue,t)}}class zT extends xe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Qs(this.value.arrayValue,t)}}class WT extends xe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Uc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Qs(this.value.arrayValue,r)))}}/**
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
 */class KT{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function fh(n,e=null,t=[],r=[],s=null,i=null,a=null){return new KT(n,e,t,r,s,i,a)}function Bc(n){const e=se(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Ja(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Po(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Hr(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Hr(r))).join(",")),e.Te=t}return e.Te}function jc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!FT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Jd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!hh(n.startAt,e.startAt)&&hh(n.endAt,e.endAt)}function Xa(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Do{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function GT(n,e,t,r,s,i,a,c){return new Do(n,e,t,r,s,i,a,c)}function $c(n){return new Do(n)}function dh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function QT(n){return n.collectionGroup!==null}function xs(n){const e=se(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Me(We.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ro(i,r))})),t.has(We.keyField().canonicalString())||e.Ie.push(new ro(We.keyField(),r))}return e.Ie}function Mt(n){const e=se(n);return e.Ee||(e.Ee=JT(e,xs(n))),e.Ee}function JT(n,e){if(n.limitType==="F")return fh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ro(s.field,i)}));const t=n.endAt?new no(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new no(n.startAt.position,n.startAt.inclusive):null;return fh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ya(n,e,t){return new Do(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ko(n,e){return jc(Mt(n),Mt(e))&&n.limitType===e.limitType}function Zd(n){return`${Bc(Mt(n))}|lt:${n.limitType}`}function Ar(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Xd(s))).join(", ")}]`),Po(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Hr(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Hr(s))).join(",")),`Target(${r})`})(Mt(n))}; limitType=${n.limitType})`}function No(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of xs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,u){const h=uh(a,c,u);return a.inclusive?h<=0:h<0})(r.startAt,xs(r),s)||r.endAt&&!(function(a,c,u){const h=uh(a,c,u);return a.inclusive?h>=0:h>0})(r.endAt,xs(r),s))})(n,e)}function XT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ep(n){return(e,t)=>{let r=!1;for(const s of xs(n)){const i=YT(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function YT(n,e,t){const r=n.field.isKeyField()?Z.comparator(e.key,t.key):(function(i,a,c){const u=a.data.field(i),h=c.data.field(i);return u!==null&&h!==null?qr(u,h):te(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:n.dir})}}/**
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
 */class fr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){hr(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Fd(this.inner)}size(){return this.innerSize}}/**
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
 */const ZT=new Ce(Z.comparator);function on(){return ZT}const tp=new Ce(Z.comparator);function ws(...n){let e=tp;for(const t of n)e=e.insert(t.key,t);return e}function np(n){let e=tp;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function tr(){return Ms()}function rp(){return Ms()}function Ms(){return new fr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const eI=new Ce(Z.comparator),tI=new Me(Z.comparator);function fe(...n){let e=tI;for(const t of n)e=e.add(t);return e}const nI=new Me(he);function rI(){return nI}/**
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
 */function qc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zi(e)?"-0":e}}function sp(n){return{integerValue:""+n}}function sI(n,e){return VT(e)?sp(e):qc(n,e)}/**
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
 */class Oo{constructor(){this._=void 0}}function iI(n,e,t){return n instanceof so?(function(s,i){const a={fields:{[jd]:{stringValue:Bd},[qd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Fc(i)&&(i=Vo(i)),i&&(a.fields[$d]=i),{mapValue:a}})(t,e):n instanceof Js?op(n,e):n instanceof Xs?ap(n,e):(function(s,i){const a=ip(s,i),c=ph(a)+ph(s.Ae);return Qa(a)&&Qa(s.Ae)?sp(c):qc(s.serializer,c)})(n,e)}function oI(n,e,t){return n instanceof Js?op(n,e):n instanceof Xs?ap(n,e):t}function ip(n,e){return n instanceof io?(function(r){return Qa(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class so extends Oo{}class Js extends Oo{constructor(e){super(),this.elements=e}}function op(n,e){const t=cp(e);for(const r of n.elements)t.some((s=>zt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Xs extends Oo{constructor(e){super(),this.elements=e}}function ap(n,e){let t=cp(e);for(const r of n.elements)t=t.filter((s=>!zt(s,r)));return{arrayValue:{values:t}}}class io extends Oo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ph(n){return Ve(n.integerValue||n.doubleValue)}function cp(n){return Uc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function aI(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Js&&s instanceof Js||r instanceof Xs&&s instanceof Xs?jr(r.elements,s.elements,zt):r instanceof io&&s instanceof io?zt(r.Ae,s.Ae):r instanceof so&&s instanceof so})(n.transform,e.transform)}class cI{constructor(e,t){this.version=e,this.transformResults=t}}class Lt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Li(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class xo{}function lp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Hc(n.key,Lt.none()):new ii(n.key,n.data,Lt.none());{const t=n.data,r=_t.empty();let s=new Me(We.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new dr(n.key,r,new wt(s.toArray()),Lt.none())}}function lI(n,e,t){n instanceof ii?(function(s,i,a){const c=s.value.clone(),u=mh(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof dr?(function(s,i,a){if(!Li(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=mh(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(up(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Ls(n,e,t,r){return n instanceof ii?(function(i,a,c,u){if(!Li(i.precondition,a))return c;const h=i.value.clone(),d=_h(i.fieldTransforms,u,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof dr?(function(i,a,c,u){if(!Li(i.precondition,a))return c;const h=_h(i.fieldTransforms,u,a),d=a.data;return d.setAll(up(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,a,c){return Li(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function uI(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=ip(r.transform,s||null);i!=null&&(t===null&&(t=_t.empty()),t.set(r.field,i))}return t||null}function gh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&jr(r,s,((i,a)=>aI(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ii extends xo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class dr extends xo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function up(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function mh(n,e,t){const r=new Map;ye(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,oI(a,c,t[s]))}return r}function _h(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,iI(i,a,e))}return r}class Hc extends xo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hI extends xo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class fI{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lI(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ls(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ls(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=rp();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=lp(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(re.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),fe())}isEqual(e){return this.batchId===e.batchId&&jr(this.mutations,e.mutations,((t,r)=>gh(t,r)))&&jr(this.baseMutations,e.baseMutations,((t,r)=>gh(t,r)))}}class zc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ye(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return eI})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new zc(e,t,r,s)}}/**
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
 */class dI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class pI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var De,de;function gI(n){switch(n){case N.OK:return te(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return te(15467,{code:n})}}function hp(n){if(n===void 0)return sn("GRPC error has no .code"),N.UNKNOWN;switch(n){case De.OK:return N.OK;case De.CANCELLED:return N.CANCELLED;case De.UNKNOWN:return N.UNKNOWN;case De.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case De.INTERNAL:return N.INTERNAL;case De.UNAVAILABLE:return N.UNAVAILABLE;case De.UNAUTHENTICATED:return N.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case De.NOT_FOUND:return N.NOT_FOUND;case De.ALREADY_EXISTS:return N.ALREADY_EXISTS;case De.PERMISSION_DENIED:return N.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case De.ABORTED:return N.ABORTED;case De.OUT_OF_RANGE:return N.OUT_OF_RANGE;case De.UNIMPLEMENTED:return N.UNIMPLEMENTED;case De.DATA_LOSS:return N.DATA_LOSS;default:return te(39323,{code:n})}}(de=De||(De={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function mI(){return new TextEncoder}/**
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
 */const _I=new Dn([4294967295,4294967295],0);function yh(n){const e=mI().encode(n),t=new Cd;return t.update(e),new Uint8Array(t.digest())}function Eh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dn([t,r],0),new Dn([s,i],0)]}class Wc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new As(`Invalid padding: ${t}`);if(r<0)throw new As(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new As(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new As(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Dn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Dn.fromNumber(r)));return s.compare(_I)===1&&(s=new Dn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=yh(e),[r,s]=Eh(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Wc(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const t=yh(e),[r,s]=Eh(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class As extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Mo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,oi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Mo(re.min(),s,new Ce(he),on(),fe())}}class oi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new oi(r,t,fe(),fe(),fe())}}/**
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
 */class Fi{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class fp{constructor(e,t){this.targetId=e,this.Ce=t}}class dp{constructor(e,t,r=Ke.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Th{constructor(){this.ve=0,this.Fe=Ih(),this.Me=Ke.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=fe(),t=fe(),r=fe();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:te(38017,{changeType:i})}})),new oi(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Ih()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ye(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class yI{constructor(e){this.Ge=e,this.ze=new Map,this.je=on(),this.Je=Ci(),this.He=Ci(),this.Ye=new Ce(he)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Xa(i))if(r===0){const a=new Z(i.path);this.et(t,a,Ze.newNoDocument(a,re.min()))}else ye(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Fn(r).toUint8Array()}catch(u){if(u instanceof Ud)return Br("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Wc(a,s,i)}catch(u){return Br(u instanceof As?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Xa(c.target)){const u=new Z(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Ze.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let r=fe();this.He.forEach(((i,a)=>{let c=!0;a.forEachWhile((u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const s=new Mo(e,t,this.Ye,this.je,r);return this.je=on(),this.Je=Ci(),this.He=Ci(),this.Ye=new Ce(he),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Th,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Me(he),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Me(he),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||z("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Th),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ci(){return new Ce(Z.comparator)}function Ih(){return new Ce(Z.comparator)}const EI={asc:"ASCENDING",desc:"DESCENDING"},TI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},II={and:"AND",or:"OR"};class vI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Za(n,e){return n.useProto3Json||Po(e)?e:{value:e}}function oo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function wI(n,e){return oo(n,e.toTimestamp())}function Ft(n){return ye(!!n,49232),re.fromTimestamp((function(t){const r=Ln(t);return new Se(r.seconds,r.nanos)})(n))}function Kc(n,e){return ec(n,e).canonicalString()}function ec(n,e){const t=(function(s){return new Re(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function gp(n){const e=Re.fromString(n);return ye(Tp(e),10190,{key:e.toString()}),e}function tc(n,e){return Kc(n.databaseId,e.path)}function wa(n,e){const t=gp(e);if(t.get(1)!==n.databaseId.projectId)throw new Q(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Q(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(_p(t))}function mp(n,e){return Kc(n.databaseId,e)}function AI(n){const e=gp(n);return e.length===4?Re.emptyPath():_p(e)}function nc(n){return new Re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _p(n){return ye(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function vh(n,e,t){return{name:tc(n,e),fields:t.value.mapValue.fields}}function SI(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:te(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(ye(d===void 0||typeof d=="string",58123),Ke.fromBase64String(d||"")):(ye(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ke.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const d=h.code===void 0?N.UNKNOWN:hp(h.code);return new Q(d,h.message||"")})(a);t=new dp(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=wa(n,r.document.name),i=Ft(r.document.updateTime),a=r.document.createTime?Ft(r.document.createTime):re.min(),c=new _t({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];t=new Fi(h,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=wa(n,r.document),i=r.readTime?Ft(r.readTime):re.min(),a=Ze.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Fi([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=wa(n,r.document),i=r.removedTargetIds||[];t=new Fi([],i,s,null)}else{if(!("filter"in e))return te(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new pI(s,i),c=r.targetId;t=new fp(c,a)}}return t}function bI(n,e){let t;if(e instanceof ii)t={update:vh(n,e.key,e.value)};else if(e instanceof Hc)t={delete:tc(n,e.key)};else if(e instanceof dr)t={update:vh(n,e.key,e.data),updateMask:xI(e.fieldMask)};else{if(!(e instanceof hI))return te(16599,{Vt:e.type});t={verify:tc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof so)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Js)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Xs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof io)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw te(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:wI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te(27497)})(n,e.precondition)),t}function RI(n,e){return n&&n.length>0?(ye(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?Ft(s.updateTime):Ft(i);return a.isEqual(re.min())&&(a=Ft(i)),new cI(a,s.transformResults||[])})(t,e)))):[]}function CI(n,e){return{documents:[mp(n,e.path)]}}function PI(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=mp(n,s);const i=(function(h){if(h.length!==0)return Ep(Wt.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(_){return{field:Sr(_.field),direction:kI(_.dir)}})(d)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Za(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:s}}function VI(n){let e=AI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ye(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(p){const _=yp(p);return _ instanceof Wt&&Qd(_)?_.getFilters():[_]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((_=>(function(O){return new ro(br(O.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(O.direction))})(_)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let _;return _=typeof p=="object"?p.value:p,Po(_)?null:_})(t.limit));let u=null;t.startAt&&(u=(function(p){const _=!!p.before,R=p.values||[];return new no(R,_)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const _=!p.before,R=p.values||[];return new no(R,_)})(t.endAt)),GT(e,s,a,i,c,"F",u,h)}function DI(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function yp(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=br(t.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=br(t.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=br(t.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=br(t.unaryFilter.field);return xe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}})(n):n.fieldFilter!==void 0?(function(t){return xe.create(br(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Wt.create(t.compositeFilter.filters.map((r=>yp(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te(1026)}})(t.compositeFilter.op))})(n):te(30097,{filter:n})}function kI(n){return EI[n]}function NI(n){return TI[n]}function OI(n){return II[n]}function Sr(n){return{fieldPath:n.canonicalString()}}function br(n){return We.fromServerFormat(n.fieldPath)}function Ep(n){return n instanceof xe?(function(t){if(t.op==="=="){if(lh(t.value))return{unaryFilter:{field:Sr(t.field),op:"IS_NAN"}};if(ch(t.value))return{unaryFilter:{field:Sr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(lh(t.value))return{unaryFilter:{field:Sr(t.field),op:"IS_NOT_NAN"}};if(ch(t.value))return{unaryFilter:{field:Sr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sr(t.field),op:NI(t.op),value:t.value}}})(n):n instanceof Wt?(function(t){const r=t.getFilters().map((s=>Ep(s)));return r.length===1?r[0]:{compositeFilter:{op:OI(t.op),filters:r}}})(n):te(54877,{filter:n})}function xI(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Tp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class bn{constructor(e,t,r,s,i=re.min(),a=re.min(),c=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class MI{constructor(e){this.yt=e}}function LI(n){const e=VI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ya(e,e.limit,"L"):e}/**
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
 */class FI{constructor(){this.Cn=new UI}addToCollectionParentIndex(e,t){return this.Cn.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Mn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Mn.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class UI{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Me(Re.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Me(Re.comparator)).toArray()}}/**
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
 */const wh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ip=41943040;class lt{static withCacheSize(e){return new lt(e,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */lt.DEFAULT_COLLECTION_PERCENTILE=10,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,lt.DEFAULT=new lt(Ip,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),lt.DISABLED=new lt(-1,0,0);/**
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
 */class zr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new zr(0)}static cr(){return new zr(-1)}}/**
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
 */const Ah="LruGarbageCollector",BI=1048576;function Sh([n,e],[t,r]){const s=he(n,t);return s===0?he(e,r):s}class jI{constructor(e){this.Ir=e,this.buffer=new Me(Sh),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Sh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class $I{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){z(Ah,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Xr(t)?z(Ah,"Ignoring IndexedDB error during garbage collection: ",t):await Jr(t)}await this.Vr(3e5)}))}}class qI{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return V.resolve(Co.ce);const r=new jI(t);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(wh)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wh):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,c,u,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),wr()<=ue.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function HI(n,e){return new qI(n,e)}/**
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
 */class zI{constructor(){this.changes=new fr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class WI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class KI{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Ls(r.mutation,s,wt.empty(),Se.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,fe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=fe()){const s=tr();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=ws();return i.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=tr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,fe())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=on();const a=Ms(),c=(function(){return Ms()})();return t.forEach(((u,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof dr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Ls(d.mutation,h,d.mutation.getFieldMask(),Se.now())):a.set(h.key,wt.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((h,d)=>a.set(h,d))),t.forEach(((h,d)=>c.set(h,new WI(d,a.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=Ms();let s=new Ce(((a,c)=>a-c)),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((u=>{const h=t.get(u);if(h===null)return;let d=r.get(u)||wt.empty();d=c.applyToLocalView(h,d),r.set(u,d);const p=(s.get(c.batchId)||fe()).add(u);s=s.insert(c.batchId,p)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,d=u.value,p=rp();d.forEach((_=>{if(!i.has(_)){const R=lp(t.get(_),r.get(_));R!==null&&p.set(_,R),i=i.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return V.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return Z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):QT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(tr());let c=Ws,u=i;return a.next((h=>V.forEach(h,((d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next((_=>{u=u.insert(d,_)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,u,h,fe()))).next((d=>({batchId:c,changes:np(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next((r=>{let s=ws();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=ws();return this.indexManager.getCollectionParents(e,i).next((c=>V.forEach(c,(u=>{const h=(function(p,_){return new Do(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((p,_)=>{a=a.insert(p,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((u,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,Ze.newInvalidDocument(d)))}));let c=ws();return a.forEach(((u,h)=>{const d=i.get(u);d!==void 0&&Ls(d.mutation,h,wt.empty(),Se.now()),No(t,h)&&(c=c.insert(u,h))})),c}))}}/**
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
 */class GI{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return V.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Ft(s.createTime)}})(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(s){return{name:s.name,query:LI(s.bundledQuery),readTime:Ft(s.readTime)}})(t)),V.resolve()}}/**
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
 */class QI{constructor(){this.overlays=new Ce(Z.comparator),this.qr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=tr();return V.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.St(e,t,i)})),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=tr(),i=t.length+1,a=new Z(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ce(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=tr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=tr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((h,d)=>c.set(h,d))),!(c.size()>=s)););return V.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new dI(t,r));let i=this.qr.get(t);i===void 0&&(i=fe(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class JI{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
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
 */class Gc{constructor(){this.Qr=new Me(Be.$r),this.Ur=new Me(Be.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Be(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new Be(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new Z(new Re([])),r=new Be(t,e),s=new Be(t,e+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new Z(new Re([])),r=new Be(t,e),s=new Be(t,e+1);let i=fe();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new Be(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return Z.comparator(e.key,t.key)||he(e.Yr,t.Yr)}static Kr(e,t){return he(e.Yr,t.Yr)||Z.comparator(e.key,t.key)}}/**
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
 */class XI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Me(Be.$r)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new fI(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new Be(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Lc:this.tr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Be(t,0),s=new Be(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const c=this.Xr(a.Yr);i.push(c)})),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Me(he);return t.forEach((s=>{const i=new Be(s,0),a=new Be(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(c=>{r=r.add(c.Yr)}))})),V.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const a=new Be(new Z(i),0);let c=new Me(he);return this.Zr.forEachWhile((u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.Yr)),!0)}),a),V.resolve(this.ti(c))}ti(e){const t=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){ye(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return V.forEach(t.mutations,(s=>{const i=new Be(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new Be(t,0),s=this.Zr.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class YI{constructor(e){this.ri=e,this.docs=(function(){return new Ce(Z.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(t))}getEntries(e,t){let r=on();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ze.newInvalidDocument(s))})),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=on();const a=t.path,c=new Z(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:d}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||bT(ST(d),r)<=0||(s.has(d.key)||No(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,r,s){te(9500)}ii(e,t){return V.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new ZI(this)}getSize(e){return V.resolve(this.size)}}class ZI extends zI{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),V.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class ev{constructor(e){this.persistence=e,this.si=new fr((t=>Bc(t)),jc),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.oi=0,this._i=new Gc,this.targetCount=0,this.ai=zr.ur()}forEachTarget(e,t){return this.si.forEach(((r,s)=>t(s))),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),V.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new zr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Pr(t),V.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),V.waitFor(i).next((()=>s))}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this._i.containsKey(t))}}/**
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
 */class vp{constructor(e,t){this.ui={},this.overlays={},this.ci=new Co(0),this.li=!1,this.li=!0,this.hi=new JI,this.referenceDelegate=e(this),this.Pi=new ev(this),this.indexManager=new FI,this.remoteDocumentCache=(function(s){return new YI(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new MI(t),this.Ii=new GI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new QI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new XI(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){z("MemoryPersistence","Starting transaction:",e);const s=new tv(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,t){return V.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class tv extends CT{constructor(e){super(),this.currentSequenceNumber=e}}class Qc{constructor(e){this.persistence=e,this.Ri=new Gc,this.Vi=null}static mi(e){return new Qc(e)}get fi(){if(this.Vi)return this.Vi;throw te(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),V.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.fi,(r=>{const s=Z.fromPath(r);return this.gi(e,s).next((i=>{i||t.removeEntry(s,re.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return V.or([()=>V.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class ao{constructor(e,t){this.persistence=e,this.pi=new fr((r=>DT(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=HI(this,t)}static mi(e,t){return new ao(e,t)}Ei(){}di(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return V.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?V.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(a=>this.br(e,a,t).next((c=>{c||(r++,i.removeEntry(a,re.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),V.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=xi(e.data.value)),t}br(e,t,r){return V.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Jc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=fe(),s=fe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Jc(e,t.fromCache,r,s)}}/**
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
 */class nv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class rv{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Wy()?8:PT(tt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new nv;return this.Ss(e,t,a).next((c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)}))})).next((()=>i.result))}bs(e,t,r,s){return r.documentReadCount<this.fs?(wr()<=ue.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Ar(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),V.resolve()):(wr()<=ue.DEBUG&&z("QueryEngine","Query:",Ar(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(wr()<=ue.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Ar(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mt(t))):V.resolve())}ys(e,t){if(dh(t))return V.resolve(null);let r=Mt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Ya(t,null,"F"),r=Mt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=fe(...i);return this.ps.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((u=>{const h=this.Ds(t,c);return this.Cs(t,h,a,u.readTime)?this.ys(e,Ya(t,null,"F")):this.vs(e,h,t,u)}))))})))))}ws(e,t,r,s){return dh(t)||s.isEqual(re.min())?V.resolve(null):this.ps.getDocuments(e,r).next((i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?V.resolve(null):(wr()<=ue.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ar(t)),this.vs(e,a,t,AT(s,Ws)).next((c=>c)))}))}Ds(e,t){let r=new Me(ep(e));return t.forEach(((s,i)=>{No(e,i)&&(r=r.add(i))})),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return wr()<=ue.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Ar(t)),this.ps.getDocumentsMatchingQuery(e,t,Mn.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const Xc="LocalStore",sv=3e8;class iv{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new Ce(he),this.xs=new fr((i=>Bc(i)),jc),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function ov(n,e,t,r){return new iv(n,e,t,r)}async function wp(n,e){const t=se(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let u=fe();for(const h of s){a.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}return t.localDocuments.getDocuments(r,u).next((h=>({Ls:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function av(n,e){const t=se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,u,h,d){const p=h.batch,_=p.keys();let R=V.resolve();return _.forEach((O=>{R=R.next((()=>d.getEntry(u,O))).next((U=>{const B=h.docVersions.get(O);ye(B!==null,48541),U.version.compareTo(B)<0&&(p.applyToRemoteDocument(U,h),U.isValidDocument()&&(U.setReadTime(h.commitVersion),d.addEntry(U)))}))})),R.next((()=>c.mutationQueue.removeMutationBatch(u,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=fe();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Ap(n){const e=se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function cv(n,e){const t=se(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach(((d,p)=>{const _=s.get(p);if(!_)return;c.push(t.Pi.removeMatchingKeys(i,d.removedDocuments,p).next((()=>t.Pi.addMatchingKeys(i,d.addedDocuments,p))));let R=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?R=R.withResumeToken(Ke.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):d.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(d.resumeToken,r)),s=s.insert(p,R),(function(U,B,H){return U.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=sv?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0})(_,R,d)&&c.push(t.Pi.updateTargetData(i,R))}));let u=on(),h=fe();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(lv(i,a,e.documentUpdates).next((d=>{u=d.ks,h=d.qs}))),!r.isEqual(re.min())){const d=t.Pi.getLastRemoteSnapshotVersion(i).next((p=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return V.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,h))).next((()=>u))})).then((i=>(t.Ms=s,i)))}function lv(n,e,t){let r=fe(),s=fe();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=on();return t.forEach(((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(re.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):z(Xc,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)})),{ks:a,qs:s}}))}function uv(n,e){const t=se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Lc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function hv(n,e){const t=se(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.Pi.getTargetData(r,e).next((i=>i?(s=i,V.resolve(s)):t.Pi.allocateTargetId(r).next((a=>(s=new bn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function rc(n,e,t){const r=se(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Xr(a))throw a;z(Xc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function bh(n,e,t){const r=se(n);let s=re.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,h,d){const p=se(u),_=p.xs.get(d);return _!==void 0?V.resolve(p.Ms.get(_)):p.Pi.getTargetData(h,d)})(r,a,Mt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next((u=>{i=u}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:re.min(),t?i:fe()))).next((c=>(fv(r,XT(e),c),{documents:c,Qs:i})))))}function fv(n,e,t){let r=n.Os.get(e)||re.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Os.set(e,r)}class Rh{constructor(){this.activeTargetIds=rI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dv{constructor(){this.Mo=new Rh,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Rh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pv{Oo(e){}shutdown(){}}/**
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
 */const Ch="ConnectivityMonitor";class Ph{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){z(Ch,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){z(Ch,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pi=null;function sc(){return Pi===null?Pi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Pi++,"0x"+Pi.toString(16)}/**
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
 */const Aa="RestConnection",gv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class mv{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===eo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=sc(),c=this.zo(e,t.toUriEncodedString());z(Aa,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(c),d=Kr(h);return this.Jo(e,c,u,r,d).then((p=>(z(Aa,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Br(Aa,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Qr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,t){const r=gv[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class _v{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Je="WebChannelConnection";class yv extends mv{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=sc();return new Promise(((c,u)=>{const h=new Pd;h.setWithCredentials(!0),h.listenOnce(Vd.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Oi.NO_ERROR:const p=h.getResponseJson();z(Je,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case Oi.TIMEOUT:z(Je,`RPC '${e}' ${a} timed out`),u(new Q(N.DEADLINE_EXCEEDED,"Request time out"));break;case Oi.HTTP_ERROR:const _=h.getStatus();if(z(Je,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const O=R?.error;if(O&&O.status&&O.message){const U=(function(H){const K=H.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(K)>=0?K:N.UNKNOWN})(O.status);u(new Q(U,O.message))}else u(new Q(N.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new Q(N.UNAVAILABLE,"Connection failed."));break;default:te(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{z(Je,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);z(Je,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",d,r,15)}))}T_(e,t,r){const s=sc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Nd(),c=kd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const d=i.join("");z(Je,`Creating RPC '${e}' stream ${s}: ${d}`,u);const p=a.createWebChannel(d,u);this.I_(p);let _=!1,R=!1;const O=new _v({Yo:B=>{R?z(Je,`Not sending because RPC '${e}' stream ${s} is closed:`,B):(_||(z(Je,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),z(Je,`RPC '${e}' stream ${s} sending:`,B),p.send(B))},Zo:()=>p.close()}),U=(B,H,K)=>{B.listen(H,(J=>{try{K(J)}catch(W){setTimeout((()=>{throw W}),0)}}))};return U(p,vs.EventType.OPEN,(()=>{R||(z(Je,`RPC '${e}' stream ${s} transport opened.`),O.o_())})),U(p,vs.EventType.CLOSE,(()=>{R||(R=!0,z(Je,`RPC '${e}' stream ${s} transport closed`),O.a_(),this.E_(p))})),U(p,vs.EventType.ERROR,(B=>{R||(R=!0,Br(Je,`RPC '${e}' stream ${s} transport errored. Name:`,B.name,"Message:",B.message),O.a_(new Q(N.UNAVAILABLE,"The operation could not be completed")))})),U(p,vs.EventType.MESSAGE,(B=>{if(!R){const H=B.data[0];ye(!!H,16349);const K=H,J=K?.error||K[0]?.error;if(J){z(Je,`RPC '${e}' stream ${s} received error:`,J);const W=J.status;let G=(function(m){const T=De[m];if(T!==void 0)return hp(T)})(W),oe=J.message;G===void 0&&(G=N.INTERNAL,oe="Unknown error status: "+W+" with message "+J.message),R=!0,O.a_(new Q(G,oe)),p.close()}else z(Je,`RPC '${e}' stream ${s} received:`,H),O.u_(H)}})),U(c,Dd.STAT_EVENT,(B=>{B.stat===Wa.PROXY?z(Je,`RPC '${e}' stream ${s} detected buffering proxy`):B.stat===Wa.NOPROXY&&z(Je,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{O.__()}),0),O}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Sa(){return typeof document<"u"?document:null}/**
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
 */function Lo(n){return new vI(n,!0)}/**
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
 */class Sp{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Vh="PersistentStream";class bp{constructor(e,t,r,s,i,a,c,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Sp(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(sn(t.toString()),sn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new Q(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return z(Vh,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(z(Vh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ev extends bp{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=SI(this.serializer,e),r=(function(i){if(!("targetChange"in i))return re.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?re.min():a.readTime?Ft(a.readTime):re.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=nc(this.serializer),t.addTarget=(function(i,a){let c;const u=a.target;if(c=Xa(u)?{documents:CI(i,u)}:{query:PI(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=pp(i,a.resumeToken);const h=Za(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(re.min())>0){c.readTime=oo(i,a.snapshotVersion.toTimestamp());const h=Za(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=DI(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=nc(this.serializer),t.removeTarget=e,this.q_(t)}}class Tv extends bp{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=RI(e.writeResults,e.commitTime),r=Ft(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=nc(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>bI(this.serializer,r)))};this.q_(t)}}/**
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
 */class Iv{}class vv extends Iv{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Q(N.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,ec(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(N.UNKNOWN,i.toString())}))}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Ho(e,ec(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Q(N.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class wv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(sn(t),this.aa=!1):z("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const cr="RemoteStore";class Av{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{pr(this)&&(z(cr,"Restarting streams for network reachability change."),await(async function(u){const h=se(u);h.Ea.add(4),await ai(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Fo(h)})(this))}))})),this.Ra=new wv(r,s)}}async function Fo(n){if(pr(n))for(const e of n.da)await e(!0)}async function ai(n){for(const e of n.da)await e(!1)}function Rp(n,e){const t=se(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),tl(t)?el(t):Yr(t).O_()&&Zc(t,e))}function Yc(n,e){const t=se(n),r=Yr(t);t.Ia.delete(e),r.O_()&&Cp(t,e),t.Ia.size===0&&(r.O_()?r.L_():pr(t)&&t.Ra.set("Unknown"))}function Zc(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Yr(n).Y_(e)}function Cp(n,e){n.Va.Ue(e),Yr(n).Z_(e)}function el(n){n.Va=new yI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Yr(n).start(),n.Ra.ua()}function tl(n){return pr(n)&&!Yr(n).x_()&&n.Ia.size>0}function pr(n){return se(n).Ea.size===0}function Pp(n){n.Va=void 0}async function Sv(n){n.Ra.set("Online")}async function bv(n){n.Ia.forEach(((e,t)=>{Zc(n,e)}))}async function Rv(n,e){Pp(n),tl(n)?(n.Ra.ha(e),el(n)):n.Ra.set("Unknown")}async function Cv(n,e,t){if(n.Ra.set("Online"),e instanceof dp&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))})(n,e)}catch(r){z(cr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await co(n,r)}else if(e instanceof Fi?n.Va.Ze(e):e instanceof fp?n.Va.st(e):n.Va.tt(e),!t.isEqual(re.min()))try{const r=await Ap(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.Ia.get(h);d&&i.Ia.set(h,d.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,h)=>{const d=i.Ia.get(u);if(!d)return;i.Ia.set(u,d.withResumeToken(Ke.EMPTY_BYTE_STRING,d.snapshotVersion)),Cp(i,u);const p=new bn(d.target,u,h,d.sequenceNumber);Zc(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){z(cr,"Failed to raise snapshot:",r),await co(n,r)}}async function co(n,e,t){if(!Xr(e))throw e;n.Ea.add(1),await ai(n),n.Ra.set("Offline"),t||(t=()=>Ap(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{z(cr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Fo(n)}))}function Vp(n,e){return e().catch((t=>co(n,t,e)))}async function Uo(n){const e=se(n),t=Bn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Lc;for(;Pv(e);)try{const s=await uv(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,Vv(e,s)}catch(s){await co(e,s)}Dp(e)&&kp(e)}function Pv(n){return pr(n)&&n.Ta.length<10}function Vv(n,e){n.Ta.push(e);const t=Bn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Dp(n){return pr(n)&&!Bn(n).x_()&&n.Ta.length>0}function kp(n){Bn(n).start()}async function Dv(n){Bn(n).ra()}async function kv(n){const e=Bn(n);for(const t of n.Ta)e.ea(t.mutations)}async function Nv(n,e,t){const r=n.Ta.shift(),s=zc.from(r,e,t);await Vp(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Uo(n)}async function Ov(n,e){e&&Bn(n).X_&&await(async function(r,s){if((function(a){return gI(a)&&a!==N.ABORTED})(s.code)){const i=r.Ta.shift();Bn(r).B_(),await Vp(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Uo(r)}})(n,e),Dp(n)&&kp(n)}async function Dh(n,e){const t=se(n);t.asyncQueue.verifyOperationInProgress(),z(cr,"RemoteStore received new credentials");const r=pr(t);t.Ea.add(3),await ai(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Fo(t)}async function xv(n,e){const t=se(n);e?(t.Ea.delete(2),await Fo(t)):e||(t.Ea.add(2),await ai(t),t.Ra.set("Unknown"))}function Yr(n){return n.ma||(n.ma=(function(t,r,s){const i=se(t);return i.sa(),new Ev(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:Sv.bind(null,n),t_:bv.bind(null,n),r_:Rv.bind(null,n),H_:Cv.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),tl(n)?el(n):n.Ra.set("Unknown")):(await n.ma.stop(),Pp(n))}))),n.ma}function Bn(n){return n.fa||(n.fa=(function(t,r,s){const i=se(t);return i.sa(),new Tv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Dv.bind(null,n),r_:Ov.bind(null,n),ta:kv.bind(null,n),na:Nv.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Uo(n)):(await n.fa.stop(),n.Ta.length>0&&(z(cr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class nl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new nl(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rl(n,e){if(sn("AsyncQueue",`${e}: ${n}`),Xr(n))return new Q(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Nr{static emptySet(e){return new Nr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Z.comparator(t.key,r.key):(t,r)=>Z.comparator(t.key,r.key),this.keyedMap=ws(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Nr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Nr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class kh{constructor(){this.ga=new Ce(Z.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):te(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Wr{constructor(e,t,r,s,i,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new Wr(e,t,Nr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ko(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Mv{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Lv{constructor(){this.queries=Nh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=se(t),i=s.queries;s.queries=Nh(),i.forEach(((a,c)=>{for(const u of c.Sa)u.onError(r)}))})(this,new Q(N.ABORTED,"Firestore shutting down"))}}function Nh(){return new fr((n=>Zd(n)),ko)}async function Fv(n,e){const t=se(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Mv,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=rl(a,`Initialization of query '${Ar(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&sl(t)}async function Uv(n,e){const t=se(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Bv(n,e){const t=se(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&sl(t)}function jv(n,e,t){const r=se(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function sl(n){n.Ca.forEach((e=>{e.next()}))}var ic,Oh;(Oh=ic||(ic={})).Ma="default",Oh.Cache="cache";class $v{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Wr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Wr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ic.Cache}}/**
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
 */class Np{constructor(e){this.key=e}}class Op{constructor(e){this.key=e}}class qv{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=fe(),this.mutatedKeys=fe(),this.eu=ep(e),this.tu=new Nr(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new kh,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const _=s.get(d),R=No(this.query,p)?p:null,O=!!_&&this.mutatedKeys.has(_.key),U=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let B=!1;_&&R?_.data.isEqual(R.data)?O!==U&&(r.track({type:3,doc:R}),B=!0):this.su(_,R)||(r.track({type:2,doc:R}),B=!0,(u&&this.eu(R,u)>0||h&&this.eu(R,h)<0)&&(c=!0)):!_&&R?(r.track({type:0,doc:R}),B=!0):_&&!R&&(r.track({type:1,doc:_}),B=!0,(u||h)&&(c=!0)),B&&(R?(a=a.add(R),i=U?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((d,p)=>(function(R,O){const U=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{Rt:B})}};return U(R)-U(O)})(d.type,p.type)||this.eu(d.doc,p.doc))),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,a.length!==0||h?{snapshot:new Wr(this.query,e.tu,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new kh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=fe(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new Op(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new Np(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=fe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Wr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const il="SyncEngine";class Hv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class zv{constructor(e){this.key=e,this.hu=!1}}class Wv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new fr((c=>Zd(c)),ko),this.Iu=new Map,this.Eu=new Set,this.du=new Ce(Z.comparator),this.Au=new Map,this.Ru=new Gc,this.Vu={},this.mu=new Map,this.fu=zr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Kv(n,e,t=!0){const r=Bp(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await xp(r,e,t,!0),s}async function Gv(n,e){const t=Bp(n);await xp(t,e,!0,!1)}async function xp(n,e,t,r){const s=await hv(n.localStore,Mt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Qv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Rp(n.remoteStore,s),c}async function Qv(n,e,t,r,s){n.pu=(p,_,R)=>(async function(U,B,H,K){let J=B.view.ru(H);J.Cs&&(J=await bh(U.localStore,B.query,!1).then((({documents:I})=>B.view.ru(I,J))));const W=K&&K.targetChanges.get(B.targetId),G=K&&K.targetMismatches.get(B.targetId)!=null,oe=B.view.applyChanges(J,U.isPrimaryClient,W,G);return Mh(U,B.targetId,oe.au),oe.snapshot})(n,p,_,R);const i=await bh(n.localStore,e,!0),a=new qv(e,i.Qs),c=a.ru(i.documents),u=oi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,u);Mh(n,t,h.au);const d=new Hv(e,t,a);return n.Tu.set(e,d),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function Jv(n,e,t){const r=se(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!ko(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await rc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Yc(r.remoteStore,s.targetId),oc(r,s.targetId)})).catch(Jr)):(oc(r,s.targetId),await rc(r.localStore,s.targetId,!0))}async function Xv(n,e){const t=se(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Yc(t.remoteStore,r.targetId))}async function Yv(n,e,t){const r=iw(n);try{const s=await(function(a,c){const u=se(a),h=Se.now(),d=c.reduce(((R,O)=>R.add(O.key)),fe());let p,_;return u.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let O=on(),U=fe();return u.Ns.getEntries(R,d).next((B=>{O=B,O.forEach(((H,K)=>{K.isValidDocument()||(U=U.add(H))}))})).next((()=>u.localDocuments.getOverlayedDocuments(R,O))).next((B=>{p=B;const H=[];for(const K of c){const J=uI(K,p.get(K.key).overlayedDocument);J!=null&&H.push(new dr(K.key,J,Wd(J.value.mapValue),Lt.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,H,c)})).next((B=>{_=B;const H=B.applyToLocalDocumentSet(p,U);return u.documentOverlayCache.saveOverlays(R,B.batchId,H)}))})).then((()=>({batchId:_.batchId,changes:np(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,u){let h=a.Vu[a.currentUser.toKey()];h||(h=new Ce(he)),h=h.insert(c,u),a.Vu[a.currentUser.toKey()]=h})(r,s.batchId,t),await ci(r,s.changes),await Uo(r.remoteStore)}catch(s){const i=rl(s,"Failed to persist write");t.reject(i)}}async function Mp(n,e){const t=se(n);try{const r=await cv(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Au.get(i);a&&(ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?ye(a.hu,14607):s.removedDocuments.size>0&&(ye(a.hu,42227),a.hu=!1))})),await ci(t,r,e)}catch(r){await Jr(r)}}function xh(n,e,t){const r=se(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const u=se(a);u.onlineState=c;let h=!1;u.queries.forEach(((d,p)=>{for(const _ of p.Sa)_.va(c)&&(h=!0)})),h&&sl(u)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Zv(n,e,t){const r=se(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new Ce(Z.comparator);a=a.insert(i,Ze.newNoDocument(i,re.min()));const c=fe().add(i),u=new Mo(re.min(),new Map,new Ce(he),a,c);await Mp(r,u),r.du=r.du.remove(i),r.Au.delete(e),ol(r)}else await rc(r.localStore,e,!1).then((()=>oc(r,e,t))).catch(Jr)}async function ew(n,e){const t=se(n),r=e.batch.batchId;try{const s=await av(t.localStore,e);Fp(t,r,null),Lp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ci(t,s)}catch(s){await Jr(s)}}async function tw(n,e,t){const r=se(n);try{const s=await(function(a,c){const u=se(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return u.mutationQueue.lookupMutationBatch(h,c).next((p=>(ye(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(h,p)))).next((()=>u.mutationQueue.performConsistencyCheck(h))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(h,d,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>u.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);Fp(r,e,t),Lp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ci(r,s)}catch(s){await Jr(s)}}function Lp(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Fp(n,e,t){const r=se(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function oc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||Up(n,r)}))}function Up(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Yc(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),ol(n))}function Mh(n,e,t){for(const r of t)r instanceof Np?(n.Ru.addReference(r.key,e),nw(n,r)):r instanceof Op?(z(il,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Up(n,r.key)):te(19791,{wu:r})}function nw(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(z(il,"New document in limbo: "+t),n.Eu.add(r),ol(n))}function ol(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new Z(Re.fromString(e)),r=n.fu.next();n.Au.set(r,new zv(t)),n.du=n.du.insert(t,r),Rp(n.remoteStore,new bn(Mt($c(t.path)),r,"TargetPurposeLimboResolution",Co.ce))}}async function ci(n,e,t){const r=se(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,u)=>{a.push(r.pu(u,e,t).then((h=>{if((h||t)&&r.isPrimaryClient){const d=h?!h.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(h){s.push(h);const d=Jc.As(u.targetId,h);i.push(d)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(u,h){const d=se(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>V.forEach(h,(_=>V.forEach(_.Es,(R=>d.persistence.referenceDelegate.addReference(p,_.targetId,R))).next((()=>V.forEach(_.ds,(R=>d.persistence.referenceDelegate.removeReference(p,_.targetId,R)))))))))}catch(p){if(!Xr(p))throw p;z(Xc,"Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const R=d.Ms.get(_),O=R.snapshotVersion,U=R.withLastLimboFreeSnapshotVersion(O);d.Ms=d.Ms.insert(_,U)}}})(r.localStore,i))}async function rw(n,e){const t=se(n);if(!t.currentUser.isEqual(e)){z(il,"User change. New user:",e.toKey());const r=await wp(t.localStore,e);t.currentUser=e,(function(i,a){i.mu.forEach((c=>{c.forEach((u=>{u.reject(new Q(N.CANCELLED,a))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ci(t,r.Ls)}}function sw(n,e){const t=se(n),r=t.Au.get(e);if(r&&r.hu)return fe().add(r.key);{let s=fe();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function Bp(n){const e=se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Zv.bind(null,e),e.Pu.H_=Bv.bind(null,e.eventManager),e.Pu.yu=jv.bind(null,e.eventManager),e}function iw(n){const e=se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ew.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tw.bind(null,e),e}class lo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lo(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return ov(this.persistence,new rv,e.initialUser,this.serializer)}Cu(e){return new vp(Qc.mi,this.serializer)}Du(e){return new dv}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lo.provider={build:()=>new lo};class ow extends lo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ye(this.persistence.referenceDelegate instanceof ao,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $I(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?lt.withCacheSize(this.cacheSizeBytes):lt.DEFAULT;return new vp((r=>ao.mi(r,t)),this.serializer)}}class ac{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rw.bind(null,this.syncEngine),await xv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Lv})()}createDatastore(e){const t=Lo(e.databaseInfo.databaseId),r=(function(i){return new yv(i)})(e.databaseInfo);return(function(i,a,c,u){return new vv(i,a,c,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new Av(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>xh(this.syncEngine,t,0)),(function(){return Ph.v()?new Ph:new pv})())}createSyncEngine(e,t){return(function(s,i,a,c,u,h,d){const p=new Wv(s,i,a,c,u,h);return d&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=se(t);z(cr,"RemoteStore shutting down."),r.Ea.add(5),await ai(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ac.provider={build:()=>new ac};/**
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
 */class aw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):sn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const jn="FirestoreClient";class cw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Xe.UNAUTHENTICATED,this.clientId=xc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{z(jn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(z(jn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=rl(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ba(n,e){n.asyncQueue.verifyOperationInProgress(),z(jn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await wp(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Lh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await lw(n);z(jn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Dh(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Dh(e.remoteStore,s))),n._onlineComponents=e}async function lw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z(jn,"Using user provided OfflineComponentProvider");try{await ba(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Br("Error using user provided cache. Falling back to memory cache: "+t),await ba(n,new lo)}}else z(jn,"Using default OfflineComponentProvider"),await ba(n,new ow(void 0));return n._offlineComponents}async function jp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z(jn,"Using user provided OnlineComponentProvider"),await Lh(n,n._uninitializedComponentsProvider._online)):(z(jn,"Using default OnlineComponentProvider"),await Lh(n,new ac))),n._onlineComponents}function uw(n){return jp(n).then((e=>e.syncEngine))}async function hw(n){const e=await jp(n),t=e.eventManager;return t.onListen=Kv.bind(null,e.syncEngine),t.onUnlisten=Jv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Gv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Xv.bind(null,e.syncEngine),t}function fw(n,e,t={}){const r=new kn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,h){const d=new aw({next:_=>{d.Nu(),a.enqueueAndForget((()=>Uv(i,p)));const R=_.docs.has(c);!R&&_.fromCache?h.reject(new Q(N.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&_.fromCache&&u&&u.source==="server"?h.reject(new Q(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new $v($c(c.path),d,{includeMetadataChanges:!0,qa:!0});return Fv(i,p)})(await hw(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function $p(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Fh=new Map;/**
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
 */const qp="firestore.googleapis.com",Uh=!0;class Bh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Q(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qp,this.ssl=Uh}else this.host=e.host,this.ssl=e.ssl??Uh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ip;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BI)throw new Q(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$p(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class al{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new fT;switch(r.type){case"firstParty":return new mT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Fh.get(t);r&&(z("ComponentProvider","Removing Datastore"),Fh.delete(t),r.terminate())})(this),Promise.resolve()}}function dw(n,e,t,r={}){n=$r(n,al);const s=Kr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(Td(`https://${c}`),Id("Firestore",!0)),i.host!==qp&&i.host!==c&&Br("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!ir(u,a)&&(n._setSettings(u),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=Xe.MOCK_USER;else{h=Ly(r.mockUserToken,n._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Q(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Xe(p)}n._authCredentials=new dT(new xd(h,d))}}/**
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
 */class cl{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new cl(this.firestore,e,this._query)}}class je{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ys(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}toJSON(){return{type:je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(si(t,je._jsonSchema))return new je(e,r||null,new Z(Re.fromString(t.referencePath)))}}je._jsonSchemaVersion="firestore/documentReference/1.0",je._jsonSchema={type:ke("string",je._jsonSchemaVersion),referencePath:ke("string")};class Ys extends cl{constructor(e,t,r){super(e,t,$c(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new Z(e))}withConverter(e){return new Ys(this.firestore,e,this._path)}}function jh(n,e,...t){if(n=Ht(n),arguments.length===1&&(e=xc.newId()),vT("doc","path",e),n instanceof al){const r=Re.fromString(e,...t);return eh(r),new je(n,null,new Z(r))}{if(!(n instanceof je||n instanceof Ys))throw new Q(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return eh(r),new je(n.firestore,n instanceof Ys?n.converter:null,new Z(r))}}/**
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
 */const $h="AsyncQueue";class qh{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Sp(this,"async_queue_retry"),this._c=()=>{const r=Sa();r&&z($h,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Sa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Sa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new kn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Xr(e))throw e;z($h,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,sn("INTERNAL UNHANDLED ERROR: ",Hh(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=nl.createAndSchedule(this,e,t,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&te(47125,{Pc:Hh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Hh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Bo extends al{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new qh,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qh(e),this._firestoreClient=void 0,await e}}}function pw(n,e){const t=typeof n=="object"?n:Sd(),r=typeof n=="string"?n:eo,s=Nc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=xy("firestore");i&&dw(s,...i)}return s}function Hp(n){if(n._terminated)throw new Q(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||gw(n),n._firestoreClient}function gw(n){const e=n._freezeSettings(),t=(function(s,i,a,c){return new OT(s,i,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,$p(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new cw(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(n._componentsProvider))}/**
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
 */class yt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yt(Ke.fromBase64String(e))}catch(t){throw new Q(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yt(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:yt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(si(e,yt._jsonSchema))return yt.fromBase64String(e.bytes)}}yt._jsonSchemaVersion="firestore/bytes/1.0",yt._jsonSchema={type:ke("string",yt._jsonSchemaVersion),bytes:ke("string")};/**
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
 */class ll{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Q(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zp{constructor(e){this._methodName=e}}/**
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
 */class Ut{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Q(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Q(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ut._jsonSchemaVersion}}static fromJSON(e){if(si(e,Ut._jsonSchema))return new Ut(e.latitude,e.longitude)}}Ut._jsonSchemaVersion="firestore/geoPoint/1.0",Ut._jsonSchema={type:ke("string",Ut._jsonSchemaVersion),latitude:ke("number"),longitude:ke("number")};/**
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
 */class Bt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Bt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(si(e,Bt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Bt(e.vectorValues);throw new Q(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Bt._jsonSchemaVersion="firestore/vectorValue/1.0",Bt._jsonSchema={type:ke("string",Bt._jsonSchemaVersion),vectorValues:ke("object")};/**
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
 */const mw=/^__.*__$/;class _w{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new dr(e,this.data,this.fieldMask,t,this.fieldTransforms):new ii(e,this.data,t,this.fieldTransforms)}}function Wp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{Ac:n})}}class ul{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ul({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return uo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Wp(this.Ac)&&mw.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class yw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Lo(e)}Cc(e,t,r,s=!1){return new ul({Ac:e,methodName:t,Dc:r,path:We.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ew(n){const e=n._freezeSettings(),t=Lo(n._databaseId);return new yw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Tw(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);Jp("Data must be an object, but it was:",a,r);const c=Gp(r,a);let u,h;if(i.merge)u=new wt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const _=Iw(e,p,t);if(!a.contains(_))throw new Q(N.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);ww(d,_)||d.push(_)}u=new wt(d),h=a.fieldTransforms.filter((p=>u.covers(p.field)))}else u=null,h=a.fieldTransforms;return new _w(new _t(c),u,h)}function Kp(n,e){if(Qp(n=Ht(n)))return Jp("Unsupported field value:",e,n),Gp(n,e);if(n instanceof zp)return(function(r,s){if(!Wp(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let u=Kp(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=Ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Se.fromDate(r);return{timestampValue:oo(s.serializer,i)}}if(r instanceof Se){const i=new Se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:oo(s.serializer,i)}}if(r instanceof Ut)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof yt)return{bytesValue:pp(s.serializer,r._byteString)};if(r instanceof je){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Kc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Bt)return(function(a,c){return{mapValue:{fields:{[Hd]:{stringValue:zd},[to]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return qc(c.serializer,h)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Mc(r)}`)})(n,e)}function Gp(n,e){const t={};return Fd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hr(n,((r,s)=>{const i=Kp(s,e.mc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Qp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Se||n instanceof Ut||n instanceof yt||n instanceof je||n instanceof zp||n instanceof Bt)}function Jp(n,e,t){if(!Qp(t)||!Md(t)){const r=Mc(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function Iw(n,e,t){if((e=Ht(e))instanceof ll)return e._internalPath;if(typeof e=="string")return Xp(n,e);throw uo("Field path arguments must be of type string or ",n,!1,void 0,t)}const vw=new RegExp("[~\\*/\\[\\]]");function Xp(n,e,t){if(e.search(vw)>=0)throw uo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ll(...e.split("."))._internalPath}catch{throw uo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function uo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new Q(N.INVALID_ARGUMENT,c+n+u)}function ww(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class Yp{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Aw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Zp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Aw extends Yp{data(){return super.data()}}function Zp(n,e){return typeof e=="string"?Xp(n,e):e instanceof ll?e._internalPath:e._delegate._internalPath}class Sw{convertValue(e,t="none"){switch(Un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Fn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return hr(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){const t=e.fields?.[to].arrayValue?.values?.map((r=>Ve(r.doubleValue)));return new Bt(t)}convertGeoPoint(e){return new Ut(Ve(e.latitude),Ve(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Vo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ks(e));default:return null}}convertTimestamp(e){const t=Ln(e);return new Se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Re.fromString(e);ye(Tp(r),9688,{name:e});const s=new Gs(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(t)||sn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function bw(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Ss{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sr extends Yp{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ui(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Zp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=sr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}sr._jsonSchemaVersion="firestore/documentSnapshot/1.0",sr._jsonSchema={type:ke("string",sr._jsonSchemaVersion),bundleSource:ke("string","DocumentSnapshot"),bundleName:ke("string"),bundle:ke("string")};class Ui extends sr{data(e={}){return super.data(e)}}class Fs{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ss(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Ui(this._firestore,this._userDataWriter,r.key,r,new Ss(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Q(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const u=new Ui(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ss(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new Ui(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ss(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:Rw(c.type),doc:u,oldIndex:h,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Fs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Rw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:n})}}/**
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
 */function Cw(n){n=$r(n,je);const e=$r(n.firestore,Bo);return fw(Hp(e),n._key).then((t=>kw(e,n,t)))}Fs._jsonSchemaVersion="firestore/querySnapshot/1.0",Fs._jsonSchema={type:ke("string",Fs._jsonSchemaVersion),bundleSource:ke("string","QuerySnapshot"),bundleName:ke("string"),bundle:ke("string")};class Pw extends Sw{constructor(e){super(),this.firestore=e}convertBytes(e){return new yt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,t)}}function Vw(n,e,t){n=$r(n,je);const r=$r(n.firestore,Bo),s=bw(n.converter,e);return eg(r,[Tw(Ew(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Lt.none())])}function Dw(n){return eg($r(n.firestore,Bo),[new Hc(n._key,Lt.none())])}function eg(n,e){return(function(r,s){const i=new kn;return r.asyncQueue.enqueueAndForget((async()=>Yv(await uw(r),s,i))),i.promise})(Hp(n),e)}function kw(n,e,t){const r=t.docs.get(e._key),s=new Pw(n);return new sr(n,s,e._key,r,new Ss(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Qr=s})(Gr),Ur(new or("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Bo(new pT(r.getProvider("auth-internal")),new _T(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Q(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gs(h.options.projectId,d)})(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Vn(Ju,Xu,e),Vn(Ju,Xu,"esm2020")})();function tg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nw=tg,ng=new ni("auth","Firebase",tg());/**
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
 */const ho=new Dc("@firebase/auth");function Ow(n,...e){ho.logLevel<=ue.WARN&&ho.warn(`Auth (${Gr}): ${n}`,...e)}function Bi(n,...e){ho.logLevel<=ue.ERROR&&ho.error(`Auth (${Gr}): ${n}`,...e)}/**
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
 */function an(n,...e){throw hl(n,...e)}function jt(n,...e){return hl(n,...e)}function rg(n,e,t){const r={...Nw(),[e]:t};return new ni("auth","Firebase",r).create(e,{appName:n.name})}function Nn(n){return rg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ng.create(n,...e)}function ne(n,e,...t){if(!n)throw hl(e,...t)}function Zt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Bi(e),new Error(e)}function cn(n,e){n||Zt(e)}/**
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
 */function cc(){return typeof self<"u"&&self.location?.href||""}function xw(){return zh()==="http:"||zh()==="https:"}function zh(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function Mw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xw()||qy()||"connection"in navigator)?navigator.onLine:!0}function Lw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class li{constructor(e,t){this.shortDelay=e,this.longDelay=t,cn(t>e,"Short delay should be less than long delay!"),this.isMobile=By()||Hy()}get(){return Mw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fl(n,e){cn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class sg{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Fw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Uw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Bw=new li(3e4,6e4);function jo(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Zr(n,e,t,r,s={}){return ig(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=ri({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:u,...i};return $y()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Kr(n.emulatorConfig.host)&&(h.credentials="include"),sg.fetch()(await ag(n,n.config.apiHost,t,c),h)})}async function ig(n,e,t){n._canInitEmulator=!1;const r={...Fw,...e};try{const s=new jw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Vi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vi(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Vi(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Vi(n,"user-disabled",a);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw rg(n,d,h);an(n,d)}}catch(s){if(s instanceof un)throw s;an(n,"network-request-failed",{message:String(s)})}}async function og(n,e,t,r,s={}){const i=await Zr(n,e,t,r,s);return"mfaPendingCredential"in i&&an(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function ag(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?fl(n.config,s):`${n.config.apiScheme}://${s}`;return Uw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class jw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(jt(this.auth,"network-request-failed")),Bw.get())})}}function Vi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=jt(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function $w(n,e){return Zr(n,"POST","/v1/accounts:delete",e)}async function fo(n,e){return Zr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Us(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qw(n,e=!1){const t=Ht(n),r=await t.getIdToken(e),s=dl(r);ne(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:Us(Ra(s.auth_time)),issuedAtTime:Us(Ra(s.iat)),expirationTime:Us(Ra(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ra(n){return Number(n)*1e3}function dl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Bi("JWT malformed, contained fewer than 3 sections"),null;try{const s=md(t);return s?JSON.parse(s):(Bi("Failed to decode base64 JWT payload"),null)}catch(s){return Bi("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Wh(n){const e=dl(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof un&&Hw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Hw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class zw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function po(n){const e=n.auth,t=await n.getIdToken(),r=await Zs(n,fo(e,{idToken:t}));ne(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?cg(s.providerUserInfo):[],a=Kw(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,h=c?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new lc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function Ww(n){const e=Ht(n);await po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kw(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function cg(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Gw(n,e){const t=await ig(n,{},async()=>{const r=ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await ag(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&Kr(n.emulatorConfig.host)&&(u.credentials="include"),sg.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Qw(n,e){return Zr(n,"POST","/v2/accounts:revokeToken",jo(n,e))}/**
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
 */class Or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=Wh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Gw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Or;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Or,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
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
 */function yn(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class At{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new zw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Zs(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qw(this,e)}reload(){return Ww(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new At({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vt(this.auth.app))return Promise.reject(Nn(this.auth));const e=await this.getIdToken();return await Zs(this,$w(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:_,isAnonymous:R,providerData:O,stsTokenManager:U}=t;ne(p&&U,e,"internal-error");const B=Or.fromJSON(this.name,U);ne(typeof p=="string",e,"internal-error"),yn(r,e.name),yn(s,e.name),ne(typeof _=="boolean",e,"internal-error"),ne(typeof R=="boolean",e,"internal-error"),yn(i,e.name),yn(a,e.name),yn(c,e.name),yn(u,e.name),yn(h,e.name),yn(d,e.name);const H=new At({uid:p,auth:e,email:s,emailVerified:_,displayName:r,isAnonymous:R,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:B,createdAt:h,lastLoginAt:d});return O&&Array.isArray(O)&&(H.providerData=O.map(K=>({...K}))),u&&(H._redirectEventId=u),H}static async _fromIdTokenResponse(e,t,r=!1){const s=new Or;s.updateFromServerResponse(t);const i=new At({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await po(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?cg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new Or;c.updateFromIdToken(r);const u=new At({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new lc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,h),u}}/**
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
 */const Kh=new Map;function en(n){cn(n instanceof Function,"Expected a class definition");let e=Kh.get(n);return e?(cn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Kh.set(n,e),e)}/**
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
 */class lg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}lg.type="NONE";const Gh=lg;/**
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
 */function ji(n,e,t){return`firebase:${n}:${e}:${t}`}class xr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ji(this.userKey,s.apiKey,i),this.fullPersistenceKey=ji("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await fo(this.auth,{idToken:e}).catch(()=>{});return t?At._fromGetAccountInfoResponse(this.auth,t,e):null}return At._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new xr(en(Gh),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||en(Gh);const a=ji(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const _=await fo(e,{idToken:d}).catch(()=>{});if(!_)break;p=await At._fromGetAccountInfoResponse(e,_,d)}else p=At._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new xr(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new xr(i,e,r))}}/**
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
 */function Qh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ug(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gg(e))return"Blackberry";if(mg(e))return"Webos";if(hg(e))return"Safari";if((e.includes("chrome/")||fg(e))&&!e.includes("edge/"))return"Chrome";if(pg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function ug(n=tt()){return/firefox\//i.test(n)}function hg(n=tt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fg(n=tt()){return/crios\//i.test(n)}function dg(n=tt()){return/iemobile/i.test(n)}function pg(n=tt()){return/android/i.test(n)}function gg(n=tt()){return/blackberry/i.test(n)}function mg(n=tt()){return/webos/i.test(n)}function pl(n=tt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Jw(n=tt()){return pl(n)&&!!window.navigator?.standalone}function Xw(){return zy()&&document.documentMode===10}function _g(n=tt()){return pl(n)||pg(n)||mg(n)||gg(n)||/windows phone/i.test(n)||dg(n)}/**
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
 */function yg(n,e=[]){let t;switch(n){case"Browser":t=Qh(tt());break;case"Worker":t=`${Qh(tt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Gr}/${r}`}/**
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
 */class Yw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Zw(n,e={}){return Zr(n,"GET","/v2/passwordPolicy",jo(n,e))}/**
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
 */const eA=6;class tA{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??eA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class nA{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jh(this),this.idTokenSubscription=new Jh(this),this.beforeStateQueue=new Yw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ng,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=en(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await xr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await fo(this,{idToken:e}),r=await At._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(vt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===a)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await po(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vt(this.app))return Promise.reject(Nn(this));const t=e?Ht(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vt(this.app)?Promise.reject(Nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vt(this.app)?Promise.reject(Nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Zw(this),t=new tA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ni("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Qw(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&en(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await xr.create(this,[en(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Ow(`Error while retrieving App Check token: ${e.error}`),e?.token}}function $o(n){return Ht(n)}class Jh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zy(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let gl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rA(n){gl=n}function sA(n){return gl.loadJS(n)}function iA(){return gl.gapiScript}function oA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function aA(n,e){const t=Nc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ir(i,e??{}))return s;an(s,"already-initialized")}return t.initialize({options:e})}function cA(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(en);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function lA(n,e,t){const r=$o(n);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Eg(e),{host:a,port:c}=uA(e),u=c===null?"":`:${c}`,h={url:`${i}//${a}${u}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(ir(h,r.config.emulator)&&ir(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Kr(a)?(Td(`${i}//${a}${u}`),Id("Auth",!0)):hA()}function Eg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function uA(n){const e=Eg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Xh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Xh(a)}}}function Xh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function hA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Tg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,t){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}/**
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
 */async function Mr(n,e){return og(n,"POST","/v1/accounts:signInWithIdp",jo(n,e))}/**
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
 */const fA="http://localhost";class lr extends Tg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):an("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new lr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Mr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Mr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mr(e,t)}buildRequest(){const e={requestUri:fA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ri(t)}return e}}/**
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
 */class Ig{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ui extends Ig{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vn extends ui{constructor(){super("facebook.com")}static credential(e){return lr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
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
 */class wn extends ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return lr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return wn.credential(t,r)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
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
 */class An extends ui{constructor(){super("github.com")}static credential(e){return lr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
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
 */class Sn extends ui{constructor(){super("twitter.com")}static credential(e,t){return lr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Sn.credential(t,r)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
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
 */async function dA(n,e){return og(n,"POST","/v1/accounts:signUp",jo(n,e))}/**
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
 */class $n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await At._fromIdTokenResponse(e,r,s),a=Yh(r);return new $n({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Yh(r);return new $n({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Yh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function pA(n){if(vt(n.app))return Promise.reject(Nn(n));const e=$o(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new $n({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await dA(e,{returnSecureToken:!0}),r=await $n._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(r.user),r}/**
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
 */class go extends un{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,go.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new go(e,t,r,s)}}function vg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?go._fromErrorAndOperation(n,i,e,r):i})}async function gA(n,e,t=!1){const r=await Zs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return $n._forOperation(n,"link",r)}/**
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
 */async function mA(n,e,t=!1){const{auth:r}=n;if(vt(r.app))return Promise.reject(Nn(r));const s="reauthenticate";try{const i=await Zs(n,vg(r,s,e,n),t);ne(i.idToken,r,"internal-error");const a=dl(i.idToken);ne(a,r,"internal-error");const{sub:c}=a;return ne(n.uid===c,r,"user-mismatch"),$n._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&an(r,"user-mismatch"),i}}/**
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
 */async function _A(n,e,t=!1){if(vt(n.app))return Promise.reject(Nn(n));const r="signIn",s=await vg(n,r,e),i=await $n._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function yA(n,e,t,r){return Ht(n).onIdTokenChanged(e,t,r)}function EA(n,e,t){return Ht(n).beforeAuthStateChanged(e,t)}const mo="__sak";/**
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
 */class wg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mo,"1"),this.storage.removeItem(mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const TA=1e3,IA=10;class Ag extends wg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_g(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Xw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,IA):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},TA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ag.type="LOCAL";const vA=Ag;/**
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
 */class Sg extends wg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Sg.type="SESSION";const bg=Sg;/**
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
 */function wA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new qo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),u=await wA(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qo.receivers=[];/**
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
 */function ml(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class AA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const h=ml("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(d),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function $t(){return window}function SA(n){$t().location.href=n}/**
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
 */function Rg(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function bA(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RA(){return navigator?.serviceWorker?.controller||null}function CA(){return Rg()?self:null}/**
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
 */const Cg="firebaseLocalStorageDb",PA=1,_o="firebaseLocalStorage",Pg="fbase_key";class hi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ho(n,e){return n.transaction([_o],e?"readwrite":"readonly").objectStore(_o)}function VA(){const n=indexedDB.deleteDatabase(Cg);return new hi(n).toPromise()}function uc(){const n=indexedDB.open(Cg,PA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(_o,{keyPath:Pg})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(_o)?e(r):(r.close(),await VA(),e(await uc()))})})}async function Zh(n,e,t){const r=Ho(n,!0).put({[Pg]:e,value:t});return new hi(r).toPromise()}async function DA(n,e){const t=Ho(n,!1).get(e),r=await new hi(t).toPromise();return r===void 0?null:r.value}function ef(n,e){const t=Ho(n,!0).delete(e);return new hi(t).toPromise()}const kA=800,NA=3;class Vg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>NA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qo._getInstance(CA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await bA(),!this.activeServiceWorker)return;this.sender=new AA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uc();return await Zh(e,mo,"1"),await ef(e,mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>DA(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ef(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ho(s,!1).getAll();return new hi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vg.type="LOCAL";const OA=Vg;new li(3e4,6e4);/**
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
 */function xA(n,e){return e?en(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class _l extends Tg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Mr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Mr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function MA(n){return _A(n.auth,new _l(n),n.bypassAuthState)}function LA(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),mA(t,new _l(n),n.bypassAuthState)}async function FA(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),gA(t,new _l(n),n.bypassAuthState)}/**
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
 */class Dg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MA;case"linkViaPopup":case"linkViaRedirect":return FA;case"reauthViaPopup":case"reauthViaRedirect":return LA;default:an(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const UA=new li(2e3,1e4);class Rr extends Dg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rr.currentPopupAction&&Rr.currentPopupAction.cancel(),Rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=ml();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,UA.get())};e()}}Rr.currentPopupAction=null;/**
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
 */const BA="pendingRedirect",$i=new Map;class jA extends Dg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=$i.get(this.auth._key());if(!e){try{const r=await $A(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}$i.set(this.auth._key(),e)}return this.bypassAuthState||$i.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $A(n,e){const t=zA(e),r=HA(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function qA(n,e){$i.set(n._key(),e)}function HA(n){return en(n._redirectPersistence)}function zA(n){return ji(BA,n.config.apiKey,n.name)}async function WA(n,e,t=!1){if(vt(n.app))return Promise.reject(Nn(n));const r=$o(n),s=xA(r,e),a=await new jA(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const KA=600*1e3;class GA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!kg(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(jt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=KA&&this.cachedEventUids.clear(),this.cachedEventUids.has(tf(e))}saveEventToCache(e){this.cachedEventUids.add(tf(e)),this.lastProcessedEventTime=Date.now()}}function tf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function kg({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function QA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kg(n);default:return!1}}/**
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
 */async function JA(n,e={}){return Zr(n,"GET","/v1/projects",e)}/**
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
 */const XA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YA=/^https?/;async function ZA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await JA(n);for(const t of e)try{if(eS(t))return}catch{}an(n,"unauthorized-domain")}function eS(n){const e=cc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!YA.test(t))return!1;if(XA.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const tS=new li(3e4,6e4);function nf(){const n=$t().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function nS(n){return new Promise((e,t)=>{function r(){nf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nf(),t(jt(n,"network-request-failed"))},timeout:tS.get()})}if($t().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if($t().gapi?.load)r();else{const s=oA("iframefcb");return $t()[s]=()=>{gapi.load?r():t(jt(n,"network-request-failed"))},sA(`${iA()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw qi=null,e})}let qi=null;function rS(n){return qi=qi||nS(n),qi}/**
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
 */const sS=new li(5e3,15e3),iS="__/auth/iframe",oS="emulator/auth/iframe",aS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lS(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?fl(e,oS):`https://${n.config.authDomain}/${iS}`,r={apiKey:e.apiKey,appName:n.name,v:Gr},s=cS.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ri(r).slice(1)}`}async function uS(n){const e=await rS(n),t=$t().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:lS(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=jt(n,"network-request-failed"),c=$t().setTimeout(()=>{i(a)},sS.get());function u(){$t().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const hS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fS=500,dS=600,pS="_blank",gS="http://localhost";class rf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mS(n,e,t,r=fS,s=dS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...hS,width:r.toString(),height:s.toString(),top:i,left:a},h=tt().toLowerCase();t&&(c=fg(h)?pS:t),ug(h)&&(e=e||gS,u.scrollbars="yes");const d=Object.entries(u).reduce((_,[R,O])=>`${_}${R}=${O},`,"");if(Jw(h)&&c!=="_self")return _S(e||"",c),new rf(null);const p=window.open(e||"",c,d);ne(p,n,"popup-blocked");try{p.focus()}catch{}return new rf(p)}function _S(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const yS="__/auth/handler",ES="emulator/auth/handler",TS=encodeURIComponent("fac");async function sf(n,e,t,r,s,i){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Gr,eventId:s};if(e instanceof Ig){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Yy(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof ui){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const u=await n._getAppCheckToken(),h=u?`#${TS}=${encodeURIComponent(u)}`:"";return`${IS(n)}?${ri(c).slice(1)}${h}`}function IS({config:n}){return n.emulator?fl(n,ES):`https://${n.authDomain}/${yS}`}/**
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
 */const Ca="webStorageSupport";class vS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bg,this._completeRedirectFn=WA,this._overrideRedirectResult=qA}async _openPopup(e,t,r,s){cn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await sf(e,t,r,cc(),s);return mS(e,i,ml())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await sf(e,t,r,cc(),s);return SA(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await uS(e),r=new GA(e);return t.register("authEvent",s=>(ne(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ca,{type:Ca},s=>{const i=s?.[0]?.[Ca];i!==void 0&&t(!!i),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ZA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _g()||hg()||pl()}}const wS=vS;var of="@firebase/auth",af="1.11.1";/**
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
 */class AS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function SS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bS(n){Ur(new or("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yg(n)},h=new nA(r,s,i,u);return cA(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ur(new or("auth-internal",e=>{const t=$o(e.getProvider("auth").getImmediate());return(r=>new AS(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(of,af,SS(n)),Vn(of,af,"esm2020")}/**
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
 */const RS=300,CS=Ed("authIdTokenMaxAge")||RS;let cf=null;const PS=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>CS)return;const s=t?.token;cf!==s&&(cf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function VS(n=Sd()){const e=Nc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=aA(n,{popupRedirectResolver:wS,persistence:[OA,vA,bg]}),r=Ed("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=PS(i.toString());EA(t,a,()=>a(t.currentUser)),yA(t,c=>a(c))}}const s=_d("auth");return s&&lA(t,`http://${s}`),t}function DS(){return document.getElementsByTagName("head")?.[0]??document}rA({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=jt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",DS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bS("Browser");const kS={apiKey:"AIzaSyA8B3cCIG1-5MnShEbw89WooX0kj7oe6FA",authDomain:"tiragenoel-c25b8.firebaseapp.com",projectId:"tiragenoel-c25b8",storageBucket:"tiragenoel-c25b8.firebasestorage.app",messagingSenderId:"225331032723",appId:"1:225331032723:web:c6e4eb4fade48cf26a1366"},Ng=Ad(kS),lf=pw(Ng),NS=VS(Ng),OS={class:"page"},xS={class:"card"},MS={key:0,class:"center"},LS={key:1,class:"center"},FS={key:2,class:"center"},US={key:3,class:"results-container"},BS={class:"list-section"},jS={class:"list-section"},uf="2025",$S={__name:"App",setup(n){const e=Es([]),t=Es([]),r=Es(!1),s=Es(!0),i=jh(lf,"results","draw_results"),a=Es(!1);async function c(){try{const d=await Cw(i);if(d.exists()){const p=d.data();e.value=p.maj,t.value=p.min,r.value=!0,console.log("Résultats chargés depuis Firestore.")}else r.value=!1,console.log("Pas de résultats trouvés. Le tirage n'a pas été fait.")}catch(d){console.error("Erreur lors du chargement des résultats:",d),r.value=!1}finally{s.value=!1}}async function u(){if(r.value){console.log("Le tirage est déjà fait et bloqué.");return}const d=Mu.map(G=>G.name),p=Lu.map(G=>G.name);let _=[...d],R=[...p];function O(G){for(let oe=G.length-1;oe>0;oe--){const I=Math.floor(Math.random()*(oe+1));[G[oe],G[I]]=[G[I],G[oe]]}}let U=!1,B=0;for(;!U&&B<1e3;)B++,O(_),U=d.every((G,oe)=>{const I=_[oe];return!(G===I||Mu.find(T=>T.name===G).exclusions.includes(I))});if(!U){console.log("Tirage Majeur impossible."),e.value=["Réessayer"];return}let H=!1,K=0;for(;!H&&K<1e3;)K++,O(R),H=p.every((G,oe)=>{const I=R[oe];return!(G===I||Lu.find(T=>T.name===G).exclusions.includes(I))});if(!H){console.log("Tirage Mineur impossible."),t.value=["Réessayer"];return}const J=d.map((G,oe)=>`${G} offre à ${_[oe]}`),W=p.map((G,oe)=>`${G} offre à ${R[oe]}`);try{const G={maj:J,min:W,timestamp:new Date().toISOString()};await Vw(i,G),e.value=J,t.value=W,r.value=!0,console.log("Tirage enregistré et bloqué sur Firestore.")}catch(G){console.error("Erreur lors de l'enregistrement du tirage:",G)}}async function h(){const p=new URLSearchParams(window.location.search).get("reset");if(p&&p===uf){a.value=!0;try{await pA(NS),console.log("Session anonyme établie pour réinitialisation.");const _=jh(lf,"results","draw_results");await Dw(_),e.value=[],t.value=[],r.value=!1,alert("🎉 Tirage réinitialisé avec succès !")}catch(_){console.error("Échec de la réinitialisation:",_),alert(`⚠️ Échec de la réinitialisation. Cause possible : ${_.code}`)}finally{window.history.replaceState({},document.title,window.location.pathname),a.value=!1}}}return Hf(async()=>{const p=new URLSearchParams(window.location.search).get("reset");p&&p===uf&&await h(),await c()}),(d,p)=>(Qt(),Jt("div",OS,[at("div",xS,[p[5]||(p[5]=at("h1",null,"Tirage au sort Noël",-1)),s.value?(Qt(),Jt("div",MS,[...p[0]||(p[0]=[at("p",null,"Vérification du tirage en cours...",-1)])])):a.value?(Qt(),Jt("div",LS,[...p[1]||(p[1]=[at("p",null,"Réinitialisation en cours...",-1)])])):r.value?(Qt(),Jt("div",US,[at("div",BS,[p[2]||(p[2]=at("h2",null,"Liste 1",-1)),at("ul",null,[(Qt(!0),Jt(It,null,fu(e.value,_=>(Qt(),Jt("li",{key:_,class:"result"},Pa(_),1))),128))])]),p[4]||(p[4]=at("div",{class:"divider"},null,-1)),at("div",jS,[p[3]||(p[3]=at("h2",null,"Liste 2",-1)),at("ul",null,[(Qt(!0),Jt(It,null,fu(t.value,_=>(Qt(),Jt("li",{key:_,class:"result"},Pa(_),1))),128))])])])):(Qt(),Jt("div",FS,[at("button",{onClick:u},"Lancer le tirage")]))])]))}};Ay($S).mount("#app");
