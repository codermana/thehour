---
slug: "distributed-transactions-without-2pc"
title: "Distributed Transactions Without 2PC: Saga, Transactional Outbox, and CQRS"
description: "A practical session on why two-phase commit is often a poor fit for modern distributed systems, and how patterns like Saga, Transactional Outbox, and CQRS help services coordinate safely. Familiarity with microservices and basic database transactions is assumed."
startTime: "2026-06-04T19:00:00+05:30"
joinLink: https://meet.jit.si/TheCoderManaHour
topics: ["distributed-systems", "microservices", "saga", "cqrs", "transactional-outbox"]
resources:
  code: https://github.com/codermana/distributed-design-patterns-training/tree/master/examples
---

Coordinating changes across services is one of the hardest parts of distributed systems. Traditional distributed transactions and two-phase commit promise consistency, but they also introduce coupling, blocking, and operational complexity that many modern systems try to avoid.

In this session, we will look at practical alternatives that show up far more often in real architectures: Saga, Transactional Outbox, and CQRS. The goal is not just to define the patterns, but to understand when you would choose them, what tradeoffs they introduce, and how they work together. CQRS enters as part of the consistency story, not as a detour, so the connection between asynchronous workflows and eventual consistency stays clear throughout.

We will use examples from the distributed design patterns training repo, including:

* [2PC](https://github.com/codermana/distributed-design-patterns-training/blob/master/examples/03-data-management-single/03_2pc.go)
* [Saga](https://github.com/codermana/distributed-design-patterns-training/blob/master/examples/03-data-management-single/04_saga.go)
* [CQRS](https://github.com/codermana/distributed-design-patterns-training/blob/master/examples/04-data-management-multiple/02_cqrs.go)
* [Transactional Outbox](https://github.com/codermana/distributed-design-patterns-training/blob/master/examples/04-data-management-multiple/03_transactional_outbox.go)

## Session Outline

### 1. Why Distributed Transactions Are Hard

* Why local database transactions feel simple
* What breaks once a workflow spans multiple services
* Why failure, retries, and partial completion change the design space

### 2. The Promise and Pain of 2PC

* What two-phase commit tries to solve
* Why it looks attractive on paper
* Where it falls short in modern microservice-style systems

### 3. Saga as a Coordination Pattern

* Breaking a larger workflow into smaller local transactions
* Using compensating actions instead of global rollback
* Understanding where Saga works well and where it becomes tricky: failed compensations, retry storms, and long-running workflows that fail midway

### 4. Transactional Outbox

* Why updating the database and publishing an event atomically is hard
* How the outbox pattern closes that gap
* What delivery guarantees and operational concerns still remain: at-least-once delivery, duplicate events, relay failures, and idempotent consumers

### 5. Putting the Patterns Together

* A brief CQRS setup: separating write models from read models in asynchronous systems
* A concrete order placement flow spanning inventory, payment, and notification services
* How Saga, Outbox, and CQRS fit together in one end-to-end workflow
* How read/write separation helps justify eventual consistency for consumers
* How to reason about retries, idempotency, duplicate messages, and partial failure across the workflow
* Common tradeoffs between simplicity, correctness, and latency

### 6. Discussion and Q&A

* When should you still consider 2PC?
* When are these patterns overkill?
* What does “good enough consistency” actually mean for product systems?

## What You'll Take Away

* A practical understanding of why 2PC is often avoided in distributed applications
* A decision framework for choosing between Saga, Transactional Outbox, and CQRS based on consistency needs and failure tolerance
* Better intuition for designing workflows that remain correct under retries, duplicate delivery, and partial failure
