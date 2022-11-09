const mongoose=require("mongoose")
// Create Schema
const UserSchema = new mongoose.Schema({    
    name: { 
      type: String,
      required: true, 
      minlength : 2,     
      maxlength: 20,      
      trim : true
    }});
const PostSchema = new mongoose.Schema({ 
    title:{
      type: String,
      required: true, 
      minlength : 2,  
      maxlength: 20,    
      trim : true
    },
    postedBy: {       
      type: mongoose.Schema.Types.ObjectId,        
      ref: 'User'    
    },    
    comments: [{        
      text: String,        
      postedBy: {            
        type: mongoose.Schema.Types.ObjectId,           
        ref: 'User'        
      }        
    }]
});

module.exports = mongoose.model("User", UserSchema);
module.exports = mongoose.model("Post", PostSchema);