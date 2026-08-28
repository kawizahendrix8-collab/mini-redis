const net = require("net");

const server = net.createServer((client) => {
  console.log("Client Connected");

  client.on("data", (chunk) => {
    console.log("Received:", chunk.toString());
    client.write("OK\n");
  });

  client.on("end", () => {
    console.log("Client disconnected");
  });

  client.on("error", (err) => {
    console.log("Something went wrong:", err.message);
  });
});

server.listen(6380, "0.0.0.0", () => {
  console.log("Server listening on port 6380");
});