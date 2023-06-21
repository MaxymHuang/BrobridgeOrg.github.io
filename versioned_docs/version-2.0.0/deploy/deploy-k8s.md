---
sidebar_position: 1
---
# Deploy on Kubernetes
## Get assets
``` shell
git clone https://github.com/BrobridgeOrg/gravity-k8s.git
cd gravity-k8s
```
## Deploy Source/Tartget Database

### Source
``` shell
kubectl apply -f k8s/source.yaml
```

### Target
``` shell
kubectl apply -f k8s/target.yaml
```

## Deploy NATS/JetStream
``` shell
kubectl apply -f k8s/jetstream.yaml
```

## Deploy Dispatcher
``` shell
kubectl apply -f k8s/dispatcher.yaml
```


## Deploy Adapter
``` shell
kubectl apply -f k8s/adapter.yaml
```

## Deploy Atomic

``` shell
kubectl apply -f k8s/atomic.yaml
```
