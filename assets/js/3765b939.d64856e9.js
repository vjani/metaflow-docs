"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1250],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1766:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return b}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={},c="Basic Operations",l={unversionedId:"api-ref/constructing-flows/basic",id:"api-ref/constructing-flows/basic",title:"Basic Operations",description:"",source:"@site/docs/api-ref/constructing-flows/basic.md",sourceDirName:"api-ref/constructing-flows",slug:"/api-ref/constructing-flows/basic",permalink:"/api-ref/constructing-flows/basic",editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/api-ref/constructing-flows/basic.md",tags:[],version:"current",frontMatter:{}},p=[],f=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},u=f("DocSection"),m=f("SigArgSection"),d=f("SigArg"),h=f("Description"),y=f("ParamSection"),g=f("Parameter"),x={toc:p};function b(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-operations"},"Basic Operations"),(0,a.kt)(u,{type:"class",name:"FlowSpec",module:"metaflow",heading_level:"3",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/flowspec.py#L48",mdxType:"DocSection"},(0,a.kt)(m,{mdxType:"SigArgSection"},(0,a.kt)(d,{name:"use_cli",default:"True",mdxType:"SigArg"})),(0,a.kt)(h,{summary:"Main class from which all Flows should inherit.",mdxType:"Description"}),(0,a.kt)(y,{name:"Attributes",mdxType:"ParamSection"},(0,a.kt)(g,{name:"script_name",mdxType:"Parameter"}),(0,a.kt)(g,{name:"index",mdxType:"Parameter"}),(0,a.kt)(g,{name:"input",mdxType:"Parameter"}))),(0,a.kt)(u,{type:"method",name:"FlowSpec.next",module:"metaflow",heading_level:"4",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/flowspec.py#L484",mdxType:"DocSection"},(0,a.kt)(m,{mdxType:"SigArgSection"},(0,a.kt)(d,{name:"self",mdxType:"SigArg"}),(0,a.kt)(d,{name:"*dsts",mdxType:"SigArg"}),(0,a.kt)(d,{name:"**kwargs",mdxType:"SigArg"})),(0,a.kt)(h,{summary:"Indicates the next step to execute at the end of this step",extended_summary:"This statement should appear once and only once in each and every step (except the `end`\\nstep). Furthermore, it should be the last statement in the step.\\n\\nThere are several valid formats to specify the next step:\\n    - Straight-line connection: self.next(self.next_step) where `next_step` is a method in\\n      the current class decorated with the `@step` decorator\\n    - Static fan-out connection: self.next(self.step1, self.step2, ...) where `stepX` are\\n      methods in the current class decorated with the `@step` decorator\\n    - Foreach branch:\\n        self.next(self.foreach_step, foreach='foreach_iterator')\\n      In this situation, `foreach_step` is a method in the current class decorated with the\\n      `@step` docorator and `foreach_iterator` is a variable name in the current class that\\n      evaluates to an iterator. A task will be launched for each value in the iterator and\\n      each task will execute the code specified by the step `foreach_step`.",mdxType:"Description"}),(0,a.kt)(y,{name:"Raises",mdxType:"ParamSection"},(0,a.kt)(g,{type:"InvalidNextException",desc:"Raised if the format of the arguments does not match one of the ones given above.",mdxType:"Parameter"}))),(0,a.kt)(u,{type:"method",name:"FlowSpec.foreach_stack",module:"metaflow",heading_level:"4",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/flowspec.py#L271",mdxType:"DocSection"},(0,a.kt)(m,{mdxType:"SigArgSection"},(0,a.kt)(d,{name:"self",mdxType:"SigArg"})),(0,a.kt)(h,{summary:"Returns the current stack of foreach steps for the current step",extended_summary:"This effectively corresponds to the indexes and values at the various levels of nesting.\\nFor example, considering the following code:\\n```\\n@step\\ndef root(self):\\n    self.split_1 = ['a', 'b', 'c']\\n    self.next(self.nest_1, foreach='split_1')\\n\\n@step\\ndef nest_1(self):\\n    self.split_2 = ['d', 'e', 'f', 'g']\\n    self.next(self.nest_2, foreach='split_2'):\\n\\n@step\\ndef nest_2(self):\\n    foo = self.foreach_stack()\\n```\\nfoo will take the following values in the various tasks for nest_2:\\n    [(0, 3, 'a'), (0, 4, 'd')]\\n    [(0, 3, 'a'), (1, 4, 'e')]\\n    ...\\n    [(0, 3, 'a'), (3, 4, 'g')]\\n    [(1, 3, 'b'), (0, 4, 'd')]\\n    ...\\n\\nwhere each tuple corresponds to:\\n    - the index of the task for that level of the loop\\n    - the number of splits for that level of the loop\\n    - the value for that level of the loop\\nNote that the last tuple returned in a task corresponds to:\\n    - first element: value returned by self.index\\n    - third element: value returned by self.input",mdxType:"Description"}),(0,a.kt)(y,{name:"Returns",mdxType:"ParamSection"},(0,a.kt)(g,{type:"List[Tuple[int, int, object]]",desc:"An array describing the current stack of foreach steps",mdxType:"Parameter"}))))}b.isMDXComponent=!0}}]);