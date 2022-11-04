// let Sname="Arshdeep"
// console.log(Sname)

import express, { urlencoded } from "express";
import routes from './routes/index'

const app=express();
app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use("/routes",routes)

app.listen(8000,()=>{
    console.log("Srever started...")
})