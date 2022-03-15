"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6854],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=l(n),m=r,h=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},893:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return f}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],u={},s="Contributing to Metaflow",l={unversionedId:"r/introduction/wip-contributing-to-metaflow",id:"r/introduction/wip-contributing-to-metaflow",title:"Contributing to Metaflow",description:"First off, thanks for taking the time!",source:"@site/docs/r/introduction/wip-contributing-to-metaflow.md",sourceDirName:"r/introduction",slug:"/r/introduction/wip-contributing-to-metaflow",permalink:"/r/introduction/wip-contributing-to-metaflow",editUrl:"https://github.dev/obgibson/metaflow-docs/blob/master/docs/r/introduction/wip-contributing-to-metaflow.md",tags:[],version:"current",frontMatter:{}},c=[{value:"Contributing Code and Issues",id:"contributing-code-and-issues",children:[],level:2},{value:"Community",id:"community",children:[],level:2}],p={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing-to-metaflow"},"Contributing to Metaflow"),(0,i.kt)("p",null,"First off, thanks for taking the time!"),(0,i.kt)("p",null,"If you are interested in contributing to Metaflow, we'd love to hear from you! Drop us a line in our ",(0,i.kt)("a",{parentName:"p",href:"https://chat.metaflow.org"},"chatroom"),"."),(0,i.kt)("h2",{id:"contributing-code-and-issues"},"Contributing Code and Issues"),(0,i.kt)("p",null,"We are proud of ",(0,i.kt)("a",{parentName:"p",href:"/r/introduction/what-is-metaflow#the-philosophy-of-metaflow"},"our philosophy and human-centric development style"),", which means that we value thoughtfulness and a polished user experience more than the number of features or lines of code."),(0,i.kt)("p",null,"When Metaflow was developed internally at Netflix, we spent a considerable amount of time, often months, to hone the design for features before we implemented them. We are not sure what\u2019s the best way to facilitate the design process in the open yet - your ideas are welcome. We have outlined our current suggested way below -"),(0,i.kt)("p",null,"Please make sure there is an open issue discussing your contribution. Before opening a new issue, please check for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow/issues?q=is%3Aissue"},"existing issues"),". If you find an existing issue that matches closely with yours, please thumbs-up or comment on it, so we know that the issue is relevant to many people."),(0,i.kt)("p",null,"If you hit a bug that is not covered by an existing issue, please open a new issue. If you are able to fix the bug by yourself with a few lines of code, we welcome your PR. However, if fixing the bug requires more effort, please wait for our response on the issue. We try to respond as quickly as possible."),(0,i.kt)("p",null,"If you have a proposal for an enhancement or a new feature, please open an issue and engage with us on the issue before devoting significant time and resources to it. We care deeply about the ergonomics of Metaflow, and as such, for any new user-visible enhancement, please expect multiple design iterations."),(0,i.kt)("p",null,"We will do our best to respond to and review your PR and we hope you will stay engaged with us throughout the process."),(0,i.kt)("p",null,"We'd appreciate ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow/issues"},"issue reports")," if you run into trouble using Metaflow."),(0,i.kt)("h2",{id:"community"},"Community"),(0,i.kt)("p",null,"Everyone is welcome to join us in our ",(0,i.kt)("a",{parentName:"p",href:"https://chat.metaflow.org"},"chatroom"),"!"),(0,i.kt)("p",null,"Please maintain appropriate, professional conduct while participating in our community. This includes all channels of communication. We take reports of harassment or unwelcoming behavior very seriously. To report such behavior, please contact us via ",(0,i.kt)("a",{parentName:"p",href:"mailto:help@metaflow.org"},"email"),"."))}f.isMDXComponent=!0}}]);