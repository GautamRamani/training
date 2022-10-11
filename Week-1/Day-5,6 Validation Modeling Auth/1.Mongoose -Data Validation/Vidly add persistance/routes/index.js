const express = require('express');
const router = express.Router();


/* Router For CRUD Operation. */
router.use('/', require("../Controller/users"));
router.use('/', require("../Controller/customers"));

module.exports = router;