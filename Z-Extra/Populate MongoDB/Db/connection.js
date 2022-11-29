const mongoose=require("mongoose")

// mongoose.connect("mongodb://localhost:27017/Populate")
//         .then(()=>console.log("Database Connected Successfully"))
//         .catch((err)=>console.log(err))

const uri="mongodb+srv://admin:admin@cluster0.pk2l5qk.mongodb.net/Populate?retryWrites=true&w=majority"
mongoose.connect(uri,
                {
                        useNewUrlParser: true, 
                        useUnifiedTopology: true

                })
        .then(()=>console.log("Database Connected Successfully"))
        .catch((err)=>console.log(err))