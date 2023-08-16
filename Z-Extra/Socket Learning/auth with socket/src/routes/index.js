const { authentication } = require('./authentication')

const requestHandler = (socket, body) => {

    try {
        let { event } = body;
        
        // console.log("==========socket==========",socket);
        // console.log("==========data==========", event);
        
        event = event.split('|')[0];

        switch (event) {
            case "Auth":
                authentication(socket, body);
                break;
            default:
                break;
        }
    } catch (error) {
        console.log(error);
    }

}

module.exports = { requestHandler };