

module.exports=function twit(socket,io){
   require("./registerRoute")(socket);
   require("./commentRoutes")(socket,io)
   require("./likeRoute")(socket,io)
   require("./showpostRoute")(socket,io)
   require("./postcommentRoute")(socket,io)
}