"use strict";(self.webpackChunktxg_wiki=self.webpackChunktxg_wiki||[]).push([[2711],{4750:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});r(6540);var a=r(6289),n=r(539),i=r(1082),s=r(8569),c=r(1410),l=r(9303),o=r(4848);function d(e){let{year:t,posts:r}=e;const n=(0,s.i)({day:"numeric",month:"long",timeZone:"UTC"});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.A,{as:"h3",id:t,children:t}),(0,o.jsx)("ul",{children:r.map((e=>{return(0,o.jsx)("li",{children:(0,o.jsxs)(a.A,{to:e.metadata.permalink,children:[(t=e.metadata.date,n.format(new Date(t)))," - ",e.metadata.title]})},e.metadata.date);var t}))})]})}function h(e){let{years:t}=e;return(0,o.jsx)("section",{className:"margin-vert--lg",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,o.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,o.jsx)(d,{...e})},t)))})})})}function m(e){let{archive:t}=e;const r=(0,n.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,n.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),s=function(e){const t=e.reduce(((e,t)=>{const r=t.metadata.date.split("-")[0],a=e.get(r)??[];return e.set(r,[t,...a])}),new Map);return Array.from(t,(e=>{let[t,r]=e;return{year:t,posts:r}}))}(t.blogPosts);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.be,{title:r,description:a}),(0,o.jsxs)(c.A,{children:[(0,o.jsx)("header",{className:"hero hero--primary",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(l.A,{as:"h1",className:"hero__title",children:r}),(0,o.jsx)("p",{className:"hero__subtitle",children:a})]})}),(0,o.jsx)("main",{children:s.length>0&&(0,o.jsx)(h,{years:s})})]})]})}},8569:(e,t,r)=>{r.d(t,{i:()=>n});var a=r(797);function n(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,a.A)(),r=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,a.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:r,...e})}}}]);