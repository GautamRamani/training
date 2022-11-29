const mongoose = require('mongoose')
const logger = require("./logger")

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        logger.info("Mongodb Connected")
    })
    .catch((err) => { console.log(err) })