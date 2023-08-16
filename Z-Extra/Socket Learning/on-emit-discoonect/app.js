const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Set up a basic route
app.get('/', (req, res) => {
    res.send('Hello, this is your Express server with Socket.IO!');
});

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('A user connected::', socket.id);

    // Handle events here
    socket.on('chat message', (message) => {
        console.log('Received message:', message);
        // You can broadcast this message to all connected clients
        socket.emit('chat message', message);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected::', socket.id);
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});