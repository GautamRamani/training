const {Genre,validate}=require('../Models/genre')
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { mongo, default: mongoose } = require('mongoose');

//get
router.get('/genre', async(req, res) => {

    // throw new Error('Could not get genre...') //log error winston
  
    const genresget=await Genre.find();
    res.send(genresget)
})

//get by id
router.get('/genre/:id', async(req, res) => {
  const genrebyid=await Genre.findById(req.params.id);
  if(!genrebyid) return res.status(404).send('the genre with the given ID was not found')
  res.send(genrebyid)
})
  
//post
  router.post('/genre', async(req, res) => {
    const { error } = validate(req.body);
  
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
      let genreadd = new Genre({name:req.body.name})
      genreadd=await genreadd.save();

    res.status(200).send(genreadd)
  })
  
  //put
  router.put('/genre/:id',async(req, res) => {
    
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const genreupdate=await Genre.findByIdAndUpdate(req.params.id,
      {
      name:req.body.name,
      new:true
    })
  
    if (!genreupdate) res.status(404).send('The genre with the given id is not available')
    

    res.send(genreupdate);
  })

  router.delete('/genre/:id',async (req, res) => {
    // deleting a record 
    let _id= req.params.id;
    await Genre.findByIdAndDelete(_id)
        .then((genre) => {
            if (!genre) {
                res.status(404).send();
            }
            res.send(genre);
        }).catch((e) => {
            res.status(400).send(e);
        });
});
  
  
module.exports = router;