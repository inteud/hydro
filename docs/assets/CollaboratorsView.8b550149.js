import{c as k}from"./collaborators.94738893.js";import{_ as u}from"./index.54fa5a56.js";import{o as s,c as t,a,q as r,t as n,F as d,k as _,p as m,d as w,f as v,l as y}from"./vendor.9fe6e047.js";const o=e=>(m("data-v-6836846c"),e=e(),w(),e),b={class:"user"},g={class:"user--header"},x={key:0,class:"user--header-photo"},$=["src"],I={class:"user--header-info"},B={key:0,class:"user--header-info name"},C={key:1,class:"user--header-info email"},S={key:2,class:"user--header-description"},V={key:0,class:"user--skills"},q={key:1,class:"user--network"},F=["href"],N=o(()=>a("i",{class:"fad fa-browser"},null,-1)),U=[N],j=["href"],D=o(()=>a("i",{class:"fab fa-facebook-f"},null,-1)),E=[D],L=["href"],O=o(()=>a("i",{class:"fab fa-instagram"},null,-1)),p=[O],z=["href"],A=o(()=>a("i",{class:"fab fa-linkedin-in"},null,-1)),G=[A],H=["href"],J=o(()=>a("i",{class:"fad fa-address-card"},null,-1)),K=[J],M={props:{user:{type:Object,required:!0}},setup(e){return(c,h)=>(s(),t("div",b,[a("div",g,[e.user.photo!=null?(s(),t("div",x,[a("img",{src:e.user.photo,alt:""},null,8,$)])):r("",!0),a("div",I,[e.user.name!=null?(s(),t("h2",B,n(e.user.name),1)):r("",!0),e.user.email!=null?(s(),t("p",C,n(e.user.email),1)):r("",!0),e.user.description!=null?(s(),t("div",S,n(e.user.description),1)):r("",!0)])]),e.user.skills?(s(),t("div",V,[(s(!0),t(d,null,_(e.user.skills,(i,l)=>(s(),t("div",{key:l,class:"user--skills-item"},[a("span",null,n(i),1)]))),128))])):r("",!0),e.user.network!=null?(s(),t("div",q,[e.user.network.site!=null?(s(),t("a",{key:0,href:e.user.network.site,target:"_blank"},U,8,F)):r("",!0),e.user.network.facebook!=null?(s(),t("a",{key:1,href:`https://www.facebook.com/${e.user.network.facebook}`,target:"_blank"},E,8,j)):r("",!0),e.user.network.instagram!=null?(s(),t("a",{key:2,href:`https://www.instagram.com/${e.user.network.instagram}`,target:"_blank"},p,8,L)):r("",!0),e.user.network.linkedin!=null?(s(),t("a",{key:3,href:`https://www.linkedin.com/in/${e.user.network.linkedin}`,target:"_blank"},G,8,z)):r("",!0),a("a",{style:{color:"#ffff3e"},href:`/collaborator/${e.user.id}`},K,8,H)])):r("",!0)]))}};var P=u(M,[["__scopeId","data-v-6836846c"]]);const Q={class:"about"},R={setup(e){const c=v(k);return(h,i)=>(s(),t("div",Q,[(s(!0),t(d,null,_(c.value,(l,f)=>(s(),y(P,{key:f,user:l},null,8,["user"]))),128))]))}};var Y=u(R,[["__scopeId","data-v-75cf01dc"]]);export{Y as default};