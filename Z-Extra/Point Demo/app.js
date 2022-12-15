const express = require('express')
const morgan=require("morgan")
const bodyparser=require("body-parser")
require("./Db/connection")
const app = express()
const port = 3000

app.use(bodyparser.json())
app.use(morgan("tiny"))

const indexRoutes=require("./Routes/index")
app.use("/",indexRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))