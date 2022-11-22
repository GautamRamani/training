const express=require('express')
const router=express.Router()

router.use("/",require("../Controller/user"))

module.exports=router;