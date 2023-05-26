const { validate, Product } = require("../Model/product")
const express = require('express')
const multer = require("multer")
const fs = require("fs")
const router = express.Router();

//Get
router.get("/getProduct", async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(400).send(err)
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
        cb(uploadError, 'public/uploads')
    },
    filename: function (req, file, cb) {
        const filename = file.originalname.split(" ").join("-");
        const extension = File_TYPE_MAP[file.mimetype];
        cb(null, `${filename}`)
    }
})
const upload = multer({ storage: storage })


//Post
router.post("/createProduct", upload.single("image"), async (req, res) => {

    //First validate the Request
    const { error } = validate.validateProduct(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const file = req.file;
    if (!file) return res.status(400).send("no image in the request")

    const fileName = file.originalname;

    let product = new Product({
        productName: req.body.productName,
        description: req.body.description,
        image: fileName,
        price: req.body.price,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
    })
    product = await product.save()
        .then((createProduct) => {
            res.status(200).send(createProduct)
        })
        .catch((err) => {
            res.status(400).send(err)
        })
})

//Get by ID
router.get("/product/:id", async (req, res) => {
    try {
        const productbyID = await Product.findById(req.params.id)
        if (!productbyID) {
            res.status(400).json({ success: false })
        }
        res.send(productbyID)
    } catch (error) {
        res.status(400).send(err)
    }
})

//Put
router.put('/updateProduct', upload.single('image'), async (req, res) => {

    //First validate the Request
    const { error } = validate.validateUpdateProductImage(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const product = await Product.findById({ _id: req.body.productId })

    if (!product) {
        return res.status(500).json({ error: 'Product does not found.' });
    }

    // Delete the old image from public/uploads folder
    const oldImagePath = `public/uploads/${product.image}`;
    console.log(oldImagePath);

    fs.unlink(oldImagePath, (err) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).json({ error: 'Failed to delete old image.' });
        }

        // Upload the new image
        const newImagePath = req.file.originalname;

        // Update the image path in the user object
        product.image = newImagePath;

        // Save the updated user in the database
        product.save((err, updatedProduct) => {
            if (err) {
                // Handle error
                return res.status(500).json({ error: 'Failed to update product.' });
            }

            res.status(200).json(updatedProduct);
        });
    });
});

//Delete
router.delete("/deleteProduct/:id", async (req, res) => {
    try {
        let _id = req.params.id
        await Product.findByIdAndDelete(_id)
            .then((user) => {
                if (!user) {
                    res.status(400).send()
                }
                res.status(200).send([{ message: "Deleted Successfully" }, user])
            })
            .catch((e) => {
                res.status(400).send(e)
            })
    } catch (error) {
        res.status(400).send(err)
    }
})

module.exports = router;