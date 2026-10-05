Mini Redis v2 — Day 1 Failures

Day 1 — TCP Foundation

This document records real failures and unexpected behavior encountered while building and testing the TCP foundation of Mini Redis v2.

1. Invalid package.json

What happened

After resetting the project, "package.json" was empty.

Running:

node src/server.js

caused Node.js to fail with an invalid package configuration error.

Why it happened

"package.json" had been emptied during the project reset.

Fix

Added a minimal valid "package.json".

Lesson

A Node.js project still needs valid project configuration before the application can run.

2. Wrong port

What happened

The server was listening on port "6380", but we tried:

nc 127.0.0.1 6399

The connection failed and "nc" returned to the shell.

Why it happened

Nothing was listening on port "6399".

Lesson

A client must connect to a port where a server is actually listening.

3. Server stopped

What happened

We stopped the Mini Redis server and tried:

nc 127.0.0.1 6380

There was no connection or response.

Why it happened

The server was no longer running, so nothing was listening on port "6380".

Lesson

A port only accepts connections when a program is actively listening.

4. Abrupt client disconnect

What happened

A client connected to the server and was then terminated with "Ctrl + C".

The server printed:

client disconnected

The server itself stayed running.

Lesson

One client disconnecting should not bring down the entire server.

5. TCP data appeared as Buffers

What happened

Client messages appeared in the server terminal as Buffers, for example:

<Buffer 68 65 6c 6c 6f 20 66 72 6f 6d 20 41 0a>

Why it happened

TCP delivers bytes to our application. Node represents the received bytes as a "Buffer".

Lesson

TCP provides a byte stream. It does not understand our future Redis commands or message boundaries.

Day 1 Conclusion

The failures helped confirm several important networking concepts:

- A server must be running and listening on the correct port.
- Clients can fail to connect when nothing is listening.
- Individual client failures should not crash the server.
- TCP data arrives as bytes.
- Application-level message framing will be needed later.