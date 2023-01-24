const contact_Book =require("../model/phone")
const validate = require("../validation")

module.exports={
    add:async (req,res)=>{
        try {
            const { error } = validate.contact.validate(req.body);
        
            if (error) {
              return res.send(error.message);
            }
            const contact = await contact_Book.create(req.body)
            res.send(contact)
    
          } catch (error) {
            res.send(error.message);
          }
    }
}