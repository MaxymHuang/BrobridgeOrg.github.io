---
sidebar_position: 3
---
# Quick Start

## 前提條件

1. 一個 K8S 環境，權限已經設置完成
2. 一個可用的的 Default Storage Class
3. 一個 Harbor 影像倉庫
- 若可用，請上傳所需 image 並修改 yaml 中的 image 路徑
- 若無，請將所需 image 載入至全部 K8S worker 節點
4. 執行主機需要事先安裝 'jq' 軟體

## 套件

### 佈署文件

- 從寬橋內部 Gitlab 拉取：
[https://git.brobridge.com/misc/gravity2-poc](https://git.brobridge.com/misc/gravity2-poc)
- 從 GoogleDrive 下載：
[https://drive.google.com/file/d/1pRMSsUnWgOHBIvftvbhXbNIgR0cvqdze/view?usp=drive_link](https://drive.google.com/file/d/1pRMSsUnWgOHBIvftvbhXbNIgR0cvqdze/view?usp=drive_link)
> 注意：套件中的目錄數結構與檔案名稱請維持一至 (內容可調整)

### 影像檔

- 從 GoogleDrive 下載：
[https://drive.google.com/file/d/1ehm7LJlG0WCL1Lh-7EF0hHFKDExWjPee/view?usp=drive_link](https://drive.google.com/file/d/1ehm7LJlG0WCL1Lh-7EF0hHFKDExWjPee/view?usp=drive_link)
[https://drive.google.com/file/d/1_Ffo4i5xlOYByzPaLF-xt_G9-i_NBiYz/view?usp=drive_link](https://drive.google.com/file/d/1_Ffo4i5xlOYByzPaLF-xt_G9-i_NBiYz/view?usp=drive_link)
> 注意：若 image 名稱有所變更，請同步修改相應的 yaml 設定檔

## 佈署步驟

### 切換工作目錄

首先，將佈署文件包解壓縮後，切換至 scripts目錄：

```
cd gravity2-poc/scripts
```

### 修改 config

在目錄內有一份 config , 可依據需求調整設定內容：

```
namespace="gravity2-poc"
git_repo="${namespace}"
git_branch="main"
#### Don't remove above lines, but values can be changed ###
#
#### Below settings will be overwritten by scripts ###
```


### 執行腳本

接下來執行初始化腳本

```
 ./set_all.sh
```


> 注意：
>
> 1. 腳本需要有 jq 軟體才能完整運行，假如沒有的話，請註解掉 05-prep_flows.sh 這行腳本，然後自行上傳 flow 至 Gitea server 。
>
> 2. 腳本運行後需要設定 Gitea 的管理員帳號與密碼。管理員帳號會設定到 config 文件中，但密碼不會儲存在任何地方，請自行記錄。
>
> 3. 在極端情況下，nats 與 dispatcher 的佈署有可能失敗。若然，請重跑 reset_all.sh 腳本，它會刪除 gitea 與 DB 之外的元件並重新佈署。


整個佈署時間大約需要數分鐘時間，若一切順利，將會看到類似如下的資訊：

![image](/img/qs1.png)

### 驗證佈署結果

依據提示用瀏覽器連線至 Atomic 服務。並確認 Subscriber 連線為綠色的 **connected **狀態：

![image](/img/qs2.png)

確認後，請將右側欄位切換為"debug window“：

![image](/img/qs3.png)

然後切換工作目錄到 `db-test` 目錄，然後執行 `insert.sh` 腳本：

```
cd ../20-poc-db/db-test/
./insert.sh
```

最後確認 Atomic 的 debug window 中有看到完整的三筆記錄：

![image](/img/qs4.png)

至此，整個佈署就算完成了。

