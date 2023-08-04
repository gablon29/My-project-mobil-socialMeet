const { log } = require("console");
const server = require("../index");
const http = require("http").createServer(server);
require("dotenv").config();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
  methods: ["GET", "POST"],
});

const users = [];
const admins = [];
const eventos = [];

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("sendMessage", (message) => {
    console.log("Received message:", message);
    io.emit("receiveMessage", message); // Broadcast the message to all connected clients
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

http.listen(process.env.PORTSOCK, () => {
  console.error(`Server listening on port ${process.env.PORT}`);
});