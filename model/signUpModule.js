var mongoose = require("mongoose");
var uniqueValidater = require("mongoose-unique-validator")
const userSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },

  name: { type: String, require: true, unique: true },
  password: { type: String, require: true, unique: true }
})
userSchema.plugin(uniqueValidater);
module.exports = mongoose.model("Users", userSchema)