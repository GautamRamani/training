const express = require('express');
const contact_Book = require('../model/phone');
const router = express.Router();
const contact = require("../model/phone")
const validate = require("../validation")
const controller = require("../controller/phone")

router.post('/',controller.add)

router.post('/add/:_id',async(req,res)=>{
    try {
        const{error} = validate.add_contact.validate(req.body);

        if(error){
            return res.send(error.message);

        }

        const contact = await contact_Book.updateOne(req.params,{
            $push:{phones:req.body}
        } )
        res.send(contact)
        
    } catch (error) {
        res.send(error.message);

    }
})

router.get('/get',async(req,res)=>{
    try {
        const contact = await contact_Book.find({});
  res.send(contact);
      
    } catch (error) {
        res.send(error.message);

        
    }
})

router.put('/edit/:_id',async(req,res)=>{
    try {

        const{error}= validate.edit_contact.validate(req.body);

        if(error){
            return res.send(error.message)
        }

        const contact = await contact_Book.updateOne(req.params,
            {
            $set:{...req.body}
            }
            );  

      
          res.send(contact);

        
    } catch (error) {
       res.send(error.message);
        
    }
})
router.put('/update/:_id',async(req,res)=>{
    try {

        const{error}= validate.update_contact.validate(req.body);

        if(error){
            return res.send(error.message)
        }

        const contact = await contact_Book.updateOne(
            req.params,
            {
              $set: { "phones.$[element].type": req.body.type },
            },
            {
              arrayFilters: [{ "element.phone": req.body.phone }],
            }
          );
      
          res.send(contact);

        
    } catch (error) {
       res.send(error.message);
        
    }
})

router.delete("/delete/:_id", async (req, res) => {
    try {
      const contact = await contact_Book.updateOne(req.params, {
        $pull: { phones: req.body },
      });
      res.send(contact);
    } catch (error) {
      res.send(error.message);
    }
  });


router.delete("/remove/:_id",async(req,res)=>{
    try {
        const data = await contact_Book.deleteOne(req.params);
  res.send(data);
    } catch (error) {
        res.send(error.message)
    }
})

module.exports=router;
