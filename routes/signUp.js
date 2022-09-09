var express = require("express");
var { addUser, checkUser } = require("../controller/signUpControl")
var router = express.Router();

router.post("/", async (req, res) => {
  await addUser(req, res);
})
router.get('/checkuser', async (req, res) => {
  await checkUser(req, res);
})

module.exports = router;