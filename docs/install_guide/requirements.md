---
sidebar_position: 1
---

# 系統需求 
## 硬體基本需求

#### VM server 規格(包含 Gravity+staging DB 所需資源)

| Number of nodes | CPUs | Memory (GiB) | Storage (GiB)|
|------------|------|--------------|--------------|
|     1      |  12  |     48       |     900      |

* Storage 容量視實際處理量調整, 通常為資料之 2 倍以上。



#### VM Minimum Requirements for Kubernetes Installation

| VM node           | 數量| vCPU | Memory (GiB) | Storage (GiB) |
| ------------------|-----|-------|-------------|---------------|
| Master node + NFS | 1   | 2     | 4           | 600           |
| Worker node       | 1   | 8     | 16          | 100           |
| Windows 跳板機    | 1   | 2     | 4           | 80            |

* Storage 容量視實際處理量調整, 通常為資料之 2 倍以上。





## 環境需求
* 一個 K8S cluster， 可能需要連線至 internet 下載 image
* 一個內部用可 upload 的 Image Repository (若沒有，需提供所有 worker 的 ssh 帳號)
* 一個 Linux 跳板機，可以執行 kubectl 工具來管理 K8S cluster，跳板機可為 :
    * cluster 中某個 master 節點
    * 或者可連入 cluster master 節點的機器

## 取得安裝軟體
Click [here](https://drive.google.com/file/d/1iNOU-T-M3OC59shNI7lkkWZI8Mh-D12x/view?usp=drive_link) to install the official Gravity Image file (影像檔)

Click [here](https://drive.google.com/file/d/1iNOU-T-M3OC59shNI7lkkWZI8Mh-D12x/view?usp=drive_link) to install the depndency files (安裝檔案)

寬橋目前提供的安裝檔案結構 :
```
── 00-namespace.yaml
├── 10-lab-db
│   ├── source-mssql
│   │   ├── 01-create_src_db.sh
│   │   ├── 02-query_src.sh
│   │   ├── 03-drop_src_tb.sh
│   │   ├── DropTable.sql
│   │   ├── mssql.yaml
│   │   └── SrcTable.sql
│   ├── target2-mysql
│   │   ├── 01-create_target2_tb.sh
│   │   ├── 02-query_target2.sh
│   │   ├── 03-drop_target_tb.sh
│   │   ├── delete_target2.sh
│   │   ├── mysql.yaml
│   │   ├── query.sh
│   │   └── Target2Table.sql
│   └── target-mssql
│       ├── 01-create_tgt_db.sh
│       ├── 02-query_tgt.sh
│       ├── 03-drop_tgt_tb.sh
│       ├── DropTable.sql
│       ├── mssql.yaml
│       └── TargetTable.sql
├── 20-lab-gitea
│   ├── gitea.yaml
│   └── token.txt
├── 30-gravity
│   ├── 00-lab-configmap.yaml
│   ├── 01-lab-secret.yaml
│   ├── 10-lab-gravity-nats.yaml
│   ├── 20-lab-gravity-dispatcher.yaml
│   ├── 30-lab-adapter-mssql.yaml
│   ├── 40-lab-atomic.yaml
│   ├── data_product
│   │   ├── create_dp.sh
│   │   ├── delete_dp.sh
│   │   ├── handler.js
│   │   ├── list_token.sh
│   │   ├── schema.json
│   │   └── table-scanner_linux_amd64
│   └── flow
│       └── node_modules
├── atomic_build
│   ├── atomic
│   │   ├── pwd_encrypt
│   │   └── startup.sh
│   ├── Dockerfile.lab-atomic_test
│   └── README.md
├── db-test
│   ├── delete.sh
│   ├── delete_target2.sh
│   ├── error_retry.json
│   ├── flow.json
│   ├── insert.sh
│   ├── logic1.json
│   ├── logic2.json
│   ├── query.sh
│   ├── query_target2.sh
│   ├── source_1.txt
│   ├── source_2.txt
│   ├── update.sh
│   └── update.txt
├── README.md
└── tools
    ├── pwd_encrypt
    └── table-scanner_linux_amd64

```
