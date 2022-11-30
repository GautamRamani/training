const { validate, Product } = require("../Model/product")
const express = require('express')
const multer = require("multer")
const logger = require("../config/logger")
const router = express.Router();

//Get
router.get("/admin/product",async(req,res)=>{
    try {        
        var {page,perpage}=req.query;
        var query={}
        var options = {
            page:parseInt(page,10)||1,
            limit:parseInt(perpage,10)||10
        }
        const getproduct = await Product.paginate(query,options)
        
        if(!getproduct){
            res.status(400).send({success:false})
        }
        res.status(200).json(getproduct)
    } catch (error) {
        logger.error(error)
    }
})

const File_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpeg",
    "image/jpg": "jpg"
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isvalid = File_TYPE_MAP[file.mimetype];
        let uploadError = new Error("Invalid image upload")
        if (isvalid) {
            uploadError = null;
        }
        cb(uploadError,'public/uploads')
    },
    filename: function (req,file,cb){
        const filename=file.originalname.split(" ").join("-");
        const extension=File_TYPE_MAP[file.mimetype];
        cb(null,`${filename}-${Date.now()}.${extension}`)
    }
})
const upload=multer({storage:storage})


//Post
router.post("/admin/product",upload.single("image"),async(req,res)=>{
    //First validate the Request
    const { error } = validate(req.body);
    if (error) {
        logger.error(error)
        return res.status(400).send(error.details[0].message);
    }

    const file=req.file;
    if(!file) return res.status(400).send("no image in the request")

    const fileName=file.filename;
    const basePath=`${req.protocol}://${req.get("host")}//public/uploads`;
    // console.log(basePath)

    let product = new Product({
        productName: req.body.productName,
        description: req.body.description,
        image:`${basePath}${fileName}`,
        brand: req.body.brand,
        price: req.body.price,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews
    })
    product = await product.save()
        .then((createProduct) => {
            res.status(200).send(createProduct)
        })
        .catch((err) => {
            logger.error(err)
            res.status(400).send(err)
        })
})

//Get by ID
router.get("/admin/product/:id", async (req, res) => {
    try {
        const productbyID = await Product.findById(req.params.id)
        if (!productbyID) {
            res.status(400).json({ success: false })
        }
        res.send(productbyID)
    } catch (error) {
        logger.error(error)
    }
})

//Put
router.put("/admin/product/:id",async(req,res)=>{
    try {
        const updateproduct=await Product.findByIdAndUpdate(
            req.params.id,
            {
                productName:req.body.productName,
                description:req.body.description,
                brand:req.body.brand,
                price:req.body.price,
                countInStock:req.body.countInStock,
                rating:req.body.rating,
                numReviews:req.body.numReviews
            },
            {new:true}
        )
        if(!updateproduct){
            res.status(400).send("Product can not be Updated")
        }
        res.send(updateproduct)
    } catch (error) {
        logger.error(error)
    }
})

//Delete
router.delete("/admin/product/:id",async(req,res)=>{
    try {
        let _id=req.params.id
        await Product.findByIdAndDelete(_id)
            .then((user)=>{
                if(!user){
                    res.status(400).send()
                }
                res.status(200).send([{message:"Deleted Successfully"},user])
            })
            .catch((e)=>{
                res.status(400).send(e)
            })
    } catch (error) {
        logger.error(error)
    }
})

module.exports = router;