const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json());

require("./Db/connection")

const IndexRoutes=require("./Routes/index")
app.use("/",IndexRoutes)

app.listen(port, () => {
    console.log(`listening on port ${port}!`);
})