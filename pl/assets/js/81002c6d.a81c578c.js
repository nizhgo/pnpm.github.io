"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7530],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9529:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>l,toc:()=>s,default:()=>m});var n=r(2245),o=r(5903),i=(r(9496),r(9613)),a=["components"],p={id:"start",title:"pnpm start"},c=void 0,l={unversionedId:"cli/start",id:"version-5.x/cli/start",isDocsHomePage:!1,title:"pnpm start",description:"Aliases: run start",source:"@site/i18n/pl/docusaurus-plugin-content-docs/version-5.x/cli/start.md",sourceDirName:"cli",slug:"/cli/start",permalink:"/pl/5.x/cli/start",editUrl:"https://crowdin.com/project/pnpm/pl",tags:[],version:"5.x",frontMatter:{id:"start",title:"pnpm start"},sidebar:"version-5.x/docs",previous:{title:"pnpm test",permalink:"/pl/5.x/cli/test"},next:{title:"pnpm publish",permalink:"/pl/5.x/cli/publish"}},s=[],u={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Aliases: ",(0,i.kt)("inlineCode",{parentName:"p"},"run start")),(0,i.kt)("p",null,"Runs an arbitrary command specified in the package's ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," property of its ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," object. If no ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," property is specified on the ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," object, it will attempt to run ",(0,i.kt)("inlineCode",{parentName:"p"},"node server.js")," as a default, failing if neither are present."),(0,i.kt)("p",null,"The intended usage of the property is to specify a command that starts your program."))}m.isMDXComponent=!0}}]);