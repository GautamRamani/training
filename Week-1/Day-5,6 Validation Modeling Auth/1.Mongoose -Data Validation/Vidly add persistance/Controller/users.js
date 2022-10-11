const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { mongo, default: mongoose } = require('mongoose');


const Genre=new mongoose.model('Genre',new mongoose.Schema({
  name:{
    type:String,
    required:true,
    minlength:5,
    maxlength:50
  }
})
)

//get
router.get('/', async(req, res) => {
  const genresget=await Genre.find();
  res.send(genresget)
})

//get by id
router.get('/:id', async(req, res) => {
  const genrebyid=await Genre.findById(req.params.id);
  if(!genrebyid) return res.status(404).send('the genre with the given ID was not found')
  res.send(genrebyid)
})


  const validateGenre = (genre) => {
    const schema = {
      name: Joi.string().min(3).max(15).required()
    }
    return Joi.validate(genre, schema)
}
  
//post
  router.post('/', async(req, res) => {
    const { error } = validateGenre(req.body);
  
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
      let genreadd = new Genre({name:req.body.name})
      genreadd=await genreadd.save();

    res.status(200).send(genreadd)
  })
  
  //put
  router.put('/:id',async(req, res) => {
    
    const { error } = validateGenre(req.body);
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
  
  //delete
  router.delete("/:id",async (req,res)=>{
    try{
        const genredel=await Genre.findByIdAndDelete(req.params.id)
        if(req.params.id){
            res.status(400).send('Record is Deleted')
        }
        res.send(genredel)
    }catch(e){
        res.status(400).send(e)
    }
  })
  
  
module.exports = router;