---
sidebar_position: 1
---
# Deploy on Kubernetes
This document describes how to set up a demo case of Gravity on k8s. We will deploy two databases, representing Source and Target respectively. Whenever the Source is updated, it will replicate to the Target database asynchronously via Gravity.

## Components Version
* MySQL: ```mysql:8.0.33```
* MSSQL: ```mcr.microsoft.com/mssql/server:2019-latest```
* Adapter: ```brobridgehub/gravity-adapter-mssql```
* Dispatcher (Include gravity-cli): ```brobridgehub/gravity-dispatcher:v0.0.4```
* Atomic: ```brobridgehub/atomic-labdemo:v0.0.5-20230413-01```
* JetSteam: ```nats:2.9.15``` 

## Get assets
Download the configuration files and deployment files required for this objective via the following link.
``` shell
git clone https://github.com/BrobridgeOrg/gravity-k8s.git
cd gravity-k8s
```
## Deploy Source/Tartget Database
Next, we will deploy the Source and Target databases. For the purpose of demonstration, we will use StatefulSet to deploy the databases. Please note that deploying databases in a production environment requires consideration of various additional factors. This document does not cover the details of deploying databases in a production environment.

### Source
In the Source Database, we will deploy some sample schemas and enable the Change Data Capture (CDC) feature. An Init Container will fetch assets from a git repository to deploy these schemas.

``` shell
kubectl apply -f k8s/source.yaml

service/source-mssql created
statefulset.apps/source-mssql created
```

Demo schema
```sql
CREATE TABLE Accounts (
    id INT, 
    name NVARCHAR(50), 
    phone NVARCHAR(16)
);
```

### Verify Source Database
``` shell
kubectl logs pod/source-mssql-0

Defaulted container "source-mssql" out of: source-mssql, clear-assets (init), clone-assets (init)
Waiting for MSSQL to be available ⏳
/opt/mssql/bin/sqlservr: Invalid mapping of address 0x40047f3000 in reserved address space below 0x400000000000. Possible causes:
1) the process (itself, or via a wrapper) starts-up its own running environment sets the stack size limit to unlimited via syscall setrlimit(2);
2) the process (itself, or via a wrapper) adjusts its own execution domain and flag the system its legacy personality via syscall personality(2);
3) sysadmin deliberately sets the system to run on legacy VA layout mode by adjusting a sysctl knob vm.legacy_va_layout.
```

``` shell
kubectl get po
NAME             READY   STATUS    RESTARTS   AGE
source-mssql-0   1/1     Running   0          14s
```

### Target
``` shell
kubectl apply -f k8s/target.yaml

service/target-mysql created
statefulset.apps/target-mysql created
```
### Verify Target Database
``` shell
kubectl logs pod/target-mysql-0
......
Waiting for initdb finish..6
2023-06-26T03:25:41.253109Z 0 [Warning] [MY-011068] [Server] The syntax '--skip-host-cache' is deprecated and will be removed in a future release. Please use SET GLOBAL host_cache_size=0 instead.
2023-06-26T03:25:41.254020Z 0 [System] [MY-010116] [Server] /usr/sbin/mysqld (mysqld 8.0.33) starting as process 9
2023-06-26T03:25:41.257026Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
2023-06-26T03:25:41.296837Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
2023-06-26T03:25:41.419987Z 0 [Warning] [MY-010068] [Server] CA certificate ca.pem is self signed.
2023-06-26T03:25:41.420007Z 0 [System] [MY-013602] [Server] Channel mysql_main configured to support TLS. Encrypted connections are now supported for this channel.
2023-06-26T03:25:41.420746Z 0 [Warning] [MY-011810] [Server] Insecure configuration for --pid-file: Location '/var/run/mysqld' in the path is accessible to all OS users. Consider choosing a different directory.
2023-06-26T03:25:41.427362Z 0 [System] [MY-011323] [Server] X Plugin ready for connections. Bind-address: '::' port: 33060, socket: /var/run/mysqld/mysqlx.sock
2023-06-26T03:25:41.427380Z 0 [System] [MY-010931] [Server] /usr/sbin/mysqld: ready for connections. Version: '8.0.33'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server - GPL.
E2ETest DB is ready
## All scripts have been executed. Waiting for MySQL(pid 9) to terminate.
```

```
kubectl get sts
NAME           READY   AGE
target-mysql   1/1     3m5s
```


## Deploy NATS/JetStream
``` shell
kubectl apply -f k8s/jetstream.yaml

statefulset.apps/nats-jetstream created
service/nats-jetstream created
```

### Verify JetStream
``` shell
kubectl get sts
NAME             READY   AGE
nats-jetstream   1/1     99s
```

``` shell
kubectl logs pod/nats-jetstream-0
[1] 2023/06/26 03:36:02.570121 [INF] Starting nats-server
[1] 2023/06/26 03:36:02.570147 [INF]   Version:  2.9.15
[1] 2023/06/26 03:36:02.570148 [INF]   Git:      [b91fa85]
[1] 2023/06/26 03:36:02.570149 [INF]   Name:     NDZMCFMG444BODH3L75VVV6PLJOODJCDIBBNQ2RFGFNQPZ37XSKWH52H
[1] 2023/06/26 03:36:02.570151 [INF]   Node:     dYa1wrUn
[1] 2023/06/26 03:36:02.570152 [INF]   ID:       NDZMCFMG444BODH3L75VVV6PLJOODJCDIBBNQ2RFGFNQPZ37XSKWH52H
[1] 2023/06/26 03:36:02.570938 [INF] Starting http monitor on 0.0.0.0:8222
[1] 2023/06/26 03:36:02.570965 [INF] Starting JetStream
[1] 2023/06/26 03:36:02.571050 [INF]     _ ___ _____ ___ _____ ___ ___   _   __  __
[1] 2023/06/26 03:36:02.571058 [INF]  _ | | __|_   _/ __|_   _| _ \ __| /_\ |  \/  |
[1] 2023/06/26 03:36:02.571058 [INF] | || | _|  | | \__ \ | | |   / _| / _ \| |\/| |
[1] 2023/06/26 03:36:02.571059 [INF]  \__/|___| |_| |___/ |_| |_|_\___/_/ \_\_|  |_|
[1] 2023/06/26 03:36:02.571060 [INF]
[1] 2023/06/26 03:36:02.571060 [INF]          https://docs.nats.io/jetstream
[1] 2023/06/26 03:36:02.571061 [INF]
[1] 2023/06/26 03:36:02.571061 [INF] ---------------- JETSTREAM ----------------
[1] 2023/06/26 03:36:02.571063 [INF]   Max Memory:      3.85 GB
[1] 2023/06/26 03:36:02.571064 [INF]   Max Storage:     222.32 GB
[1] 2023/06/26 03:36:02.571065 [INF]   Store Directory: "/data/jetstream"
[1] 2023/06/26 03:36:02.571065 [INF] -------------------------------------------
[1] 2023/06/26 03:36:02.571278 [INF] Listening for client connections on 0.0.0.0:32803
[1] 2023/06/26 03:36:02.571660 [INF] Server is ready
```

## Deploy Dispatcher
The Dispatcher needs to be configured to handle its own event formats. We utilize the gravity-cli for this configuration. If operations are required, you can connect to perform these operations.

``` shell
kubectl apply -f k8s/dispatcher.yaml

persistentvolumeclaim/dispatcher-assets-pvc created
statefulset.apps/gravity-dispatcher created
```

### Verify Dispatcher
``` shell
kubectl logs pod/gravity-dispatcher-0

Defaulted container "gravity-dispatcher" out of: gravity-dispatcher, clear-assets (init), clone-assets (init)
Start gravity-dispatcher
No configuration file was loaded
2023-06-27 10:04:04	INFO	Debug level is set to "debug"

2023-06-27 10:04:04	INFO	Connector	Connecting to Gravity Network...	{"domain": "default", "address": "nats-jetstream.default.svc.cluster.local:32803", "pingInterval": 10, "maxPingsOutstanding": 3, "maxReconnects": -1}
2023-06-27 10:04:04	INFO	System	Loading system configuration...
2023-06-27 10:04:04	INFO	System	Initializing secret configurations...
2023-06-27 10:04:04	INFO	System	Initializing auth configurations...
2023-06-27 10:04:04	INFO	System	Initializing Token RPC	{"prefix": "$GVT.default.API.CORE"}
2023-06-27 10:04:04	INFO	System	Registered API	{"path": "$GVT.default.API.CORE.AUTHENTICATE"}
2023-06-27 10:04:04	INFO	System	Initializing Product RPC	{"prefix": "$GVT.default.API.PRODUCT"}
2023-06-27 10:04:04	INFO	System	Registered API	{"path": "$GVT.default.API.PRODUCT.LIST"}
2023-06-27 10:04:04	INFO	System	Registered API	{"path": "$GVT.default.API.PRODUCT.CREATE"}
2023-06-27 10:04:04	INFO	System	Registered API	{"path": "$GVT.default.API.PRODUCT.UPDATE"}
2023-06-27 10:04:04	INFO	System	Registered API	{"path": "$GVT.default.API.PRODUCT.DELETE"}
2023-06-27 10:04:04	INFO	System	Registered API	{"path": "$GVT.default.API.PRODUCT.INFO"}
2023-06-27 10:04:04	INFO	System	Registered API	{"path": "$GVT.default.API.PRODUCT.PURGE"}
2023-06-27 10:04:04	INFO	System	Registered API	{"path": "$GVT.default.API.PRODUCT.PREPARE_SUBSCRIPTION"}
2023-06-27 10:04:04	INFO	System	Initializing Token RPC	{"prefix": "$GVT.default.API.TOKEN"}
2023-06-27 10:04:04	INFO	System	Registered API	{"path": "$GVT.default.API.TOKEN.LIST_AVAILABLE_PERMISSIONS"}
2023-06-27 10:04:04	INFO	System	Registered API	{"path": "$GVT.default.API.TOKEN.LIST"}
2023-06-27 10:04:04	INFO	System	Registered API	{"path": "$GVT.default.API.TOKEN.CREATE"}
2023-06-27 10:04:04	INFO	System	Registered API	{"path": "$GVT.default.API.TOKEN.UPDATE"}
2023-06-27 10:04:04	INFO	System	Registered API	{"path": "$GVT.default.API.TOKEN.DELETE"}
2023-06-27 10:04:04	INFO	System	Registered API	{"path": "$GVT.default.API.TOKEN.INFO"}
2023-06-27 10:04:04	INFO	Dispatcher	Initializing publisher with individual connection...
2023-06-27 10:04:04	INFO	Connector	Connecting to Gravity Network...	{"domain": "default", "address": "nats-jetstream.default.svc.cluster.local:32803", "pingInterval": 10, "maxPingsOutstanding": 3, "maxReconnects": -1}
2023-06-27 10:04:04	INFO	Dispatcher	Initializing config store...
2023-06-27 10:04:06	INFO	System	-> $GVT.default.API.PRODUCT.CREATE
2023-06-27 10:04:06	INFO	Dispatcher	Syncing data product settings	{"name": "accounts"}
2023-06-27 10:04:06	INFO	Dispatcher	Applying product settings	{"name": "accounts", "enabled": true, "ruleCount": 0}
2023-06-27 10:04:06	INFO	Dispatcher	Create product	{"product": "accounts"}
2023-06-27 10:04:06	INFO	Dispatcher	Checking product stream	{"product": "accounts", "stream": "GVT_default_DP_accounts"}
2023-06-27 10:04:06	WARN	Dispatcher	Product stream is not ready	{"product": "accounts", "stream": "GVT_default_DP_accounts"}
2023-06-27 10:04:06	INFO	Dispatcher	Creating a new product stream...	{"product": "accounts", "stream": "GVT_default_DP_accounts", "subject": "$GVT.default.DP.accounts.*.EVENT.>"}
Product "accounts" was created
sh: 28?: bad number
## Product has been created.
2023-06-27 10:04:06	INFO	Dispatcher	Initializing event stream	{"stream": "GVT_default"}
2023-06-27 10:04:06	WARN	Dispatcher	event stream not found	{"stream": "GVT_default"}
2023-06-27 10:04:06	INFO	Dispatcher	Creating stream...	{"stream": "GVT_default", "subject": "$GVT.default.EVENT.*"}
2023-06-27 10:04:06	INFO	Dispatcher	Deactivating product	{"product": "accounts"}
2023-06-27 10:04:06	INFO	Dispatcher	Activating product	{"product": "accounts"}
2023-06-27 10:04:06	INFO	Dispatcher	Start watching for events...
2023-06-27 10:04:06	INFO	Dispatcher	Checking consumer	{"stream": "GVT_default", "consumer": "GVT_default_DP_accounts"}
2023-06-27 10:04:06	INFO	Dispatcher	Creating a new consumer...	{"stream": "GVT_default", "subject": "$GVT.default.EVENT.>"}
2023-06-27 10:04:06	INFO	Dispatcher	Waiting events...	{"subject": "$GVT.default.EVENT.>", "dueable": "GVT_default_DP_accounts"}
2023-06-27 10:04:06	INFO	System	-> $GVT.default.API.PRODUCT.INFO
2023-06-27 10:04:06	INFO	System	-> $GVT.default.API.PRODUCT.UPDATE
2023-06-27 10:04:06	INFO	Dispatcher	Syncing data product settings	{"name": "accounts"}
2023-06-27 10:04:06	INFO	Dispatcher	Applying product settings	{"name": "accounts", "enabled": true, "ruleCount": 1}
2023-06-27 10:04:06	INFO	Dispatcher	Update product	{"product": "accounts"}
2023-06-27 10:04:06	INFO	Dispatcher	Deactivating product	{"product": "accounts"}
## Product ruleset 'accountCreated' has been created.
sh: 28?: bad number
2023-06-27 10:04:06	INFO	Dispatcher	Registered event	{"subject": "$GVT.default.EVENT.accountCreated"}
2023-06-27 10:04:06	INFO	Dispatcher	Activating product	{"product": "accounts"}
2023-06-27 10:04:06	INFO	Dispatcher	Start watching for events...
2023-06-27 10:04:06	INFO	Dispatcher	Checking consumer	{"stream": "GVT_default", "consumer": "GVT_default_DP_accounts"}
2023-06-27 10:04:06	INFO	Dispatcher	Consumer exists already	{"stream": "GVT_default", "consumer": "GVT_default_DP_accounts"}
2023-06-27 10:04:06	INFO	Dispatcher	Waiting events...	{"subject": "$GVT.default.EVENT.>", "dueable": "GVT_default_DP_accounts"}
2023-06-27 10:04:06	INFO	System	-> $GVT.default.API.PRODUCT.INFO
2023-06-27 10:04:06	INFO	System	-> $GVT.default.API.PRODUCT.UPDATE
2023-06-27 10:04:06	INFO	Dispatcher	Syncing data product settings	{"name": "accounts"}
2023-06-27 10:04:06	INFO	Dispatcher	Applying product settings	{"name": "accounts", "enabled": true, "ruleCount": 2}
2023-06-27 10:04:06	INFO	Dispatcher	Update product	{"product": "accounts"}
2023-06-27 10:04:06	INFO	Dispatcher	Deactivating product	{"product": "accounts"}
## Product ruleset 'accountDeleted' has been created.
sh: 28?: bad number
## Product has been created. Waiting for gravity-dispatcher(pid 14) to terminate.
2023-06-27 10:04:06	INFO	Dispatcher	Registered event	{"subject": "$GVT.default.EVENT.accountCreated"}
2023-06-27 10:04:06	INFO	Dispatcher	Registered event	{"subject": "$GVT.default.EVENT.accountDeleted"}
2023-06-27 10:04:06	INFO	Dispatcher	Activating product	{"product": "accounts"}
2023-06-27 10:04:06	INFO	Dispatcher	Start watching for events...
2023-06-27 10:04:06	INFO	Dispatcher	Checking consumer	{"stream": "GVT_default", "consumer": "GVT_default_DP_accounts"}
2023-06-27 10:04:06	INFO	Dispatcher	Consumer exists already	{"stream": "GVT_default", "consumer": "GVT_default_DP_accounts"}
2023-06-27 10:04:06	INFO	Dispatcher	Waiting events...	{"subject": "$GVT.default.EVENT.>", "dueable": "GVT_default_DP_accounts"}
```


## Deploy Adapter
``` shell
kubectl apply -f k8s/adapter.yaml

statefulset.apps/gravity-adapter-mssql created
persistentvolumeclaim/mssql-adapter-data-claim created
```

### Verify Adapter
``` shell
kubectl get pod
NAME                      READY   STATUS    RESTARTS   AGE
gravity-adapter-mssql-0   1/1     Running   0          15s
```

``` shell
kubectl logs sts/gravity-adapter-mssql

Defaulted container "gravity-adapter-mssql" out of: gravity-adapter-mssql, clear-assets (init), clone-assets (init)
Debug level is set to "debug"
time="2023-06-28T02:28:40Z" level=info msg="Starting application" max_procs=8
time="2023-06-28T02:28:40Z" level=info msg="Connecting to gravity..." address="nats-jetstream.default.svc.cluster.local:32803" maxPingsOutstanding=3 maxReconnects=-1 pingInterval=10s
time="2023-06-28T02:28:40Z" level=info msg="Initializing store" path=/statestore
time="2023-06-28T02:28:40Z" level=info msg="Initializing source" host=source-mssql.default.svc.cluster.local name=mssql_example port=1433
time="2023-06-28T02:28:40Z" level=info msg="Initializing store for adapter" store=adapter-mssql_example
time="2023-06-28T02:28:40Z" level=info msg="Connecting to database" dbname=TestDB host=source-mssql.default.svc.cluster.local param= port=1433 username=SA
time="2023-06-28T02:28:55Z" level=error msg="unable to open tcp connection with host 'source-mssql.default.svc.cluster.local:1433': dial tcp 10.100.132.253:1433: i/o timeout"
time="2023-06-28T02:28:55Z" level=info msg="Preparing to watch tables" tables="[dbo.Accounts]"
time="2023-06-28T02:28:55Z" level=info msg="Running ..."
time="2023-06-28T02:28:55Z" level=info msg="Received LSN" LSN= Table=dbo.Accounts
time="2023-06-28T02:28:55Z" level=info msg="Initializing workers ..." client_name=gravity_adapter_mssql-gravity-adapter-mssql-0-mssql_example source=mssql_example
time="2023-06-28T02:28:55Z" level=info msg="Start watch event."
```

## Deploy Atomic

``` shell
kubectl apply -f k8s/atomic.yaml

service/atomic created
statefulset.apps/atomic created
```

### Verify Atomic
``` shell
kubectl logs pod/atomic-0

Defaulted container "atomic" out of: atomic, clear-assets (init), clone-assets (init)

> node-red@1.3.5 start
> node packages/node_modules/node-red/red.js --userDir /assets/assets/atomic-flow /assets/assets/atomic-flow/flows.json

(node:22) [DEP0128] DeprecationWarning: Invalid 'main' field in '/atomic/packages/node_modules/@node-red/editor-client/package.json' of './lib/index.js'. Please either fix that or report it to the module author
(Use `node --trace-deprecation ...` to show where the warning was created)
28 Jun 02:39:33 - [info]

Welcome to Node-RED
===================

28 Jun 02:39:33 - [info] Node-RED version: v1.3.5
28 Jun 02:39:33 - [info] Node.js  version: v16.18.0
28 Jun 02:39:33 - [info] Linux 6.3.9-orbstack-00173-g5c15eb5460a9 x64 LE
28 Jun 02:39:35 - [info] Loading palette nodes
28 Jun 02:39:37 - [info] Settings file  : /assets/assets/atomic-flow/settings.js
28 Jun 02:39:37 - [info] Context store  : 'default' [module=memory]
28 Jun 02:39:37 - [info] User directory : /assets/assets/atomic-flow
28 Jun 02:39:37 - [warn] Projects disabled : editorTheme.projects.enabled=false
28 Jun 02:39:37 - [info] Flows file     : /assets/assets/atomic-flow/flows.json
28 Jun 02:39:37 - [info] Creating new flow file
28 Jun 02:39:37 - [warn]

---------------------------------------------------------------------
Your flow credentials file is encrypted using a system-generated key.

If the system-generated key is lost for any reason, your credentials
file will not be recoverable, you will have to delete it and re-enter
your credentials.

You should set your own key using the 'credentialSecret' option in
your settings file. Node-RED will then re-encrypt your credentials
file using your chosen key the next time you deploy a change.
---------------------------------------------------------------------

28 Jun 02:39:37 - [info] Server now running at http://127.0.0.1:1880/
28 Jun 02:39:37 - [info] Starting flows
28 Jun 02:39:37 - [info] Started flows
```

## Result
``` shell
kubectl get sts

NAME                    READY   AGE
atomic                  1/1     3m40s
gravity-adapter-mssql   1/1     14m
gravity-dispatcher      1/1     16h
nats-jetstream          1/1     16h
source-mssql            1/1     59m
target-mysql            1/1     54m
```
