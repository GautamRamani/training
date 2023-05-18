const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const app = express()

//middleware
app.use("/public/uploads", express.static(__dirname + "/public/uploads"))
app.use(morgan('tiny'))
app.use(bodyParser.json())

require("./config/connection")

const routeIndex = require("./routes/index")
app.use("/", routeIndex);

let PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server Listening on PORT ${PORT}`)
})