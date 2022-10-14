const express=require('express')
const app=express();
const server=require('http').createServer(app)
const io=require('socket.io')(server,{cors:{origin:"*"}});

app.set('view engine','ejs')

app.get('/home',(req,res)=>{
    res.render("home")
    // res.send('hello')
})

const port=5454;
server.listen(port,()=>{
    console.log(`server listening the port number ${port}`)
})

io.on('connection',(socket)=>{
    console.log('user Connected: '+socket.id)

    socket.on("message",(data)=>{
        socket.broadcast.emit('message',data)
    })
})