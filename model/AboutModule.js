var mongoose = require("mongoose");


var aboutSchema = mongoose.Schema({
  question: String,
  answer: String
})


module.exports = mongoose.model("about", aboutSchema);