Mini Redis v2 — Day 1 Decisions

Day 1 — TCP Foundation

1. Use Node.js "net"

Decision: Use Node's built-in "net" module for networking.

Reason: It provides low-level TCP networking without hiding the fundamentals behind a framework.

This lets us learn how TCP servers, sockets, connections, and byte streams actually work.

2. Use TCP

Decision: Mini Redis will communicate with clients over TCP.

Reason: Redis is a networked database, so TCP gives us a practical foundation for understanding reliable, ordered communication between clients and the server.

3. Listen on port 6380

Decision: Mini Redis uses port "6380".

Reason: Standard Redis uses port "6379", so "6380" keeps our project separate from a normal Redis installation.

4. Listen on 0.0.0.0

Decision: Bind the server to "0.0.0.0".

Reason: This allows the server to listen on all available IPv4 interfaces instead of only the local machine.

5. Keep Day 1 focused on TCP

Decision: Do not implement Redis commands, parsing, storage, TTL, or persistence yet.

Reason: The goal of Day 1 is to understand and prove the networking foundation before adding database behavior.

6. Use sockets per client

Decision: Each connected client gets its own socket.

Reason: This allows Mini Redis to communicate with multiple clients independently.

7. Do not solve message framing yet

Decision: Treat received data as a TCP byte stream for Day 1.

Reason: TCP does not understand application-level messages. Message framing will be studied and implemented later.

Day 1 Principle

Build the foundation before the features.

First make the server communicate reliably. Then teach it how to understand commands.