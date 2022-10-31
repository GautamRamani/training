const model = require("../Model/post");
const post = require("../Model/showpost");
module.exports = function showpost(socket, io) {
  socket.on("like:count", async (data) => {
    const info = await post.findOneAndUpdate(
      {
        _id: data.id
      },
      { $set: { like: data.count } },
      { new: true }
    );

    console.log("show all post data::", data);
    socket.emit("like:show", info);
  });
};
