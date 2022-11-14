const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/Chatapp_DEMO")
.then(console.log("Database Connected Succssfully"))
.catch((err)=>console.log(err))