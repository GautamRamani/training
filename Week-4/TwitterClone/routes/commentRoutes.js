const model = require("../model/post");
const post = require("../model/Showpost");
const bcrypt = require("bcrypt");
module.exports = function commentRoutes(socket, io) {
  socket.on("postcomment:send", async (data) => {
    console.log("::postcomment:send socket server ::", data);

    const info = await model
      .findOne({
        username: data.username,
      })
      .populate("post");

    const info4 = await model.findOne(
      { username: data.username },
      { post: { $elemMatch: { post: data.postpostcomment } } }
    );
    const info10 = await model
      .findOne({ username: data.username })
      .select({ username: 1, "post.post": data.postpostcomment });
    const post1 = await post.create({
      username: data.username,
      post: data.postpostcomment,
    });
    const info2 = await info.post.push(post1._id);
    const info9 = await info.save();
    const fullpost = await post.find();
    console.log("info10", info10);

    io.emit("postcomment:recive", post1);
  });
};
