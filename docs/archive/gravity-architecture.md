---
sidebar_position: 2
---

# Gravity Architecture
This page primarily introduces the workflow and architecture of Gravity. The workflow mainly explains the operational logic of Gravity, while the architecture section is dedicated to illustrating how various components of Gravity interact and collaborate with each other.

## Architecture
### Infrastructure Layer
The infrastructure layer of Gravity is primarily composed of NATS JetStream cluster. It serves as a Event Store for Data Products, and its related metadata, such as rules, tokens, and configurations.

### Platform Layer
The platform layer of Gravity is consist of three components: CLI, Dispatcher, and Adapter. They interact with the underlying Infrastructure through the Gravity API.
* CLI: This is Gravity's main command-line tool for managing resources. It is capable of orchestrating Data Product Management, Rule Management, and Token Management.
* Dispatcher: This component is specifically designed to collect and handle incoming messages in accordance with product rules.
* Adapter: The Adapter primarily monitors various data sources (you can view different data source adapters on the component page) and writes corresponding Data Product events into Gravity.
### Application Layer
The application layer is the foundation of the abstract layer within the Data Mesh. Here you can browse Data Products from each domain, which includes their respective schemas, rules etc. It simultaneously provides visualization on which Data Products are currently being consumed by which Domain Teams, as well as the adapters that are currently in operation.


