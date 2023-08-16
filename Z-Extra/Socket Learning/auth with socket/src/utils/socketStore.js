module.exports.addSocket = (userId, socket) => {

    socket.user = userId;

    socket.join(userId)
    console.log("--socket-->", socket);
}