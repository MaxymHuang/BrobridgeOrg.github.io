---
sidebar_position: 3
---
# Data Product

## Data Product Attribute
In the context of Gravity, a Data Mesh implementation, the concept of a Data Product takes on the same key attributes:
### A fixed schema
Gravity relies on standardized formats like JSON or Protobuf to provide a consistent structure and organization for the data within a Data Product. This makes it easy for consumers to understand and use the data across different services and applications.
### Rules for processing schema values
Gravity allows users to define rules for manipulating and processing the data based on the values within the schema. These rules enable tailored data transformations or aggregations to meet the specific needs of different consumers, ensuring that the data is fit for purpose and can be used effectively.
### Decoupling from the data source
In Gravity's Data Mesh implementation, Data Products are designed to be consumed directly without the need to access the original data source. This allows consumers to read and use the values from the Data Product without querying the underlying data source, simplifying data access and enhancing performance.

## Data Product Example
In Gravity, registering a Data Product is a straightforward process that involves specifying the corresponding fields and data types in JSON format. Here's an example:
Suppose you want to create a Data Product for storing user information. You would define the fields and data types as follows:
``` javascript
{
	"id": { "type": "uint" },
	"name": { "type": "string" },
	"type": { "type": "string" },
	"phone": { "type": "string" },
	"address": { "type": "string" }
}
```
## Rules Example
In Data Products, it is often necessary to transform the original data for various purposes, such as preserving domain privacy or performing additional precomputations. A simple JavaScript script can be used to easily accomplish this objective. It is important to note that a Data Product can have multiple rules to fulfill custom requirements for different consumers.
Here is an example code snippet to illustrate data transformation in a Data Product:
``` javascript
return {
	id: source.id,
	name: source.name,
	type: source.type,
	phone: source.phone,
	address: source.address
}
```
## Product Event
The Product Event is a mechanism utilized by Gravity to record various operations performed on a Data Product. The detailed format is defined by the following Protobuf:
```protobuf 
syntax = "proto3";

option go_package = "github.com/BrobridgeOrg/gravity-sdk/types/product_event";

package gravity.sdk.types.product_event;

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
In this schema:
* Method is an enumeration that represents the type of operation: INSERT (0), UPDATE (1), DELETE (2), or TRUNCATE (3).
* ProductEvent is a message that represents a single event, with the following fields:
    * eventName (string): the name of the event
    * table (string): the table on which the operation was performed
    * method (Method): the type of operation that was performed
    * primaryKeys (repeated string): a list of primary keys for the data involved in the event
    * primaryKey (bytes): the primary key of the operation, if there is only one
    * data (bytes): the data involved in the operation, encoded as bytes