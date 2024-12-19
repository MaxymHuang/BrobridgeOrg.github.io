"use strict";(self.webpackChunkgravity_doc=self.webpackChunkgravity_doc||[]).push([[302],{6534:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=t(4848),i=t(8453);const r={},d="Proprietiery. Atomic Modules",o={id:"config/atomic-config",title:"Proprietiery. Atomic Modules",description:"1. Gravity Subscriber",source:"@site/docs/config/atomic-config.md",sourceDirName:"config",slug:"/config/atomic-config",permalink:"/docs/config/atomic-config",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Dispatcher Configuration",permalink:"/docs/config/dispatcher-config"},next:{title:"LDAP configurations for Atomic",permalink:"/docs/config/ldap"}},c={},a=[{value:"<em>1.</em> Gravity Subscriber",id:"1-gravity-subscriber",level:2},{value:"<em>2.</em> Gravity Publisher",id:"2-gravity-publisher",level:2},{value:"<em>3.</em> Terminologies",id:"3-terminologies",level:2},{value:"<em>3.1</em> Overview",id:"31-overview",level:3},{value:"<em>3.2</em> msg.natsMsgId",id:"nats",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"proprietiery-atomic-modules",children:"Proprietiery. Atomic Modules"})}),"\n",(0,s.jsxs)(n.h2,{id:"1-gravity-subscriber",children:[(0,s.jsx)(n.em,{children:"1."})," Gravity Subscriber"]}),"\n",(0,s.jsx)(n.p,{children:"The following is an example payload recieved from gravity-subscriber once connected."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n   "payload":{\n      "seq":1,\n      "eventName":"accountInitialized",\n      "table":"accounts",\n      "primaryKeys":[\n         "REGNO"\n      ],\n      "primaryKey":[\n         50,\n         48,\n         50,\n         51,\n         48,\n         54,\n         51,\n         48,\n         48,\n         48,\n         48,\n         48,\n         48\n      ],\n      "time":"2024-02-20T10:09:07.906Z",\n      "timeNano":488,\n      "record":{\n         "URGENTMK":"",\n         "RTIME":"093423",\n         "EDEPT":"13F0",\n         "PFTYPE":"Y",\n         "ERRMARK":"2",\n         "GRAPHNO":"",\n         "ABSTRACT":"",\n         "ODATE":"20230620",\n         "ODRSHNO":"",\n         "DRNO":"1296",\n         "TMOUTMK":"",\n         "ORIGI":"O",\n         "ITEM":"N73-007",\n         "EDATE":"20230630",\n         "CONTENT":"",\n         "REGNO":"2023063000000",\n         "ODRNO":"",\n         "CHARTNO":"229OOOO     ",\n         "ETIME":"073513",\n         "REPORT":"\u59d3\u3000\u3000\u540d\uff1a\u80e1\u25cb\u25cb  ...",\n         "DT":"2024-02-20T01:56:16.825Z",\n         "AMEND":0,\n         "TYPE":"0 ",\n         "OTIME":"150100",\n         "DXCODE2":"",\n         "RDATE":"20230703",\n         "CASENO":"23l06120OOOOO"\n      }\n   },\n   "natsMsgId":"1",\n   "_msgid":"99350de1.41ee2"\n}\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"2-gravity-publisher",children:[(0,s.jsx)(n.em,{children:"2."})," Gravity Publisher"]}),"\n",(0,s.jsx)(n.p,{children:"The following is an example payload queued by gravity-publisher ready to be published"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n   "payload":{\n      "URGENTMK":"",\n      "RTIME":"093423",\n      "EDEPT":"13F0",\n      "PFTYPE":"Y",\n      "ERRMARK":"2",\n      "GRAPHNO":"",\n      "ABSTRACT":"",\n      "ODATE":"20230620",\n      "ODRSHNO":"",\n      "DRNO":"1296",\n      "TMOUTMK":"",\n      "ORIGI":"O",\n      "ITEM":"N73-007",\n      "EDATE":"20230630",\n      "CONTENT":"",\n      "REGNO":"2023063000000",\n      "ODRNO":"",\n      "CHARTNO":"229OOOO     ",\n      "ETIME":"073513",\n      "REPORT":"\u59d3\u3000\u3000\u540d\uff1a\u80e1\u25cb\u25cb...",\n      "DT":"2024-02-20T01:56:16.825Z",\n      "AMEND":0,\n      "TYPE":"0 ",\n      "OTIME":"150100",\n      "DXCODE2":"",\n      "RDATE":"20230703",\n      "CASENO":"23l06120OOOOO"\n   },\n   "natsMsgId":"1fortest6",\n   "_msgid":"6019f9e4.208528",\n   "eventName":"userCreated"\n}\n\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"3-terminologies",children:[(0,s.jsx)(n.em,{children:"3."})," Terminologies"]}),"\n",(0,s.jsxs)(n.h3,{id:"31-overview",children:[(0,s.jsx)(n.em,{children:"3.1"})," Overview"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Item"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"msg.natsMsgId"}),(0,s.jsxs)(n.td,{children:["See ",(0,s.jsx)(n.a,{href:"#nats",children:"the following section"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"msg.payload.seq"}),(0,s.jsx)(n.td,{children:"The sequence number for an event in NATs JetStream"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"msg.payload.eventName"}),(0,s.jsx)(n.td,{children:"Event name of the payload"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"msg.payload.table"}),(0,s.jsx)(n.td,{children:"Data product name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"msg.payload.record"}),(0,s.jsx)(n.td,{children:"Event content"})]})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"nats",children:[(0,s.jsx)(n.em,{children:"3.2"})," msg.natsMsgId"]}),"\n",(0,s.jsxs)(n.p,{children:["msg.natsMsgId is a string of data transformed from msg.payload.seq. As a matter of fact, msg.natsMsgId is actually an event consumer seq in ",(0,s.jsx)(n.em,{children:"NATs JetStream"}),".\nIt's designed to trace the message from ",(0,s.jsx)(n.em,{children:"Gravity Publish Node"})," to ",(0,s.jsx)(n.em,{children:"Gravity Data Product"})," and in complement to redundency check purposes."]}),"\n",(0,s.jsxs)(n.p,{children:["If you would like to test its functionalities, you may edit the ",(0,s.jsx)(n.code,{children:"function node"})," in atomic"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"msg.natsMsgId = msg.natsMsgId + 'fortest001';\n"})}),"\n",(0,s.jsx)(n.p,{children:"or delete if you choose to"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"delete msg.natsMsgId;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var s=t(6540);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);