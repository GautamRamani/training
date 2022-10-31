const model = require("../model/post");
const post = require("../model/Showpost");
module.exports = function showpost(socket, io) {
  socket.on("showpost:req", async (data) => {
    const info = await post.find();
    socket.emit("showpost:all", info);
  });
};
