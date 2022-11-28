"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1407],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(o),d=n,h=f["".concat(s,".").concat(d)]||f[d]||p[d]||r;return o?a.createElement(h,i(i({ref:t},u),{},{components:o})):a.createElement(h,i({ref:t},u))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}f.displayName="MDXCreateElement"},2543:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=o(7462),n=(o(7294),o(3905));const r={},i="Developing with Metaflow",l={unversionedId:"metaflow/introduction",id:"metaflow/introduction",title:"Developing with Metaflow",description:"Every project is a journey. Each stage of the journey presents different challenges and requirements. Luckily Metaflow",source:"@site/docs/metaflow/introduction.md",sourceDirName:"metaflow",slug:"/metaflow/introduction",permalink:"/metaflow/introduction",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/metaflow/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Episode 8: Autopilot",permalink:"/getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot"},next:{title:"Creating Flows",permalink:"/metaflow/basics"}},s={},c=[{value:"Developing on a Personal Workstation",id:"developing-on-a-personal-workstation",level:2},{value:"What You Will Learn",id:"what-you-will-learn",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"developing-with-metaflow"},"Developing with Metaflow"),(0,n.kt)("p",null,"Every project is a journey. Each stage of the journey presents different challenges and requirements. Luckily Metaflow\nallows you to start experimenting easily without having to worry about all details upfront. Rest assured that when your project grows in scale and impact, Metaflow helps your code grow accordingly."),(0,n.kt)("p",null,"A typical project goes through three major stages that are illustrated below. This section focuses on the first stage - local development. If you are curious about the next two stages, you can take a peek at ",(0,n.kt)("a",{parentName:"p",href:"/scaling/introduction"},"Scalable Flows")," and ",(0,n.kt)("a",{parentName:"p",href:"/production/introduction"},"Production Deployments"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(1127).Z,width:"701",height:"541"})),(0,n.kt)("h2",{id:"developing-on-a-personal-workstation"},"Developing on a Personal Workstation"),(0,n.kt)("p",null,"As a data scientist or engineer, your main productivity tool is your personal workstation, such as a laptop or a\ncloud workstation. A great thing about a personal computer is that they allow you to iterate quickly and experiment\nfreely knowing that you are not accidentally interfering with a colleague's work."),(0,n.kt)("p",null,"Metaflow treats local development as the first class concern. You can develop and test Metaflow code locally\nlike any other Python project or a notebook. Here's what often happens in the early phases of a project:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Many data scientists are familiar with notebooks that shine at open-ended exploration and quick sketching of solutions. When developing with Metaflow, it is totally ok (although not required) to use notebooks for analysis. Use the ",(0,n.kt)("a",{parentName:"p",href:"/metaflow/client"},"Metaflow Client API")," to access and organize results of Metaflow runs in a notebook.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once you have a rough idea for the first version of your project, it is useful to structure it as a workflow, or ",(0,n.kt)("em",{parentName:"p"},"flows")," in Metaflow parlance. Metaflow makes this easy: You can copy-paste the best parts of a notebook as steps of a Metaflow flow. For details why this is a good idea\nand how to create flows in practice, see ",(0,n.kt)("a",{parentName:"p",href:"/metaflow/basics"},"Creating Flows"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Don't consider flows just as static configuration. They are living and dynamic entities that you should be able to execute locally and improve gradually (this is where ",(0,n.kt)("a",{parentName:"p",href:"/metaflow/debugging#how-to-use-the-resume-command"},(0,n.kt)("inlineCode",{parentName:"a"},"resume")," comes in handy!"),"). The\nworkflow becomes the backbone of your application - in particular helping with ",(0,n.kt)("a",{parentName:"p",href:"/metaflow/basics#artifacts"},"data flow through artifacts")," -\nwhich enables much of the functionality in the next phases of the project."))),(0,n.kt)("h2",{id:"what-you-will-learn"},"What You Will Learn"),(0,n.kt)("p",null,"Let's go ahead and learn how to create and test Metaflow flows. This stage covers four core topics:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/metaflow/basics"},"Creating flows")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/metaflow/client"},"Inspecting results of flows")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/metaflow/visualizing-results"},"Visualizing results")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/metaflow/debugging"},"Debugging flows"))),(0,n.kt)("p",null,"These topics work locally on your workstation without any additional infrastructure, so it is easy to get started."))}p.isMDXComponent=!0},1127:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/intro-cartoon-1-d9b9205baadb5cc514dfb3a24c08cfa5.svg"}}]);