const express = require('express');
const router = express.Router();


/* Router For CRUD Operation. */

router.use('/genre', require("../Controller/genre"));
router.use('/customers', require("../Controller/customers"));
router.use('/movie', require("../Controller/movies"));
router.use('/rentals', require("../Controller/rentals"));
router.use('/user', require("../Controller/user"));


module.exports = router;