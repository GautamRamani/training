const amqp=require("amqplib/callback_api");
const { Channel } = require("amqplib/lib/channel");

amqp.connect(`amqp://localhost`,(err,connection)=>{
    if(err){
        throw err;
    }
    connection.createChannel((err,channel)=>{
        if(err){
            throw err;
        }
        let queuename="Quote"
        let message="All glory comes from daring to begin !!"
        channel.assertQueue(queuename,{
            durable:false
        })
        channel.sendToQueue(queuename,Buffer.from(message))
        console.log(`message:${message}`)
        setTimeout(()=>{
            connection.close()
        },1000)
    })
})