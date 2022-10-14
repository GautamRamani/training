const express = require('express');
const { Book ,validate} = require('../middleware/contactBook');
const router = express.Router();

router.get('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.send('genre validation error' + error.details[0].message);
    }
    const { fullName, phones, city } = req.body;

    const book = new Book({
        fullName: fullName,
        phones: phones,
        city: city
    })
    const save = await book.save();
    res.send(save);
})

router.post('/:id', async (req, res) => {
    const { phones } = req.body;

    // const phone = await Book.findOne({ _id: req.params.id });
    // console.log(phone);
    // phone.phones.push(phones);
    // const save = await phone.save();

    //    let save = await Book.findOneAndUpdate({_id:req.params.id,'phones.type':req.body.type},{$set:{phones:{type:req.body.}}});

    const save = await Book.findOneAndUpdate({ _id: req.params.id }, {
        $push: {
            phones: phones
        }
    })



    res.send(save);

})

router.put('/:id/:id1', async (req, res) => {
    // const { phones, type } = req.body;
    // const phoneBook = await Book.findOne({ _id: req.params.id });
    // const phone = phoneBook.phones;
    // const newPhone = phone.find((value) => value._id == req.params.id1);
    // newPhone.type = type;
    // newPhone.phone = phones;

    const save = await Book.findOneAndUpdate({ _id: req.params.id },
        {
            $set: {
                'phones.$[elem].phone': '0000000000',
                'phones.$[elem].type' : 'office1'
            }
        },
        { arrayFilters: [{ "elem._id": { $eq: req.params.id1 } }] }
    );

    res.send(save);
    console.log(save);

    // await phoneBook.save();

})

router.delete('/:id/:id1', async (req, res) => {
    // const phoneBook = await Book.findOne({ _id: req.params.id });
    // const phone = phoneBook.phones;
    // const newPhone = phone.findIndex((value) => value._id == req.params.id1);
    // console.log(newPhone)
    // phone.splice(newPhone, 1);

    const save = await Book.findOneAndUpdate({ _id: req.params.id },
        {
            $pull: {
                phones:{
                    _id:{$eq:req.params.id1}
                }
            }
        },
    );

    res.send(save);
    console.log(save);

    // await phoneBook.save();


})


module.exports = router;