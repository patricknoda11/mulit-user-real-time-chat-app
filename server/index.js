const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const joinRoute = require('./middleware/routes/join');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
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

// setup io/socket event listeners:
io.on('connection', (socket) => {
    const SERVER_NAME = 'Chat Bot';
    console.log('We have a new socket connection');

    // setup join event listener:
    socket.on('join', ({ name, roomId }, callback) => {
        // attempt adding specified user to roomId
        const { error, user } = addUser({ socketId: socket.id, name, roomId });

        // if there is error return error
        if (error) {
            return callback(error);
        }

        // assign socket to room
        socket.join(roomId);

        // send welcome message to socket
        socket.emit('server-message', {
            user: SERVER_NAME,
            text: `${user.name}, Welcome to room ${user.roomId}`,
        });

        // emit join message to all other sockets/clients in the room
        socket.broadcast.to(user.roomId).emit('server-message', {
            user: SERVER_NAME,
            text: `${user.name}, has entered the chat room`,
        });

        return callback(user);
    });

    // setup client-message event listener
    socket.on('client-message', (message, callback) => {
        const user = getUser(socket.id);
        io.to(user.roomId).emit('server-message', {
            user: SERVER_NAME,
            text: message,
        });
        callback();
    });

    // setup disconnect event handler:
    socket.on('disconnect', () => {
        const user = getUser(socket.id);
        console.log(`${user.name} has disconnected`);
        io.to(user.roomId).emit(`${user.name} has left the chat`);
    });
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
