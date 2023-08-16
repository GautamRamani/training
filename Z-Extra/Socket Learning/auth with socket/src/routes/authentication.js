const { register, login } = require('../controller/user.controller')

const authentication = (socket, body) => {

    try {
        const { event, data } = body;

        // console.log("==========data==========", body);
        // console.log("==========socket==========",socket);
        
        subevent = event.split('|')[1]

        switch (subevent) {
            case "Register":
                register(socket, data);
                break;
            case "Login":
                login(socket, data);
                break;
            default:
                break;
        }
    } catch (error) {
        console.log(error);
    }

}

module.exports = { authentication };