const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const { products } = require("./api");
const HandleErrors = require("./utils/error-handler");

module.exports = async (app, channel) => {

  app.use(express.json());
  app.use(cors());
  app.use(morgan('dev'));

  //all product related api routes
  products(app, channel);

  // error handling
  app.use(HandleErrors);
};