const {Genre,validate}=require('../Models/genre')
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { mongo, default: mongoose } = require('mongoose');
const logger=require("../config/logger")

//get
router.get('/genre', async(req, res) => {
    try {
      const genresget=await Genre.find();
      res.send(genresget)
    } catch (error) {
      console.log(error)
      logger.error("error",error)
    }
})

//get by id
router.get('/genre/:id', async(req, res) => {
  try {
    const genrebyid=await Genre.findById(req.params.id);
    if(!genrebyid) return res.status(404).send('the genre with the given ID was not found')
    res.send(genrebyid)
  } catch (error) {
    console.log(error)
    logger.error("error",error)
  }
})
  
//post
  router.post('/genre', async(req, res) => {
    try {
      const { error } = validate(req.body);
    
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
        let genreadd = new Genre({name:req.body.name})
        genreadd=await genreadd.save();
  
      res.status(200).send(genreadd)
    } catch (error) {
      console.log(error)
      logger.error("error",error)
    }
  })
  
  //put
  router.put('/genre/:id',async(req, res) => {
    try {
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

    } catch (error) {
      console.log(error)
      logger.error("error",error)
    }
  })

  router.delete('/genre/:id',async (req, res) => {
    try {
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
    } catch (error) {
      console.log(error)
      logger.error("error",error)
    }
});
  
  
module.exports = router;