var userSchema = require("../model/signUpModule");
// import axios from "axios";
var bcrypt = require("bcryptjs")

addUser = (req, res) => {
  var newUser = new userSchema({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  })

  newUser.save((err, responce) => {

    if (err)
      res.send({ message: "error occured", isSuccessful: false });
    else
      res.send({ status: 200, message: "data added successfuly", Users: responce, isSuccessful: true });
  })
}

checkUser = async (req, res) => {
  // try {

  userSchema.findOne({ "email": req.body.email }, (err, responce) => {
    if (err)
      res.send({ isSuccessful: false });
    if ("password" == req.body.password)
      res.send({ isSuccessful: false })
    else
      res.send({ isSuccessful: true })
  });

}

module.exports = { addUser, checkUser };