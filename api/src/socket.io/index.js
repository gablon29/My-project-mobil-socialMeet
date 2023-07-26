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
  socket.on("CONECTA_CHAT", (data) => {
    try {
      if (data.rol === "admin") {
        if (!admins.some((admin) => admin.id === data.id)) {
          data.socketId = socket.id;
          data.atendiendo = false;
          admins.push(data);
        } else {
          const idx = admins.findIndex((admin) => admin.id === data.id);
          if (idx !== -1) {
            admins[idx].socketId = socket.id;
          }
        }
      } else {
        if (!users.some((user) => user.id === data.id)) {
          data.socketId = socket.id;
          data.atendiendo = false;
          users.push(data);
        } else {
          const idx = users.findIndex((user) => user.id === data.id);
          if (idx !== -1) {
            users[idx].socketId = socket.id;
          }
        }
      }

      if (admins.length) {
        io.to(admins[0].socketId).emit("CONECTA_CHAT", {
          chatsId: users.map((user) => {
            return { id: user.id, socketId: user.socketId, name: user.name };
          }),
        });
      }
    } catch (error) {
      console.error("Error in CONECTA_CHAT event:", error);
    }
  });

  socket.on("MENSAJE_CLIENTE", (data) => {
    try {
      const user = users.find((user) => user.id === data.chatId);

      if (!user) {
        const newUser = {
          id: data.chatId,
          mensajes: [],
        };

        newUser.mensajes.push({
          id: data.id,
          name: data.name,
          mensaje: data.mensaje,
        });

        users.push(newUser);
      } else {
        user.mensajes.push({
          id: data.id,
          name: data.name,
          mensaje: data.mensaje,
        });
      }

      const isAdmin = admins.some((admin) => admin.id === data.id);

      if (isAdmin) {
        const userSocketId = user ? user.socketId : null;
        io.to(userSocketId).emit("MENSAJE_CLIENTE", {
          chatId: "nan123",
          id: data.id,
          mensaje: data.mensaje,
          name: data.name,
        });
      } else {
        const adminSocketId = admins[0] ? admins[0].socketId : null;
        if (user?.atendiendo) {
          io.to(adminSocketId).emit("MENSAJE_CLIENTE", {
            chatId: "nan123",
            id: data.id,
            mensaje: data.mensaje,
            name: data.name,
          });
        }
      }
    } catch (error) {
      console.error("Error in MENSAJE_CLIENTE event:", error);
    }
  });

  socket.on("RESPUESTA_CHATGPT", (data) => {
    try {
      const respuestaGpt = data.respuesta;
      const user = users.find((user) => user.id === data.chatId);

      if (!admins.length) {
        const userSocketId = user ? user.socketId : null;
        io.to(userSocketId).emit("MENSAJE_CLIENTE", {
          chatId: user?.id,
          id: "BOT",
          name: user?.name,
          mensaje: respuestaGpt,
        });

        if (user) {
          user.mensajes.push({ id: "BOT", mensaje: respuestaGpt });
        }
      } else {
        const adminSocketId = admins[0].socketId;
        io.to(adminSocketId).emit("RESPUESTA_AL_ADMIN", {
          chatId: user?.id,
          name: user?.name,
          id: "BOT",
          mensaje: respuestaGpt,
        });
      }
    } catch (error) {
      console.error("Error in RESPUESTA_CHATGPT event:", error);
    }
  });

  socket.on("MENSAJE_ATIENDO", (data) => {
    try {
      const adminSocketId = admins[0] ? admins[0].socketId : null;
      const previousUserId = data.idAnt;
      const currentUserId = data.idAct;

      const previousUserIndex = users.findIndex((user) => user.id === previousUserId);
      const currentUserIndex = users.findIndex((user) => user.id === currentUserId);

      if (previousUserIndex !== -1) {
        users[previousUserIndex].atendiendo = false;
      }

      if (currentUserIndex !== -1) {
        users[currentUserIndex].atendiendo = true;
        io.to(adminSocketId).emit("MENSAJE_ATIENDO", {
          mensajes: users[currentUserIndex].mensajes,
        });
      }
    } catch (error) {
      console.error("Error in MENSAJE_ATIENDO event:", error);
    }
  });

  socket.on("disconnect", () => {
    try {
      const adminSocketId = socket.id;
      const adminIndex = admins.findIndex((admin) => admin.socketId === adminSocketId);
  
      if (adminIndex !== -1) {
        admins.splice(adminIndex, 1);
        console.error(`Admin disconnected: ${adminSocketId}`);
  
        // Envía una señal a todos los usuarios conectados para que actualicen su lista de administradores
        io.emit("ADMIN_DESCONECTADO", { adminSocketId });
      }
  
      // Elimina al usuario si está conectado al administrador que se desconectó
      const userIndex = users.findIndex((user) => user.socketId === adminSocketId);
      if (userIndex !== -1) {
        users.splice(userIndex, 1);
        console.error(`User disconnected: ${adminSocketId}`);
      }
    } catch (error) {
      console.error("Error in disconnect event:", error);
    }
  });
});

http.listen(process.env.PORT, () => {
  console.error(`Server listening on port ${process.env.PORT}`);
});