"use strict";(self.webpackChunknear_api_js_docs=self.webpackChunknear_api_js_docs||[]).push([[9562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=o(n),u=r,c=k["".concat(s,".").concat(u)]||k[u]||m[u]||i;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const i={id:"signer.Signer",title:"Class: Signer",sidebar_label:"Signer",custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"classes/signer.Signer",id:"classes/signer.Signer",title:"Class: Signer",description:"signer.Signer",source:"@site/docs/classes/signer.Signer.md",sourceDirName:"classes",slug:"/classes/signer.Signer",permalink:"/near-api-js/classes/signer.Signer",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"signer.Signer",title:"Class: Signer",sidebar_label:"Signer",custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"sidebar"},s={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"createKey",id:"createkey",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getPublicKey",id:"getpublickey",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"signMessage",id:"signmessage",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:o};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/near-api-js/modules/signer"},"signer"),".Signer"),(0,r.kt)("p",null,"General signing interface, can be used for in memory signing, RPC singing, external wallet, HSM, etc."),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Signer"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/near-api-js/classes/signer.InMemorySigner"},(0,r.kt)("inlineCode",{parentName:"a"},"InMemorySigner"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"new Signer"),"()"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"createkey"},"createKey"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,r.kt)("strong",{parentName:"p"},"createKey"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"accountId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"networkId?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/near-api-js/classes/utils_key_pair.PublicKey"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicKey")),">"),(0,r.kt)("p",null,"Creates new key and returns public key."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"accountId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"networkId?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/near-api-js/classes/utils_key_pair.PublicKey"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicKey")),">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/a0c9a104/packages/near-api-js/src/signer.ts#L14"},"signer.ts:14")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getpublickey"},"getPublicKey"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,r.kt)("strong",{parentName:"p"},"getPublicKey"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"accountId?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"networkId?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/near-api-js/classes/utils_key_pair.PublicKey"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicKey")),">"),(0,r.kt)("p",null,"Returns public key for given account / network."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"accountId?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"accountId to retrieve from.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"networkId?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The targeted network. (ex. default, betanet, etc\u2026)")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/near-api-js/classes/utils_key_pair.PublicKey"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicKey")),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/a0c9a104/packages/near-api-js/src/signer.ts#L21"},"signer.ts:21")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"signmessage"},"signMessage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,r.kt)("strong",{parentName:"p"},"signMessage"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"message"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"accountId?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"networkId?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/near-api-js/interfaces/utils_key_pair.Signature"},(0,r.kt)("inlineCode",{parentName:"a"},"Signature")),">"),(0,r.kt)("p",null,"Signs given message, by first hashing with sha256."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"message")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Uint8Array")),(0,r.kt)("td",{parentName:"tr",align:"left"},"message to sign.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"accountId?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"accountId to use for signing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"networkId?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The targeted network. (ex. default, betanet, etc\u2026)")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/near-api-js/interfaces/utils_key_pair.Signature"},(0,r.kt)("inlineCode",{parentName:"a"},"Signature")),">"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/near-api-js/blob/a0c9a104/packages/near-api-js/src/signer.ts#L29"},"signer.ts:29")))}m.isMDXComponent=!0}}]);