const express=require("express")
const http=require("http")
const dotenv=require("dotenv")
const path=require("path")
const app=express();
const server=http.createServer(app)
const amqp=require("amqplib/callback_api")
const socketio=require("socket.io");

dotenv.config({path:"./.env"})
const port=3002;
const amqpUrl2="amqp://localhost"

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const publicDirectory=path.join(__dirname,"./public")
app.use(express.static(publicDirectory))

app.set('view engine', 'hbs');

app.get("/",(req,res)=>{
    res.render("home")
})

server.listen(port,()=>{
    console.log(`server listening the port number ${port}`)
})

const io=socketio(server)

amqp.connect(amqpUrl2,(connError,connection)=>{
    if(connError){
        throw connError;
    }
    connection.createChannel((channelError,channel)=>{
        if(channelError){
            throw channelError;
        }
        io.on("connection",(socket)=>{
            console.log('socket server connected socket-id : ',socket.id)
            socket.emit("message","welcome")
            socket.on("join",({userName,rooName})=>{
                socket.join(rooName)

                channel.assertQueue("room2",{
                    durable:false
                })

                socket.on("sendMessage",(data)=>{
                    console.log('userB',data)

                    channel.sendToQueue("room2",Buffer.from(data))
                })

                channel.consume("room1",(msg)=>{
                    console.log("new1:::",msg.content.toString())
                    socket.broadcast.to(rooName).emit("message",msg.content.toString())
                    channel.ack(msg);
                })
            })
        })
    })
})