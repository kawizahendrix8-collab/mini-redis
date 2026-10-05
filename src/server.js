const net = require("net");

const server = net.createServer((socket) =>{
  socket.write("hello");

socket.on('data', (data)=>{
  console.log(data);
});

socket.on("end",()=>{
  console.log("client disconnected");
});


  socket.on("error", (err) => {
  console.log("socket error:", err.message);
});
  
});

server.listen(6380,"0.0.0.0", () =>{
  console.log("we are online");
});
