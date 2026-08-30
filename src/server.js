const net = require("net");
// net is a tool used to create Tcp Server.

const handleConnection = require("./connection");
// imports connection js.

const server = net.createServer((client) => {
  handleConnection(client);
  // calls handleConnection function in connection.js.
});
// creates Server that allows Clients to connect.


server.listen(6380, "0.0.0.0", () => {
  console.log("Server listening on port 6380");
});

// runs the server and gives it an address called a port.