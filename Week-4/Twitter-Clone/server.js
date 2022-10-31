const express=require("express")
const post=require("./Model/showpost")  
const app=express();

require("./Db/connection")  
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const httpserver=require("http").createServer(app)
httpserver.listen(3100,()=>{
    console.log("server started",3100)
})
const {Server}=require("socket.io")
const io=new Server(httpserver,{
    cors:{origin:"http://localhost:3100",credentials:true,methods:["websocket","polling"]},
    //Websocket are Full-Duplex meaning the client and the server can send and receive message across the channel. 
    transports:["websocket","polling"]
})

io.on("connection",async(socket)=>{
    const info=await post.find();
    console.log("<::::::::: Socket connected :::::::::>",socket.id)
    //console.log("show all post data::",info)
    socket.emit("showpost:all",info)

    require("./Routes/index")(socket,io)       //
    socket.on("disconnect",()=>{
        console.log("socket id disconnected ::",socket.id)
    })
})