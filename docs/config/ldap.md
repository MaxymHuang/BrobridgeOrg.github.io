# LDAP configurations for Atomic

 
You may manipulate environment variables to alter LDAP authentication settings

| Environment Variables| Description                                                                                    | Examples                   |
| -------------------- | ---------------------------------------------------------------------------------------------- | -------------------------- |
| LDAP_AUTH_ENABLED    | Enabling/disabling LDAP service                                                                | true                       |
| LDAP_HOSTS           | LDAP Server address                                                                            | ldaps://172.17.0.1         |
| LDAP_BASE            | Starting point (base DN) for LDAP searches                                                     | ou=rd,dc=example,dc=org    |
| LDAP_FILTER_TEMPLATE | Search filter template with placeholders                                                       | uid=\{\{username}\}        |
| LDAP_BIND_DN         | DN for binding (authenticating) to the LDAP server (must have read access)                     | cn=admin,dc=example,dc=org |
| LDAP_BIND_PW         | Password for the bind DB                                                                       | admin                      |
| LDAP_NO_VERIFY_SSL   | Disables SSL certificate verification (use cautiously)                                         | true                       |

### Example YAML file for initial Set-Up

```
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: atomic
    release: ifxtestpk1-ldap
  name: ifxtestpk1-atomic-ldap
  namespace: poc-informix
spec:
  progressDeadlineSeconds: 600
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      app: atomic
      release: poc-atomic-ldap
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: atomic
        release: poc-atomic-ldap
    spec:
      containers:
        - image: ghcr.io/brobridgeorg/atomic:v1.0.0-20241201-ubi
        - imagePullPolicy: IfNotPresent
          env:
            - name: LDAP_AUTH_ENABLED
              value: 'true'
            - name: LDAP_HOSTS
              value: 'ldaps://192.168.8.227'
            - name: LDAP_BASE
              value: 'ou=rd,dc=example,dc=org'
            - name: LDAP_FILTER_TEMPLATE
              value: 'uid={{username}}'
            - name: LDAP_BIND_DN
              value: 'cn=admin,dc=example,dc=org'
            - name: LDAP_BIND_PW
              value: 'admin'
            - name: LDAP_NO_VERIFY_SSL
              value: 'true'

          livenessProbe:
            failureThreshold: 3
            httpGet:
              path: /
              port: 1880
              scheme: HTTP
            initialDelaySeconds: 10
            periodSeconds: 60
            successThreshold: 1
            timeoutSeconds: 10
          name: poc-atomic
          ports:
            - containerPort: 1880
              name: listen-port
              protocol: TCP
          resources: {}
          terminationMessagePath: /dev/termination-log
          terminationMessagePolicy: File
          volumeMounts:
            - mountPath: /data
              name: atomic-store
      dnsPolicy: ClusterFirst
      initContainers:
        - command:
            - sh
            - -c
            - test -d /data/atomic/.git && rm -rf /data/atomic; git clone -b main --single-branch http://demo:b3c0df752043521a6e50832de1c5a7d8871d52a3@192.168.122.50:31818/demo/poc-informix-ldap.git /data/atomic
          image: alpine/git:v2.32.0
          imagePullPolicy: IfNotPresent
          name: init-poc-atomic-git
          resources: {}
          terminationMessagePath: /dev/termination-log
          terminationMessagePolicy: File
          volumeMounts:
            - mountPath: /data
              name: atomic-store
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext:
        fsGroup: 0
        runAsGroup: 0
        runAsUser: 0
      terminationGracePeriodSeconds: 30
      volumes:
        - name: atomic-store
          emptyDir: {}

---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: atomic
    release: poc-atomic-ldap
  name: poc-atomic-atomic-ldap
  namespace: poc-informix
spec:
  ports:
    - name: poc-atomic
      nodePort: 32325
      port: 1880
      protocol: TCP
      targetPort: 1880
  selector:
    app: atomic
    release: poc-atomic-ldap
  type: NodePort
```
