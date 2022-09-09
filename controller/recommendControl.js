var express = require("express");

var router = express.Router();
var newRecomendations = require("../model/recommendModule");
router.get("/rec/", (req, res) => {
  newRecomendations.find((err, responce) => {
    if (err)
      res.send("something went wrong");
    else
      res.send(responce);
  })
})

router.post("/rec/", (req, res) => {

  var newRecommend = new newRecomendations({

    name: req.body.name,
    email: req.body.email,
    company: req.body.company,
    designation: req.body.designation,
    message: req.body.message//message
  })
  newRecommend.save((err, responce) => {

    if (err)
      res.send("error occured");
    else
      res.send({ responce, status: 200, isSuccessful: true });
  })
})
module.exports = router;