const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); 


const app = express();

const server = http.createServer(app);
app.use(cors()); 
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('chat message', (message) => {
    io.emit('chat message', message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
