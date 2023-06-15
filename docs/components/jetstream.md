---
sidebar_position: 1
---

# JetStream
NATS JetStream is a powerful, easy-to-operate, and resilient storage and streaming system for NATS messages. Designed to be a distributed streaming platform, it is built right into the core NATS system.


The NATS JetStream system is well-suited for a variety of messaging patterns, including publish-subscribe, request-reply, and point-to-point communication. It's a strong choice for organizations that need a distributed, resilient, and scalable streaming platform.

Key features of NATS JetStream include:

### Persistence
etStream allows the storage of NATS messages in a durable manner, enabling message replay and ensuring data isn't lost during transit.

### At-Least-Once Delivery
NATS JetStream ensures that messages are delivered at least once to all subscribers. If the processing subscriber doesn't acknowledge the receipt of a message, JetStream will attempt to redeliver the message.
Message Replay: JetStream supports replaying messages from the stored streams. This is useful in scenarios where a consumer may need to process past data.

### Horizontal Scalability
JetStream supports scaling out and creating more storage capacity by simply adding more servers.

### Fault Tolerance
JetStream is designed to handle failures and automatically recover.

### Observability
JetStream provides robust observability features, including detailed auditing and tracing of messages.
Security: JetStream integrates seamlessly with NATS' security model, including support for access control and authorization.

