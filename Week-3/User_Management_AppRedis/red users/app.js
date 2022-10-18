const express=require("express")
const exphbs=require('express-handlebars')
const path=require('path')
const bodyParser = require("body-parser")
const methodOverride=require("method-override")
const redis=require("redis")

const app=express()

const client =redis.createClient({
    url:"redis://localhost:6379"
});

client.connect();
client.on('connect',function(){
    console.log('Connected to Redis...')
})
client.on('error',(err)=>console.log("Redis Client Error",err))


app.engine('handlebars', exphbs.engine({extname: '.handlebars',defaultLayout: "main"}));
app.set('view engine','handlebars')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(methodOverride('_method'))

//search page
app.get("/",function(req,res,next){
    res.render('searchusers')
})

//search processing
app.post("/user/search",function(req,res,next){
    let id=req.body.id;
    
    client.HGETALL(id,function(err,obj){
        if(!obj){
            res.render('searchusers',{
                error:"User does not exist"
            });
        }else{
            obj.id=id;
            res.render('details',{
                user:obj
            })
        }
    })
})


const port=3100;
app.listen(port,()=>{
    console.log(`server listening the port number ${port}`)
})
