var express = require('express');
var router = express.Router();
var { getCityList, addcity } = require('../controller/citylistController');

/* GET users listing. */

router.get('/', (req, res, next) => {
    getCityList(req, res, next);
});

router.get('/getcitylist', (req, res, next) => {
    getCityList(req, res, next);
});

router.post('/addCity', (req, res, next) => {
    addcity(req, res, next);
});

module.exports = router;
