var express = require("express");

var router = express.Router();
var aboutSchema = require("../model/AboutModule");

router.get("/rec", (req, res) => {
  aboutSchema.find((err, responce) => {
    if (err)
      res.send("error occured");
    else
      res.send(responce);
  })
})

module.exports = router;