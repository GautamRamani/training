const express = require('express');
const cors  = require('cors');
const morgan = require('morgan');
const path = require('path');
const { shopping, appEvents } = require('./api');
const { CreateChannel } = require('./utils')
const HandleErrors = require("./utils/error-handler");

module.exports = async (app) => {

    app.use(express.json());
    app.use(cors());
    app.use(express.static(__dirname + '/public'))
    app.use(morgan('dev'));
    //api
    // appEvents(app);

    const channel = await CreateChannel()

    shopping(app, channel);
    // error handling
    app.use(HandleErrors);
}