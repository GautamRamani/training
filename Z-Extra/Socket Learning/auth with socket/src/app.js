const express = require('express');
const http = require('http');
const dotenv = require('dotenv').config();
const db = require('./connections/database')
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const socketAuth = require('./middlewares/socketAuth')
const { requestHandler } = require('./routes/index');
const { createClient } = require('redis');
const { createAdapter } = require('@socket.io/redis-adapter')

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

//db connection
const PORT = process.argv[2] || 3000;
const connectionURL = process.env.MONGO_SRV
db(connectionURL);

//socket connection io globally export
const server = http.createServer(app);
io = module.exports = socketIO(server);

// Redis adapter setup
const pubClient = createClient({ host: 'localhost', port: 6379 });
const subClient = pubClient.duplicate();

Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
    io.adapter(createAdapter(pubClient, subClient));
});

io.use(socketAuth)

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log("--socket connection-->", socket.id);
    io.emit("res", { data: { msg: "hi" } })
    // console.log(io.of("/").adapter.rooms)
    socket.on("req", (body) => {
        requestHandler(socket, body);
    })

    socket.on('disconnect', () => {
        console.log(`disconnected socketID:${socket.id}, USER:${socket.user}`);
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});