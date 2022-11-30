const express = require('express')
const { Product } = require("../Model/product")
const { User } = require("../Model/user");
const logger = require("../config/logger")
const router = express.Router();

//Get Products
router.get("/user/product", async (req, res) => {
    try {
        var { page, perpage, searchText } = req.query;
        var query = {}
        var options = {
            page: parseInt(page, 10) || 1,
            limit: parseInt(perpage, 10) || 10
        }

        if (searchText) {
            const regex = { $regex: new RegExp('^' + searchText + '', 'i') };
            query = {
                ...query,

                productName: regex

            };
        }

        const getproduct = await Product.paginate(query, options)

        if (!getproduct) {
            res.status(400).send({ success: false })
        }
        res.status(200).json(getproduct)
    }
    catch (error) {
        logger.error(error)
    }
})

router.get("/user/product/search", async (req, res) => {
    try {
        var { page, perpage } = req.query;
        var query = {}
        var options = {
            page: parseInt(page, 10) || 1,
            limit: parseInt(perpage, 10) || 10
        }
        const getproduct = await Product.paginate(query, options)

        if (!getproduct) {
            res.status(400).send({ success: false })
        }
        res.status(200).json(getproduct)
    } catch (error) {
        logger.error(error)
    }
})


//Get User Profile
router.get("/user/profile", async (req, res) => {
    try {
        var { page, perpage } = req.query;
        var query = {};
        var options = {
            page: parseInt(page, 10) || 1,
            limit: parseInt(perpage, 10) || 10
        }
        const userList = await User.paginate(query, options)

        if (!userList) {
            res.status(400).json({ success: false })
        }
        res.status(200).json(userList)
    } catch (error) {
        logger.error(error)
    }
})

//Get User Profile by ID
router.get("/user/profile/:id", async (req, res) => {
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

//Update User Profile

router.put("/profile/:id", async (req, res) => {
    try {
        const userupdate = await User.findByIdAndUpdate(
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
        res.send(userupdate);
    } catch (error) {
        logger.error(error)
    }
})

module.exports = router;