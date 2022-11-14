require("./Db/connection")
const Msg=require("./Model/message")
const io=require("socket.io")(3000)

io.on("connection",(socket)=>{
    Msg.find().then(result=>{
        socket.emit("output-messages",result)
    })
    console.log("user connected")
    socket.emit("message","Hello World")
    socket.on("disconnect",()=>{
        console.log("user disconnected")
    })
    socket.on("chatmessage",(msg)=>{
        const message=new Msg({msg})
        message.save().then(()=>{
            io.emit("message",msg)
        })
    })
})