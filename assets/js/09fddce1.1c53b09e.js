"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={},l="Installing Metaflow",s={unversionedId:"v/r/getting-started/install",id:"v/r/getting-started/install",title:"Installing Metaflow",description:"MacOS/Linux",source:"@site/docs/v/r/getting-started/install.md",sourceDirName:"v/r/getting-started",slug:"/v/r/getting-started/install",permalink:"/v/r/getting-started/install",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/v/r/getting-started/install.md",tags:[],version:"current",frontMatter:{},sidebar:"r",previous:{title:"Get in Touch",permalink:"/v/r/introduction/getting-in-touch"},next:{title:"Development Environment",permalink:"/v/r/getting-started/development-environment"}},i={},u=[{value:"MacOS/Linux",id:"macoslinux",level:2},{value:"Windows Support",id:"windows-support",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-metaflow"},"Installing Metaflow"),(0,o.kt)("h2",{id:"macoslinux"},"MacOS/Linux"),(0,o.kt)("p",null,"Metaflow is available as an R package for macOS and Linux. You can get it from our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow"},"GitHub repository")," ","(","or very soon from CRAN",")",":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'devtools::install_github("Netflix/metaflow", subdir="R")\n')),(0,o.kt)("p",null,"You can finish the installation by running ",(0,o.kt)("inlineCode",{parentName:"p"},"install_metaflow()")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"metaflow::install_metaflow()\n")),(0,o.kt)("p",null,"Behind the scenes, Metaflow relies on the Python Metaflow package, which gets installed in a dedicated conda environment when you execute ",(0,o.kt)("inlineCode",{parentName:"p"},"install_metaflow()"),". You can instead use a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.python-guide.org/dev/virtualenvs/"},"Python virtualenv")," as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"install_metaflow(method='virtualenv')\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Metaflow requires ",(0,o.kt)("strong",{parentName:"p"},"Python 3")," since Python 3 has fewer bugs and is better supported than ",(0,o.kt)("a",{parentName:"p",href:"http://pythonclock.org"},"the deprecated Python 2.7"),".")),(0,o.kt)("p",null,"You can test your installation by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"metaflow::test()\n")),(0,o.kt)("p",null,"If you see the message ",(0,o.kt)("inlineCode",{parentName:"p"},"Your Metaflow installation looks good!")," congratulations! Now you can get started with Metaflow by following the ",(0,o.kt)("a",{parentName:"p",href:"tutorials/"},"tutorial"),", or you can ",(0,o.kt)("a",{parentName:"p",href:"/v/r/metaflow/basics"},"jump straight into the docs"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9563).Z,width:"1406",height:"380"})),(0,o.kt)("h2",{id:"windows-support"},"Windows Support"),(0,o.kt)("p",null,"Metaflow currently doesn't offer native support for Windows. However, if you are using Windows 10, then you can use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/about"},"WSL")," ","(","Windows Subsystem for Linux",")"," to install Metaflow. WSL lets you run a Linux environment inside Windows 10."),(0,o.kt)("p",null,"Follow these instructions to get set up with WSL 2 -"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Update your Windows 10 distribution to version 2004 or higher."),(0,o.kt)("li",{parentName:"ol"},"Follow ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"these steps")," to install WSL 2. When prompted, choose Ubuntu 18.04 as the Linux distribution."),(0,o.kt)("li",{parentName:"ol"},"Open Ubuntu 18.04 on your workstation, and run the following commands in the terminal to install R and Python -")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys E298A3A825C0D65DFD57CBB651716619E084DAB9\nsudo echo "deb http://cran.wustl.edu/bin/linux/ubuntu bionic-cran35/" | sudo tee -a /etc/apt/sources.list\nsudo apt update\nsudo apt install r-base r-base-dev\nsudo apt install libcurl4-openssl-dev libxml2-dev libssl-dev\n\nsudo apt-get install python3 python3-pip\necho "alias python=python3; alias pip=pip3" > ~/.bash_aliases\nsource ~/.bash_aliases\n')),(0,o.kt)("p",null,"[","Optional","]"," Set up RStudio IDE. Inside Ubuntu 18.04 on Windows, run the following commands -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},"sudo apt install -y r-base r-base-core r-recommended r-base-dev gdebi-core build-essential libcurl4-gnutls-dev libxml2-dev libssl-dev\nwget https://rstudio.org/download/latest/stable/server/bionic/rstudio-server-latest-amd64.deb\nsudo gdebi rstudio-server-latest-amd64.deb\nsudo rstudio-server start\n")),(0,o.kt)("p",null,"You can access RStudio at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8787"},"http://localhost:8787")," in your browser in Windows."),(0,o.kt)("p",null,"To install Metaflow - Inside Ubuntu 18.04 on Windows, open the R console ","(","or your RStudio IDE installed in the previous step",")"," and run the following commands -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},"install.packages('devtools', INSTALL_opts = c('--no-lock'))\ndevtools::install_github(\"netflix/metaflow\", subdir = \"R\")\n\nmetaflow::install_metaflow()\nmetaflow::test()\n")))}c.isMDXComponent=!0},9563:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-2020-08-04-at-3.16.18-pm-c07670cbae97b1d13eb50a7ae7a16fcb.png"}}]);