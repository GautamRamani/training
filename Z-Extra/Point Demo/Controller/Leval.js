const express = require('express')
const { levals } = require("../Model/leval")
const router = express.Router();

router.get("/getleval", async (req, res) => {
    try {
        const getleval = await levals.find({})
        if (!getleval) {
            res.status(400).send("Leval not found")
        }
        res.status(200).send(getleval)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/postleval', async function (req, res) {
    try {
        const { leval } = req.body
        const postlevel = new levals({
            leval: leval
        })
        await postlevel.save()
            .then((levelposted) => {
                res.send(levelposted)
            })
            .catch((err) => {
                console.log(err)
            })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.put("/addleval/:id", async (req, res) => {
    try {

        const { leval } = req.body

        const addLeval = await levals.findOneAndUpdate(
            { _id: req.params.id },
            {
                $push: {
                    leval: leval
                }
            },
            { new: true }
        )
        .then((addOneLeval)=>{
            if(!addOneLeval){
                res.status(400).send()
            }
            res.status(200).send(addOneLeval)
        })
        
    } catch (error) {
        res.status(400).send(error)
    }
})

router.put("/deleteleval/:id/:id1", async (req, res) => {
    try {
        const delLeval = await levals.findOneAndUpdate(
            { _id: req.params.id },
            {
                $pull: {
                    leval: {
                        _id: { $eq: req.params.id1 }
                    }
                }
            },
            { new: true }
        )
        .then((delOneLeval)=>{
            if(!delOneLeval){
                res.status(400).send()
            }
            res.status(200).send(delOneLeval)
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete("/delwhole/:id", async (req, res) => {
    try {
        let id = req.params.id;
        const deletelLeval = await levals.findByIdAndDelete(id)
            .then((delwholeLeval) => {
                if (!delwholeLeval) {
                    res.status(400).send("Leval Not Found")
                }
                res.send(delwholeLeval)
            })
            .catch((error) => {
                res.status(400).send(error)
            })
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;