const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = 9030;

// Possible statuses
const statuses = ["connecting", "connected", ""];
io.on("connection", (socket) => {
  setInterval(() => {
    // Send a 'status' message every 3 seconds
    let statusIndex = Math.floor(Math.random() * 3);
    // console.log("index", statusIndex);
    io.emit("status", {
      status: statuses[statusIndex],
      source: "things.onsor.tech",
    });
  }, 3000);
});

server.listen(port, () => {
  console.log("listening on *:" + port);
});
