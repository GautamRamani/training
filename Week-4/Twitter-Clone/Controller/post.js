const model=require("../Model/post")
const post=require("../Model/showpost")
const bcrypt=require("bcrypt")
module.exports=async function userpost(socket,io){
    socket.on("post:send",async (data)=>{
        console.log("::post:send socket server ::",data);

        const info=await model
            .findOne({
                username:data.username,
            })
            .populate("post");

        const info4=await model.findOne(
            {username:data.username},
            {post:{$elemMatch:{post:data.dopost}}}
        );
        const info10=await model
            .findOne({username:data.username})
            .select({username:1,"post.post":data.dopost})
        const post1=await post.create({
            username:data.username,
            post:data.dopost,
        });
        const info2=await info.post.push(post1._id)
        const info9=await info.save();
        const fullpost=await post.find();
        console.log("info10",info10)

        io.emit("post:receive",post1)
    })
}