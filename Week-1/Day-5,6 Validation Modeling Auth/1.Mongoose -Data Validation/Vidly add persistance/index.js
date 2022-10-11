const mongoose=require('mongoose')
const express = require('express');
const app = express();
app.use(express.json());

const user=require("./routes/index")
app.use(user);

mongoose.connect('mongodb://localhost:27017/vidly')
        .then(()=>{console.log('Connected to MongoDB')})
        .catch((err)=>console.log(err))

const port=process.env.PORT||7878
app.listen(port, () => {
  console.log(`server listening the port number ${port}`)
});