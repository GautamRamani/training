const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const logger = require("./config/logger")
const cors = require("cors");
const morgan = require("morgan")
const authJwt = require("./middleware/jwt")  //auth
const dotenv = require('dotenv').config()

app.use(express.json())
app.use(cors())
//middleware
app.use(bodyParser.json())

const stream = {
    write: (message) => {
        logger.info(message)
    }
};
app.use(morgan(':method :url :status :res[content-length] - :response-time ms', { stream }))
// app.use(authJwt())

const indexRouter = require("./Routes/index");
app.use("/", indexRouter)

require("./config/connection")

app.listen(process.env.PORT, () => {
    console.log(`app listening on port ${process.env.PORT}`)
})