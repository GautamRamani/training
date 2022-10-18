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

        channel.assertQueue(queuename,{
            durable:false
        })
        channel.consume(queuename,(msg)=>{
            console.log(`Received : ${msg.content.toString()}`)
            channel.ack(msg);
        })
    })
})