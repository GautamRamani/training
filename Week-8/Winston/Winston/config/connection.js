const winston = require('winston')
const mongoose = require("mongoose")
const logger=require("./logger")

mongoose.connect(process.env.CONNECTION_URL, {
    dbname: process.env.dbname,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        winston.info("Database Connected Successfully...")
        logger.info("Mongodb Connected")
    })
    .catch((err) => { console.log(err) })