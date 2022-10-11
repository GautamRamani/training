const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

// Now create an API like so, after importing both files.
const validation = require('./validation')
const {
  validate
} = require('./validationMiddleware')

app.post("/", validate(validation.person), (req, res) => {
  res.send("request processed");
});

app.listen(3000, () => {
  console.log("Server Started");
});