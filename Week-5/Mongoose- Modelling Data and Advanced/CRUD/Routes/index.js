const express=require("express")
const router=express.Router();

router.use("/",require("../Controller/index"))

module.exports=router;