const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

io.on("connection", socket => {
  socket.on("chatMessage", data => {
    io.emit("chatMessage", data);
  });
});

server.listen(process.env.PORT || 3000);
