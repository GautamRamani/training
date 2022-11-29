const express = require('express');
const router = express.Router();


/* Router For CRUD Operation. */
router.use('/genre', require("../Controller/genre"));
router.use('/user', require("../Controller/user"));


module.exports = router;