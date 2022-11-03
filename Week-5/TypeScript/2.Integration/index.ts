// let Sname="Arshdeep"
// console.log(Sname)

import express from "express";
import remindersRouter from './routes/index'

const app=express();

app.use("/routes",remindersRouter)

app.get("/1",(req,res)=>{
    res.send("Welcome to Typescript library...")
})

app.get("/2",(req,res)=>{
    res.send([1,2,3])
})

app.get("/3",(req,res)=>{
    res.send(Array.isArray([1]))
})

app.listen(8000,()=>{
    console.log("Srever started...")
})