---
sidebar_position: 1
---

# Product Event
## Protobuf Schema
``` proto
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
## Description
| Fields       | Explanation         | Description                                    |
|--------------|---------------------|------------------------------------------------|
| eventName    | Event Name          | Name of the event                              |
| table        | Corresponding Table | Corresponding database table for the event     |
| Method       | Method              | Corresponding INSERT, UPDATE, DELETE, TRUNCATE |
| primaryKeys  | Primary Keys        | Corresponding primary keys (repeated string)   |
| primaryKey   | Primary Key         | Corresponding primary key (bytes)              |
| data         | Data                | Data (bytes), which is actually compton.Record |
