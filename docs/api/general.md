# API guidelines

### Overview

| API Family     | API Name                   | API Subject                                          |
| -------------- | -------------------------- | ---------------------------------------------------- |
| Product API    | Create Product             | `$GVT.{Domain}.API.PRODUCT.CREATE`                   |
| Product API    | Delete Product             | `$GVT.{Domain}.API.PRODUCT.DELETE`                   |
| Product API    | Update Product             | `$GVT.{Domain}.API.PRODUCT.UPDATE`                   |
| Product API    | Purge Product              | `$GVT.{Domain}.API.PRODUCT.PURGE`                    |
| Product API    | Get Product                | `$GVT.{Domain}.API.PRODUCT.INFO`                     |
| Product API    | List Products              | `$GVT.{Domain}.API.PRODUCT.LIST`                     |
| Snapshot API   | Init Snapshot              | `$GVT.{Domain}.API.SNAPSHOT.VIEW.CREATE`             |
| Snapshot API   | Delete Snapshot            | `$GVT.{Domain}.API.SNAPSHOT.VIEW.DELETE`             |
| Snapshot API   | Pull Snapshot              | `$GVT.{Domain}.API.SNAPSHOT.VIEW.PULL`               |
| Core API       | Permission                 | `$GVT.{Domain}.API.CORE`                             |
| Adapter API    | Sync Publish Event         | `$GVT.{Domain}.EVENT.{EventName}`                    |
| Adapter API    | Async Publish Event        | `$GVT.{Domain}.EVENT.{EventName}`                    |
| Config API     | Config                     | `KV_GVT_{Domain}_{Catalog}`                          |
| Subscriber API | Subscribe                  | `$GVT.{Domain}.DP.{ProductName}.{Partition}.EVENT.>` |
| Token API      | List Available Permissions | `$GVT.{Domain}.API.TOKEN.LIST_AVAILABLE_PERMISSIONS` |
| Token API      | Create Token               | `$GVT.{Domain}.API.TOKEN.CREATE`                     |
| Token API      | Delete Token               | `$GVT.{Domain}.API.TOKEN.DELETE`                     |
| Token API      | Update Token               | `$GVT.{Domain}.API.TOKEN.UPDATE`                     |
| Token API      | Get Token                  | `$GVT.{Domain}.API.TOKEN.INFO`                       |
| Token API      |  List Tokens               | `$GVT.{Domain}.API.TOKEN.LIST`                       |

### Implementation
