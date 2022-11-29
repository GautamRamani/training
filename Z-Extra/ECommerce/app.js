const express=require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const dotenv=require('dotenv').config()
const cors=require("cors")
const logger=require("./config/logger")
const authJwt=require("./middleware/auth")
const app=express()

const stream={
    write:(messege)=>{
        logger.info(messege)
    }   
}
//middleware
app.use("/public/uploads",express.static(__dirname+"/public/uploads"))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms',{stream}))
app.use(bodyParser.json())
app.use(cors())
app.use(authJwt());

require("./config/connection")

const routeIndex=require("./Route/index")
app.use("/api",routeIndex);

app.listen(process.env.PORT,()=>{
    console.log(`Server Listening on PORT ${process.env.PORT}`)
})