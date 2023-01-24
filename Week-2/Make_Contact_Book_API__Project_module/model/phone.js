const mongoose = require("mongoose");

const schema = new mongoose.Schema({

    fullname :{
        type:String,
        required : true
    },
    phones :[
        new mongoose.Schema(
            {
                phone: {
                  type:String,
                },
               type: {
                  type: String,
                },
              },
               { _id: false }
        )
        
    ],

    city :{
        type:String
    }
})

const contact_Book= mongoose.model("contact_Book", schema);

module.exports = contact_Book;