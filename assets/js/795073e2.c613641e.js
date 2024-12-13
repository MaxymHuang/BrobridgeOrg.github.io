"use strict";(self.webpackChunkgravity_doc=self.webpackChunkgravity_doc||[]).push([[655],{9073:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=e(4848),i=e(8453);const o={},s="Gravity SDK",c={id:"api/gravity-sdk",title:"Gravity SDK",description:"types/product_event",source:"@site/docs/api/gravity-sdk.md",sourceDirName:"api",slug:"/api/gravity-sdk",permalink:"/docs/api/gravity-sdk",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"API guidelines",permalink:"/docs/api/general"},next:{title:"Graviton",permalink:"/docs/api/graviton"}},d={},a=[{value:"types/product_event",id:"typesproduct_event",level:2},{value:"product_event.proto",id:"product_eventproto",level:3},{value:"product_event.go",id:"product_eventgo",level:3},{value:"<code>compton/types/record/record.proto</code>",id:"comptontypesrecordrecordproto",level:4},{value:"product",id:"product",level:2},{value:"product.go",id:"productgo",level:3},{value:"rule.go",id:"rulego",level:3},{value:"core",id:"core",level:2},{value:"adapter",id:"adapter",level:2},{value:"adapter.go",id:"adaptergo",level:3},{value:"subscriber",id:"subscriber",level:2},{value:"subscription.go",id:"subscriptiongo",level:3},{value:"config_store",id:"config_store",level:2},{value:"config_store.go",id:"config_storego",level:3},{value:"token",id:"token",level:2},{value:"token.go",id:"tokengo",level:3}];function l(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"gravity-sdk",children:"Gravity SDK"})}),"\n",(0,r.jsx)(t.h2,{id:"typesproduct_event",children:"types/product_event"}),"\n",(0,r.jsx)(t.h3,{id:"product_eventproto",children:"product_event.proto"}),"\n",(0,r.jsx)(t.p,{children:"\u4e3b\u8981 Gravity \u5c0d\u61c9\u7684\u6838\u5fc3\u4e8b\u4ef6\uff0c\u70ba Protobuf \u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"enum Method {\n  INSERT = 0;\n  UPDATE = 1;\n  DELETE = 2;\n  TRUNCATE = 3;\n}\n\nmessage ProductEvent {\n  string eventName = 1;\n  string table = 2;\n  Method method = 3;\n  repeated string primaryKeys = 4;\n  bytes primaryKey = 5;\n  bytes data = 6;\n}\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"eventName"}),(0,r.jsx)(t.td,{children:"\u4e8b\u4ef6\u540d\u7a31"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"table"}),(0,r.jsx)(t.td,{children:"\u5c0d\u61c9\u8cc7\u6599\u8868"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Method"}),(0,r.jsxs)(t.td,{children:["\u5c0d\u61c9 ",(0,r.jsx)(t.code,{children:"INSERT"})," ",(0,r.jsx)(t.code,{children:"UPDATE"})," ",(0,r.jsx)(t.code,{children:"DELETE"})," ",(0,r.jsx)(t.code,{children:"TRUNCATE"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"primaryKeys"}),(0,r.jsx)(t.td,{children:"\u5c0d\u61c9 Primary Keys (repeated string)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"primaryKey"}),(0,r.jsx)(t.td,{children:"\u5c0d\u61c9 Primary Key (bytes)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"data"}),(0,r.jsx)(t.td,{children:"\u8cc7\u6599 (bytes)\uff0c\u5be6\u969b\u4e0a\u662f compton.Record"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"product_eventgo",children:"product_event.go"}),"\n",(0,r.jsxs)(t.p,{children:["\u63d0\u4f9b Product Event \u76f8\u5c0d\u61c9\u7684 ",(0,r.jsx)(t.code,{children:"Marshal"})," ",(0,r.jsx)(t.code,{children:"Unmarshal"})," \u65b9\u6cd5\uff0c\u9664\u4e86\u539f\u751f\u7684 protobuf \u8f49\u63db\uff0c",(0,r.jsx)(t.strong,{children:"\u8981\u5be6\u969b\u8b80\u53d6\u5167\u5bb9\u9700\u8981"}),(0,r.jsx)(t.code,{children:"ProductEvent.Data"}),"** \u53c3\u8003 ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://github.com/BrobridgeOrg/compton/blob/main/types/record/record.proto",children:(0,r.jsx)(t.strong,{children:"compton records"})})})," \u7684\u5b9a\u7fa9**\u3002"]}),"\n",(0,r.jsx)(t.h4,{id:"comptontypesrecordrecordproto",children:(0,r.jsx)(t.code,{children:"compton/types/record/record.proto"})}),"\n",(0,r.jsxs)(t.p,{children:["\u70ba Key-Value \u7684\u683c\u5f0f\uff0c",(0,r.jsx)(t.code,{children:"google.protobuf.Struct"})," \u70ba JSON Object\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"message Record {\n  google.protobuf.Struct meta = 1;\n  Value payload = 2;\n}\n\nmessage Value {\n  DataType type = 1;\n  bytes value = 2;\n  MapValue map = 3;\n  ArrayValue array = 4;\n  google.protobuf.Timestamp timestamp = 5;\n}\n\nmessage MapValue {\n  repeated Field fields = 1;\n}\n\nmessage ArrayValue {\n  repeated Value elements = 1;\n}\n\nenum DataType {\n  BOOLEAN = 0;\n  BINARY = 1;\n  STRING = 2;\n  UINT64 = 3;\n  INT64 = 4;\n  FLOAT64 = 5;\n  ARRAY = 6;\n  MAP = 7;\n  NULL = 8;\n  TIME = 9;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"product",children:"product"}),"\n",(0,r.jsx)(t.h3,{id:"productgo",children:"product.go"}),"\n",(0,r.jsxs)(t.p,{children:["\u53ef\u4ee5\u91dd\u5c0d ",(0,r.jsx)(t.code,{children:"Product"})," \u505a\u76f8\u95dc\u7684\u7684 CRUD\uff0c\u9084\u6709 ",(0,r.jsx)(t.code,{children:"ProductClient"})," \u7684\u8a3b\u518a\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'type ProductSetting struct {\n\tName            string                 `json:"name"`\n\tDescription     string                 `json:"desc"`\n\tEnabled         bool                   `json:"enabled"`\n\tRules           map[string]*Rule       `json:"rules"`\n\tSchema          map[string]interface{} `json:"schema"`\n\tEnabledSnapshot bool                   `json:"enabledSnapshot"`\n\tSnapshot        *SnapshotSetting       `json:"snapshot"`\n\tStream          string                 `json:"stream"`\n\tCreatedAt       time.Time              `json:"createdAt"`\n\tUpdatedAt       time.Time              `json:"updatedAt"`\n}\n\ntype ProductClient struct {\n\toptions     *Options\n\tclient      *core.Client\n\tconfigStore *config_store.ConfigStore\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"rulego",children:"rule.go"}),"\n",(0,r.jsx)(t.p,{children:"Product \u672c\u8eab\u53ef\u4ee5\u7d81\u5b9a rules\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'type Rule struct {\n\tID            string                 `json:"id"`\n\tName          string                 `json:"name"`\n\tDescription   string                 `json:"desc"`\n\tEvent         string                 `json:"event"`\n\tProduct       string                 `json:"product"`\n\tMethod        string                 `json:"method"`\n\tPrimaryKey    []string               `json:"primaryKey"`\n\tSchemaConfig  map[string]interface{} `json:"schema,omitempty"`\n\tHandlerConfig *HandlerConfig         `json:"handler,omitempty"`\n\tEnabled       bool                   `json:"enabled"`\n\tCreatedAt     time.Time              `json:"createdAt"`\n\tUpdatedAt     time.Time              `json:"updatedAt"`\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"core",children:"core"}),"\n",(0,r.jsx)(t.p,{children:"\u4e3b\u8981\u5b9a\u7fa9 NATS \u7684 Client \u548c Permissions \u76f8\u95dc\u7684\u7ba1\u7406\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'var AvailablePermissions = Permissions{\n\n\t// Administrator\n\t"ADMIN": "Administrator",\n\n\t// Product\n\t"PRODUCT.LIST":          "List available products",\n\t"PRODUCT.CREATE":        "Create product",\n\t"PRODUCT.DELETE":        "Delete specific product",\n\t"PRODUCT.UPDATE":        "Update specific product",\n\t"PRODUCT.PURGE":         "Purge specific product",\n\t"PRODUCT.INFO":          "Get specific product information",\n\t"PRODUCT.SUBSCRIPTION":  "Subscribe to specific product",\n\t"PRODUCT.SNAPSHOT.READ": "Read snapshot of specific product",\n\t"PRODUCT.ACL":           "Update ACL of specific product",\n\n\t// Token\n\t"TOKEN.LIST":   "List available tokens",\n\t"TOKEN.CREATE": "Create token",\n\t"TOKEN.DELETE": "Delete specific token",\n\t"TOKEN.UPDATE": "Update specific token",\n\t"TOKEN.INFO":   "Get specific token information",\n}\n\ntype AuthenticateRequest struct {\n\tToken string `json:"token"`\n}\n\ntype AuthenticateReply struct {\n\tErrorReply\n\n\tDurable     string   `json:"durable"`\n\tPermissions []string `json:"permissions"`\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"adapter",children:"adapter"}),"\n",(0,r.jsx)(t.p,{children:"\u4e3b\u8981\u8ca0\u8cac\u63a5\u5165 Gravity \u7684 Event\uff0c\u63d0\u4f9b\u9023\u7dda\u548c\u767c\u9001\u4e8b\u4ef6\u7b49\u76f8\u95dc\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(t.h3,{id:"adaptergo",children:"adapter.go"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'type AdapterConnector struct {\n\tid      string\n\tclient  *core.Client\n\tjs      nats.JetStreamContext\n\toptions *Options\n}\n\ntype Message struct {\n\tEventName string `json:"event"`\n\tPayload   []byte `json:"payload"`\n}\n\ntype PubAckFuture interface {\n\tOk() <-chan *nats.PubAck\n\tErr() <-chan error\n\tMsg() *nats.Msg\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"subscriber",children:"subscriber"}),"\n",(0,r.jsx)(t.p,{children:"\u8ca0\u8cac\u7ba1\u7406 Subscription \u548c subscriber \u7b49\u76f8\u95dc\u8cc7\u6e90\uff0c\u8b93\u9032\u5165 Gravity \u7684\u4e8b\u4ef6\u53ef\u4ee5\u5f80\u4e0b\u6e38\u767c\u9001\u3002"}),"\n",(0,r.jsx)(t.h3,{id:"subscriptiongo",children:"subscription.go"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'type Subscription struct {\n\tsubscriber          *Subscriber\n\thandler             func(*nats.Msg)\n\tdomain              string\n\tproductName         string\n\tstartSequence       uint64\n\tenabledInitialLoad  bool\n\tpartitions          []int\n\tnativeSubscriptions map[string]*nats.Subscription\n\tsubOpts             []nats.SubOpt\n}\n\nfunc (sub *Subscription) Subscribe() error {\n\n\t// Subscribe to multiple partitions\n\tfor _, p := range sub.partitions {\n\n\t\tvar partition string\n\t\tif p == -1 {\n\t\t\t// All partitions\n\t\t\tpartition = "*"\n\t\t} else {\n\t\t\t// Specific parition\n\t\t\tpartition = fmt.Sprintf("%d", p)\n\t\t}\n\n\t\tsubject := fmt.Sprintf(productEventSubject, sub.domain, sub.productName, partition)\n\n\t\tlog.WithFields(logrus.Fields{\n\t\t\t"subject": subject,\n\t\t}).Info("Subscribing to subject")\n\n\t\terr := sub.subscribe(subject)\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t}\n\n\treturn nil\n}\n\n'})}),"\n",(0,r.jsx)(t.h2,{id:"config_store",children:"config_store"}),"\n",(0,r.jsx)(t.p,{children:"\u5132\u5b58 Config \u7684\u529f\u80fd\uff0c\u4f7f\u7528 JetStream Key-Value API \u5be6\u4f5c\u3002"}),"\n",(0,r.jsx)(t.h3,{id:"config_storego",children:"config_store.go"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'type ConfigOp int32\n\nconst (\n\tConfigCreate ConfigOp = iota\n\tConfigUpdate\n\tConfigDelete\n)\n\nvar configOps = map[ConfigOp]string{\n\tConfigCreate: "Create",\n\tConfigUpdate: "Update",\n\tConfigDelete: "Delete",\n}\n\nfunc (co ConfigOp) String() string {\n\treturn configOps[co]\n}\n\ntype ConfigEntry struct {\n\tOperation ConfigOp\n\tKey       string\n\tValue     []byte\n\tRevision  uint64\n\tCreated   time.Time\n\tDelta     uint64\n}\n\ntype ConfigStore struct {\n\tclient       *core.Client\n\tdomain       string\n\tcatalog      string\n\tttl          time.Duration\n\twatcher      nats.KeyWatcher\n\teventHandler func(*ConfigEntry)\n\tkv           nats.KeyValue\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"token",children:"token"}),"\n",(0,r.jsx)(t.p,{children:"\u8ca0\u8cac Gravity Token \u7ba1\u7406\u76f8\u95dc\u7684\u670d\u52d9\u3002"}),"\n",(0,r.jsx)(t.h3,{id:"tokengo",children:"token.go"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'type TokenSetting struct {\n\tID          string                 `json:"id"`\n\tDescription string                 `json:"desc"`\n\tEnabled     bool                   `json:"enabled"`\n\tPermissions map[string]*Permission `json:"permissions"`\n\tCreatedAt   time.Time              `json:"createdAt"`\n\tUpdatedAt   time.Time              `json:"updatedAt"`\n}\n\ntype TokenClient struct {\n\toptions     *Options\n\tclient      *core.Client\n\tconfigStore *config_store.ConfigStore\n}\n'})})]})}function p(n={}){const{wrapper:t}={...(0,i.R)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>s,x:()=>c});var r=e(6540);const i={},o=r.createContext(i);function s(n){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(o.Provider,{value:t},n.children)}}}]);