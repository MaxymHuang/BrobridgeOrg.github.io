---
sidebar_position: 5
---

# CLI
The CLI (Command Line Interface) is a tool for operating Gravity, enabling the creation of Data Products, Rules, Tokens, and other mechanisms. The CLI calls the Dispatcher's API, with the actual logic processing being handled by the Dispatcher.

## Build from source
``` shell
git clone https://github.com/BrobridgeOrg/gravity-cli.git
cd gravity-cli
go build
```

## Utility
```shell
./gravity-cli
gravity-cli is a command line utility of Gravity.

Usage:
  gravity-cli [command]

Available Commands:
  benchmark   measuring performance
  completion  Generate the autocompletion script for the specified shell
  help        Help about any command
  product     Manage data products
  pub         Publish domain event
  purge       Purge domain event
  token       Manage access tokens

Flags:
  -d, --domain string   Specify data domain (default "default")
  -h, --help            help for gravity-cli
  -s, --host string     Specify server address (default "0.0.0.0:32803")
  -t, --token string    Specify access token

Use "gravity-cli [command] --help" for more information about a command.
```

## Scripts
In the ```scripts``` directory, you can find examples of Schema and Rule. Both are in Javascript format, allowing developers to create metadata scripts for Data Products according to their own needs.

### Schema example
``` JSON
{
	"id": { "type": "uint" },
	"name": { "type": "string" },
	"type": { "type": "string" },
	"phone": { "type": "string" },
	"address": { "type": "string" }
}
```
### Rule example
``` javascript
return {
	id: source.id,
	name: source.name,
	type: source.type,
	phone: source.phone,
	address: source.address
}
```