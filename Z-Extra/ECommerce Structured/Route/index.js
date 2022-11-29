const express=require('express')
const router=express.Router()

router.use("/api",require("../Controller/users"))
router.use("/api",require("../Controller/products"))
router.use("/register",require("../Controller/register"))
router.use("/login",require("../Controller/login"))

//Client Side
router.use("/api",require("../Controller/client"))

module.exports=router;