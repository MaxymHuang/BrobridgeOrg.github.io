---
sidebar_position: 2
---

# Dispatcher

The Dispatcher is a core component of Gravity, responsible for managing the mechanisms of Data Product processing. It is capable of managing structured Schemas, Rules, and the Tokens required for Federated Governance. In more detail, the Dispatcher classifies Raw Data Products, assigns Events to their respective Domains, and utilizes a partitioning mechanism to enhance the scalability of the Data Mesh.

## Build from source
``` shell
git clone https://github.com/BrobridgeOrg/gravity-dispatcher.git
cd gravity-dispatcher
go build
```

## Utility
``` shell
./gravity-dispatcher
```

``` shell
2023-06-15 10:51:09	INFO	Connector	Connecting to Gravity Network...	{"domain": "default", "address": "0.0.0.0:32803", "pingInterval": 10, "maxPingsOutstanding": 3, "maxReconnects": -1}
2023-06-15 10:51:09	INFO	System	Loading system configuration...
2023-06-15 10:51:09	INFO	System	Initializing secret configurations...
2023-06-15 10:51:09	INFO	System	Initializing auth configurations...
2023-06-15 10:51:09	INFO	System	Initializing Token RPC	{"prefix": "$GVT.default.API.CORE"}
2023-06-15 10:51:09	INFO	System	Registered API	{"path": "$GVT.default.API.CORE.AUTHENTICATE"}
2023-06-15 10:51:09	INFO	System	Initializing Product RPC	{"prefix": "$GVT.default.API.PRODUCT"}
2023-06-15 10:51:09	INFO	System	Registered API	{"path": "$GVT.default.API.PRODUCT.LIST"}
2023-06-15 10:51:09	INFO	System	Registered API	{"path": "$GVT.default.API.PRODUCT.CREATE"}
2023-06-15 10:51:09	INFO	System	Registered API	{"path": "$GVT.default.API.PRODUCT.UPDATE"}
2023-06-15 10:51:09	INFO	System	Registered API	{"path": "$GVT.default.API.PRODUCT.DELETE"}
2023-06-15 10:51:09	INFO	System	Registered API	{"path": "$GVT.default.API.PRODUCT.INFO"}
2023-06-15 10:51:09	INFO	System	Registered API	{"path": "$GVT.default.API.PRODUCT.PURGE"}
2023-06-15 10:51:09	INFO	System	Registered API	{"path": "$GVT.default.API.PRODUCT.PREPARE_SUBSCRIPTION"}
2023-06-15 10:51:09	INFO	System	Initializing Token RPC	{"prefix": "$GVT.default.API.TOKEN"}
2023-06-15 10:51:09	INFO	System	Registered API	{"path": "$GVT.default.API.TOKEN.LIST_AVAILABLE_PERMISSIONS"}
2023-06-15 10:51:09	INFO	System	Registered API	{"path": "$GVT.default.API.TOKEN.LIST"}
2023-06-15 10:51:09	INFO	System	Registered API	{"path": "$GVT.default.API.TOKEN.CREATE"}
2023-06-15 10:51:09	INFO	System	Registered API	{"path": "$GVT.default.API.TOKEN.UPDATE"}
2023-06-15 10:51:09	INFO	System	Registered API	{"path": "$GVT.default.API.TOKEN.DELETE"}
2023-06-15 10:51:09	INFO	System	Registered API	{"path": "$GVT.default.API.TOKEN.INFO"}
2023-06-15 10:51:09	INFO	Dispatcher	Initializing publisher with individual connection...
2023-06-15 10:51:09	INFO	Connector	Connecting to Gravity Network...	{"domain": "default", "address": "0.0.0.0:32803", "pingInterval": 10, "maxPingsOutstanding": 3, "maxReconnects": -1}
2023-06-15 10:51:09	INFO	Dispatcher	Initializing config store...
```