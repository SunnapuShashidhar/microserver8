var mongoose = require("mongoose");
var uniqueValidater = require("mongoose-unique-validator")
const userSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },

  name: { type: String},
  password: { type: String}
})
userSchema.plugin(uniqueValidater);
module.exports = mongoose.model("Users", userSchema)
