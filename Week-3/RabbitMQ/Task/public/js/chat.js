const socket=io()

const newMessage=document.getElementById("text")
const btn=document.getElementById("btn")

const userName=prompt("userName")
const roomName=prompt("roomName")

socket.on("message",(data)=>{
    console.log(data)
})

socket.emit("join",{userName,roomName})

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const message=newMessage.value
    socket.emit('sendMessage',message)
})