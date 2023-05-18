const express = require("express")
const router = express.Router();

router.use("/", require("../Controller/products"))

module.exports = router;