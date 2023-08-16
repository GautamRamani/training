const responseHandlers = (socket, en, data) => {
    socket.emit("res", ({ en, ...data }));
}

module.exports = { responseHandlers }