import express from 'express'
import httpObjetoConClases from 'http'
import socketioObjetoConUnaClase, { Socket } from 'socket.io'
import { sendSocketMessage } from '../controllers/chatController';
import { socketAuthMiddleware } from '../utils/jwtUtils';

const app = express()
const http = new httpObjetoConClases.Server(app);
const io = new socketioObjetoConUnaClase.Server(http)



// Add messages when sockets open and close connections
interface TokenStruct {
  user: {
    userId: string;
  };
}

// Extend the Socket interface with the custom properties
type SocketConDecodedToken = Socket & TokenStruct;

io.use(socketAuthMiddleware);
io.on('connection', async socket => {
  const socket2: SocketConDecodedToken = socket as SocketConDecodedToken;

  console.log(`[${socket.id}] socket connected`);
  const userId = socket2.user.userId
  socket.on('send-message', async (messageData) => {
    console.log(userId, messageData);
    await sendSocketMessage(userId, messageData).then(result_data=>{

      io.emit('message-received', messageData);
    })
  });

  socket.on('disconnect', reason => {
    console.log(`[${socket.id}] socket disconnected - ${reason}`);
  });
});




// Broadcast the current server time as global message, every 1s
setInterval(() => {
  io.sockets.emit('time-msg', { time: new Date().toISOString() });
}, 10000);

// Show the index.html by default
//app.get('/', (req, res) => res.sendFile('index.html'));
//console.log('Socket.io: ->Se ha ejecutado socket.io/minimalWorking.ts');

// Start the express server
export default http

