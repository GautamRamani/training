const express=require("express")
const {Product}=require("../Model/Product")
const {Category}=require("../Model/Category")
const router=express.Router();

router.get("/product",async (req,res)=>{
    try {
        const getProduct=await Product.find().populate("Category")   //acording to Model/Schema of Product
        if(!getProduct) return res.status(400).send()

        res.status(200).send(getProduct)

    } catch (error) {
        res.status(400).send(error)
    }
})

router.post("/product",async (req,res)=>{
    try {
        const addCategory=await Category.findById(req.body.category);
        if(!addCategory) return res.status(400).send("Invalid category")
        
        const addProduct=new Product({
            ProductName:req.body.productname,        //write productname in BodyPortion
            Category:req.body.category,              //Category is in Model/Schema && Should be write category in BodyPortion
            brand:req.body.brand,
            price:req.body.price,
            rating:req.body.rating
        })
        addProduct=await addProduct.save()
        .then((added)=>{
            res.status(200).send(added)
        })
        .catch((err)=>{
            console.log(err)
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports=router;
