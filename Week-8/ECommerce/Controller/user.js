const { validate, User } = require("../Model/user");
const express = require("express");
const logger=require("../config/logger")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const router = express.Router();


//Register
router.post("/admin/user", async (req, res) => {
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

//Login 
router.post("/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        logger.error('User not Found')
        return res.status(400).send("The User not found")
    }
    if (user && bcrypt.compareSync(req.body.passwordHash, user.passwordHash)) {
        const secret=process.env.secret;
        const token = jwt.sign({
            userId:user.id,
            // isAdmin:user.isAdmin
        },
            secret,
            { expiresIn: "1d" }
        );
        res.status(200).send({ message:"Successufully Login",user: user.email, token: token })
    } else {
        res.status(400).send("Password is Wrong!")
    }
})

module.exports = router;