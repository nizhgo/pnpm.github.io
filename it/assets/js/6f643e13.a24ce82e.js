"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1131],{9613:(e,i,n)=>{n.d(i,{Zo:()=>s,kt:()=>d});var t=n(9496);function l(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function r(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?r(Object(n),!0).forEach((function(i){l(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function a(e,i){if(null==e)return{};var n,t,l=function(e,i){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],i.indexOf(n)>=0||(l[n]=e[n]);return l}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=t.createContext({}),c=function(e){var i=t.useContext(p),n=i;return e&&(n="function"==typeof e?e(i):o(o({},i),e)),n},s=function(e){var i=c(e.components);return t.createElement(p.Provider,{value:i},e.children)},m={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},u=t.forwardRef((function(e,i){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=c(n),d=l,v=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?t.createElement(v,o(o({ref:i},s),{},{components:n})):t.createElement(v,o({ref:i},s))}));function d(e,i){var n=arguments,l=i&&i.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var a={};for(var p in i)hasOwnProperty.call(i,p)&&(a[p]=i[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var c=2;c<r;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7064:(e,i,n)=>{n.r(i),n.d(i,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>u});var t=n(2245),l=n(5903),r=(n(9496),n(9613)),o=["components"],a={id:"uninstall",title:"Disinstallazione di pnpm"},p=void 0,c={unversionedId:"uninstall",id:"version-6.x/uninstall",isDocsHomePage:!1,title:"Disinstallazione di pnpm",description:"Rimozione dei pacchetti installati a livello globale",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/it/uninstall",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"uninstall",title:"Disinstallazione di pnpm"},sidebar:"version-6.x/docs",previous:{title:"Come vengono risolti i peer",permalink:"/it/how-peers-are-resolved"}},s=[{value:"Rimozione dei pacchetti installati a livello globale",id:"rimozione-dei-pacchetti-installati-a-livello-globale",children:[],level:2},{value:"Rimozione della CLI di pnpm",id:"rimozione-della-cli-di-pnpm",children:[],level:2},{value:"Rimozione dell&#39;archivio globale indirizzabile ai contenuti",id:"rimozione-dellarchivio-globale-indirizzabile-ai-contenuti",children:[],level:2},{value:"Rimozione del file di stato",id:"rimozione-del-file-di-stato",children:[],level:2}],m={toc:s};function u(e){var i=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,t.Z)({},m,n,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"rimozione-dei-pacchetti-installati-a-livello-globale"},"Rimozione dei pacchetti installati a livello globale"),(0,r.kt)("p",null,"Prima di rimuovere la CLI di pnpm, potrebbe avere senso rimuovere tutti i pacchetti globali installati da pnpm."),(0,r.kt)("p",null,"Per elencare tutti i pacchetti globali, esegui ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". Esistono due modi per rimuovere i pacchetti globali:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Esegui ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," con ogni pacchetto globale elencato."),(0,r.kt)("li",{parentName:"ol"},"Esegui ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," per trovare la posizione della cartella globale e rimuoverla manualmente.")),(0,r.kt)("h2",{id:"rimozione-della-cli-di-pnpm"},"Rimozione della CLI di pnpm"),(0,r.kt)("p",null,"Se hai utilizzato lo script autonomo per installare pnpm (o npx), dovresti essere in grado di disinstallare la CLI pnpm utilizzando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm rm -g pnpm\n")),(0,r.kt)("p",null,"Se hai usato npm per installare pnpm, allora dovresti usare npm per disinstallare pnpm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,r.kt)("h2",{id:"rimozione-dellarchivio-globale-indirizzabile-ai-contenuti"},"Rimozione dell'archivio globale indirizzabile ai contenuti"),(0,r.kt)("p",null,"Se hai usato pnpm solo nel disco primario, avrai un archivio globale nella cartella home. Quindi basta rimuoverlo tramite:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rm -rf ~/.pnpm-store\n")),(0,r.kt)("p",null,"Se hai usato pnpm in dischi non primari, l'archivio si trova nella radice di quel disco. Ad esempio, se hai utilizzato pnpm sul disco ",(0,r.kt)("inlineCode",{parentName:"p"},"D:")," su Windows, rimuovi l'archivio da ",(0,r.kt)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),"."),(0,r.kt)("h2",{id:"rimozione-del-file-di-stato"},"Rimozione del file di stato"),(0,r.kt)("p",null,"pnpm salva anche alcuni stati in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.pnpm-state.json"),". Puoi rimuovere questo file."))}u.isMDXComponent=!0}}]);