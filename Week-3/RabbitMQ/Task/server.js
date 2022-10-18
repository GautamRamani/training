const express = require('express');
const app = express();
app.use(express.json());

const user = require("./routes/index")
app.use(user);

// console.log(process.argv)

const port = process.argv[2]
// cons port = process.argv[2] ? 
app.listen(port, () => {
  console.log(`server listening the port number ${port}`)
});