const { validate, User } = require("../Model/user");
const express = require("express");
const logger = require("../config/logger")
const jwt = require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const router = express.Router();

// Login 
router.post("/", async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        logger.error('User not Found')
        return res.status(400).send("The User not found")
    }
    if (user && bcrypt.compareSync(req.body.passwordHash, user.passwordHash)) {
        const secret = process.env.secret;
        const token = jwt.sign({
            userId: user.id,
            // isAdmin:user.isAdmin
        },
            secret,
            { expiresIn: "1d" }
        );
        res.status(200).send({ message: "Successufully Login", user: user.email, token: token })
    } else {
        res.status(400).send("Password is Wrong!")
    }
})

module.exports=router;