# Overview 
## types/product_event

### product_event.proto

主要 Gravity 對應的核心事件，為 Protobuf 格式。

```
enum Method {
  INSERT = 0;
  UPDATE = 1;
  DELETE = 2;
  TRUNCATE = 3;
}

message ProductEvent {
  string eventName = 1;
  string table = 2;
  Method method = 3;
  repeated string primaryKeys = 4;
  bytes primaryKey = 5;
  bytes data = 6;
}
```

|             |                                           |
| ----------- | ----------------------------------------- |
| eventName   | 事件名稱                                  |
| table       | 對應資料表                                |
| Method      | 對應 `INSERT` `UPDATE` `DELETE` `TRUNCATE`|
| primaryKeys | 對應 Primary Keys (repeated string)       |
| primaryKey  | 對應 Primary Key (bytes)                  |
| data        | 資料 (bytes)，實際上是 compton.Record     |

### product_event.go

提供 Product Event 相對應的 `Marshal` `Unmarshal` 方法，除了原生的 protobuf 轉換，**要實際讀取內容需要**`ProductEvent.Data`** 參考 **[**compton records**](https://github.com/BrobridgeOrg/compton/blob/main/types/record/record.proto)** 的定義**。

#### `compton/types/record/record.proto`

為 Key-Value 的格式，`google.protobuf.Struct` 為 JSON Object。

```
message Record {
  google.protobuf.Struct meta = 1;
  Value payload = 2;
}

message Value {
  DataType type = 1;
  bytes value = 2;
  MapValue map = 3;
  ArrayValue array = 4;
  google.protobuf.Timestamp timestamp = 5;
}

message MapValue {
  repeated Field fields = 1;
}

message ArrayValue {
  repeated Value elements = 1;
}

enum DataType {
  BOOLEAN = 0;
  BINARY = 1;
  STRING = 2;
  UINT64 = 3;
  INT64 = 4;
  FLOAT64 = 5;
  ARRAY = 6;
  MAP = 7;
  NULL = 8;
  TIME = 9;
}
```

## product

### product.go

可以針對 `Product` 做相關的的 CRUD，還有 `ProductClient` 的註冊。

```go
type ProductSetting struct {
	Name            string                 `json:"name"`
	Description     string                 `json:"desc"`
	Enabled         bool                   `json:"enabled"`
	Rules           map[string]*Rule       `json:"rules"`
	Schema          map[string]interface{} `json:"schema"`
	EnabledSnapshot bool                   `json:"enabledSnapshot"`
	Snapshot        *SnapshotSetting       `json:"snapshot"`
	Stream          string                 `json:"stream"`
	CreatedAt       time.Time              `json:"createdAt"`
	UpdatedAt       time.Time              `json:"updatedAt"`
}

type ProductClient struct {
	options     *Options
	client      *core.Client
	configStore *config_store.ConfigStore
}
```

### rule.go

Product 本身可以綁定 rules。

```go
type Rule struct {
	ID            string                 `json:"id"`
	Name          string                 `json:"name"`
	Description   string                 `json:"desc"`
	Event         string                 `json:"event"`
	Product       string                 `json:"product"`
	Method        string                 `json:"method"`
	PrimaryKey    []string               `json:"primaryKey"`
	SchemaConfig  map[string]interface{} `json:"schema,omitempty"`
	HandlerConfig *HandlerConfig         `json:"handler,omitempty"`
	Enabled       bool                   `json:"enabled"`
	CreatedAt     time.Time              `json:"createdAt"`
	UpdatedAt     time.Time              `json:"updatedAt"`
}
```

## core

主要定義 NATS 的 Client 和 Permissions 相關的管理。

```go
var AvailablePermissions = Permissions{

	// Administrator
	"ADMIN": "Administrator",

	// Product
	"PRODUCT.LIST":          "List available products",
	"PRODUCT.CREATE":        "Create product",
	"PRODUCT.DELETE":        "Delete specific product",
	"PRODUCT.UPDATE":        "Update specific product",
	"PRODUCT.PURGE":         "Purge specific product",
	"PRODUCT.INFO":          "Get specific product information",
	"PRODUCT.SUBSCRIPTION":  "Subscribe to specific product",
	"PRODUCT.SNAPSHOT.READ": "Read snapshot of specific product",
	"PRODUCT.ACL":           "Update ACL of specific product",

	// Token
	"TOKEN.LIST":   "List available tokens",
	"TOKEN.CREATE": "Create token",
	"TOKEN.DELETE": "Delete specific token",
	"TOKEN.UPDATE": "Update specific token",
	"TOKEN.INFO":   "Get specific token information",
}

type AuthenticateRequest struct {
	Token string `json:"token"`
}

type AuthenticateReply struct {
	ErrorReply

	Durable     string   `json:"durable"`
	Permissions []string `json:"permissions"`
}
```

## adapter

主要負責接入 Gravity 的 Event，提供連線和發送事件等相關功能。

### adapter.go

```go
type AdapterConnector struct {
	id      string
	client  *core.Client
	js      nats.JetStreamContext
	options *Options
}

type Message struct {
	EventName string `json:"event"`
	Payload   []byte `json:"payload"`
}

type PubAckFuture interface {
	Ok() <-chan *nats.PubAck
	Err() <-chan error
	Msg() *nats.Msg
}
```

## subscriber

負責管理 Subscription 和 subscriber 等相關資源，讓進入 Gravity 的事件可以往下游發送。

### subscription.go

```go
type Subscription struct {
	subscriber          *Subscriber
	handler             func(*nats.Msg)
	domain              string
	productName         string
	startSequence       uint64
	enabledInitialLoad  bool
	partitions          []int
	nativeSubscriptions map[string]*nats.Subscription
	subOpts             []nats.SubOpt
}

func (sub *Subscription) Subscribe() error {

	// Subscribe to multiple partitions
	for _, p := range sub.partitions {

		var partition string
		if p == -1 {
			// All partitions
			partition = "*"
		} else {
			// Specific parition
			partition = fmt.Sprintf("%d", p)
		}

		subject := fmt.Sprintf(productEventSubject, sub.domain, sub.productName, partition)

		log.WithFields(logrus.Fields{
			"subject": subject,
		}).Info("Subscribing to subject")

		err := sub.subscribe(subject)
		if err != nil {
			return err
		}
	}

	return nil
}

```

## config_store

儲存 Config 的功能，使用 JetStream Key-Value API 實作。

### config_store.go

```go
type ConfigOp int32

const (
	ConfigCreate ConfigOp = iota
	ConfigUpdate
	ConfigDelete
)

var configOps = map[ConfigOp]string{
	ConfigCreate: "Create",
	ConfigUpdate: "Update",
	ConfigDelete: "Delete",
}

func (co ConfigOp) String() string {
	return configOps[co]
}

type ConfigEntry struct {
	Operation ConfigOp
	Key       string
	Value     []byte
	Revision  uint64
	Created   time.Time
	Delta     uint64
}

type ConfigStore struct {
	client       *core.Client
	domain       string
	catalog      string
	ttl          time.Duration
	watcher      nats.KeyWatcher
	eventHandler func(*ConfigEntry)
	kv           nats.KeyValue
}
```

## token

負責 Gravity Token 管理相關的服務。

### token.go

```
type TokenSetting struct {
	ID          string                 `json:"id"`
	Description string                 `json:"desc"`
	Enabled     bool                   `json:"enabled"`
	Permissions map[string]*Permission `json:"permissions"`
	CreatedAt   time.Time              `json:"createdAt"`
	UpdatedAt   time.Time              `json:"updatedAt"`
}

type TokenClient struct {
	options     *Options
	client      *core.Client
	configStore *config_store.ConfigStore
}
```

