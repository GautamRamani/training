const express=require("express")

const router=express.Router();

router.use("/category",require("../Controller/category"))
router.use("/product",require("../Controller/product"))

module.exports=router;