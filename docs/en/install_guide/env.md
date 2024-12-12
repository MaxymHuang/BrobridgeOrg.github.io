---
sidebar_position: 2
---


# 操作情境



本手冊將使用下方情境說明 Gravity 相關指令與 Atomic 模組的用法。

- 假設來源的資料庫為MSSQL、目的資料庫為MySQL。
![image](/img/env1.png)


- 下圖顯示 Atomic 所包含的概略資料流程 (Atomic flow)。其中將以來源資料庫的 `bdl_id` 欄位判斷進行資料表切割處理，並透過 MySQL 模組寫入目標資料庫。
![image](/img/env2.png)
