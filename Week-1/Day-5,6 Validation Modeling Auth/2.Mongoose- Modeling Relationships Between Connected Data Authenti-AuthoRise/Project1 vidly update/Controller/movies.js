const { Movie, validate } = require('../Models/movie')
const { Genre } = require("../Models/genre")
const express = require('express');
const router = express.Router();
const { mongo, default: mongoose } = require('mongoose');

//get
router.get('/movie', async (req, res) => {
  const movieget = await Movie.find();
  res.send(movieget)
})

//get by id
router.get('/movie/:id', async (req, res) => {
  const movegetbyId = await Movie.findById(req.params.id).populate('genre');
  if (!movegetbyId) return res.status(404).send('the genre with the given ID was not found')
  res.send(movegetbyId)
})

//post
router.post('/movie', async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid genre')

  let movie = new Movie({
    title: req.body.title,
    genre: genre._id,
    numberInStock: req.body.numberInStock,
    dailyRentalRate: req.body.dailyRentalRate
  })
  movie = await movie.save();

  res.status(200).send(movie)
})

//put
router.put('/movie/:id', async (req, res) => {

  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const movieupdate = await Movie.findByIdAndUpdate(req.params.id,
    {
      name: req.body.name,
      new: true
    })

  if (!movieupdate) res.status(404).send('The genre with the given id is not available')


  res.send(movieupdate);
})

//delete
router.delete("/movie/:id", async (req, res) => {
  try {
    const moviedel = await Movie.findByIdAndDelete(req.params.id)
    if (req.params.id) {
      res.status(400).send('Record is Deleted')
    }
    res.send(moviedel)
  } catch (e) {
    res.status(400).send(e)
  }
})


module.exports = router;