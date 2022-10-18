const express = require('express');
const app = express();
app.use(express.json());

const user = require("./routes/index")
app.use(user);

const port=1234;
app.listen(port, () => {
  console.log(`server listening the port number ${port}`)
});