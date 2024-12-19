"use strict";(self.webpackChunkgravity_doc=self.webpackChunkgravity_doc||[]).push([[822],{7495:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var s=n(4848),l=n(8453);const t={},r="Quick Start",c={id:"quickstart",title:"Quick Start",description:"1. Prerequisites",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/zh-TW/docs/quickstart",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Core Concepts",permalink:"/zh-TW/docs/core-concepts"},next:{title:"\u7cfb\u7d71\u9700\u6c42",permalink:"/zh-TW/docs/install_guide/requirements"}},d={},o=[{value:"<em>1.</em> Prerequisites",id:"1-prerequisites",level:2},{value:"<em>1.1</em> Example .yaml Files",id:"11-example-yaml-files",level:3},{value:"<em>1.2</em> Images",id:"12-images",level:3},{value:"<em>2.</em> Deployment",id:"2-deployment",level:2},{value:"<em>2.1</em> Change Directory",id:"21-change-directory",level:3},{value:"<em>2.2</em> Edit config",id:"22-edit-config",level:3},{value:"<em>2.3</em> Execute <code>set_all.sh</code>",id:"23-execute-set_allsh",level:3},{value:"<em>2.3.1</em> Configure Gitea",id:"231-configure-gitea",level:4},{value:"<em>2.3.2</em> Troubleshooting",id:"232-troubleshooting",level:4},{value:"<em>2.4</em> Verify",id:"24-verify",level:3},{value:"<em>2.4.1</em> Results",id:"241-results",level:4},{value:"<em>2.4.2</em> Inject Sample Data",id:"242-inject-sample-data",level:4}];function h(e){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"quick-start",children:"Quick Start"})}),"\n",(0,s.jsxs)(i.h2,{id:"1-prerequisites",children:[(0,s.jsx)(i.em,{children:"1."})," Prerequisites"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"A clean Kubernetes environment with correct user privilige settings"}),"\n",(0,s.jsx)(i.li,{children:"Available Default Storage Class"}),"\n",(0,s.jsx)(i.li,{children:"Harbor Registry"}),"\n",(0,s.jsx)(i.li,{children:"If Private registry is not available, download and import the image files into k8s worker node."}),"\n",(0,s.jsx)(i.li,{children:"jq package"}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"11-example-yaml-files",children:[(0,s.jsx)(i.em,{children:"1.1"})," Example .yaml Files"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Download from brobridge internal gitlab\n",(0,s.jsx)(i.a,{href:"https://git.brobridge.com/misc/gravity2-poc",children:"https://git.brobridge.com/misc/gravity2-poc"})]}),"\n",(0,s.jsxs)(i.li,{children:["Download from google drive\n",(0,s.jsx)(i.a,{href:"https://drive.google.com/file/d/1pRMSsUnWgOHBIvftvbhXbNIgR0cvqdze/view?usp=drive_link",children:"https://drive.google.com/file/d/1pRMSsUnWgOHBIvftvbhXbNIgR0cvqdze/view?usp=drive_link"})]}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["\u26a0\ufe0f"," ",(0,s.jsx)(i.strong,{children:"Caution:"})," Keep the file directory name and structure unchanged to ensure smooth deployment."]}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"12-images",children:[(0,s.jsx)(i.em,{children:"1.2"})," Images"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Download from google drive\n",(0,s.jsx)(i.a,{href:"https://drive.google.com/file/d/1ehm7LJlG0WCL1Lh-7EF0hHFKDExWjPee/view?usp=drive_link",children:"https://drive.google.com/file/d/1ehm7LJlG0WCL1Lh-7EF0hHFKDExWjPee/view?usp=drive_link"}),"\n",(0,s.jsx)(i.a,{href:"https://drive.google.com/file/d/1_Ffo4i5xlOYByzPaLF-xt_G9-i_NBiYz/view?usp=drive_link",children:"https://drive.google.com/file/d/1_Ffo4i5xlOYByzPaLF-xt_G9-i_NBiYz/view?usp=drive_link"})]}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["\u26a0\ufe0f"," ",(0,s.jsx)(i.strong,{children:"Caution:"})," make sure image names are consistent with the .yaml file configurations"]}),"\n"]}),"\n",(0,s.jsxs)(i.h2,{id:"2-deployment",children:[(0,s.jsx)(i.em,{children:"2."})," Deployment"]}),"\n",(0,s.jsxs)(i.h3,{id:"21-change-directory",children:[(0,s.jsx)(i.em,{children:"2.1"})," Change Directory"]}),"\n",(0,s.jsxs)(i.p,{children:["Decompress the .zip file and cd into the ",(0,s.jsx)(i.code,{children:"script"})," directory"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"cd gravity2-poc/scripts\n"})}),"\n",(0,s.jsxs)(i.h3,{id:"22-edit-config",children:[(0,s.jsx)(i.em,{children:"2.2"})," Edit config"]}),"\n",(0,s.jsxs)(i.p,{children:["Edit the config file under the ",(0,s.jsx)(i.code,{children:"script"})," directory"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:'namespace="gravity2-poc"\ngit_repo="${namespace}"\ngit_branch="main"\n#### Don\'t remove above lines, but values can be changed ###\n#\n#### Below settings will be overwritten by scripts ###\n'})}),"\n",(0,s.jsxs)(i.h3,{id:"23-execute-set_allsh",children:[(0,s.jsx)(i.em,{children:"2.3"})," Execute ",(0,s.jsx)(i.code,{children:"set_all.sh"})]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:" ./set_all.sh\n"})}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["\ud83d\udcdd"," ",(0,s.jsx)(i.strong,{children:"Note:"})]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"jq"})," package must be installed to run the script, comment out 05-prep_flows.sh and upload flow manually to Gitea server if ",(0,s.jsx)(i.code,{children:"jq"})," package isn't available."]}),"\n"]}),"\n",(0,s.jsxs)(i.h4,{id:"231-configure-gitea",children:[(0,s.jsx)(i.em,{children:"2.3.1"})," Configure Gitea"]}),"\n",(0,s.jsxs)(i.p,{children:["After executing the ",(0,s.jsx)(i.code,{children:"set_all.sh"})," shell script, gitea ",(0,s.jsx)(i.strong,{children:"must"})," be configured. Admin account will be recorded in the config file,"]}),"\n",(0,s.jsxs)(i.h4,{id:"232-troubleshooting",children:[(0,s.jsx)(i.em,{children:"2.3.2"})," Troubleshooting"]}),"\n",(0,s.jsxs)(i.p,{children:["In the rare case of deployment failure, execute ",(0,s.jsx)(i.code,{children:"reset_all.sh"})," to delete and re-deploy all the components (excluding DB and gitea)."]}),"\n",(0,s.jsxs)(i.h3,{id:"24-verify",children:[(0,s.jsx)(i.em,{children:"2.4"})," Verify"]}),"\n",(0,s.jsxs)(i.h4,{id:"241-results",children:[(0,s.jsx)(i.em,{children:"2.4.1"})," Results"]}),"\n",(0,s.jsxs)(i.p,{children:["It would take a few minutes to complete all the deployment jobs.\nYou should see something like this upon completion:\n",(0,s.jsx)(i.img,{alt:"image",src:n(7366).A+"",width:"1266",height:"633"})]}),"\n",(0,s.jsxs)(i.h4,{id:"242-inject-sample-data",children:[(0,s.jsx)(i.em,{children:"2.4.2"})," Inject Sample Data"]}),"\n",(0,s.jsxs)(i.p,{children:["Follow the tips and instructions shown on the graphical interface and connect to Atomic services.\nVerify whether the ",(0,s.jsx)(i.code,{children:"Subscriber"})," module is labeled with ",(0,s.jsx)(i.strong,{children:"connected"})," status."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image",src:n(8573).A+"",width:"553",height:"218"})}),"\n",(0,s.jsx)(i.p,{children:'On the right side, switch to the "Debug Window" labeled with a little bug icon'}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image",src:n(7444).A+"",width:"322",height:"276"})}),"\n",(0,s.jsxs)(i.p,{children:["Return to the db-test directory then execute ",(0,s.jsx)(i.code,{children:"insert.sh"})," shell script."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"cd ../20-poc-db/db-test/\n./insert.sh\n"})}),"\n",(0,s.jsx)(i.p,{children:"this will insert sample data into atomic services."}),"\n",(0,s.jsx)(i.p,{children:"In atomic, check if there are 3 records of messages received."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image",src:n(7355).A+"",width:"291",height:"319"})}),"\n",(0,s.jsx)(i.p,{children:"-- END --"})]})}function a(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7366:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/qs1-0d5e83a4978aadd1cb6054b2cb743661.png"},8573:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/qs2-54c9979a0503dc75b425e29e97ac0b00.png"},7444:(e,i,n)=>{n.d(i,{A:()=>s});const s="data:image/png;base64,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"},7355:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/qs4-a56fc37af8077d99a359b7df2bfb2a0d.png"},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>c});var s=n(6540);const l={},t=s.createContext(l);function r(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);