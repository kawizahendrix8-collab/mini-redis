Mini Redis v2 — Day 1 Architecture

Day 1 — TCP Foundation

Mini Redis v2 starts as a TCP server that accepts client connections and communicates with them through sockets.

Basic Architecture

CLIENT
   │
   │ TCP connection
   ▼
MINI REDIS SERVER
   │
   ├── Accept client
   ├── Receive data
   ├── Send response
   ├── Detect disconnect
   └── Handle socket errors

Server

The server is responsible for:

- Starting Mini Redis
- Listening for TCP connections
- Accepting clients
- Receiving data
- Sending responses
- Detecting when clients disconnect
- Handling socket errors

Socket

Each connected client gets its own socket.

Client A ─── Socket A ───┐
                         │
Client B ─── Socket B ───┼── Mini Redis
                         │
Client C ─── Socket C ───┘

The socket is the communication endpoint between Mini Redis and a connected client.

Network Configuration

Mini Redis currently listens on:

Host: 0.0.0.0
Port: 6380
Protocol: TCP

"0.0.0.0" means the server listens on all available IPv4 network interfaces.

Port "6380" was chosen instead of Redis's standard "6379" so that this project does not conflict with a normal Redis installation.

Current Code Responsibility

"src/server.js" currently handles the basic TCP connection lifecycle.

It does not yet handle:

- Command parsing
- SET
- GET
- Database storage
- TTL
- Persistence
- Authentication

Those responsibilities will be added in later days.

Day 1 Principle

Keep the TCP foundation simple first.

Before Mini Redis can understand commands, it must first be able to reliably accept connections and move data between clients and the server.