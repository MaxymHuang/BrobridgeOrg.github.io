# Core Concepts

## *1.* Primary Components

A **Gravity Cluster** consists of a few following primary components

### *1.1* Dispatcher
Dispatcher acts as a overwatch agent that manages the **entire** Gravity Cluster. 
It receives messages from data sources and *dispatches* messages into defined **data products** (See [data product](#dp)).

![dispatcher](/img/core/dispatcher.jpg)

Dispatcher can also be easily configured and managed through [Gravity-CLI](./cli.md)

### *1.2* Adapter

Adapters are the official connectors for Gravity, it utilizes CDC (Change Data Capture) to read messages from message queues and databases.

Below is a list of data sources that are officially supported by Gravity:



| Sources             | Support          |
|-------------------- | ---------------- |
| MSSQL               |  Enterprise      |
| Informix            |  Enterprise      |
| Oracle v11g         |  Enterprise      |
| MySQL               |  Open Source     |
| Kafka               |  Enterprise      |
| Oracle golden gate  |  Enterprise      |
| MongoDB             |  Enterprise      |
| PostgreSQL          |  Open Source     |


### *1.3* NATs Cluster
Gravity uses [NATs JetStream](https://docs.nats.io/nats-concepts/jetstream) as its primary message queuing system.

Any messages entering Gravity will be stored in the NATs Cluster. Dispatcher will then manage these raw messages and organize them into data products before streaming messages to the target.

### *1.4* Atomic {#atom}
Atomic is an alternative ETL (Extract Transform Load) solution that is highly scalable and user friendly. It features drag-and-drop UI, allowing users to easily achieve their business needs.


## *2.* Data Mesh

A data mesh is a decentralized approach to managing and utilizing data in large organizations. 
It shifts from a centralized data lake or warehouse model to one where domain teams own and manage their data as "data products." 
This architecture treats data as a first-class product and applies product thinking to ensure data quality, discoverability, and usability. 
Key principles of data mesh include domain-oriented ownership, self-serve data infrastructure, federated governance, and treating data as a product. 
This enables scalability, autonomy for teams, and faster decision-making while addressing the challenges of data silos and bottlenecks in traditional centralized models.

### *2.1* Data Domain
A **data domain** refers to a specific, logically grouped area of data within an organization, typically aligned with business functions or processes such as sales, marketing, or finance. 
In the context of modern data architectures, like data mesh, a data domain is managed by domain experts who take ownership of the data and treat it as a product. 
This approach ensures that the data is accurate, reliable, and relevant for its intended users. 
Data domains help break down silos and decentralize data management, fostering greater autonomy and faster insights within an organization.

To put it in context, a **Gravity Cluster** itself can be a data domain as it is scalable and customizable. Nevertheless, Gravity can also be accessed across different data domains at user's will,
which is convenient when data needs to be accessed in-between or cross-domian.

### *2.2* Data Product {#dp}
Gravity's cutting edge technology lies within the concept of **Data Products**

Data Product is a set of data with pre-defined schema configured by users via Gravity Dispatcher. Data Products can be consumed by multiple different consumers, thus the name “Product”.

In this case, DB, API, Services, Atomic act as **consumers** that *consume* data as *products* 

![image](/img/core/dp-image.jpg)

Data Products are special because it not only can service to multiple different locations, whether it's an API or DB or *Atomic* (See [Atomic](#atom)), but also *Re-Service* to the same or different locations, as depicted above.

It exists as an independent data stream, capable of streaming **real-time** data without having to interact with or compromising data sources.



