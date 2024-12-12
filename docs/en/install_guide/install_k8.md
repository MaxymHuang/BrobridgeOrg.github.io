---
sidebar_position: 3
---

# 安裝至 Kubernetes

### 匯入影像檔

下載並解開安裝包以後，將目錄下的影像檔載入至所有的 worker 節點中，並推送至內部的 image repository。

如果 kubernetes 是 v1.24 版本之前且使用 docker 來管理 image

```adf 
docker load -i <image_name>
```

如果 kubernetes 是 v1.24 版本之後，則不能使用 docker load 命令來來匯入 image。

使用以下指令確認版本
```adf 
kubectl get node -o wide
```
* 若是 crio, 請使用 `sudo podman load <image>` 匯入

* 若是 containerd, 請使用 `ctr -n k8s.io image import <image>`匯入



### 設定 Gravity 環境

#### 建立 namespace

假設 namespace 為 `bbg-gravity` 並設定於該 namespace yaml 檔案中

> <font color='red'> 注意：以所有 ``.yaml`` 為檔名的檔案名稱皆為範例名稱，須以實際提供之檔案名稱為主 </font>

執行以下指令:

```bash 
kubectl apply -f 01-bbg-namespace.yaml
```

#### 配置 Gitea

Gitea 是用於後續 Atomic flow 狀態儲存與版本控管


執行以下指令：

``` 
kubectl apply -f 02-bbg-gitea.yaml
```

確認 pod 有無啟動：

``` 
kubectl -n bbg-gravity get pods	
```

確認該服務有無啟動並取得 nodePort：

``` 
kubectl -n bbg-gravity get svc
```

打開瀏覽器，並連線到 Gitea 本機服務的 URL (例如: [http://192.168.100.154:31300)](http://192.168.100.154:31300)/)

![image](/img/install.png)

> NodePort 設定之後，可以在每一台 k8s node 上面連線，也就是說以上圖的例子，可以連線 [http://192.168.1.61:31300](http://192.168.1.61:31300) 或者是 [http://192.168.1.61:31300](http://192.168.1.61:31300) 都會通。

> <font color='red'> 若是第一次連線的話，需要完成如下資訊並完成初次設定，並將產生的 token 記錄在 `gitea-token.txt` 檔案中</font>
