//Nod Server which will handle socket io connections

const express=require('express')
const http=require("http")
const app=express();
const server=http.createServer(app);
const port=7900;
server.listen(port,()=>{
    console.log(`server istening the port number ${port}`)
})

const users={};
const io = require('socket.io')(server)

io.on('connection',socket=>{
    console.log(socket.id)
    //if any new user joins, let other users connected to the server know!
    socket.on('new-user-joined',(name)=>{
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name)
    })

    //if someone sends a message, broadcast it to other people
    socket.on('send',(message)=>{
        socket.broadcast.emit('receive',{message:message,name:users[socket.id]})
    });

    //if someone leaves the chat, let others know
    socket.on('disconnect',(message)=>{
        socket.broadcast.emit('left',users[socket.id]);
        delete users[socket.id];
    })
});