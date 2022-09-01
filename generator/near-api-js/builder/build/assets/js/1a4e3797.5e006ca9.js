"use strict";(self.webpackChunknear_api_js_docs=self.webpackChunknear_api_js_docs||[]).push([[7920],{2027:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var a=n(7294),r=n(2263),l=n(2613),s=n(5742),c=n(9960),o=n(5999),u=n(373),m=n(902);const i=["zero","one","two","few","many","other"];function h(e){return i.filter((t=>e.includes(t)))}const p={locale:"en",pluralForms:h(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:h(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),p}}),[e])}function g(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);const r=n.select(t),l=n.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(n,t,e)}}var f=n(143),E=n(6775),y=n(412);const S=function(){const e=(0,E.k6)(),t=(0,E.TH)(),{siteConfig:{baseUrl:n}}=(0,r.Z)();return{searchValue:y.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>n+"search?q="+encodeURIComponent(e)}};var w=n(22),I=n(8202),_=n(2539),b=n(726),v=n(1073),F=n(311),P=n(3926),R=n(1029);const k="searchQueryInput_CFBF",C="searchResultItem_U687",q="searchResultItemPath_uIbk",T="searchResultItemSummary_oZHr";function Z(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),t=(0,f.gA)();let n=e;try{var l;const{preferredVersion:e}=(0,u.J)(null!=(l=null==t?void 0:t.pluginId)?l:R.gQ);e&&!e.isLast&&(n=e.path+"/")}catch(C){if(R.l9&&!(C instanceof m.i6))throw C}const{selectMessage:c}=g(),{searchValue:i,updateSearchPath:h}=S(),[p,d]=(0,a.useState)(i),[E,y]=(0,a.useState)(),[_,b]=(0,a.useState)(),v=(0,a.useMemo)((()=>p?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:p}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[p]);(0,a.useEffect)((()=>{h(p),E&&(p?E(p,(e=>{b(e)})):b(void 0))}),[p,E]);const P=(0,a.useCallback)((e=>{d(e.target.value)}),[]);return(0,a.useEffect)((()=>{i&&i!==p&&d(i)}),[i]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,w.w)(n);y((()=>(0,I.v)(e,t,100)))}()}),[n]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,v)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,v),a.createElement("input",{type:"search",name:"q",className:k,"aria-label":"Search",onChange:P,value:p,autoComplete:"off",autoFocus:!0}),!E&&p&&a.createElement("div",null,a.createElement(F.Z,null)),_&&(_.length>0?a.createElement("p",null,c(_.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:_.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,_&&_.map((e=>a.createElement(x,{key:e.document.i,searchResult:e}))))))}function x(e){let{searchResult:{document:t,type:n,page:r,tokens:l,metadata:s}}=e;const o=0===n,u=2===n,m=(o?t.b:r.b).slice(),i=u?t.s:t.t;return o||m.push(r.t),a.createElement("article",{className:C},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,_.C)(i,l):(0,b.o)(i,(0,v.m)(s,"t"),l,100)}})),m.length>0&&a.createElement("p",{className:q},(0,P.e)(m)),u&&a.createElement("p",{className:T,dangerouslySetInnerHTML:{__html:(0,b.o)(t.t,(0,v.m)(s,"t"),l,100)}}))}const M=function(){return a.createElement(l.Z,null,a.createElement(Z,null))}}}]);