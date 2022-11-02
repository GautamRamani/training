const model=require("../Model/post")
const post=require("../Model/showpost")
module.exports=function likecount(socket,io){
    socket.on("like:count",async(data)=>{
        const info=await post.findOneAndUpdate(
            {
                _id:data.postId
            },
            {$push:{like:data.userId}},
            {new:true}
        );

        console.log("show all post data::",data)
        socket.emit("like:show",info)
    })
}