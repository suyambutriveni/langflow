"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[7754],{7293:(o,t,e)=>{e.d(t,{A:()=>I});var n=e(6540),s=e(4848);function c(o){const{mdxAdmonitionTitle:t,rest:e}=function(o){const t=n.Children.toArray(o),e=t.find((o=>n.isValidElement(o)&&"mdxAdmonitionTitle"===o.type)),c=t.filter((o=>o!==e)),r=e?.props.children;return{mdxAdmonitionTitle:r,rest:c.length>0?(0,s.jsx)(s.Fragment,{children:c}):null}}(o.children),c=o.title??t;return{...o,...c&&{title:c},children:e}}var r=e(8215),l=e(1312),p=e(7559);const i={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function a(o){let{type:t,className:e,children:n}=o;return(0,s.jsx)("div",{className:(0,r.A)(p.G.common.admonition,p.G.common.admonitionType(t),i.admonition,e),children:n})}function d(o){let{icon:t,title:e}=o;return(0,s.jsxs)("div",{className:i.admonitionHeading,children:[(0,s.jsx)("span",{className:i.admonitionIcon,children:t}),e]})}function y(o){let{children:t}=o;return t?(0,s.jsx)("div",{className:i.admonitionContent,children:t}):null}function u(o){const{type:t,icon:e,title:n,children:c,className:r}=o;return(0,s.jsxs)(a,{type:t,className:r,children:[n||e?(0,s.jsx)(d,{title:n,icon:e}):null,(0,s.jsx)(y,{children:c})]})}function h(o){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...o,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const F={icon:(0,s.jsx)(h,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function m(o){return(0,s.jsx)(u,{...F,...o,className:(0,r.A)("alert alert--secondary",o.className),children:o.children})}function D(o){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...o,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const f={icon:(0,s.jsx)(D,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function C(o){return(0,s.jsx)(u,{...f,...o,className:(0,r.A)("alert alert--success",o.className),children:o.children})}function g(o){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...o,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const k={icon:(0,s.jsx)(g,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function x(o){return(0,s.jsx)(u,{...k,...o,className:(0,r.A)("alert alert--info",o.className),children:o.children})}function A(o){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...o,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const w={icon:(0,s.jsx)(A,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function j(o){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...o,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const v={icon:(0,s.jsx)(j,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const B={icon:(0,s.jsx)(A,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const b={...{note:m,tip:C,info:x,warning:function(o){return(0,s.jsx)(u,{...w,...o,className:(0,r.A)("alert alert--warning",o.className),children:o.children})},danger:function(o){return(0,s.jsx)(u,{...v,...o,className:(0,r.A)("alert alert--danger",o.className),children:o.children})}},...{secondary:o=>(0,s.jsx)(m,{title:"secondary",...o}),important:o=>(0,s.jsx)(x,{title:"important",...o}),success:o=>(0,s.jsx)(C,{title:"success",...o}),caution:function(o){return(0,s.jsx)(u,{...B,...o,className:(0,r.A)("alert alert--warning",o.className),children:o.children})}}};var T=e(6763);function I(o){const t=c(o),e=(n=t.type,b[n]||(T.warn(`No admonition component found for admonition type "${n}". Using Info as fallback.`),b.info));var n;return(0,s.jsx)(e,{...t})}},7533:(o,t,e)=>{e.d(t,{A:()=>l});var n=e(6540),s=e(1122),c=e(6025),r=e(4848);const l=o=>{let{alt:t,sources:e,style:l}=o;const[p,i]=(0,n.useState)(!1),a=o=>{"Escape"===o.key&&i(!1)};(0,n.useEffect)((()=>(p?document.addEventListener("keydown",a):document.removeEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)})),[p]);return(0,r.jsx)("div",{className:"zoomable-image "+(p?"fullscreen":""),onClick:()=>{i(!p)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...l},children:(0,r.jsx)(s.A,{className:"zoomable-image-inner",alt:t,sources:{light:(0,c.Ay)(e.light),dark:(0,c.Ay)(e.dark)}})})}},5284:(o,t,e)=>{e.r(t),e.d(t,{CH:()=>d,assets:()=>a,chCodeConfig:()=>y,contentTitle:()=>p,default:()=>F,frontMatter:()=>l,metadata:()=>i,toc:()=>u});e(6540);var n=e(4848),s=e(8453),c=e(4754),r=(e(7293),e(1122),e(6025),e(7533));const l={},p="Task Component",i={id:"integrations/crewai/task",title:"Task Component",description:"The CrewAITask component represents a task in CrewAI. It allows you to define tasks with detailed descriptions, expected outputs, and the responsible agent, integrating seamlessly into your Langflow workflows.",source:"@site/docs/integrations/crewai/task.md",sourceDirName:"integrations/crewai",slug:"/integrations/crewai/task",permalink:"/integrations/crewai/task",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},a={},d={annotations:c.hk,Code:c.Cy},y={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},u=[{value:"Component Usage",id:"component-usage",level:2},{value:"Component Python code",id:"component-python-code",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function h(o){const t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",ul:"ul",li:"li",h2:"h2",ol:"ol"},(0,s.RP)(),o.components);return d||m("CH",!1),d.Code||m("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n","\n",(0,n.jsx)(t.h1,{id:"task-component",children:"Task Component"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"CrewAITask"})," component represents a task in CrewAI. It allows you to define tasks with detailed descriptions, expected outputs, and the responsible agent, integrating seamlessly into your Langflow workflows."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://docs.crewai.com/how-to/LLM-Connections/",children:"CrewAI Reference"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"CrewAITask"})," component enables you to:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Define the task's description and expected output"}),"\n",(0,n.jsx)(t.li,{children:"Assign an agent responsible for executing the task"}),"\n",(0,n.jsx)(t.li,{children:"Specify tools and resources for task execution"}),"\n",(0,n.jsx)(t.li,{children:"Configure advanced settings such as asynchronous execution"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"component-usage",children:"Component Usage"}),"\n",(0,n.jsxs)(t.p,{children:["To use the ",(0,n.jsx)(t.code,{children:"CrewAITask"})," component in a Langflow flow, follow these steps:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Add the ",(0,n.jsx)(t.code,{children:"CrewAITask"})," component to your flow."]}),"\n",(0,n.jsx)(t.li,{children:"Configure the component by providing the required inputs such as description and expected output."}),"\n",(0,n.jsx)(t.li,{children:"Connect the component to other nodes in your flow as needed."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"component-python-code",children:"Component Python code"}),"\n",(0,n.jsx)(d.Code,{codeConfig:y,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"from",props:{style:{color:"#FF7B72"}}},{content:" langflow.custom ",props:{style:{color:"#C9D1D9"}}},{content:"import",props:{style:{color:"#FF7B72"}}},{content:" Component",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"from",props:{style:{color:"#FF7B72"}}},{content:" langflow.io ",props:{style:{color:"#C9D1D9"}}},{content:"import",props:{style:{color:"#FF7B72"}}},{content:" BoolInput, DictInput, DropdownInput, MessageTextInput, HandleInput",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"from",props:{style:{color:"#FF7B72"}}},{content:" crewai ",props:{style:{color:"#C9D1D9"}}},{content:"import",props:{style:{color:"#FF7B72"}}},{content:" Task, Agent",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"class ",props:{style:{color:"#FF7B72"}}},{content:"CrewAITask",props:{style:{color:"#FFA657"}}},{content:"(",props:{style:{color:"#C9D1D9"}}},{content:"Component",props:{style:{color:"#79C0FF"}}},{content:"):",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    display_name: ",props:{style:{color:"#C9D1D9"}}},{content:"str ",props:{style:{color:"#79C0FF"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"CrewAITask"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    description: ",props:{style:{color:"#C9D1D9"}}},{content:"str ",props:{style:{color:"#79C0FF"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"Each task must have a description, an expected output and an agent responsible for execution."',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    documentation: ",props:{style:{color:"#C9D1D9"}}},{content:"str ",props:{style:{color:"#79C0FF"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"https://docs.crewai.com/how-to/LLM-Connections/"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    icon ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"CrewAI"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    inputs ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" [",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        MessageTextInput(",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            name",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"description"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            display_name",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"Description"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            info",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"Descriptive text detailing task\'s purpose and execution."',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        ),",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        MessageTextInput(",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            name",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"expected_output"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            display_name",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"Expected Output"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            info",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"Clear definition of expected task outcome."',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        ),",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        HandleInput(",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            name",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"tools"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            display_name",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"Tools"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            input_types",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"[",props:{style:{color:"#C9D1D9"}}},{content:'"Tool"',props:{style:{color:"#A5D6FF"}}},{content:"],",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            is_list",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"True",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            info",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"List of tools/resources limited for task execution."',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        ),",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        HandleInput(",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            name",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"agent"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            display_name",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"Agent"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            input_types",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"[",props:{style:{color:"#C9D1D9"}}},{content:'"Agent"',props:{style:{color:"#A5D6FF"}}},{content:"],",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            info",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"Agent responsible for task execution. Represents entity performing task."',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        ),",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        BoolInput(",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            name",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"async_execution"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            display_name",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"Async Execution"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            value",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"False",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            advanced",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"True",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            info",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"Boolean flag indicating asynchronous task execution."',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        ),",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    ]",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    outputs ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" [",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        Output(",props:{style:{color:"#C9D1D9"}}},{content:"display_name",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"Task"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:"name",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"task_output"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:"method",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"build_task"',props:{style:{color:"#A5D6FF"}}},{content:"),",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    ]",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    def ",props:{style:{color:"#FF7B72"}}},{content:"build_task",props:{style:{color:"#D2A8FF"}}},{content:"(self) -> Task:",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        task ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" Task(",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            description",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"self",props:{style:{color:"#79C0FF"}}},{content:".description,",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            expected_output",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"self",props:{style:{color:"#79C0FF"}}},{content:".expected_output,",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            tools",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"self",props:{style:{color:"#79C0FF"}}},{content:".tools ",props:{style:{color:"#C9D1D9"}}},{content:"if ",props:{style:{color:"#FF7B72"}}},{content:"self",props:{style:{color:"#79C0FF"}}},{content:".tools ",props:{style:{color:"#C9D1D9"}}},{content:"else",props:{style:{color:"#FF7B72"}}},{content:" [],",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            async_execution",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"self",props:{style:{color:"#79C0FF"}}},{content:".async_execution,",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            agent",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"self",props:{style:{color:"#79C0FF"}}},{content:".agent",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        )",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        self",props:{style:{color:"#79C0FF"}}},{content:".status ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" task",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        return",props:{style:{color:"#FF7B72"}}},{content:" task",props:{style:{color:"#C9D1D9"}}}]}],lang:"python"},annotations:[]}]}),"\n",(0,n.jsx)(t.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,n.jsx)(t.p,{children:"Here's an example of how you can use the CrewAITask component in a Langflow flow, connecting the CrewAIAgent component to the CrewAITask component, and then passing the outputs to the CrewAICrew component:"}),"\n",(0,n.jsx)(r.A,{alt:"CrewAITask Flow Example",sources:{light:"img/crewai/CrewAITask_flow_example.png",dark:"img/crewai/CrewAITask_flow_example_dark.png"},style:{width:"100%",margin:"20px 0"}}),"\n",(0,n.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,n.jsx)(t.p,{children:"When using the CrewAITask component, consider the following best practices:"}),"\n",(0,n.jsx)(t.p,{children:"Ensure that you have defined the task's description and expected output clearly.\nAssign the appropriate agent for task execution.\nThe CrewAITask component provides a streamlined way to define and manage tasks within your Langflow workflows. By leveraging this component, you can effectively organize and automate task execution, enhancing the efficiency of your Langflow projects. Feel free to explore and experiment with the CrewAITask component to unlock new possibilities in your Langflow projects!"}),"\n",(0,n.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsx)(t.p,{children:"If you encounter any issues while using the CrewAITask component, consider the following:"}),"\n",(0,n.jsx)(t.p,{children:"Double-check that your inputs such as description and expected output are correctly configured.\nVerify that you have installed the necessary dependencies for the component to function properly.\nCheck the CrewAI documentation for any updates or changes that may affect the component's functionality."})]})}const F=function(o={}){const{wrapper:t}=Object.assign({},(0,s.RP)(),o.components);return t?(0,n.jsx)(t,Object.assign({},o,{children:(0,n.jsx)(h,o)})):h(o)};function m(o,t){throw new Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);