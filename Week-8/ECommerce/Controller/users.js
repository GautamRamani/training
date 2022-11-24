const { validate, User } = require("../Model/user");
const express = require("express");
const logger = require("../config/logger")
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

//Get
router.get("/users", async (req, res) => {
    try {
        const userList = await User.find()
        if (!userList) {
            res.status(400).json({ success: false })
        }
        res.send(userList)
    } catch (error) {
        logger.error(error)
    }
})

//get by ID
router.get("/user/:id", async (req, res) => {
    try {
        const userbyID = await User.findById(req.params.id)
        if (!userbyID) {
            res.status(400).json({ success: false })
        }
        res.send(userbyID)
    } catch (error) {
        logger.error(error)
    }
})

//Update
router.put("/user/:id", async (req, res) => {
    try {
        // const { error } = validate(req.body)
        // if (error) {
        //     res.status(400).send(error.details[0].message)
        // }
        const userupdate = await User.findByIdAndUpdate(
            req.params.id,
            {
                name:req.body.name,
                email:req.body.email,
                passwordHash:req.body.passwordHash,
                phone:req.body.phone,
                isAdmin:req.body.isAdmin,
                street:req.body.street,
                apartment:req.body.apartment,
                zip:req.body.zip,
                city:req.body.city,
                country:req.body.country
            },
            {new:true}
            )
            if(!userupdate){
                res.status(400).send('User can not be Created')
            }
            res.send(userupdate);
    } catch (error) {
        logger.error(error)
    }
})

//delete
router.delete("/user/:id",async(req,res)=>{
    try {
        let _id=req.params.id
        await User.findByIdAndRemove(_id)
        .then((user)=>{
            if(!user){
                res.status(400).send()
            }
            res.send(user)
        })
        .catch((e)=>{
            res.status(400).send(e)
        })
    } catch (error) {
        logger.error(error)
    }
})

module.exports = router;