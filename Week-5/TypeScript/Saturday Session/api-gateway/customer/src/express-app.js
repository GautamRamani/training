const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { customer } = require('./api');
const HandleErrors = require("./utils/error-handler");

module.exports = async (app, channel) => {

    app.use(express.json());
    app.use(cors());
    app.use(morgan('dev'));

    //all customer api routes
    customer(app, channel);

    // error handling
    app.use(HandleErrors);
}