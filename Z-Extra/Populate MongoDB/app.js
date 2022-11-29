const express = require('express')
require("./Db/connection")
const bodyparser=require("body-parser")
const morgan=require("morgan")
const app = express()
const port = 8000

app.use(bodyparser.json());
app.use(morgan("tiny"))

const indexRouter=require("./Route/index")
app.use("/",indexRouter)


// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}`))