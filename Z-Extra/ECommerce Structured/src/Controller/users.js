const { validate, User } = require("../Model/user");
const express = require("express");
const logger = require("../config/logger")
const bcrypt = require("bcryptjs")
const router = express.Router();

//Get
router.get("/admin/users", async (req, res) => {
    try {
        var {page,perpage,search}=req.body;
        var query={};
        var options={
            page:parseInt(page,10)||1,
            limit:parseInt(perpage,10)||10
        }

        if (search) {
            const regex = { $regex: new RegExp(search,'i') };
            query = {
                ...query,
                $or:[
                    {name: regex},
                    {email:regex}
                ]
            }
        }
        
        const userList = await User.paginate(query,options)
        
        if (!userList) {
            res.status(400).json({ success: false })
        }
        res.status(200).json(userList)
    } catch (error) {
        logger.error(error)
    }
})

//Register -Post
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

//get by ID
router.get("/admin/user/:id", async (req, res) => {
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
router.put("/admin/user/:id", async (req, res) => {
    try {
        let userupdate = await User.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                email: req.body.email,
                passwordHash: req.body.passwordHash,
                phone: req.body.phone,
                isAdmin: req.body.isAdmin,
                street: req.body.street,
                apartment: req.body.apartment,
                zip: req.body.zip,
                city: req.body.city,
                country: req.body.country
            },
            { new: true }
        )
        if (!userupdate) {
            res.status(400).send('User can not be Created')
        }
        res.status(200).send(userupdate);
    } catch (error) {
        logger.error(error)
    }
})

//delete
router.delete("/admin/user/:id", async (req, res) => {
    try {
        let _id = req.params.id
        await User.findByIdAndRemove(_id)
            .then((user) => {
                if (!user) {
                    res.status(400).send()
                }
                res.status(200).send([{ message: "Deleted Successfully" }, user])
            })
            .catch((e) => {
                res.status(400).send(e)
            })
    } catch (error) {
        logger.error(error)
    }
})

module.exports = router;