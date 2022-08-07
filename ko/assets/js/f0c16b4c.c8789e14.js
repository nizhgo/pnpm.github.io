"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4615],{9613:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>d});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?l.createElement(f,i(i({ref:t},k),{},{components:n})):l.createElement(f,i({ref:t},k))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var l=n(2081),a=n(4604),r=(n(9496),n(9613)),i=["components"],o={id:"install",title:"pnpm install"},p=void 0,s={unversionedId:"cli/install",id:"version-7.x/cli/install",title:"pnpm install",description:"\ubcc4\uce6d: i",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-7.x/cli/install.md",sourceDirName:"cli",slug:"/cli/install",permalink:"/ko/cli/install",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"7.x",frontMatter:{id:"install",title:"pnpm install"},sidebar:"version-7.x/docs",previous:{title:"pnpm add <pkg>",permalink:"/ko/cli/add"},next:{title:"pnpm update",permalink:"/ko/cli/update"}},k={},u=[{value:"\uc694\uc57d",id:"\uc694\uc57d",level:2},{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"--offline",id:"--offline",level:3},{value:"--prefer-offline",id:"--prefer-offline",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--lockfile-only",id:"--lockfile-only",level:3},{value:"--fix-lockfile",id:"--fix-lockfile",level:3},{value:"--frozen-lockfile",id:"--frozen-lockfile",level:3},{value:"--reporter=&lt;name&gt;",id:"--reportername",level:3},{value:"--use-store-server",id:"--use-store-server",level:3},{value:"--shamefully-hoist",id:"--shamefully-hoist",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:u};function d(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ubcc4\uce6d: ",(0,r.kt)("inlineCode",{parentName:"p"},"i")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install"),"\uc740 \ud504\ub85c\uc81d\ud2b8 \ub0b4 \ubaa8\ub4e0 \uc758\uc874\uc131 \ud328\ud0a4\uc9c0\ub4e4\uc744 \uc124\uce58\ud558\ub294\ub370\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"CI \ud658\uacbd\uc5d0\uc11c, lockfile\uc774 \uc788\uc9c0\ub9cc \uc5c5\ub370\uc774\ud2b8\uac00 \ud544\uc694\ud55c \uacbd\uc6b0 \uc124\uce58\uac00 \uc2e4\ud328\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ko/workspaces"},"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4"),"\ub0b4\uc5d0\uc11c, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," \uc740 \ubaa8\ub4e0 \ud504\ub85c\uc81d\ud2b8\uc758 \ubaa8\ub4e0 \uc758\uc874\uc131\uc744 \uc124\uce58\ud569\ub2c8\ub2e4. \uc774 \ub3d9\uc791\uc744 \ube44\ud65c\uc131\ud654\ud558\ub824\uba74, ",(0,r.kt)("inlineCode",{parentName:"p"},"recursive-install"),"\uc124\uc815\uc744 ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\ub85c \uc124\uc815\ud558\uc138\uc694."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8927).Z,width:"940",height:"472"})),(0,r.kt)("h2",{id:"\uc694\uc57d"},"\uc694\uc57d"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\uba85\ub839\uc5b4"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc758\ubbf8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --offline")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc2a4\ud1a0\uc5b4\uc5d0\uc11c\ub9cc \uc624\ud504\ub77c\uc778\uc73c\ub85c \uc124\uce58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," \uc774 \uc5c5\ub370\uc774\ud2b8\ub418\uc9c0 \uc54a\uc74c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --lockfile-only")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," \ub9cc \uc5c5\ub370\uc774\ud2b8\ub428")))),(0,r.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,r.kt)("h3",{id:"--offline"},"--offline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uc774\uba74 pnpm\uc740 \uc2a4\ud1a0\uc5b4\uc5d0\uc11c \uc774\ubbf8 \uc0ac\uc6a9 \uac00\ub2a5\ud55c \ud328\ud0a4\uc9c0\ub9cc \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud328\ud0a4\uc9c0\ub97c \ub85c\uceec\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc5c6\uc73c\uba74 \uc124\uce58\uac00 \uc2e4\ud328\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"--prefer-offline"},"--prefer-offline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uc774\uba74 \uce90\uc2dc\ub41c \ub370\uc774\ud130\uc5d0 \ub300\ud55c \ubd80\uc2e4 \uac80\uc0ac\uac00 \ubb34\uc2dc\ub418\uc9c0\ub9cc, \ub204\ub77d\ub41c \ub370\uc774\ud130\ub294 \uc11c\ubc84\uc5d0\uc11c \uc694\uccad\ub429\ub2c8\ub2e4. \uc804\uccb4 \uc624\ud504\ub77c\uc778 \ubaa8\ub4dc\ub97c \uac15\uc81c \uc2e4\ud589\ud558\ub824\uba74, ",(0,r.kt)("inlineCode",{parentName:"p"},"--offline"),"\uc744 \uc0ac\uc6a9\ud558\uc138\uc694."),(0,r.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,r.kt)("p",null,"pnpm\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \ud658\uacbd \ubcc0\uc218\uac00 \ud504\ub85c\ub355\uc158\uc73c\ub85c \uc124\uc815\ub41c \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," \uc5d0 \ub098\uc5f4\ub41c \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774 \ud50c\ub798\uadf8\ub97c \uc0ac\uc6a9\ud558\uc5ec pnpm\uc5d0 \uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \ub97c \ubb34\uc2dc\ud558\uace0 \ub300\uc2e0 \uc774 \ud50c\ub798\uadf8\uc5d0\uc11c production \uc0c1\ud0dc\ub97c \uac00\uc838\uc624\ub3c4\ub85d \uc9c0\uc2dc\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"\uc5d0 \uad00\uacc4\uc5c6\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," \ub9cc \uc124\uce58\ub429\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \uac00 \uc124\uce58\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"--lockfile-only"},"--lockfile-only"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\uc0ac\uc6a9\ud558\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," \ubc0f ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"\ub9cc \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \ub514\ub809\ud1a0\ub9ac\uc5d0\ub294 \uc544\ubb34\uac83\ub3c4 \uae30\ub85d\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"--fix-lockfile"},"--fix-lockfile"),(0,r.kt)("p",null,"\uae68\uc9c4 lockfile \ud56d\ubaa9\uc744 \uc790\ub3d9\uc73c\ub85c \uc218\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ube44 CI\uc758 \uacbd\uc6b0: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"CI\uc758 \uacbd\uc6b0: ",(0,r.kt)("strong",{parentName:"li"},"true"),", lockfile\uc774 \uc788\ub294 \uacbd\uc6b0"))),(0,r.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", pnpm doesn't generate a lockfile and fails to install if the lockfile is out of sync with the manifest / an update is needed or no lockfile is present."),(0,r.kt)("p",null,"This setting is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," by default in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/watson/ci-info#supported-ci-tools"},"CI environments"),". The following code is used to detect CI environments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="https://github.com/watson/ci-info/blob/44e98cebcdf4403f162195fbcf90b1f69fc6e047/index.js#L54-L61"',title:'"https://github.com/watson/ci-info/blob/44e98cebcdf4403f162195fbcf90b1f69fc6e047/index.js#L54-L61"'},"exports.isCI = !!(\n  env.CI || // Travis CI, CircleCI, Cirrus CI, Gitlab CI, Appveyor, CodeShip, dsari\n  env.CONTINUOUS_INTEGRATION || // Travis CI, Cirrus CI\n  env.BUILD_NUMBER || // Jenkins, TeamCity\n  env.RUN_ID || // TaskCluster, dsari\n  exports.name ||\n  false\n)\n")),(0,r.kt)("h3",{id:"--reportername"},"--reporter=","<","name",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TTY stdout\uc758 \uacbd\uc6b0: ",(0,r.kt)("strong",{parentName:"li"},"default")),(0,r.kt)("li",{parentName:"ul"},"\ube44 TTY stdout\uc758 \uacbd\uc6b0: ",(0,r.kt)("strong",{parentName:"li"},"append-only")))),(0,r.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,r.kt)("strong",{parentName:"li"},"default"),", ",(0,r.kt)("strong",{parentName:"li"},"append-only"),", ",(0,r.kt)("strong",{parentName:"li"},"ndjson"),", ",(0,r.kt)("strong",{parentName:"li"},"silent"))),(0,r.kt)("p",null,"Allows you to choose the reporter that will log debug info to the terminal about the installation progress."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"silent")," - \uce58\uba85\uc801\uc778 \uc624\ub958\ub97c \uc81c\uc678\ud558\uace0 \ucf58\uc194\uc5d0 \ucd9c\ub825\uc774 \uae30\ub85d\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default")," - stdout\uc774 TTY\uc77c \ub54c\uc758 \uae30\ubcf8 \ub9ac\ud3ec\ud130\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"append-only")," (v1.29.1\uc5d0 \ucd94\uac00\ub428) - \ucd9c\ub825\uc740 \ud56d\uc0c1 \ub05d\uc5d0 \ucd94\uac00\ub429\ub2c8\ub2e4. \ucee4\uc11c \uc870\uc791\uc774 \uc218\ud589\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ndjson")," - \uac00\uc7a5 \uc7a5\ud669\ud55c \ub9ac\ud3ec\ud130. \ubaa8\ub4e0 \ub85c\uadf8\ub97c ",(0,r.kt)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson")," \ud615\uc2dd\uc73c\ub85c \uc778\uc1c4\ud569\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"--use-store-server"},"--use-store-server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Starts a store server in the background. The store server will keep running after installation is done. To stop the store server, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm server stop")),(0,r.kt)("h3",{id:"--shamefully-hoist"},"--shamefully-hoist"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Creates a flat ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," structure, similar to that of ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),". ",(0,r.kt)("strong",{parentName:"p"},"WARNING"),": This is highly discouraged."),(0,r.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ko/filtering"},"\ud544\ud130\ub9c1\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694.")))}d.isMDXComponent=!0},8927:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);