const bodyParser = require("body-parser")
const express=require("express")
const morgan = require("morgan")
const dotenv=require('dotenv').config()
const cors=require("cors")
const logger=require("./config/logger")
const app=express()

const stream={
    write:(message)=>{
        logger.info(message)
    }   
}
//middleware
app.use("/public/uploads",express.static(__dirname+"/public/uploads"))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms',{stream}))
app.use(bodyParser.json())
app.use(cors())

require("./config/connection")

const routeIndex=require("./Route/index")
app.use("/api",routeIndex);

app.listen(process.env.PORT,()=>{
    console.log(`Server Listening on PORT ${process.env.PORT}`)
})