import{r as m,o as l,c as d,a as s,b as i,w as p,p as h,d as v,e as u,f as O,t as P,F as A,g as L,h as C,i as k,j as x}from"./vendor.aeab24a0.js";const w=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}};w();var f=(t,r)=>{const o=t.__vccOpts||t;for(const[n,e]of r)o[n]=e;return o};const R={},y=t=>(h("data-v-201e93ba"),t=t(),v(),t),D={class:"navigate"},S=y(()=>s("i",{class:"fad fa-home"},null,-1)),V=u("INICIO "),N=y(()=>s("i",{class:"fad fa-user-group"},null,-1)),T=u("COLABORADORES "),F=y(()=>s("i",{class:"fad fa-circle-info"},null,-1)),B=u("ACERCA DE ");function H(t,r){const o=m("router-link");return l(),d("nav",D,[s("ul",null,[s("li",null,[i(o,{to:"/"},{default:p(()=>[S,V]),_:1})]),s("li",null,[i(o,{to:"/collaborators"},{default:p(()=>[N,T]),_:1})]),s("li",null,[i(o,{to:"/about"},{default:p(()=>[F,B]),_:1})])])])}var q=f(R,[["render",H],["__scopeId","data-v-201e93ba"]]),M="/hydro/assets/logo_clean.61b315a8.svg";const W={},E=t=>(h("data-v-7dbab0d2"),t=t(),v(),t),j={class:"header"},G=E(()=>s("a",{href:"https://inteud.github.io/"},[s("img",{src:M,alt:"inteud"})],-1)),K=E(()=>s("h1",null,"HIDROLOG\xCDA E HIDRA\xDALICA",-1)),U=[G,K];function Y(t,r){return l(),d("div",j,U)}var z=f(W,[["render",Y],["__scopeId","data-v-7dbab0d2"]]);const J=t=>(h("data-v-62fa199e"),t=t(),v(),t),Q={class:"footer"},X={style:{color:"#ffff3e"}},Z=u(" Creado y manenido por "),ee=J(()=>s("br",null,null,-1)),te={setup(t){const r=O(new Date().getFullYear());return(o,n)=>{const e=m("router-link");return l(),d("footer",Q,[s("p",X,[Z,ee,i(e,{to:"/me"},{default:p(()=>[u("Edwin Marroquin ( 2021 -"+P(r.value)+" )",1)]),_:1})])])}}};var oe=f(te,[["__scopeId","data-v-62fa199e"]]);const re={},ne={class:"main"};function ae(t,r){const o=m("router-view");return l(),d("main",ne,[i(o)])}var se=f(re,[["render",ae],["__scopeId","data-v-1fc2e693"]]);const ce={class:"main--wrapper"},ie={setup(t){return(r,o)=>(l(),d(A,null,[i(z),s("div",ce,[i(q),i(se)]),i(oe)],64))}},_e="modulepreload",b={},le="/hydro/",_=function(r,o){return!o||o.length===0?r():Promise.all(o.map(n=>{if(n=`${le}${n}`,n in b)return;b[n]=!0;const e=n.endsWith(".css"),a=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const c=document.createElement("link");if(c.rel=e?"stylesheet":_e,e||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),e)return new Promise(($,I)=>{c.addEventListener("load",$),c.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>r())},de=L({history:C("/hydro/"),base:"/hydro/",linkActiveClass:"link--active",linkExactActiveClass:"link--active",routes:[{path:"/",name:"home",component:()=>_(()=>import("./HomeView.3c4152fa.js"),["assets/HomeView.3c4152fa.js","assets/HomeView.d9aa25c5.css","assets/vendor.aeab24a0.js"])},{path:"/collaborators",name:"collaborators",component:()=>_(()=>import("./CollaboratorsView.5f16b0af.js"),["assets/CollaboratorsView.5f16b0af.js","assets/CollaboratorsView.9a9c412b.css","assets/collaborators.94738893.js","assets/vendor.aeab24a0.js"])},{path:"/collaborator/:id",name:"collaborator",props:!0,component:()=>_(()=>import("./CollaboratorView.cf6eb0db.js"),["assets/CollaboratorView.cf6eb0db.js","assets/collaborators.94738893.js","assets/vendor.aeab24a0.js"])},{path:"/about",name:"about",component:()=>_(()=>import("./AboutView.0e69ceb9.js"),[])},{path:"/comming",name:"comming",component:()=>_(()=>import("./CommingView.b13d5ad4.js"),["assets/CommingView.b13d5ad4.js","assets/CommingView.cffb6a84.css","assets/vendor.aeab24a0.js"])},{path:"/iot",name:"iot",component:()=>_(()=>import("./iotView.1e7ec474.js"),["assets/iotView.1e7ec474.js","assets/vendor.aeab24a0.js"])}]}),g=k(ie);g.use(x());g.use(de);g.mount("#app");export{f as _};
