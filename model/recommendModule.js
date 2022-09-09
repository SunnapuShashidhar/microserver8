var mongoose = require('mongoose');


var newRecomendations = mongoose.Schema({
  name: String,
  email: {
    type: String,
    require: true,
    unique: true
  },
  company: String,
  designation: String,
  message: String,

})
module.exports = mongoose.model("recommendations", newRecomendations);