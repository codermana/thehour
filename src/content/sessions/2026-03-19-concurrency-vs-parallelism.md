---
title: "Concurrency vs Parallelism in Go: From Sequential to Concurrent"
description: "An interactive Go session where we start from a sequential program, make it concurrent with goroutines and channels, and build an intuition for concurrency, parallelism, and the Go scheduler."
startTime: "2026-03-19T20:00:00+05:30"
joinLink: https://meet.jit.si/TheCoderManaHour
topics: ["golang", "concurrency", "parallelism", "goroutines", "scheduler"]
resources:
  code: https://github.com/codermana/Go-Training/tree/master/examples/11-B-concurrency
---

Concurrency and parallelism are related, but they are not the same thing. In this interactive session, we will use Go to make that distinction concrete by starting with a sequential program and evolving it into a concurrent one step by step.

The live walkthrough will use these two examples from the training repo:

* Sequential starting point: [sequential.go](https://github.com/codermana/Go-Training/blob/master/examples/11-B-concurrency/sequential.go)
* Concurrent version: [concurrency.go](https://github.com/codermana/Go-Training/blob/master/examples/11-B-concurrency/concurrency.go)

Along the way, we will unpack what goroutines actually give us, what coordination problems they introduce, and how the Go scheduler helps multiplex work efficiently.

## Session Outline

### 1. Concurrency vs Parallelism

* Define concurrency and parallelism clearly before touching code
* Explain why the terms are related but not interchangeable
* Build the intuition for why concurrent structure does not automatically imply simultaneous execution

### 2. Start With the Sequential Program

* Read the sequential version together and execute it
* Identify where the work is serialized and why that makes the control flow easy to follow
* Use this version as the baseline for every change we make afterward

### 3. Introduce the `go` Keyword

* Launch work with goroutines using the `go` keyword
* Use `time.Sleep` deliberately to halt execution and make scheduling effects visible
* Discuss what changes once the program can continue while other work is still in flight

### 4. Observe Runtime Behavior With `htop`

* Use `htop` during the session to observe how the program runs
* Give a brief explanation of what `htop` is useful for and what we are looking at
* Connect what we see on the machine to the ideas of concurrency, threads, and scheduling

### 5. Coordinate Completion With `sync.WaitGroup`

* Show why launching goroutines is not enough on its own
* Use `sync.WaitGroup` to wait for all work to complete cleanly
* Contrast fire-and-forget goroutines with coordinated concurrent execution

### 6. Visualize Execution With a Hand-Drawn Gantt Chart

* Sketch the sequential timeline
* Sketch the concurrent timeline
* Use the diagram to explain overlap, waiting, and completion order

### 7. Understand the Go Scheduler

* Introduce the purpose of the Go scheduler
* Explain the core scheduler ideas at a high level, including how goroutines are multiplexed
* Highlight the practical features that make goroutines lightweight and useful in real applications

### 8. Compare Go With Other Languages

* Summarize how Go's model differs from Python, Java, and JavaScript
* Discuss how each ecosystem approaches concurrency and parallelism differently
* End with a practical mental model for when Go's approach is especially effective

## What You'll Take Away

* A practical distinction between concurrency and parallelism
* A concrete example of transforming a sequential Go program into a concurrent one
* A clearer understanding of goroutines, `sync.WaitGroup`, runtime observation with `htop`, and the basics of the Go scheduler
* A comparative view of how Go's model differs from Python, Java, and JavaScript
