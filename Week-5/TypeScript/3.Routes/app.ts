// let Sname="Arshdeep"
// console.log(Sname)

import express from "express";
import routes from './routes/index'

const app=express();

app.use("/routes",routes)

app.listen(8000,()=>{
    console.log("Srever started...")
})