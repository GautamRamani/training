const {Rental,validate}=require('../Models/rental')
const {Movie}=require("../Models/movie")
const {Customer}=require("../Models/customer")
const express = require('express');
const router = express.Router();
const { mongo, default: mongoose } = require('mongoose');

//get
router.get('/rental', async(req, res) => {
  const rental=await Rental.find().sort('-dateOut');
  res.send(rental)
})
//get by id
router.get('/rental/:id', async(req, res) => {
  const rentalget=await Rental.findById(req.params.id).populate('customer movie');
  if(!rentalget) return res.status(404).send('the genre with the given ID was not found')
  res.status(200).send(rentalget)
})

//post
router.post('/rental', async(req, res) => {
    const { error } = validate(req.body);
    
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const customer=await Customer.findById(req.body.customerId);
    if(!customer) return res.status(400).send('Invalid Customer')
    
    const movie=await Movie.findById(req.body.movieId);
    if(!movie) return res.status(400).send('Invalid movie')

    if(movie.numberInStock===0) return res.status(400).send('Movie not in Stock')

    let rentaladd = new Rental({
       customer:customer._id,
       movie:movie._id
        })
    rentaladd=await rentaladd.save();    

    movie.numberInStock--;
    movie.save();
    
    res.status(200).send(rentaladd)
})

  //put
  router.put('/rental/:id',async(req, res) => {
    
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const rentalput=await Rental.findByIdAndUpdate(req.params.id,
      {
      name:req.body.name,
      new:true
    })
  if (!rentalput) res.status(404).send('The genre with the given id is not available')
    res.send(rentalput);
  })
  
  //delete
  router.delete("/rental/:id",async (req,res)=>{
    try{
        const rentaldel=await Rental.findByIdAndDelete(req.params.id)
        if(req.params.id){
            res.status(400).send('Record is Deleted')
        }
        res.send(rentaldel)
    }catch(e){
        res.status(400).send(e)
    }
  })

module.exports = router;