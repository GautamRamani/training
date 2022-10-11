const {Contact,validate}=require('../Model/contact')
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { mongo, default: mongoose } = require('mongoose');

//get
router.get('/contact', async(req, res) => {

    // throw new Error('Could not get genre...') //log error winston
  
    const contactGet=await Contact.find();
    res.send(contactGet)
})

//get by id
router.get('/contact/:id', async(req, res) => {
  const contactbyId=await Contact.findById(req.params.id);
  if(!contactbyId) return res.status(404).send('the genre with the given ID was not found')
  res.send(contactbyId)
})
  
//post
  router.post('/contact', async(req, res) => {
    const { error } = validate(req.body);
  
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
      let contactAdd = new Contact({
        fullName:req.body.fullName,
        phones:req.body.phones,
        city:req.body.city
      })
      contactAdd=await contactAdd.save();

    res.status(200).send(contactAdd)
  })
  
  // //put
  // router.put('/contact/:id',async(req, res) => {
    
  //   const { error } = validate(req.body);
  //   if (error) {
  //     return res.status(400).send(error.details[0].message);
  //   }

  //   const contactUpdate=await Contact.findByIdAndUpdate(req.params.id,
  //     {
  //     name:req.body.name,
  //     new:true
  //   })
  
  //   if (!contactUpdate) res.status(404).send('The genre with the given id is not available')
    

  //   res.send(contactUpdate);
  // })
  
  // //delete
  // router.delete("/contact/:id",async (req,res)=>{
  //   try{
  //       const contactDel=await Contact.findByIdAndDelete(req.params.id)
  //       if(req.params.id){
  //           res.status(400).send('Record is Deleted')
  //       }
  //       res.send(contactDel)
  //   }catch(e){
  //       res.status(400).send(e)
  //   }
  // })
  
  
module.exports = router;