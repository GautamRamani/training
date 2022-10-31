
module.exports=function twit(socket,io){
    require("../Controller/register")(socket)
    require("../Controller/post")(socket,io)
    require("../Controller/comment-on-post")(socket,io)
    require("../Controller/like")(socket,io)
    require("../Controller/show-all-post")(socket,io)
}