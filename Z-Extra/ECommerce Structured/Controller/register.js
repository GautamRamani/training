const { validate, User } = require("../Model/user");
const express = require("express");
const logger = require("../config/logger")
const bcrypt = require("bcryptjs")
const router = express.Router();

//Register -Post
router.post("/", async (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        logger.error(error)
        return res.status(400).send(error.details[0].message);
    }
    // Check if this user already exisits
    let isUserExist = await User.findOne({ email: req.body.email });
    if (isUserExist) {
        logger.error('That user already exists!')
        return res.status(400).send('That user already exists!');
    }
    else {
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            passwordHash: bcrypt.hashSync(req.body.passwordHash, 10),
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,
            street: req.body.street,
            apartment: req.body.apartment,
            zip: req.body.zip,
            city: req.body.city,
            country: req.body.country,
        });
        user = await user.save();
        if (!user) return res.status(400).send("the user cannot be found !");
        res.send(user);
    }
});

module.exports = router;