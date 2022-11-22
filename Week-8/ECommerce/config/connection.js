const mongoose = require('mongoose')
const logger = require("./logger")
const winston = require('winston')

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        winston.info("Database Connected Successfully...")
        logger.info("Mongodb Connected")
    })
    .catch((err) => { console.log(err) })