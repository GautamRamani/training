const winston=require('winston')
const mongoose=require("mongoose")

mongoose.connect(process.env.CONNECTION_URL,{
    dbname:process.env.dbname
})
.then(()=>winston.info("Database Connected Successfully..."))
.catch((err)=>{console.log(err)})

mongoose.set('debug', true);