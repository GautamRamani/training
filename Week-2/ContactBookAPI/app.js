const express=require("express")
const app=express();
const bodyParser=require("body-parser")
const cors=require("cors");
const morgan=require("morgan")
const dotenv=require('dotenv').config()


app.use(cors())
app.use(bodyParser.json())
app.use(morgan("tiny"))

require("./Db/logging")

const indexRouter=require("./Routes/index");
app.use("/",indexRouter)

require("./Db/connection")

app.listen(process.env.PORT,()=>console.log(`app listening on port ${process.env.PORT}`))