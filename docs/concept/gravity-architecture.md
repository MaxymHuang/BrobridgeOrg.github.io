---
sidebar_position: 2
---

# Gravity Architecture
This page primarily introduces the workflow and architecture of Gravity. The workflow mainly explains the operational logic of Gravity, while the architecture section is dedicated to illustrating how various components of Gravity interact and collaborate with each other.

## Architecture
### Infrastructure Layer
The infrastructure layer of Gravity is primarily composed of NATS JetStream cluster. In addition to serving as the Event Store for Data Products, related metadata, such as rules, tokens, and configurations, are also stored here.

### Platform Layer
The platform layer of Gravity is composed of the following components: CLI, Dispatcher, and Adapter. Each of them interacts with the underlying Infrastructure through the Gravity API.
* CLI: This is Gravity's main command-line tool for managing resources. It facilitates Product Management, Rule Management, and Token Management.
* Dispatcher: This component is specifically designed to collect and handle incoming messages in accordance with product rules.
* Adapter: The Adapter primarily monitors various data sources (you can view different data source adapters on the component page) and writes corresponding Data Product events into Gravity.
### Application Layer
The application layer primarily forms the abstract layer of the Gravity Data Mesh. Here, you can browse the Data Products of each Domain Team, which includes their respective Schemas and Rules, among others. Simultaneously, it also provides visibility into which Data Products are currently being consumed by which Domain Teams, as well as the adapters that are currently in operation.

## Workflow

Once Gravity is fully installed, all domain teams can publish their own Data Products according to their needs. 
Using the above diagram for illustration, Domain Team A and Domain Team B can publish their own Data Products in response to cross-team requirements. Once a Data Product is published, the rest of the domain teams can consume these Data Products based on their specific needs.

For example, as depicted in the diagram, Domain Team C consumes Data Products from both Domain Team A and Domain Team B. At the same time, Domain Team C also has the freedom to utilize the Data Products available on the Gravity platform to publish their own Data Products.

