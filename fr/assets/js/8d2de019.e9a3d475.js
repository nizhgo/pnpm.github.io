"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[693],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3646:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>p,toc:()=>u,default:()=>c});var r=t(2245),a=t(5903),o=(t(9496),t(9613)),s=["components"],i={id:"aliases",title:"Alias"},l=void 0,p={unversionedId:"aliases",id:"aliases",isDocsHomePage:!1,title:"Alias",description:"Les alias vous permettent d'installer des packages avec des noms personnalis\xe9s.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/aliases.md",sourceDirName:".",slug:"/aliases",permalink:"/fr/next/aliases",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"aliases",title:"Alias"},sidebar:"docs",previous:{title:"Workspace",permalink:"/fr/next/workspaces"},next:{title:"Compl\xe9tion de la ligne de commande",permalink:"/fr/next/completion"}},u=[],d={toc:u};function c(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Les alias vous permettent d'installer des packages avec des noms personnalis\xe9s."),(0,o.kt)("p",null,"Supposons que vous utilisiez ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," sur tout votre projet. Il y a un bug dans ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," qui casse votre projet. Vous avez un correctif mais ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," ne le fusionnera pas. Normalement vous devez soit installer ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," partir de votre fork directement (en tant que d\xe9pendance h\xe9berg\xe9e par git), soit le publier avec un nom diff\xe9rent. Si vous utilisez la deuxi\xe8me solution vous devez remplacer tous les require de votre projet par le nouveau nom de (",(0,o.kt)("inlineCode",{parentName:"p"},"require('lodash')")," => ",(0,o.kt)("inlineCode",{parentName:"p"},"require('awesome-lodash')"),"). Avec les alias, vous avez une troisi\xe8me option."),(0,o.kt)("p",null,"Publiez un nouveau package appel\xe9 ",(0,o.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," et installez-le en utilisant ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," comme son alias:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm add lodash@npm:awesome-lodash\n")),(0,o.kt)("p",null,"Aucune modification du code n'est n\xe9cessaire. Toutes les require de ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," seront d\xe9sormais ",(0,o.kt)("inlineCode",{parentName:"p"},"awesome-lodash"),"."),(0,o.kt)("p",null,"Parfois, vous souhaiterez utiliser deux versions diff\xe9rentes d'un package dans votre projet. Facile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add lodash1@npm:lodash@1\npnpm add lodash2@npm:lodash@2\n")),(0,o.kt)("p",null,"Maintenant, vous pouvez require la premi\xe8re version de lodash via ",(0,o.kt)("inlineCode",{parentName:"p"},"require('lodash1')")," et la deuxi\xe8me par ",(0,o.kt)("inlineCode",{parentName:"p"},"require('lodash2')"),"."),(0,o.kt)("p",null,"Cela devient encore plus puissant lorsqu'il est combin\xe9 avec des crochets. Peut-\xeatre que vous voulez remplacer ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," par ",(0,o.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," dans tous les packages de ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),". Vous pouvez facilement le faire avec le fichier ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg) {\n  if (pkg.dependencies && pkg.dependencies.lodash) {\n    pkg.dependencies.lodash = 'npm:awesome-lodash@^1.0.0'\n  }\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")))}c.isMDXComponent=!0}}]);