"use strict";(self.webpackChunkgravity_doc=self.webpackChunkgravity_doc||[]).push([[618],{8688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>o});var i=n(4848),a=n(8453);const c={sidebar_position:2},r="Core Concepts",s={id:"cn_core-concepts",title:"Core Concepts",description:"\u4e3b\u8981\u5143\u4ef6",source:"@site/docs/cn_core-concepts.md",sourceDirName:".",slug:"/cn_core-concepts",permalink:"/zh-TW/docs/cn_core-concepts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2}},d={},o=[{value:"\u4e3b\u8981\u5143\u4ef6",id:"\u4e3b\u8981\u5143\u4ef6",level:2},{value:"Data Product",id:"data-product",level:2},{value:"Data Domain",id:"data-domain",level:3},{value:"Data Product (DP)",id:"data-product-dp",level:3},{value:"\u8cc7\u6599\u8655\u7406\u6d41\u7a0b",id:"\u8cc7\u6599\u8655\u7406\u6d41\u7a0b",level:2},{value:"Atomic \u8cc7\u6599\u8655\u7406\u6d41\u7a0b",id:"atomic-\u8cc7\u6599\u8655\u7406\u6d41\u7a0b",level:2}];function l(e){const t={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"core-concepts",children:"Core Concepts"})}),"\n",(0,i.jsx)(t.h2,{id:"\u4e3b\u8981\u5143\u4ef6",children:"\u4e3b\u8981\u5143\u4ef6"}),"\n",(0,i.jsx)(t.p,{children:"Gravity \u7522\u54c1\u57fa\u672c\u7531\u5982\u4e0b\u6a21\u7d44\u7d44\u6210\uff1a"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"CDC Adapter:"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"\u8207\u4f86\u6e90\u8cc7\u6599\u5eab\u5c0d\u63a5\uff0c\u6355\u7372\u4f86\u6e90\u7aef\u7684 CDC (Change Data Capture) \u4e8b\u4ef6\uff0c\u5177\u6709\u65b7\u9ede\u7e8c\u50b3\u80fd\u529b\u3002\u4e0d\u540c\u7684\u8cc7\u6599\u5eab\u6703\u6709\u4e0d\u540c\u7684 Adapter\uff0c\u4e26\u4e14\u4f86\u6e90\u8cc7\u6599\u5eab\u5fc5\u9808\u5177\u5099 (\u6216\u6a21\u64ec) \u53ca\u958b\u555f CDC \u529f\u80fd\u3002"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"NATS Cluster:"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"\u4e00\u500b\u8f15\u91cf\u5316\u7684 MQ (Message Queue) \u53e2\u96c6\u70ba Gravity \u63d0\u4f9b\u8cc7\u6599\u5feb\u53d6 (Data Cache)\uff0cNATS JetStream \u6a21\u7d44\u5177\u6709 real time streaming \u80fd\u529b\u3002Gravity \u7684\u5167\u90e8 data \u8207 event \u90fd\u662f\u5b58\u653e\u65bc NATS \u88e1\u9762\u3002"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Dispatcher:"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"\u63d0\u4f9b Gravity-CLI \u4ecb\u9762\u7ba1\u7406 Gravity \u76f8\u95dc\u7684\u8a2d\u5b9a\uff0c\u4f8b\u5982 Data Product \u76f8\u95dc\u7684 Schema\u3001Rule Set \u53ca Access Token \u7b49\u7b49\u3002Dispatcher \u7684\u547d\u4ee4\u7d50\u679c\u53ca\u72c0\u614b\u4e5f\u662f\u5132\u5b58\u5728 NATS cluster \u88e1\u9762\u3002"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Atomic:"})}),"\n",(0,i.jsx)(t.p,{children:"\u4ee5 Low-Code \u4ecb\u9762\u63d0\u4f9b\u8cc7\u6599\u908f\u8f2f\u8655\u7406\uff0c\u4f5c\u70ba Data Product \u4e4b\u9593\u7684\u908f\u8f2f\u8655\u7406\u7ba1\u7dda\u3002Atomic \u540c\u6642\u4e5f\u8ca0\u8cac\u76ee\u6a19\u8cc7\u6599\u5eab\u7684\u843d\u5730\u5de5\u4f5c\u3002"}),"\n",(0,i.jsx)(t.p,{children:"** Gitea: **"}),"\n",(0,i.jsx)(t.p,{children:"\u7248\u63a7\u8edf\u4ef6\uff0c\u4efb\u4f55\u6642\u5019\uff0c\u6211\u5011\u90fd\u53ef\u4ee5\u628a Atomic \u7684\u6700\u65b0 flow \u8a2d\u8a08\u53ca\u555f\u52d5\u5f8c\u5b89\u88dd\u7684 modules \u63a8\u9001\u5230 Gitea \u4fdd\u5b58\uff0c\u4e26\u4e14\u6bcf\u6b21 Atomic \u555f\u52d5\u6642\u6703\u81ea\u52d5\u5f9e Gitea \u62c9\u53d6\u6700\u65b0\u7684\u7248\u672c\u4e0b\u4f86\u904b\u884c\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"data-product",children:"Data Product"}),"\n",(0,i.jsx)(t.h3,{id:"data-domain",children:"Data Domain"}),"\n",(0,i.jsx)(t.p,{children:"\u8cc7\u6599\u81ea\u6cbb\u9818\u57df (\u901a\u5e38\u4ee3\u8868\u67d0\u4e00\u8cc7\u6599\u7cfb\u7d71)\uff0c\u5404\u81ea\u6709\u5176\u8cc7\u6599\u64c1\u6709\u8005 (Data Owner)\u3002\u4e00\u500b DD (Data Domain ) \u88e1\u9762\u5b58\u653e\u6709\u4e00\u500b\u6216\u591a\u500b\u8cc7\u6599\u7522\u54c1 (DP, Data Product)\u3002\u5728\u5efa\u7acb\u8cc7\u6599\u7522\u54c1\u6642\u82e5\u4e0d\u6307\u5b9a\u9818\u57df\uff0c\u5247\u9810\u8a2d domain \u540d\u7a31\u6703\u8a2d\u5b9a\u70ba default\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"data-product-dp",children:"Data Product (DP)"}),"\n",(0,i.jsxs)(t.p,{children:["DP \u662f Gravity \u7684\u57fa\u672c\u8cc7\u6599\u96c6 (Data Set) \u8655\u7406\u55ae\u5143\uff0c\u6240\u6709\u8cc7\u6599\u5fc5\u9808\u5728 Gravity \u4e2d\u5f62\u6210\u8cc7\u6599\u7522\u54c1\u624d\u80fd\u88ab\u5176\u4ed6\u6d88\u8cbb\u8005\u8a02\u95b1\u52a0\u5de5\uff0c\u88ab\u52a0\u5de5\u5f8c\u7684\u8cc7\u6599\u4e5f\u53ef\u6210\u70ba\u65b0\u7684 DP \u4f9b\u5176\u4ed6\u8a02\u95b1\u8005\u4f7f\u7528\u3002\n",(0,i.jsx)(t.img,{alt:"image",src:n(3474).A+"",width:"1944",height:"706"})]}),"\n",(0,i.jsx)(t.h2,{id:"\u8cc7\u6599\u8655\u7406\u6d41\u7a0b",children:"\u8cc7\u6599\u8655\u7406\u6d41\u7a0b"}),"\n",(0,i.jsx)(t.p,{children:"Gravity \u53ef\u8b93\u6211\u5011\u975e\u5e38\u5f48\u6027\u5730\u69cb\u5efa\u591a\u6a23\u6027\u7684\u8cc7\u6599\u7ba1\u7dda\uff0c\u4ee5 Data Product \u7684\u65b9\u5f0f\u5c07\u8cc7\u6599\u5373\u6642\u4f9b\u61c9\u5230\u4e0d\u540c\u7684\u8cc7\u6599\u6d88\u8cbb\u7aef\u3002 \u985e\u4f3c\u751f\u7522\u7dda\u7684\u6982\u5ff5\uff0c\u7d93\u904e\u4e0d\u540c\u7684\u7ba1\u7dda\u8655\u7406\u5f62\u6210\u4e00\u689d\u53c8\u4e00\u689d\u7684\u8cc7\u6599\u7522\u54c1\u93c8 (Product Chain)\uff0c\u6700\u7d42\u7d44\u6210\u4e00\u500b\u5206\u6563\u5f0f Data Mesh \u8cc7\u6599\u7db2\u683c\u5e73\u53f0\u3002"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image",src:n(3833).A+"",width:"2732",height:"1302"})}),"\n",(0,i.jsx)(t.h2,{id:"atomic-\u8cc7\u6599\u8655\u7406\u6d41\u7a0b",children:"Atomic \u8cc7\u6599\u8655\u7406\u6d41\u7a0b"}),"\n",(0,i.jsx)(t.p,{children:"Atomic \u4e3b\u8981\u8ca0\u8cac DP \u4e4b\u9593\u7684\u8cc7\u6599\u7ba1\u7dda\u642d\u5efa\u53ca\u5176\u908f\u8f2f\u8655\u7406\u3002Atomic \u900f\u904e Subscriber \u8a02\u95b1\u4e0a\u6e38\u7684 DP \u4e8b\u4ef6\uff0c\u7d93\u904e\u908f\u8f2f\u8655\u7406\u5f8c\uff0c\u518d\u900f\u904e DB module \u5c07\u7b26\u5408 schema \u7684\u8655\u7406\u7d50\u679c\u5beb\u5165\u76ee\u6a19\u8cc7\u6599\u5eab\uff1b\u6216\u662f\u900f\u904e Publisher \u540c\u6b65\u5230\u4e0b\u6e38\u7684 DP\u3002"}),"\n",(0,i.jsxs)(t.p,{children:["Atomic \u5728\u555f\u52d5\u7684\u6642\u5019\uff0c\u6703\u5f9e Git Server \u5c07\u6240\u6709\u6d41\u7a0b\u53ca\u6a21\u7d44",(0,i.jsx)("sup",{children:"*"}),"\u4e0b\u8f09 (clone) \u5230\u5bb9\u5668\u4e0a\u904b\u884c\uff0c\u4e5f\u53ef\u4ee5\u5728\u4efb\u4f55\u6642\u5019\u5c07\u7576\u6642\u7684\u8a2d\u5b9a\u63a8\u9001 (push) \u56de Git Server\u3002"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image",src:n(1728).A+"",width:"2554",height:"1292"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},3474:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/dp1-5853ad41f0861b39ed1e49ea336b2e66.png"},3833:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/dp2-b098cc2dfa1f1b6e8a0e4a2421d67cf2.png"},1728:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/dp3-548765f879d884970c5b0f72154e9999.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(6540);const a={},c=i.createContext(a);function r(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);