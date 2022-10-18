const express=require("express")
const redis=require("redis")
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

const client =redis.createClient({
    url:"redis://localhost:6379"
});

client.connect();
client.on('error',(err)=>console.log("Redis Client Error",err))

app.post("/set",async(req,res)=>{
    try {
        const {key,val}=req.body;
        console.log(req.body)
        const result=await client.set(key,JSON.stringify(val))
        res.send(result);
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

app.get("/get",async(req,res)=>{
    try {
        const results=await client.get("name")
        console.log(results)
        res.send(results)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

const port=4598;
app.listen(port,()=>{
    console.log(`server listening the port number ${port}`)
})


