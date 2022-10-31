const model = require("../Model/post");
const post = require("../Model/showpost");
module.exports = function showpost(socket, io) {
  socket.on("showpost:req", async (data) => {
    const info = await post.find();
    socket.emit("showpost:all", info);
  });
};
