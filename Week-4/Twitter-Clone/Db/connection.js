const mongoose=require("mongoose")

    mongoose.connect("mongodb://localhost:27017/TwitterClone")
            .then(()=>console.log("Database connected successfully"))
            .catch((err)=>console.log(err))


