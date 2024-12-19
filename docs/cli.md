# Gravity CLI

Gravity CLI is an advanced tool designed for experienced users, we recommend you to read the following document thoroughly. 

## *1.* Create New Data Product

### *1.1* Creation

*(Skip the following command if you have CLI installed on the client machine)*
You may access CLI by executing gravity dispatcher pod in Kubernetes:

```
kubectl -n {gravity namespace} exec -it {dispatcher} -- sh
```

Enter your CLI environment, then enter the following command
```
/gravity-cli product create {dp_name} --enabled --schema={schema file location} -s {nats-location:port}
```
This will create a data product instance according to the schema. 

### *1.2* Add rulesets

For data product to start streaming messages, *ruleset* **must** be configured:

| Action     | Description                                             |
| ------     | ------------------------------------------------------  |
| Initialize | Initial Load (load data into gravity upon installation) |
| Create     | New data created                                        |
| Update     | Data Updated                                            |
| Delete     | Data Deleted                                            |

Enter the following command for **each** *action*:

```
/gravity-cli product ruleset add {dp_name} {dp_name}{action} --event={dp_name}{action} --enabled --method=create --handler={handler.js location} --schema={schema location} -s {nats-location:port}
```
> :warning: **Caution:** 
> * *dp_name* **must** be consistent through out the process.
> * *event name* i.e., *dp_name + action* **must** match the event name settings in the adapter .yaml file through out the process. See [Adapter Configurations](/docs/config/adapter-config.md) for more information.

## *2.* Manage Data Products

### *2.1* Inspect

#### *2.1.1* List Available Data Products

To list the available data products in the system, enter the following command

```
/gravity-cli product list -s {nats-location:port}
```
You will get an output similar to this

```
NAME 	DESCRIPTION	STATUS 	RULES	EVENTS	SIZE   	UPDATED                               	CREATED
----------------------------------------------------------------------------------------------------------------------------------------
{dp_name}	       	enabled	4    	10000 	3.206MB	2024-11-15 16:56:14.50993013 +0800 CST	2024-11-15 16:53:59.248494536 +0800 CST
```

#### *2.1.2* Get Data Product Info

Use `info` command to see detailed information of a Data Product
```
/gravity-cli product info {dp_name} -s {nats-location:port}
```

### *2.2* Enable/Disable

Gravity allows for changing the state of data product to halt and start message streaming operations.

To change the state of a data product, use the `update` command
```
/gravity-cli product update {dp_name} --enabled={state} -s {nats-location:port}
```
Set `--enabled=true` to enable the data product, vice versa for disabling data products.

### *2.3* Purge

You may purge all the message in a data product without deleting it by using the `purge` command 
```
/gravity-cli product purge {dp_name} -s {nats-location:port}
```
This will delete the messages **only** in the message queue, the rest of the data location will not be affected.

### *2.4* Delete

You may delete data products completely by using the `delete` command
```
/gravity-cli product delete {dp_name} -s {nats-location:port}
```

## *3.* Tokens

Gravity provides an easy way to manage your data products by using token. 

### *3.1* Create

```
/gravity-cli token create --desc {description} -s {nats-location:port} 
```

By default, the token will be set as disabled upon creation. Add `--enabled=true` flag to enable the token right away.

### *3.2* Grant Permissions

#### *3.2.1* Available Permissions

To see all the avaiable permissions use `list_available_permission` flag

```
/gravity-cli token list_available_permissions -s {nats-location:port}
```

| PERMISSIONS            | DESCRIPTION                       |
|------------------------|---------------------------------  |
|PRODUCT.INFO         	 | Get specific product information  |
|PRODUCT.SUBSCRIPTION    | Subscribe to specific product     |
|PRODUCT.ACL             | Update ACL of specific product    |
|PRODUCT.PURGE        	 | Purge specific product            |
|TOKEN.CREATE         	 | Create token                      |
|TOKEN.LIST           	 | List available tokens             |
|ADMIN                	 | Administrator                     |
|PRODUCT.DELETE       	 | Delete specific product           |
|PRODUCT.LIST         	 | List available products           |
|PRODUCT.SNAPSHOT.READ	 | Read snapshot of specific product |
|TOKEN.DELETE         	 | Delete specific token             |
|TOKEN.INFO           	 | Get specific token information    |
|TOKEN.UPDATE         	 | Update specific token             |
|PRODUCT.CREATE       	 | Create product                    |
|PRODUCT.UPDATE       	 | Update specific product           |

#### *3.2.2* Token IDs

List availabe tokens

```
/graivty-cli token list -s {nats-location:port}
```
Output:
```
TOKEN ID                            	DESCRIPTION	  STATUS 	PERMISSIONS	UPDATED                                	CREATED
--------------------------------------------------------------------------------------------------------------------------------------------------------------
3ad24a03-bc1c-11ef-a00a-8670e767f269	data product  disabled  0          	2024-12-17 10:39:06.48901147 +0800 CST 	2024-12-17 10:11:30.402851195 +0800 CST
```
Copy the token ID e.g., `3ad24a03-bc1c-11ef-a00a-8670e767f269` and paste in the command below

```
/gravity-cli token grant {token-ID} {permission} -s {nats-location:port}
```

#### *3.2.3* Verify

Verify token permission settings
```
/gravity-cli token info {token-ID} -s {nats-location:port}
```
Enable the token if it wasn't enabled at creation
```
/gravity-cli token update {token-ID} --enabled=true -s {nats-location:port}
```

#### *3.2.4* Remove Access

To remove token access, you may either delete or disable the token. Disabling the token allows you to keep the token while removing any users from accessing, while removing the token deletes the token completely.

Simply set `enabled`to `false` to disable token
```
/gravity-cli token update {token-ID} --enabled=false -s {nats-location:port}
```

To remove token, use the `delete` command
```
/gravity-cli token delete {token-ID} -s {nats-location:port}
```

### *3.3* Usage

Now that a token is created, you may implement the token by using the global `-t` flag

**Example:**
```
/gravity-cli product update {dp_name} {actions} -s {nats-location:port} -t {token-ID}
```


## *4.* Advanced Configuration

### *4.1* Subscribe

Gravity allows outside services to subscribe to a bundle of data products.
Preview this feature by using the `sub` command.

```
/gravity-cli product sub {dp_name} -s {nats-location:port}
```
This will output the messages subscribed from a specified data product

#### *4.1.1* Sequence

To specify subscribe start sequence, use the `--seq` tag
```
/gravity-cli product sub {dp_name} -s {nats-location:port} --seq {index}
```
Alternatively, use token to specify as token is capable of memorization

```
/gravity-cli product sub {dp_name} -s {nats-location:port} -t {token-ID}
```

#### *4.1.2* Existing Subscribers

If a subscriber already exists you can specify the name of the subscriber by using the `--name` tag
```
/gravity-cli product sub {dp_name} -s {nats-location:port} -t {token-ID} --name {sub name}
```

#### *4.1.3* Partitions

If partition is desired, simply add `--partitions` flag followed by number of partition 
```
/gravity-cli product sub {dp_name} -s {nats-location:port} -t {token-ID} --partitions {# of partition}
```


### *4.2* Snapshots

Gravity allows for taking snapshots of data products. A Snapshot creates an identical stream of message from a specified data product and stores them into a storage location.

```
/gravity-cli product snapshot {dp_name} -s {nats-location:port}
```

### *4.3* Benchmark

You may use Gravity CLI to benchmark overall NATs JetStream performance by running the `benchmark` command
```
/gravity-cli benchmark -s {nats-location:port}
```

### *4.4* Publish

Gravity CLI allows for publishing an event manually. This is useful for debugging and verification.
```
/gravity-cli pub {event} {payload} -s {nats-location:port}
```
