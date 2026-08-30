# Day 3 Decisions

- Use JavaScript Map for in-memory storage.
- Commands use uppercase names.
- Use EXISTS as the existence-check command.
- Use \n as the command delimiter.
- Parser cleans incoming commands with trim().
- commands.js handles command logic.
- connection.js handles TCP communication and framing.
- store.js handles data storage.