const amqp=require("amqplib/callback_api")

//step 1: create connection
amqp.connect('amqp://localhost',(connError,connection)=>{
    if(connError){
        throw connError;
    }
    //step 2: create channel
    connection.createChannel((channelError,channel)=>{
        if(channelError){
            throw channelError;
        }
        //step 3: assert queue
        const QUEUE="Quote"
        channel.assertQueue(QUEUE)
        //step 4: send message to queue
        channel.sendToQueue(QUEUE,Buffer.from('All glory Comes from daring to begin'))
        console.log(`message send ${QUEUE}`)
        
    })
})