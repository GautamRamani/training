import dotenv from "dotenv";
import express from "express";
// import io from 'socket.io';
import http from "http";
import mongoose from "mongoose";
import { removeSocket } from "./utils/socketStore.js";
import requestHandler from "./middleware/requestHandler.js";
import { socketIo } from "./socket.cjs";
const app = express();
const httpServer = http.createServer(app);
const io = socketIo(httpServer, { cors: { origin: "*" }, allowEIO3: true, transports: ['websocket', 'polling'] });
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => {
    console.error("Could not connect to MongoDB...");
    console.log(err);
  });

mongoose.set("debug", true);
io.on("connection", socket => {
  console.log("=============")
  socket.on("req", body => {
    console.log(body);
    requestHandler(body, socket, io);
  });
  socket.on("disconnet", () => {
    console.log("disconnect", socket.id);
    removeSocket(socket.id);
  });
});

app.all("*", (req, res) => {
  res.send("API is running....");
});

const port = 3000;
console.log("port: " + port);
httpServer.listen(port, () => {
  console.log("listening on *: 3000")
});
