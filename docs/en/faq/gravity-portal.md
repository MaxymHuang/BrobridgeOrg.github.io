# Gravity Portal
### What is Gravity Portal?

Gravity Portal is a software platform 

### What is Gravity and how does it work?

**Gravity **is a platform as a service (PaaS) software that induces efficient data orchestration between data sources and services. It leverages NATs Jetstream and data-mesh infrastructure to lay out dedicated pipelines that replaces traditional ETL (Extract, Transform, Load) while sustaining high availability and lightning fast data processing speeds.

### What is a Data Product?

A **data product** is a packaged data asset designed to deliver value by leveraging the advantages of a **data mesh infrastructure**. In **Gravity**, data products utilize **NATS JetStream** to efficiently read data from various sources, transform and repackage it into the desired format, and then output it accordingly.

### How to create a Data Product?

1. **Go to the Data Product section** and click **Add New**.  
2. Enter the **Name** and **Description**.  
3. Select the **Gravity Cluster** for the data product.  
4. In the **Database** dropdown, choose the database and table to import data from.  
5. Click **Scan Table** to detect and display available columns.  
6. Select the columns to include. Assign a **Partition Key** for each column to serve as a primary key and for data partitioning.  
7. Click **Done** to finalize.  

The data product will be created automatically.

### How do I create a Subscription?

1. **Go to the Subscription section** and click **Add New**.
2. Enter the subscription **Name** and **Description**.
3. Select the desired **Data Product(s)** from the table.
4. Choose a **time interval**:
- **Deprecative**: Specify a start and end date.
- **Permanent**: No end date.
5. **Note**: The smallest supported interval is **30 minutes**.

Save to activate the subscription.

### How do I instantiate a Data Pipeline?

1. **Go to the Data Flow section** and click **Add New**.  
2. Enter the **Data Pipeline Name** and **Description**.  
3. Select the **Gravity Cluster** for deployment.  
4. Choose an existing **subscription** to customize.  
5. Click **Done** to finalize.

### What is Atomic and what does it do?

**Atomic** is a JavaScript based ETL tool tailored to **Gravity** that provides an easy-to-use interface allowing users to drag and pull different modules around to satisfy their business needs.

### How do I connect to my database?

### What is Namespace?







