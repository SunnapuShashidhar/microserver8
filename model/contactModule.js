var mongoose = require("mongoose");


var cantactSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    require: true,
    unique: true
  },
  description: String,
})

module.exports = mongoose.model("cantacts", cantactSchema);