const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const joinRoute = require('./middleware/routes/join');
// const chatRoute = require('./middleware/routes/chat');
require('dotenv').config();

const PORT = process.env.PORT || 5013;
const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: '*',
    },
});

// register express middleware:
app.use('/', joinRoute);

// setup io event handlers:
io.on('connection', (socket) => {
    console.log('We have a new socket connection');

    // setup disconnect event handler:
    socket.on('disconnect', ({ user, room }) => {
        console.log(`${user} has disconnected`);
        io.in(room).emit(`${user} has left the chat`);
    });
});

server.listen(PORT, () => {
    console.log('Listening on Port: ' + PORT);
});
