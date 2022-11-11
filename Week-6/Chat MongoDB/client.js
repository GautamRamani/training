const socket=io("http://localhost:3000",{transports:['websocket']})
const messages=document.getElementById("messages")
const msgForm=document.getElementById("msgForm")

socket.on("message",data=>{
    console.log(data)
    appenMessages(data)
})
socket.on("output-messages",data=>{
    console.log(data)
    if(data.length){
        data.forEach(message=>{
            appenMessages(message.msg)
        })
    }
})

msgForm.addEventListener("submit",e=>{
    e.preventDefault();
    socket.emit("chatmessage",msgForm.msg.value)
    console.log("submit from megfrom",msgForm.msg.value)
    msgForm.msg.value="";
})



function appenMessages(message){
    const html=`<div>${message}</div>`
    messages.innerHTML+=html
}