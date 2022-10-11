const {Customer,validate}=require('../Models/customer')
const express = require('express');
const router = express.Router();
const { mongo, default: mongoose } = require('mongoose');

//get
router.get('/customer', async(req, res) => {
  const customerget=await Customer.find();
  res.send(customerget)
})
//get by id
router.get('/customer/:id', async(req, res) => {
  const customerbyid=await Customer.findById(req.params.id);
  if(!customerbyid) return res.status(404).send('the genre with the given ID was not found')
  res.status(200).send(customerbyid)
})

//post
router.post('/customer', async(req, res) => {
    const { error } = validate(req.body);
    
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    let customeradd = new Customer({
        name:req.body.name,
        phone:req.body.phone,
        isGold:req.body.isGold
    })
    customeradd=await customeradd.save();    
    res.status(200).send(customeradd)
})

  //put
  router.put('/customer/:id',async(req, res) => {
    
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const customerupdate=await Customer.findByIdAndUpdate(req.params.id,
      {
      name:req.body.name,
      new:true
    })
  if (!customerupdate) res.status(404).send('The genre with the given id is not available')
    res.send(customerupdate);
  })
  
  //delete
  router.delete("/customer/:id",async (req,res)=>{
    try{
        const customerdel=await Customer.findByIdAndDelete(req.params.id)
        if(req.params.id){
            res.status(400).send('Record is Deleted')
        }
        res.send(customerdel)
    }catch(e){
        res.status(400).send(e)
    }
  })

module.exports = router;