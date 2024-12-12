---
sidebar_position: 2
---

# Core Concepts 

## 主要元件

Gravity 產品基本由如下模組組成：

- CDC Adapter:

與來源資料庫對接，捕獲來源端的 CDC (Change Data Capture) 事件，具有斷點續傳能力。不同的資料庫會有不同的 Adapter，並且來源資料庫必須具備 (或模擬) 及開啟 CDC 功能。

- NATS Cluster:

一個輕量化的 MQ (Message Queue) 叢集為 Gravity 提供資料快取 (Data Cache)，NATS JetStream 模組具有 real time streaming 能力。Gravity 的內部 data 與 event 都是存放於 NATS 裡面。

- Dispatcher:

提供 Gravity-CLI 介面管理 Gravity 相關的設定，例如 Data Product 相關的 Schema、Rule Set 及 Access Token 等等。Dispatcher 的命令結果及狀態也是儲存在 NATS cluster 裡面。

**Atomic:**

以 Low-Code 介面提供資料邏輯處理，作為 Data Product 之間的邏輯處理管線。Atomic 同時也負責目標資料庫的落地工作。

** Gitea: **

版控軟件，任何時候，我們都可以把 Atomic 的最新 flow 設計及啟動後安裝的 modules 推送到 Gitea 保存，並且每次 Atomic 啟動時會自動從 Gitea 拉取最新的版本下來運行。
## Data Product

### Data Domain

資料自治領域 (通常代表某一資料系統)，各自有其資料擁有者 (Data Owner)。一個 DD (Data Domain ) 裡面存放有一個或多個資料產品 (DP, Data Product)。在建立資料產品時若不指定領域，則預設 domain 名稱會設定為 default。

### Data Product (DP)

DP 是 Gravity 的基本資料集 (Data Set) 處理單元，所有資料必須在 Gravity 中形成資料產品才能被其他消費者訂閱加工，被加工後的資料也可成為新的 DP 供其他訂閱者使用。
![image](/img/dp1.png)
## 資料處理流程

Gravity 可讓我們非常彈性地構建多樣性的資料管線，以 Data Product 的方式將資料即時供應到不同的資料消費端。 類似生產線的概念，經過不同的管線處理形成一條又一條的資料產品鏈 (Product Chain)，最終組成一個分散式 Data Mesh 資料網格平台。

![image](/img/dp2.png)

## Atomic 資料處理流程

Atomic 主要負責 DP 之間的資料管線搭建及其邏輯處理。Atomic 透過 Subscriber 訂閱上游的 DP 事件，經過邏輯處理後，再透過 DB module 將符合 schema 的處理結果寫入目標資料庫；或是透過 Publisher 同步到下游的 DP。

Atomic 在啟動的時候，會從 Git Server 將所有流程及模組<sup>*</sup>下載 (clone) 到容器上運行，也可以在任何時候將當時的設定推送 (push) 回 Git Server。

![image](/img/dp3.png)
