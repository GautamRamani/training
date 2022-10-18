const express=require("express")
const redis=require("redis")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const client=redis.createClient({
    url:"redis://localhost:6379"
});

client.connect();
client.on('error',(err)=>console.log('redis client error',err))

//add data in redis-cli  because in newly version hmset is not available
//hmset user001 first_name "Gautam" last_name "Ramani" email "gautam@gmail.com" phone 7359422929
//hmset user002 first_name "Mihir" last_name "Timbadiya" email "mihir@gmail.com" phone 7359422929


app.get("/get",async(req,res)=>{
    try {
        const results=await client.HGETALL("user002")     //also user001
         console.log(results)
        res.send(results)
    } catch (error) {
        console.log(err)
        res.send(err)
    }
})

const port=1234;
app.listen(port,()=>{
    console.log(`server listening the port number ${port}`)
})
