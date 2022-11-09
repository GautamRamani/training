const { Book, validate } = require('../Model/contact')
const express = require('express');
const router = express.Router();
const { mongo, default: mongoose } = require('mongoose');

//get
router.get("/contact", async (req, res) => {
  try {
    const getBook = await Book.find();
    res.send(getBook)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

//get by id
router.get("/contact/:id", async (req, res) => {
  const getBookById = await Book.findById(req.params.id);
  res.send(getBookById)
})

//post
router.post('/contact', async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.send('book validation error' + error.details[0].message);
    }
    const { fullName, phones, city } = req.body;
  
    const book = new Book({
      fullName: fullName,
      phones: phones,
      city: city
    })
    const postBook = await book.save();
    res.send(postBook);
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

//put add
router.put('/contact/:id', async (req, res) => {
  try { 
    const { phones } = req.body;
  
    const putBook = await Book.findByIdAndUpdate({ _id: req.params.id }, {
      $push: {
        phones: phones
      }
    })
    res.send(putBook)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

//put update
router.put('/contact/:id/:id1', async (req, res) => {

  const { home, office } = req.body;
  try {
       let update = await Book.findOneAndUpdate({ _id: req.params.id, 'phones._id': req.params.id1 },
      {
        $set: {
          'phones.$.home': home,
          'phones.$.office': office
        }
      }, {
      new: true
    }
    );
    res.send(update);
  } 
  catch (error) {
    console.log(error)
    res.send(error)
  }
})

//put
router.put('/contact/del/:id/:id1', async (req, res) => {

  const { home, office } = req.body;
  try {
       let update = await Book.findOneAndUpdate({ _id: req.params.id, 'phones._id': req.params.id1 },
      {
        $unset: {
          'phones.$.home': home,
          'phones.$.office': office
        }
      }, {
      new: true
    }
    );
    res.send(update);
  } 
  catch (error) {
    console.log(error)
    res.send(error)
  }
})

//delete
router.delete("/contact/:id/:id1", async (req, res) => {
  try {

    const delBook = await Book.findOneAndUpdate({ _id: req.params.id },
      {
        $pull: {
          phones: {
            _id: { $eq: req.params.id1 }
          }
        }
      },
    );
    res.send(delBook);
  } catch (err) {
    res.send(err)
  }
})

//delete whole
router.delete('/contact/:id',async (req, res) => {
  // deleting a record 
  let _id= req.params.id;
  await Book.findByIdAndDelete(_id)
      .then((deleteBookById) => {
          if (!deleteBookById) {
              res.status(404).send();
          }
          res.send(deleteBookById);
      }).catch((e) => {
          res.status(400).send(e);
      });
});




module.exports = router;