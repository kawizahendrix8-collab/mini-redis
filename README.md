Mini Redis

A simplified Redis-like in-memory key-value database built from scratch as part of my systems engineering learning journey.

«Built on a phone due to limited computing resources.»

About

Mini Redis is a learning-focused implementation of a small in-memory database inspired by Redis.

The goal is not to recreate Redis completely, but to understand the engineering concepts behind systems like it by building the core components myself.

The project is being developed incrementally, starting with networking and gradually adding storage, commands, expiration, persistence, testing, benchmarking, and reliability.

Goals

Through this project, I am learning:

- TCP networking
- Client-server architecture
- Network connections and sockets
- Command parsing
- In-memory data structures
- Key-value storage
- Concurrency
- TTL and key expiration
- Persistence
- Error handling
- Testing
- Performance benchmarking
- System reliability

Architecture

The system is designed as a small monolithic application:

Client
  │
  │ TCP
  ▼
TCP Server
  │
  ▼
Connection Handler
  │
  ▼
Command Parser
  │
  ▼
Command Executor
  │
  ▼
In-Memory Store

As the project develops, additional components such as TTL management and persistence will be added.

Current Status

Completed

- TCP server
- Client connection handling
- Receiving data from clients
- Sending responses
- Connection lifecycle handling
- Basic in-memory key-value storage
- Basic command processing

Core Commands

The planned initial command set is:

SET key value
GET key
EXISTS key
DEL key

Example:

SET name Hendrix
GET name

Expected result:

Hendrix

Project Structure

mini-redis/
├── src/
│   ├── server.js
│   ├── connection.js
│   ├── parser.js
│   ├── commands.js
│   ├── store.js
│   ├── ttl.js
│   └── persistence.js
│
├── tests/
│   ├── parser.test.js
│   ├── store.test.js
│   ├── ttl.test.js
│   └── integration.test.js
│
├── benchmarks/
│   └── benchmark.js
│
├── docs/
│   ├── architecture.md
│   ├── decisions.md
│   └── failures.md
│
├── data/
├── README.md
├── package.json
└── .gitignore

Engineering Approach

I am following a systems engineering workflow rather than building the project from a tutorial:

Understand
    ↓
Research
    ↓
Requirements
    ↓
Design
    ↓
Implementation
    ↓
Testing
    ↓
Break It
    ↓
Debug
    ↓
Benchmark
    ↓
Optimize
    ↓
Document

The project is intentionally built step by step so that each component and engineering decision can be understood.

Development Environment

The project is being developed using:

- Node.js
- JavaScript
- Termux
- Git
- Linux/Android environment

Due to limited computing resources, development and testing are being performed primarily on a mobile phone.

Learning Philosophy

This project is part of a larger systems engineering roadmap.

The objective is not simply to produce working code. The objective is to understand:

- Why the system works
- Why particular design decisions were made
- What happens when the system fails
- Where bottlenecks appear
- What trade-offs different designs introduce
- How the system could evolve at larger scale

AI tools may be used as learning and debugging assistants, but the implementation, testing, investigation, and engineering decisions are part of my own learning process.

Roadmap

Phase 1 — Core

- [x] TCP server
- [x] Client connections
- [ ] Command parser
- [ ] Basic commands
- [ ] In-memory storage
- [ ] TTL and expiration
- [ ] Persistence
- [ ] Reliability improvements
- [ ] Testing
- [ ] Benchmarking

Phase 2 — Engineering

- [ ] Stress testing
- [ ] Failure testing
- [ ] Performance analysis
- [ ] Optimization
- [ ] Documentation
- [ ] Final engineering review

Status

In active development

This project is intentionally incomplete. Features will be added as the underlying concepts are learned and implemented.