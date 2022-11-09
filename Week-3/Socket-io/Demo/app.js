const { Socket } = require('dgram');
const express=require('express')
const http=require("http")
const socketio=require('socket.io')

const app=express();
const server=http.createServer(app);

app.get("/",(req,res)=>{
    res.send('Learning Socket io')
})

const io=socketio(server)

const port=8000;
server.listen(port,()=>{
    console.log(`server istening the port number ${port}`)
})

io.on('connection',(socket)=>{
    console.log('socket id:',socket.id)
    socket.on('new-user-joined',({name})=>{
        console.log('user',name)
        socket.emit('user-joined',name)
    })
})