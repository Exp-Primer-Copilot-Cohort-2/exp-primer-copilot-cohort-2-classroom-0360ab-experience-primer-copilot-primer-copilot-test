// create web server
const express = require('express');
const app = express();
// create server
const http = require('http');
const server = http.createServer(app);
// create socket
const socket = require('socket.io');
const io = socket(server);
// port
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('User connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
    socket.on('message', (msg) => {
        console.log('Message: ' + msg);
        io.emit('message', msg);
    });
});

server.listen(port, () => {
    console.log('Server is running on port ' + port);
});