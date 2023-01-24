const express = require("express");
const mongoose = require("mongoose");
const contact = require("./routes/phone")

const app = express();
const port =8080;

mongoose.set("strictQuery",false)
mongoose.connect("mongodb://localhost/contact_Book")
.then(()=>{
    console.log("mongodb is connected");
})

app.use(express.json());
app.use(contact);

app.listen(port,()=>{
    console.log(`server is running on port `);
    
})