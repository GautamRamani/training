const model = require("../Model/post");
const post = require("../Model/showpost");
const bcrypt = require("bcrypt");
module.exports =async function register(socket,io) {
  socket.on("Register", async (data) => {
    console.log("::Register socket server ::",data)
    const password =await bcrypt.hash(data.password, 12);
    const info = await model.create({
      name: data.name,
      username: data.username,
      password
    });
    socket.emit("isRegsiter", info);
  });
};
