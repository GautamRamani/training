const mongoose = require("mongoose");
const like = new mongoose.Schema(
  {
    userid: String
  },
  { _id: false }
);

const post = new mongoose.Schema({
  post: String,
  like: Number
});

const schema = new mongoose.Schema({
  name: {
    type: String
  },
  username: {
    type: String
  },
  post:{
    type:[mongoose.Schema.Types.ObjectId],
    ref:"showpost"
  },
  password: {
    type: String
  }
});

module.exports = new mongoose.model("User", schema);
