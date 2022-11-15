const mongoose=require("mongoose")
const uri ="mongodb+srv://admin:admin@cluster0.pk2l5qk.mongodb.net/chatAPP?retryWrites=true&w=majority"
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>console.log("Database Connected Succssfully"))
.catch((err)=>console.log(err))