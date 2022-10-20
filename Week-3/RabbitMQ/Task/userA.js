const express=require("express")
const http=require("http")
const path=require("path")
const socketio=require("socket.io")
const amqp=require("amqplib/callback_api")
const dotenv=require("dotenv")
const app=express();
const server=http.createServer(app)

dotenv.config({ path: './.env' })
const port=3001;

const amqpUrl="amqp://localhost"
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const publicDirectory=path.join(__dirname,"./public")
app.use(express.static(publicDirectory))

app.set('view engine', 'hbs');

app.get("/",(req,res)=>{
    res.render("home")
})

server.listen(port,()=>{
    console.log(`server listening on port number ${port}`)
})

const io=socketio(server)

amqp.connect(amqpUrl,(connErr,connection)=>{
    if(connErr){
        throw connErr;
    }
    connection.createChannel((channelError,channel)=>{
        if(channelError){
            throw channelError;
        }
        io.on("connection",(socket)=>{
            console.log('Socket Server conncted, Socket id: ',socket.id)
            socket.emit("message","welcome")
            socket.on('join',({userName,roomName})=>{
                socket.join(roomName)

                channel.assertQueue("room1",{
                    durable:false
                })

                socket.on("sendMessage",(data)=>{
                    console.log('userA',data)
                    channel.sendToQueue("room1",Buffer.from(data))
                })

                channel.consume("room2",(msg)=>{
                    console.log("new2:::",msg.content.toString())
                    socket.emit("message",msg.content.toString())
                    channel.ack(msg);
                })
            })
        })
    })
})