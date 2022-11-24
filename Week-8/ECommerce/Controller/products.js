const { validate, Product } = require("../Model/product")
const express = require('express')
const multer = require("multer")
const logger = require("../config/logger")
const router = express.Router();

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
router.post("/product",upload.single("image"),async(req,res)=>{
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

module.exports = router;