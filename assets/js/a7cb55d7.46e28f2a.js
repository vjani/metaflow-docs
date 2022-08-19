"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5879],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return l}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(r),l=a,f=m["".concat(p,".").concat(l)]||m[l]||u[l]||o;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function l(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8669:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return v}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],i={},p="@card",s={unversionedId:"api/step-decorators/card",id:"api/step-decorators/card",title:"@card",description:"Creates a report card after the step completes. For more information, see Visualizing Results and the main API docs for cards.",source:"@site/docs/api/step-decorators/card.md",sourceDirName:"api/step-decorators",slug:"/api/step-decorators/card",permalink:"/api/step-decorators/card",editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/api/step-decorators/card.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"@batch",permalink:"/api/step-decorators/batch"},next:{title:"@catch",permalink:"/api/step-decorators/catch"}},d=[],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},m=u("DocSection"),l=u("SigArgSection"),f=u("SigArg"),y=u("Description"),h=u("ParamSection"),g=u("Parameter"),b={toc:d};function v(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"card"},"@card"),(0,o.kt)("p",null,"Creates a report card after the step completes. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/metaflow/visualizing-results"},"Visualizing Results")," and ",(0,o.kt)("a",{parentName:"p",href:"/api/cards"},"the main API docs for cards"),"."),(0,o.kt)(m,{type:"decorator",name:"card",module:"metaflow",show_import:"True",heading_level:"3",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/plugins/cards/card_decorator.py#L24",mdxType:"DocSection"},(0,o.kt)(l,{mdxType:"SigArgSection"},(0,o.kt)(f,{name:"...",mdxType:"SigArg"})),(0,o.kt)(y,{summary:"Creates a human-readable report, a Metaflow Card, after this step completes.",extended_summary:"Note that you may add multiple `@card` decorators in a step with different parameters.",mdxType:"Description"}),(0,o.kt)(h,{name:"Parameters",mdxType:"ParamSection"},(0,o.kt)(g,{name:"type",type:"str",desc:"Card type (Default: 'default').",mdxType:"Parameter"}),(0,o.kt)(g,{name:"id",type:"str",desc:"If multiple cards are present, use this id to identify this card.",mdxType:"Parameter"}),(0,o.kt)(g,{name:"options",type:"Dict",desc:"Options passed to the card. The contents depend on the card type.",mdxType:"Parameter"}),(0,o.kt)(g,{name:"timeout",type:"int",desc:"Interrupt reporting if it takes more than this many seconds\\n(default: 45).",mdxType:"Parameter"}))))}v.isMDXComponent=!0}}]);