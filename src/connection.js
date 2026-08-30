const parser = require("./parser");
const runCommand = require("./commands");

function handleConnection(client) {
  // Runs once when a new client connects
  console.log("Client Connected");

  client.on("data", (chunk) => {
    // TCP gives us a chunk of bytes.
    // Convert those bytes into text.
    const text = chunk.toString();

    // Our simple protocol uses "\n" to mark
    // the end of each command.
    const commands = text.split("\n");

    // Process each command separately.
    for (let i = 0; i < commands.length; i++) {

      // Get one command from the array.
      const command = commands[i];

      // Ignore empty commands.
      if (command.trim() === "") {
        continue;
      }

      // Convert the command text into a structured object.
      const parsed = parser(command);

      console.log(parsed);

      // Execute the command through commands.js.
      const result = runCommand(parsed);

      // Send the result back to the TCP client.
      client.write(String(result) + "\n");
    }
  });

  client.on("end", () => {
    // Runs when the client disconnects normally.
    console.log("Client disconnected");
  });

  client.on("error", (err) => {
    // Prevents connection errors from crashing the server.
    console.log("Something went wrong:", err.message);
  });
}

module.exports = handleConnection;
// Makes this function available to server.js