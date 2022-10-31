const mongoose = require("mongoose");

    mongoose.connect("mongodb://localhost:27017/clone")
            .then(()=>console.log("database connected with clone collection  "))
            .catch((err)=>console.log("err eccoured : ",err))