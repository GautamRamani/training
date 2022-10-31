const mongoose=require("mongoose")

const comment=new mongoose.Schema(
    {
        Comment:String,
        username:String
    },
    {_id:false}
    );
    const showpost=new mongoose.Schema({
        post:String,
        like:Number,
        username:String,
        comment:[comment]
    })
    module.exports=new mongoose.model("showpost",showpost)