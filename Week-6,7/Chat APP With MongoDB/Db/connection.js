const mongoose=require("mongoose")
const uri ="mongodb://127.0.0.1:27017/test"
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>console.log("Database Connected Succssfully"))
.catch((err)=>console.log(err))