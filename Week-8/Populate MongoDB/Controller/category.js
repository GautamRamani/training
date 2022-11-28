const express=require("express")
const {Category}=require("../Model/Category")

const router=express.Router();

router.get("/category",async (req,res)=>{
    try {
        const getCategory=await Category.find();
        if(!getCategory) return res.status(400).send()

        res.status(200).send(getCategory)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post("/category",async (req,res)=>{
    try {
        let addcategory=new Category({
            color:req.body.color,
            size:req.body.size,
            icon:req.body.icon
        })
        addcategory=await addcategory.save()
        .then((added)=>{
            res.status(200).send(added)
        })
        .catch((err)=>{
            res.status(400).send(err)
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports=router;