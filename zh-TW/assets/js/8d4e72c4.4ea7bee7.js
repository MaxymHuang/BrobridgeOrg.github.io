"use strict";(self.webpackChunkgravity_doc=self.webpackChunkgravity_doc||[]).push([[212],{4819:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=i(4848),t=i(8453);const r={sidebar_position:3},l="\u5b89\u88dd\u81f3 Kubernetes",c={id:"install_guide/install_k8",title:"\u5b89\u88dd\u81f3 Kubernetes",description:"\u532f\u5165\u5f71\u50cf\u6a94",source:"@site/docs/install_guide/install_k8.md",sourceDirName:"install_guide",slug:"/install_guide/install_k8",permalink:"/zh-TW/docs/install_guide/install_k8",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docSidebar",previous:{title:"\u64cd\u4f5c\u60c5\u5883",permalink:"/zh-TW/docs/install_guide/env"},next:{title:"Gravity \u90e8\u7f72\u6d41\u7a0b",permalink:"/zh-TW/docs/install_guide/deployment"}},d={},a=[{value:"\u532f\u5165\u5f71\u50cf\u6a94",id:"\u532f\u5165\u5f71\u50cf\u6a94",level:3},{value:"\u8a2d\u5b9a Gravity \u74b0\u5883",id:"\u8a2d\u5b9a-gravity-\u74b0\u5883",level:3},{value:"\u5efa\u7acb namespace",id:"\u5efa\u7acb-namespace",level:4},{value:"\u914d\u7f6e Gitea",id:"\u914d\u7f6e-gitea",level:4}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u5b89\u88dd\u81f3-kubernetes",children:"\u5b89\u88dd\u81f3 Kubernetes"})}),"\n",(0,s.jsx)(n.h3,{id:"\u532f\u5165\u5f71\u50cf\u6a94",children:"\u532f\u5165\u5f71\u50cf\u6a94"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u8f09\u4e26\u89e3\u958b\u5b89\u88dd\u5305\u4ee5\u5f8c\uff0c\u5c07\u76ee\u9304\u4e0b\u7684\u5f71\u50cf\u6a94\u8f09\u5165\u81f3\u6240\u6709\u7684 worker \u7bc0\u9ede\u4e2d\uff0c\u4e26\u63a8\u9001\u81f3\u5167\u90e8\u7684 image repository\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c kubernetes \u662f v1.24 \u7248\u672c\u4e4b\u524d\u4e14\u4f7f\u7528 docker \u4f86\u7ba1\u7406 image"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-adf",children:"docker load -i <image_name>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c kubernetes \u662f v1.24 \u7248\u672c\u4e4b\u5f8c\uff0c\u5247\u4e0d\u80fd\u4f7f\u7528 docker load \u547d\u4ee4\u4f86\u4f86\u532f\u5165 image\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u78ba\u8a8d\u7248\u672c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-adf",children:"kubectl get node -o wide\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u82e5\u662f crio, \u8acb\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"sudo podman load <image>"})," \u532f\u5165"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u82e5\u662f containerd, \u8acb\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"ctr -n k8s.io image import <image>"}),"\u532f\u5165"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u8a2d\u5b9a-gravity-\u74b0\u5883",children:"\u8a2d\u5b9a Gravity \u74b0\u5883"}),"\n",(0,s.jsx)(n.h4,{id:"\u5efa\u7acb-namespace",children:"\u5efa\u7acb namespace"}),"\n",(0,s.jsxs)(n.p,{children:["\u5047\u8a2d namespace \u70ba ",(0,s.jsx)(n.code,{children:"bbg-gravity"})," \u4e26\u8a2d\u5b9a\u65bc\u8a72 namespace yaml \u6a94\u6848\u4e2d"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)("font",{color:"red",children:[" \u6ce8\u610f\uff1a\u4ee5\u6240\u6709 ",(0,s.jsx)(n.code,{children:".yaml"})," \u70ba\u6a94\u540d\u7684\u6a94\u6848\u540d\u7a31\u7686\u70ba\u7bc4\u4f8b\u540d\u7a31\uff0c\u9808\u4ee5\u5be6\u969b\u63d0\u4f9b\u4e4b\u6a94\u6848\u540d\u7a31\u70ba\u4e3b "]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f 01-bbg-namespace.yaml\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u914d\u7f6e-gitea",children:"\u914d\u7f6e Gitea"}),"\n",(0,s.jsx)(n.p,{children:"Gitea \u662f\u7528\u65bc\u5f8c\u7e8c Atomic flow \u72c0\u614b\u5132\u5b58\u8207\u7248\u672c\u63a7\u7ba1"}),"\n",(0,s.jsx)(n.p,{children:"\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl apply -f 02-bbg-gitea.yaml\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u78ba\u8a8d pod \u6709\u7121\u555f\u52d5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl -n bbg-gravity get pods\t\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u78ba\u8a8d\u8a72\u670d\u52d9\u6709\u7121\u555f\u52d5\u4e26\u53d6\u5f97 nodePort\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl -n bbg-gravity get svc\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6253\u958b\u700f\u89bd\u5668\uff0c\u4e26\u9023\u7dda\u5230 Gitea \u672c\u6a5f\u670d\u52d9\u7684 URL (\u4f8b\u5982: ",(0,s.jsx)(n.a,{href:"http://192.168.100.154:31300",children:"http://192.168.100.154:31300)"}),"/)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image",src:i(2918).A+"",width:"3308",height:"470"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["NodePort \u8a2d\u5b9a\u4e4b\u5f8c\uff0c\u53ef\u4ee5\u5728\u6bcf\u4e00\u53f0 k8s node \u4e0a\u9762\u9023\u7dda\uff0c\u4e5f\u5c31\u662f\u8aaa\u4ee5\u4e0a\u5716\u7684\u4f8b\u5b50\uff0c\u53ef\u4ee5\u9023\u7dda ",(0,s.jsx)(n.a,{href:"http://192.168.1.61:31300",children:"http://192.168.1.61:31300"})," \u6216\u8005\u662f ",(0,s.jsx)(n.a,{href:"http://192.168.1.61:31300",children:"http://192.168.1.61:31300"})," \u90fd\u6703\u901a\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)("font",{color:"red",children:[" \u82e5\u662f\u7b2c\u4e00\u6b21\u9023\u7dda\u7684\u8a71\uff0c\u9700\u8981\u5b8c\u6210\u5982\u4e0b\u8cc7\u8a0a\u4e26\u5b8c\u6210\u521d\u6b21\u8a2d\u5b9a\uff0c\u4e26\u5c07\u7522\u751f\u7684 token \u8a18\u9304\u5728 ",(0,s.jsx)(n.code,{children:"gitea-token.txt"})," \u6a94\u6848\u4e2d"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},2918:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/install-29ecef39091176cbeec1e1e6540f7009.png"},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var s=i(6540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);