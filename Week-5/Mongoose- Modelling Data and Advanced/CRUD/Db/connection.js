var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/SocialMediaApp_db')
        .then(()=>console.log("Database Connected Succefully"))
        .catch((err)=>console.log(err))