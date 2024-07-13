"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[2657],{4606:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(4848),o=i(8453);const s={title:"Telemetry",sidebar_position:0,slug:"/contributing-telemetry"},r=void 0,a={id:"Contributing/contributing-telemetry",title:"Telemetry",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/Contributing/contributing-telemetry.md",sourceDirName:"Contributing",slug:"/contributing-telemetry",permalink:"/contributing-telemetry",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Telemetry",sidebar_position:0,slug:"/contributing-telemetry"},sidebar:"defaultSidebar",previous:{title:"LangSmith",permalink:"/integrations-langsmith"},next:{title:"How to contribute?",permalink:"/contributing-how-to-contribute"}},l={},c=[{value:"Data Collected Includes",id:"1734ed50fb4a4a45aaa84185b44527ca",level:2},{value:"Run",id:"2d427dca4f0148ae867997f6789e8bfb",level:3},{value:"Shutdown",id:"081e4bd4faec430fb05b657026d1a69c",level:3},{value:"Version",id:"dc09f6aba6c64c7b8dad3d86a7cba6d6",level:3},{value:"Playground",id:"ae6c3859f612441db3c15a7155e9f920",level:3},{value:"Component",id:"630728d6654c40a6b8901459a4bc3a4e",level:3}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,t.jsx)(n.p,{children:"Our system uses anonymous telemetry to collect essential usage statistics to enhance functionality and user experience. This data helps us identify commonly used features and areas needing improvement, ensuring our development efforts align with what you need."}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"We respect your privacy and are committed to protecting your data. We do not collect any personal information or sensitive data. All telemetry data is anonymized and used solely for improving Langflow."}),(0,t.jsxs)(n.p,{children:["You can opt-out of telemetry by setting the\xa0",(0,t.jsx)(n.code,{children:"LANGFLOW_DO_NOT_TRACK"}),"\xa0or\xa0",(0,t.jsx)(n.code,{children:"DO_NOT_TRACK"}),"\xa0environment variable to\xa0",(0,t.jsx)(n.code,{children:"true"}),"\xa0before running Langflow. This will disable telemetry data collection."]})]}),"\n",(0,t.jsx)(n.h2,{id:"1734ed50fb4a4a45aaa84185b44527ca",children:"Data Collected Includes"}),"\n",(0,t.jsx)(n.h3,{id:"2d427dca4f0148ae867997f6789e8bfb",children:"Run"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"IsWebhook"}),": Indicates whether the operation was triggered via a webhook."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Seconds"}),": Duration in seconds for how long the operation lasted, providing insights into performance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Success"}),": Boolean value indicating whether the operation was successful, helping identify potential errors or issues."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ErrorMessage"}),": Provides error message details if the operation was unsuccessful, aiding in troubleshooting and enhancements."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"081e4bd4faec430fb05b657026d1a69c",children:"Shutdown"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Time Running"}),": Total runtime before shutdown, useful for understanding application lifecycle and optimizing uptime."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"dc09f6aba6c64c7b8dad3d86a7cba6d6",children:"Version"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Version"}),": The specific version of Langflow used, which helps in tracking feature adoption and compatibility."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Platform"}),": Operating system of the host machine, which aids in focusing our support for popular platforms like Windows, macOS, and Linux."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Python"}),": The version of Python used, assisting in maintaining compatibility and support for various Python versions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Arch"}),": Architecture of the system (e.g., x86, ARM), which helps optimize our software for different hardware."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AutoLogin"}),": Indicates whether the auto-login feature is enabled, reflecting user preference settings."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CacheType"}),": Type of caching mechanism used, which impacts performance and efficiency."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"BackendOnly"}),": Boolean indicating whether you are running Langflow in a backend-only mode, useful for understanding deployment configurations."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ae6c3859f612441db3c15a7155e9f920",children:"Playground"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Seconds"}),": Duration in seconds for playground execution, offering insights into performance during testing or experimental stages."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ComponentCount"}),": Number of components used in the playground, which helps understand complexity and usage patterns."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Success"}),": Success status of the playground operation, aiding in identifying the stability of experimental features."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"630728d6654c40a6b8901459a4bc3a4e",children:"Component"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Name"}),": Identifies the component, providing data on which components are most utilized or prone to issues."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Seconds"}),": Time taken by the component to execute, offering performance metrics."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Success"}),": Whether the component operated successfully, which helps in quality control."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ErrorMessage"}),": Details of any errors encountered, crucial for debugging and improvement."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This telemetry data is crucial for enhancing Langflow and ensuring that our development efforts align with your needs. Your feedback and suggestions are invaluable in shaping the future of Langflow, and we appreciate your support in making Langflow better for everyone."})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(6540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);