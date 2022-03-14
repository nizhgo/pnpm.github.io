"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4470],{9613:(e,n,a)=>{a.d(n,{Zo:()=>i,kt:()=>c});var o=a(9496);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var m=o.createContext({}),l=function(e){var n=o.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},i=function(e){var n=l(e.components);return o.createElement(m.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,m=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(a),c=t,k=u["".concat(m,".").concat(c)]||u[c]||d[c]||r;return a?o.createElement(k,p(p({ref:n},i),{},{components:a})):o.createElement(k,p({ref:n},i))}));function c(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,p=new Array(r);p[0]=u;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s.mdxType="string"==typeof e?e:t,p[1]=s;for(var l=2;l<r;l++)p[l]=a[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7792:(e,n,a)=>{a.r(n),a.d(n,{frontMatter:()=>s,contentTitle:()=>m,metadata:()=>l,assets:()=>i,toc:()=>d,default:()=>c});var o=a(7813),t=a(7044),r=(a(9496),a(9613)),p=["components"],s={title:"node_modules planos n\xe3o s\xe3o a \xfanica maneira",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},m=void 0,l={permalink:"/pt/blog/2020/05/27/flat-node-modules-is-not-the-only-way",editUrl:"https://crowdin.com/project/pnpm/pt-BR",source:"@site/i18n/pt/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md",title:"node_modules planos n\xe3o s\xe3o a \xfanica maneira",description:"Novos usu\xe1rios do pnpm frequentemente me perguntam acerca da estranha estrutura do node_modules que o pnpm cria. Por que n\xe3o \xe9 plano? Onde est\xe3o todas as sub-depend\xeancias?",date:"2020-05-27T00:00:00.000Z",formattedDate:"27 de maio de 2020",tags:[],readingTime:2.73,truncated:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"node_modules planos n\xe3o s\xe3o a \xfanica maneira",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"Node-Modules configuration options with pnpm",permalink:"/pt/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},i={authorsImageUrls:[void 0]},d=[],u={toc:d};function c(e){var n=e.components,a=(0,t.Z)(e,p);return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Novos usu\xe1rios do pnpm frequentemente me perguntam acerca da estranha estrutura do ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," que o pnpm cria. Por que n\xe3o \xe9 plano? Onde est\xe3o todas as sub-depend\xeancias?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Vou assumir que os leitores do artigo j\xe1 est\xe3o familiarizados com o ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," plano criado pelo npm e Yarn. Se voc\xea n\xe3o entende por que o npm 3 teve que come\xe7ar a usar ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," planos na v3, voc\xea pode encontrar um pouco da hist\xf3ria em ",(0,r.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/why-should-we-use-pnpm.html"},"Por que devemos usar o pnpm?"),".")),(0,r.kt)("p",null,"Ent\xe3o, por que o ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," do pnpm \xe9 incomum? Vamos criar dois diret\xf3rios e executar ",(0,r.kt)("inlineCode",{parentName:"p"},"npm add express")," em um deles e ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add express")," no outro. Aqui est\xe1 o in\xedcio do ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," do primeiro diret\xf3rio:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},".bin\naccepts\narray-flatten\nbody-parser\nbytes\ncontent-disposition\ncookie-signature\ncookie\ndebug\ndepd\ndestroy\nee-first\nencodeurl\nescape-html\netag\nexpress\n")),(0,r.kt)("p",null,"Voc\xea pode ver todo o diret\xf3rio ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules"},"aqui"),"."),(0,r.kt)("p",null,"E \xe9 isso que voc\xea obt\xe9m no ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," criado pelo pnpm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},".pnpm\n.modules.yaml\nexpress\n")),(0,r.kt)("p",null,"Voc\xea pode conferir ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules"},"aqui"),"."),(0,r.kt)("p",null,"Ent\xe3o, onde est\xe3o todas as depend\xeancias? Existe apenas uma pasta em ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," chamada ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm")," e um link simb\xf3lico chamado ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),". Bem, instalamos apenas ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),", ent\xe3o esse \xe9 o \xfanico pacote que sua aplica\xe7\xe3o tem que ter acesso"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Leia mais sobre porque o rigor do pnpm \xe9 uma coisa boa ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308"},"aqui"))),(0,r.kt)("p",null,"Vamos ver o que est\xe1 dentro de ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25b8 .pnpm\n  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n    .modules.yaml\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"express")," n\xe3o tem ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"? Onde est\xe3o todas as depend\xeancias de ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),"?"),(0,r.kt)("p",null,"O truque \xe9 que ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," \xe9 apenas um link simb\xf3lico. Quando o Node.js resolve depend\xeancias, ele usa suas localiza\xe7\xf5es reais, portanto, n\xe3o preserva links simb\xf3licos. Mas onde est\xe1 a localiza\xe7\xe3o real de ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),", voc\xea pode perguntar?"),(0,r.kt)("p",null,"Aqui: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express"},"node_modules/.pnpm/express@4.17.1/node_modules/express"),"."),(0,r.kt)("p",null,"OK, agora sabemos o prop\xf3sito da pasta ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm/"),". ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm/")," armazena todos os pacotes em uma estrutura de pastas simples, ent\xe3o cada pacote pode ser encontrado em uma pasta nomeada por este padr\xe3o:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},".pnpm/<name>@<version>/node_modules/<name>\n")),(0,r.kt)("p",null,"N\xf3s o chamamos de virtual store directory."),(0,r.kt)("p",null,"Essa estrutura plana evita os problemas de longos diret\xf3rios causados pelo ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," aninhados criado pelo npm v2, mas mant\xe9m os pacotes isolados ao contr\xe1rio dos ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," criados pelo npm v3,4,5,6 ou Yarn v1."),(0,r.kt)("p",null,"Agora vamos olhar para a localiza\xe7\xe3o real de ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n")),(0,r.kt)("p",null,"\xc9 uma farsa? Ainda falta ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"! O segundo truque da estrutura ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," do pnpm \xe9 que as depend\xeancias dos pacotes est\xe3o no mesmo n\xedvel de diret\xf3rio em que a localiza\xe7\xe3o real da depend\xeancia. Portanto, as depend\xeancias de ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," n\xe3o est\xe3o em ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm/express@4.17.1/node_modules/express/node_modules/")," mas em ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules"},".pnpm/express@4.17.1/node_modules/"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25be .pnpm\n    \u25b8 accepts@1.3.5\n    \u25b8 array-flatten@1.1.1\n    ...\n    \u25be express@4.16.3\n      \u25be node_modules\n        \u25b8 accepts\n        \u25b8 array-flatten\n        \u25b8 body-parser\n        \u25b8 content-disposition\n        ...\n        \u25b8 etag\n        \u25be express\n          \u25b8 lib\n            History.md\n            index.js\n            LICENSE\n            package.json\n            Readme.md\n")),(0,r.kt)("p",null,"Todas as depend\xeancias de ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," s\xe3o links simb\xf3licos para diret\xf3rios apropriados em ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/.pnpm/"),". Colocar depend\xeancias de ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," um n\xedvel acima permite evitar links simb\xf3licos circulares."),(0,r.kt)("p",null,"Ent\xe3o, como voc\xea pode ver, mesmo que o ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," do pnpm pare\xe7a incomum no in\xedcio:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\xe9 totalmente compat\xedvel com Node.js"),(0,r.kt)("li",{parentName:"ol"},"os pacotes s\xe3o bem agrupados com suas depend\xeancias")),(0,r.kt)("p",null,"A estrutura \xe9 um pouco ",(0,r.kt)("a",{parentName:"p",href:"/how-peers-are-resolved"},"mais complexa")," para pacotes com depend\xeancias peer, mas a ideia \xe9 a mesma: usar links simb\xf3licos para criar um aninhamento com uma estrutura de diret\xf3rio simples."))}c.isMDXComponent=!0}}]);