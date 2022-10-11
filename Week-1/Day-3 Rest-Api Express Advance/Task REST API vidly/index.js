const express = require('express');
const app = express();
app.use(express.json());

const user=require("./routes/index")
app.use(user);

const port=process.env.PORT||7878
app.listen(port, () => {
  console.log(`server listening the port number ${port}`)
});