var express = require("express");

var router = express.Router();
var cantactSchema = require("../model/contactModule");


router.post("/", (req, res) => {
  var cantact = new cantactSchema({
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
  })

  cantact.save((err, responce) => {
    if (err)
      res.send("error occured");
    else
      res.send({ responce, isSuccessful: true });
  })
})

module.exports = router;

