"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3085],{6323:(e,a,l)=>{l.r(a),l.d(a,{default:()=>d});var n=l(9496),t=l(1626),i=l(9078),s=l(9613),c=l(3808),m=l(6891),r=l(2957);const o="mdxPageWrapper_1a2y";const d=function(e){var a=e.content,l=a.frontMatter,d=a.metadata,v=l.title,u=l.description,N=l.wrapperClassName,g=l.hide_table_of_contents,f=d.permalink;return n.createElement(i.Z,{title:v,description:u,permalink:f,wrapperClassName:null!=N?N:r.kM.wrapper.mdxPages,pageClassName:r.kM.page.mdxPage},n.createElement("main",{className:"container container--fluid margin-vert--lg"},n.createElement("div",{className:(0,t.Z)("row",o)},n.createElement("div",{className:(0,t.Z)("col",!g&&"col--8")},n.createElement(s.Zo,{components:c.Z},n.createElement(a,null))),!g&&a.toc&&n.createElement("div",{className:"col col--2"},n.createElement(m.Z,{toc:a.toc,minHeadingLevel:l.toc_min_heading_level,maxHeadingLevel:l.toc_max_heading_level})))))}},6891:(e,a,l)=>{l.d(a,{Z:()=>o});var n=l(2245),t=l(5903),i=l(9496),s=l(1626),c=l(7562);const m="tableOfContents_1AQL";var r=["className"];const o=function(e){var a=e.className,l=(0,t.Z)(e,r);return i.createElement("div",{className:(0,s.Z)(m,"thin-scrollbar",a)},i.createElement(c.Z,(0,n.Z)({},l,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},7562:(e,a,l)=>{l.d(a,{Z:()=>r});var n=l(2245),t=l(5903),i=l(9496),s=l(2957),c=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function m(e){var a=e.toc,l=e.className,n=e.linkClassName,t=e.isChild;return a.length?i.createElement("ul",{className:t?void 0:l},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(m,{isChild:!0,toc:e.children,className:l,linkClassName:n}))}))):null}function r(e){var a=e.toc,l=e.className,r=void 0===l?"table-of-contents table-of-contents__left-border":l,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,u=void 0===v?void 0:v,N=e.minHeadingLevel,g=e.maxHeadingLevel,f=(0,t.Z)(e,c),k=(0,s.LU)(),C=null!=N?N:k.tableOfContents.minHeadingLevel,_=null!=g?g:k.tableOfContents.maxHeadingLevel,p=(0,s.DA)({toc:a,minHeadingLevel:C,maxHeadingLevel:_}),h=(0,i.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:C,maxHeadingLevel:_}}),[d,u,C,_]);return(0,s.Si)(h),i.createElement(m,(0,n.Z)({toc:p,className:r,linkClassName:d},f))}}}]);