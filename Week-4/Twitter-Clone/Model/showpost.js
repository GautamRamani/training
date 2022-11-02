const mongoose=require("mongoose")

const comment=new mongoose.Schema(
    {
        Comment:String,
        userId:{
                type:mongoose.Types.ObjectId,
                ref:"User"
            }
        },
        {_id:false}
    );
    const showpost=new mongoose.Schema({
        post:String,
        like:[{
            type:mongoose.Types.ObjectId,
            ref:"User"
        }],
        username:String,
        comment:[comment]
    })
    module.exports=new mongoose.model("showpost",showpost)