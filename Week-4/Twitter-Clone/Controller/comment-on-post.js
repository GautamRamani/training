const model =require("../Model/post")
const post =require("../Model/showpost")
module.exports=function showpost(socket,io){
    socket.on("post:comment",async(data)=>{
        console.log(data)
        const info=await post.findOne({_id:data.postId})
        const info2=await info.comment.push({Comment:data.comment,userId:data.userId})
        const info3=await info.save();
        socket.emit("showpost:all",info3)
    })
}