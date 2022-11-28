"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7505],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5195:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={},s="Easy Custom Reports with Card Components",l={unversionedId:"metaflow/visualizing-results/easy-custom-reports-with-card-components",id:"metaflow/visualizing-results/easy-custom-reports-with-card-components",title:"Easy Custom Reports with Card Components",description:"Default Cards are useful during development when you need to quickly inspect artifacts produced by a task or visualize the overall structure of the flow. As your project progresses, you may want to create a custom card that highlights information specific to your project.",source:"@site/docs/metaflow/visualizing-results/easy-custom-reports-with-card-components.md",sourceDirName:"metaflow/visualizing-results",slug:"/metaflow/visualizing-results/easy-custom-reports-with-card-components",permalink:"/metaflow/visualizing-results/easy-custom-reports-with-card-components",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/metaflow/visualizing-results/easy-custom-reports-with-card-components.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Effortless Task Inspection with Default Cards",permalink:"/metaflow/visualizing-results/effortless-task-inspection-with-default-cards"},next:{title:"Advanced, Shareable Cards with Card Templates",permalink:"/metaflow/visualizing-results/advanced-shareable-cards-with-card-templates"}},i={},p=[{value:"Showing Plots",id:"showing-plots",level:2},{value:"Multiple Cards In a Step",id:"multiple-cards-in-a-step",level:2},{value:"Comparing Data Across Runs",id:"comparing-data-across-runs",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"easy-custom-reports-with-card-components"},"Easy Custom Reports with Card Components"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Default Cards")," are useful during development when you need to quickly inspect artifacts produced by a task or visualize the overall structure of the flow. As your project progresses, you may want to create a custom card that highlights information specific to your project."),(0,r.kt)("p",null,"The easiest way to create a custom card is to use built-in components: ",(0,r.kt)("em",{parentName:"p"},"Images"),", ",(0,r.kt)("em",{parentName:"p"},"Tables"),", ",(0,r.kt)("em",{parentName:"p"},"Artifacts"),", and ",(0,r.kt)("em",{parentName:"p"},"Markdown")," text. You can construct a report with these components in Python without having to worry about HTML or styling in CSS. Rest assured that if components ever show their limits, you have an option to customize reports even further using ",(0,r.kt)("a",{parentName:"p",href:"advanced-shareable-cards-with-card-templates"},(0,r.kt)("em",{parentName:"a"},"Card Templates")),"."),(0,r.kt)("p",null,"Let\u2019s start with a simple example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from metaflow import FlowSpec, step, card, Parameter, current\nfrom metaflow.cards import Markdown\n\nclass GuessCardFlow(FlowSpec):\n\n    number = Parameter(\'number\', default=3)\n\n    @card(type=\'blank\')\n    @step\n    def start(self):\n        current.card.append(Markdown("# Guess my number"))\n        if self.number > 5:\n            current.card.append(Markdown("My number is **smaller** \u2b07\ufe0f"))\n        elif self.number < 5:\n            current.card.append(Markdown("My number is **larger** \u2b06\ufe0f"))\n        else:\n            current.card.append(Markdown("## Correct! \ud83c\udf89"))\n        self.next(self.end)\n\n    @step\n    def end(self):\n        pass\n\nif __name__ == "__main__":\n    GuessCardFlow()\n')),(0,r.kt)("p",null,"Notice how in the ",(0,r.kt)("inlineCode",{parentName:"p"},"@card")," decorator we specify ",(0,r.kt)("inlineCode",{parentName:"p"},"type=\u2019blank\u2019.")," Instead of the ",(0,r.kt)("em",{parentName:"p"},"Default Card"),", we want an empty card with no content by default. The ",(0,r.kt)("inlineCode",{parentName:"p"},"blank")," card provides a nice empty canvas for custom components."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"current.card.append")," call adds a component in the card. Each component occupies a row in the card, so you don\u2019t have to worry about the layout. If you run ",(0,r.kt)("inlineCode",{parentName:"p"},"GuessCardFlow"),", you will see a card like below. The exact content depends on the value of the number parameter."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5955).Z,width:"696",height:"161"})),(0,r.kt)("p",null,"Currently, the following components are provided:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Markdown"))," - output a block of text formatted as ",(0,r.kt)("a",{parentName:"li",href:"https://www.markdownguide.org"},"Markdown"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Table")," ")," - a table of rows and columns. Each cell may include other components."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Image")," ")," - an image, constructed from bytes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Artifact")," ")," - pretty-print any Python object.")),(0,r.kt)("p",null,"The API reference documents ",(0,r.kt)("a",{parentName:"p",href:"/api/cards#card-components"},"the card components in detail"),"."),(0,r.kt)("p",null,"The following example demonstrates all the components in action:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, step, current, card\nfrom metaflow.cards import Markdown, Artifact, Image, Table\nimport requests\n\nROOT = 'https://upload.wikimedia.org/wikipedia/commons/'\nIMAGES = {\n    'Mammals': {\n        'cat': 'b/b9/CyprusShorthair.jpg',\n        'bandicoot': '8/8b/Perameles_gunni.jpg',\n        'dog': '5/5d/Akbash_Dog_male_2016.jpg'\n    },\n    'Birds': {\n        'penguin': 'b/bf/Spheniscus_humboldti_20070116.jpg'\n    }\n}\n\nclass ComponentDemoFlow(FlowSpec):\n\n    @card(type='blank')\n    @step\n    def start(self):\n        for section, animals in IMAGES.items():\n            current.card.append(Markdown('## %s' % section))\n            rows = []\n            for label, url in animals.items():\n                resp = requests.get(ROOT + url,\n                                    headers={'user-agent': 'metaflow-example'})\n                rows.append([Markdown('Animal: **%s**' % label),\n                             Artifact(resp.headers),\n                             Image(resp.content)])\n            current.card.append(Table(rows))\n        self.next(self.end)\n\n    @step\n    def end(self):\n       pass\n\nif __name__ == '__main__':\n    ComponentDemoFlow()\n")),(0,r.kt)("p",null,"The resulting card will look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2622).Z,width:"1122",height:"903"})),(0,r.kt)("p",null,"Notice how the ",(0,r.kt)("inlineCode",{parentName:"p"},"Artifact")," component automatically truncates a large dictionary in the middle column, so you can use it to safely output even huge objects. It is also worth knowing that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," component stores the image in the resulting HTML file itself, so you can view the card without an internet connection or even if the original image becomes unavailable."),(0,r.kt)("h2",{id:"showing-plots"},"Showing Plots"),(0,r.kt)("p",null,"A data scientist may care more about showing data visualizations rather than photos of cats. Technically there isn\u2019t a huge difference: You can use any existing visualization library in Python to produce plots, save the resulting image in a file or an in-memory object, and provide the contents of the file (bytes) to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," component."),(0,r.kt)("p",null,"For convenience, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," component provides a utility method, ",(0,r.kt)("inlineCode",{parentName:"p"},"Image.from_matplotlib"),", that extracts bytes from a ",(0,r.kt)("a",{parentName:"p",href:"https://matplotlib.org"},"Matplotlib")," figure automatically. Here\u2019s an example that uses the ",(0,r.kt)("a",{parentName:"p",href:"/scaling/dependencies"},"@conda decorator")," to make sure that Matplotlib is available. If you have Matplotlib and Numpy already installed in your environment, you can run the example without ",(0,r.kt)("inlineCode",{parentName:"p"},"@conda_base"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, step, current, card, conda_base\nfrom metaflow.cards import Image\n\n@conda_base(python='3.8.1',\n            libraries={'numpy':'1.20.3', 'matplotlib':'3.4.2'})\nclass PlotDemoFlow(FlowSpec):\n\n    @card(type='blank')\n    @step\n    def start(self):\n        import matplotlib.pyplot as plt\n        import numpy\n        fig = plt.figure()\n        x = numpy.random.normal(0, 0.1, 100000)\n        y = numpy.random.normal(0, 0.1, 100000)\n        plt.scatter(x, y, s=0.1, color=(0.2, 0.2, 1.0, 0.2))\n        current.card.append(Image.from_matplotlib(fig))\n        self.next(self.end)\n\n    @step\n    def end(self):\n        pass\n\nif __name__ == '__main__':\n    PlotDemoFlow()\n")),(0,r.kt)("p",null,"The resulting card will look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8778).Z,width:"1116",height:"606"})),(0,r.kt)("p",null,"Note that you can click the image in the card to see a larger version of it."),(0,r.kt)("h2",{id:"multiple-cards-in-a-step"},"Multiple Cards In a Step"),(0,r.kt)("p",null,"You may want to produce multiple separate cards in a step. Maybe one card shows high-level business metrics that are suitable for wide distribution, while another shows technical details for debugging purposes."),(0,r.kt)("p",null,"When multiple cards are present, calling ",(0,r.kt)("inlineCode",{parentName:"p"},"current.card.append")," is ambiguous: As such, it doesn\u2019t know which of the many cards the component should be added to. Metaflow will show a warning if you try to do this, but it won\u2019t crash the flow - nothing card-related should ever cause the flow to crash."),(0,r.kt)("p",null,"Use the id keyword argument in the ",(0,r.kt)("inlineCode",{parentName:"p"},"@card")," decorator to uniquely identify each card. Then, you can refer to a specific card with the ",(0,r.kt)("inlineCode",{parentName:"p"},"current.card[card_id].append")," notation. Here\u2019s an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, step, current, card\nfrom metaflow.cards import Markdown\n\nclass ManyCardsFlow(FlowSpec):\n\n    @card(type='blank', id='first')\n    @card(type='blank', id='second')\n    @step\n    def start(self):\n        current.card['first'].append(\n            Markdown('# I am the first card'))\n        current.card['second'].append(\n            Markdown('# I am the second card'))\n        self.next(self.end)\n\n    @step\n    def end(self):\n        pass\n\nif __name__ == '__main__':\n    ManyCardsFlow()\n")),(0,r.kt)("p",null,"When a task has multiple cards, the \u201c",(0,r.kt)("inlineCode",{parentName:"p"},"card view"),"\u201d command will list all cards that are viewable for the task. You must specify which exact card you want to view:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you have specified an ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," for the card, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"\u2013id")," option to view a card corresponding to the given ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),". For instance, \u201c",(0,r.kt)("inlineCode",{parentName:"li"},"card view \u2013id first"),"\u201d to see the card corresponding to ",(0,r.kt)("inlineCode",{parentName:"li"},"@card(id=\u2019first\u2019)"),"."),(0,r.kt)("li",{parentName:"ul"},"Each card has a unique hash value which is shown by \u201c",(0,r.kt)("inlineCode",{parentName:"li"},"card view"),"\u201d and \u201c",(0,r.kt)("inlineCode",{parentName:"li"},"card list"),"\u201d. You can execute e.g. \u201c",(0,r.kt)("inlineCode",{parentName:"li"},"card view \u2013hash 23b4e"),"\u201d to see a card corresponding to the given hash.")),(0,r.kt)("h2",{id:"comparing-data-across-runs"},"Comparing Data Across Runs"),(0,r.kt)("p",null,"In many cases, you may want to produce a single card that characterizes the results of the whole flow. A natural way to do this is to assign a card to the ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," step that has access to all results produced by a run."),(0,r.kt)("p",null,"Besides accessing all results of a single run, you may want to access results across multiple runs and produce a card that compares the latest data to past results. Thanks to the fact that Metaflow persists and versions all results, this can be done easily: Just use ",(0,r.kt)("a",{parentName:"p",href:"../client"},"the Client API")," to access past results."),(0,r.kt)("p",null,"The following example demonstrates how you can create a card that accesses all data produced by a flow at the ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," step, as well as compares results across historical runs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, step, current, card, conda_base, Flow, Parameter\nfrom metaflow.cards import Image, Table, Artifact\nfrom itertools import islice\n\n@conda_base(python='3.8.1',\n            libraries={'numpy':'1.20.3', 'matplotlib':'3.4.2'})\nclass CompareRunsFlow(FlowSpec):\n\n    alpha = Parameter('alpha', default=0.1)\n\n    @step\n    def start(self):\n        import numpy as np\n        self.x = np.linspace(-1, 2, 100)\n        self.y = self.alpha * np.exp(self.x)\n        self.next(self.end)\n\n    @card(type='blank')\n    @step\n    def end(self):\n        self.compare_runs()\n\n    def compare_runs(self):\n        import matplotlib.pyplot as plt\n        rows = []\n        fig = plt.figure()\n        for run in islice(Flow('CompareRunsFlow'), 3):\n            data = run['start'].task.data\n            rows.append(list(map(Artifact, (run.id,\n                                            run.created_at,\n                                            data.alpha))))\n            plt.plot(data.x, data.y, label=run.id)\n        plt.legend()\n        current.card.append(Table(rows,\\\n            headers=['Run ID', 'Created', 'Alpha']))\n        current.card.append(Image.from_matplotlib(fig))\n\nif __name__ == '__main__':\n    CompareRunsFlow()\n")),(0,r.kt)("p",null,"To see the comparison in action, run the flow at least three times with varying values of the ",(0,r.kt)("inlineCode",{parentName:"p"},"\u2013alpha")," parameter. Note the following features of the flow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The flow-level card is produced by a separate helper function, ",(0,r.kt)("inlineCode",{parentName:"li"},"compare_runs"),". It is a good idea to separate code that produces a complex card in its own function or even in a separate module. The ",(0,r.kt)("inlineCode",{parentName:"li"},"current.card.append")," call is available globally when a task is executing, so there is no need to restrict card creation in a ",(0,r.kt)("inlineCode",{parentName:"li"},"@step")," function."),(0,r.kt)("li",{parentName:"ul"},"The \u201c",(0,r.kt)("inlineCode",{parentName:"li"},"islice(Flow('CompareRunsFlow'), 3)"),"\u201d expression is used to access the latest three runs of the flow, including the currently executing one. Thanks to the ",(0,r.kt)("a",{parentName:"li",href:"/scaling/tagging"},"namespacing")," functionality of Metaflow, the expression returns the latest three runs executed by you personally, i.e. in your usernamespace, when you run the flow locally. In contrast, if ",(0,r.kt)("a",{parentName:"li",href:"../../production/coordinating-larger-metaflow-projects"},"deployed to a production environment"),", it returns the latest three production runs. This way, you can cleanly manage multiple versions of the project, some in development and some in production, and keep the results separate."),(0,r.kt)("li",{parentName:"ul"},"You can use any off-the-shelf libraries, like Matplotlib here, to compare, visualize, and analyze results. You can develop your own helper libraries or ",(0,r.kt)("a",{parentName:"li",href:"advanced-shareable-cards-with-card-templates"},"Card Templates")," which standardize the analyses and reporting that are relevant for your projects.")),(0,r.kt)("p",null,"The resulting card will look something like below. It shows the latest three runs of the flow, the parameter supplied for each run, and a visualization that allows you to compare the runs."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2457).Z,width:"1439",height:"783"})))}d.isMDXComponent=!0},2457:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/card-docs-compare-02220a2117e515da3f3ea8c867ee0d39.png"},2622:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/card-docs-components-f7988bff68a098370c7061566787ccf1.png"},5955:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/card-docs-guess-310a187be8a868c4aaa3545911dedfdc.png"},8778:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/card-docs-plot-85aac4dec56f3d6eff34b772fcd182be.png"}}]);