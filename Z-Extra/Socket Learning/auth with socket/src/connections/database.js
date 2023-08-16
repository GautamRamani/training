const mongoose = require('mongoose');

const db = async (connectionURL) => {
  try {

    await mongoose.connect(connectionURL, {
      useUnifiedTopology: "true"
    })
    console.log('Connected Successfully...')
    // mongoose.set("debug", true)
  } catch (error) {
    console.log(error);
  }
}

module.exports = db;