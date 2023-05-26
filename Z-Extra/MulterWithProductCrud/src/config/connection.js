const mongoose = require('mongoose')

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/multer")
    .then(() => {
        console.log("Database Connected Successfully")
    })
    .catch((err) => { console.log(err) })