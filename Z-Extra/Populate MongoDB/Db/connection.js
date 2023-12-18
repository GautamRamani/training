const mongoose=require("mongoose")

// mongoose.connect("mongodb://localhost:27017/Populate")
//         .then(()=>console.log("Database Connected Successfully"))
//         .catch((err)=>console.log(err))

const uri="mongodb://127.0.0.1:27017/populate"
mongoose.connect(uri,
                {
                        useNewUrlParser: true, 
                        useUnifiedTopology: true

                })
        .then(()=>console.log("Database Connected Successfully"))
        .catch((err)=>console.log(err))