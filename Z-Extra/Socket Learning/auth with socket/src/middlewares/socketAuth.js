const jwt = require('jsonwebtoken')
const addSocket = require('../utils/socketStore')

module.exports = async (socket, next) => {

    try {
        const token = socket.handshake.query.token;
        const secret = process.env.JWT_SECRET;
        console.log("token::", token);

        if (token && token != null && token != 'null' && token != undefined && token != 'undefined') {

            jwt.verify(token, secret, (err, decoded) => {
                if (err) return next(new Error('Authentication error'))
                console.log('decoded=========>', decoded)
                addSocket(decoded._id, socket);
                next();
            })
        } else {
            next(new Error('Authentication error'))
        }
    } catch (error) {
        console.log(error);
        return next(error);
    }

}