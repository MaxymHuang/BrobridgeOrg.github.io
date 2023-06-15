---
sidebar_position: 4
---

# Adapter
The Adapter component leverages Database CDC (Change Data Capture) technology to read the records of database changes with minimal impact on the original data source's performance and publish them to NATS JetStream. This allows the Dispatcher to read these Raw Events to produce Data Products, or they can be used directly as Raw Data Products by other consumers without processing.

The Adapter provides different implementations for different data sources, allowing developers to freely choose the Adapter they need.