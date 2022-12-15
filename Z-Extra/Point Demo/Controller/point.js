const express = require('express');
const { levals } = require('../Model/leval');
const router = express.Router();
const { User } = require("../Model/point")

router.get("/getuser", async (req, res) => {
    try {
        const getuser = await User.find({})
        if (!getuser) {
            res.status(400).send("User not found")
        }
        res.status(200).send(getuser)
    } catch (error) {
        console.log(error)
    }
})

router.post("/userpost", async (req, res) => {
    try {
        const postUser = new User({
            name: req.body.name,
            leval: req.body.leval
        })
        await postUser.save()
            .then((userposted) => {
                res.status(200).send(userposted)
            })
            .catch((err) => {
                console.log(err)
            })
    } catch (error) {
        console.log(error)
    }
})

router.put("/addpoint", async (req, res) => {
    try {
        var getUser = await User.find({})

        const levalData = await levals.find({})

        for (let i = 0; i < getUser.length; i++) {
            let point = levalData[0].leval.filter((allLeval) => {
                if (getUser[i].leval == allLeval.lvl) {
                    return allLeval.point
                }
            })[0]['point']
            var savedata = await User.findOneAndUpdate(
                { _id: getUser[i].id },
                { point: point }
            )
        }
        var getUser = await User.find({})
        res.status(200).send(getUser)
    } catch (error) {
        console.log(error)
    }
})

router.delete("/deluser/:id", async (req, res) => {
    try {
        let id = req.params.id;
        const deletelUser = await User.findByIdAndRemove(id)
            .then((deletelUser) => {
                if (!deletelUser) {
                    res.status(400).send("User Not Found")
                }
                res.send(deletelUser)
            })
            .catch((error) => {
                res.status(400).send(error)
            })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete("/deleteusers", async (req, res) => {
    try {
        const deleleuers = await User.remove({})
        res.send(deleleuers)
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router;