"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4911],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(t),f=i,k=m["".concat(o,".").concat(f)]||m[f]||s[f]||l;return t?r.createElement(k,a(a({ref:n},u),{},{components:t})):r.createElement(k,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5152:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>c,toc:()=>u,default:()=>m});var r=t(2245),i=t(5903),l=(t(9496),t(9613)),a=["components"],p={id:"unlink",title:"pnpm unlink"},o=void 0,c={unversionedId:"cli/unlink",id:"cli/unlink",isDocsHomePage:!1,title:"pnpm unlink",description:"\u53d6\u6d88\u94fe\u63a5\u4e00\u4e2a\u7cfb\u7edf\u8303\u56f4\u7684 package  (\u76f8\u5bf9\u4e8e pnpm link).",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/unlink.md",sourceDirName:"cli",slug:"/cli/unlink",permalink:"/zh/next/cli/unlink",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"unlink",title:"pnpm unlink"},sidebar:"docs",previous:{title:"pnpm link",permalink:"/zh/next/cli/link"},next:{title:"pnpm import",permalink:"/zh/next/cli/import"}},u=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],s={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u53d6\u6d88\u94fe\u63a5\u4e00\u4e2a\u7cfb\u7edf\u8303\u56f4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"package")," (\u76f8\u5bf9\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"/zh/next/cli/link"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm link")),")."),(0,l.kt)("p",null,"\u5982\u679c\u4e0d\u5e26\u53c2\u6570\u8c03\u7528\uff0c\u5219\u6240\u6709\u5df2\u94fe\u63a5\u7684\u4f9d\u8d56\u9879\u90fd\u5c06\u53d6\u6d88\u94fe\u63a5\u3002"),(0,l.kt)("p",null,"\u8fd9\u7c7b\u4f3c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn unlink"),"\uff0c\u4f46 pnpm \u4f1a\u5728\u5220\u9664\u5916\u90e8\u94fe\u63a5\u540e\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\u9879\u3002"),(0,l.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"\u53d6\u6d88\u94fe\u63a5\u5728\u6240\u6709\u5b50\u76ee\u5f55\u4e2d\u3001\u6216\u5f53\u5728 ",(0,l.kt)("a",{parentName:"p",href:"/zh/next/workspaces"},"workspace")," \u4e2d\u6267\u884c\u547d\u4ee4\u65f6\u6240\u6709 workspace \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"packages")," \u4e2d\u627e\u5230\u7684\u6240\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"package")," \u3002"),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh/next/filtering"},"\u9605\u8bfb\u66f4\u591a\u6709\u5173 filter \u7684\u5185\u5bb9\u3002")))}m.isMDXComponent=!0}}]);