const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/demo")
        .then(()=>console.log('Connected to MongoDb...'))
        .catch((err)=>console.log(err))

