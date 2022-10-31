const express = require("express");
const post = require("./model/Showpost");
const app = express();

require("./connection");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const httpserver = require("http").createServer(app);
httpserver.listen(3000, () => {
  console.log("server started", 3000);
});
const { Server } = require("socket.io");
const io = new Server(httpserver, {
  cors: { origin: "http://localhost:3000", credentials: true,methods:["websocket","polling"] },    
  //WebSockets are Full-Duplex meaning both the client and the server can send and receive messages across the channel.
  transports: ["websocket", "polling"]
});

io.on("connection",async (socket) => {
  const info = await post.find();
  console.log("<::::::::: socket connected :::::::>", socket.id);
  // console.log("show all post data::", info);
  socket.emit("showpost:all", info);

  require("./routes")(socket,io)
  socket.on("disconnect", () => {
    console.log("socket id disconnected ::", socket.id);
  });
});
