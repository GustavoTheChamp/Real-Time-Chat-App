const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// TODO: Add socket event handlers

server.listen(3000, () => console.log('Server running on port 3000'));